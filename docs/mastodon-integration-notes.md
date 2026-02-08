# Commonshub MVP — Mastodon Integration Notes (handoff)

Purpose:
- Sanity-check what Commonshub can do via provisioning/API vs what must fall back to Mastodon UI.
- Keep notes in a form usable by engineers and creator-facing documentation writers.

Legend:
- Confidence: Green (clear), Yellow (likely but verify), Red (unclear / probably not possible via supported API)
- Fallback doc: Only write if dashboard cannot reliably do it.

---

## Notes Template (copy/paste)

**Control name:**
**Where shown to invitees:**
**Mastodon primitive:**
**Desired Commonshub behavior:**
**Implementation path (ranked):**
1) Provisioning default
2) API (official)
3) Admin automation / internal endpoint
4) Creator does it in Mastodon UI (fallback)
**Current confidence:** Green / Yellow / Red
**Unknowns to verify:**
**Fallback doc needed?** Yes/No
**Fallback doc title (if Yes):**
**Owner-friendly wording (dashboard copy):**

---

## 1) About / Server description

**Control name:** About message (“What this community is”)  
**Where shown to invitees:** Public landing/about area; accessible from About in Mastodon UI  
**Mastodon primitive:** Instance description / About text  
**Desired Commonshub behavior:** Dashboard edits About; invitees see it immediately  
**Implementation path (ranked):**  
1) Provisioning default ✅  
2) API (official) ?  
3) Admin automation / internal endpoint ?  
4) Creator does it in Mastodon UI ✅ fallback  
**Current confidence:** Yellow  
**Unknowns to verify:** Supported API to set instance About? If not, can provisioning seed and later update?  
**Fallback doc needed?** Yes (if not controllable from dashboard)  
**Fallback doc title:** Edit your community About text in Mastodon  
**Owner-friendly wording (dashboard copy):** About (shown on your public community page)

---

## 2) Community norms / Signup rules

**Control name:** Community norms (rules shown during signup)  
**Where shown to invitees:** “Accept rules” step in invite/signup flow  
**Mastodon primitive:** Instance rules list  
**Desired Commonshub behavior:** Short, friendly defaults; owner can edit  
**Implementation path (ranked):**  
1) Provisioning default ✅  
2) API (official) ?  
3) Admin automation / internal endpoint ?  
4) Creator does it in Mastodon UI ✅ fallback  
**Current confidence:** Yellow  
**Unknowns to verify:** Supported API to set rules? How rules are stored/seeded?  
**Fallback doc needed?** Yes (if not controllable from dashboard)  
**Fallback doc title:** Edit signup rules (community norms) in Mastodon  
**Owner-friendly wording (dashboard copy):** Community norms (members agree during signup)

---

## 3) Branding assets (banner + icon)

**Control name:** Banner + icon (first-impression branding)  
**Where shown to invitees:** Public landing and signup pages  
**Mastodon primitive:** Instance thumbnail/banner + server icon  
**Desired Commonshub behavior:** Commonshub default by default; optional customization later  
**Implementation path (ranked):**  
1) Provisioning default ✅✅  
2) API (official) ?  
3) Admin automation / internal endpoint ?  
4) Creator does it in Mastodon UI ✅ fallback for customization  
**Current confidence:** Yellow  
**Unknowns to verify:** Can we update these post-provision via supported API?  
**Fallback doc needed?** Maybe (only for “customize later”)  
**Fallback doc title:** Upload your banner and icon in Mastodon  
**Owner-friendly wording (dashboard copy):** Branding (default provided — customize anytime)

---

## 4) Invite link generation

**Control name:** Invite link (copy/share)  
**Where shown to invitees:** Entry point into invite/signup flow  
**Mastodon primitive:** Invites feature (generated in Mastodon UI today)  
**Desired Commonshub behavior:** One canonical invite link shown in dashboard  
**Implementation path (ranked):**  
1) Provisioning default ? (possible to pre-generate)  
2) API (official) ?  
3) Admin automation / internal endpoint ?  
4) Creator does it in Mastodon UI ✅ fallback  
**Current confidence:** Red/Yellow  
**Unknowns to verify:** Is there an official endpoint to create invites? Does it require admin scope? Can we create long-lived invites?  
**Fallback doc needed?** Likely Yes  
**Fallback doc title:** Create an invite link in Mastodon  
**Owner-friendly wording (dashboard copy):** Invite link (share to let people join)

---

## 5) Pinned welcome post

