# PMBOK8 Document Rules

Use this guide to shape PMBOK8-aligned project documents without reproducing PMI source text.

## Alignment Principles

Emphasize:

- value and outcomes over activity lists
- stakeholder needs and engagement
- uncertainty, risk, assumptions, and constraints
- delivery approach fit: predictive, adaptive, or hybrid
- governance, decision rights, and change control
- measurable success criteria
- learning, feedback, and adaptation
- practical execution guidance

## Writing Style

Use plain professional language.

- Prefer concrete statements over generic PM theory.
- Keep executive summaries short and decision-oriented.
- Use tables for registers, logs, plans, and comparison-heavy content.
- Use bullets for scannable plans and sections with many discrete items.
- Avoid academic explanations unless the user asks for training material.
- Avoid filler sections that do not help the project team act.
- Write as if the documents came from normal requirement gathering, PM planning, stakeholder facilitation, and business analysis.
- Do not mention informal working history, code generation, prototype history, repository analysis, source inspection, or how the initial product idea was created.
- Keep the output suitable for sponsor review, PM planning, QA preparation, and engineering handoff.

## Assumptions and Unknowns

When facts are missing:

- infer cautiously from available materials
- label assumptions explicitly
- add open questions when an answer changes scope, budget, schedule, risk, compliance, or approval
- avoid blocking on minor missing details

## Repository-Based Generation

When generating documents from a codebase:

- inspect README files and project docs first
- inspect application entry points, routes, screens, components, API endpoints, models, schemas, events, configuration, tests, package files, build files, deployment files, and business notes
- identify product purpose, primary users, main user journeys, stakeholder goals, delivery assumptions, constraints, risks, MVP boundaries, and non-functional requirements
- infer requirements from visible product behavior, UI flows, API behavior, data model, configuration, and business notes
- separate observed product behavior from inferred future needs
- translate technical observations into product and delivery language in the final document
- avoid describing the repository, files, codebase, source inspection, or discovery mechanics in the final document unless the user explicitly asks for an audit or technical appendix

## Requirements and Delivery Definition

When generating requirements artifacts:

- make requirements measurable, testable, and uniquely identifiable when practical
- distinguish business, stakeholder, solution, transition, functional, non-functional, data, and integration requirements when useful
- trace requirements to objectives, stakeholders, user stories, tests, and delivery artifacts
- separate requirements from design decisions unless the user explicitly asks for a technical specification
- label acceptance criteria separately from requirement statements
- include non-functional needs such as performance, security, privacy, reliability, usability, accessibility, supportability, and compliance when relevant
- use BDD scenarios for observable behavior and examples where ambiguity is likely
- document open questions, assumptions, dependencies, and out-of-scope items
- preserve existing requirement IDs, story IDs, and terminology from the source materials when available

## Quality Checklist

Before finalizing, check that the output:

- matches the requested document type
- has a clear project purpose or context
- includes owners, decisions, risks, and next steps where relevant
- separates facts from assumptions
- avoids PMI copyrighted text reproduction
- is usable by a real project manager without major rework
- makes requirements traceable and testable when the deliverable concerns requirements or delivery definition
