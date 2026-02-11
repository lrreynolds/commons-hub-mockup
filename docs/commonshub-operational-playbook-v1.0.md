# Commonshub Operational Playbook v1.0
**Status:** Foundational  
**Scope:** State transitions, automation triggers, lifecycle rules  
**Last Updated:** 2026-02-11  

---

# 1. Purpose

This document defines:

- What happens when creators enable funding
- What happens when funding settings change
- What happens when Stripe disconnects
- When announcements are created
- When pinned posts are updated
- How state transitions behave

This document governs system behavior.

---

# 2. Core States

## Server State

| State | Meaning |
|--------|----------|
| Provisioning | Server is being created |
| Live | Mastodon instance operational |
| Suspended | Hosting paused |
| Deleted | Instance removed |

---

## Community Setup State

| State | Meaning |
|--------|----------|
| Not Started | Wizard not begun |
| In Progress | Wizard mid-flow |
| Complete | Branding + welcome complete |

`commonshub_setup_complete = 1`

---

## Funding State

| Stripe Connected | Funding Enabled | Effective State |
|------------------|-----------------|-----------------|
| No | No | Funding Off |
| Yes | No | Stripe Ready |
| Yes | Yes | Funding Live |

`commonshub_stripe_connected`
`commonshub_funding_enabled`

---

# 3. Funding State Transitions

## A → Stripe Connected

Trigger:
- Stripe Connect successful

System Behavior:
- Dashboard reflects "Stripe connected"
- Funding remains Off
- No announcement created

---

## B → Funding Enabled

Trigger:
- Creator turns on funding

System Behavior (MVP):

1. Dashboard updates to "Live"
2. Funding page becomes public
3. Creator is shown:
   - Announcement template
   - Pinned post template
4. Creator manually posts announcement
5. Creator manually pins post

Future Automation:
- System may auto-generate announcement
- System may auto-pin post via API

---

## C → Funding Modified

Trigger:
- Creator changes pricing or options

System Behavior:
- No silent updates
- Creator prompted:

  "Your funding options changed. Would you like to update your announcement?"

Future:
- Auto-regenerate draft announcement
- Offer "Update pinned post"

---

## D → Funding Disabled

Trigger:
- Creator turns funding off

System Behavior:
- Funding page hidden
- Dashboard reflects Off
- Creator prompted:

  "Funding disabled. Would you like to remove the announcement and unpin the post?"

System does not auto-delete without consent.

---

## E → Stripe Disconnected

Trigger:
- Stripe disconnect event

System Behavior:
- Funding automatically set to Off
- Dashboard reflects "Stripe not connected"
- Funding page hidden
- Creator notified

---

# 4. Announcement Rules

## Why Announcements

Announcements:
- Appear at top of web UI
- Do not rely on pin logic
- Are instance-level

Limitation:
- Not visible in all mobile clients

---

## Announcement Template (MVP)

Three-line standard:

Support this community if you’d like.
Participation is always free. No ads.
Visit: https://example.community/funding

Principles:
- Short
- Calm
- Non-salesy
- Clear optionality

---

# 5. Pinned Post Rules

Pinned post exists because:

- Many mobile clients ignore announcements
- Pins are universally visible

Pinned post should:

- Mirror announcement
- Be equally short
- Link to funding page

System Rule:
- When funding is enabled, suggest both
- Never auto-pin without explicit consent

---

# 6. Funding Page Rules

Funding page must:

- State participation is free
- State funding is optional
- Explain purpose of funding
- Show secure payment note
- Provide join link

Funding page must never:

- Imply mandatory payment
- Use urgency tactics
- Hide join option

---

# 7. Gated Community Mode (Future)

If creator enables gated mode (future feature):

System must:

- Clearly label community as gated
- Clarify access requirements
- Clarify billing relationship
- Clarify refund policy (Stripe)

Announcements must reflect:

"Access requires active membership."

Never assume universal free model.

---

# 8. Creator Sovereignty Rules

Commonshub:

- Suggests language
- Suggests best practices
- Provides templates

Commonshub does NOT:

- Override creator funding decisions
- Enforce free participation
- Remove announcements automatically
- Control pricing

---

# 9. State Storage Rules (MVP)

LocalStorage keys (mock):

- commonshub_setup_complete
- commonshub_setup_step
- commonshub_stripe_connected
- commonshub_funding_enabled
- commonshub_funding_subs_on
- commonshub_funding_tips_on

Future:
- Persisted in backend database
- Stripe webhooks authoritative

---

# 10. Stripe Webhook Model (Future)

Events to handle:

- checkout.session.completed
- customer.subscription.created
- customer.subscription.deleted
- account.updated
- account.application.deauthorized

System must:

- Update funding state
- Update entitlement layer (if implemented)
- Notify creator of changes

---

# 11. Operational Guardrails

Never:

- Auto-enable funding
- Auto-gate community
- Auto-delete posts
- Force announcement creation
- Hide join link when funding enabled

Always:

- Preserve optionality
- Preserve clarity
- Preserve creator control

---

# 12. Alignment With Constitution

This playbook operationalizes:

- Creator sovereignty
- Non-extractive funding
- Optional participation
- Clear boundaries

This document governs behavior, not philosophy.
