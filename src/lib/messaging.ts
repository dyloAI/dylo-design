/**
 * Canonical messaging framework. The docs page at /foundations/messaging
 * renders this file. Do not keep a second copy of the words.
 *
 * Facts come from the brand brief. A TODO marks a gap. Do not fill a gap
 * with a number, a client, or a competitor that the brief does not give.
 */

export type Localized = { en: string; es: string }

export const tagline: Localized = {
  en: 'Software, made.',
  es: 'Software, hecho.',
}

export const legal: Localized = {
  en: 'dylo is a brand of Ax42 S.L.',
  es: 'dylo es una marca de Ax42 S.L.',
}

export const positioning: Localized = {
  en: 'dylo is a technology provider for companies with 1 to 500 people and no technology team. The buyer is the owner, a director, or a manager who owns the result. You and a dylo engineer define the system on the dylo platform. We start with a narrow product we already build: a quote or product configurator, data extraction and analysis, or an operations platform. When it is live, we host it and look after the service. If you want the code in your own accounts, you can ask. That is an option.',
  es: 'dylo es un proveedor de tecnología para empresas de 1 a 500 personas sin equipo técnico. Quien compra es el propietario, un director, o un gerente que responde del resultado. Usted y un ingeniero de dylo definen el sistema en la plataforma de dylo. Empezamos por un producto concreto que ya construimos: un configurador de presupuestos o de producto, extracción y análisis de datos, o una plataforma de operaciones. Cuando ya está en uso, lo alojamos y mantenemos el servicio. Si quiere el código en sus propias cuentas, puede pedirlo. Es una opción.',
}

export const pitch = {
  oneLine: {
    en: 'A dylo engineer builds your web app, and we host it and look after it for one monthly fee.',
    es: 'Un ingeniero de dylo construye su aplicación web, y la alojamos y la mantenemos por una cuota al mes.',
  } satisfies Localized,
  thirtySeconds: {
    en: 'You run a company of 1 to 500 people, and you do not have a tech team. dylo is your technology provider. You work with a dylo engineer on our platform. We usually start from a product we already know: a configurator for quotes, a way to get the data out of the files you already have, or an operations platform for the work your team repeats. The price and the date are agreed before we start. When it is live, we host it and look after it. Hosting, the database, updates, monitoring, and fixes are one monthly fee.',
    es: 'Usted dirige una empresa de 1 a 500 personas, y no tiene equipo técnico. dylo es su proveedor de tecnología. Trabaja con un ingeniero de dylo en nuestra plataforma. Solemos empezar por un producto que ya conocemos: un configurador de presupuestos, una forma de sacar los datos de los archivos que ya tiene, o una plataforma de operaciones para el trabajo que su equipo repite. El precio y la fecha se acuerdan antes de empezar. Cuando ya está en uso, lo alojamos y lo mantenemos. El alojamiento, la base de datos, las actualizaciones, la monitorización y las correcciones son una cuota al mes.',
  } satisfies Localized,
}

export type Pillar = {
  title: Localized
  body: Localized
  proof: Localized
}

