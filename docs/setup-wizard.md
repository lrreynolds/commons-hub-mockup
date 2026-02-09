# Commonshub — Community Setup Wizard (MVP)

## Purpose

The Commonshub setup wizard guides a creator from a newly provisioned (but empty)
Mastodon instance to a **ready-to-invite community** in three calm, focused steps.

The wizard is:
- One-time (dismisses permanently when complete)
- Designed to take ~5 minutes
- Focused on *activation*, not configuration depth
- Explicitly not a replacement for the Mastodon UX

After completion, the dashboard transitions to a quiet monitoring and stewardship role.

---

## Core Principles

- One step per screen
- Fits on a single screen (no scrolling on standard laptops)
- Defaults always allow progression
- Uploads and edits are optional, never blocking
- Only one post is created in the wizard (the pinned welcome post)
- Clear boundary:
  - **Commonshub = setup, stewardship, funding**
  - **Mastodon = posting, interaction, moderation**

---

## Wizard Structure

---

## Step 1 — Brand your community

### Goal
Make the community feel real, owned, and recognizable immediately.

### Fields

1. **Community banner**
   - Default: Commonshub-branded banner (pre-applied)
   - Optional: upload custom image
   - Appears on:
     - Public community page
     - Signup flow

2. **Avatar (owner identity)**
   - Default: placeholder avatar
   - Optional: upload image
   - Appears:
     - Next to every post by the owner
     - As the recognizable “face” of the community

### Helper Copy
> This avatar appears next to every post you make and helps members recognize you.

### Primary Action
**Save and continue**

---

### Developer Notes — Step 1

**Intent**
- This step is about *identity*, not polish.
- Defaults must always be sufficient.

**Implementation Notes**
- Banner + avatar should map directly to Mastodon instance settings.
- If Mastodon APIs do not support setting these at runtime:
  - Apply via instance provisioning scripts
  - Or store values for later manual application
- Do not block progression on uploads.
- No validation beyond file type/size (if implemented at all).

**Fallback**
- If editing later is required, creators will do so via Mastodon.
- Dashboard should not attempt to stay in sync with Mastodon edits.

---

## Step 2 — Community purpose

### Goal
Define intent, expectations, and behavioral norms before anyone joins.

### Fields

1. **Community mission** (About)
   - Short text
   - Default copy provided
   - Shown:
     - On public community page
     - During signup preview

2. **Community norms**
   - Short, friendly rules
   - Default set provided
   - Members must agree during signup

### Guidance
- Norms should be welcoming, not legalistic.
- Text should fit comfortably in a single textarea.

### Primary Action
**Save and continue**

---

### Developer Notes — Step 2

**Intent**
- This is *structural*, not conversational content.
- These values frame the entire community.

**Implementation Notes**
- Maps to:
  - Mastodon instance “About” text
  - Mastodon rules / terms shown during signup
- Do not expose advanced moderation or policy options.
- Keep copy short and editable only during setup.

**Important**
- If creators later edit these in Mastodon:
  - Changes do NOT need to propagate back to Commonshub.
  - Dashboard should remain source-of-truth only during setup.

---

## Step 3 — Welcome your members

### Goal
Set a human tone and invite participation.

### Fields

1. **Pinned welcome post**
   - Editable text
   - Default copy provided
   - Pinned to the top of the Local timeline

### Constraints
- This is the **only post created in the wizard**
- Text only (no media, embeds, or formatting tools)

### Helper Copy
> This post sets the tone for new members. You’ll create all other posts directly in Mastodon.

### Primary Action
**Finish setup**

---

### Developer Notes — Step 3

**Intent**
- This is personal, human, and invitational.
- It should feel easy, not performative.

**Implementation Notes**
- Implement as:
  - Draft text in Commonshub
  - Then create + pin a Mastodon status via API (if possible)
- Text-only is intentional:
  - Avoids media, upload, and preview complexity
  - Reinforces Mastodon as the place for real posting

**Fallback**
- If automated pinning is not feasible:
  - Provide clear instructions or a link to Mastodon
  - Mark the step as “completed” once acknowledged

---

## Wizard Completion State

### Message
> 🎉 Your community is ready

### Explanation
> You’ll post and interact with members directly in Mastodon. Commonshub handles hosting, invites, and funding.

### Primary Actions
- **Visit your community**
- **Invite members**

### Persistent Option
- **Enable funding**

Funding:
- Is optional
- Is not required to complete setup
- Remains visible post-wizard until enabled

---

### Developer Notes — Completion

**Intent**
- This is the payoff moment.
- The creator should feel done, not dropped into more setup.

**Implementation Notes**
- Wizard should never reappear once completed.
- Store completion flag server-side.
- Dashboard layout should change after completion.

---

## Post-Wizard Dashboard Behavior

### What Disappears
- Wizard UI
- Setup editors
- Progress indicators

### What Remains

1. **Status**
   - Live
   - Hosting active

2. **Overview**
   - Member count
   - Post count
   - Funding status

3. **Funding Panel**
   - Shows status if enabled
   - Otherwise shows a clear “Enable funding” action

4. **Primary Actions**
   - Visit community
   - Invite members
   - Enable funding (if not enabled)

### Editing After Setup

- No editing inside Commonshub dashboard
- Subtle breadcrumb only:
  > Edit posts, rules, and branding in Mastodon

---

### Developer Notes — Dashboard

**Intent**
- Quiet, monitoring-oriented, non-distracting.
- Avoid “Chinese menu” syndrome.

**Implementation Notes**
- Treat dashboard as a control plane, not a content surface.
- Do not attempt bi-directional sync with Mastodon state.
- Prefer static or lightly refreshed stats over real-time data.

---

## Explicit Non-Goals (MVP)

- Creating regular posts in the dashboard
- Media uploads outside Mastodon
- Advanced moderation tools
- Analytics or growth dashboards
- Complex billing or payout netting logic
- Multi-step funding configuration inside the wizard

---

## Success Criteria

A creator should:
- Complete setup in under 5 minutes
- Understand where content is posted
- Invite members with confidence
- Enable funding when ready
- Never feel overwhelmed or lost

---

## Summary

The setup wizard is not a configuration panel.
It is an **onboarding experience** designed to get creators to a calm,
confident “ready to invite” state as quickly as possible.

Everything else belongs in Mastodon.
