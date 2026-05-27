# PMBOK8 Skill Installer

Install the PMBOK8 Document Generator skill for Claude Code or Codex.

## Install

```bash
npx pmbok8-skill-installer
```

This installs the skill for every supported agent:

```text
~/.claude/skills/pmbok8-document-generator
~/.codex/skills/pmbok8-document-generator
```

After installation, open a new Claude Code or Codex session and use:

```text
Use pmbok8-document-generator to create a requirements documentation package.
```

## Options

```bash
npx pmbok8-skill-installer --no-overwrite
npx pmbok8-skill-installer --agent claude
npx pmbok8-skill-installer --agent codex
npx pmbok8-skill-installer --agent both
```

Use `--no-overwrite` to fail instead of replacing an existing installed copy.

Use `--agent` to choose where the skill is installed. The default is `both`.

## Custom Home Directories

Claude Code default:

```text
~/.claude/skills/pmbok8-document-generator
```

Codex default:

```text
~/.codex/skills/pmbok8-document-generator
```

Set `CLAUDE_HOME` or `CODEX_HOME` to install somewhere else:

```bash
CLAUDE_HOME=/path/to/.claude npx pmbok8-skill-installer
CODEX_HOME=/path/to/.codex npx pmbok8-skill-installer --agent codex
```
