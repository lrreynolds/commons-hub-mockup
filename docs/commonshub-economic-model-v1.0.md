# Commonshub Economic Model v1.0
**Status:** Foundational  
**Scope:** Platform-level economic architecture and creator monetization options  
**Last Updated:** 2026-02-11  

---

## 1. Purpose

This document defines how money flows through Commonshub.

It clarifies:

- How creators can sustain their communities
- What funding models are supported
- How optional gating may work (future)
- How Stripe platform integration functions
- What Commonshub does and does not control

This document does not define philosophy (see Constitution)  
and does not define UI behavior (see Product Principles).

---

# 2. Core Economic Position

Commonshub is economically neutral.

It does not prescribe a single monetization model.

Creators may choose:

1. Free communities
2. Donation-supported communities
3. Hybrid models
4. Fully gated communities (future capability)
5. Mixed multi-surface models (future capability)

Commonshub’s role is to provide infrastructure, not dictate business strategy.

---

# 3. Supported Economic Models

## 3.1 Free Community (No Funding Enabled)

- Community access is open.
- Stripe is not connected.
- No payments are processed.
- Commonshub charges hosting fees where applicable.

This is a fully valid configuration.

---

## 3.2 Donation-Supported Community (Default MVP)

- Participation is always free.
- Funding is optional.
- Stripe connected.
- Monthly or one-time contributions allowed.
- Funding page is publicly accessible.

This is the default MVP configuration.

---

## 3.3 Hybrid Model (Future Expansion)

A creator may operate:

- A free Mastodon community
- Plus paid live streams (Owncast)
- Plus paid video libraries (PeerTube)
- Plus supporter-only benefits

Funding may:
- Support general sustainability
- Unlock specific entitlements
- Unlock access to other surfaces

Commonshub does not require uniform access rules across services.

---

## 3.4 Fully Gated Community (Future Capability)

Creators may choose to:

- Restrict Mastodon instance access to paying members
- Require subscription before invite
- Offer tier-based access

Important:
Commonshub does not mandate gated models.
It merely enables optional gating.

Access enforcement is determined by creator configuration and platform integration capability.

---

# 4. Stripe Platform Architecture

Commonshub operates as a Stripe platform account.

## 4.1 Account Structure

- Creators connect Stripe via Stripe Connect.
- Funds flow directly to creator-controlled accounts.
- Commonshub may collect a platform fee (if configured).
- Stripe fees are separate from platform fees.

## 4.2 Payment Types (MVP)

- Recurring subscriptions
- One-time contributions

Future:
- Tiered memberships
- Entitlement-linked access
- Goal-based campaigns

---

# 5. Platform Fee Model (Placeholder)

Commonshub may collect:

- A percentage-based platform fee
- Or fixed subscription pricing
- Or hybrid model

Fee structure is transparent and visible to creators.

Commonshub does not:
- Take ownership of creator revenue
- Intercept funds without disclosure
- Control payout schedules

---

# 6. Entitlements (Future Layer)

Entitlements are access permissions linked to payments.

Possible future uses:

- Paid Mastodon access
- Supporter-only timelines
- Live stream access
- Video library access
- Private discussion spaces

Entitlements may be:

- Required
- Optional
- Tiered

This is a capability layer, not a mandated business model.

---

# 7. Creator Sovereignty in Monetization

Creators retain authority to decide:

- Whether funding is enabled
- Whether funding is required
- Whether community access is gated
- Whether different surfaces are gated
- Pricing structure
- Tier structure

Commonshub does not impose uniform monetization rules.

---

# 8. What Commonshub Does Not Do

Commonshub does not:

- Mandate paywalls
- Mandate free access
- Force donation framing
- Enforce specific pricing structures
- Control creator messaging
- Override creator monetization decisions

---

# 9. MVP Scope (v1)

Included:
- Optional funding page
- Stripe connect
- Monthly + one-time contributions
- Public support link
- Announcement / pinned post templates

Deferred:
- Entitlement-based gating
- Tier-based access
- Cross-surface access control
- Paid-only Mastodon instances
- Automated role provisioning

---

# 10. Design Principle for Expansion

Future economic features must:

- Preserve creator sovereignty
- Avoid dark patterns
- Remain transparent
- Be configurable
- Not impose a single ideological stance

Economic flexibility must expand over time, not contract.

---

# 11. Alignment With Constitution

This document operationalizes the Constitutional principle:

> Creator sovereignty includes economic sovereignty.

Commonshub enables sustainability mechanisms without dictating them.
