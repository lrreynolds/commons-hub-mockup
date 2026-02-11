# Commonshub — Documentation Index

This directory contains the authoritative product, governance, economic, and architectural documentation for Commonshub.

These documents define how the platform works, how decisions are made, and what is non-negotiable.

If something feels ambiguous, start with the Constitution.

---

# 1. Foundational Documents (Read First)

## 📜 Constitution
**commonshub-constitution-v1.0.md**

Defines:

- What Commonshub is
- What it is not
- Creator sovereignty
- Economic alignment
- Governance boundaries
- Non-negotiables

This is the highest authority document.

If there is a conflict between documents, the Constitution wins.

---

## 💰 Economic & Funding Model
**commonshub-economic-and-funding-model-v1.0.md**

Defines:

- Default funding model (open + optional)
- Creator-defined gating (future capability)
- Membership lifecycle rules
- Announcement copy standards
- Stripe integration principles
- Revenue alignment

This document governs all funding and access decisions.

---

# 2. Product Definition

## 🧭 MVP Scope
**commonshub-mvp-scope-v1.0.md**

Defines:

- What MVP includes
- What MVP explicitly excludes
- What is deferred
- What is non-goal

Use this when scoping work.

---

## 🧠 Product Principles
**commonshub-product-principles-v1.0.md**

Defines:

- UX constraints
- Funding language rules
- Optionality requirements
- Dark pattern prohibitions
- Announcement copy format
- Design guardrails

Use this when making UX or messaging decisions.

---

# 3. System & Architecture

## 🏗 Platform Architecture
**commonshub-platform-architecture-v1.0.md**

Defines:

- Control plane vs social surface
- Mastodon provisioning role
- Stripe platform model
- State boundaries
- Integration assumptions

Audience: backend, infra, senior frontend.

---

## ⚙ Operational Playbook
**commonshub-operational-playbook-v1.0.md**

Defines:

- How instances are provisioned
- How funding state changes propagate
- Announcement regeneration rules
- Failure handling
- Escalation logic

Audience: operations, backend, support.

---

# 4. Governance & Positioning

## 🛡 Governance & Moderation Boundaries
**commonshub-governance-and-moderation-boundaries-v1.0.md**

Defines:

- What creators control
- What Commonshub controls
- What Mastodon controls
- Escalation boundaries
- Platform liability constraints

---

## 🗣 Brand Voice & Messaging
**commonshub-brand-voice-and-messaging-v1.0.md**

Defines:

- Tone constraints
- Announcement formatting
- Funding language rules
- What marketing must not do

---

## 📐 Terms & Positioning Framework
**commonshub-terms-and-positioning-framework-v1.0.md**

Defines:

- Official terminology
- How we describe ourselves
- What we refuse to call ourselves
- Positioning guardrails

---

# 5. Deprecated / Legacy (To Be Removed)

The following earlier MVP handoff documents are superseded by the above:

- mvp-flow.md
- mvp-flow-and-state.md
- community-funding-integration.md
- mastodon-integration-notes.md (to be folded into architecture)
- known-risks-and-unknowns.md (to be folded into operational playbook)

These may be archived once the architecture and playbook are confirmed complete.

---

# Core Platform Principles (Quick Reference)

- Participation is always free (default model)
- Funding is optional (unless creator explicitly gates access)
- No ads
- No tracking
- No algorithmic manipulation
- Creator sovereignty over economic model
- Mastodon (or future federated tools) remain the social surface
- Commonshub is the control plane

---

# How to Navigate This Directory

If you are:

- 🧠 Making a product decision → Start with Product Principles.
- 💰 Touching funding logic → Read Economic & Funding Model.
- 🏗 Changing system architecture → Read Platform Architecture.
- 🛡 Addressing moderation or policy → Read Constitution + Governance.
- 🗣 Writing copy → Read Brand Voice + Economic Model.

---

Commonshub is designed as a coherent system.

Documentation should remain minimal, authoritative, and non-redundant.
If two documents say the same thing, one of them is wrong.
