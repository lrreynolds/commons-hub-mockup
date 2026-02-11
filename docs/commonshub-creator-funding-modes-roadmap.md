Commonshub Creator Funding Modes Roadmap v1.0

Status: Strategic Direction
Scope: Defines present and future funding models available to creators
Last Updated: 2026-02-11

⸻

1. Purpose

This document defines the funding and access models that Commonshub:
	•	Supports today (MVP)
	•	May support in the future
	•	Will explicitly refuse to support

It exists to:
	•	Preserve creator sovereignty
	•	Prevent architectural confusion
	•	Avoid reactive product decisions
	•	Clarify long-term flexibility

⸻

2. Guiding Principle

Commonshub does not impose a business model.

Commonshub provides infrastructure.

Creators decide:
	•	Whether funding is optional or required
	•	Whether participation is open or gated
	•	Whether monetization is attached to specific surfaces (video, live, etc.)

Commonshub ensures clarity and technical integrity — not economic ideology.

⸻

3. Funding Mode A — Optional Community Funding (MVP)

Description
	•	Participation is free.
	•	Funding is voluntary.
	•	Contributions support hosting and sustainability.
	•	No access is restricted based on payment.

Characteristics
	•	Stripe Connect enabled
	•	Public funding page
	•	Announcement template
	•	Pinned post template
	•	Transparent language requirements

Messaging Rules

Must include:
	•	“Participation is always free.”
	•	“Community funding is optional.”

Must not include:
	•	Scarcity pressure
	•	Urgency pressure
	•	Implied obligation

Status

Implemented in MVP.

⸻

4. Funding Mode B — Gated Community Access (Future)

Description

Access to participate requires:
	•	Active paid membership
	•	Or subscription status

This may apply to:
	•	Entire Mastodon instance
	•	Private federated community
	•	Closed membership server

Characteristics
	•	Subscription-based access
	•	Clear billing integration
	•	Membership lifecycle management
	•	Access enforcement logic

Messaging Requirements

Must clearly state:
	•	“Membership is required to participate.”
	•	“Access requires active subscription.”
	•	“Billing is handled by Stripe.”

No ambiguity.

No implied optionality.

Status

Not included in MVP.
Future architectural expansion only.

⸻

5. Funding Mode C — Hybrid Model (Future)

Description

Creator operates:
	•	A free public Mastodon instance
	•	Paid access surfaces elsewhere

Examples:
	•	Free Mastodon community
	•	Paid live streams (Owncast)
	•	Paid video library (PeerTube)
	•	Paid premium channel inside community

Characteristics
	•	Multiple access layers
	•	Stripe-managed subscriptions
	•	Selective access control
	•	Cross-surface identity linking

Strategic Importance

This model preserves:
	•	Open participation
	•	Optional premium support
	•	Creator flexibility
	•	Long-term monetization viability

Status

Future roadmap.

⸻

6. Funding Mode D — Patronage-Only (Future)

Description

Funding exists solely as support.

No perks.
No gated content.
No tier logic.

Pure patronage.

Characteristics
	•	One-time or recurring support
	•	Public funding page
	•	No differentiated access

Status

Implicitly supported under Mode A.
May become more explicit in UI later.

⸻

7. What We Will Not Support

Commonshub will not:
	•	Implement algorithmic paywalls
	•	Incentivize engagement manipulation
	•	Support ad-based monetization
	•	Inject platform-owned revenue capture layers
	•	Introduce tokenized speculative systems
	•	Gate access in deceptive ways
	•	Blend “optional” and “required” language

If a funding model introduces opacity or coercion, it violates the Constitution.

⸻

8. Enforcement Philosophy

Commonshub enforces:
	•	Technical clarity
	•	Language clarity
	•	Billing clarity

Creators control:
	•	Economic structure
	•	Community rules
	•	Membership logic (when supported)

⸻

9. Architecture Implications

MVP Architecture assumes:
	•	Funding status does not affect content access.
	•	Stripe connection is independent of Mastodon role logic.
	•	Announcement system is content-only.

Future architecture must allow:
	•	Membership status sync
	•	Role mapping
	•	Access gating
	•	Expiration logic
	•	Grace periods
	•	Subscription lifecycle events

Without compromising sovereignty.

⸻

10. Strategic Positioning

This roadmap allows Commonshub to:
	•	Serve open communities
	•	Serve premium communities
	•	Serve hybrid creator ecosystems
	•	Avoid ideological rigidity
	•	Avoid business model fragility

We empower creators.
We do not dictate their economics.

⸻

11. Decision Framework for Future Expansion

Before adding gated systems, the following must be defined:
	1.	Subscription lifecycle logic
	2.	Billing failure handling
	3.	Refund policy alignment
	4.	Grace periods
	5.	Cross-platform identity linking
	6.	Legal compliance implications
	7.	Creator control surface design

No gating feature will ship without these defined.

⸻

12. Alignment

This roadmap aligns with:
	•	Constitution v1.0
	•	Product Principles v1.0
	•	Economic Model v1.0
	•	MVP Scope v1.0
