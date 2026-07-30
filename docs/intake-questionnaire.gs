/**
 * Website Factory — New Project Intake Questionnaire → Google Form builder
 * -------------------------------------------------------------------------
 * Run this once in Google Apps Script (script.google.com) to generate the
 * full intake form in your Google account. See the step-by-step at the bottom.
 *
 * Field types: short answer, paragraph, multiple-choice (pick one),
 * checkboxes (pick many). Only "business name" is required so clients are
 * never blocked — flip any question to required in the form UI if you want.
 */
function createIntakeForm() {
  var form = FormApp.create('New Project Intake Questionnaire');
  form.setDescription(
    'The standard question set for kicking off a new project. Your answers become the ' +
    'project brief — the single source of truth for what goes on the site. Answer what ' +
    'you can; “not sure” is a fine answer.');
  form.setProgressBar(true);

  // ---- 1. Project scope (page 1) ----
  form.addSectionHeaderItem().setTitle('Project scope');
  form.addTextItem()
    .setTitle('What is the business/project name?')
    .setHelpText('Note both the customer-facing/trade name and the legal/registered name if they differ.')
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Is this a new website, rebuild, landing page, catalog, portfolio, or special project?')
    .setChoiceValues(['New website', 'Rebuild', 'Landing page', 'Catalog', 'Portfolio', 'Special project'])
    .showOtherOption(true);
  form.addTextItem().setTitle('What is the existing website URL (if any)?');
  form.addParagraphTextItem().setTitle('Provide a one-sentence description of the business/project.');
  form.addTextItem().setTitle('What type or category of business is this?');

  // ---- 2. Offering & audience ----
  form.addPageBreakItem().setTitle('Offering & audience');
  form.addParagraphTextItem()
    .setTitle('What are the main services, products, offers, or content?')
    .setHelpText('Which of these are confirmed/owner-approved to publish, versus things discovered ' +
      'through research (a business card, reviews, directory listings) but not yet confirmed?');
  form.addParagraphTextItem().setTitle('Who is the primary customer/audience?');
  form.addCheckboxItem()
    .setTitle('What main action should visitors take?')
    .setChoiceValues(['Call', 'Request quote', 'Book', 'Buy', 'Visit', 'Subscribe', 'Download'])
    .showOtherOption(true);

  // ---- 3. Direction & style ----
  form.addPageBreakItem().setTitle('Direction & style');
  form.addCheckboxItem()
    .setTitle('Preferred tone — pick the closest one or two')
    .setChoiceValues(['Bold and direct', 'Editorial and polished', 'Fantasy / mythology',
      'Friendly and local', 'Playful', 'Practical and utilitarian', 'Premium first', 'Warm and personal'])
    .showOtherOption(true);
  form.addCheckboxItem()
    .setTitle('Style — the feel (select any that fit)')
    .setChoiceValues(['Photo-heavy', 'Clean & minimal', 'Dense / information-forward', 'Premium / luxury',
      'Warm / community feel', 'Bold, CTA-heavy', 'Illustrated accents', 'Dark palette', 'Light palette']);
  form.addMultipleChoiceItem()
    .setTitle('Style — the layout (optional; otherwise we’ll recommend one)')
    .setChoiceValues(['One long scrolling page', 'Classic multi-page (Home · About · Services/Products · Contact)',
      'Browsable grid / catalog', 'Big imagery / gallery-forward', 'Story-style, section by section',
      'Not sure — you decide']);
  form.addParagraphTextItem()
    .setTitle('Style — anything else?')
    .setHelpText('Sites you like or dislike (links help most), specific colors, brand assets, or visual direction.');
  form.addMultipleChoiceItem()
    .setTitle('Strategy style — what should the site emphasize most? Pick the one matching your business type.')
    .setChoiceValues([
      'Restaurant — Trust-first', 'Restaurant — Premium-brand', 'Restaurant — Menu-first',
      'Restaurant — Atmosphere-first', 'Restaurant — Catering / order-first',
      'Contractor/trades — Estimate-first', 'Contractor/trades — Project-proof', 'Contractor/trades — Premium-craft',
      'Creator/catalog — Catalog-first', 'Creator/catalog — Story / world-first', 'Creator/catalog — Support-first',
      'Venue/event — Gallery-first', 'Venue/event — Booking-first', 'Venue/event — Experience-first',
      'Other/general — Trust-first', 'Other/general — Leads / enquiry-first',
      'Other/general — Brand-first', 'Other/general — Information-first'])
    .showOtherOption(true);

  // ---- 4. Contact & reach ----
  form.addPageBreakItem().setTitle('Contact & reach');
  form.addParagraphTextItem()
    .setTitle('What is the best contact path?')
    .setHelpText('Phone, email, form, booking link, social profile, address… If multiple phone ' +
      'numbers/emails exist, which single one should be published?');
  form.addParagraphTextItem()
    .setTitle('What is the location or service area for this business?')
    .setHelpText('Does it vary by service (e.g. one offering is regional, another statewide)? Should a ' +
      'street address actually be published, or hidden because this is a service-area business?');
  form.addTextItem().setTitle('What are the days and hours or availability — or should hours be omitted entirely?');

  // ---- 5. Trust & credibility ----
  form.addPageBreakItem().setTitle('Trust & credibility');
  form.addParagraphTextItem()
    .setTitle('Provide any available trust proof.')
    .setHelpText('Reviews, licenses, certifications, years in business, insurance, testimonials, case ' +
      'studies, real photos, awards… For any license/registration number, confirm the exact digits. For ' +
      'any accreditation seal (BBB, etc.), can we get the official embeddable version rather than a recreated image?');
  form.addParagraphTextItem()
    .setTitle('Who actually does the work — the named owner(s), or a broader team/subcontractors?')
    .setHelpText('Matters if the copy will claim something like “it’s always us who shows up.”');

  // ---- 6. Assets & functionality ----
  form.addPageBreakItem().setTitle('Assets & functionality');
  form.addParagraphTextItem()
    .setTitle('Logo / photo / assets status?')
    .setHelpText('Are photos real images of the actual people/work, or stock/AI — and if stock/AI, can ' +
      'usage rights be confirmed? Any photos that must not be implied as the owner’s own team or work? ' +
      'Any brand guide, fonts, or set colors to follow?');
  form.addCheckboxItem()
    .setTitle('What functionality does the site need? (note must-haves in “Other”)')
    .setChoiceValues(['Contact form', 'Online booking / scheduling', 'Newsletter signup',
      'Online store, or “shop” links out to an existing store', 'Map / directions',
      'Social media links or feed', 'Photo gallery', 'Multi-language'])
    .showOtherOption(true)
    .setHelpText('A static site has no backend — forms, booking, and newsletter signups need a ' +
      'third-party service or embed. Flag anything that must actually submit or process data.');

  // ---- 7. Guardrails ----
  form.addPageBreakItem().setTitle('Guardrails');
  form.addParagraphTextItem().setTitle('Anything that must be included somewhere on this website?');
  form.addParagraphTextItem()
    .setTitle('Anything that must be excluded or avoided?')
    .setHelpText('Specific people, old addresses, prior business names, or associations that should never appear.');
  form.addParagraphTextItem()
    .setTitle('Any facts that must be exact?')
    .setHelpText('Numbers prone to drift: license numbers, founding year, phone numbers.');
  form.addParagraphTextItem().setTitle('Any claims that should not be made?');
  form.addParagraphTextItem()
    .setTitle('Any legal, pricing, policy, service-limit, or disclaimer issues?')
    .setHelpText('For reviews specifically — link out only, or is anything being quoted/written as a ' +
      'testimonial? Copying review text or writing testimonials can violate platform terms or FTC rules.');

  // ---- 8. Delivery ----
  form.addPageBreakItem().setTitle('Delivery');
  form.addMultipleChoiceItem()
    .setTitle('Preview goal?')
    .setChoiceValues(['3 rough concepts', 'Polished customer previews', 'Delivery-ready site'])
    .showOtherOption(true);
  form.addMultipleChoiceItem()
    .setTitle('Delivery goal?')
    .setChoiceValues(['Local files', 'Hosting-ready static site', 'GitHub repo', 'Production deployment'])
    .showOtherOption(true);
  form.addParagraphTextItem()
    .setTitle('Domain & hosting')
    .setHelpText('Is there a registered domain? Who controls it (registrar / DNS)? Any hosting preference, ' +
      'or should we recommend? (Default: static hosting on GitHub Pages, custom domain wired up once settled.)');

  Logger.log('Edit / customize the form here:  %s', form.getEditUrl());
  Logger.log('Send THIS link to clients:        %s', form.getPublishedUrl());
}

/*
 * HOW TO RUN — about 2 minutes
 * ----------------------------
 * 1. Go to  https://script.google.com  and click  New project.
 * 2. Delete the sample code, paste this whole file in, and Save (disk icon).
 * 3. Make sure "createIntakeForm" is selected in the function dropdown, then click  Run.
 * 4. First run: Google asks you to authorize it (it only manages the form it creates) —
 *    click through Review permissions → your account → Advanced → Allow.
 * 5. When it finishes, open  View → Logs  (or the Execution log). You'll see two links:
 *       • Edit link      — open it to tweak wording, mark questions required, change the theme.
 *       • Client link     — this is the one you send to clients to fill out.
 * 6. To auto-collect answers: open the form's  Responses  tab → "Link to Sheets" →
 *    a spreadsheet is created where every submission lands as a new row.
 *
 * Re-running makes a brand-new blank form each time — handy if you want a fresh copy per client.
 */
