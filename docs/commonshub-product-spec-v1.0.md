Commonshub Product Specification

Version 1.0 (MVP)

⸻

1. Purpose

This document defines the functional behavior, user experience rules, and non-negotiable product constraints for the Commonshub MVP.

It translates the Constitution into implementable product decisions.

Audience:
	•	Product
	•	Frontend engineers
	•	Backend engineers
	•	Designers
	•	Payments integration

⸻

2. Product Model (MVP)

2.1 What Commonshub Is

Commonshub is the control plane for creator-owned federated communities.

In MVP:
	•	Mastodon is the social surface.
	•	Commonshub provisions and configures Mastodon instances.
	•	Commonshub manages funding integration (Stripe).
	•	Commonshub manages setup flows and lifecycle state.

⸻

2.2 What Commonshub Is Not

Commonshub is not:
	•	A social feed
	•	A content algorithm
	•	An advertising platform
	•	A centralized moderation authority
	•	A payment processor

Stripe handles payments.
Mastodon handles social interaction.

⸻

3. MVP Scope

3.1 Included in MVP

A. Server Provisioning
	•	Mastodon instance provisioning
	•	Admin account creation
	•	Domain/subdomain configuration
	•	Basic setup flow

B. Creator Setup Wizard
	•	Plan selection
	•	Community name + address
	•	Launch confirmation

C. Dashboard
	•	Community health
	•	Invite link
	•	Funding state
	•	Funding management entry point

D. Community Funding (Optional)
	•	Stripe Connect onboarding
	•	Enable/disable funding
	•	Monthly + one-time support
	•	Public funding page
	•	Funding link
	•	Funding announcement pattern
	•	Pinned post pattern

⸻

3.2 Explicitly Out of Scope (MVP)
	•	Gated Mastodon membership
	•	Paid-only Mastodon instances
	•	Role-based billing tiers
	•	Automated removal for non-payment
	•	PeerTube integration
	•	Live stream gating
	•	Analytics dashboards
	•	Revenue splits beyond Stripe platform fee

⸻

4. Funding Model

4.1 Default Model (MVP)

Funding is optional.

Participation in the community is always free.

Funding exists to support sustainability — not to gate access.

All funding language must clearly state:
	•	Participation is always free.
	•	Community funding is optional.

⸻

4.2 Funding States

Funding has three states:

State A: Stripe Not Connected
	•	Funding disabled
	•	CTA: “Enable community funding”
	•	Subcopy explains optional nature

State B: Stripe Connected, Funding Off
	•	CTA: “Turn on community funding”
	•	Funding page not public

State C: Funding Live
	•	Funding page public
	•	Dashboard shows:
	•	Visit funding page
	•	Copy funding link
	•	Announcement and pinned post suggested

⸻

5. Announcement & Pinned Post Pattern (MVP)

5.1 Standard Announcement Format

Maximum three lines.

No hype.
No urgency.
No pressure.

Standard format:

Support this community if you’d like.
Participation is always free. No ads. No algorithms.
Visit → https://example.community/funding

Rules:
	•	Max 3 lines preferred
	•	No emoji
	•	No exclamation marks
	•	No scarcity tactics
	•	No implied obligation

⸻

5.2 Pinned Post Pattern

Pinned posts may include slightly more context but must remain calm.

Tone:
	•	Matter-of-fact
	•	No marketing language
	•	No conversion tactics

⸻

6. Future: Gated Mode (Not MVP)

Commonshub may support creator-controlled gated access in the future.

Important:

Commonshub does not impose a single funding model.

Creators may choose:
	•	Fully open community (default)
	•	Open community + paid extras
	•	Gated membership access

If gated mode is implemented:

Language must clearly state:
	•	“Access requires active membership.”
	•	“Membership is required to participate.”
	•	“Billing is handled by Stripe.”

No ambiguity.
No bait-and-switch.

⸻

7. UX Guardrails

7.1 No Dark Patterns

The product must not include:
	•	Countdown timers
	•	Scarcity messaging
	•	“Only 3 spots left”
	•	Emotional guilt triggers
	•	“Support now or lose access” messaging (in default mode)

⸻

7.2 Optionality Must Be Clear

On funding surfaces:

Must include:
	•	Participation is always free.
	•	Community funding is optional.

If gated mode:
	•	Access requirements must be explicit.

⸻

7.3 Creator Sovereignty

Commonshub provides tools.
Creators choose:
	•	Whether funding is enabled
	•	What contribution levels exist
	•	Whether to publish announcements
	•	Whether to gate access (future)

Commonshub does not impose economic structure.

⸻

8. Brand & Voice Constraints

Commonshub voice is:
	•	Calm
	•	Stewardship-oriented
	•	Non-salesy
	•	Non-extractive
	•	Clear

Avoid:
	•	Marketing hype
	•	Growth language
	•	Conversion language
	•	“Monetize your audience” framing

Preferred framing:
	•	Sustain
	•	Support
	•	Stewardship
	•	Community care

⸻

9. State Flags (MVP)

Key client-side states:
	•	commonshub_server_live
	•	commonshub_setup_complete
	•	commonshub_stripe_connected
	•	commonshub_funding_enabled

Funding UI must derive entirely from state flags.

No implicit UI assumptions.

⸻

10. Product Non-Negotiables
	1.	No ads.
	2.	No tracking.
	3.	No algorithms.
	4.	Funding optional by default.
	5.	Creator sovereignty.
	6.	Transparent billing via Stripe.
	7.	Mastodon remains the social layer.
	8.	Commonshub remains the control plane.

⸻

11. Versioning

Version: 1.0
Status: MVP Authoritative Specification

Future versions must update:
	•	Funding models
	•	Gated access capabilities
	•	Additional federated integrations
