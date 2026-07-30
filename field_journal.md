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
