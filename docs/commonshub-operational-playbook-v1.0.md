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
