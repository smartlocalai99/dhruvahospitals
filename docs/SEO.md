# Dhruva Hospitals: SEO, AEO and local search plan

Last updated: 17 October 2026.

Priority: be found for **gynaecology and paediatrics in Kadapa**, by local families and by Indians in **Dubai, the rest of the UAE and Kuwait** arranging care in Kadapa. Everything below sticks to facts the hospital has published; nothing promises rankings.

## 1. Launch-critical (do these first)

1. **One site, one domain.** The old site (www.dhruvahospitals.com, built by mstechhive) and this site (dhruvahospitals.vercel.app) carry the same content. Until one replaces the other, they compete.
   - Point `www.dhruvahospitals.com` at this Vercel project (Vercel → Project → Settings → Domains). Make the bare domain and the `vercel.app` address redirect to it.
   - Set `NEXT_PUBLIC_SITE_URL=https://www.dhruvahospitals.com` in Vercel, then redeploy. Canonical tags, the sitemap and structured data all switch to the real domain.
   - The old site's paths already match (`/about`, `/contact`, `/doctors`, `/services/*`). `/neonatal` and `/neonatal-care` redirect to `/services/neonatal`.
2. **Google Search Console.** Add a Domain property for `dhruvahospitals.com` (DNS verification), or set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Submit `https://www.dhruvahospitals.com/sitemap.xml`.
3. **Google Business Profile.** Make the profile's name, address and phone match the website exactly (section 6).
4. **Doctor sign-off.** Each guide names a clinical reviewer, but the "Clinical reviewer" line only shows once that doctor has read the guide. After they approve it, set `reviewedOn: 'YYYY-MM-DD'` in `lib/guides.js`.

## 2. Page-by-page plan

| URL | Search intent | Title tag (shown in Google) |
|---|---|---|
| `/` | Hospital in Kadapa; brand searches | Dhruva Hospitals, Kadapa – Gynaecology, Pregnancy & Child Care |
| `/services/gynaecology` | gynaecologist / gynecologist in Kadapa, laparoscopic gynaecology, PCOD, fibroids | Gynaecologist in Kadapa \| Women's Health & Laparoscopy |
| `/services/pregnancy` | pregnancy doctor, obstetrician, delivery, high-risk pregnancy in Kadapa | Pregnancy Care & Delivery in Kadapa \| Obstetrician |
| `/services/paediatrics` (new) | paediatrician / pediatrician / child specialist in Kadapa, vaccination | Paediatrician in Kadapa \| Child Specialist |
| `/services/neonatal` | NICU / newborn care in Kadapa | NICU in Kadapa \| Level III Newborn Intensive Care |
| `/services/fertility` | IVF / fertility treatment in Kadapa | IVF & Fertility Treatment in Kadapa |
| `/doctors/dr-mounika-reddy` | the gynaecologist by name | Dr. S Mounika Reddy – Gynaecologist & IVF Specialist in Kadapa |
| `/doctors/dr-sudarshan-reddy` | the paediatrician by name | Dr. Sudarshan Reddy K – Paediatrician & Neonatologist in Kadapa |
| `/nri` | book a doctor in Kadapa from Dubai / Kuwait / UAE | Book a Doctor in Kadapa from Dubai, Kuwait or the UAE |
| `/contact` | address, directions, phone | Contact & Directions in Kadapa |
| `/guides/gynaecology-appointment-kadapa` (new, + Telugu) | how to book / prepare for a gynaecologist | Seeing a Gynaecologist in Kadapa: Booking & Checklist |
| `/guides/paediatrician-appointment-kadapa` (new, + Telugu) | how to book a paediatrician; when to go to emergency | Paediatrician in Kadapa: Booking & Emergency Signs |
| `/guides/delivering-in-kadapa-from-dubai` (+ Telugu) | delivering in Kadapa from the Gulf | Delivering in Kadapa from Dubai: Week-by-Week Plan |

Titles and descriptions live with the content. Services: `heading`, `seoTitle` and `seoDescription` in `lib/data.js`. Doctors: `seoTitle` in `lib/data.js`. Guides: `seoTitle` and `description` in `lib/guides.js`.

