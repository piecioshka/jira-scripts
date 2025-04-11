# jira-scripts

🔨 Jira utility scripts

## Installation

```bash
cd ~/projects/ # or any workspace what you use
git clone git@github.com:piecioshka/jira-scripts.git

# Bash: please add to `~/.bash_profile`
export PATH="$HOME/projects/jira-scripts/:$PATH"

# Fish: please add to `~/.config/fish/config.fish`
set -gx PATH $HOME/projects/jira-scripts/ $PATH
```

**TIP**: After changing the shell configuration, restart the terminal to apply the new settings.

## Commands

- `get-jira-tokens` - Get all Personal Access Tokens (**use HTTP GET**) — _TIP: could verify if authorization is correct_
- `new-jira-issue` - Create a new ticket (**use HTTP POST**)

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
DEBUG="jira-scripts:*" get-jira-tokens
DEBUG="jira-scripts:*" new-jira-issue
```
