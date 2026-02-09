# Commonshub — Setup Wizard (MVP)

## Purpose

The setup wizard exists to get a newly created community into a
**presentable, invite-ready state** with minimal cognitive load.

It is intentionally:
- Linear
- Focused on one task at a time
- Free of advanced configuration
- Safe to pause and resume

After completion, the wizard disappears and the dashboard shifts into
a steady-state “monitoring + funding” mode.

---

## What the Wizard Is (and Is Not)

**It is:**
- A guided onboarding flow for first-time community owners
- A way to set defaults that make Mastodon onboarding feel complete
- A Commonshub layer on top of Mastodon

**It is not:**
- A replacement for the Mastodon admin UI
- A full content management system
- A place for ongoing edits or optimization

Edits after setup happen in Mastodon.

---

## Wizard Entry Point

After instance creation, owners land on a simple dashboard state:

> **Your community is live**  
> Finish setup to invite people in.

Primary action:
- **Set up your community**

If the owner leaves mid-wizard, returning to the dashboard resumes the wizard at the current step.

---

## Wizard Structure

### Progress Indicator

- Shown at the top of the wizard
- Shows step name and progress (e.g. 2 of 4)
- No sidebar navigation
- No skipping ahead

---

## Step 1 — Branding

**Goal:**  
Ensure the community looks intentional and welcoming before invites.

**Inputs:**
- Community banner image  
- (Optional) Community icon

**Defaults:**
- Commonshub-branded banner is provided automatically
- Owner may skip uploads and use defaults

**Applied to Mastodon:**
- Instance banner
- Instance thumbnail/icon

**Completion rule:**  
At least one banner is selected (default or custom).

---

## Step 2 — Community Basics

**Goal:**  
Set expectations before someone joins.

**Inputs:**
- About message (public)
- Community norms (short, friendly rules)

**Defaults provided:**
- Warm, non-threatening About copy
- Minimal norms (kindness, respect, no spam)

**Applied to Mastodon:**
- Instance About page
- Rules shown during signup

**Important constraint:**  
These values are written once. Future edits happen in Mastodon.

---

## Step 3 — Welcome Post

**Goal:**  
Ensure new members land in a living space, not an empty feed.

**Inputs:**
- Pinned welcome post text

**Defaults provided:**
- Friendly greeting
- Light norms reminder
- Invitation to introduce themselves
- Suggestion to start with the Local timeline

**Applied to Mastodon:**
- Pinned post in Local timeline

---

## Step 4 — Funding (Optional)

This step is **always offered**, never required.

### Framing

> **Support your community (optional)**  
> You can enable funding now or skip this and turn it on later.

### Actions

- **Enable funding**
  - Enters Stripe connection flow
- **Skip for now**
  - Completes setup

### Funding Types (plan-dependent)

- Monthly support
- One-time tips
- Goal-based campaigns (Growth plan)

### Important Principles

- Payments happen outside Mastodon
- Funding appears only via posts or announcements
- No ads, popups, or interruptions

---

## Wizard Completion

After the final step (or skipping funding), the wizard exits.

The owner is returned to the main dashboard.

---

## Post-Wizard Dashboard (Steady State)

Once setup is complete, the dashboard becomes quiet and minimal.

### Always visible sections

#### 1. Community status
- Live / healthy
- Member count
- Post count
- Hosting status

#### 2. Funding
- **If enabled:** status + money raised
- **If declined:** prominent “Enable funding” button

Funding can be enabled at any time via the same Stripe flow.

#### 3. Primary actions
- Invite members
- Visit community

---

## Editing After Setup

Commonshub does not attempt to stay in sync with Mastodon edits.

After setup:
- Dashboard shows **“Edit in Mastodon”** links
- Changes made directly in Mastodon do not propagate back

This avoids:
- Sync conflicts
- Hidden state
- Confusing authority boundaries

---

## Mastodon Responsibilities vs Commonshub

**Handled by Commonshub**
- Hosting
- Instance creation
- Stripe integration
- Invite links
- Funding pages

**Handled by Mastodon**
- Account creation
- Feeds and timelines
- Moderation
- Content editing
- Rules enforcement

---

## Design Philosophy

- Calm over clever
- Stewardship over optimization
- Defaults over decisions
- Trust over control

The wizard exists to get owners to “done” — not to teach Mastodon.