export const pillars: Pillar[] = [
  {
    title: {
      en: 'A dylo engineer, on the platform',
      es: 'Un ingeniero de dylo, en la plataforma',
    },
    body: {
      en: 'You and a dylo engineer define the system on the dylo platform. We host it and run it after it ships. You do not need your own accounts, and you are not left waiting on a project.',
      es: 'Usted y un ingeniero de dylo definen el sistema en la plataforma de dylo. Nosotros lo alojamos y lo hacemos funcionar cuando ya está en uso. No necesita cuentas propias, y no se queda esperando un proyecto.',
    },
    proof: {
      en: 'An insulation contractor of about 50 people had no technology team. The quote was on 12 April 2026, and a first version was in production on 17 April.',
      es: 'Un contratista de aislamiento de unas 50 personas no tenía equipo técnico. El presupuesto fue el 12 de abril de 2026, y una primera versión estaba en producción el 17 de abril.',
    },
  },
  {
    title: {
      en: 'A product we already know',
      es: 'Un producto que ya conocemos',
    },
    body: {
      en: 'We start with a narrow product we already build. The three doors are a quote or product configurator, data extraction and analysis, and an operations platform. An operations platform runs the daily work. It is not an ERP.',
      es: 'Empezamos por un producto concreto que ya construimos. Las tres puertas son un configurador de presupuestos o de producto, la extracción y el análisis de datos, y una plataforma de operaciones. Una plataforma de operaciones lleva el trabajo del día. No es un ERP.',
    },
    proof: {
      en: 'The same configurator pattern has been sold four times, to one industrial group and its partner, at €550 to €1,800. A manufacturer white-labels that tool for its own distributor: the same codebase, its own address, and its own database. For data, a 150-year-old publisher that reaches 33,000 schools has the book data extracted and the ISBNs added.',
      es: 'El mismo patrón de configurador se ha vendido cuatro veces, a un grupo industrial y a su socio, entre 550 € y 1.800 €. Un fabricante ofrece esa herramienta con su marca a su propio distribuidor: el mismo código, su propia dirección y su propia base de datos. En datos, una editorial de 150 años que llega a 33.000 escuelas tiene los datos de los libros extraídos y el ISBN añadido.',
    },
  },
  {
    title: {
      en: 'A price and a date, first',
      es: 'Primero el precio y la fecha',
    },
    body: {
      en: 'You hear the price and the date before we start. A catalog product has a published price and a fixed scope, and catalog work is set at three weeks. If the work is not in the catalog, a scoping sprint costs €500, takes two days, and is credited in full if you build.',
      es: 'Usted conoce el precio y la fecha antes de empezar. Un producto de catálogo tiene un precio publicado y un alcance cerrado, y el trabajo de catálogo se fija en tres semanas. Si el trabajo no está en el catálogo, una fase de alcance cuesta 500 €, dura dos días, y se descuenta por completo si construye.',
    },
    proof: {
      en: 'An insulation contractor of about 50 people: the quote was on 12 April 2026, they accepted on 13 April, and the first version was in production on 17 April. That is four days. Buyers also tell us what they were offered elsewhere: “nos pidieron 40.000 € y cuatro meses.” An agency, among the options they weigh, costs €30,000 to €60,000 and several months.',
      es: 'Un contratista de aislamiento de unas 50 personas: el presupuesto fue el 12 de abril de 2026, lo aceptaron el 13 de abril, y la primera versión estaba en producción el 17 de abril. Son cuatro días. Los compradores también cuentan lo que les ofrecieron en otro sitio: «nos pidieron 40.000 € y cuatro meses». Una agencia, entre las opciones que barajan, cuesta de 30.000 € a 60.000 € y varios meses.',
    },
  },
  {
    title: {
      en: 'One monthly fee',
      es: 'Una cuota al mes',
    },
    body: {
      en: 'We host the app and look after the service: hosting, the database, updates, monitoring, and fixes. That is one monthly fee. You do not run the servers. If you want the code in your own accounts, you can ask. That is an option, not the usual way.',
      es: 'Alojamos la aplicación y mantenemos el servicio: el alojamiento, la base de datos, las actualizaciones, la monitorización y las correcciones. Eso es una cuota al mes. Usted no gestiona los servidores. Si quiere el código en sus propias cuentas, puede pedirlo. Es una opción, no la forma habitual.',
    },
    proof: {
      en: 'A quote calculator has been in production since December 2024, and we still look after it. A façades team replaced a no-code form tool, Jotform, with inspection reports: a branded PDF, sent by email and filed. That work was delivered, accepted, and closed.',
      es: 'Una calculadora de presupuestos está en producción desde diciembre de 2024, y seguimos manteniéndola. Un equipo de fachadas sustituyó un formulario sin código, Jotform, por informes de inspección: un PDF con su marca, enviado por correo y archivado. Ese trabajo se entregó, se aceptó y se cerró.',
    },
  },
]

export type Objection = {
  question: Localized
  answer: Localized
}

