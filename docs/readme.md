# Commonshub MVP — Engineering Handoff

This directory contains the authoritative technical and product notes for the Commonshub MVP.

These documents are designed to be read independently but reference each other where appropriate.

---

## Documents

### Mastodon Integration Notes
**mastodon-integration.md**

What Commonshub can and cannot control in Mastodon.
Focuses on API constraints, provisioning defaults, and required fallbacks to the Mastodon UI.

Audience: backend engineers, infra, documentation writers.

---

### Community Funding & Stripe Integration
**community-funding-integration.md**

Defines how community funding works, Stripe responsibilities, valid funding states, and public funding surfaces.
Clarifies how funding intersects with Mastodon via posts and announcements.

Audience: backend, payments, senior frontend.

---

### MVP Flow & State Model
**mvp-flow-and-state.md**

End-to-end product flow, setup wizard behavior, dashboard states, and UI expectations.
This is the primary reference for frontend implementation.

Audience: frontend engineers, PMs, designers.

---

## Guiding principles

- Funding is optional and never gates participation
- Mastodon remains the social surface; Commonshub is the control plane
- All flows should be calm, intentional, and reversible
