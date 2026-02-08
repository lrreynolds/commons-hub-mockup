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
