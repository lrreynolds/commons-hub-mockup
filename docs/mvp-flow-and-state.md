# Commonshub MVP — Flow & State Model

This document defines the end-to-end behavior of the Commonshub MVP.

It is the **source of truth** for:
- Setup flows
- Dashboard behavior
- Funding states
- Public page existence

Integration constraints are detailed in:
- mastodon-integration.md
- community-funding-integration.md

---

## High-level phases

1. Server provisioning
2. Community setup wizard
3. Post-setup dashboard
4. Community funding setup (optional)
5. Public community & funding pages

---

## Phase 0 — Server provisioning

**Outcome:** Mastodon instance exists and is reachable.

**State flag**
- `commonshub_server_live = 1`

Until this flag is set:
- Dashboard and wizard are inaccessible
- User remains in provisioning flow

---

## Phase 1 — Community Setup Wizard (mandatory)

The wizard establishes the identity and intent of the community.
It must complete before any post-setup dashboard state exists.

### Wizard steps (locked)

1. **Branding**
   - Community banner (optional)
   - Owner avatar (optional)

2. **Basics**
   - Owner name
   - Owner email
   - Community name
   - Community subdomain

3. **Launch**
   - Single pinned welcome post
   - Calm default copy provided

### State flags
- `commonshub_in_setup_flow = 1` (session-only)
- `commonshub_setup_step = 1 | 2 | 3`
- `commonshub_setup_complete = 1`

### Guardrails
- Steps cannot be skipped
- Deep links redirect to correct step
- Reset is the only way to re-enter

> See **mastodon-integration.md** for feasibility of programmatically creating
and pinning the welcome post.

---

## Phase 2 — Dashboard (post-setup baseline)

Once `commonshub_setup_complete = 1`:

### Always visible actions
- **Visit community**
- **Copy invite link**

### Always visible info
- Community status
- Hosting status
- Member count (mock)

---

## Phase 3 — Community Funding (optional layer)

Community funding is layered on top of an existing community.

### Hard rules
- Stripe **must** be connected before funding can be enabled
- Community funding cannot be “on” without:
  - Stripe connected
  - A pinned funding post or announcement created

---

## Funding states (authoritative)

### State A — No Stripe, no funding
- Dashboard shows:
  - Large CTA: **Enable community funding**
- No public funding page exists

---

### State B — Stripe connected, funding off
- Dashboard shows:
  - Status: “Stripe connected”
  - CTA: **Set up community funding**
- No public funding page exists

---

### State C — Stripe connected, funding on (live)
- Dashboard shows:
  - Funding status summary
  - **Visit community funding page**
  - **Copy community funding link**

This state implies:
- Funding post or announcement exists
- Public community funding page exists

> See **community-funding-integration.md** for Stripe and funding details.

---

## Phase 4 — Community Funding Setup Flow

1. **Funding explainer**
2. **Stripe connect (simulated)**
   - Sets `commonshub_stripe_connected = 1`
3. **Funding options**
   - Monthly: $1 / $3 / Other
   - One-time: $1 / $3 / Other
4. **Funding post**
   - Editable default copy
   - Magic funding link inserted
   - Posting sets funding live

### State flags
- `commonshub_stripe_connected = 1`
- `commonshub_funding_enabled = 1`
- `commonshub_funding_post_live = 1`

---

## Phase 5 — Public community funding page

Exists **only** when funding is enabled.

### Purpose (dual)
- Accept community funding
- Invite non-members to join

### Required elements
- Community branding
- About text (reused from setup)
- Clear framing:
  > “This page lets you support the community — and/or join it.”

### Primary actions
- Contribute via Stripe
- Join the community

---

## Reset behavior (demo / dev)

Any page may include **Start over**, which clears:
- Server state
- Setup state
- Stripe state
- Funding state

Returns user to landing page.
