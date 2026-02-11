Commonshub MVP Scope v1.0

Status: Foundational
Scope: Defines what is in MVP, what is not, and what is intentionally deferred
Last Updated: 2026-02-11

⸻

1. Purpose

This document defines:
	•	What Commonshub MVP includes
	•	What is intentionally excluded
	•	What is future-facing but not promised
	•	What we explicitly refuse to build in MVP

This prevents scope drift and protects execution.

⸻

2. MVP Definition

MVP = The smallest viable version of Commonshub that:
	1.	Provisions a Mastodon-based community
	2.	Connects Stripe for funding
	3.	Enables optional community funding
	4.	Surfaces funding via:
	•	Announcement
	•	Pinned post template
	•	Funding page
	5.	Provides a clean creator dashboard

Nothing beyond this is assumed.

⸻

3. Included in MVP

3.1 Community Provisioning
	•	Mastodon instance setup (semi-automated or manual-assisted)
	•	Admin account creation
	•	Basic branding (name, description)
	•	Invite flow

⸻

3.2 Funding Infrastructure
	•	Stripe Connect (platform account model)
	•	Creator connects Stripe account
	•	Enable community funding (optional by default)
	•	Funding page generation
	•	Copy link to funding page

⸻

3.3 Announcement Automation

When funding is enabled:
	•	Generate announcement copy
	•	Generate pinned post copy
	•	Provide one-click copy mechanism
	•	Optionally auto-post via admin account (if implemented later)

⸻

3.4 Dashboard

Creator can:
	•	See hosting status
	•	See Stripe connection status
	•	See funding status
	•	Enable/disable funding
	•	Access funding link
	•	Access invite link

⸻

3.5 Funding Modes (MVP)

Only supported in MVP:
	•	Optional community funding
	•	Public participation remains free

No gating in MVP.

⸻

4. Explicitly Out of Scope (MVP)

The following are intentionally excluded:
	•	Hard paywall enforcement
	•	Subscription-based gated Mastodon instances
	•	Tiered access systems
	•	Role-based content restrictions
	•	Live stream paywalls
	•	PeerTube integration
	•	Video library gating
	•	NFT / token systems
	•	Referral systems
	•	Affiliate systems
	•	Algorithmic growth features
	•	Advanced analytics
	•	Multi-tier funding logic

If it introduces complexity beyond optional funding, it is not MVP.

⸻

5. Future Consideration (Not MVP, Not Promised)

These are possible future directions:
	•	Optional gated community mode
	•	Membership-required instances
	•	Paid access to live streams
	•	Paid access to video libraries
	•	Tiered contribution models
	•	Contribution analytics
	•	Creator subscription management
	•	Federated cross-instance tooling

These are architectural possibilities, not commitments.

⸻

6. MVP Design Constraints

MVP must:
	•	Be understandable in under 10 minutes
	•	Avoid billing complexity
	•	Avoid tier logic
	•	Avoid content access logic
	•	Avoid moderation automation complexity
	•	Avoid legal ambiguity around gated membership

If a feature adds operational risk or billing complexity, it is not MVP.

⸻

7. Non-Negotiable MVP Principles

Even in MVP:
	•	Creator sovereignty is preserved
	•	Funding is framed as optional
	•	No extractive language
	•	No dark patterns
	•	Clear separation between infrastructure and community

⸻

8. Why We Are Not Building Gating in MVP

Reasons:
	1.	Adds billing complexity
	2.	Adds user lifecycle complexity
	3.	Adds enforcement logic
	4.	Adds moderation edge cases
	5.	Increases support burden
	6.	Requires legal clarity around subscriptions

We will not build gated systems until the infrastructure and funding layer are stable.

⸻

9. Decision Rule

If a feature:
	•	Requires complex subscription state management → Not MVP
	•	Requires content enforcement rules → Not MVP
	•	Requires automated billing sync logic → Not MVP
	•	Can be implemented as simple infrastructure support → Consider MVP

⸻

10. Strategic Positioning

MVP proves:
	•	Infrastructure layer works
	•	Funding works
	•	Announcement workflow works
	•	Creator dashboard works
	•	Sovereignty model holds

Once that foundation is stable, expansion becomes responsible — not reactive.

⸻

11. Alignment

This document supports:
	•	Constitution v1.0
	•	Product Principles v1.0
	•	Economic Model v1.0
	•	Brand Voice v1.0
