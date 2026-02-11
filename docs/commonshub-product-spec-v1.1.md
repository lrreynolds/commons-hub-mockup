# Commonshub Product Specification v1.1

Status: Canonical Product Reference  
Scope: Defines MVP behavior, state model, lifecycle rules, and operational constraints  
Last Updated: 2026-02-11  

---

# 1. Purpose

This document defines:

- What Commonshub MVP includes
- What is explicitly excluded
- State transitions and lifecycle behavior
- Funding system logic
- Announcement and pinned post workflow
- Stripe integration behavior
- Operational guardrails

This is the authoritative behavioral contract for the system.

Philosophy lives in the Constitution.
This document governs execution.

---

# 2. MVP Definition

MVP = The smallest viable version of Commonshub that:

1. Provisions a Mastodon-based community
2. Connects Stripe via platform account
3. Enables optional community funding
4. Surfaces funding via:
   - Announcement template
   - Pinned post template
   - Public funding page
5. Provides a clean creator dashboard

Nothing beyond this is assumed.

---

# 3. What Is Included in MVP

## 3.1 Community Provisioning

- Mastodon instance setup (manual-assisted or semi-automated)
- Admin account creation
- Basic branding (name, description)
- Invite flow
- Join link exposure

---

## 3.2 Creator Dashboard

Creator can:

- See hosting status
- See Stripe connection status
- See funding status
- Enable/disable funding
- Access funding link
- Access invite link

Dashboard reflects system state — it does not create state.

---

## 3.3 Funding Infrastructure (MVP)

- Stripe Connect (platform model)
- Creator connects Stripe account
- Funding is optional by default
- Funding page auto-generated
- Copy link to funding page
- Announcement + pinned post templates provided

No gating logic in MVP.

Participation remains free.

---

# 4. Explicitly Out of Scope (MVP)

Not included:

- Hard paywalls
- Subscription-enforced Mastodon access
- Tiered access systems
- Role-based content restrictions
- Live stream paywalls
- PeerTube integration
- Video library gating
- Advanced analytics
- Multi-tier contribution systems
- Automated billing enforcement logic
- Membership entitlement systems

If it requires subscription state enforcement, it is not MVP.

---

# 5. Core System States

## 5.1 Server State

| State | Meaning |
|--------|----------|
| Provisioning | Server is being created |
| Live | Mastodon instance operational |
| Suspended | Hosting paused |
| Deleted | Instance removed |

---

## 5.2 Setup State

| State | Meaning |
|--------|----------|
| Not Started | Wizard not begun |
| In Progress | Wizard mid-flow |
| Complete | Branding + welcome complete |

---

## 5.3 Funding State

| Stripe Connected | Funding Enabled | Effective State |
|------------------|-----------------|-----------------|
| No | No | Funding Off |
| Yes | No | Stripe Ready |
| Yes | Yes | Funding Live |

---

# 6. Funding State Transitions

## 6.1 Stripe Connected

Trigger:
- Stripe Connect successful

System Behavior:
- Dashboard shows "Stripe connected"
- Funding remains Off
- No announcement created

---

## 6.2 Funding Enabled

Trigger:
- Creator enables funding

System Behavior:

1. Funding page becomes public
2. Dashboard reflects "Funding Live"
3. Creator is shown:
   - Announcement template
   - Pinned post template
4. Creator manually posts announcement
5. Creator manually pins post

System does not auto-post without explicit consent.

---

## 6.3 Funding Modified

Trigger:
- Creator changes pricing or funding options

System Behavior:

- No silent public changes
- Prompt creator:

  "Funding options changed. Update announcement?"

Future:
- Regenerate draft announcement
- Offer update pinned post

---

## 6.4 Funding Disabled

Trigger:
- Creator disables funding

System Behavior:

- Funding page hidden
- Dashboard reflects Off
- Prompt:

  "Remove announcement and unpin post?"

System does not auto-delete posts.

---

## 6.5 Stripe Disconnected

Trigger:
- Stripe account disconnected
- Stripe deauthorization event

System Behavior:

- Funding automatically set to Off
- Funding page hidden
- Dashboard reflects Stripe not connected
- Creator notified

---

# 7. Announcement & Pinned Post Model

## 7.1 Why Both Exist

Announcements:
- Visible in Mastodon web UI
- Instance-level visibility
- Not shown in all mobile clients

Pinned Post:
- Visible across most clients
- Account-level visibility

System must suggest both.

---

## 7.2 Standard Announcement Format (MVP)

Three-line structure:

Support this community if you'd like.  
Participation is always free. No ads.  
Visit: https://example.community/funding  

Rules:

- Maximum 3 lines preferred
- No emoji
- No hype language
- No urgency tactics
- No implied obligation

---

# 8. Funding Page Requirements

Funding page must:

- Clearly state participation is free
- Clearly state funding is optional
- Explain purpose of funding
- Show secure payment note (Stripe)
- Provide join link
- Avoid marketing pressure

Funding page must never:

- Imply mandatory payment
- Use scarcity tactics
- Hide participation path

---

# 9. Gated Mode (Future – Not MVP)

Commonshub supports creator sovereignty.

Future possibility:

- Optional gated community mode
- Membership-required instances
- Paid access to live streams or video libraries

If implemented:

- Must clearly state access requirements
- Must clarify billing relationship
- Must not imply universal free model

Not implemented in MVP.

---

# 10. Stripe Integration Model (Future Evolution)

Events to handle:

- checkout.session.completed
- customer.subscription.created
- customer.subscription.deleted
- account.updated
- account.application.deauthorized

Stripe becomes authoritative source of billing state.

---

# 11. Operational Guardrails

Never:

- Auto-enable funding
- Auto-gate communities
- Auto-delete creator posts
- Force announcements
- Hide participation option

Always:

- Preserve creator sovereignty
- Preserve optional participation framing
- Maintain clarity in state transitions
- Avoid extractive UX patterns

---

# 12. Decision Rule

If a feature:

- Requires subscription enforcement → Not MVP
- Requires access control logic → Not MVP
- Requires complex billing sync → Not MVP
- Adds operational risk → Not MVP

MVP prioritizes clarity and stability.

---

# 13. Alignment

This document operationalizes:

- Constitution v1.0
- Economic Model v1.0
- Product Principles v1.0
- Brand Voice v1.0

This is the execution layer.
