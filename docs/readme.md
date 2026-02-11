# Commonshub — Canonical Documentation

This repository contains the authoritative documentation for the Commonshub MVP.

The documents are intentionally minimal and structured around a clear hierarchy.

If something feels ambiguous, follow this order:

1. Constitution (why)
2. Product Spec (what + how)
3. Supporting technical docs

---

# 1. Foundation

## commonshub-constitution-v1.0.md

Defines:

- Purpose of Commonshub
- Creator sovereignty
- Optional funding philosophy
- Governance boundaries
- Non-extractive principles

This is the philosophical layer.
All product and design decisions must align with it.

---

# 2. Product Behavior (Canonical)

## commonshub-product-spec-v1.1.md

Defines:

- What MVP includes
- What MVP excludes
- State transitions
- Funding lifecycle
- Announcement & pinned post behavior
- Stripe integration model
- Operational guardrails

This is the execution contract.

If engineers disagree about behavior, this document wins.

---

# 3. Supporting Documents

## commonshub-economic-and-funding-model-v1.0.md

Defines:

- Stripe platform model
- Revenue flow
- Fee structure logic
- Future funding modes
- Creator sovereignty in economic structure

---

## commonshub-design-principles-v1.0.md

Defines:

- UX tone constraints
- Anti-dark-pattern rules
- Simplicity constraints
- Clarity requirements

---

## commonshub-platform-architecture-v1.0.md

Defines:

- System boundaries
- Control plane vs social surface
- Stripe integration architecture
- Mastodon provisioning model

---

## mastodon-integration-notes.md

Practical integration realities:

- What Mastodon API allows
- What must be manual
- What cannot be controlled
- UX implications

---

## known-risks-and-unknowns.md

Operational, legal, and technical uncertainties.
Living document.

---

# 4. Non-Negotiables

- Participation is always free in MVP.
- Funding is optional.
- Creator sovereignty is preserved.
- No dark patterns.
- No algorithmic manipulation.
- Commonshub is infrastructure, not a social network.

---

# 5. Scope Discipline

If a feature:

- Requires subscription enforcement
- Requires access control logic
- Introduces billing complexity
- Adds operational risk

It is not MVP unless explicitly added to the Product Spec.

---

# 6. Versioning

Major philosophy changes require a Constitution version bump.

Behavioral changes require a Product Spec version bump.

Supporting docs may evolve without changing core versions.
