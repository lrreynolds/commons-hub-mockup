Commonshub Product Specification v1.0

Status: Canonical – MVP Build Contract
Last Updated: 2026-02-11

⸻

1. Purpose

This document defines:
	•	What Commonshub MVP builds
	•	What it intentionally excludes
	•	How funding behaves
	•	What state transitions exist
	•	What decision rules protect scope
	•	How this aligns with the Constitution and Economic Model

This document is the authoritative engineering contract for MVP.

If something is not described here, it is not part of MVP.

⸻

2. MVP Definition

MVP is the smallest viable version of Commonshub that:
	1.	Provisions a Mastodon-based community
	2.	Connects Stripe via platform account
	3.	Enables optional community funding
	4.	Surfaces funding via:
	•	Announcement
	•	Pinned post template
	•	Public funding page
	5.	Provides a clean creator dashboard

Nothing beyond this is assumed.

⸻

3. Core System Surfaces

3.1 Creator-Facing Surfaces
	•	Setup Wizard
	•	Creator Dashboard
	•	Funding Settings
	•	Stripe Connection Flow

3.2 Public-Facing Surfaces
	•	Mastodon community
	•	Public funding page
	•	Funding announcement (Mastodon)
	•	Pinned post template

⸻

4. MVP Scope (Non-Negotiable)

4.1 Included in MVP

Community Provisioning
	•	Mastodon instance setup (semi-automated or manual-assisted)
	•	Admin account creation
	•	Basic branding (name, description)
	•	Invite flow

Funding Infrastructure
	•	Stripe Connect (platform account model)
	•	Creator connects Stripe account
	•	Enable/disable community funding
	•	Public funding page generation
	•	Copy funding link
	•	Copy invite link

Announcement Workflow

When funding is enabled:
	•	Generate standard three-line announcement copy
	•	Generate pinned post copy
	•	Provide one-click copy mechanism
	•	Auto-post (optional, future enhancement but not required for MVP)

Creator Dashboard

Creator can:
	•	See hosting status
	•	See Stripe connection status
	•	See funding status
	•	Enable/disable funding
	•	Access funding link
	•	Access invite link

⸻

4.2 Explicitly Out of Scope (MVP)

The following are intentionally excluded:
	•	Hard paywall enforcement
	•	Subscription-gated Mastodon instances
	•	Tiered access systems
	•	Role-based content restrictions
	•	Live stream paywalls
	•	PeerTube integration
	•	Video library gating
	•	Referral systems
	•	Affiliate systems
	•	Algorithmic growth features
	•	Advanced analytics
	•	Multi-tier subscription logic
	•	Automated billing enforcement logic

If it introduces subscription lifecycle complexity, it is not MVP.

⸻

5. Funding Model (MVP)

5.1 Default Mode: Optional Funding
	•	Participation is always free
	•	Funding is optional
	•	No access gating
	•	No feature restriction
	•	No content restriction

Funding is contextual support, not membership enforcement.

⸻

5.2 Future Modes (Not MVP, Not Promised)

Possible future directions:
	•	Optional gated community mode
	•	Membership-required instances
	•	Paid access to live streams
	•	Paid access to video libraries
	•	Tiered contribution models
	•	Subscription state management
	•	Creator-managed access enforcement

These are architectural possibilities, not commitments.

⸻

6. State Model

6.1 Hosting States
	•	Not provisioned
	•	Provisioning
	•	Active

6.2 Stripe States
	•	Not connected
	•	Connected

6.3 Funding States
	•	Disabled
	•	Enabled (optional funding live)

No gating states exist in MVP.

⸻

7. Announcement Copy Pattern (MVP)

Standard three-line format:

If this community is useful to you, support is welcome.
Participation is always free. No ads. No algorithms.
Visit → example.community/support

Rules:
	•	Max 3 lines preferred
	•	No emoji
	•	No hype
	•	No urgency pressure
	•	No exclamation marks
	•	No scarcity language

Pinned post uses same copy but may include brief context.

⸻

8. MVP Design Constraints

MVP must:
	•	Be understandable in under 10 minutes
	•	Avoid billing complexity
	•	Avoid tier logic
	•	Avoid content enforcement logic
	•	Avoid moderation automation complexity
	•	Avoid subscription lifecycle enforcement
	•	Avoid legal ambiguity around paid membership

If a feature increases operational risk or billing complexity, it is not MVP.

⸻

9. Decision Rules

If a feature:
	•	Requires complex subscription state management → Not MVP
	•	Requires content enforcement logic → Not MVP
	•	Requires automated billing sync logic → Not MVP
	•	Requires role-based access control → Not MVP
	•	Can be implemented as simple infrastructure support → Consider MVP

⸻

10. Alignment With Canonical Documents

This Product Spec aligns with:
	•	Constitution v1.0
	•	Economic & Funding Model v1.0
	•	Product Principles v1.0
	•	Design Principles v1.0
	•	Governance & Moderation Boundaries v1.0

If conflict arises:
Constitution overrides Product Spec.

⸻

11. What MVP Proves

MVP proves:
	•	Infrastructure layer works
	•	Stripe integration works
	•	Funding workflow works
	•	Announcement workflow works
	•	Creator dashboard works
	•	Sovereignty model holds

Expansion beyond this foundation must be deliberate, not reactive.

⸻

Final Instruction

If it is not described here,
it is not part of MVP.
