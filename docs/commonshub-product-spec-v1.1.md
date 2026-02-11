Commonshub Product Specification v1.1

Status: Canonical Operational Document
Scope: System behavior, MVP scope, lifecycle logic, funding mechanics
Last Updated: 2026-02-11

⸻

1. Purpose

This document defines:
	•	What Commonshub MVP includes
	•	What is intentionally excluded
	•	System states and transitions
	•	Funding lifecycle behavior
	•	Announcement and pinned post logic
	•	Stripe interaction model
	•	Guardrails and enforcement rules
	•	Future gating model boundaries

This document governs system behavior.

It operationalizes the Constitution.

⸻

2. MVP Definition

MVP = The smallest viable system that:
	1.	Provisions a Mastodon-based community
	2.	Connects Stripe via platform account
	3.	Enables optional community funding
	4.	Surfaces funding via:
	•	Funding page
	•	Announcement template
	•	Pinned post template
	5.	Provides a creator dashboard

Nothing beyond this is assumed.

⸻

3. Core System States

# 3. Core System States

---

## 3.1 Server State

| State         | Meaning                          |
|---------------|----------------------------------|
| Provisioning  | Server is being created          |
| Live          | Mastodon instance operational    |
| Suspended     | Hosting paused                   |
| Deleted       | Instance removed                 |

---

## 3.2 Community Setup State

| State        | Meaning                           |
|--------------|-----------------------------------|
| Not Started  | Wizard not begun                  |
| In Progress  | Wizard mid-flow                   |
| Complete     | Branding and welcome complete     |

State flag (MVP mock):

`commonshub_setup_complete`

---

## 3.3 Funding State

| Stripe Connected | Funding Enabled | Effective State |
|------------------|-----------------|-----------------|
| No               | No              | Funding Off     |
| Yes              | No              | Stripe Ready    |
| Yes              | Yes             | Funding Live    |

State flags (MVP mock):

- `commonshub_stripe_connected`
- `commonshub_funding_enabled`

Future: persisted in backend DB.

⸻

4. Funding Lifecycle (MVP)

4.1 Stripe Connected

Trigger:
	•	Stripe Connect successful

System Behavior:
	•	Dashboard reflects “Stripe connected”
	•	Funding remains Off
	•	No announcement created

⸻

4.2 Funding Enabled

Trigger:
	•	Creator turns funding on

System Behavior:
	1.	Dashboard updates to “Funding Live”
	2.	Funding page becomes public
	3.	Creator is shown:
	•	Announcement template
	•	Pinned post template
	4.	Creator manually posts announcement
	5.	Creator manually pins post

System does NOT:
	•	Auto-post without consent
	•	Auto-pin without consent

⸻

4.3 Funding Modified

Trigger:
	•	Creator changes funding options

System Behavior:
	•	No silent public change
	•	Prompt:
“Your funding options changed. Would you like to update your announcement?”

Future:
	•	Regenerate draft announcement
	•	Offer pinned post update

⸻

4.4 Funding Disabled

Trigger:
	•	Creator turns funding off

System Behavior:
	•	Funding page hidden
	•	Dashboard reflects Off
	•	Creator prompted to:
	•	Remove announcement
	•	Unpin post

System does not auto-delete content.

⸻

4.5 Stripe Disconnected

Trigger:
	•	Stripe disconnect webhook

System Behavior:
	•	Funding automatically set to Off
	•	Funding page hidden
	•	Creator notified
	•	Dashboard reflects “Stripe not connected”

⸻

5. Funding Surfaces

5.1 Funding Page Requirements

Funding page must:
	•	State participation is free
	•	State funding is optional
	•	Explain purpose of funding
	•	Include secure payment disclosure
	•	Provide join link

Funding page must not:
	•	Imply mandatory payment
	•	Use urgency tactics
	•	Hide participation path

⸻

5.2 Announcement Template (MVP)

Three-line standard:

Support this community if you’d like.
Participation is always free. No ads.
Visit: https://example.community/funding

Rules:
	•	Max 3 lines preferred
	•	No emoji
	•	No hype
	•	No urgency language
	•	No exclamation marks

⸻

5.3 Pinned Post

Purpose:
	•	Visible in clients where announcements are hidden

Must mirror announcement tone.

System rule:
	•	Suggest pinning when funding enabled
	•	Never auto-pin without explicit consent

⸻

6. Explicitly Out of Scope (MVP)

Not included:
	•	Hard paywalls
	•	Subscription-gated Mastodon instances
	•	Tiered access systems
	•	Role-based content gating
	•	Live stream paywalls
	•	PeerTube gating
	•	Multi-tier contribution logic
	•	Advanced analytics
	•	Algorithmic growth systems

If it introduces subscription enforcement complexity, it is not MVP.

⸻

7. Future Gated Mode (Architectural Allowance)

Future mode may allow:
	•	Membership-required communities
	•	Paid access to content
	•	Tier-based participation

If implemented, system must:
	•	Clearly label community as gated
	•	Clearly state membership requirements
	•	Clarify billing responsibility (Stripe)
	•	Avoid bait-and-switch mechanics

Gating must never be implicit.

⸻

8. Stripe Webhook Model (Future)

Events to handle:
	•	checkout.session.completed
	•	customer.subscription.created
	•	customer.subscription.deleted
	•	account.updated
	•	account.application.deauthorized

System must:
	•	Update funding state
	•	Update entitlement layer (future)
	•	Notify creator

Stripe is source of truth for billing.

⸻

9. State Persistence Model

MVP:
	•	LocalStorage (mock only)

Production:
	•	Backend database authoritative
	•	Stripe webhook authoritative for billing

Never trust client-only state for billing enforcement.

⸻

10. Operational Guardrails

Never:
	•	Auto-enable funding
	•	Auto-gate community
	•	Hide participation path when optional
	•	Remove posts without creator consent
	•	Imply payment requirement when optional

Always:
	•	Preserve clarity
	•	Preserve creator sovereignty
	•	Preserve transparency
	•	Preserve explicit consent

⸻

11. Known Risks (MVP)
	•	Stripe webhook failures
	•	Announcement not posted by creator
	•	Mobile clients ignoring announcements
	•	Creator misunderstanding optionality

Mitigation:
	•	Clear dashboard prompts
	•	Redundant pinned post suggestion
	•	Clear funding page messaging

⸻

12. Decision Rule

If a feature:
	•	Requires subscription state enforcement → Not MVP
	•	Requires content gating logic → Not MVP
	•	Adds billing lifecycle complexity → Not MVP
	•	Can exist as infrastructure support only → Consider

⸻

13. Alignment

This document operationalizes:
	•	Constitution v1.1
	•	Economic and Funding Model
	•	Platform Architecture
	•	Creator Sovereignty

This document governs system behavior.