**Internal links.** The header's Services menu links every specialty from every page (the links are in the HTML even while the menu is closed). On the home page, the department tags link to the matching specialty pages. Each specialty page links to its doctors, its guides, the other services and `/nri`. Guides link back to their specialty page and doctor. The footer links Patient Guides and NRI Care.

## 3. AEO and GEO (answer engines and AI search)

- **Answer first.** Specialty pages open with an "At a glance" box: specialist, address with a directions link, OPD hours, emergency number and how to book. Guides open with a dated "Short answer".
- **Questions as headings.** Every specialty page, every guide and `/nri` has a visible FAQ, with matching FAQPage data. Questions covered include who the gynaecologist and paediatrician are, how to book, what to bring, vaccinations, night emergencies, booking from Dubai or Kuwait, OPD hours in Gulf time, and whether the hospital has a Gulf clinic (it doesn't).
- **Structured data**, validated against the schema.org vocabulary:
  - **Hospital:** name, alternate names, address, phone, area served (Kadapa), specialties, appointment and emergency contact points, social profiles.
  - **WebSite**, linked to the hospital.
  - **IndividualPhysician** for each doctor, with qualifications and specialties, linked to the hospital.
  - **MedicalWebPage** for specialty pages and guides, with medical specialty, publisher and (once reviewed) reviewer.
  - **BreadcrumbList** and **FAQPage**.
  - No ratings, reviews, prices or coordinates are marked up; none are verified. FAQ markup doesn't guarantee a rich result.
- **One entity everywhere.** "Dhruva Hospitals", the same address, phone numbers and doctor names, on every page and in the structured data.
- **Images.** Every content photo has a descriptive file name (old names redirect) and alt text that says what's in it; doctors are named only in their own portraits. Pages list their photos in the sitemap for Google Images, and the hospital and doctor structured data include the building, team and on-site doctor photos. Images are served as AVIF or WebP at the size each screen needs.
- **Evidence of expertise.** Doctors' qualifications and training are on their profiles and specialty pages. Each specialty page shows the doctors' own YouTube videos on the topic. The paediatric guide cites the WHO's danger signs for sick children.
- **No `llms.txt`.** Google doesn't use it, no major AI search engine has committed to it, and everything it would contain is already crawlable on the pages and in the sitemap. `robots.txt` allows all crawlers, including AI crawlers.

## 4. Dubai, Kuwait and the UAE

- **Page:** `/nri` covers booking from abroad by phone or WhatsApp, a table of OPD hours in UAE and Kuwait time, arranging care for parents or children in Kadapa, planning a delivery, airport distances and FAQs. It states plainly that the hospital is in Kadapa with no Gulf clinics.
- **No separate country pages.** Dubai, Kuwait and UAE pages would repeat each other; there isn't enough distinct information to justify them.
- **Intents covered:** booking a gynaecologist or paediatrician in Kadapa from Dubai, Kuwait or the UAE; arranging care for parents; delivering in Kadapa from Dubai; a baby's documents for NRI parents.
- **Discovery:** Google Search (these pages), AI answers (FAQs and structured data), WhatsApp sharing among families, and the Instagram and YouTube channels.
- **Ideas once there's demand data from Search Console:** a Kuwait version of the airline-rules table (Kuwait Airways, Jazeera Airways); a guide on bringing elderly parents for treatment.

## 5. Content plan (topic clusters)

Publish only for services the hospital offers, with a named clinical reviewer. Write in English, with Telugu versions for local families.

- **Gynaecology:** period problems and when to see a doctor; PCOD/PCOS: what the first visit involves; laparoscopic hysterectomy recovery; Pap smear screening.
- **Pregnancy:** your first pregnancy visit; scans in each trimester; high-risk pregnancy (PIH, diabetes); what to pack for delivery.
- **Paediatrics:** the IAP vaccination schedule explained; fever in children (danger signs, cite WHO/IAP); growth and milestones.
- **Newborn:** jaundice and phototherapy; preterm babies and the NICU; the newborn screening test (the hospital already has a video on this).
- **Overseas families:** arranging a parent's treatment from the Gulf; flying with a newborn back to the UAE or Kuwait.

Reuse the doctors' YouTube Shorts and Instagram Reels as the video version of each topic.

## 6. Google Business Profile checklist (needs the profile owner)

- [ ] Name: **Dhruva Hospitals** (no keywords added to the name).
- [ ] Address exactly as the website: 1/705, Dwaraka Nagar, Near RTC Bus Stand, Kadapa, Andhra Pradesh 516001. Check that the pin is on the building.
- [ ] Primary phone +91 99599 59694; add +91 99599 59693 and the landline as additional numbers.
- [ ] Website: `https://www.dhruvahospitals.com/`; appointment link: `https://www.dhruvahospitals.com/contact`.
- [ ] Categories: primary **Hospital**. Add secondary categories that match real services (for example maternity, fertility or emergency care, whichever the dropdown offers).
- [ ] Hours: Open 24 hours (emergency). Mention OPD hours, 9:00 AM – 8:00 PM, in the description.
- [ ] Services: gynaecology, pregnancy care and delivery, IVF and fertility, paediatrics, Level III NICU, laparoscopic surgery, diagnostics, 24/7 emergency.
- [ ] Photos: building front (so visitors recognise it), reception, NICU, operation theatre, paediatric ward, doctors. Add new photos regularly.
- [ ] Doctors: Google allows separate practitioner profiles for public-facing doctors. Profiles for Dr. S Mounika Reddy (obstetrician-gynaecologist) and Dr. Sudarshan Reddy K (paediatrician) at the hospital address are the most direct way to appear in Maps for "gynaecologist in Kadapa" and "pediatrician in Kadapa". Follow Google's practitioner guidelines.
- [ ] Reviews: ask every patient the same way (for example a QR code at discharge). Never offer anything in return, never write reviews yourself, and reply politely to every review without sharing patient details.
- [ ] Use Posts for health days and new services, linking to the matching page.
- [ ] Directories: use the same name, address and phone on Practo, Justdial and the hospital's Facebook page.

## 7. Search Console, analytics and monitoring (needs account access)

- [ ] Verify Search Console (DNS) and submit the sitemap. Also verify Bing Webmaster Tools (`NEXT_PUBLIC_BING_SITE_VERIFICATION` or DNS); Bing's index also powers Microsoft Copilot's answers.
- [ ] Record a **baseline** in the first 4 weeks before judging any change.
- [ ] Track in Search Console → Performance:
  - queries containing *gynaec / gynec / pediatric / paediatric / child specialist / pregnancy / Kadapa*;
  - the Country filter for **United Arab Emirates** and **Kuwait**;
  - clicks and click-through rate for each specialty page.
- [ ] Check the Indexing → Pages and Core Web Vitals reports monthly.
- [ ] Analytics isn't installed. If wanted, **Vercel Web Analytics** (cookie-free) is the lightest option. Count call, WhatsApp and directions clicks as events. Never send names, phone numbers or health details to analytics.

## 8. Facts waiting on the hospital

Fields marked `null` in the code are hidden on the site until filled in.

- Doctors' medical registration numbers and OPD timings (`lib/data.js`).
- Clinical review dates for each guide (`lib/guides.js`).
- Prices for delivery, C-section and NICU per day, and the NRI packages (`lib/guides.js`, `lib/nri.js`). The cost guide stays unpublished until then.
- NRI coordinator's name and Gulf-time hours (`lib/nri.js`).
- Confirmation of the NRI services: pre-arrival video consult, attendant stay, airport pickup.
- Ophthalmologist's name (Vasanta Kumari vs Vasantha Reddy), and the 24/7 emergency number (+91 90368 52311) as the current one.
- The home page's "4.9 average rating from 100+ patients" and the 5,000+ / 500+ figures: keep evidence, or remove them.
- Exact map coordinates of the building, to add to the structured data once confirmed.

## 9. 30 / 60 / 90 days

- **Launch:** section 1.
- **30 days:** Google Business Profile (section 6); doctors review the guides; Search Console baseline.
- **60 days:** two to four new guides from section 5 (English and Telugu); practitioner profiles for the two lead doctors; directory consistency.
- **90 days:** review queries and countries in Search Console. Expand the pages and topics that get impressions but few clicks, and only add Gulf-specific content where the data shows demand.
