# Commonshub Platform Architecture v1.0
**Status:** Foundational  
**Scope:** Technical boundaries, control layers, and integration model  
**Last Updated:** 2026-02-11  

---

# 1. Purpose

This document defines:

- What Commonshub controls
- What underlying platforms control
- What Stripe controls
- Where responsibility boundaries exist
- How future capability layers (entitlements, gating) fit

This document does not define economic philosophy (see Economic Model).
This document does not define product behavior (see Product Principles).
This document defines architecture and control layers.

---

# 2. Architectural Overview

Commonshub is not a social network.

It is a:

- Control plane
- Provisioning layer
- Hosting scaffold
- Funding integration layer
- Governance framing layer

It sits above open-source community software.

---

# 3. Core Layers

## Layer 1 — Open Source Community Software

Examples:
- Mastodon
- Owncast
- PeerTube
- Future federated tools

These systems control:

- Social graph
- Posts
- Moderation primitives
- Federation protocols
- User accounts
- Core UI
- Native announcements
- Pinned posts

Commonshub does not rewrite these systems.
It provisions and configures them.

---

## Layer 2 — Infrastructure & Hosting (Commonshub)

Commonshub controls:

- Server provisioning
- Deployment configuration
- Environment variables
- Domain configuration
- SSL certificates
- Backups
- Updates (where applicable)
- Managed hosting

Commonshub does not own user data.
It provides infrastructure.

---

## Layer 3 — Funding Integration (Stripe)

Stripe controls:

- Payment processing
- Billing logic
- Subscription handling
- Payment security
- Compliance
- Disputes
- Payouts

Commonshub controls:

- Stripe Connect onboarding
- Metadata linking payments to communities
- Optional entitlement linking (future)
- Platform fee configuration

Commonshub does not:
- Store card details
- Process payments directly
- Control Stripe’s internal logic

---

## Layer 4 — Commonshub Control Plane

This is the unique layer.

Commonshub controls:

- Setup flows
- Community configuration UI
- Funding configuration UI
- Announcement templates
- Pinned post templates
- Governance framing
- Hosting status dashboard
- Cross-service linking

This layer coordinates, but does not replace, underlying platforms.

---

# 4. Control Boundaries

Clear boundaries prevent confusion.

## Mastodon Controls

- Timeline rendering
- Announcements
- Pinning posts
- Moderation tools
- Federation logic
- Account creation
- Invite logic
- Client compatibility

Commonshub cannot:
- Guarantee client support for announcements
- Modify third-party mobile apps
- Override Mastodon’s federation rules

---

## Stripe Controls

- Payment authorization
- Recurring billing
- Failed payment handling
- Chargebacks
- Tax handling (depending on configuration)

Commonshub cannot:
- Force payment approval
- Override Stripe compliance decisions
- Guarantee payment success

---

## Creator Controls

Creators control:

- Whether funding is enabled
- Whether funding is required (future)
- Pricing
- Access rules (future)
- Messaging
- Community moderation policies
- Content strategy
- Community culture

Commonshub does not override creator governance.

---

# 5. Gating & Entitlement Architecture (Future Layer)

Gating is not native to Mastodon.

To enable gating, a separate entitlement layer is required.

Possible architecture:

1. Stripe subscription → webhook
2. Entitlement record created
3. Access control updated
4. Role or invite logic modified

This would require:

- Middleware
- Account-role mapping
- Invite token gating
- Periodic entitlement verification

This layer does not exist in MVP.

It is an expansion capability.

---

# 6. Announcement & Pinned Post Automation

Current approach (MVP):

- Template copy provided
- Creator manually posts announcement
- Creator manually pins post

Future capability:

- API-triggered announcement creation
- API-triggered pinned post creation
- Auto-regeneration when funding options change

Limitations:

- Dependent on Mastodon API stability
- Dependent on instance permissions
- Not all clients display announcements

---

# 7. Multi-Surface Architecture (Future)

Creators may operate:

- Mastodon (discussion)
- Owncast (live streaming)
- PeerTube (video library)

Commonshub may unify:

- Stripe entitlements
- Shared identity
- Cross-surface access rules

Each surface remains technically independent.

Commonshub becomes the coordinating identity + entitlement layer.

---

# 8. Data Ownership Model

User data lives in:

- Mastodon database
- Stripe records (payments)
- Hosting environment backups

Commonshub does not claim ownership of:

- User posts
- Subscriber data
- Creator revenue
- Community identity

Commonshub provides orchestration and hosting.

---

# 9. MVP Scope (v1)

Included:

- Mastodon provisioning
- Stripe connect
- Optional funding page
- Announcement template
- Pinned post template
- Hosting dashboard

Not Included:

- Automated entitlements
- Paid-only Mastodon gating
- Tier-based role automation
- Cross-service unified login
- API automation of announcements

---

# 10. Design Rule for Expansion

Future features must respect:

- Open-source autonomy
- Creator sovereignty
- Clear control boundaries
- Minimal coupling between systems

Commonshub should coordinate systems,
not tightly bind them in ways that reduce flexibility.

---

# 11. Alignment With Constitution

This architecture reflects the Constitutional principle:

> Commonshub is an integration layer, not a social network.

It provides infrastructure and coordination,
not centralized control of community behavior.
