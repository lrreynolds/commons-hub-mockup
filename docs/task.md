# Commonshub MVP — Paid Design & Systems Task

## Context

You’re joining Commonshub at a very early stage.

Commonshub is not a social network.  
It is a control plane that provisions, hosts, and sustains independent Mastodon-based communities — with optional, non-extractive community funding.

Mastodon is the social surface.  
Stripe handles payments.  
Commonshub connects the pieces and provides a calm, creator-first experience.

This task simulates day-one collaboration on the most important part of the MVP.

It is not about shipping production code.  
It is about judgment, systems thinking, clarity, and restraint.

---

## Before Starting

Please read the following documents in `/docs`:

1. **commonshub-product-spec-v1.1.md**  
   The authoritative MVP behavior document.

2. **commonshub-mastodon-integration-mvp-v1.0.md**  
   What Commonshub can and cannot control inside Mastodon.

3. **commonshub-economic-and-funding-model-v1.0.md**  
   Funding philosophy, optionality rules, and boundaries.

4. The existing HTML mockups  
   These are directional — not final designs.

If something feels ambiguous, assume:

- Clarity over cleverness  
- Defaults should always allow progress  
- Mastodon remains the social layer  
- Funding must remain calm and optional  
- Creator sovereignty must be preserved  

---

# The Task

## Goal

Design and document the **Community Funding experience** end-to-end, covering:

- Internal creator experience (dashboard + setup)
- External public experience (funding + onboarding)
- Integration boundaries with Mastodon and Stripe

This is the heart of the Commonshub MVP.

---

# What to Produce

Create a new directory named `task` in the repo.

Inside it, include all three items below.

---

## 1) Funding Flow Walkthrough (Required)

Create a document named:

`funding-flow.md`

This document should clearly walk through the full funding journey.

### On the creator side:

- How funding is enabled from the dashboard
- How Stripe Connect fits into the flow
- What state changes occur at each step
- How the announcement and pinned funding post are created
- What is automated vs what requires fallback

### On the public side:

- How the community funding page functions as:
  - A funding surface
  - A community onboarding ramp
- How non-members are invited to join
- How messaging remains calm and optional
- How participation stays free

For each step, describe:

- What the user sees
- What state changes
- Which system is responsible (Commonshub, Mastodon, or Stripe)
- Where fallback to Mastodon UI may be required

This should read like a walkthrough, not a technical spec.

---

## 2) UI Sketches or Wireframes (Required)

Provide rough UI sketches or wireframes for the following.

### Internal (creator-facing)

- Dashboard before funding is enabled
- Dashboard after funding is enabled
- Funding explainer screen
- Stripe Connect step (conceptual)

### Public (member-facing)

- Community funding landing page
- Example funding announcement
- Example pinned funding post

These can be:

- Simple wireframes
- Annotated screenshots
- Low-fidelity mockups

Polish is not required.  
Clarity and restraint are required.

We are explicitly looking for:

- Clear separation between internal vs public surfaces
- Calm admin UI
- Taste in messaging
- Avoidance of dashboard complexity
- Respect for the optional funding model

---

## 3) Integration Reasoning Notes (Required)

Create a document named:

`integration-notes.md`

Briefly explain how you think about:

- Mastodon constraints (pinning posts, announcements, invite links)
- Stripe constraints (Connect, payouts, funding modes)
- Automation vs fallback decisions
- Where you would avoid building complexity in MVP

You do not need to be correct about every API detail.

We care about:

- How you reason under uncertainty
- Whether you respect system boundaries
- Whether you understand separation of concerns

---

# Time & Scope

- Expected time: 4–6 hours
- This is a paid task
- Do not write production code
- Do not introduce new features beyond MVP
- Do not redesign the entire product

Think of this as:

> “What would you hand to a teammate if you were joining Commonshub tomorrow?”

---

# How We’ll Evaluate

We will look for:

- Clear understanding of product intent
- Respect for constitutional principles
- Clean separation of concerns
- Calm, intentional UX decisions
- Thoughtful tradeoffs
- Restraint

We are not evaluating:

- Visual polish
- Framework choice
- Cleverness
- Feature volume

---

# Submission

Commit your work under the `task` directory.

Keep everything self-contained.  
Add brief comments where helpful.

After review:

- We’ll schedule a follow-up call
- You’ll walk us through your thinking
- We’ll discuss next steps together

---
Each candidate should work in their own fork and submit a PR. Do not collaborate with other applicants.

Thanks for taking this on — we’re excited to see how you think.
