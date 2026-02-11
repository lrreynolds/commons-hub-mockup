# Commonshub — MVP Documentation

This repository contains the authoritative documentation for the Commonshub MVP.

Commonshub is not a social network.  
It is a control plane that provisions, hosts, and sustains independent Mastodon-based communities — with optional, non-extractive funding.

Mastodon is the social surface.  
Stripe handles payments.  
Commonshub orchestrates the system.

---

# Core Documents

## 1. Constitution (Foundational)

**commonshub-constitution-v1.0.md**

Defines:
- Mission
- Sovereignty model
- Funding philosophy
- Boundaries
- Long-term positioning

Read this first for philosophical alignment.

---

## 2. Product Spec (MVP Authority)

**commonshub-product-spec-v1.1.md**

Defines:
- What MVP includes
- What is explicitly out of scope
- State model
- Funding behavior
- Announcement and pin logic
- Guardrails

This is the authoritative product behavior document.

---

## 3. Platform Architecture

**commonshub-platform-architecture-v1.0.md**

Defines:
- System topology
- Control plane vs Mastodon
- Stripe integration layer
- State ownership
- Webhook model (future)

---

## 4. Mastodon Integration Map (MVP)

**commonshub-mastodon-integration-mvp-v1.0.md**

Defines:
- What Mastodon primitives we rely on
- What can be automated
- What requires fallback
- Where API uncertainty exists

Prevents overpromising capabilities.

---

## 5. Economic & Funding Model

**commonshub-economic-and-funding-model-v1.0.md**

Defines:
- Optional funding model
- Non-extractive positioning
- Future gated mode boundaries
- Plan structure (conceptual)

---

## 6. Design Principles

**commonshub-design-principles-v1.0.md**

Defines:
- UI restraint
- Control plane clarity
- Creator-first design rules
- Public vs internal surface separation

---

## 7. Brand Voice & Messaging

**commonshub-brand-voice-and-messaging-v1.0.md**

Defines:
- Tone
- Funding language constraints
- Announcement patterns
- Non-extractive framing

---

# Hiring / Evaluation

**task.md**

A paid evaluation task used for early contributor vetting.
Not part of the product specification.

---

# Guiding Model

- Mastodon remains the social layer.
- Stripe handles payments.
- Commonshub orchestrates infrastructure and funding surfaces.
- Creator sovereignty is preserved.
- Funding is optional by default.
