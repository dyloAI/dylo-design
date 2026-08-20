# dylo brand brief — working document

The procurement document for the brand partner engagement (W2 in
[`scale-up-plan.md`](scale-up-plan.md) §5.2). Built in three passes:

| Pass | Contents | Needed by | State |
|---|---|---|---|
| **1 — Contact-ready** | Positioning hypothesis · budget & staging · decision cadence · shortlist | **2026-08-28** | **✅ drafted and decided** — needs your read of §1, then outreach |
| **2 — Brief-ready** | Catalog v0 · ICP · deliverable format · the must-nots · NDA check | **2026-09-04** | §5–§8 outstanding. Catalog v0 is the blocker |
| **3 — Production-ready** | Proof inventory · written client permissions · access pack | **2026-09-11** | §9 drafted; permissions outstanding |

You do **not** need all three to start talking to studios. Pass 1 plus a
one-pager gets you a call; pass 2 is what they quote against. Running them in
parallel saves a week on the 2026-09-18 signing date.

---

## 1. Positioning hypothesis — DRAFT, for you to correct

Written from the dylo record, not invented. The partner's job is to sharpen,
pressure-test and dramatize this. If they propose replacing it wholesale, ask why
in strategic terms and hold them to an argument.

### 1.1 The thesis in one paragraph

> Industrial SMBs need small, specific software — a quote configurator for their
> dealers, a product selector for the shop floor, a backoffice for their
> operators, a pipeline to get data out of PDFs. That software is **too small for
> an agency to care about and too specific to buy off the shelf**, so it never
> gets built and the company runs on Excel and email. dylo industrialised the
> making of exactly those systems: templates, AI agents and our own operating
> system, so a production app is a *product* with a published price, a fixed
> scope and three weeks to live — not a project with a discovery phase and a
> €40,000 quote.

### 1.2 The pieces

| | |
|---|---|
| **Category** | Fábrica de software — a *factory*, explicitly not an agency or a consultancy |
| **For** | Spanish and Catalan industrial SMBs, 20–200 employees, running an ERP (SAP, Oracle/Nickel, Sage), especially those selling through **dealer or installer networks** |
| **Buyer** | The owner, a director, or a commercially-minded manager. **Not IT.** Every deal in the record was bought by someone like Manel Paños (ATAC), Jordi Servat (PSS), Enric (LLAZA), Ramón Casals or Ramon Ceravalls — people with a P&L and an operational irritation, no dev team, and an ERP that someone else controls |
| **Their pain, in their words** | "Los distribuidores nos llaman para pedir precios" · "un presupuesto tarda dos días" · "está todo en Excel" · "nos pidieron 40.000 € y cuatro meses" · "nos dijeron que no se podía" |
| **Alternatives they weigh** | An agency (€30–60k, months) · their ERP integrator, who does the ERP but not the apps around it · no-code patched together (ObraCheck literally replaced Jotform) · internal IT saying "later" · doing nothing |
| **What dylo is** | A catalog of production systems sold as products: published price, fixed scope, live in 2–3 weeks, code in your own accounts from day one |
| **Why it can be true** | The cost of making software fell by an order of magnitude and almost nobody rebuilt their delivery around it. dylo did — one command provisions the app, the database, the auth and the deploy; agents do the building; an operating system tracks the work |
| **The line that already exists and should survive** | *dílo* = a crafted work · *robota* = drudgery, the root of "robot". **Los robots hacen la robota. Tú te quedas con el dílo.** This is the soul of the brand and it is genuinely rare — sharpen it, don't discard it |

### 1.3 The strategic tension the partner has to resolve

The price is doing two jobs at once and they pull in opposite directions.
**€1,800 has to read as *industrialised*, never as *cheap*.** Low price with a
weak brand reads as risk — he'll disappear, this is a hobby, my ERP data is not
going in there. Low price with a strong brand reads as leverage — they've
figured out how to make this efficiently and I'm getting the benefit.

Everything else in the engagement is downstream of solving that. It is the single
sentence to put at the top of the brief.

### 1.4 The four objections to arm the brand with

These come up in every conversation, so the messaging has to answer them before
they're asked.

