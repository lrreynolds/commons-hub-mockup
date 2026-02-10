# Commonshub MVP — End-to-End Flow (Screen by Screen)

This document describes the **entire Commonshub MVP user journey**, from landing page to a live, fundable community.

It is intended as:
- A shared mental model for product, design, and engineering
- A fast onboarding document for new contributors
- A reference when reasoning about state, routing, and edge cases

This document focuses on **what the user sees, what state changes, and where they go next**.
Implementation details live in separate integration and API notes.

---

## 0. Landing

**Screen:** `index.html`  
**Audience:** Prospective creator  
**Purpose:** Explain what Commonshub is and invite action

**Primary CTA:**
- **Start / Continue**

**Next:**
- Routes to `start.html`

---

## 1. Start / Router

**Screen:** `start.html`  
**Audience:** Creator (new or returning)  
**Purpose:** Determine where the user should go next based on saved state

**Routing logic (simplified):**
- If server not provisioned → Server setup flow
- If server provisioned but community not set up → Dashboard (pre-setup)
- If community set up → Dashboard (post-setup)

**Next:**
- `setup.html` **or**
- `dashboard.html`

---

## 2. Server Setup — Plan Selection

**Screen:** `setup.html`  
**Audience:** Creator  
**Purpose:** Select a hosting plan (mocked in MVP)

**Key ideas:**
- Calm, low-pressure choice
- No irreversible decisions
- Clear “upgrade later” framing

**State changes:**
- None yet (selection is conceptual in MVP)

**Next:**
- `setup-basics.html`

---

## 3. Server Setup — Basics

**Screen:** `setup-basics.html`  
**Audience:** Creator  
**Purpose:** Collect minimal identity and community info

**Inputs (mocked):**
- Owner display name
- Owner email
- Community name
- Community subdomain

**Key idea:**
- “Just enough to create the community”
- Everything can be edited later

**Next:**
- `setup-launch.html`

---

## 4. Server Setup — Launch

**Screen:** `setup-launch.html`  
**Audience:** Creator  
**Purpose:** Confirm and simulate server provisioning

**Key ideas:**
- Hosting is handled by Commonshub
- This is the final step before the server is “live”

**State changes:**
- Server marked as live

**Next:**
- `dashboard.html` (pre-community setup)

---

## 5. Dashboard — Pre-Community Setup

**Screen:** `dashboard.html` (pre-setup state)  
**Audience:** Creator  
**Purpose:** Show that the server exists, but the community is not ready

**Primary CTA:**
- **Set up your community**

**Key ideas:**
- Server is running
- Community still needs identity, norms, and a welcome

**Next:**
- `setup-wizard.html`

---

## 6. Community Setup Wizard

**Screen:** `setup-wizard.html`  
**Audience:** Creator  
**Purpose:** Make the community feel real before inviting anyone

### Step 1 — Branding
- Community banner (default provided)
- Owner avatar (optional)

### Step 2 — Purpose & Norms
- About / mission text
- Community norms (shown during signup)

### Step 3 — Welcome Post
- Single pinned welcome post or announcement

**Important design rule:**
- Creator is informed that this copy is reused across:
  - Public community surfaces
  - Onboarding
  - Community funding page

**State changes:**
- Community marked as fully set up

**Next:**
- `dashboard.html` (post-setup)

---

## 7. Dashboard — Post-Community Setup

**Screen:** `dashboard.html` (post-setup state)  
**Audience:** Creator  
**Purpose:** Central control plane

### Always visible actions:
- **Visit community (Mastodon)**
- **Copy invite link**

### Conditional sections:

#### A. Community funding not enabled
- Prominent **Enable community funding** CTA

#### B. Community funding enabled
- Status block (Stripe connected, funding enabled)
- **Visit community funding page**
- **Copy community funding link**

**Key idea:**
- Dashboard surfaces *state*, not configuration complexity

---

## 8. Community Funding — Explainer

**Screen:** `funding.html`  
**Audience:** Creator  
**Purpose:** Explain what community funding is and how it works

**Key messages:**
- Participation is always free
- Community funding is optional
- Funds support hosting and stewardship
- No ads, no algorithms, no tracking

**Primary CTA:**
- **Connect payouts** (Stripe)

**Next:**
- `funding-stripe.html`

---

## 9. Community Funding — Stripe Connect (Simulated)

**Screen:** `funding-stripe.html`  
**Audience:** Creator  
**Purpose:** Simulate Stripe onboarding

**Key ideas:**
- Stripe handles payments securely
- Multiple currencies supported
- Payouts go directly to the creator

**State changes:**
- Stripe marked as connected

**Next:**
- `funding-options.html`

---

## 10. Community Funding — Options

**Screen:** `funding-options.html`  
**Audience:** Creator  
**Purpose:** Enable simple funding modes

**MVP defaults:**
- Monthly community funding: $1 · $3 · Other
- One-time contributions: $1 · $3 · Other
- Campaigns: not mocked in MVP

**State changes:**
- Community funding marked as enabled

**Next:**
- `funding-post.html`

---

## 11. Community Funding — Pinned Post / Announcement

**Screen:** `funding-post.html`  
**Audience:** Creator  
**Purpose:** Create the public funding message

**Key ideas:**
- Calm, optional tone
- No pressure, no paywalls
- Includes community funding link

**Outputs:**
- Pinned post and/or announcement copy
- Community funding link becomes shareable

**State changes:**
- Community funding live

**Next:**
- `dashboard.html`

---

## 12. Community Funding — Public Landing Page

**Screen:** `community-funding.html`  
**Audience:** Public (members & non-members)  
**Purpose:** Dual-purpose page

**This page does two jobs:**
1. Accept community funding (via Stripe)
2. Act as an on-ramp into the community

**Key sections:**
- Community branding and name
- About / mission (reused from setup)
- Funding options
- Join-the-community CTA

**Important rule:**
- This page only exists when community funding is enabled

---

## 13. Visit Community (Mock)

**Screen:** `community.html`  
**Audience:** Members and visitors  
**Purpose:** Simulate the Mastodon experience

**Contents (mocked):**
- Local feed
- Pinned welcome / funding post
- Sample posts and replies

**Design intent:**
- Show that Commonshub is *not* the social network
- Conversations happen in Mastodon

---

## Global Rules

- **Start over** is available everywhere
- State is always recoverable
- No dead ends
- No required funding
- No ads, tracking, or algorithmic feeds

---

## Related Docs

- Mastodon Integration Notes
- Funding + Stripe Integration Notes
- Known Risks Checklist
