# Field Journal — All Out Global

Project folder: `C:\Users\lance\Claude\website generator\All Out Global`
Factory root: `C:\Users\lance\Claude\website generator`
Built against: `factory_instructions.md` v2026-07-28

This journal is a reconstruction record, not a changelog. Entries should let a future
LLM/agent rebuild the reasoning, not just the file list. Read this before major work;
append after meaningful work — automatically, without being asked (see
`factory_instructions.md` §8).

Entry format: `## YYYYMMDD HH:mm UTC-07:00 — short title`, then whichever of these apply:
what was worked on, why, files/folders/systems touched, decisions made, problems
encountered, lessons learned, current project state, next steps, and
assumptions/constraints/risks.

Two special entry types (factory_instructions.md §8):
- **Delivery entry** — written at ship: what's deployed, where, what's deliberately
  unfinished, what would come next if asked.
- **Wake entry** — written on revival, before anything changes: what was asked for, what
  was found still true, what had rotted since delivery.

---

## 20260729 23:26 UTC-07:00 — Project initialized, site concept worked out pre-intake

**What was worked on**
Lance moved an empty `All Out Global` folder into the factory root and asked to start a new
site. Before scaffolding, we spent the conversation iterating on what the site actually is —
see concept summary below, since this shapes the questionnaire answers and the eventual
`docs/BUILD_BRIEF.md` more than a typical single-service small-business site would. Folder was
then created from `_template\` per `factory_instructions.md` §2 step 4. No existing website for
this project (confirmed by Lance) — no scrape step needed.

**Site concept (reconstructed from pre-intake discussion, not yet client-confirmed as a brief)**
All Out Global is a threat-awareness content hub with three monetization tracks, not a
single-service site:
1. **Content/affiliate** — a "current events" module (sourced, non-exploitative treatment of
   real incidents — explicitly NOT naming/exploiting individual victims, no causal "this could
   have been prevented" claims) feeding into evergreen threat-identification guides, which feed
   into product/service review & comparison pages (security systems, firearms & training,
   personal security services, bunkers/hardened storage, food & water storage) with disclosed
   affiliate/referral links.
2. **Direct consulting** — paid engagements (personal risk assessments, residential/commercial
   security program design, executive/event protection planning), booked directly from vertical
   hub pages, sitting alongside the affiliate content rather than replacing it.
3. **First-party e-commerce** — an owned "All Out Global" merchandise line (protective gloves,
   ballistic apparel, LEO/security workwear) sold directly, positioned next to reviewed
   third-party alternatives in the same merchandise section.

Four vertical hubs organize everything: Personal, Residential, Commercial, Entertainment/
High-Profile. Personal hub carries the new Security & Tactical Merchandise sub-category
(third-party reviewed gear + the owned line).

**Compliance flags raised during discussion — carry these into the build, not just the chat**
- FTC affiliate disclosure required, conspicuously, on every page with affiliate links — build
  the disclosure component once, reuse everywhere.
- Body armor sales are legally restricted in some jurisdictions (e.g., NY requires in-person
  purchase/ID verification, no remote sale) — checkout flow for the owned ballistic-apparel line
  needs jurisdiction-aware handling, not a generic cart.
- Any "bulletproof"/NIJ-rated claim on owned or reviewed products must be accurate and
  substantiated — false protective-rating claims are a serious liability exposure, not an
  ordinary copy error.
- Current-events content must stay sourced/dated/linked and avoid naming private victims —
  reputational and defamation/privacy risk if handled carelessly, and the whole reason this
  needs its own editorial discipline rather than being treated as ordinary marketing copy.

**Files/folders/systems touched**
Scaffolding only so far: `CLAUDE.md`, `.gitignore`, `.claude/launch.json` (renamed to
`all-out-global-dev-server`, port 8847 — 8843/8844/8845/8846 already taken by Que Chevere/AKC
Electric/Easy Website/Arizona Combat Sports), this journal.

**Current project state**
Scaffolding only. No `docs/BUILD_BRIEF.md` yet, no HTML written, no questionnaire answered.

**Next steps**
1. Run the standard intake questionnaire (`docs/INTAKE_QUESTIONS.md`) — questions 1 (name) and
   3 (existing site) are already answered: "All Out Global", no existing site.
2. Given the concept above is materially more complex than a standard single-service brief
   (three revenue streams, regulated-product checkout, editorial policy for current events),
   flag to Lance that `docs/BUILD_BRIEF.md` for this site will need its own sections beyond the
   template's usual scope — monetization-track breakdown, compliance/legal notes, and an
   editorial policy for the current-events module — not just facts-about-the-business.
3. Reconcile everything into `docs/BUILD_BRIEF.md` per the CONFIRMED/SOURCED/UNVERIFIED/
   CONTRADICTED convention before any site copy gets written.
4. Build the site; `git init`; confirm public/private with Lance before ever pushing (`docs/`
   is gitignored by default — see §5, doubly relevant here given how much of the above is
   commercially/legally sensitive).

---

## 20260729 23:48 UTC-07:00 — Intake questionnaire answered, BUILD_BRIEF.md written

**What was worked on**
Presented the standard intake questionnaire, Lance answered it, reconciled answers into
`docs/BUILD_BRIEF.md` per the CONFIRMED/SOURCED/UNVERIFIED/CONTRADICTED convention.

**Decisions made**
- Confirmed: new website, no existing site, hidden location (24/7 online business), subcontractor
  model, bold-and-direct tone, photo-heavy, Creator/Catalog strategy group, GitHub-repo-first
  static delivery, no domain yet.
- Confirmed guardrail: no firearm sales on this site.
- Confirmed known compliance items still to resolve before launch: affiliate disclosure
  agreements (not yet signed), body-armor jurisdiction restrictions, protective-rating claim
  accuracy.

**Problem flagged, not resolved**
Two of Lance's answers point in different directions and haven't been reconciled: the core
positioning is "sell competence and confidence, not fear" (products as tools of skill, gear
recs as earned trust) — but the tone answer chose "bold and direct, potentially using shock and
tragedy as motivation," and the functionality answer listed "victim-related articles" as planned
content. The shock/victim-content direction is also where the real reputational/legal exposure
sits (exploiting real tragedies as a sales hook, defamation/privacy risk on sensitive cases) —
raised earlier in the same conversation as a concern. Logged as open item §10.1 in the brief
rather than silently picked one way or the other. **Needs Lance's explicit call before any
current-events or victim-adjacent copy gets drafted.**

**Current project state**
`docs/BUILD_BRIEF.md` exists and is the source of truth for this build. No HTML written yet, no
brand assets available (to be provided later), no social accounts created yet (Lance wants new
ones made for this business — doesn't exist yet, tracked as open item §10.2), no affiliate
agreements in place.

**Next steps**
1. Get Lance's decision on the tone/positioning tension (brief §10.1) before drafting any
   current-events, victim-related, or "shock" framed copy.
2. Rough concepts next (per delivery-goal answer), with placeholder branding until real assets
   arrive.
3. Plan the non-static pieces this site actually needs beyond the template default: e-commerce/
   cart for owned merchandise (with jurisdiction-aware checkout for body armor), consultation
   booking for the direct-consulting track, and a content/article system for the current-events
   pillar — none of these are solved by the factory's usual static-site + third-party-embed
   pattern alone; needs its own plan.
4. `git init` once there's something to commit; confirm public/private with Lance before pushing.

---

## 20260729 23:51 UTC-07:00 — Tone/positioning tension resolved

**What was worked on**
Followed up on the open tension logged in the prior entry (§10.1 in `docs/BUILD_BRIEF.md`) —
"competence and confidence" positioning vs. "shock and tragedy" tone pick.

**Decision (CONFIRMED by Lance)**
Trend-level current events only — **no individual victims ever named.** Purpose: help visitors
understand threat potential, build awareness, and see All Out Global as where they come to
understand threats and buy/consult their way to preparedness. Explicitly not fear-based. "Bold
and direct" stands as the tone; "shock and tragedy" does not. Updated `docs/BUILD_BRIEF.md` §2,
§6, and §10 to reflect this as resolved rather than open.

**Current project state**
Editorial policy for current-events/security-article content is now settled. Remaining open
items in the brief (§10): social accounts not yet created, affiliate agreements not yet signed,
body-armor jurisdiction handling not yet implemented, no brand assets yet, no trust-proof
material yet.

**Next steps**
Unchanged from prior entry: rough concepts with placeholder branding, then plan the non-static
pieces (cart/checkout, consultation booking, article system) this site needs beyond the factory's
usual static-site pattern.

---

## 20260729 23:59 UTC-07:00 — First rough concept built (4 pages)

**What was worked on**
Built the first rough concept per the resolved brief: `index.html`, `threat-awareness.html`,
`personal-protection.html`, `contact.html`, plus shared CSS components in
`assets/css/style.css` (header/nav incl. mobile toggle, hero, pillar cards, headline/trend
module, placeholder-image blocks, affiliate disclosure banner, footer).

**Decisions made**
- No real photography or logo exists yet (brief §5/§10) — used a reusable `.ph-img` CSS
  placeholder-block component instead of fabricating/sourcing stock photos, so layout is visible
  without risking an unverified-rights image landing in a "rough concept" that could get reused
  by accident. Every placeholder is labeled in visible text, not just alt text.
- Current-events / "In the Headlines" entries are explicitly marked as placeholder copy with a
  `docs/BUILD_BRIEF.md §2` pointer — nothing here is a real sourced event yet, consistent with the
  resolved trend-level-only, no-named-victims editorial policy.
- Affiliate disclosure banner built as a real, reusable component (`.disclosure-banner`) and
  placed directly above the reviewed-gear section on `personal-protection.html`, per §8 — even
  though no affiliate agreements are signed yet, so the component exists before it's needed.
- Body-armor jurisdiction restriction and protective-rating-claim guardrails (§8) called out
  directly in the Ballistic Apparel tile copy, not just left in the brief.
- Social accounts don't exist yet — footer says "Social links — coming soon" rather than
  fabricating placeholder URLs.
- Only one vertical hub built so far (Personal — chosen because it's the one carrying the new
  merchandise sub-category, the most structurally novel part of the concept). Residential/
  Commercial/Entertainment verticals link to `contact.html` for now rather than dead links or
  unbuilt pages.

**Verification**
Local dev server started per `.claude/launch.json` (port 8847). All four pages checked via
`get_page_text` and the accessibility tree (nav links, disclosure banner, merchandise grid, and
CTA links all present and correctly wired). **Could not get a visual screenshot** — the browser
tool's screenshot capture timed out on 4 consecutive attempts this session; layout/spacing was
not visually confirmed, only content/structure. Re-check visually next session before treating
this as review-ready.

**Current project state**
Rough concept v1 exists: home + threat-awareness + one vertical (personal-protection) + contact.
No brand assets, no real current-events copy, no signed affiliate deals, no cart/booking/article
backend — all flagged inline as placeholder/TODO per brief §10.

**Next steps**
1. Get a real visual pass once the screenshot tool is working (or ask Lance to eyeball it at
   `http://localhost:8847/` locally) — confirm hero sizing, mobile nav toggle, and card layout
   actually look right, not just that the HTML is structurally correct.
