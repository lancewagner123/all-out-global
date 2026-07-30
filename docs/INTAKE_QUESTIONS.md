# New Project Intake Questionnaire

Standard question set for kicking off any new project in this factory. See
`factory_instructions.md` §2 "Intake — triggered by Lance, not inferred" for when and how this
gets used — in short: only surface this when Lance actually asks for it ("I'd like to start a
new project," "new project questionnaire," or similar), then present these questions and collect
his answers. The answers become the raw material for that project's `docs/BUILD_BRIEF.md`
(CONFIRMED / SOURCED / UNVERIFIED / CONTRADICTED) — reconcile them into that structure rather
than pasting the raw Q&A as the brief itself.

Present it as a plain chat message (per `factory_instructions.md` §2, not via `AskUserQuestion`).
For the pick-list questions (tone, style, strategy), show the options as written and let the
client choose; they can always answer in free text.

Merged and evolved from: a generic project-intake list, the specific gaps that showed up during
the AKC Electric build (a real license misprint, an unapproved services list inferred from
reviews, unverified-origin stock photos next to a differentiator claim about who does the work, a
family member who had to stay off the site), and the direction/style/strategy pick-lists added
during the Norse Foundry build. Nothing here is project-specific — it's generalized to fit any
project type this factory takes on.

> **Do not renumber questions 1–3.** `factory_instructions.md` §2 and `_template/README.md`
> reference them by number (Q1 = name, Q2 = project type, Q3 = existing URL). Add or reorder
> anything from Q4 onward freely, but keep 1–3 fixed or the intake workflow breaks.

---

## Project scope

1. What is the business/project name? (Note both the customer-facing/trade name and the
   legal/registered name if they differ.)
2. Is this a new website, rebuild, landing page, catalog, portfolio, or special project?
3. What is the existing website URL (if any)?
4. Provide a one-sentence description of the business/project:
5. What type or category of business is this?

## Offering & audience

6. What are the main services, products, offers, or content? Which of these are
   confirmed/owner-approved to publish, versus things discovered through research (a business
   card, reviews, directory listings) but not yet confirmed?
7. Who is the primary customer/audience?
8. What main action should visitors take? (call, request quote, book, buy, visit, subscribe,
   download, etc.)

## Direction & style

9. **Preferred tone** — pick the closest one or two:
   - Bold and direct
   - Editorial and polished
   - Fantasy / mythology
   - Friendly and local
   - Playful
   - Practical and utilitarian
   - Premium first
   - Warm and personal
   - Free text / custom notes
10. **Style preferences**
    - *The feel* (select any that fit): Photo-heavy · Clean & minimal · Dense / information-forward ·
      Premium / luxury · Warm / community feel · Bold, CTA-heavy · Illustrated accents ·
      Dark palette · Light palette
    - *The layout* (optional — pick one if you have a preference, otherwise we'll recommend one):
      One long scrolling page · Classic multi-page (Home · About · Services/Products · Contact) ·
      Browsable grid / catalog · Big imagery / gallery-forward · Story-style, section by section ·
      Not sure — you decide
    - *Anything else:* sites you like or dislike (links help most), specific colors, brand assets,
      or visual direction.
11. **Strategy style** — what should the site emphasize most? Pick the one that fits, from the
    group matching this business type:
    - **Restaurant:** Trust-first · Premium-brand · Menu-first · Atmosphere-first · Catering / order-first
    - **Contractor / trades:** Estimate-first · Project-proof · Premium-craft
    - **Creator / catalog:** Catalog-first · Story / world-first · Support-first
    - **Venue / event:** Gallery-first · Booking-first · Experience-first
    - **Other / general:** Trust-first · Leads / enquiry-first · Brand-first · Information-first

## Contact & reach

12. What is the best contact path? (phone, email, form, booking link, social profile, address,
    etc.) If multiple phone numbers/emails exist, which single one should be published?
13. What is the location or service area for this business? Does it vary by service (e.g. one
    offering is regional, another statewide)? Should a street address actually be published, or
    hidden because this is a service-area business?
14. What are the days and hours or availability — or should hours be omitted entirely?

## Trust & credibility

15. Provide any available trust proof: (reviews, licenses, certifications, years in business,
    insurance, testimonials, case studies, real photos, awards, etc.) For any license/
    registration number, confirm the exact digits. For any accreditation seal (BBB, etc.), can
    we get the official embeddable version rather than a downloaded/recreated image?
16. Who actually does the work — the named owner(s) personally, or a broader team/subcontractors?
    Matters if the copy is going to claim something like "it's always us who shows up."

## Assets & functionality

17. Logo/photo/assets status? Are photos real images of the actual people/work, or stock/
    AI-generated — and if stock/AI, can usage rights/licensing be confirmed? Any photos that
    must not be implied as the owner's own team or actual work? Any brand guide, fonts, or set
    colors we should follow?
18. What functionality does the site need? (select any, and note which are must-haves)
    - Contact form · Online booking / scheduling · Newsletter signup · Online store, or "shop"
      links out to an existing store · Map / directions · Social media links or feed · Photo
      gallery · Multi-language · Other
    - *Note:* a static site has no backend — forms, booking, and newsletter signups need a
      third-party service or embed. Flag anything that must actually submit or process data so we
      can plan for it.

## Guardrails

19. Are there known items/topics/statements that must be included somewhere on this website?
20. Are there known items/topics/statements that must be excluded/avoided? Including any
    specific people, old addresses, prior business names, or associations that should never
    appear.
21. Are there any facts that must be exact? (numbers prone to drift: license numbers, founding
    year, phone numbers)
22. Are there any known claims that should not be made?
23. Are there any legal, pricing, policy, service-limit, or disclaimer issues? Including, for
    reviews specifically — are we linking out only, or is anything being quoted or written as a
    testimonial? (Copying review text or writing testimonials can violate platform terms or FTC
    rules.)

## Delivery

24. Preview goal? (3 rough concepts, polished customer previews, delivery-ready site, etc.)
25. Delivery goal? (local files, hosting-ready static site, GitHub repo, production deployment,
    etc.)
26. Domain & hosting — is there a registered domain for this site? Who controls it (registrar /
    DNS)? Any preference for where it's hosted, or should we recommend? (Factory default: static
    hosting on GitHub Pages, with a custom domain wired up once it's settled.)
