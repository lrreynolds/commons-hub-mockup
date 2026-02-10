# Commonshub MVP — Community Funding & Stripe Integration Notes (handoff)

Purpose:
- Sanity-check how Community Funding interacts with Stripe + Mastodon.
- Clarify what Commonshub can own vs what must be expressed via posts/links.
- Surface implementation risks and fallback documentation needs early.

This document assumes the **Community Setup flow is complete** and the owner is viewing the **post-setup dashboard**.

Legend:
- Confidence: Green (clear), Yellow (likely but verify), Red (unclear / probably not possible via supported API)
- Fallback doc: Only write if dashboard cannot reliably do it.

---

## Notes Template (copy/paste)

**Control name:**  
**Where shown to members:**  
**Stripe primitive:**  
**Mastodon primitive:**  
**Desired Commonshub behavior:**  
**Implementation path (ranked):**  
1) Provisioning default  
2) API (official)  
3) Admin automation / internal endpoint  
4) Creator action in Stripe / Mastodon UI (fallback)  
**Current confidence:** Green / Yellow / Red  
**Unknowns to verify:**  
**Fallback doc needed?** Yes/No  
**Fallback doc title (if Yes):**  
**Owner-friendly wording (dashboard copy):**

---

## 1) Stripe account connection

**Control name:** Connect Stripe account  
**Where shown to members:** Nowhere (owner-only)  
**Stripe primitive:** Stripe Connect (Standard or Express)  
**Mastodon primitive:** None  
**Desired Commonshub behavior:**  
Owner connects Stripe once; payouts flow directly to them. Commonshub never sees card details.

**Implementation path (ranked):**
1) Stripe Connect onboarding (Standard/Express) ✅  
2) Stripe API (official) ✅  
3) Internal admin tooling ❌  
4) Manual Stripe setup (fallback) ❌  

**Current confidence:** Green  
**Unknowns to verify:**  
- Whether Express or Standard Connect is preferred  
- Jurisdictional payout limitations  

**Fallback doc needed?** No  
**Owner-friendly wording (dashboard copy):**  
Stripe — Connected / Not connected

---

## 2) Community funding enablement (logical state)

**Control name:** Enable community funding  
**Where shown to members:** Only after enabled (via posts + landing page)  
**Stripe primitive:** Products / Prices / Checkout sessions  
**Mastodon primitive:** None directly  
**Desired Commonshub behavior:**  
Funding cannot be enabled unless Stripe is connected. Funding becomes “live” only after a pinned funding post exists.

**Implementation path (ranked):**
1) Commonshub state machine + Stripe session creation ✅  
2) Stripe API (official) ✅  
3) Admin automation ❌  
4) Creator manually coordinating Stripe + posts ❌  

**Current confidence:** Green  
**Unknowns to verify:**  
- Whether to pre-create Stripe Products or create on demand  

**Fallback doc needed?** No  
**Owner-friendly wording (dashboard copy):**  
Community funding — Off / Live

---

## 3) Community funding landing page (public)

**Control name:** Community funding page  
**Where shown to members:** Public web page (shareable link)  
**Stripe primitive:** Checkout Session redirect  
**Mastodon primitive:** Invite link (optional join CTA)  
**Desired Commonshub behavior:**  
A single page that does **two jobs**:
1. Accept community funding contributions  
2. Invite non-members to join the community  

This page reuses:
- Community branding
- Community About text
- Trust language (no ads, no tracking)

**Implementation path (ranked):**
1) Commonshub-hosted public page ✅  
2) Stripe Checkout redirect ✅  
3) Mastodon UI ❌  
4) Creator-built landing page ❌  

**Current confidence:** Green  
**Unknowns to verify:**  
- Localization needs  
- SEO indexing preferences  

**Fallback doc needed?** No  
**Owner-friendly wording (dashboard copy):**  
Visit community funding page  
Copy community funding link

---

## 4) Funding contribution modes (MVP)