2. Get Lance's reaction to this direction before building out the remaining three vertical hubs
   or writing real current-events copy.
3. Still open from brief §10: brand assets, social accounts, affiliate agreements, body-armor
   checkout logic, consultation booking/cart tooling.

---

## 20260730 00:12 UTC-07:00 — Pushed to GitHub (public repo, docs included)

**What was worked on**
Lance asked to commit the project "so others can view it." Asked for clarification before
acting, per factory_instructions.md §6 (public/private and docs/ handling must be confirmed with
the client, not defaulted) — this project has more at stake than usual since
`docs/BUILD_BRIEF.md` and this journal contain the full revenue-strategy and compliance
reasoning, not just build facts.

**Decisions (CONFIRMED by Lance, 2026-07-30)**
- Goal: push a GitHub repo (not a live deployed site yet — that's a separate ask, see
  `factory-deploy` skill when it comes up).
- Visibility: **public.**
- `docs/BUILD_BRIEF.md` and `field_journal.md` (this file): **include**, not excluded/gitignored.
  Removed the `docs/` line from `.gitignore` that the template includes by default, with a comment
  explaining why it's absent here specifically (not a template regression — a deliberate,
  confirmed exception for this repo).

**What this means going forward**
Everything in this journal and the brief — including the full three-track revenue model, the
tone/positioning tension and its resolution, and all compliance notes (body armor, affiliate
disclosure, protective-rating claims) — is now publicly visible on GitHub, not just locally.
Future entries in this journal should keep that in mind; nothing here is a private scratchpad
anymore for this particular project.

