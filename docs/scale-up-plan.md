# dylo scale-up plan

From a solo freelance practice to an AI-native software factory. Written
2026-08-20 against the dylo record (65 invoices, 29 projects, 259 threads, the
full proposal funnel and cost ledger).

**Horizon:** Ax42 S.L. constituted early October 2026, trading as **dylo** from
1 November 2026. Year 1 = **Nov 2026 → Oct 2027**, run solo.

Related:

- **Chronological action list → [`scale-up-actions.md`](scale-up-actions.md)** —
  every dated item below, in sequence. This document holds the reasoning; that
  one is what you work from day to day.
- Thread semantics → [dylo-agents `docs/thread-standard.md`](https://github.com/dyloAI/dylo-agents/blob/main/docs/thread-standard.md)
- Post-delivery care → [dylo-agents `docs/maintenance-standard.md`](https://github.com/dyloAI/dylo-agents/blob/main/docs/maintenance-standard.md)
- Proposals / plan docs → dylo-agents `.cursor/skills/dylo-proposals/SKILL.md`
- New project provisioning → dylo-agents `.cursor/skills/dylo-new-project/SKILL.md`

---

## 1. Where the business actually is

Numbers are **net** (dylo stores invoice totals at base × 1.06 — IVA 21% less
IRPF 15% — so net = amount ÷ 1.06).

| Fact | Value |
|---|---|
| Lifetime billed (Dec 2024 → Aug 2026, 21 months) | **€38,406 net** across 65 invoices |
| Average monthly revenue | **€1,829** |
| Revenue from CELO | **€35,356 — 92.1%** |
| Revenue from every other client combined | **€3,050** (ATAC €1,900 · PSS €1,150) |
| Clients with production systems and zero revenue | Editorial Casals, LLAZA, SimbaAI |
| Total recurring revenue across 11 live systems | **~€360/month** |
| Invoices sent and unpaid | **8 invoices, €4,050 net** (oldest 2026-06-11) |
| Open pipeline | **€30,770** one-off + €320/mo across 7 proposals |
| Prospect organizations in the CRM | **1** (of 30 orgs, 21 are vendors) |

### 1.1 The trend is the problem, not the level

| Period | Net revenue |
|---|---|
| 2024 (Dec) | €1,450 |
| 2025 H1 | €9,315 |
| 2025 H2 | €14,186 |
| 2026 H1 | €10,555 |
| 2026 Jul + Aug | **€2,900** |

Delivery throughput moved the opposite way over the same window: 43
agent-dispatched threads since May 2026 (21 in July, 17 in August), 39 threads
closed in August alone, 1.67M tokens recorded. **The factory got roughly 5x
faster while revenue fell.** July and August went almost entirely into internal
work — dylo Sales, dylo Numbers, dylo Landing — which is investment, not a
mistake, but it is unbilled and it explains the dip.

### 1.2 Strengths, stated precisely

1. **An agent-native operating system that actually exists.** dylo App (PSA) with
   a 36-tool MCP surface, threads carrying exactly one next action, derived state
   (so nothing gets stuck), run-scoped keys and a per-run audit trail. Almost
   nobody at this scale has this.
2. **Provisioning is one command.** `/new-project` takes a template to a
   deployed, authenticated, database-backed app on GitHub + Neon + Vercel with
   branch-per-deploy, env injection and a persistent `dev` environment.
3. **Four reusable template seeds** — dylo-starter, dylo-space, dylo-numbers,
   dylo-sales — plus a published design system (design.dylo.dev).
4. **Written standards that are already operational**, not aspirational:
   thread standard, maintenance standard, deploy verification.
5. **Eleven production systems delivered** across 6 clients, with proven
   multi-tenant white-labeling (Catalonia Cerámica ran off the CELO Facades
   codebase behind a tenant-config layer).
6. **Real domain depth in Spanish industrial SMBs**: fixings and façades (CELO),
   awnings and sun protection (LLAZA), insulation contracting (ATAC), plastics
   trading (PSS), publishing (Casals). With ERP integration experience across
   Oracle/Nickel, SAP and SharePoint/Microsoft Graph.
7. **Brand and positioning already shipped** — trilingual ES/CA/EN, "AI-native
   software factory", dylo.dev.

### 1.3 Weaknesses, stated precisely

1. **Acquisition does not exist as a system.** One prospect in the CRM. Every
   single client arrived through the CELO orbit or a personal relationship. Zero
   outbound, zero inbound, no published proof.
2. **Single-client dependency at 92%**, and the key node is gone: **Albert Folch,
   the internal AI champion at CELO, left in mid-June 2026** for Sapira AI.
3. **The back half of every deal is uncaptured.** Eleven production systems →
   €360/month.
4. **Margin is unmeasured.** `token_usage` is empty; the purchase ledger holds
   ~€1,829 with many rows at "amount TBD" and no Cursor/Anthropic/OpenAI
   subscriptions at all. Cost per delivered project is currently unknown.
5. **Collections are not chased.** €4,050 net outstanding across 8 invoices.
6. **Free discovery leaks.** Cancelled after unpaid scoping investment: RAG MCP,
   LLAZA data structuring (€4,200 quoted, lost to an internal team), toldos
   visualizer (superseded).
7. **Heterogeneous stacks raise the cost of every future system**: Railway
   deployments, n8n flows, Streamlit apps, an Android app, Jupyter notebooks —
   each one a separate thing to keep alive.
8. **No legal entity yet.** Invoicing personally with 15% IRPF withholding; the
   dylo company record is still the placeholder `Your Company S.L. / B00000000`.

### 1.4 Opportunities, stated precisely

1. **The pipeline is worth 80% of everything ever billed** and two pieces have
   hard dates in the next eight weeks (§3).
2. **You have already sold the same product four times.** Facades Quote Creator,
   BigFoot Calculator, Ceramic Anchor Selector, Catalonia white-label — one
   pattern, four sales, priced each time as bespoke work. Same for the operations
   platform: ATAC and PSS are the same shape.
3. **Land-and-expand is proven, not theoretical.** CELO paid €35k across **12
   small projects** averaging €2.9k. No single large deal. That is the motion.
4. **Cheap maintenance compounds at volume.** €100/month is a rounding error on
   11 systems and €6,200/month on 62 — which is where year 1 ends.
5. **Partner distribution has already produced revenue twice** without being a
   strategy: Catalonia Cerámica came through CELO's partner network, Editorial
   Casals through a Ramon Ceravalls referral. Nikel integrates the ERP for both
   CELO **and** Casals — that is a channel into their whole customer base.
6. **Installer/dealer networks are the perfect configurator buyer**, and three of
   your five clients sell that way.

---

## 2. The bet

> **Undercut the market by an order of magnitude on price, win on volume, and
> make the factory the moat.**

A Barcelona agency quotes €30–60k and four months for what dylo ships for €1,800
in two weeks. That gap is not a discount — it is a different production
function. The strategy is to price at the wedge, sell a lot of it, and capture
value through **repeat purchases inside the account** plus **a large installed
base on cheap recurring care**.

Five consequences follow, and they are non-negotiable if the number is to be hit:

- **The unit sold must be a fixed-scope SKU, not a custom project.** At €1,800 a
  build, bespoke discovery destroys the margin. Every SKU has a written scope, a
  fixed price, a delivery window and a template it is built from.
- **Maintenance at €100/month must be nearly fully automated.** See §7 — this
  conflicts with the current maintenance standard and has to be reconciled.
- **The funnel is the whole plan.** 40+ discovery calls a month is the
  load-bearing assumption; everything else is downstream of it.
- **The brand has to make the price read as efficiency, not desperation.** At
  these levels a buyer reads *low price + weak brand* as risk and *low price +
  strong brand* as leverage. The entire bet rests on the second reading, which is
  why the brand work (W2) is a core workstream starting immediately rather than a
  finishing touch.
- **The best channel is the one only this factory can run: sell with a working
  demo, not with a pitch.** If you can put a functioning, relevant product in a
  prospect's hands as the *first* touch, you are not competing on copywriting. W6
  builds and tests that.

### 2.1 What this is not

Not a premium consultancy. Not a staffing shop. Not a SaaS product company —
dylo App stays the internal moat, and selling it is explicitly out of scope for
year 1.

---

## 3. The two dated revenue events (do not miss these)

Both land before the company legally exists, and together they are worth **more
than half of 2026 to date**.

| # | Event | Value | Hard date | Current state — the risk |
|---|---|---|---|---|
| 1 | **Editorial Casals — national school-book-list run** | **€7,770** | Client-confirmed window: **first half of October 2026** (when most schools have published 26/27 lists) | Proposal is at stage `exploring` with **no quote sent**. Miss the window and it slips a full year. |
| 2 | **LLAZA 3D Configurator** | **€12,800** + €220/mo | Kick-off agreed for the **2nd/3rd week of September 2026** | Waiting on Enric back from holidays. Biggest deal in company history by 7x — and the proposal that preceded it was already superseded once. |

Everything in §5.1 is sequenced so these two close.

---

## 4. The model

Base case, built from the funnel forward. Assumptions: 28% close rate on held
discovery calls, average land price €1,800, follow-on projects €1,500,
maintenance €100/mo at 55% attach, delivery ceiling ramping to 10 builds/month,
two LLAZA-class deals (LLAZA itself in November, one more in April).

Capacity is split **60% new logos / 40% follow-on work inside existing accounts**
once demand exceeds the ceiling — see §4.1 for why that split matters more than
it looks.

| Month | Calls | New | Follow-on | Builds | One-off | MRR | Large | Month | Cumulative |
|---|---|---|---|---|---|---|---|---|---|
| 2026-11 | 15 | 4 | 0 | 4 | €7,200 | — | €12,800 | €20,000 | €20,000 |
| 2026-12 | 18 | 5 | 1 | 6 | €10,500 | €200 | — | €10,700 | €30,700 |
| 2027-01 | 25 | 7 | 1 | 8 | €14,100 | €500 | — | €14,600 | €45,300 |
| 2027-02 | 30 | 7 | 2 | 9 | €15,600 | €900 | — | €16,500 | €61,800 |
| 2027-03 | 38 | 7 | 3 | 10 | €17,100 | €1,400 | — | €18,500 | €80,300 |
| 2027-04 | 40 | 6 | 4 | 10 | €16,800 | €2,000 | €12,000 | €30,800 | €111,100 |
| 2027-05 | 40 | 6 | 4 | 10 | €16,800 | €2,600 | — | €19,400 | €130,500 |
| 2027-06 | 42 | 6 | 4 | 10 | €16,800 | €3,200 | — | €20,000 | €150,500 |
| 2027-07 | 42 | 6 | 4 | 10 | €16,800 | €3,800 | — | €20,600 | €171,100 |
| 2027-08 | 42 | 6 | 4 | 10 | €16,800 | €4,400 | — | €21,200 | €192,300 |
| 2027-09 | 42 | 6 | 4 | 10 | €16,800 | €5,000 | — | €21,800 | €214,100 |
| 2027-10 | 42 | 6 | 4 | 10 | €16,800 | €5,600 | — | €22,400 | **€236,500** |

**Year 1: €236,500 net · 107 builds · 72 new logos · exit MRR €6,200/month
across 62 maintained systems (€74,400 ARR carried into year 2).**

### 4.1 The constraint flips in month four — and that's the real decision

Run the same funnel without reserving capacity and it produces **more demand than
you can build from month 4 onward**. At 40 calls/month and a 28% close rate the
funnel generates ~11 new deals a month against a ceiling of 10 builds, so
follow-on work gets crowded out entirely: year 1 comes to €246,100 but with
**104 new logos** and effectively zero expansion.

That extra €9,600 (4%) costs you 32 additional client relationships to onboard,
contract, invoice and support — solo. Reserving 40% of capacity for follow-on
work is the better trade on every axis except headline revenue: follow-on
projects carry no sales cost, ship faster because the codebase and the client are
known, and land on accounts already paying maintenance.

It also means **the plan stops being demand-constrained around February 2027**.
When that happens, more outbound spend buys nothing. The correct responses, in
order of preference, are: raise the price on the next cohort (the market will
tell you fast at these levels), or add delivery capacity. That is the natural
trigger for phase 2 of the business, and it is a good problem — but recognize it
when it arrives instead of buying more leads.

### 4.2 Bracket

Only the base case is computed row by row; the outer cases are rounded
sensitivities on close rate and delivery ceiling.

| Scenario | Close rate | Ceiling | Year 1 | Exit MRR | New logos |
|---|---|---|---|---|---|
| Conservative | 25% | 8/mo | ~€185,000 | ~€4,700 | ~55 |
| **Base** | 28% | 10/mo | **€236,500** | €6,200 | 72 |
| Stretch | 30% | 12/mo | ~€288,000 | ~€7,000 | ~85 |

### 4.3 The three numbers that decide it

1. **Discovery calls per month.** At 20/month instead of 40, year 1 lands ~45%
   lower. Everything else is a rounding error next to this.
2. **Human hours per build.** At 9h, ~110 builds/year fit inside 27h/week of
   delivery time. At 16h, only 62 — and the plan misses by €80k. This number is
   currently **unmeasured**, which is why the logging starts 2026-08-28 (§5.3).
3. **Maintenance attach rate.** 55% gives €6,200/month exit MRR. 25% gives
   €3,000 and opens a €40k hole.

### 4.4 What the funnel has to produce

416 held discovery calls a year is ~8.7/week. Against cold outbound:

| Cold email → meeting rate | Targeted emails needed |
|---|---|
| 1.0% | 865/week |
| 1.5% | 580/week |
| 2.0% | 435/week |
| 3.0% | 290/week |

Those volumes are the reason **§5.6 (demo-led acquisition) matters more than any
other line in this plan**. Every point of conversion you buy above 2% removes
hundreds of emails a week from the requirement, and every warm partner intro
removes roughly fifty. The volume column is the fallback, not the ambition.

This is why partner channel and referral are not optional garnish: warm intros
convert at multiples of cold, and every warm call removes ~50 cold emails from
the requirement.

---

## 5. Workstreams

Each has an objective, a dated to-do list, and a definition of done. Dates are
Fridays; the owner is Niki throughout year 1.

| # | Workstream | Starts | Why it is where it is |
|---|---|---|---|
| **W1** | Convert the standing pipeline | **now** | €34,820 of cash sitting in proposals and unpaid invoices, with two hard deadlines |
| **W2** | Brand, design system and creative | **now** | 10–14 weeks of calendar time regardless of how fast you build. The only workstream that cannot be compressed later |
| **W3** | The catalog: from projects to SKUs | **now** | Blocks the brand brief, the outbound copy and the demos. Everything downstream needs named, priced products |
| **W4** | Legal and financial switch-over | Sept | Fixed by the constitution date |
| **W5** | The acquisition engine | Sept | Long lead time on list building and domain warmup |
| **W6** | Demo-led acquisition (the demo factory) | **now** (cohort 0 in flight) | The differentiated channel. Needs measuring before it can be relied on |
| **W7** | Fleet operations | Oct | Only becomes load-bearing once the installed base grows |
| **W8** | Proof and references | Oct | Depends on client permissions and on W2 for production |
| **W9** | Instrumentation | **now** | Cheap, and every other workstream's decisions depend on its numbers |

Five of the nine start this week. That is deliberate: W2, W3, W6 and W9 are all
inputs to something else, and starting them late is what would push the whole
plan right.

### 5.1 W1 — Convert the standing pipeline

**Objective:** turn €30,770 of open proposals and €4,050 of unpaid invoices into
cash before the entity switch, and close the two dated events in §3.
**Done when:** pipeline is either invoiced or explicitly closed-lost with a
reason, and nothing sits in `exploring` without a number.

| Due | To-do |
|---|---|
| 2026-08-28 | Chase all 8 unpaid invoices (€4,050 net). Payment plan or escalation on anything over 45 days — F260028 (PSS, 2026-06-11) is the worst. |
| 2026-08-28 | Re-anchor the CELO relationship post-Albert-Folch: written map of who owns what now (Sonia, Ramon Ceravalls, Anna Ruiz, David Serra, Arnau Guitart, Edu Aguiló) and a meeting booked with each. |
| **2026-09-04** | **Send the Casals national-run proposal (€7,770)** with an explicit October window and a start-by date. This is the highest-value single action in the plan. |
| 2026-09-11 | Deliver the 20-school 26/27 sample for Nikel integration testing (unblocks the national run). |
| 2026-09-11 | CELO technical-sheets pilot (€1,800, sent 2026-07-08, silent 6 weeks): re-quote or close as lost with a reason. |
| 2026-09-18 | **LLAZA: kick-off date fixed and the 50% deposit invoiced (€6,400).** |
| 2026-09-18 | CELO Planobuilder recommendation layer (€1,200, sent): close won or lost. |
| 2026-09-25 | CELO BigFoot i18n (€650 agreed with David Serra): unblock DNS/domains with Mariona, ship, invoice to Ceralope S.L. |
| 2026-09-25 | Price the PSS scope expansion (email ingestion + agent layer) — it has been at `exploring` with no amount since June. |
| 2026-09-30 | Reprice-or-park review of every live retainer. No change to the €100/mo list price; the question is only which of the 11 systems has no plan at all. |
| 2026-10-16 | UMARA Order App (€7,200, paused): explicit revive-or-park decision with Enric. |
| 2026-10-30 | Resolve SimbaAI: real client to be invoiced, own venture, or archive the org. It has 2 projects, 0 contacts, 0 proposals and 0 revenue. |

### 5.2 W2 — Brand, design system and creative (external partner)

**Objective:** a brand that makes €1,800 read as *industrial efficiency* rather
than *cheap freelancer*, produced by an external partner, with the
minimum-viable-brand pieces locked before the company starts trading on
1 November.
**Done when:** brand strategy and verbal identity are written, the visual
identity is delivered as tokens that extend `dylo-design`, the site carries the
priced catalog in ES/CA/EN, and there is one brand film plus one demo video per
lead SKU.

**Why this is core, not cosmetic.** The plan sells to **72 new logos in year 1** —
the website, the catalog page and the videos will be in front of a buyer far more
often than you will. And the price is doing double duty: at these levels a buyer
reads *low price + weak brand* as risk ("he'll disappear, this is a hobby") and
*low price + strong brand* as leverage ("they've industrialised this"). The whole
bet in §2 depends on the second reading. It is also the only workstream that
cannot be compressed later — brand strategy takes calendar weeks regardless of
how fast you build.

#### 5.2.1 What already exists — brief the partner to extend it, not restart it

Paying an agency to rediscover this would be the single most wasteful line in the
plan. Hand all of it over on day one:

| Asset | State |
|---|---|
| **`dyloAI/dylo-design`** | Design system: tokens, Tailwind v4 `@theme`, React components, shadcn-CLI installable. Live at design.dylo.dev |
| **`dyloAI/dylo-landing`** | Next.js 16 site on the design system — hero, work, studio, contact — already trilingual ES/CA/EN |
| **Positioning and name story** | "dylo — software, hecho" · "AI-native software factory" · the *dílo* (a crafted work) vs *robota* (drudgery) etymology. This is genuinely distinctive; it is an asset to sharpen, not a draft to replace |
| **`dylo-proposals` skill** | Renders the branded Plan de Proyecto PDF from plan-doc YAML |
| **11 production systems** | Raw case-study material with live URLs and real outcomes |

So the partner's job is the work you cannot do: brand strategy, verbal identity,
elevating the visual language into a full system, and producing video, imagery
and copy. **Site engineering stays in-house** — you ship a Next.js site faster
than any agency, on your own template, and you own it afterwards.

#### 5.2.2 Scope in three lots, so the spend can be staged

| Lot | Deliverables | Weeks | Range |
|---|---|---|---|
| **A — Strategy & verbal identity** | Positioning statement; value proposition per ICP segment; the **price-transparency narrative** (why cheap is credible); messaging hierarchy; **names for the SKU catalog** (clients must be able to repeat them); tone of voice in ES/CA/EN; objection handling for the three questions you will hear constantly — *why so cheap*, *what if you disappear*, *who owns the code* | 1–3 | €3–6k |
| **B — Visual identity & design system** | Logo/wordmark system, typography, colour, grid — delivered as **tokens that map to the existing Tailwind v4 `@theme`**, not as pictures; page and component design for the site; templates for proposal, case study, one-pager, email signature, social | 3–7 | €6–12k |
| **C — Content production** | Landing + catalog copy in ES/CA/EN as structured i18n strings; 3 designed case studies; **1 brand film (60–90s)**; **3 SKU demo videos (45–60s)**; a consistent screenshot/illustration system for product shots | 5–10 | €5–12k |

**Total €14–30k.** Be clear-eyed about what that is: €20k is roughly **11 builds
of revenue**, spent from savings before the entity exists. Two ways to de-risk it
without gutting it:

- **Stage the commitment.** Sign Lot A + B now (€9–18k); gate Lot C on the Phase 1
  outcome (§6). If the funnel is not producing calls by late November, Lot C money
  is better spent on lead volume.
- **Consider a curated trio instead of one agency.** A brand strategist, an
  identity designer who ships tokens, and a motion designer — briefed by you,
  ~€6–12k all in. Slower to coordinate and it puts the project-management load on
  you, but for a solo operator with a design system already in place it often
  buys more of what you actually need. A full-service agency is worth the premium
  mainly if you want one throat to choke and zero coordination overhead.

This is **capital expenditure, separate from the €500–1,500/month operating
budget** for lead data and outbound infrastructure. Do not let the two compete in
the same line.

#### 5.2.3 What you need before you can brief anyone

This is the actual answer to "what do I need to start". Nine of these eleven are
yours to produce, and an agency that offers to invent them for you is selling you
your own homework back. The live document assembling them is
[`brand-brief.md`](brand-brief.md).

| # | Input | Why it blocks the brief | Ready by |
|---|---|---|---|
| 1 | **Positioning hypothesis, one paragraph** — who it's for, what it is, why you, why now | Their job is to sharpen and pressure-test your thesis. With no thesis they will invent one, and you will be paying to be misrepresented | 2026-08-28 |
| 2 | **SKU catalog v0 with prices** (§5.3) | Brand has to sell *named products*. Without the catalog, Lot A cannot name anything and Lot C has nothing to demo | **2026-09-04** |
| 3 | **Written ICP definition** (§5.5) — segments, company size, buyer job titles, the words they actually use | Determines the whole tone. "Responsable de producto en un fabricante de toldos" is a very different reader than a startup CTO | 2026-09-04 |
| 4 | **Proof inventory** — the 11 systems with screenshots, live URLs, one-line outcome each, and which are nameable | Raw material for Lot C. Without it, case studies stall mid-project, which is where agency timelines die | 2026-09-11 |
| 5 | **Written client permission to name and show** — CELO, ATAC, PSS at minimum | Hard blocker on case studies and video. Get it in writing, per client, per medium | 2026-09-11 |
| 6 | **Access pack** — the assets in §5.2.1, handed over at kick-off | Prevents paying for a rebuild of `dylo-design` | at kick-off |
| 7 | **Budget number and staging decision** | Agencies scope to a number. Withholding it produces a proposal you cannot afford and two wasted weeks | 2026-08-28 |
| 8 | **Decision cadence, stated upfront** — you are the sole approver: one review call a week, feedback inside 48h | You are the bottleneck on approvals while also delivering 10 builds a month. Say so before signing, and put it in the contract | 2026-08-28 |
| 9 | **Deliverable format requirements, written** — Figma library; tokens as JSON/CSS variables mapping to Tailwind v4 `@theme`; video in 16:9 + 9:16 + 1:1; copy as structured strings for the i18n dictionary; **all source files delivered with full IP assignment** | This is the difference between a design system and a folder of PNGs. Most disputes at this budget level are about deliverable format | 2026-09-04 |
| 10 | **The must-nots, written into the brief** — do not rename the company; do not discard the *dílo/robota* story; do not replace the design system; do not work in a tool you cannot export tokens from | Agencies default to maximum scope. The brief has to fence it | 2026-09-04 |
| 11 | **Legal: NDA + IP assignment + DPA.** ⚠️ **Check the LLAZA NDA before showing that work to anyone** — CELO and LLAZA work may be contractually restricted | Showing NDA'd client work to a vendor is a real breach risk, and it is the kind that ends a client relationship | 2026-09-04 |

**How to choose the partner.** Weight these, in order: has branded B2B
industrial or manufacturing companies (not only consumer or startups); works
natively in Spanish *and* Catalan; can deliver design tokens rather than
flat comps; is small enough that you are not their rounding error; and will
commit to a fixed price per lot with dates. Ask each for three relevant cases
**with the strategic reasoning**, the named people who will actually do the
work, and a fixed quote per lot. Sourcing: Barcelona studios, the **ITNIG**
network (already a partner org in dylo), referrals from your own clients'
marketing teams, and design-system-literate studios.

Register the chosen partner in dylo as an organization with `kind: "vendor"`, and
run the engagement as a `coordination` thread so the decisions are recorded where
everything else lives.

#### 5.2.4 Timeline, and the honest conflict with 1 November

A proper brand process — brief, pitch, select, strategy, identity, production —
is **10 to 14 weeks**. Started now, it completes in **early December**, not by
1 November. Pretending otherwise would either compress it into something not
worth buying, or delay the outbound launch, and outbound is the whole plan (§4.4).

So the resolution is explicit: **1 November is when the company starts trading,
not when the brand finishes.** Outbound launches in late October on the *existing*
dylo brand, which is already trilingual, on a design system, and perfectly
respectable. The agency work lands as a conversion upgrade in December, and Lot C
becomes a Q1-2027 asset. Only a small set of pieces is genuinely gated to 1
November:

**Minimum viable brand, hard-gated to 2026-11-01:** wordmark and logo locked ·
colour and type locked as tokens · the SKU catalog names final · landing and
catalog copy live in ES · one demo video for the lead SKU.

| Due | To-do |
|---|---|
| 2026-08-28 | Write the positioning hypothesis, fix the budget number and staging, and shortlist 4–6 studios / the specialist trio (§5.2.3 items 1, 7, 8). |
| 2026-09-04 | Brief complete — includes catalog v0, ICP, deliverable-format requirements, the must-nots, and the NDA check. Send to the shortlist with a fixed response date. |
| 2026-09-11 | Proof inventory assembled; written client permissions requested from CELO, ATAC and PSS. |
| **2026-09-18** | **Partner selected, contract signed with IP assignment, deposit paid, kick-off held.** Access pack handed over. |
| 2026-10-09 | **Lot A delivered:** positioning, verbal identity, SKU names, tone of voice ES/CA/EN, objection handling. Feed the SKU names straight back into the catalog (§5.3), the outbound copy (§5.5) and the segment demos (§5.6). |
| 2026-10-30 | **Lot B delivered:** identity as tokens, page and component design, proposal/case-study/one-pager templates. |
| **2026-11-01** | **Minimum viable brand live** (see above). Company starts trading on it. |
| 2026-11-13 | New site engineered in-house on the Lot B design and shipped to production, ES/CA/EN, with the priced catalog page. |
| 2026-12-04 | **Lot C delivered:** 3 case studies, brand film, 3 SKU demo videos, product-shot system. |
| 2026-12-18 | Brand assets wired into outbound sequences and the proposal PDF template; measure reply-rate and site conversion before/after as the payback test. |
| 2027-01-29 | Payback review: did the brand investment move reply rate, close rate or price tolerance? Decide Lot C follow-on spend on that evidence, not on taste. |

### 5.3 W3 — The catalog: from projects to SKUs

**Objective:** replace "custom project" with a published catalog of fixed-scope
SKUs that agents build off templates.
**Done when:** a discovery call can be closed on a published price without a
bespoke proposal, and two SKUs are parameterized templates.

Starting catalog, priced from what clients have actually paid:

| SKU | What it is | Price | Window | Built from | Proven |
|---|---|---|---|---|---|
| **Scoping sprint** | 2-day paid scope, credited against the build | **€500** | 2 days | — | new — the qualification gate |
| **Configurador / Calculadora** | Dealer- or customer-facing quote & configuration tool | **€1,800** | 2–3 weeks | `celo-facades-quote-creator` | 4 sales |
| **White-label variant** | Existing configurator behind a tenant-config layer, own URL + DB | **€1,200** | 1–2 weeks | same codebase | Catalonia Cerámica |
| **Selector de producto** | Mobile/QR decision-tree product selector for point of sale | **€700** | 1 week | `celo-ceramic-anchor-selector` | Ceramic Anchor |
| **Extracción de datos — piloto** | AI extraction pipeline, sample dataset with source traceability | **€1,800** | 4 weeks | `casals-book-extraction` | Casals, fichas técnicas |
| **Extracción de datos — tirada** | Volume run, priced per record | **from €0.20/record** | 2–4 weeks | same pipeline | Casals national |
| **Plataforma de operaciones** | Field-worker app + admin backoffice, phase 1 | **€2,300** | 4–6 weeks | `dylo-space` | ATAC, PSS |
| **Mantenimiento** | Post-delivery care (see §7 for what €100 honestly buys) | **€100/mo** | ongoing | — | 11 systems |

| Due | To-do |
|---|---|
| 2026-08-28 | Start logging `actual_human_minutes` on **every** thread close. Free to do, and it produces the single most important unknown in §4.3. |
| **2026-09-04** | Draft catalog v0 — needed as an input to the brand brief (§5.2.3). |
| 2026-09-11 | Finalize the catalog: per SKU, what is in, what is explicitly out, the delivery window, the template, the payment terms (50/50). |
| 2026-09-18 | Introduce the **€500 scoping sprint** as the mandatory gate between a discovery call and a build. Credited in full against the build price. This is what protects 40 calls/month from becoming 40 free consultations. |
| 2026-09-30 | Standardize the stack: every new project starts from `dylo-starter` or `dylo-space`. No new Railway/n8n/Streamlit systems, no exceptions without a written one. |
| 2026-10-09 | Parameterize the **configurador** SKU into a real template: tenant config, pricing tables, PDF/email output, admin console — provisionable by `/new-project`. |
| 2026-10-23 | Parameterize the **extracción** SKU: source discovery, batch vision extraction, enrichment, traceable tabular output. |
| 2026-11-27 | Instrument the catalog: actual human hours and token cost per SKU, so prices are defended by data rather than by habit. |

### 5.4 W4 — Legal and financial switch-over

**Objective:** Ax42 S.L. constituted and operating as dylo from 1 November,
with clean books and defensible contracts at 100-client scale.
**Done when:** all client invoicing runs through the S.L., the dylo company
record is real, and every client has signed the contract pack.

| Due | To-do |
|---|---|
| 2026-09-04 | Confirm the constitution critical path with the notary/gestor: what is outstanding, what the CIF timeline is, what can be signed in advance. |
| 2026-09-25 | Engage the gestor / asesor fiscal for the S.L. (corporate tax, IVA, payroll if you become an employee of it). |
| **2026-10-09** | **Constitution complete: deed signed, CIF issued, Modelo 036 filed.** |
| 2026-10-16 | BBVA business account operational (continue with Blai Buendía, Sant Just Desvern). |
| 2026-10-23 | Contract pack drafted: condiciones generales, IP/ownership and no-lock-in clause, DPA for GDPR (you process client invoice and product data — PSS, CELO), maintenance terms, SLA pointer. |
| 2026-10-23 | Holded migrated to the S.L.: new invoice series, VAT-only invoicing (no more 15% IRPF withholding), company fiscal data. |
| 2026-10-30 | Update the dylo company record — replace `Your Company S.L. / B00000000` with the real legal name and CIF. |
| 2026-11-06 | Notify all active clients of the billing-entity change and re-issue any open invoices from the S.L. |
| 2026-11-13 | Register `dylo` as a trade name (nombre comercial) and confirm trademark clearance for the sectors you sell into. |

### 5.5 W5 — The acquisition engine

**Objective:** 40+ held discovery calls a month by February 2027, across three
channels: demo-led outreach (§5.6), volume outbound, and partner-sourced warm
intros.
**Done when:** the funnel produces ~9 booked calls a week without you touching
list building.

**ICP** (from your own answers, and matching where you've already won):
manufacturers of building and construction products, Catalan/Spanish industrial
SMBs of 20–200 employees running an ERP (SAP, Oracle/Nickel, Sage), with a
strong preference for **companies that sell through installer or dealer
networks** — those are the ones who need a configurator most.

The three channels are deliberately different bets, and they are ranked by
expected conversion rather than by volume:

| Channel | Volume | Expected meeting rate | Role |
|---|---|---|---|
| **Demo-led** (§5.6) | Low–medium | High (to be measured) | The differentiated channel — only possible because of the factory |
| **Volume outbound** | High | 1–2% | The floor. Fills the funnel while demo-led is being validated |
| **Partner / referral** | Low | Very high | Cheapest calls you will get; every warm intro removes ~50 cold emails from the §4.4 requirement |

| Due | To-do |
|---|---|
| 2026-09-25 | Build the target list: 1,000 companies matching the ICP, in Clay (you already know the tool — you configured it for PSS lead sourcing). Fields: sector, employee count, ERP if detectable, dealer network yes/no, decision-maker. |
| 2026-10-02 | Sending infrastructure: 2–3 secondary domains, 6–9 mailboxes, warmup started, SPF/DKIM/DMARC verified. Budget ~€300–600/mo all-in. |
| 2026-10-09 | Write the sequences in ES and CA. Lead with the price and a named reference, not with "AI". The offer that converts here is *"a working quote configurator for your dealer network, €1,800, live in three weeks — here is one we built for CELO."* |
| **2026-10-16** | **Nikel partnership conversation** (Pepe Ferrer / Fernando Ferrer). They integrate the ERP for CELO and Casals; their customer base is your ICP by definition. Propose a referral arrangement and a joint offer. |
| 2026-10-23 | Outbound live at 400–500 emails/week. Track reply rate, meeting rate, and cost per booked call from day one. |
| 2026-11-13 | Formalize the referral channel lightly — a written 10% first-invoice referral fee, offered to the existing network (deliberately keeping the friend relationship informal while reducing dependence on it). |
| 2026-11-27 | Partner network sweep: ask CELO, LLAZA and ATAC each for two introductions to their own partners or suppliers. Catalonia Cerámica arrived exactly this way. |
| 2026-12-18 | Scale to 700–900 emails/week if the meeting rate is under 2%; if it is above 3%, hold volume and raise price on the next cohort instead. |
| 2027-01-29 | Publish the first three case studies as outbound assets and measure the lift on reply rate. |

### 5.6 W6 — Demo-led acquisition: the demo factory

**Objective:** make the first touch a *working, relevant demo* instead of a cold
email — produced by agents at near-zero marginal cost — and measure the
conversion rate honestly before betting the funnel on it.
**Done when:** six micro-vertical demos are live, a named-prospect
personalization takes under 60 minutes of human time, and a measured cohort has
told you whether this beats plain cold copy head-to-head.

**Why this may be the best idea in the plan.** It attacks the weakest number in
the whole model. Cold copy at 1–2% needs 435–865 emails a week (§4.4) — an
industrial spam operation you would not enjoy running. A demo-led first touch
converts far better because you are not *describing* a product, you are handing
one over. And it is the one channel where your production advantage becomes a
*sales* advantage: any agency can write a cold email, almost none can ship a
working, branded, data-populated app per prospect. It also answers all three
objections the brand work has to handle (§5.2.2, Lot A) at once — *why so cheap*
(watch how fast we build), *what if you disappear* (the thing already exists),
*who owns the code* (here it is).

It is also the only motion in your history that has produced a new logo **without
a referral**: the Ceramic Anchor Selector was built for the Catalonia Cerámica
demo of 2026-06-12, sold at €550, and led directly to the €1,200 white-label.
Casals bought the national run off a validated technical pilot. Demo-then-sell
already works here; it has just never been run deliberately.

#### 5.6.1 The design decision that makes it scale: segment demos, not prospect demos

One demo per prospect does not scale — 300 prospects would be 300 builds. The
version that does scale is **two tiers**, and it is worth noting that what you are
already building for La Cristalería de Barcelona is a tier-1 asset, not a
one-off: *espejo, puerta abatible, mampara de ducha* are the generic products of
the glazing trade, not one company's catalog.

| Tier | What it is | Cost | Reach |
|---|---|---|---|
| **1 — Segment demo** | One polished demo per micro-vertical, using that trade's generic products, options and realistic prices. Sent to **every** company in the vertical | One build (~6–10h), then zero marginal cost | 50–150 prospects each |
| **2 — Named personalization** | For prospects who *engage* with the tier-1 demo: rebuild it with their own catalog, brand colours and logo, as the second touch | ≤60 min human, agent-driven | Only the top ~10% |

Tier 1 buys reach at near-zero marginal cost; tier 2 spends real effort only on
demonstrated intent. Six segment demos covering ~600 companies is a realistic
year-1 footprint, and 600 prospects reached with a *working configurator for their
trade* is a materially different proposition than 600 cold emails.

**Candidate micro-verticals**, screened against §5.6.4:

- **Clear** — cristalería / vidrio (in flight) · carpintería de aluminio y
  ventanas · mamparas y baño · piedra natural y encimeras · rótulos y señalética.
- **Cleared case-by-case** — cerámica y azulejos: proven via Catalonia Cerámica,
  but that came *through* CELO, so treat CELO as the channel rather than going
  around it.
- **⚠️ Conflicted, do not touch without written clearance** — toldos y pérgolas
  (LLAZA / UMARA, **signed NDA**) · fijaciones y ferretería industrial (CELO) ·
  aislamientos (ATAC).

#### 5.6.2 Architecture: one multi-tenant host, not one project per demo

This is the decision that determines whether the economics hold. If every demo is
a `/new-project` run you will drown in Vercel projects and Neon databases inside a
month, and cleanup alone will eat the time the channel was supposed to save.

- **One Vercel project, one Neon database**, a `demo_tenants` table, one
  subdomain per demo: `cristaleria.demos.dylo.dev`.
- **Tenant config is data, not code**: products, option groups, pricing rules,
  theme tokens, logo, copy, language. A new demo is a row, not a deploy.
- **Demos auto-expire at 30 days**, which bounds both cost and legal exposure.
- Built from the `dylo-sales` seed, which is exactly what it is being shaped into.

The agent pipeline — five steps, human only at the last:

1. **Target** — take the next company from the ICP list (§5.5).
2. **Research** — agent reads their public site: what they sell, catalog
   structure, options, published prices, whether they sell through installers,
   brand colours, logo, tone, language (ES/CA).
3. **Generate** — agent writes the tenant config from that brief: real products,
   real option groups, plausible prices, their theme, their terminology.
4. **Verify** — agent smoke-tests the flow end to end: does the quote complete,
   does the PDF render, is anything wrong or embarrassing. **Non-negotiable — a
   broken demo is worse than no email.**
5. **Draft** — agent writes the email referencing their specific products by
   name, with an inline screenshot or GIF plus the link, queued as a human next
   action to review and send.

**The signal no other channel can give you:** instrument the demo. Who opened it,
how long they stayed, how many quotes they generated. A prospect who builds three
quotes in your demo is the hottest lead you will ever have — a buying signal cold
email structurally cannot produce. Route those straight to a call request, and
spend the tier-2 hour only on them.

#### 5.6.3 Which SKUs demo cold, and which do not

| SKU | Demo cold? | Why |
|---|---|---|
| **Configurador / Calculadora** | **Yes — lead with this** | Input is a public catalog with options and prices. Visually immediate, and the value is obvious in ten seconds |
| **Selector de producto** | Yes | Decision tree derived from the same public catalog |
| **Extracción de datos** | **Yes, possibly the strongest** | Run the pipeline on 20 of *their* real records and attach the resulting spreadsheet. The deliverable is data they can verify themselves — exactly what validated Casals |
| **Plataforma de operaciones** | **No** | Depends on internal process knowledge you cannot get from outside. Keep it behind the €500 scoping sprint |

#### 5.6.4 Two guardrails to settle before cohort 1

**Client conflict is the bigger risk, and it is easy to miss.** Several of the
obvious micro-verticals put you in front of a current client's direct
competitors: *toldos y pérgolas* is LLAZA and UMARA, *fijaciones* is CELO,
*aislamientos* is ATAC. LLAZA has a **signed NDA**. Selling the same configurator
into a client's competitive set is a relationship-ending move and possibly a
contractual breach.

Rule: **no segment demo in a vertical where an existing client competes, unless
cleared in writing.** The better play in those verticals is the one that already
worked — offer the client a channel deal where *they* white-label it to their own
dealer network. That is precisely the Catalonia Cerámica pattern, and it turns a
conflict into revenue.

**Legal posture on using a company's brand in a demo.** Nominative use of a name,
logo and published prices in a private demo you are offering to that company is
defensible; publishing it is a different matter. So:

- Demos are **unlisted and `noindex`**, one unguessable URL per prospect, never
  linked from dylo.dev.
- Visible footer on every demo: *demostración no oficial creada por dylo — sin
  relación comercial con [company]*.
- **Publicly published catalog and price data only.** Nothing behind a login,
  respect `robots.txt`.
- Prefer their own public product images under nominative use, or neutral
  placeholders. Never republish their photography anywhere else.
- **Delete on request, immediately and without argument**, and log the request.
- Have the gestor or a lawyer review the footer wording and the takedown process
  alongside the contract pack (§5.4).

#### 5.6.5 This is a test with a gate, not yet a plan

Do not rewrite §4 on an unmeasured conversion rate. Size it as an experiment.

| Cohort | When | Design | Purpose |
|---|---|---|---|
| **0** | now | La Cristalería de Barcelona, n=1 | Measure human time and find what breaks. Not a conversion test |
| **1** | November 2026 | 1 segment demo → 60 prospects, **split-tested head-to-head against plain cold copy** to 60 matched prospects | Does the demo actually beat the email? |
| **2** | December 2026 | 3 segment demos → 200 prospects, plus a 20-prospect extraction-pilot arm | Does it hold across verticals and SKUs? |

Measure per cohort: human minutes per demo, demo-open rate, quote-generation
rate, reply rate, held-call rate, close rate, and **cost per held call** against
the volume-outbound baseline.

**Gate, decided 2027-01-15.** If demo-led beats volume outbound on cost per held
call, shift budget and list volume into it and cut cold-copy volume by half. If
it ties, run both. If it loses, keep it as a tier-2 closing tool for high-value
targets only — it will still be worth having as the thing you send *after* a
call, where it is almost certainly a closer.

**Do not assume it replaces the funnel.** Even at a strong 12% demo→call, forty
tier-1 prospects a month yields ~5 calls. Reaching 40 calls/month on demos alone
would need ~330 prospects a month reached — feasible on tier 1 across six
verticals, but only once those six demos exist. Until then it is the quality
tier, not the whole engine.

| Due | To-do |
|---|---|
| 2026-08-28 | Finish the Cristalería demo (cohort 0) and **record actual human minutes** — the number the whole channel depends on. |
| 2026-09-11 | Decide the six micro-verticals, screened against the client-conflict rule (§5.6.4). Get LLAZA/CELO clearance in writing where a vertical is adjacent. |
| 2026-09-25 | Rework `dylo-sales` into the **multi-tenant demo host**: `demo_tenants` table, per-tenant theming and catalog, subdomain routing, 30-day expiry, `noindex` + disclaimer footer. |
| 2026-10-09 | Build the agent pipeline (research → generate → verify → draft) as a repeatable run. Target: a new tenant demo from a company URL in under 60 min human time. |
| 2026-10-16 | Demo instrumentation live: opens, dwell time, quotes generated, per-tenant, surfaced in dylo as a lead signal. |
| 2026-10-23 | Legal review of the disclaimer, nominative-use posture and takedown process (bundled with the contract pack, §5.4). |
| 2026-10-30 | **Segment demo #1 (cristalería) production-ready** — the tier-1 asset, not a prospect one-off. |
| **2026-11-27** | **Cohort 1 complete:** 60 demo-led prospects vs 60 cold-copy prospects, split-tested, all six metrics recorded. |
| 2026-12-18 | Segment demos #2–#4 live (cerámica, carpintería de aluminio, mamparas). Cohort 2 launched, including the extraction-pilot arm. |
| **2027-01-15** | **Gate decision** (above). Write the outcome into §10 as a dated decision, whichever way it goes. |
| 2027-02-26 | If the gate passed: segment demos #5–#6, and fold demo production into the weekly rhythm at a fixed cadence. |

### 5.7 W7 — Fleet operations

**Objective:** make 100+ production systems maintainable by one person.
**Done when:** weekly and monthly maintenance across the whole fleet runs as
scheduled agent work, and a single console shows the health of everything.

This is the workstream that makes €100/month maintenance honest. It is also the
one most likely to be skipped under delivery pressure — don't.

| Due | To-do |
|---|---|
| 2026-10-30 | Uptime probes on `/api/health` for every production system, alerting into one place. |
| 2026-11-27 | **Fleet console in dylo App**: every project with repo, deploy status, Sentry unresolved count, open Dependabot PRs, uptime, Neon/Vercel usage and cost-to-date. One screen. |
| 2026-12-18 | Scheduled agent sweeps: weekly Sentry triage, monthly Dependabot batch merge, monthly client status-note drafts queued as human-review next actions. |
| 2027-01-29 | Migrate legacy non-standard systems (Railway deployments, n8n flows, Streamlit apps) onto the standard stack or formally sunset them. |
| 2027-02-26 | Rewrite the maintenance standard's volume tier (§7) against what the automation actually delivers. |

### 5.8 W8 — Proof and references

**Objective:** a stranger in the ICP can verify in two minutes that this is real,
and see the price without asking.
**Done when:** dylo.dev carries the catalog with prices and three case studies
with numbers, and three clients have given written references.

Publishing prices is unusual in this market, which is exactly why it works: it
is the wedge made visible, and it filters out everyone who was going to waste a
discovery call.

The *production* of these assets sits with the brand partner (§5.2.2, Lot C);
what belongs here is the substance only you can supply — the outcomes, the
numbers, and the permissions.

| Due | To-do |
|---|---|
| 2026-10-30 | Case-study substance drafted for three projects: CELO Planobuilder (in production, Spain + Germany), ATAC platform (operator app + admin, delivered in 4 days from acceptance), PSS platform (buy → logistics → sell). Real numbers, then hand to Lot C for writing and design. |
| 2026-11-06 | Publish the SKU catalog **with prices** on dylo.dev (minimum viable brand, §5.2.4). |
| 2026-11-20 | Three written client references (CELO, ATAC, PSS) cleared for public use. |
| 2026-12-18 | One technical write-up on how the factory works (templates + agents + the thread model). This is the credibility asset for the ICP's more technical buyers, and it costs you nothing you haven't already built. |

### 5.9 W9 — Instrumentation

**Objective:** know weekly whether the plan is working, and know the margin on
every SKU.
**Done when:** the weekly scorecard is produced automatically from dylo.

| Due | To-do |
|---|---|
| 2026-08-28 | Backfill the purchase ledger: resolve every "amount TBD" row and add the missing subscriptions (Cursor, Anthropic, OpenAI, Clay). Current tracked spend of €1,829 is not the real number. |
| 2026-09-04 | Weekly scorecard live: calls booked, calls held, closes, builds shipped, MRR, cash collected, human hours per build, **cost per held call by channel** (demo-led vs volume vs partner — this is what settles the §5.6.5 gate). |
| 2026-09-30 | Wire `token_usage` so per-project AI cost rolls up, and allocate the shared AI bills with `purchases_allocate`. |
| 2026-10-30 | Monthly close discipline: revenue, cost and gross margin **per SKU**, reviewed on the first Monday. |
| 2027-01-29 | First full quarterly review against this document; revise §4 assumptions with real data. |

---

## 6. Phase calendar and gates

Do not start the next phase until the gate is met. If a gate fails, fix it
rather than pushing the date on everything downstream.

| Phase | Window | Theme | Gate to exit |
|---|---|---|---|
| **0** | 2026-08-20 → 2026-09-30 | **Cash, machine and brand kick-off.** Convert pipeline, draft the catalog, brief and sign the brand partner, start the entity, start measuring. | Casals proposal sent · LLAZA deposit invoiced · €4,050 collected · catalog written · **brand partner signed and kicked off** · hours-per-build being logged |
| **1** | 2026-10-01 → 2026-10-31 | **Incorporate and switch.** S.L. constituted, Casals national run delivered, demo host + outbound go live. | CIF issued · Casals run delivered and invoiced · **Lot A + B delivered** · **segment demo #1 live** · outbound sending 400+/week · contract pack drafted |
| **2** | 2026-11-01 → 2027-01-31 | **Operate as dylo.** Minimum viable brand live, first cohorts, calls to 25–30/month, fleet console. | ≥12 new logos · ≥25 calls held in January · **cohort 1 split-test measured** · **demo-led gate decided (2027-01-15)** · fleet console live · exit MRR ≥ €600 |
| **3** | 2027-02-01 → 2027-10-31 | **Run rate.** 40+ calls/month, 10 builds/month, maintenance automated, channel mix set by evidence. | Year-1 revenue ≥ €200k · exit MRR ≥ €5k · ≥60 new logos |

Four absolute dates inside this: **Casals proposal by 2026-09-04**, **brand
partner signed by 2026-09-18**, **constitution complete by 2026-10-09**, and the
**demo-led gate decision on 2027-01-15**. Everything else can move by a week
without breaking the plan.

---

## 7. Open conflict: what €100/month can honestly promise

[dylo-agents `docs/maintenance-standard.md`](https://github.com/dyloAI/dylo-agents/blob/main/docs/maintenance-standard.md) currently commits every
maintenance client to monthly Dependabot review, weekly Sentry triage, uptime
probes with alerting, a yearly Neon restore drill, secret rotation, quarterly
access review, a monthly hours bag for small fixes, and a written monthly status
note. That is a defensible package at €300–500/month. **At €100/month across 62
systems it is 62 restore drills and ~740 status notes a year, solo.**

The decision was to keep maintenance cheap because it is part of the wedge. That
is a reasonable bet — €100 × 62 systems is €6,200/month, and the volume is what
makes it work. But the standard has to be made truthful, one of two ways:

1. **Automate to the promise** (W7): fleet console plus scheduled agent sweeps
   that genuinely perform the triage, the Dependabot batches and the status-note
   drafts, with a human only reviewing and sending. This is the intended path.
2. **Write a leaner volume tier**: a `care` tier at €100/month covering uptime
   monitoring, security patches and Sev-1/2 response, with restore drills,
   status notes and the hours bag moved to a paid `managed` tier.

**Resolve this by 2027-02-26** (W7), and until then do not sign a maintenance
client to promises the automation cannot yet keep.

---

## 8. Risks

Ordered by how much damage they do, not by likelihood.

| # | Risk | Why it matters here | Mitigation |
|---|---|---|---|
| 1 | **The funnel underdelivers.** Cold outbound into Catalan industrial SMBs returns under 1% meeting rate. | 40 calls/month is the load-bearing assumption; at 20 the year lands ~45% lower. | Three channels running in parallel, not in sequence: demo-led (§5.6), volume, partner. Warm calls are worth ~50 cold emails each. Review the meeting rate at 2026-11-27 and shift budget between channels on cost per held call. |
| 2 | **Human hours per build exceed 9–12h.** | Directly caps builds/year; at 16h the plan misses by ~€80k. | Log `actual_human_minutes` from 2026-08-28. Fixed-scope SKUs and the €500 scoping gate exist for this. If the measured number is above 14h by December, cut the catalog to the two cheapest-to-deliver SKUs. |
| 3 | **Support load at 60+ cheap clients buries delivery.** | Small clients on €100/month can still generate unlimited email. | W7 automation, a written SLA with Sev tiers, and support routed to threads (never to ad-hoc email or phone). |
| 4 | **Client-conflict blowback from segment demos.** Selling a configurator into LLAZA's, CELO's or ATAC's competitive set. | LLAZA has a signed NDA. This is relationship-ending and possibly a contractual breach — the worst kind of self-inflicted wound. | The §5.6.4 rule: no segment demo in a vertical where a client competes without written clearance. Offer those clients a white-label channel deal instead. |
| 5 | **CELO churn.** 92% of revenue, and the champion who bought it left in June. | A CELO exit in the next six months removes most current income. | §5.1 re-anchoring by 2026-08-28. Also: track Albert Folch at Sapira AI as a warm node, not a loss. |
| 6 | **Solo burnout.** 50–60h/week for 14 months while incorporating a company and running an agency engagement. | The single point of failure is you, and there is no plan B for delivery. | The delivery ceiling in §4 is a ceiling, not a target — refuse work above it rather than absorbing it. Reassess adding a contractor at the Phase 2 gate. |
| 7 | **Brand spend without payback.** €14–30k of runway on strategy and creative, pre-revenue. | At €1,800 a build that is ~11 builds of revenue, spent before the entity exists. | Stage it: Lot A + B committed, Lot C gated on Phase 1 (§5.2.2). Measure reply rate and site conversion before and after (2026-12-18), and review payback on 2027-01-29. Consider the specialist trio over a full-service agency. |
| 8 | **Agency slippage delays the launch.** Brand work runs long, as it usually does. | Could stall outbound, which is the whole plan. | Already de-risked by design: outbound launches on the *existing* brand in late October, and only the minimum-viable-brand list is gated to 1 November (§5.2.4). |
| 9 | **Demo-factory sprawl.** One Vercel project and Neon database per demo. | Cost and cleanup burden would kill the channel's economics within a month. | The §5.6.2 architecture is non-negotiable: one multi-tenant host, tenant config as data, 30-day auto-expiry. |
| 10 | **Price anchoring.** Existing clients know the €300–1,800 range, so the €12k LLAZA deal is hard to repeat inside the installed base. | Limits the "a few large deals" lever to new logos. | Keep large deals to new accounts and to genuinely larger scopes; never discount a catalog SKU below list. |
| 11 | **Margin blindness.** Cost per project is unknown today. | You cannot defend a €1,800 price you cannot cost. | W9, complete by 2026-09-30. |
| 12 | **Legal exposure at volume.** 60+ clients, client data in your systems, demos carrying third-party brands, no contract pack yet. | One GDPR incident, IP dispute or trademark complaint costs more than a quarter of revenue. | Contract pack + DPA by 2026-10-23, before the first cohort signs. Demo legal posture reviewed 2026-10-23 (§5.6.4). |
| 13 | **The Casals October window.** | €7,770 with a one-year slip cost if missed, and no proposal has been sent. | Hard date 2026-09-04, tracked as the top item in W1. |

---

## 9. Operating rhythm

| Cadence | What happens |
|---|---|
| **Daily** | Clear the dylo action queue. Nothing ends the day in `sin_triar`. 2 discovery calls. Review and send the queued demo-outreach drafts. |
| **Weekly (Mon)** | Scorecard: calls booked/held, closes, builds shipped, MRR, cash collected, hours per build, **cost per held call by channel**. Compare against the §4 month row. |
| **Weekly (Wed)** | Demo batch: personalize tier-2 demos for anyone who engaged with a segment demo last week (§5.6.1). Highest-intent hour of the week — protect it. |
| **Weekly (Fri)** | Fleet sweep review: Sentry, uptime, security Dependabot. Invoice everything delivered that week — do not batch to month end. |
| **Monthly (1st Mon)** | Close the month: revenue, cost, gross margin per SKU. Collections review on anything over 30 days. Client status notes reviewed and sent. |
| **Quarterly** | Review this document against actuals. Revise the §4 assumptions with measured numbers, not hopes. Access review across GitHub/Vercel/Neon/Sentry. |

---

## 10. Changelog

| Date | Change |
|---|---|
| 2026-08-20 | Initial plan. Strategy set as low-price high-volume with the factory as the moat; maintenance held at €100/mo with the §7 conflict left open; ICP set to Spanish industrial manufacturers selling through dealer networks; year-1 base case €236.5k. |
| 2026-08-20 | Added **W2 — Brand, design system and creative** as a core workstream starting immediately: external partner, three staged lots at €14–30k of capex, readiness checklist in §5.2.3, and the explicit resolution that 1 November is when the company starts trading, not when the brand finishes. |
| 2026-08-20 | Added **W6 — Demo-led acquisition**, the strategy already in flight with `dylo-sales` and La Cristalería de Barcelona. Designed as **two tiers** (segment demos at zero marginal cost, named personalization only on demonstrated intent) on a single multi-tenant host. Held as a split-tested experiment with a gate on 2027-01-15 rather than folded into the §4 model. Client-conflict rule (§5.6.4) added after noting that toldos, fijaciones and aislamientos collide with LLAZA, CELO and ATAC. |