**Control name:** Pinned welcome post (“Start here”)  
**Where shown to invitees:** Local feed after signup/login  
**Mastodon primitive:** Status/post + pinned state  
**Desired Commonshub behavior:** Dashboard editor for a single pinned welcome post  
**Implementation path (ranked):**  
1) Provisioning default ? (seed a first post)  
2) API (official) ? (posting likely supported; pinning via API unknown)  
3) Admin automation / internal endpoint ?  
4) Creator does it in Mastodon UI ✅ fallback  
**Current confidence:** Yellow  
**Unknowns to verify:** Can Commonshub create/pin post programmatically as owner?  
**Fallback doc needed?** Maybe/Yes depending on feasibility  
**Fallback doc title:** Post and pin a welcome message in Mastodon  
**Owner-friendly wording (dashboard copy):** Pinned welcome (what members see first)

---

## 6) Default home feed = Local

**Control name:** Default timeline view for new members  
**Where shown to invitees:** First experience after onboarding finishes  
**Mastodon primitive:** Client/UI behavior; may not be server-enforceable  
**Desired Commonshub behavior:** Encourage Local feed as the default starting view  
**Implementation path (ranked):**  
1) Provisioning default ? (server config?)  
2) API (official) ?  
3) Admin automation ?  
4) Creator guidance ✅ fallback (since client behavior varies)  
**Current confidence:** Red  
**Unknowns to verify:** Any server-side setting that sets default timeline view?  
**Fallback doc needed?** Yes  
**Fallback doc title:** After you join: start with the Local timeline (recommended)  
**Owner-friendly wording (dashboard copy):** Tip: ask members to start with Local for community context

## Dashboard block: First impression (About + pinned)

**Control name:** First impression (About message + pinned welcome post)  
**Where shown to invitees:** About shows on public landing/about and during signup; pinned welcome shows at top of Local feed after signup  
**Mastodon primitive:** Instance description/About; Instance rules (separate); Status post + pinned  
**Desired Commonshub behavior:** Owner edits both from dashboard  
**Implementation path (ranked):**  
1) Provisioning default ✅ (seed About + default pinned)  
2) API (official) ? (posting likely; pinning unknown)  
3) Admin automation / internal endpoint ?  
4) Creator does it in Mastodon UI ✅ fallback  
**Current confidence:** Yellow  
**Unknowns to verify:** Can we set About and create/pin a post via supported API? If not, which pieces must fall back?  
**Fallback doc needed?** Maybe  
**Fallback doc title:** Set About text and pin a welcome post in Mastodon  
**Owner-friendly wording (dashboard copy):** First impression (what people see before and after joining)

## Dashboard block: Invites

**Control name:** Invite members  
**Surface shown to owner:** Single reusable invite link  
**Surface shown to invitee:** Standard Mastodon invite + signup flow  
**Mastodon primitive:** Invite links (admin-generated)  
**Desired Commonshub behavior:** Generate and display invite link without forcing owner into Mastodon admin UI  

**Implementation paths (ranked):**
1) Internal admin automation (generate invite on instance)  
2) API (if supported for invite creation)  
3) Pre-generated reusable invite at provision time  
4) Fallback: guide owner to generate invite in Mastodon admin UI  

**Current confidence:** Yellow  
**Unknowns:**  
- Can invites be generated via supported API?  
- Can we create a long-lived reusable invite safely?

**Fallback doc needed?** Yes (likely)  
**Fallback doc title:** Create an invite link in Mastodon  

## Dashboard block: Funding

**Control name:** Funding  
**Default state:** Disabled  
**Member-facing surface:** Pinned posts / announcements (no widgets, no ads)  
**Payment processor:** Stripe (via Commonshub)

**Design intent:**
- Funding should feel optional and non-intrusive
- No paywalls or gated participation
- Support is contextual and message-driven

**Implementation unknowns:**
- How to link Stripe accounts per instance
- Whether funding signals appear inside Mastodon UI or only via posts

**Fallback:**  
If Stripe connection cannot be fully abstracted, provide a short creator guide:
“Enable funding for your Commonshub community”

## Funding modes (conceptual)

Planned support types:
1. Monthly recurring support (multiple amounts)
2. One-time tips
3. Goal-based fundraising with target amount

MVP stance:
- All modes abstracted behind Stripe
- No dashboard UI for selecting modes in MVP
- Mode selection and presentation handled through:
  - Announcement copy
  - Pinned posts
  - (Later) optional structured helpers

Do not introduce separate “funding objects” in MVP UI.

## Funding by plan

Base plan:
- Monthly recurring support
- One-time tips

Growth plan:
- Everything in Base
- Goal-based fundraising campaigns (target + progress)

Dashboard behavior:
- Funding section describes capabilities generically
- Plan enforcement happens at enable-time, not via UI gating
- Do not surface upsell or disabled controls in MVP dashboard