**Files/systems touched**
`git init`, `.gitignore` edited (removed the `docs/` exclusion, replaced with an explanatory
comment), initial commit (15 files), new GitHub repo created and pushed:
**https://github.com/lancewagner123/all-out-global** (public).

**Current project state**
Repo is live and pushed. No GitHub Pages / live site yet — repo access only, per Lance's stated
goal. Rough concept (4 pages) from the prior entry is what's in the initial commit.

**Next steps**
1. If Lance later wants collaborators added to view/contribute (moot now that it's public, but
   relevant if visibility ever changes to private): `gh repo add-collaborator lancewagner123/all-out-global <username>`.
2. Everything else carried over from the prior entry: visual QA pass, reaction to the concept
   direction, remaining vertical hubs, brand assets, social accounts, affiliate agreements,
   body-armor checkout logic, booking/cart tooling.

---

## 20260730 00:15 UTC-07:00 — Deployed to GitHub Pages

**What was worked on**
Lance asked to deploy the site (a step beyond the prior "push a repo" request). Ran the
`factory-deploy` skill: enabled GitHub Pages on the existing repo (`gh api .../pages`, branch
`master`, path `/`), then per the skill's placeholder-domain rule — no custom domain is
registered yet (brief §9) — added real `<link rel="canonical">` tags on all four pages pointing
at the actual Pages URL instead of leaving them as a "TBD" comment (which is what `index.html`
had). Committed and pushed, then polled `pages/builds/latest` until `status: "built"` (6 polls,
~30s) before confirming.

