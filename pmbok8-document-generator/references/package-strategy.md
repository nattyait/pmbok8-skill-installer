# Documentation Package Strategy

Use this guide when the user asks for a documentation package, PMBOK8 document set, requirements package, planning package, or multiple deliverables from live requirements.

## Package Principle

Do not create every possible document at once by default. Create a staged package that helps stakeholders understand what is ready now, what is intentionally deferred, and what event will trigger each future document.

Treat live requirements as a faster substitute for lengthy product discovery. Use visible behavior, flows, APIs, data, configuration, tests, and business notes to produce requirement and planning artifacts for the future application.

## Recommended Folder Structure

Use a structure like this when creating files:

```text
01-current-requirements-and-planning/
02-delivery-definition-and-handoff/
03-governance-and-control/
04-future-phase-templates/
99-index-and-assumptions/
```

If the user asks for fewer documents, keep the same concept but reduce the folders.

## 01 Current Requirements and Planning

Create these when enough live requirement information exists now:

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

Purpose:

- align stakeholders on product intent and MVP boundaries
- convert live behavior into requirements
- prepare QA and engineering for implementation planning
- support sponsor review without overwhelming stakeholders

## 02 Delivery Definition and Handoff

Create these when the user needs implementation planning, QA preparation, or engineering handoff:

- Requirements Management Plan
- API Requirements and Integration Contract
- Data Requirements and Data Dictionary
- Non-Functional Requirements
- QA Preparation Plan
- Engineering Handoff Package
- Delivery Roadmap
- Milestone Schedule
- Work Breakdown Structure

Ask for the intended production technology stack before producing estimates, detailed schedules, API design assumptions, architecture assumptions, or engineering handoff. If the user says any stack is acceptable, provide broad ranges and state that estimates depend on technology selection.

## 03 Governance and Control

Create these when the project is moving toward approval, formal planning, or execution:

- Project Management Plan
- Governance Plan
- Communications Plan
- Change Control Plan
- Issue Log
- Decision Log
- Benefits Realization Plan
- Procurement or Vendor Plan, if relevant

Use these to support delivery governance rather than early discovery.

## 04 Future-Phase Templates

Create templates with known project context filled in, but mark them as future-phase documents when the trigger has not happened yet.

Recommended future templates:

- Change Request: use after approved scope baseline exists
- Status Report: use after execution begins
- Release Readiness Checklist: use before launch or deployment
- Lessons Learned Report: use during retrospectives or closeout
- Project Closeout Report: use at formal closure
- Benefits Realization Report: use after benefits can be measured
- Procurement Documents: use when external vendors or purchases are confirmed

For each deferred document, include:

- purpose
- trigger event
- owner or likely owner
- minimum inputs needed later
- current known project information
- reason it is deferred

## 99 Index and Assumptions

Always include an index or summary when creating a package.

Include:

- package purpose
- documents created now
- documents prepared as templates
- documents deferred
- assumptions
- open decisions
- technology stack status
- recommended next stakeholder review

## Stakeholder-Friendly Delivery

When the user does not specify an exact package, recommend a first package instead of generating everything.

Default first package:

- Requirements Documentation Index
- Product Requirements Document
- User Stories and Acceptance Criteria
- Specification by Example / BDD Scenarios
- Requirements Traceability Matrix
- Scope Statement
- Project Charter
- Risk Register
- Assumptions and Open Questions Log

Then recommend future follow-up packages:

- Engineering and QA handoff package
- Governance and control package
- Execution reporting templates
- Closeout and benefits package