| Objection | The honest answer, with evidence |
|---|---|
| **"¿Por qué tan barato?"** | Because these aren't projects, they're products off a line. The same configurator has been sold **four times** — Facades, BigFoot, Ceramic Selector, Catalonia. You're paying for the fourth build, not the first |
| **"¿Y si desapareces?"** (the real fear, and it is reasonable) | The code is in **your** GitHub, on **your** Vercel and Neon accounts, from day one. No lock-in, written into every quote. And the CELO facade calculator has been in production since **December 2024** |
| **"¿De quién es el código?"** | Yours. In writing, on every quote |
| **"Somos muy específicos, no vamos a encajar en un producto"** | Fixed scope is the point, and the €500 scoping sprint exists to find out in two days whether you fit — credited in full if you build |

### 1.5 Decisions locked 2026-08-20

| Decision | Locked |
|---|---|
| **Category / spine** | **Factory.** *Fábrica de software*, explicitly not an agency. The industrial-vertical focus is the **proof**, not the headline; the price is the **consequence** of the production function, not the identity |
| **How AI appears** | **Mechanism, mentioned once**, where it explains the price. The brand leads with the **outcome** — published price, fixed scope, three weeks, the code is yours. This changes the current site, which leads with *"Fábrica de software nativa en IA"*: by late 2026 "AI-native" is close to noise, and to an industrial SMB owner it can read as *experimental* rather than *reliable* — the opposite of what a low price needs |
| **Languages** | **ES + CA + EN.** The trilingual site already exists, and CELO already sells into FR/EN markets, so English earns its place |
| **Name** | `dylo` stays. Not open for the partner to revisit (§8) |

---

## 2. Budget and staging — LOCKED 2026-08-20

| Lot | Scope | Range | Commitment |
|---|---|---|---|
| **A** | Strategy & verbal identity | €3–6k | **Committed** |
| **B** | Visual identity & design system as tokens | €6–12k | **Committed** |
| C | Content: copy, case studies, brand film, 3 SKU videos | €5–12k | **Gated on the Phase 1 outcome** |

Committed now: **€9–18k**. Total ceiling €14–30k.
**Capex, kept strictly separate from the €500–1,500/month operating budget** for
lead data and outbound infrastructure — the two must never compete in one line.

Tell candidates the committed number and that Lot C is a real, winnable
extension. It gets you better people on A and B than pretending the whole budget
is in play.

## 3. Decision cadence — goes in the contract

You are the sole approver while also delivering ten builds a month, so this is a
risk to name upfront rather than discover in week three:

- One review call per week, fixed slot
- Feedback inside 48 hours
- Maximum two revision rounds per deliverable
- No deliverable accepted without the source files

## 4. Shortlist — the three-profile problem

**No single studio meets all five criteria.** That's the finding, and it's worth
knowing before the first call. The market splits into three profiles and each is
strong at what the others lack:

| Profile | Gets the industrial buyer | Brand strategy craft | Ships tokens |
|---|---|---|---|
| **A — Industrial B2B marketing agencies** | ✅ deeply | ⚠️ often conservative, sales-collateral led | ❌ |
| **B — Brand strategy / identity studios** | ⚠️ skew consumer | ✅ | ⚠️ sometimes |
| **C — Design-system studios** | ❌ | ❌ | ✅ natively |

What dylo needs is **profile B's craft with profile A's audience empathy and
profile C's handoff discipline**. So the shortlist deliberately spans all three,
and the proposals reveal which shape wins — including, quite possibly, a trio
assembled across profiles (e.g. B for Lots A+B, C for token delivery, a motion
freelancer for the video in Lot C).

### 4.1 Candidates to approach

⚠️ **Sourced by desk research on 2026-08-20 and not yet vetted.** Quality,
pricing and availability are unverified — treat this as a call list, not a
recommendation. Check real work and references before any of it goes in a
contract.

