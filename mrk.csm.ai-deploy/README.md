# Mark Bryan Casim — portfolio

Plain HTML/CSS/JavaScript redesign of https://markcasim02.github.io/mrk.csm.ai/.
Source: public repository `markcasim02/mrk.csm.ai`, branch `main`, snapshot `4ccd8f3`.
A local Git baseline preserves the downloaded snapshot for review with `git diff`.
This is not a full clone of upstream history. Nothing was pushed or published.

## Preview

From this directory run `node preview.cjs`, then open http://127.0.0.1:4173/mrk.csm.ai/ .
The server binds only to localhost and reproduces the GitHub Pages base path.
No installation or build step is required. Stop with Ctrl+C.

## Maintain

- `index.html`: portfolio copy, case study, original screenshot captions, and tool tabs.
- `styles.css`: theme variables, layouts, responsive rules, reduced-motion support.
- `app.js`: navigation, accessible tabs, and image viewer.
- `assets/*.png`: all 14 untouched original screenshots.
- `assets/thumbs/*.webp`: optimized previews, approximately 300 KB combined.
- `assets/fonts/`: self-hosted Poppins fonts and OFL license.

Keep asset links relative for `/mrk.csm.ai/`. No framework, runtime dependency,
analytics, form backend, or live AI/CRM connection was added. No résumé existed
in the source repository, so no résumé action was added.

## Design and content

Reference: https://portfolio.brewedops.cloud/ . Inspected desktop and mobile
home layouts, project cards, and a screenshot overlay. The redesign adapts the
profile sidebar, cream/navy/orange palette, bold rounded typography, bordered
cards, blue gradient frames, and restrained interactions. All implementation is
original; no reference source code, personal content, or proprietary assets were copied.
Mobile uses a compact profile header and accessible menu.

RapidFlow is an independent project. Booking and call logging are shown separately.
Original employment details, contact email, tools, learning distinctions, fixes,
four screenshot groups, and all images are preserved. Claims describe the existing
project evidence. No live calls or connected accounts were exercised.

## Checks performed

- Browser visual inspection at 390 × 844, 768 × 1024, and 1440 × 1000.
- No horizontal overflow at those widths; inspected menu, case study, gallery, and contact.
- All four tabs; arrow-key selection and End-key navigation.
- Original image loading, next-image keyboard navigation, Escape close, focus return,
  and focus wrap inside the dialog.
- Mobile menu opens, closes after navigation, and closes with Escape with focus return.
- Internal targets and original email destination checked. No email was sent.
- JavaScript syntax check, `node validate.cjs` with server running, and `git diff --check`.
- Static validation: 14 originals, four tabs, and 30 resources returning HTTP 200
  beneath `/mrk.csm.ai/`.
- Browser console returned no warnings or errors.
- Reduced-motion rules and reserved image dimensions inspected in code;
  OS reduced-motion preferences and layout-shift metrics were not instrumented.

No build/test configuration or repository instruction files existed upstream.
Safari, Firefox, screen readers, live integrations, and email delivery were not tested.

## Current design update — September 13

The visual direction now follows the original portfolio: dark slate backgrounds,
amber primary actions, teal highlights, compact top navigation, sharper cards,
monospace labels, and a centered contact section. The original Space Grotesk,
Inter, and JetBrains Mono families load from Google Fonts with system fallbacks.
The moving logo strip, pause control, case study, and accessible viewer remain.
Verified the dark theme at desktop and mobile widths, navigation, Make.com tab,
image viewer, Escape close, asset validation, and JavaScript syntax.

## Featured website update

The featured overview card now links to the RapidFlow customer website and shows
a sandboxed, non-interactive embedded preview. The new customer-experience section
covers AVA chat, the separate service-request form, and service/hour/coverage information.
The original 14 implementation screenshots remain in the evidence gallery.
The public website UI and source were inspected. Source code routes form requests
and chat messages to Make.com; no backend submissions, chatbot answers, or automatic
form-filling were tested or claimed. Desktop/mobile layout and the external link were checked.
The preview needs the public RapidFlow site to be reachable; the direct link remains available.

## Expanded toolkit

Replaced the former Explored / Currently learning text with a second animated
strip listing the eleven tools confirmed by Mark: Claude, Claude Code, OpenAI
ChatGPT, Codex, Gemini, GoHighLevel, n8n, Zapier, Retell AI, Bland AI, and Twilio.
Uses the same dark toolkit layout, independent pause/resume, hover/focus pause,
and a static wrapping layout for reduced motion. Logos are saved locally;
provenance and the Lobe Icons license are in assets/logos. All eleven loaded in
browser checks. Verified independent pause state, mobile layout without overflow,
and no browser console errors. The original core toolkit remains at the top.

The Hands-on Toolkit also includes Google Workspace, ElevenLabs, WhatsApp,
Telegram, and Slack for the RapidFlow AI receptionist. Their local brand assets
join Vapi, Make.com, and HubSpot in the same moving loop with its own pause
control and reduced-motion fallback.

## Profile and contact panel

The hero now includes Mark's supplied portrait with a brighter treatment and
geometric cyberpunk frame. Gmail, WhatsApp, and Telegram are clickable actions
(`mailto:`, `wa.me`, and `t.me`) beneath the profile details. The portrait is
stored at `assets/mark-bryan.jpg`.

The visual theme defaults to dark, with a Light / Dark toggle in the header.
The selection is saved in local storage for the viewer and updates the page
theme color metadata as it changes. Toolkit logo tiles are transparent so each
mark sits directly on the current surface; monochrome marks are inverted only
when needed for contrast.

The page also has a low-contrast field of geometric background objects that
drift at different speeds behind the content in both themes. It is CSS-only,
does not affect layout, and stops when the viewer enables reduced motion.