**Verification**
`curl` against the live URL returned `200` and the correct `<title>`, confirming the deployment
is actually serving the site, not just that the API call succeeded.

**Current project state**
Live at **https://lancewagner123.github.io/all-out-global/** — public GitHub Pages site, no
custom domain yet. This is still the rough-concept build (4 pages, placeholder branding/images,
no real current-events copy) — live now, but not review-ready in the sense of being finished.

**Next steps**
Unchanged from prior entries: visual QA pass (screenshot tool was failing this session — worth
a fresh look), Lance's reaction to the concept direction, remaining vertical hubs, brand assets,
social accounts, affiliate agreements, body-armor checkout logic, booking/cart tooling. Add a
CNAME and swap canonical URLs to the real domain once one is purchased (factory-deploy skill's
own rule).

---

## 20260730 00:56 UTC-07:00 — Added, then reverted, homepage hover-zoom; new standing rule on pushes

**What was worked on**
Added the catalog's Image Hover Zoom pattern (`feature_catalog.html #image-hover-zoom`) to the 4
tiles in Home → "Who We Help," scoped via a new `.tile-zoom` modifier so it didn't also affect
the visually-similar merchandise tiles on `personal-protection.html`. Committed and pushed
(`b48f675`). Verified the CSS rules and class scoping directly via the page's CSSOM (all 4 tiles
carry `.tile-zoom`, `personal-protection.html` tiles don't) — the browser tool's hover simulation
was flaky this session (contradictory `:hover` reads between calls, consistent with the
screenshot tool also failing this session), so did not treat that as proof; CSSOM inspection is
deterministic and was treated as sufficient given the pattern is already proven elsewhere
(Easy Website).

**Reverted per Lance's instruction**
Lance said "do not deploy this" right after the push. Asked for clarification: he wanted the
push itself reverted (not just "don't deploy going forward") — `git revert b48f675` (new commit
`751d870`, not a force-push/reset), pushed. Live Pages site had not yet rebuilt onto the
hover-zoom commit at the time (`pages/builds/latest` still showed the prior commit), so this
revert should mean the hover-zoom change never actually went live before being pulled back.

**New standing rule (Lance confirmed this is general, not one-off)**
Don't `git push` / trigger a deploy without explicit per-change permission, even for small edits.
Local commits are fine; going live is a separate ask every time. Saved as a persistent-memory
feedback entry (`feedback_no_auto_push.md`) so this carries across sessions, not just this one.
**Going forward: commit locally when work is done, but stop and ask before `git push` on this
repo (and any other factory site) unless Lance explicitly says to push/deploy this specific
change.**

**Current project state**
Live site is back to the pre-hover-zoom state. The hover-zoom CSS/HTML change exists in git
history (both the add and the revert) but is not currently applied on `master`'s tip. Not pushed
again until Lance asks.

**Next steps**
Same open items as before. When hover-zoom (or any future change) is ready to go live again,
confirm explicitly before pushing — don't infer permission from "make this change" alone.

---

## 20260730 01:07 UTC-07:00 — New catalog pattern: Floating Social Sidebar