| Profile | Candidate | Why them | Watch for |
|---|---|---|---|
| **A** | **Smart Team** (smart-team.io) | Works *exclusively* with manufacturers and industrial B2B, and is based in **Barcelona/Vallès — the same region as CELO** (Castellar del Vallès). They likely already know your client set, which makes them a possible referral channel as well as a supplier | Reads as a marketing/SEO agency more than a brand studio. Probably no token delivery |
| **A** | **Brandesign** (brandesign.es) | The most relevant capability list found: industrial brand architecture, technical-to-commercial translation, sales tools, and explicitly *adapting a brand across languages, distributors and international markets* — which is precisely your ICP's world | Confirm they can do a tech-services brand, not only manufacturers' own brands |
| **B** | **Casa Bien** (casabien.com) | Best integrated fit on paper: brand strategy, **verbal identity**, naming, visual identity, **design systems** and **motion** all in one house. B Corp. Strategy-led rather than decoration-led | Portfolio skews consumer/impact. Press them hard on B2B industrial |
| **B** | **espluga+associates** (espluga.net) | Since 1992, award-winning, strategy + creativity + design. Serious verbal-identity capability | Portfolio is consumer-heavy (Udon, Boboli, hotels). May not get the industrial buyer |
| **C** | **Lucid_** (lucid.pro) | Exactly matches the §7 deliverable spec — token architecture in Figma variables, exports to CSS variables / JSON / Style Dictionary, Storybook. This is the profile that would *actually* extend `dylo-design` rather than hand you a PDF of hex codes | Design systems, not brand strategy. Part of a larger consultancy (Jungle) — check who does the work. Their stated 6–10 weeks for a basic system may overshoot Lot B |
| **B/C** | **Studio Nørd** (studionord.org) | Brand identity *plus* tokenised design systems *plus* motion — the rarest combination on this list, and closest to a one-stop for B and C | Enterprise client base (banks, airlines) suggests enterprise pricing. You may be a rounding error |

