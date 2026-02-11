Commonshub Platform Architecture

Version 1.0 (MVP)

⸻

1. System Overview

Commonshub is an orchestration and control layer built on top of federated open-source platforms.

In MVP:
	•	Mastodon = social runtime
	•	Stripe = payments processor
	•	Commonshub = control plane + lifecycle manager

Commonshub does not replace Mastodon.
It provisions and configures Mastodon.

⸻

2. High-Level Architecture
   
Creator
   ↓
Commonshub Dashboard (Control Plane)
   ↓
Provisioning Layer
   ↓
Mastodon Instance
   ↓
Public Users

Funding flow:

Supporter
   ↓
Community Funding Page
   ↓
Stripe Checkout
   ↓
Stripe Connect Account
   ↓
Creator Bank Account

3. Core Components (MVP)

3.1 Frontend (Static Mock / Early MVP)

Responsibilities:
	•	Setup wizard
	•	Dashboard state rendering
	•	Funding state rendering
	•	Copy link generation
	•	Announcement pattern display

State is derived from:
	•	commonshub_server_live
	•	commonshub_setup_complete
	•	commonshub_stripe_connected
	•	commonshub_funding_enabled

⸻

3.2 Control Plane (Future Backend)

Responsibilities:
	•	Mastodon instance provisioning
	•	DNS configuration
	•	Admin account creation
	•	Stripe Connect onboarding
	•	Funding configuration persistence
	•	Webhook handling (Stripe)

⸻

3.3 Mastodon Layer

Mastodon handles:
	•	Accounts
	•	Posts
	•	Announcements
	•	Moderation
	•	Federation
	•	Roles

Commonshub does not override Mastodon UX.

Commonshub configures initial defaults only.

⸻

3.4 Stripe Layer

Stripe handles:
	•	Payment processing
	•	Identity verification
	•	Compliance
	•	Payouts
	•	Subscription lifecycle

Commonshub:
	•	Creates Connect accounts
	•	Creates Products/Prices
	•	Receives webhook events
	•	Updates internal state

Commonshub never stores card data.

⸻

4. State Model (MVP)

4.1 Server State
	•	Not provisioned
	•	Provisioned
	•	Live

4.2 Setup State
	•	Not started
	•	In progress
	•	Complete

Stored in:
	•	commonshub_setup_complete

⸻

4.3 Funding State

State A

Stripe not connected

State B

Stripe connected
Funding disabled

State C

Funding enabled

Controlled by:
	•	commonshub_stripe_connected
	•	commonshub_funding_enabled

UI must derive exclusively from these flags.

⸻

5. Funding Flow (MVP)
	1.	Creator clicks “Enable funding”
	2.	Redirect to Stripe Connect
	3.	Stripe onboarding completes
	4.	Redirect back to Commonshub
	5.	Creator enables funding
	6.	Public funding page becomes accessible

Optional:
	•	Creator publishes announcement
	•	Creator pins funding post

⸻

6. Mastodon Integration Boundaries

Commonshub can:
	•	Provision instance
	•	Set instance name
	•	Configure domain
	•	Create admin user
	•	Suggest announcement copy
	•	Suggest pinned post copy

Commonshub cannot:
	•	Force social behavior
	•	Modify Mastodon client UX
	•	Override federation behavior
	•	Change mobile client UI
	•	Enforce algorithmic ranking

⸻

7. Gated Mode (Future)

Not included in MVP.

If implemented, architecture will require:
	•	Subscription validation middleware
	•	Role mapping to Mastodon permissions
	•	Periodic subscription verification
	•	Stripe webhook-driven membership updates

Separation rule:

Funding state and access state must be separate flags.

Example future model:
	•	funding_enabled
	•	gated_access_enabled
	•	subscription_active

Never conflate optional funding with access control.

⸻

8. Security Model

Commonshub does not:
	•	Store payment credentials
	•	Process card data
	•	Store unnecessary PII

Stripe handles:
	•	KYC
	•	Compliance
	•	Charge disputes

Mastodon handles:
	•	User authentication
	•	Session management
	•	Federation security

⸻

9. Deployment Model (Conceptual)

MVP assumptions:
	•	Dedicated Mastodon instances per creator
	•	Subdomain model (creator.commonshub.social)
	•	Future support for custom domains
	•	Managed hosting

Commonshub backend must be able to:
	•	Provision containers
	•	Apply config templates
	•	Persist metadata
	•	Handle Stripe webhooks

⸻

10. System Non-Negotiables
	1.	Commonshub is a control plane.
	2.	Mastodon remains the social engine.
	3.	Stripe remains the payment engine.
	4.	No ads.
	5.	No tracking.
	6.	No algorithmic feed manipulation.
	7.	Funding optional by default.
	8.	Creator sovereignty preserved.

⸻

11. Versioning

Version: 1.0
Status: MVP Architecture Baseline

Future revisions must explicitly track:
	•	Gated access implementation
	•	Multi-platform federation (PeerTube, Owncast)
	•	Subscription-role synchronization
	•	Revenue splitting logic
