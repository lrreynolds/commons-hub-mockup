Commonshub Economic Model

Version 1.0 (MVP + Forward-Compatible)

⸻

1. Economic Philosophy

Commonshub exists to enable financially sustainable, non-extractive communities.

Core principles:
	•	Participation is always free by default.
	•	Funding is optional by default.
	•	Creators choose their model.
	•	Commonshub does not impose a single economic philosophy.
	•	Infrastructure must be sustainable.

Commonshub is not anti-revenue.
Commonshub is anti-extractive defaults.

⸻

2. Revenue Model (MVP)

In MVP:
	•	Stripe processes payments.
	•	Stripe Connect accounts belong to creators.
	•	Funds flow directly to creators.
	•	Commonshub takes a platform percentage.

Flow:

Supporter
   ↓
Stripe Checkout
   ↓
Stripe Connect Account (Creator)
   ↓
Creator Bank Account
   ↓
Commonshub platform fee (percentage)

3. Platform Revenue Structure (MVP)

Revenue sources:
	1.	Platform percentage fee on funding
	2.	Hosting fee (future)
	3.	Enterprise / white-label (future)

Not included:
	•	Ads
	•	Data resale
	•	Algorithmic promotion fees

⸻

4. Funding Modes Supported

Commonshub supports multiple economic configurations.

4.1 Optional Funding (Default)
	•	Community is fully open.
	•	Contributions are voluntary.
	•	Funding page is public.
	•	Announcement or pinned post recommended.

This is the baseline model.

⸻

4.2 Hybrid Model (Future-Compatible)
	•	Community remains free.
	•	Paid layers unlock additional benefits.
	•	Examples:
	•	Paid live streams (Owncast)
	•	Paid video library (PeerTube)
	•	Private discussion group

Funding and access are separate systems.

⸻

4.3 Gated Community (Future)
	•	Access requires subscription.
	•	Stripe subscription linked to membership.
	•	Roles updated based on subscription status.

Not included in MVP.

Must be opt-in.

⸻

5. Membership Lifecycle (Conceptual Model)

For subscription-enabled communities (future):

States:
	1.	Trial
	2.	Active
	3.	Past due
	4.	Canceled
	5.	Expired

Lifecycle events:
	•	subscription_created
	•	payment_succeeded
	•	payment_failed
	•	subscription_canceled

Stripe webhooks drive membership state.

Commonshub must never rely solely on frontend flags.

⸻

6. Separation of Concerns

Funding state ≠ access state.

Example flags:
	•	funding_enabled
	•	gated_access_enabled
	•	subscription_active

These must never be collapsed into one boolean.

This preserves:
	•	Optional contribution communities
	•	Hybrid economic models
	•	Full creator sovereignty

⸻

7. Creator Sovereignty

Creators may choose:
	•	Open + voluntary funding
	•	Hybrid monetization
	•	Fully gated membership
	•	Free Mastodon + paid video layer
	•	Donations only
	•	Subscription only
	•	Mixed tiers

Commonshub provides tools.

Commonshub does not dictate model.

⸻

8. Public Messaging Model

Default public framing:
	•	Participation is always free.
	•	Funding helps sustain the space.
	•	No ads.
	•	No tracking.
	•	No algorithms.

If gated mode is enabled in the future:
	•	Access requires subscription.
	•	Terms must be clearly disclosed.
	•	No dark patterns.
	•	Cancellation must be simple.

⸻

9. Platform Risk Management

Commonshub must consider:
	•	Payment disputes
	•	Refund policies
	•	Fraud
	•	Tax compliance
	•	Creator abandonment

Stripe handles:
	•	Payment processing
	•	Dispute management
	•	KYC
	•	Compliance

Commonshub handles:
	•	Instance hosting cost
	•	Platform-level abuse mitigation
	•	Terms of service

⸻

10. Long-Term Economic Evolution

Potential future directions:
	•	Tiered hosting plans
	•	Revenue share tiers
	•	Community grants
	•	Ecosystem revenue sharing
	•	Federation-based funding routing
	•	Creator co-op revenue model

None of these are required for MVP.

⸻

11. Economic Non-Negotiables
	1.	No advertising.
	2.	No data monetization.
	3.	No algorithmic promotion fees.
	4.	No hidden platform cuts.
	5.	Clear disclosure of fees.
	6.	Stripe remains payment processor.
	7.	Funding defaults to optional.
	8.	Access control must be opt-in.

⸻

12. Versioning

Version: 1.0
Status: MVP Baseline

Future versions must document:
	•	Gated membership implementation
	•	Revenue splitting logic
	•	Multi-platform monetization (PeerTube / Owncast)
	•	Enterprise pricing
