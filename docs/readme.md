# Commonshub MVP — Engineering Handoff

This directory contains the authoritative product and integration documentation
for the Commonshub MVP.

The docs are intentionally split by concern:

- **Flow & State** — how the product behaves end-to-end
- **Mastodon Integration** — what is and is not controllable in Mastodon
- **Community Funding** — Stripe + funding surfaces and constraints

All documents cross-reference each other.  
If something feels ambiguous, start with **mvp-flow-and-state.md**.

---

## Documents

### MVP Flow & State
**mvp-flow-and-state.md**

The primary spine of the product:
- Setup wizard
- Dashboard states
- Funding states
- Public surfaces
- State flags

Audience: frontend engineers, PMs, designers.

---

### Mastodon Integration Notes
**mastodon-integration.md**

What Commonshub can do via provisioning or API vs what must fall back
to the Mastodon admin UI.

Audience: backend engineers, infra, documentation writers.

---

### Community Funding Integration
**community-funding-integration.md**

How community funding works, including:
- Stripe responsibilities
- Funding state machine
- Public funding surfaces
- Interaction with Mastodon (posts / announcements)

Audience: backend, payments, senior frontend.

---

## Product principles (non-negotiable)

- Participation is always free
- No ads, no tracking, no algorithms
- Funding is optional and contextual
- Mastodon remains the social surface
- Commonshub is the control plane