**What was worked on**
Lance asked (question-only) whether a pattern existed for pinning social icons to a floating
side bar, similar to the existing Footer Social Icon Hover. Checked `feature_catalog.html` — no
such pattern existed (Fixed & Utility Elements only had the mobile action bar, Lenis smooth
scroll, and skip-link). He then asked to add it to both the catalog and this site, using
"traditional button logos."

**What was built**
1. **`feature_catalog.html`** (factory root, not under version control): added `#social-sidebar`
   under Fixed & Utility Elements, plus its demo CSS. Marked "in use" citing All Out Global.
   Reuses the Footer Social Icon Hover's motion parameters (scale 1.08 + shadow, 0.15s ease) for
   consistency; the "traditional" part of the request was interpreted as real per-platform brand
   colors + recognizable icon glyphs (not text initials like the footer demo's letter dots) —
   simplified original inline SVGs for Facebook/Instagram/X/YouTube, not traced from any
   copyrighted icon set.
2. **This site**: added `.social-sidebar` CSS and the same markup to all 4 pages (right after the
   skip-link, before the header — global chrome, not page-specific). Fixed to the right edge,
   vertically centered, hidden below 860px (matches the existing mobile-nav breakpoint).

**Decision — placeholder links**
No real social accounts exist yet (brief §10 item 2, unchanged since the rough-concept build).
Used `href="#"` on all four icons with an inline HTML comment flagging it, same treatment as the
footer's existing "Social links — coming soon" text. Don't let these placeholder hrefs get
mistaken for real links later.

**Verification**
Confirmed via the page's CSSOM/DOM (not a screenshot — same tooling reliability caveat as
earlier sessions): `position:fixed`, correct per-icon brand colors, 4 icons with correct
`aria-label`s and one SVG each. **Could not confirm the 860px mobile-hide breakpoint live** —
the browser tool's window-resize this session didn't actually change the tab's `innerWidth` (it
stayed fixed regardless of the requested size), so this is unverified by test, though the media
query is textually identical in structure to the already-working `.main-nav` breakpoint in the
same stylesheet.

**Committed locally only — not pushed**, per the standing no-auto-push rule from the previous
entry.

**Current project state**
Floating social sidebar exists in the local repo (commit `75a1c2e`) on all 4 pages, not yet on
the live site. Catalog updated at the factory root.

**Next steps**
1. Confirm with Lance before pushing this (per the standing rule).
2. If Lance ever wants a visual check on the 860px breakpoint, worth retrying once the browser
   tool's resize/screenshot reliability improves, or checking directly on a phone.
3. Same open items carried forward: real social account URLs (would replace the placeholder
   hrefs here too), brand assets, affiliate agreements, body-armor checkout logic, booking/cart
   tooling.

---

## 20260730 01:12 UTC-07:00 — Instagram icon: flat color → real gradient

**What was worked on**
Lance pointed out the Instagram icon should use its current logo style/color. Replaced the flat
`#E1306C` background with Instagram's actual current brand gradient (`radial-gradient(circle at
30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)` — the standard
yellow→orange→pink→purple treatment) across all 4 pages and in the `feature_catalog.html`
`#social-sidebar` entry (both the live demo and the documented code sample), with a params-table
note that Instagram is the one icon using a gradient rather than a flat brand color like the
other three. Verified via computed style (`backgroundImage`) after a page reload — renders
correctly.

**Current project state**
Committed locally (`38c2db2`) — not pushed, per the standing no-auto-push rule.

**Next steps**
Unchanged from prior entry.

---

## 20260730 01:16 UTC-07:00 — Audited all 4 social icons for current-brand accuracy

**What was worked on**
Lance asked to make sure all logos are current (interpreted "and move" as confirming the hover
motion is consistent across all four, given the exact wording was ambiguous — noted this
interpretation to him in case he meant something else). Audited each icon against real current
branding:
- Facebook (blue circle + white "f") — accurate, no change.
- Instagram (gradient, fixed last entry) — accurate, no change.
- X (black circle + white X mark) — accurate, no change.
- **YouTube — fixed.** Was drawing an outlined rectangle behind the play triangle, the only icon
  using a container-shape glyph instead of a plain glyph like the other three. Removed the
  rectangle, kept just the white play triangle on the red circle — matches how the mark reads
  in a circular badge and brings it in line with the glyph-only style of the rest of the bar.