**Control name:** Contribution types  
**Where shown to members:** Community funding page  
**Stripe primitive:**  
- Subscriptions (monthly)  
- One-time payments  

**Mastodon primitive:** None  
**Desired Commonshub behavior:**  
MVP supports:
- Monthly community funding ($1 · $3 · Other)  
- One-time contributions ($1 · $3 · Other)  

No campaigns in MVP.

**Implementation path (ranked):**
1) Stripe Products + Prices (official) ✅  
2) Stripe Checkout Sessions ✅  
3) Custom payment UI ❌  
4) External donation tooling ❌  

**Current confidence:** Green  
**Unknowns to verify:**  
- Handling currency display vs payout currency  

**Fallback doc needed?** No  
**Owner-friendly wording (dashboard copy):**  
Monthly community funding  
One-time contribution

---

## 5) Pinned community funding post

**Control name:** Pinned community funding post  
**Where shown to members:** Top of Local feed  
**Stripe primitive:** Link to community funding page  
**Mastodon primitive:** Status post + pinned state  
**Desired Commonshub behavior:**  
Owner drafts a single funding post via dashboard. This post is:
- Published once
- Pinned
- Updated only if owner edits copy later

**Implementation path (ranked):**
1) API (official) ?  
2) Admin automation / internal endpoint ?  
3) Provisioning default ❌  
4) Creator does it in Mastodon UI ✅ fallback  

**Current confidence:** Yellow  
**Unknowns to verify:**  
- Can a post be pinned via supported API?  
- Does pinning require interactive UI?  

**Fallback doc needed?** Yes (likely)  
**Fallback doc title:** Post and pin a community funding message in Mastodon  
**Owner-friendly wording (dashboard copy):**  
Pinned community funding post (shown to members)

---

## 6) Announcement banner (optional)

**Control name:** Funding announcement banner  
**Where shown to members:** Mastodon UI (banner/announcement area)  
**Stripe primitive:** None  
**Mastodon primitive:** Announcement feature  
**Desired Commonshub behavior:**  
Optional short announcement linking to community funding page.

**Implementation path (ranked):**
1) API (official) ?  
2) Admin automation ?  
3) Creator does it in Mastodon UI ✅ fallback  

**Current confidence:** Yellow  
**Unknowns to verify:**  
- Can announcements include links?  
- Can they be created programmatically?  

**Fallback doc needed?** Maybe  
**Fallback doc title:** Add a funding announcement in Mastodon  
**Owner-friendly wording (dashboard copy):**  
Announcement (optional)

---

## 7) Dashboard: Community funding status block

**Control name:** Community funding status  
**Surface shown to owner:** Dashboard  
**Member-facing surface:** None  
**Stripe primitive:** Account + payout status  
**Mastodon primitive:** None  

**Desired Commonshub behavior:**  
Dashboard reflects only valid states:

State A:  
- Stripe: Not connected  
- Community funding: Off  
- CTA: Enable community funding  

State B:  
- Stripe: Connected  
- Community funding: Off  
- CTA routes into funding setup  

State C:  
- Stripe: Connected  
- Community funding: Live  
- Actions:
  - Visit community funding page  
  - Copy community funding link  

**Current confidence:** Green  
**Fallback doc needed?** No  

---

## 8) Copy and terminology rules (important)

Always use:
- “Community funding”

Never use:
- “Support”
- “Funding” alone

Rationale:
- Avoid confusion with technical support
- Emphasize collective, optional participation

---

## Open Questions (Non-blocking)

- Stripe Express vs Standard Connect
- API support for pinning posts
- Announcement creation API support
- Long-lived invite link creation reliability

None of these block MVP frontend implementation.

---

## Summary

This flow establishes:
- A clean, optional funding model
- No ads, no paywalls, no dark patterns
- Funding as a **community surface**, not a product upsell
- Clear separation of concerns between:
  - Commonshub (hosting, funding, links)
  - Mastodon (conversation, moderation, identity)

The frontend mock accurately represents intended product behavior and can now be implemented against real APIs.
