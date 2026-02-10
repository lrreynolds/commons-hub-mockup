# Commonshub MVP — Community Funding Integration

This document defines how community funding works in the MVP.

It focuses on:
- Stripe responsibilities
- Funding state machine
- Public funding surfaces
- Interaction with Mastodon

Read alongside:
- mvp-flow-and-state.md
- mastodon-integration.md

---

## Core principles

- Community funding is optional
- Participation is never gated
- No ads, no tracking, no algorithms
- Funding is message-driven, not widget-driven

---

## Stripe responsibilities

Stripe handles:
- Payments
- Subscriptions
- Currencies
- Tax / compliance
- Payouts to creators

Commonshub:
- Never touches card data
- Never holds balances
- Acts as orchestrator only

---

## Stripe connection

### Trigger
Creator clicks **Connect payouts**

### Outcome
- Stripe onboarding completes
- Account is linked to community

### State flag
- `commonshub_stripe_connected = 1`

---

## Funding enablement rules

Community funding can only be enabled if:
1. Stripe is connected
2. A funding post or announcement exists

There is no valid state where funding is “on” without public messaging.

---

## Funding modes (MVP)

Supported:
- Monthly community funding
- One-time contributions

Not in MVP:
- Goal-based campaigns (future)

Amounts:
- $1
- $3
- Other

---

## Public funding surface

### Community funding page

Exists only when:
- Stripe connected
- Funding enabled

Responsibilities:
- Accept contributions
- Invite non-members to join

---

## Mastodon interaction

Funding never injects UI into Mastodon.

All visibility is via:
- Pinned posts
- Announcements
- Links to the community funding page

See **mastodon-integration.md** for feasibility notes.

---

## Failure and fallback

If automation is not possible:
- Creator is guided to post funding message manually
- Commonshub still provides copy and link

This preserves MVP integrity.
