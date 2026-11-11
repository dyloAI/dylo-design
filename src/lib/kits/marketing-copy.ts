/**
 * Sample copy for the marketing kit, so its layouts read like a real page.
 *
 * This is not dylo's wording. The customer-facing words live in dylo-hq, at
 * content/market/wording.md (hq.dylo.dev/market/wording). This is an English
 * copy of part of it, taken on 11 November 2026. Do not copy from here into a
 * customer-facing surface, and do not add a figure of dylo's: no price, no
 * range of what was paid, no maintenance minimum.
 */

type Copy = { en: string }

export const legal: Copy = {
  en: 'dylo is a brand of Ax42 S.L.',
}

export const positioning: Copy = {
  en: 'dylo is a technology provider for companies with 1 to 500 people and no technology team. The buyer is the owner, a director, or a manager who owns the result. You and a dylo engineer define the system on the dylo platform. We build three things: software and automations, data extraction and analysis, and operations platforms for your own business. We usually start from something we have built before, such as a quote configurator. A one-off fee pays for the build. When it is live, we host it and look after it for a yearly fee. You can take the app elsewhere whenever you want. We hand it over.',
}

export const pitch = {
  oneLine: {
    en: 'A dylo engineer builds your web app for a one-off fee, and we host it and look after it for a yearly fee.',
  } satisfies Copy,
  thirtySeconds: {
    en: 'You run a company of 1 to 500 people, and you do not have a tech team. dylo is your technology provider. You work with a dylo engineer on our platform. We usually start from something we already know: software for your team, such as a configurator for quotes; a way to get the data out of the files you already have; or an operations platform for the work your team repeats. The price and the date are agreed before we start. A one-off fee pays for the build. When it is live, we host it and look after it for a yearly fee.',
  } satisfies Copy,
}

export const pillars: { title: Copy; body: Copy }[] = [
  {
    title: { en: 'A dylo engineer, on the platform' },
    body: {
      en: 'You and a dylo engineer define the system on the dylo platform. We host it and run it after it ships. You do not need your own accounts, and you are not left waiting on a project.',
    },
  },
  {
    title: { en: 'A product we already know' },
    body: {
      en: 'We start from something we already build. The three doors are software and automations, data extraction and analysis, and an operations platform. An operations platform runs the daily work. It is not an ERP.',
    },
  },
  {
    title: { en: 'A price and a date, first' },
    body: {
      en: 'You hear the price and the date before we start. Both are set for your project and written into the proposal, with what is in scope and what is not.',
    },
  },
  {
    title: { en: 'One yearly fee' },
    body: {
      en: 'A one-off fee pays for building the app. Then one yearly fee covers hosting, updates, security updates and monitoring. A change after delivery is quoted at a fixed price, like the build. You can take the app elsewhere whenever you want.',
    },
  },
]

export const objections: { question: Copy; answer: Copy }[] = [
  {
    question: { en: 'Are you an agency?' },
    answer: {
      en: 'No. We are a technology provider. You work with a dylo engineer on our platform. We host the app and look after it.',
    },
  },
  {
    question: { en: 'Why does it cost so little?' },
    answer: {
      en: 'What we build is usually a later build of something we already run, not a first project. The same configurator pattern has been sold four times. You pay for that later build.',
    },
  },
  {
    question: { en: 'What if you disappear?' },
    answer: {
      en: 'We host the app and look after it. A quote calculator has been in production since December 2024, and we still look after it. You can take the app elsewhere whenever you want. We hand it over.',
    },
  },
]

export const about: Copy = {
  en: 'The name dylo comes from the Czech word dílo, a crafted work: the finished piece, not the hours. That is the work of a technology provider. You get a system with a price and a date, built by a dylo engineer for a one-off fee, and looked after by us.',
}

/** Customer words, in Spanish. The gloss is ours, not a second quote. */
export const pains: { quote: string; gloss: string }[] = [
  { quote: 'Los distribuidores nos llaman para pedir precios', gloss: 'Distributors call us to ask for prices.' },
  { quote: 'un presupuesto tarda dos días', gloss: 'A quote takes two days.' },
  { quote: 'está todo en Excel', gloss: 'It is all in Excel.' },
  { quote: 'nos pidieron 40.000 € y cuatro meses', gloss: 'They asked us for €40,000 and four months.' },
  { quote: 'nos dijeron que no se podía', gloss: 'They told us it could not be done.' },
]
