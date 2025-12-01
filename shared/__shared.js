const debug = require("debug");

const console = {
  debug: debug("jira-scripts:debug"),
};

async function makeRequest(url, token, options) {
  return await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...options,
  });
}

async function makeJsonRequest(url, token, options) {
  const response = await makeRequest(url, token, options);
  return await response.json();
}

async function makeJsonPostRequest(url, token, payload) {
  console.debug(`[REQUEST] POST ${url}`, JSON.stringify({ payload }, null, 2));
  return await makeJsonRequest(url, token, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

async function makeJsonGetRequest(url, token) {
  console.debug(`[REQUEST] GET ${url}`);
  return await makeJsonRequest(url, token, {
    method: "GET",
  });
}

async function makePutRequest(url, token, payload) {
  console.debug(`[REQUEST] PUT ${url}`, JSON.stringify({ payload }, null, 2));
  return await makeRequest(url, token, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

/**
 * Parse custom fields from command line arguments
 * @param {string|string[]} customFieldInputs - Custom field input(s) in format "key=value"
 * @returns {Object} Object with custom field keys and values
 */
function parseCustomFields(customFieldInputs) {
  const customFields = /** @type {Record<string, string>} */ ({});
  if (customFieldInputs) {
    const inputs = Array.isArray(customFieldInputs)
      ? customFieldInputs
      : [customFieldInputs];
    inputs.forEach((input) => {
      const parts = input.split("=");
      if (parts.length === 2) {
        customFields[parts[0]] = parts[1];
      }
    });
  }
  return customFields;
}

module.exports = {
  makeJsonPostRequest,
  makeJsonGetRequest,
  makePutRequest,
  parseCustomFields,
};
