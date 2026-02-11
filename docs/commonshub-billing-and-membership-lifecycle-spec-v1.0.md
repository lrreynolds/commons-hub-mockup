Commonshub Billing and Membership Lifecycle Specification v1.0

Status: Future Architecture Specification
Scope: Defines subscription states, lifecycle handling, and system responsibilities
Last Updated: 2026-02-11

⸻

1. Purpose

This document defines how Commonshub will handle:
	•	Paid memberships
	•	Subscription lifecycle states
	•	Billing failures
	•	Grace periods
	•	Access control transitions
	•	Creator visibility
	•	User experience expectations

This applies only to funding modes that include gated access.

Optional funding (MVP) does not require this lifecycle enforcement.

⸻

2. Design Principles

2.1 Clarity Over Cleverness

Membership state must always be:
	•	Explicit
	•	Observable
	•	Deterministic

No hidden states.
No ambiguous access logic.

⸻

2.2 Billing Is Not Moderation

Payment state must never:
	•	Silently shadow-ban
	•	Partially degrade experience without notice
	•	Create invisible participation limits

Access changes must be clearly communicated.

⸻

2.3 Stripe Is Source of Truth

For paid access:
	•	Stripe subscription state is canonical.
	•	Commonshub mirrors, but does not override, Stripe status.

No internal billing shadow systems.

⸻

3. Subscription States

3.1 Active

Definition:
	•	Stripe subscription status = active

User access:
	•	Full gated access enabled
	•	Role mapping applied
	•	No warnings shown

⸻

3.2 Grace Period

Definition:
	•	Stripe payment failed
	•	Retry window active
	•	Subscription not yet canceled

User access:
	•	Access continues temporarily
	•	Banner shown:
	•	“Payment issue detected. Please update billing to maintain access.”

Duration:
	•	Configurable (default: Stripe retry window)

Creator visibility:
	•	Member flagged as “Grace”

⸻

3.3 Past Due

Definition:
	•	Stripe status = past_due

User access:
	•	Access continues during retry window
	•	Visible notice displayed

System requirement:
	•	No immediate hard cut-off unless Stripe status becomes canceled or unpaid

⸻

3.4 Canceled

Definition:
	•	Subscription canceled
	•	Stripe status = canceled

User access:
	•	Access continues until period end
	•	Notice displayed:
	•	“Your membership ends on [date].”

After period end:
	•	Access revoked
	•	Role removed

⸻

3.5 Expired

Definition:
	•	Billing period ended
	•	No active subscription

User access:
	•	Gated access revoked
	•	Community shows clear message:
	•	“Active membership required.”

No partial access.
No silent restrictions.

⸻

3.6 Refunded

Definition:
	•	Payment refunded via Stripe

Behavior:
	•	Does not automatically revoke access
	•	Creator must manually revoke or rely on Stripe status change

Future clarification required in v2.

⸻

4. Membership Lifecycle Flow

4.1 New Subscription
	1.	User completes Stripe checkout
	2.	Stripe webhook received
	3.	Subscription marked active
	4.	Role assignment applied
	5.	Access enabled

Must be idempotent.
Must tolerate webhook retries.

⸻

4.2 Renewal
	1.	Stripe processes recurring charge
	2.	Webhook confirms renewal
	3.	State remains active

No visible disruption.

⸻

4.3 Failed Payment
	1.	Stripe charge fails
	2.	Status transitions to past_due
	3.	System enters grace period
	4.	Notice displayed to member
	5.	Creator dashboard reflects status

Access maintained during retry.

⸻

4.4 Payment Recovery
	1.	Member updates billing
	2.	Stripe status returns to active
	3.	Grace flag cleared
	4.	No access interruption

⸻

4.5 Cancellation by Member
	1.	Member cancels via Stripe portal
	2.	Status = canceled
	3.	Access maintained until period end
	4.	After end date → expired
	5.	Role removed

⸻

4.6 Cancellation by Creator
	1.	Creator cancels subscription
	2.	Stripe status updated
	3.	Same end-of-period logic applies

No retroactive revocation without explicit decision.

⸻

5. Access Enforcement

5.1 Role Mapping (Mastodon)

For gated Mastodon instances:
	•	Active → Member role
	•	Expired → Role removed
	•	Grace → Role maintained
	•	Canceled → Role maintained until period end

Role removal must be deterministic.

⸻

5.2 Non-Mastodon Surfaces

For Owncast / PeerTube (future):
	•	Access token validated against subscription state
	•	Expired → token invalidated
	•	Active → token valid

No partial streaming access.

⸻

6. Creator Dashboard Requirements

Creators must see:
	•	Active members
	•	Grace members
	•	Canceled (ending soon)
	•	Expired
	•	Revenue totals
	•	Next renewal dates

No opaque billing behavior.

⸻

7. User Experience Requirements

Members must see:
	•	Clear membership status
	•	Next billing date
	•	Cancel link
	•	Update billing link
	•	End date if canceled

No hidden subscription traps.

⸻

8. Failure Handling

8.1 Webhook Failure

System must:
	•	Log failed webhook
	•	Retry processing
	•	Prevent duplicate state transitions

⸻

8.2 Stripe Downtime

System must:
	•	Preserve last known state
	•	Avoid revoking access due to temporary webhook delay

⸻

8.3 Access Revocation Errors

If role removal fails:
	•	Retry
	•	Log
	•	Surface in admin dashboard

Never silently desync.

⸻

9. Security Considerations
	•	Do not store card data
	•	Store only Stripe customer IDs
	•	Validate webhook signatures
	•	Prevent manual state overrides without audit trail

⸻

10. MVP Scope Clarification

MVP (v1):
	•	Optional funding only
	•	No access gating
	•	No membership lifecycle enforcement

This document exists to:
	•	Prevent accidental under-design later
	•	Preserve future optionality
	•	Avoid reactive billing chaos

⸻

11. Expansion Readiness Checklist

Before launching gated mode:
	•	Subscription state mapping finalized
	•	Role automation built
	•	Webhook reliability tested
	•	Creator dashboard implemented
	•	User billing portal integrated
	•	Legal review completed

No gating system launches without all above.

⸻

12. Alignment

This document aligns with:
	•	Constitution v1.0
	•	Creator Funding Modes Roadmap v1.0
	•	Product Principles v1.0
	•	Economic Model v1.0