**Specialist add-ons**, if the trio route wins:
- **Nom-Nam** (nom-nam.com) — naming and claiming only. A cheap, sharp micro-engagement for **naming the SKU catalog**, which is the highest-leverage single piece of Lot A.
- **Morillas** — deliberately excluded. Excellent and very established (they did FC Barcelona's identity), which is exactly why dylo would be a rounding error. Listed so the exclusion is a decision, not an oversight.

### 4.2 The gap nobody on this list fills: video

None of these is primarily a film or motion shop, and Lot C needs a brand film
plus three SKU demo videos. Two things to know:

- The **SKU demo videos are screen recordings of software with voiceover and
  motion titling**. A freelance motion designer, or you plus a good template,
  does these for a fraction of an agency rate. Do not let this land inside an
  agency scope at agency prices.
- Only the **brand film** genuinely needs a director. Source it separately when
  Lot C is un-gated.

### 4.3 What to ask every candidate

Same three questions, so the answers are comparable:

1. **Three relevant cases, with the strategic reasoning** — not the pretty
   pictures. You are buying the thinking.
2. **The named people who will actually do the work.** Studios sell with
   principals and staff with juniors.
3. **A fixed quote per lot, with dates.** Anyone who will only quote a retainer
   or a "phase 0 discovery" is not the right shape for this engagement.

Plus one that filters hard: *"Our price is €1,800 for something an agency quotes
at €40,000. How would you make that read as industrialised rather than cheap?"*
The answer to that is the entire job (§1.3), and it separates strategists from
decorators in about ninety seconds.

### 4.4 Other sourcing worth an hour

- **ITNIG** — already a partner org in dylo; Barcelona startup community, likely to
  know the design-led tier by reputation rather than by SEO.
- **Your clients' own marketing teams.** CELO, LLAZA and Casals all have them, and
  they have hired studios in your target sectors. This is the highest-signal
  referral source available and it costs one email.
- **Laus awards** (ADG-FAD) winners — the credible filter for Catalan design
  quality, and searchable by year and category.

⚠️ **Filter out the SEO-spam tier.** Several "Barcelona design studio" results
are thin sites with implausible price points (*"brand identity from €179.70"*),
generic case studies and unverifiable testimonials. A studio that cannot show
named clients and named people is not a candidate.

---

## 5. Catalog v0 — from §5.3, due 2026-09-04

Blocks Lot A: the brand cannot name products that don't exist yet. Naming the
SKUs is Lot A work, but the *list and the prices* are yours.

## 6. ICP definition — from §5.5, due 2026-09-04

Draft in §1.2 above. Needs the buyer job titles and the verbatim language they
use — pull it from the CELO, ATAC, PSS and LLAZA threads, where they wrote it
themselves.

## 7. Deliverable format requirements — due 2026-09-04

Non-negotiable, and the source of most disputes at this budget level:

- Figma library, organised and handed over
- **Tokens as JSON/CSS variables that map to the existing Tailwind v4 `@theme`** —
  not a PDF of hex codes
- Video in 16:9, 9:16 and 1:1
- Copy as **structured strings for the i18n dictionary** (ES/CA/EN), not prose in
  a Google Doc
- All source files delivered, with **full IP assignment**

## 8. The must-nots — due 2026-09-04

Fence the scope, because agencies default to maximum:

- Do **not** rename the company
- Do **not** discard the *dílo / robota* story
- Do **not** replace `dylo-design` — extend it
- Do **not** work in a tool you cannot export tokens from
- Site engineering stays **in-house**

⚠️ **NDA check before showing any client work to a vendor.** LLAZA has a signed
NDA; CELO material may also be restricted. Verify per client, per asset.

---

## 9. Proof inventory — DRAFT, from the dylo record

Full list is 11 production systems. These six carry the argument, one proof point
each. Screenshots and live URLs still to be attached.

**Anonymised until permissions land** (decision 2026-08-20): brief and pitch with
the sector, not the client name, then swap the names in once written permission
arrives on 2026-09-11. Zero NDA risk, and the proof loses almost nothing — *"a
fixings manufacturer with 500 employees"* carries the same weight as the logo at
this stage. **The named column below does not leave dylo until permissions are in
writing.** LLAZA is excluded from proof entirely for now (signed NDA).

| # | Use this externally | Actually is | What it proves | The fact |
|---|---|---|---|---|
| 1 | *"The same configurator, sold four times to one industrial group and its partner"* | CELO Facades · BigFoot · Ceramic Anchor Selector · Catalonia white-label | **The factory claim** — the whole positioning in one line | One codebase pattern, four paid deliveries, €550 to €1,800 |
| 2 | *"An insulation contractor, ~50 staff"* | ATAC — operator mobile app + admin backoffice (rota, rate history, cost per site, BBVA payment export) | **The speed claim** | Quote **12 April 2026** → accepted **13 April** → v1 in production **17 April**. Four days |
| 3 | *"A façades division replacing Jotform"* | ObraCheck — mobile inspection reports, branded PDF, emailed and filed to SharePoint via Microsoft Graph | **Cheaper than no-code, and it's actually yours** | Delivered, accepted, closed |
| 4 | *"A quote calculator in production since December 2024"* | CELO Facades Quote Creator | **Durability — kills "what if you disappear"** | 20 months live, still on maintenance |
| 5 | *"A manufacturer white-labelling our tool to its own distributor"* | Catalonia Cerámica | **The partner channel** | Same codebase behind a tenant-config layer, own URL and database |
| 6 | *"A 150-year-old publisher, 33,000 schools"* | Casals book extraction | **Scale, for the data SKU** | Agentic source discovery, batch vision extraction, ISBN enrichment |

Supporting depth if the partner wants more: **Planobuilder** (in production in
Spain, closing in Germany, integrated with the Nickel ERP API — the largest single
engagement at €15.5k), **Competitor BI** (€9.6k, four repos), **PSS Platform**
(buy → logistics → sell, with an AI assistant reading email and drafting quotes).

**Permissions needed in writing** (due 2026-09-11), per client and per medium
(brief · website · video · outbound): **CELO · ATAC · PSS**.

---

## 10. Changelog

| Date | Change |
|---|---|
| 2026-08-20 | Created. §1 positioning hypothesis and §9 proof inventory drafted from the dylo record. |
| 2026-08-20 | Pass 1 decided: **factory** as the category spine (vertical = proof, price = consequence); **AI as mechanism, mentioned once**, brand leads with the outcome; **ES + CA + EN**; **Lots A + B committed (€9–18k), C gated**; **anonymised proof** until permissions land. Shortlist built across three studio profiles after finding that no single studio meets all five criteria. |
