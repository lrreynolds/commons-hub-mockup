# Commonshub MVP — Known Risks & Unknowns Checklist

This document captures the **highest-risk areas** in the Commonshub MVP
based on the current product flow, integrations, and assumptions.

It is intended to:
- Prevent late surprises
- Guide engineering sequencing
- Clarify where fallbacks are acceptable
- Keep the MVP shippable even if some automation fails

Read alongside:
- mvp-flow-and-state.md
- mastodon-integration.md
- community-funding-integration.md

---

## Risk legend

- 🟢 Low risk — well understood, unlikely to block MVP
- 🟡 Medium risk — likely solvable, but needs verification
- 🔴 High risk — may require fallback or scope adjustment

---

## 1. Mastodon API surface limitations

### 1.1 Editing instance About text
**Risk:** 🟡 Medium  
**Why it matters:** About text is reused in multiple surfaces (dashboard, funding page, onboarding).  
**Unknown:** Is there a supported API to update instance description post-provisioning?

**Fallback:**  
Creator edits About text in Mastodon admin UI.

**Mitigation:**  
- Seed strong defaults at provisioning
- Make reuse of About text explicit in creator copy

---

### 1.2 Community rules (signup norms)
**Risk:** 🟡 Medium  
**Why it matters:** Signup rules are core to community tone.  
**Unknown:** Can rules be updated programmatically after provisioning?

**Fallback:**  
Creator edits rules in Mastodon admin UI.

**Mitigation:**  
- Keep rules short
- Provide a fallback doc
- Do not block launch on rule editing

---

### 1.3 Invite link generation
**Risk:** 🔴 High  
**Why it matters:** Invite links are a core growth loop.  
**Unknowns:**
- Can invites be created via supported API?
- Can they be long-lived?
- Are admin scopes required?

**Fallback:**  
Creator manually generates invite link in Mastodon admin UI.

**Mitigation:**  
- Dashboard copy explicitly allows reuse of a single invite
- Funding page and dashboard can accept a pasted invite link

---

### 1.4 Posting and pinning content programmatically
**Risk:** 🟡 Medium  
**Why it matters:** Welcome post and funding post rely on pinning/visibility.  
**Unknowns:**
- Is pinning supported via API?
- Are announcements supported programmatically?

**Fallback:**  
Creator posts and pins manually in Mastodon UI.

**Mitigation:**  
- MVP copy treats posts as content, not as “system objects”
- Do not require pinning to consider funding enabled (announcement is acceptable)

---

### 1.5 Announcement banners
**Risk:** 🟡 Medium  
**Why it matters:** Announcements are ideal for funding visibility.  
**Unknown:** API support for announcements is unclear.

**Fallback:**  
Standard pinned post.

**Mitigation:**  
- Design assumes announcement *or* pinned post satisfies requirement

---

## 2. Stripe integration risks

### 2.1 Stripe Connect onboarding complexity
**Risk:** 🟢 Low  
**Why it matters:** Stripe handles this well, but UX must stay calm.

**Mitigation:**  
- Simulated Stripe flow in MVP
- Real integration later can follow same mental model

---

### 2.2 Multi-currency handling
**Risk:** 🟢 Low  
**Why it matters:** International creators are expected.

**Mitigation:**  
- Defer currency selection to Stripe
- Never expose currency controls in MVP UI

---

### 2.3 Funding without public messaging
**Risk:** 🔴 High (product integrity)  
**Why it matters:** Silent funding breaks trust and tone.

**Rule (locked):**
> Community funding cannot be “on” unless a funding post or announcement exists.

**Mitigation:**  
- Enforce funding post step in flow
- Funding-enabled flag set only after post creation

---

## 3. State consistency risks

### 3.1 Partial state drift
**Risk:** 🟡 Medium  
**Examples:**
- Stripe connected but funding disabled
- Funding post exists but funding flag unset

**Mitigation:**  
- Treat state flags as *derived*, not authoritative
- Dashboard copy reflects *current effective state*, not raw flags

---

### 3.2 Reset behavior
**Risk:** 🟢 Low (intentional)  
**Why it matters:** Demo and dev velocity.

**Mitigation:**  
- Global Start Over clears *all* state
- No partial resets in MVP

---

## 4. Public surface risks

### 4.1 Community funding page discoverability
**Risk:** 🟡 Medium  
**Why it matters:** Page does double duty (funding + onboarding).

**Mitigation:**  
- Page exists only when funding enabled
- Dashboard explicitly exposes “Visit community funding page”

---

### 4.2 Confusion between “support” and “support”
**Risk:** 🟢 Resolved  
**Mitigation:**  
- Always use **Community funding**
- Never use “support” alone in UI

---

## 5. UX / trust risks

### 5.1 Users thinking funding is mandatory
**Risk:** 🔴 High (tone violation)

**Mitigation:**  
- Repeated copy: “Participation is always free”
- Funding page explicitly invites joining without contributing

---

### 5.2 Creator confusion about where content appears
**Risk:** 🟡 Medium

**Mitigation:**  
- Dashboard copy explains reuse of About and posts
- Wizard primes creator that copy surfaces in multiple places

---

## 6. MVP scope discipline risks

### 6.1 Campaigns creeping into MVP
**Risk:** 🔴 High (scope creep)

**Rule:**  
Campaigns are **explicitly not MVP**.

**Mitigation:**  
- “Coming later” copy only
- No data models or UI scaffolding for campaigns

---

### 6.2 Over-automation pressure
**Risk:** 🟡 Medium

**Mitigation:**  
- Clear fallback docs
- Manual Mastodon actions acceptable in MVP
- Product illusion preserved through copy + flow

---

## Final guidance

If a choice arises between:
- **Automating a Mastodon action**  
- **Documenting a fallback clearly**

Choose the fallback.

The MVP succeeds if:
- The flow is calm
- The states are coherent
- The intent is obvious
- The illusion holds

Perfection is not required.
Trust is.