export const objections: Objection[] = [
  {
    question: {
      en: 'Are you an agency?',
      es: '¿Sois una agencia?',
    },
    answer: {
      en: 'No. We are a technology provider. You work with a dylo engineer on our platform. We host the app and look after it.',
      es: 'No. Somos un proveedor de tecnología. Usted trabaja con un ingeniero de dylo en nuestra plataforma. Nosotros alojamos la aplicación y la mantenemos.',
    },
  },
  {
    question: {
      en: 'Why does it cost so little?',
      es: '¿Por qué tan barato?',
    },
    answer: {
      en: 'A catalog product is a later build of a line we already run, not a first project. The same configurator pattern has been sold four times, from €550 to €1,800. You pay for that later build.',
      es: 'Un producto de catálogo es una entrega más de una línea que ya hemos hecho, no un primer proyecto. El mismo patrón de configurador se ha vendido cuatro veces, de 550 € a 1.800 €. Usted paga esa entrega posterior.',
    },
  },
  {
    question: {
      en: 'What if you disappear?',
      es: '¿Y si desapareces?',
    },
    answer: {
      en: 'We host the app and look after it: hosting, the database, updates, monitoring, and fixes, for one monthly fee. A quote calculator has been in production since December 2024, and we still look after it. You also keep a dylo engineer, so the system is not a box we handed over and left. If you want the code in your own accounts, you can ask. That is an option. It is not how we usually work.',
      es: 'Alojamos la aplicación y la mantenemos: el alojamiento, la base de datos, las actualizaciones, la monitorización y las correcciones, por una cuota al mes. Una calculadora de presupuestos está en producción desde diciembre de 2024, y seguimos manteniéndola. Además sigue con un ingeniero de dylo, así que el sistema no es una caja que le entregamos y dejamos. Si quiere el código en sus propias cuentas, puede pedirlo. Es una opción. No es la forma habitual.',
    },
  },
  {
    question: {
      en: 'We are a very particular case.',
      es: 'Somos muy específicos.',
    },
    answer: {
      en: 'A narrow product is the point. The scoping sprint costs €500 and takes two days. It shows whether we fit. If you build, that €500 is credited in full.',
      es: 'Un producto concreto es justo el punto. La fase de alcance cuesta 500 € y dura dos días. Sirve para ver si encajamos. Si construye, esos 500 € se descuentan por completo.',
    },
  },
]

export const about: Localized = {
  en: 'The name dylo comes from the Czech word dílo, a crafted work: the finished piece, not the hours. That is the work of a technology provider. You get a system with a price and a date, built by a dylo engineer, and looked after by us for one monthly fee.',
  es: 'El nombre dylo viene de la palabra checa dílo, una obra hecha: el trabajo terminado, no las horas. Ese es el trabajo de un proveedor de tecnología. Usted recibe un sistema con un precio y una fecha, construido por un ingeniero de dylo, y mantenido por nosotros por una cuota al mes.',
}

/** Customer words, in Spanish. The English is our gloss, not a second quote. */
export const pains: { quote: string; gloss: string }[] = [
  {
    quote: 'Los distribuidores nos llaman para pedir precios',
    gloss: 'Distributors call us to ask for prices.',
  },
  {
    quote: 'un presupuesto tarda dos días',
    gloss: 'A quote takes two days.',
  },
  {
    quote: 'está todo en Excel',
    gloss: 'It is all in Excel.',
  },
  {
    quote: 'nos pidieron 40.000 € y cuatro meses',
    gloss: 'They asked us for €40,000 and four months.',
  },
  {
    quote: 'nos dijeron que no se podía',
    gloss: 'They told us it could not be done.',
  },
]

export const alternatives: Localized = {
  en: 'The options this buyer already weighs are an agency, at €30,000 to €60,000 and several months; hiring a technology team; the person who integrates their ERP, which covers the ERP and not the apps around it; a no-code stack patched together; or doing nothing.',
  es: 'Las opciones que este comprador ya baraja son una agencia, de 30.000 € a 60.000 € y varios meses; contratar un equipo técnico; quien le integra el ERP, que cubre el ERP y no las aplicaciones de alrededor; un montaje sin código hecho de parches; o no hacer nada.',
}

export const todos: string[] = [
  'TODO: Catalan copy. The brief locks English, Spanish, and Catalan. This framework is English and Spanish.',
  'TODO: Named competitors. The brief leaves that table empty on purpose. Do not invent names. The alternatives above are the options the buyer already weighs, not a competitor list.',
  'TODO: Client and product names. Describe the work by sector until written permission is in. Do not publish the names held in the brief.',
  'TODO: The catalog of named products and their prices. It is not written yet. Do not turn €550–€1,800, or three weeks, into a price for every product.',
  'TODO: A customer view of the platform. It is not live. Do not say the customer already signs in to manage the lifecycle. Today the engineer works with them.',
  'TODO: How many companies work this way. The brief does not give a count. Do not invent one.',
  'TODO: The saving against the no-code form. The brief says the work was delivered, accepted, and closed. It does not give the two prices. Do not invent a saving.',
  'TODO: The monthly fee. Do not invent an amount. The public line is one monthly fee, covering hosting, the database, updates, monitoring, and fixes.',
  "TODO: Taking data with you. The brief tied leaving to the code in the customer's own accounts, which is now an option on request. It does not describe an export from a service dylo hosts. Do not promise that a hosted customer can take their data with them until that is written.",
]