Updated all 4 site pages and the `feature_catalog.html` `#social-sidebar` demo, with a
params-table note explaining the YouTube glyph-only rationale.

**Verification**
Confirmed via computed style/DOM after reload: all 4 icons' brand colors/gradient correct,
YouTube's SVG now a single `<path>` (no `<rect>`), and the shared `.social-sidebar a:hover` rule
(scale 1.08 + shadow) applies generically to all four — none opted out, so hover motion is
consistent across the bar.

**Current project state**
Committed locally (`4b1bd56`) — not pushed, per the standing no-auto-push rule.

**Next steps**
Unchanged from prior entries.

---

## 20260730 01:25 UTC-07:00 — Palette reworked to dark-gray + green (spinat.fr reference)

**What was worked on**
Lance asked for the entire site's color scheme to be updated to colors similar to the dark gray
and green on https://www.spinat.fr/, then for the floating social sidebar to match the site's
new colors. Navigated there and sampled real rendered colors via computed style rather than
guessing from a screenshot (the browser tool's screenshot capture was still unreliable this
session) — weighted by visible area for backgrounds and by occurrence count for text, so the
result reflects what actually dominates the page rather than an incidental one-off color:
- Dark sections: `#101010` (by far the largest weighted dark background)
- Body text: `#747474`
- Accent: `#2ba837` (green — used across links/buttons/accents)
- Light alt background: `#f3f3f3`
Deliberately left out spinat.fr's minor gold accent (`#f2b01e`) since Lance's ask was specifically
"dark gray and green," not a third color.

**What changed**
`assets/css/style.css` root variables (`--ink`, `--ink-soft`, `--accent`, `--accent-soft`,
`--line`, `--off-white`) replaced, plus every hardcoded color that referenced the old
navy/orange scheme rather than a variable: nav/header text grays, hero overlay + hero text,
`.section-dark` text, `.ph-img` placeholder gradient/text, `.disclosure-banner` border/text
(recolored to a readable dark-green-on-light-green pairing), footer text, and shadow rgba values
(previously tied to the old navy ink). Added `--accent-dark` for the button hover state
(previously a dark red left over from the old palette).

**Social sidebar recolored, per instruction**
Removed the per-platform `--brand` inline styles (Facebook blue, Instagram gradient, X black,
YouTube red) from all 4 pages. `.social-sidebar a` now uses `var(--ink)` as its base background
and switches to `var(--accent)` (green) on hover, instead of individual platform brand colors —
a deliberate site-specific override of the catalog's "traditional" default.

**Catalog updated to document both variants**
`feature_catalog.html` `#social-sidebar` entry's live demo still shows the traditional
brand-color treatment (kept as the general documented default for future sites), but the meta
and params rows now explain All Out Global uses a "site-matched" variant instead, and the code
sample includes that variant's actual CSS as a documented alternative.

**Verification**
Confirmed via computed style after reload: `--ink`/`--accent` resolve correctly, header/button/
sidebar backgrounds all match the new palette, and the sidebar's hover rule correctly switches
background to green. Screenshot tool remained unreliable this session (same caveat as prior
entries) — no pixel-level visual check, verified via CSSOM/computed-style inspection only.

**Current project state**
Committed locally (`ff5ffa1`) — not pushed, per the standing no-auto-push rule.

**Next steps**
Unchanged from prior entries. Worth a real visual check (screenshot tool or Lance's own eyes at
`http://localhost:8847/`) once that tooling is reliable again, given how much of this turn was
verified via computed style rather than sight.

---

## 20260730 01:29 UTC-07:00 — Darkened green accent, added border to social sidebar buttons

**What was worked on**
Lance asked for the green to be slightly darker and a thin green border around each social
sidebar button. `--accent` changed `#2ba837` → `#22862c`; `--accent-dark` (button hover-darken
state) correspondingly darkened `#228a2c` → `#1b6a22` so it stays visually distinct from the new
`--accent` rather than nearly matching it. Added `border: 1px solid var(--accent)` to
`.social-sidebar a` — stays 44×44px since `box-sizing: border-box` is set globally, no layout
shift. Updated the catalog's "site-matched variant" code sample and added a params-table row for
the border, since it's specific to that variant, not the traditional brand-color one.

**Verification**
Confirmed via computed style: `--accent`/`--accent-dark` resolve to the new values, sidebar
button border renders as `1px solid rgb(34, 134, 44)`, box stays 44×44px.

