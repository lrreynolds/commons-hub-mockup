Commonshub MVP — Paid Design & Systems Task

Context

You’re joining Commonshub at a very early stage.

Commonshub is not a social network.
It is a control plane that provisions, hosts, and sustains independent Mastodon-based communities — with optional, non-extractive community funding.

Mastodon is the social surface.
Stripe handles payments.
Commonshub connects the pieces and provides a calm, creator-first experience.

This task is designed to simulate day-one collaboration on the most important part of the MVP.

It is not about shipping production code.
It is about judgment, taste, systems thinking, and clarity.

⸻

What’s in the repo

Before starting, please read:
	1.	mvp-flow-and-state.md — the authoritative end-to-end product flow
	2.	mastodon-integration.md — what Commonshub can and cannot control via Mastodon
	3.	community-funding-integration.md — Stripe, funding states, and public surfaces
	4.	The existing HTML mockups — these are directional, not final designs

If something feels ambiguous, assume:
	•	Commonshub prefers clarity over cleverness
	•	Defaults should always allow progress
	•	Mastodon remains the place where social interaction happens

⸻

The task

Goal
Design and document the Community Funding experience end-to-end, covering:
	•	Internal creator experience (dashboard + setup)
	•	External public experience (funding + onboarding)
	•	Integration boundaries with Mastodon and Stripe

This is the heart of the Commonshub MVP.

⸻

What to produce

Create a new directory named task in the repo.

Inside it, include all three items below.

⸻

1) Funding flow walkthrough (required)

Create a document named funding-flow.md inside the task directory.

This document should clearly walk through the full funding journey.

On the creator side:
	•	How funding is enabled from the dashboard
	•	How Stripe Connect fits into the flow
	•	What state changes occur at each step
	•	How the pinned funding post or announcement is created

On the public side:
	•	How the community funding page works as both:
	•	A funding surface
	•	A community onboarding ramp
	•	How non-members are invited to join
	•	How messaging stays calm, optional, and non-extractive

For each step, describe:
	•	What the user sees
	•	What state changes
	•	Which system is responsible (Commonshub, Mastodon, or Stripe)
	•	Where fallback to Mastodon UI may be required

This should read like a clear walkthrough, not a spec dump.

⸻

2) UI sketches or wireframes (required)

Provide rough UI sketches or wireframes for the following.

Internal (creator-facing):
	•	Dashboard before funding is enabled
	•	Dashboard after funding is enabled
	•	Funding explainer screen
	•	Stripe connect step (conceptual)

Public (member-facing):
	•	Community funding landing page (funding + onboarding)
	•	Example pinned funding post or announcement

These can be simple wireframes, annotated screenshots, or low-fidelity mockups.

Polish is not required.
Clarity, restraint, and judgment are required.

We’re explicitly looking for:
	•	Separation of internal vs public surfaces
	•	Taste in admin UI vs brand-facing UI
	•	How you avoid over-designing the dashboard
	•	How you treat the public funding page as the creator’s front door

⸻

3) Integration reasoning notes (required)

Create a document named integration-notes.md inside the task directory.

Briefly explain how you think about:
	•	Mastodon constraints (pinning posts, announcements, invite links)
	•	Stripe constraints (connect, payouts, funding modes)
	•	Where automation is realistic vs where fallback is appropriate

You do not need to be correct about every API detail.
We care about how you reason under uncertainty.

⸻

Time & scope
	•	Expected time: 4–6 hours
	•	This is a paid task
	•	Do not write production code
	•	Do not introduce new features beyond the MVP docs
	•	Do not redesign the entire product

Think of this as:
“What would you hand to a teammate if you were joining Commonshub tomorrow?”

⸻

How we’ll evaluate

We’ll look for:
	•	Clear understanding of product intent
	•	Good separation of concerns
	•	Calm, intentional UX decisions
	•	Respect for constraints
	•	Ability to explain tradeoffs
	•	Taste and restraint

We are not scoring:
	•	Visual polish
	•	Framework choices
	•	Cleverness
	•	Feature volume

⸻

Submission

Commit your work under the task directory.
Keep everything self-contained.
Add brief comments where helpful.

After review:
	•	We’ll schedule a follow-up call
	•	You’ll walk us through your thinking
	•	We’ll discuss next steps together

⸻

Thanks for taking this on — we’re excited to see how you think.
