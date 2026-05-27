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
- Do not mention POC, proof of concept, prototype, informal working history, code generation, repository analysis, source inspection, or how the initial product idea was created unless the user explicitly asks for that framing.
- Keep the output suitable for sponsor review, PM planning, QA preparation, and engineering handoff for the future application.
- Use future-state language such as "the target application shall", "the proposed solution should", and "the future implementation will".
- Avoid language that implies the current codebase is the production solution.

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
- treat the source as live requirements: a behavioral reference model used to accelerate product discovery, requirements definition, and implementation planning for the real application that will be built later
- avoid describing the repository, files, codebase, source inspection, POC, prototype, or discovery mechanics in the final document unless the user explicitly asks for an audit or technical appendix

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
- convert live requirements into connected artifacts: user story, acceptance criteria, SBE or BDD scenario, API requirement, traceability entry, QA preparation note, and delivery planning input

## Technology Stack and Estimates

Before creating estimates, schedules, implementation plans, API contracts, architecture assumptions, or engineering handoff packages, ask what technology stack will be used for the real implementation when it is not already known.

If the user says any stack is acceptable or does not know yet:

- provide broad ranges rather than precise estimates
- state that estimates depend on frontend, backend, database, hosting, integration, security, and DevOps choices
- keep requirements technology-neutral where possible
- separate technology assumptions from business requirements

## Documentation Package Sequencing

When creating multiple documents, do not generate every possible artifact at once unless the user explicitly asks for a full archive.

- Create a clear document package roadmap.
- Separate documents that are useful now from documents that should remain templates until a future trigger.
- Prefer a stakeholder-friendly first package focused on requirements definition, scope alignment, assumptions, risks, and planning.
- Put future-phase artifacts in a separate folder or section with trigger events such as architecture selection, sprint planning, vendor procurement, formal change control, execution reporting, testing, release readiness, or closeout.
- Explain briefly why each future document is deferred.

## Presentation Output

When generating presentations:

- create a presentation brief before building slides
- tailor the deck to executives, sponsors, clients, steering committees, or senior stakeholders
- focus on business value, target users, future-state solution, MVP scope, roadmap, risks, assumptions, decisions, and next steps
- prefer infographic structures such as journey maps, roadmaps, matrices, capability maps, risk heatmaps, timelines, and decision summaries
- avoid dense paragraph slides
- avoid copying full document sections directly into slides
- keep technical details at summary level unless the audience is engineering or QA
- use presentation tooling to generate `.pptx` when available and verify the deck when possible
- avoid POC, prototype, repository, source-inspection, and code-generation framing unless requested

## Quality Checklist

Before finalizing, check that the output:

- matches the requested document type
- has a clear project purpose or context
- includes owners, decisions, risks, and next steps where relevant
- separates facts from assumptions
- avoids PMI copyrighted text reproduction
- is usable by a real project manager without major rework
- makes requirements traceable and testable when the deliverable concerns requirements or delivery definition
- avoids POC, prototype, repository, and source-inspection framing unless requested
- separates current-ready documents from future-phase templates when producing a package
- asks for or clearly states assumptions about the production technology stack when estimates or implementation planning depend on it
- uses executive-friendly storytelling and infographic structure when the output is a presentation
