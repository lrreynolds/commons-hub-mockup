Commonshub — Pilot Branding Spec (v1)

Purpose

This document defines the minimum assets and identity settings required to launch a production-quality pilot community.

It is designed for:
	•	fast white-glove onboarding
	•	consistent visual quality
	•	reuse in the future guided setup flow

This is not a full customization system.
This is the 90-minute launch kit.

⸻

1. Creator Asset Request (External)

Send this to the creator.

What we need from you
	1.	Community / Show Name
	2.	Desired subdomain
Example: community.indicationsandwarnings.com
	3.	Square logo
Preferred: 400 × 400 px or larger
	4.	Header / banner image (optional)
If not provided, we will generate one.
	5.	Short description (1–2 sentences)
What this community is for.

That’s it.

We handle everything else.

⸻

2. Visual Asset Specifications (Internal)

2.1 Server Header

Primary visual identity.

Size:
1500 × 500 px

Safe area:
1200 × 320 px centered

Format: PNG or JPG

⸻

2.2 Server Thumbnail

Used in directories and previews.

Size:
640 × 360 px

⸻

2.3 OpenGraph Share Image

Controls how the community appears when shared.

Size:
1200 × 630 px

This is required for every pilot.

⸻

2.4 Instance / System Avatar

Used for:
	•	admin account
	•	system voice

Size:
400 × 400 px

⸻

2.5 Creator Avatars

For hosts.

Size:
400 × 400 px

⸻

2.6 Favicon / App Icon

Size:
512 × 512 px PNG

⸻

3. Identity Settings

3.1 Server Display Name

Format:

{Show Name} Community

Example:
Indications & Warnings Community

⸻

3.2 Short Description

Target: 120–160 characters

Appears on:
	•	homepage
	•	previews
	•	directories

⸻

3.3 Extended Description

Used on About page.

Structure:
	1.	What this community is
	2.	Who it is for
	3.	Participation tone
	4.	Link to primary platform

⸻

3.4 Hashtag

Primary discussion tag.

Example:

#IndicationsAndWarnings

Used for:
	•	episode threads
	•	discovery
	•	rhythm

⸻

4. Default Content to Seed

4.1 Welcome Post (Pinned)

Must:
	•	set tone
	•	explain purpose
	•	tell people what to do next

⸻

4.2 First Discussion Thread

Template:

Episode {X} — After-Action Discussion

4.3 Follow Recommendations

Minimum:
	•	hosts
	•	show account
	•	5–10 aligned accounts

⸻

5. Launch Readiness Checklist

A pilot is “presentable” when:
	•	Branding applied
	•	About page complete
	•	Rules in place
	•	Welcome post pinned
	•	3–5 seed posts live
	•	Test accounts visible in local feed

⸻

6. Commonshub Fallback Asset System

If the creator provides nothing, use:

6.1 Default Header Template

Neutral, high-quality.

Swap:
	•	show name
	•	logo
	•	tagline

⸻

6.2 Default OpenGraph Template

Text:

The discussion space for {Show Name}
Join the conversation

The discussion space for {Show Name}
Join the conversation

6.3 Default Thumbnail

Logo + name.

⸻

7. File Naming Convention

Use:

header.png
thumbnail.png
og.png
logo.png
avatar-admin.png
avatar-host-{name}.png

This enables future automation.

⸻

8. Storage Structure

Per pilot:

/pilots/{community-slug}/assets
/pilots/{community-slug}/copy

9. Time Budget (White-Glove Target)

With assets provided:

⏱ 60–90 minutes → fully branded, presentable community

Without assets (fallback system):

⏱ 90–120 minutes

⸻

10. Definition of Success for Pilot Branding

The creator sees the demo and says:

“This already feels like our space.”

No rough edges.
No visible “default Mastodon”.
