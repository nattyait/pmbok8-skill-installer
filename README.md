# PMBOK8 Skill Installer

Install the PMBOK8 Document Generator skill for Claude Code and Codex with one `npx` command.

This package installs a reusable AI skill that helps turn an existing product flow, working app behavior, repository, UI screens, API behavior, data model, configuration, tests, or business notes into professional PMBOK8-aligned requirement documents, project planning documents, and executive presentation decks.

The skill treats the current codebase or product behavior as **live requirements**: a behavioral reference used to accelerate product discovery and create documentation for a future real implementation. It is not intended to write documents that describe the current codebase as a POC, prototype, or production system.

## What The Skill Does

The PMBOK8 Document Generator acts as a PMBOK 8th edition specialist, senior product manager, project manager, and business analyst.

It can:

- infer user journeys, product flows, business rules, roles, inputs, outputs, edge cases, and constraints from visible application behavior
- convert live requirements into future-state product and project documentation
- create requirement artifacts for sponsor review, PM planning, QA preparation, and engineering handoff
- create executive, sponsor, client, and steering committee presentation decks from the generated documents or live requirements
- separate documents that are useful now from templates that should be used later
- ask for missing project details, such as the intended production technology stack, when estimates or implementation planning depend on it
- keep final documents free from POC, prototype, repository-analysis, or code-generation framing unless explicitly requested

## What Can Be Generated

The skill can generate staged documentation packages instead of overwhelming stakeholders with every possible document at once.

### Current Requirements And Planning

Useful early documents that can often be produced from live requirements:

- Requirements Documentation Index
- Product Requirements Document
- User Stories and Acceptance Criteria
- Specification by Example / BDD Scenarios
- Requirements Traceability Matrix
- Scope Statement
- Project Charter
- Stakeholder Register
- Risk Register
- Assumptions and Open Questions Log

### Delivery Definition And Handoff

Useful when preparing implementation, QA, or engineering handoff:

- Requirements Management Plan
- API Requirements and Integration Contract
- Data Requirements and Data Dictionary
- Non-Functional Requirements
- QA Preparation Plan
- Engineering Handoff Package
- Delivery Roadmap
- Milestone Schedule
- Work Breakdown Structure

### Governance And Control

Useful when the project moves toward approval, formal planning, or execution:

- Project Management Plan
- Governance Plan
- Communications Plan
- Change Control Plan
- Issue Log
- Decision Log
- Benefits Realization Plan
- Procurement or Vendor Plan, if relevant

### Future-Phase Templates

Templates that can be prepared with known project context and completed later:

- Change Request
- Status Report
- Release Readiness Checklist
- Lessons Learned Report
- Project Closeout Report
- Benefits Realization Report
- Procurement Documents

### Executive And Client Presentations

Presentation outputs for sponsor review, client meetings, steering committees, and executive alignment:

- Executive Sponsor Review Deck
- Client Requirements Presentation
- Future-State Application Proposal Deck
- MVP Scope and Roadmap Deck
- Engineering and QA Handoff Summary Deck
- Steering Committee Presentation

The skill is designed to create presentation-ready narratives and can use presentation tooling to generate professional `.pptx` decks when available. Decks should use infographic-friendly layouts such as journey maps, roadmap timelines, capability maps, scope matrices, risk heatmaps, decision summaries, and integration overview diagrams.

## Example Prompts

```text
Use pmbok8-document-generator to create a requirements documentation package from this application.
```

```text
Use pmbok8-document-generator to infer user stories, acceptance criteria, BDD scenarios, and an API requirements contract from this codebase.
```

```text
Use pmbok8-document-generator to create a future-state project charter, scope statement, risk register, and delivery roadmap.
```

```text
Use pmbok8-document-generator to create only the documents stakeholders need now, and list future-phase templates separately.
```

```text
Use pmbok8-document-generator to create an executive sponsor review deck from the generated requirements package.
```

```text
Use pmbok8-document-generator to create a client-ready infographic presentation for the future-state application proposal.
```

## Install

```bash
npx pmbok8-skill-installer
```

By default, this installs the skill for every supported agent:

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

## Notes

The generated documents are PMBOK8-aligned professional project and requirements artifacts. They are not official PMI documents and do not reproduce PMI copyrighted text.