**Current project state**
Committed locally (`2761866`) — not pushed, per the standing no-auto-push rule.

**Next steps**
Unchanged.

---

## 20260730 01:32 UTC-07:00 — Noted future idea: before/after comparison slider

**What was worked on**
Lance flagged (note only, not a build request) that he may eventually want before/after image
comparison sliders contrasting an unprepared vs. a prepared individual. Checked
`feature_catalog.html` — the exact pattern already exists (`#compare-slider`, "Before/After Image
Comparison Slider," Media & Galleries section): draggable handle, `clip-path` mechanism, vanilla
JS/CSS, no dependencies, currently marked "new" (researched 2026-07-27, not built on any factory
site yet). Originally scoped for contractor "prove the work" shots (AKC Electric panel upgrades)
but the mechanism is generic and fits this use case directly.

**Recorded, not built**
Added as open item §10.7 in `docs/BUILD_BRIEF.md` — explicitly a placeholder for intent, not an
active task. The real cost when Lance is ready is two same-framing photos per scenario
(unprepared/prepared pair), not the slider code itself, which is already written and just needs
dropping in.

**Current project state**
No code changes this entry — brief updated only.

**Next steps**
When Lance asks to build this, pull the code directly from `feature_catalog.html#compare-slider`
rather than re-deriving it, and plan the photo pairs first since that's the actual bottleneck.

---

## 20260730 01:35 UTC-07:00 — Reverted to original site colors

**What was worked on**
Lance asked to go back to the original site colors. Used `git revert` (not a hand-edit or
reset) on the two commits that introduced the spinat.fr-modeled dark-gray/green scheme, in
reverse order: `2761866` (green darken + sidebar border) then `ff5ffa1` (the palette rework
itself, which also recolored the social sidebar to match the site instead of per-platform brand
colors). Both reverted cleanly, no conflicts.

**Result**
Back to the original rough-concept palette: `--ink: #0f1620` (navy), `--accent: #c23b22`
(red/orange), and the social sidebar back to per-platform brand colors (Facebook blue, Instagram
gradient, X black, YouTube red) rather than the site-matched dark-gray/green treatment. The
YouTube icon shape fix (plain triangle, no rectangle) and the Instagram gradient — both
independent of the site-palette question — were untouched by this revert and remain in place.

**Verification**
Confirmed via computed style after reload: `--ink`/`--accent` back to original values, header
background back to navy, Facebook icon back to its real brand blue.

**Current project state**
Committed locally (`eeab7ca`, `6b0179b`) — not pushed, per the standing no-auto-push rule. The
dark-gray/green work still exists in git history (both the original commits and these reverts)
if Lance ever wants it back — reachable via `git revert` again on the revert commits, or a
fresh cherry-pick.

**Next steps**
Unchanged from prior entries.

---

## 20260730 01:40 UTC-07:00 — Re-audited icons post-revert; noted future FAQ schema/accordion idea

**What was worked on**
Two things this entry:
1. Lance repeated the "ensure all logos are current and move" check right after the color
   revert. Re-verified via DOM/computed style: Facebook (blue + f), Instagram (gradient +
   camera), X (black + X mark), and YouTube (red + plain triangle) are all still correct and
   unaffected by the color-scheme revert — those two prior fixes (Instagram gradient, YouTube
   shape) live in separate commits from the palette work, so the revert didn't touch them. Hover
   motion (scale 1.08 + shadow) also confirmed still present. No changes needed.
2. Lance noted (not a build request, same "note:" pattern as the before/after slider idea) that
   FAQPage schema + an FAQ accordion should eventually be added to "this page" (unspecified which
   one). Checked the catalog — both patterns already exist: `#faq-schema` (FAQPage Schema, SEO &
   Discoverability) and `#faq-accordion` (FAQ Accordion, Conversion & Lead-Gen), designed as a
   pair. Neither built anywhere in the factory yet. Logged as open item §10.8 in
   `docs/BUILD_BRIEF.md` rather than building — the real blocker is actual FAQ content, which
   doesn't exist yet, same shape of gap as the before/after slider's missing photos.

**Current project state**
No code changes this entry. Brief updated with the new open item.

**Next steps**
When Lance is ready to build the FAQ pattern, confirm which page it belongs on and get real
Q&A content first — the code is already written and just needs the content to pair with it.
