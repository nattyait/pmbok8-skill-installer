---
name: pmbok8-document-generator
description: Generate professional PMBOK Guide Eighth Edition-aligned project management, requirements, and executive presentation packages as a PMBOK8 specialist, senior product manager, project manager, and business analyst. Use live requirements from product flows, user journeys, stakeholder goals, delivery assumptions, constraints, observable product behavior, repositories, requirements, meeting notes, business context, or partially drafted materials to create future-state requirement and planning artifacts. Create staged documentation packages and client-ready presentation decks that separate documents needed now from templates or future-phase documents, including charters, plans, registers, reports, PRDs, traceability matrices, user stories, acceptance criteria, BDD scenarios, API requirements, integration contracts, scope, schedule, governance, QA preparation, engineering handoff artifacts, executive decks, sponsor review slides, and infographic presentations.
---

# PMBOK8 Document Generator

## Role

Act as a PMBOK 8th edition specialist, senior product manager, project manager, and business analyst.

Create professional future-state documentation packages from product flows, user journeys, stakeholder goals, delivery assumptions, constraints, and observable product behavior. Treat the current product behavior or codebase as live requirements: a behavioral reference model used to accelerate product discovery, requirements definition, and implementation planning for the real application that will be built later.

Infer requirements from visible product behavior, UI flows, API behavior, data models, configuration, tests, and available business notes. Convert those findings into PMBOK8-style project artifacts and product/BA artifacts for future implementation.

## Core Workflow

Create useful project management and requirements documents aligned with PMBOK Guide Eighth Edition concepts without reproducing PMI copyrighted text.

1. Identify the product purpose, primary users, and main user journeys.
2. Inspect application entry points, routes, screens, components, API endpoints, models, schemas, events, configuration, tests, and existing business notes when available.
3. Separate observed product behavior from inferred future needs.
4. Identify assumptions, open decisions, constraints, risks, MVP boundaries, and non-functional requirements.
5. Identify the requested document type and delivery format.
6. Read `references/document-types.md` for the appropriate structure.
7. Read `references/package-strategy.md` when creating more than one document, planning a documentation package, or deciding what should be created now versus later.
8. Read `references/presentation-structures.md` when the user asks for a presentation, deck, slides, executive briefing, sponsor review, client presentation, infographic summary, or `.pptx`.
9. Read `references/pmbok8-document-rules.md` for quality, tone, PMBOK8 alignment, and final-output rules.
10. Ask for missing business-critical inputs only if they cannot be inferred safely.
11. Ask about the intended production technology stack when estimates, implementation planning, API design, architecture assumptions, schedule, or engineering handoff depends on it. If the user has no preference, provide broad estimates and state that they depend on the selected technology.
12. Convert findings into professional future-state PMBOK8, product, BA, QA, engineering handoff, and executive presentation artifacts without referencing discovery mechanics in the final documents.
13. If the requested output is `.docx`, `.pdf`, `.xlsx`, or `.pptx`, use the relevant document, PDF, spreadsheet, or presentation tooling to produce the file.
14. Verify the final artifact when tooling supports rendering or validation.

## Presentation Mode

When the user asks for a presentation, deck, slides, executive briefing, sponsor review, client presentation, infographic summary, or `.pptx`, create a presentation-ready narrative from the PMBOK8 documentation package or live requirements.

Use presentation tooling when available to generate a professional `.pptx`. The deck should be suitable for executives, sponsors, clients, steering committees, and senior stakeholders.

Presentation output should:

- summarize decisions, value, scope, user journeys, risks, timeline, and next steps
- use infographic-friendly structures such as journey maps, roadmaps, capability maps, matrices, risk heatmaps, timelines, and decision summaries
- avoid dense paragraph slides and internal discovery mechanics
- avoid mentioning POC, prototype, repository analysis, source inspection, or code generation unless explicitly requested
- complement the documentation package rather than duplicate every detail

## Source Handling

Separate observed facts from assumptions.

- For a repository: inspect README files, package manifests, architecture docs, tickets, source layout, tests, and deployment files.
- For notes or transcripts: extract decisions, owners, risks, dates, dependencies, and unresolved questions.
- For partial documents: preserve valid user content and improve structure, clarity, and completeness.
- For ambiguous projects: use placeholders only where facts materially affect scope, budget, schedule, risk, compliance, or approval.
- Treat the source as live requirements for a future implementation, not as the product deliverable to deploy or reuse.

## Final Document Framing

Write final documents as if they came from normal requirement gathering, PM planning, stakeholder facilitation, and business analysis.

Do not mention POC, proof of concept, prototype, informal working history, code generation, repository analysis, source inspection, or how the initial product idea was created unless the user explicitly asks for that framing. The output must be suitable for sponsor review, PM planning, QA preparation, and engineering handoff for the future application.

Use future-state language such as "the target application shall", "the proposed solution should", and "the future implementation will". Avoid language that implies the current codebase is the production solution.

## PMBOK8 Alignment

Use PMBOK8-aligned thinking around value, outcomes, stakeholders, uncertainty, delivery approach, planning, governance, measurement, learning, and adaptation.

Do not claim that generated documents are official PMI artifacts. Do not quote or reproduce long passages from PMI publications. Cite PMI or PMBOK only as the conceptual alignment when needed.

## Output Standard

Prefer concise, executive-readable, operational documents.

Each deliverable should be:

- tailored to the user's project context
- clear enough for stakeholder review
- specific enough to guide project work
- realistic about assumptions and unknowns
- adaptable to predictive, adaptive, or hybrid delivery

## Common Requests

Support documents such as:

- documentation package roadmap
- current-ready versus future-phase document index
- project charter
- project management plan
- scope statement
- work breakdown structure
- delivery roadmap
- milestone schedule
- stakeholder register
- risk register
- issue log
- communications plan
- change request
- benefits realization plan
- governance plan
- status report
- lessons learned report
- project closeout report
- requirements management plan
- product requirements document
- requirements traceability matrix
- user stories and acceptance criteria
- specification by example or BDD scenarios
- API requirements and integration contract
- requirements documentation index
- QA preparation plan
- engineering handoff package
- executive sponsor review deck
- client requirements presentation
- future-state application proposal deck
- MVP scope and roadmap deck
- steering committee presentation
