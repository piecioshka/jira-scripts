const debug = require("debug");

const console = {
  debug: debug("jira-scripts:debug"),
};

async function makeJsonRequest(url, token, options) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...options,
  });
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

module.exports = {
  makeJsonPostRequest,
  makeJsonGetRequest,
};
