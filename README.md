# jira-scripts

🔨 Jira utility scripts

## Installation

```bash
cd ~/projects/ # or any workspace what you use
git clone git@github.com:piecioshka/jira-scripts.git

# Bash: please add to `~/.bash_profile`
export PATH="$HOME/projects/jira-scripts/bin/:$PATH"

# Fish: please add to `~/.config/fish/config.fish`
set -gx PATH $HOME/projects/jira-scripts/bin/ $PATH
```

**TIP**: After changing the shell configuration, restart the terminal to apply the new settings.

## Commands

- `get-jira-issue <issue_id>` - Get issue details by ID (**use HTTP GET**)
- `get-jira-tokens` - Get all Personal Access Tokens (**use HTTP GET**) — _TIP: could verify if authorization is correct_
- `new-jira-issue <title> [options]` - Create a new ticket (**use HTTP POST**)

### new-jira-issue options

- `-d, --description <text>` - Issue description
- `-a, --assignee <username>` - Assignee username
- `-l, --labels <label1,label2>` - Comma-separated labels
- `-c, --custom-field <key=val>` - Custom field as key=value (can be used multiple times)
- `-t, --issue-type <type>` - Issue type (default: Story)

**Examples:**

```bash
# Basic usage
new-jira-issue "Fix login bug"

# With description and assignee
new-jira-issue "Implement feature" -d "Add user authentication" -a "john.doe"

# With labels and custom issue type
new-jira-issue "Update documentation" -l "docs,urgent" -t "Task"

# With multiple custom fields
new-jira-issue "Story title" -c "customfield_10000=value1" -c "customfield_10001=value2"
```

## Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Create a token on `https://<domain>/secure/ViewProfile.jspa`
4. Copy `.env.example` to `.env`
5. Enter data into `.env` (all values are needed)
6. Add `bin/` to your `PATH` for easy access
7. Run the command! 🎊

## Debugging

To enable debugging, please use the `DEBUG` environment variable.

```bash
DEBUG="jira-scripts:*" get-jira-issue PROJ-123
DEBUG="jira-scripts:*" get-jira-tokens
DEBUG="jira-scripts:*" new-jira-issue "My Issue"
```
