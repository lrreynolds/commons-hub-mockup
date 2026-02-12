Commonshub — Mastodon Integration Map (MVP)

Status: Engineering Reference
Scope: Defines what Commonshub can control vs what requires Mastodon admin fallback
Last Updated: 2026-02-12

⸻

1. Purpose

This document maps:
	•	Mastodon primitives
	•	Desired Commonshub behavior
	•	Implementation path
	•	Required fallback behavior

It prevents dashboard promises that Mastodon cannot support.

This document supports:
	•	Product Spec v1.1
	•	Platform Architecture v1.0

⸻

2. Control Surface Map (MVP)

⸻

2.1 Instance Metadata

About / Server Description

Primitive: Instance description (About text)
Desired: Editable from Commonshub dashboard

Implementation path:
	1.	Seed during provisioning
	2.	Update via official API (verify support)

Fallback: Creator edits in Mastodon admin UI
Confidence: Medium

⸻

Community Rules (Signup Rules)

Primitive: Instance rules list
Desired: Editable from dashboard

Implementation path:
	1.	Seed during provisioning
	2.	Update via API (verify support)

Fallback: Mastodon admin UI
Confidence: Medium

⸻

2.2 Branding

Server Icon + Banner

Primitive: Instance thumbnail and banner
Desired: Default branding at provisioning; optional later edit

Implementation path:
	1.	Provisioning defaults
	2.	API update (verify support)

Fallback: Mastodon admin UI
Confidence: Medium

⸻

2.3 Invites

Invite Link

Primitive: Admin-generated invite link
Desired: Single canonical invite link visible in dashboard

Implementation path (ranked):
	1.	Official API (if supported)
	2.	Admin automation using instance credentials
	3.	Pre-generated long-lived invite at provisioning

Fallback: Creator generates invite in Mastodon admin UI
Confidence: Low–Medium

Open questions:
	•	Is invite creation supported via official API?
	•	Can long-lived reusable invites be created safely?

⸻

2.4 Posts + Pins

Pinned Welcome Post

Primitive: Status post + pinned state
Desired: Dashboard can create and optionally pin welcome post

Implementation path (ranked):
	1.	API post creation
	2.	API pin toggle (verify support)
	3.	Admin automation
	4.	Creator posts and pins manually

Fallback: Creator posts and pins in Mastodon UI
Confidence: Medium

⸻

Funding Announcement

Primitive: Instance announcement + status post
Desired: Creator can publish funding announcement and/or pinned funding post

Implementation path (ranked):
	1.	Official announcement API (verify support)
	2.	Admin automation
	3.	Manual posting (MVP default)

Fallback: Creator posts manually
Confidence: Medium

MVP Rule:
Announcements and pins are suggested — never auto-created without consent.

⸻

2.5 Default Timeline Behavior

Default View (Local Timeline)

Primitive: Client-level behavior
Desired: Encourage Local feed as first experience

Implementation path:
	•	No known server-side enforcement
	•	Provide guidance only

Fallback: Creator guidance
Confidence: Low

⸻

2.6 Mastodon Admin Access

Mastodon Admin Dashboard Link

Primitive: Mastodon admin panel (/admin)
Desired: Dashboard button linking directly to Mastodon admin interface

⸻

Production Behavior

Commonshub dashboard includes:
	•	Sign in to Mastodon
	•	Mastodon dashboard

Links:
	•	Sign-in → https://{instance-domain}/auth/sign_in
	•	Admin → https://{instance-domain}/admin

Buttons open in a new tab.

**Expected outcomes:**

| User State | Result |
|------------|--------|
| Logged in as admin | Admin panel opens |
| Logged in as non-admin | Mastodon shows permission error |
| Not logged in | Mastodon redirects to sign-in flow |

Important Constraints

Commonshub:
	•	Cannot preflight authentication state
	•	Cannot detect admin permissions without deeper API integration
	•	Must not inject auth tokens
	•	Must not override Mastodon permission logic

Attempts to force login using redirect parameters (e.g. redirect_to)
are not guaranteed to work across Mastodon versions.

⸻

MVP Mock Behavior (Prototype Only)

In the HTML mock:
	•	Clicking “Sign in to Mastodon” sets:
	•	localStorage.commonshub_mastodon_login_attempted = "1"
	•	Dashboard reloads
	•	“Sign in” button is replaced with “Mastodon dashboard”

This simulates login in the prototype only.

Production must rely entirely on Mastodon’s authentication system.

⸻

UX Principle

Admin access must be:
	•	Discoverable
	•	Direct
	•	Not buried inside Mastodon navigation
	•	Clearly separate from the public “Visit community” link

Commonshub acts as the control plane.
Mastodon remains the operational surface.

Confidence: High (stable /admin endpoint)

⸻

3. Funding Integration Boundary

MVP stance:
	•	Funding is message-driven
	•	No Mastodon UI modification
	•	No widgets
	•	No paywalls
	•	No access enforcement

Funding surfaces:
	•	Announcement
	•	Pinned post
	•	External funding page

Mastodon remains the social layer.
Commonshub remains the control layer.

⸻

4. Enforcement & Guardrails

Commonshub must NOT:
	•	Assume API capabilities that are undocumented
	•	Promise automation that cannot be guaranteed
	•	Override creator actions inside Mastodon

When capability is uncertain:
	•	Default to manual fallback
	•	Provide dashboard guidance copy

⸻

5. Future Extensions (Not MVP)
	•	Gated community enforcement
	•	Subscription state sync with Mastodon roles
	•	Automated entitlement enforcement
	•	Advanced analytics integration
	•	Multi-tier access

These require separate architectural design and are intentionally excluded from MVP.

⸻

6. Summary

This document defines the boundary between:
	•	Mastodon capabilities
	•	Commonshub orchestration
	•	Creator manual control

It protects product clarity and prevents overreach.
