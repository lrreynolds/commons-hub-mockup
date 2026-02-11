Commonshub Governance and Moderation Boundaries v1.0

Status: Foundational Governance Specification
Scope: Defines authority boundaries between Commonshub and Community Operators
Last Updated: 2026-02-11

⸻

1. Purpose

This document defines:
	•	What Community Operators control
	•	What Commonshub controls
	•	How moderation authority is structured
	•	How legal, abuse, and emergency cases are handled
	•	The boundary between infrastructure provider and community steward

This is essential to prevent confusion as Commonshub scales.

⸻

2. Foundational Principle

Commonshub provides infrastructure and operational scaffolding.

Community Operators govern their communities.

Commonshub does not govern speech, membership, or internal norms of individual communities, except where required by law, safety, or infrastructure integrity.

⸻

3. Roles Defined

3.1 Community Operator

The creator, organization, or steward who launches a community via Commonshub.

They control:
	•	Community rules
	•	Moderation policies
	•	Membership policies (open or gated)
	•	Funding model
	•	Content standards
	•	Role assignment within the community

They are responsible for:
	•	Moderation decisions
	•	Enforcing their stated rules
	•	Handling member disputes
	•	Maintaining lawful use

⸻

3.2 Commonshub

Commonshub controls:
	•	Hosting infrastructure
	•	Stripe integration
	•	Technical provisioning
	•	Federated configuration
	•	Security updates
	•	Abuse escalation channel

Commonshub does not:
	•	Override community rules arbitrarily
	•	Inject moderation policies into communities
	•	Impose monetization models
	•	Access private content except for operational necessity

⸻

4. Moderation Authority

4.1 Inside a Community

Primary authority: Community Operator

They may:
	•	Suspend members
	•	Remove members
	•	Modify roles
	•	Change rules
	•	Gate access (if feature enabled)

Commonshub does not second-guess normal moderation decisions.

⸻

4.2 Infrastructure-Level Intervention

Commonshub may intervene only when:
	•	There is credible legal exposure
	•	The instance is distributing illegal content
	•	The instance is facilitating active harm
	•	The instance is being used for coordinated abuse or attacks
	•	Infrastructure security is compromised

Intervention hierarchy:
	1.	Notify Operator
	2.	Request corrective action
	3.	Temporary technical restriction (if necessary)
	4.	Instance suspension (last resort)

⸻

5. Abuse Reporting Model

5.1 Intra-Community Abuse

Members report to:
	•	Community moderators
	•	Community Operator

Commonshub does not serve as first-line moderator.

⸻

5.2 Infrastructure Abuse

If a community:
	•	Refuses to address systemic harm
	•	Violates hosting policy
	•	Exposes legal risk

Commonshub may escalate to platform-level action.

This is rare and documented.

⸻

6. Funding Governance

6.1 Optional Funding (MVP Default)

Community Operator controls:
	•	Whether funding is enabled
	•	Contribution levels
	•	Messaging
	•	Announcements
	•	Pinned posts

Commonshub enforces:
	•	Clear disclosure rules
	•	Optionality language
	•	No deceptive billing practices

⸻

6.2 Gated Access (Future Mode)

If a community chooses gated access:

Community Operator controls:
	•	Pricing
	•	Access rules
	•	Tier structure

Commonshub controls:
	•	Subscription lifecycle enforcement
	•	Stripe integration
	•	Role mapping logic

Commonshub does not:
	•	Set prices
	•	Force gating
	•	Mandate membership models

⸻

7. Legal and Compliance Boundaries

7.1 Operator Responsibility

Community Operators are responsible for:
	•	Content legality
	•	Copyright compliance
	•	Moderation standards
	•	Community safety

⸻

7.2 Commonshub Responsibility

Commonshub is responsible for:
	•	Infrastructure security
	•	Data protection
	•	Stripe compliance
	•	Platform-level abuse handling
	•	Responding to lawful requests

⸻

8. Data Access Boundaries

Community Operators may access:
	•	Public community data
	•	Membership lists
	•	Subscription status (if gated mode enabled)

Commonshub may access:
	•	Operational metadata
	•	Billing status
	•	Infrastructure logs

Commonshub does not read private conversations except:
	•	For technical debugging
	•	For legal compliance
	•	Under documented process

⸻

9. Federation Considerations (Mastodon Context)

Community Operators control:
	•	Federation block lists
	•	Domain policies
	•	Moderation rules

Commonshub may:
	•	Apply emergency domain blocks
	•	Apply platform-level safety protections if necessary

Default stance:

Federation autonomy resides with the Community Operator.

⸻

10. Suspension and Termination

10.1 Community Suspension by Commonshub

Grounds:
	•	Repeated illegal content
	•	Coordinated harassment networks
	•	Payment fraud
	•	Infrastructure abuse

Process:
	1.	Notice
	2.	Response window
	3.	Remediation opportunity
	4.	Suspension (if unresolved)

⸻

10.2 Operator Departure

If a Community Operator leaves:

Options:
	•	Transfer stewardship
	•	Sunset instance
	•	Archive
	•	Migrate

Commonshub must provide structured exit pathways.

⸻

11. Transparency Commitment

Commonshub will maintain:
	•	Public policy documents
	•	Clear escalation procedures
	•	Defined intervention thresholds

No shadow governance.
No silent deplatforming.

⸻

12. Alignment with Constitution

This document operationalizes:
	•	Creator sovereignty
	•	Infrastructure stewardship
	•	Optional funding models
	•	Non-extractive economics
	•	Clear authority boundaries

It ensures Commonshub is:
	•	Empowering
	•	Not controlling
	•	Supportive
	•	Not paternalistic

⸻

13. Future Expansion Considerations

As Owncast, PeerTube, and other services integrate:

This governance boundary model must apply consistently:
	•	Creator governs community
	•	Commonshub governs infrastructure
	•	Billing governed by Stripe
	•	Legal compliance enforced at platform level only when necessary

⸻

14. Status

This document is foundational.

It should be:
	•	Referenced in Terms of Service
	•	Referenced in onboarding materials
	•	Referenced in internal team training
