import { Page, PageHeader, Prose, Section } from '@/components/docs'
import { Card } from '@/registry/dylo/ui/card'
import Link from 'next/link'

const PIEZAS: [string, string][] = [
  ['Categoría', 'Fábrica de software. Explícitamente no una agencia y no una consultora.'],
  ['Nombre', 'dylo, siempre en minúscula. El trabajo entregado se capitaliza: un Dílo.'],
  [
    'Por qué puede ser verdad',
    'El coste de hacer software cayó un orden de magnitud y casi nadie rediseñó su forma de entregar. dylo sí: un comando aprovisiona la aplicación, la base de datos, la autenticación y el despliegue, los agentes construyen y un sistema operativo propio lleva la cuenta del trabajo.',
  ],
  [
    'La IA, dónde aparece',
    'Como mecanismo, mencionado una vez, allí donde explica el precio. La marca lidera con el resultado: precio publicado, alcance fijo, tres semanas, el código es tuyo.',
  ],
]

const SUS_PALABRAS = [
  'Los distribuidores nos llaman para pedir precios.',
  'Un presupuesto tarda dos días.',
  'Está todo en Excel.',
  'Nos pidieron 40.000 € y cuatro meses.',
  'Nos dijeron que no se podía.',
]

const ALTERNATIVAS = [
  'Una agencia: 30.000–60.000 €, meses de calendario.',
  'Su integrador de ERP, que hace el ERP pero no las aplicaciones de alrededor.',
  'No-code parcheado. Uno de nuestros sistemas en producción sustituye literalmente un Jotform.',
  'El IT interno, que lo pone «para más adelante».',
  'No hacer nada, que es la alternativa que gana casi siempre.',
]

const OBJECIONES: [string, string][] = [
  [
    '¿Por qué tan barato?',
    'Porque no son proyectos, son productos de una línea de producción. El mismo configurador se ha vendido cuatro veces. Pagas la cuarta construcción, no la primera.',
  ],
  [
    '¿Y si desapareces?',
    'El código está en tu GitHub, en tu Vercel y en tu Neon desde el día uno. Sin dependencia y por escrito en cada presupuesto. Y hay una calculadora nuestra en producción desde diciembre de 2024.',
  ],
  ['¿De quién es el código?', 'Tuyo. Por escrito, en cada presupuesto.'],
  [
    'Somos muy específicos, no vamos a encajar en un producto.',
    'El alcance fijo es justamente el punto, y el sprint de alcance de 500 € existe para saber en dos días si encajas. Se descuenta íntegro si construyes.',
  ],
]

const LOTES: [string, string, string][] = [
  [
    'Lote A',
    'Estrategia e identidad verbal',
    'Posicionamiento, arquitectura de mensaje, tono de voz, naming del catálogo de productos y los mensajes que responden a las cuatro objeciones.',
  ],
  [
    'Lote B',
    'Identidad visual y sistema de diseño como tokens',
    'Evolución de la identidad, librería en Figma y tokens que extienden el sistema que ya existe. Comprometido junto con el Lote A.',
  ],
  [
    'Lote C',
    'Contenido',
    'Copy del sitio, casos, película de marca y tres vídeos de producto. Es una ampliación real y ganable, condicionada al resultado de la primera fase.',
  ],
]

const ENTREGA = [
  'Librería de Figma organizada y entregada.',
  'Tokens como JSON o variables CSS que mapeen sobre el @theme de Tailwind v4 que ya usamos. No un PDF con códigos hexadecimales.',
  'Vídeo en 16:9, 9:16 y 1:1.',
  'Copy como cadenas estructuradas para el diccionario i18n en ES, CA y EN. No prosa en un Google Doc.',
  'Todos los archivos fuente, con cesión completa de la propiedad intelectual.',
]

const MUST_NOTS = [
  'No renombrar la empresa. El nombre no está en discusión.',
  'No descartar la historia de dílo y robota.',
  'No reemplazar el sistema de diseño existente: extenderlo.',
  'No trabajar en una herramienta de la que no se puedan exportar tokens.',
  'La ingeniería del sitio se queda en casa. No buscamos quien lo programe.',
]

const CASOS: [string, string, string][] = [
  [
    'El mismo configurador, vendido cuatro veces a un grupo industrial y a su socio',
    'La afirmación de fábrica: todo el posicionamiento en una línea',
    'Un patrón de código, cuatro entregas pagadas, de 550 € a 1.800 €.',
  ],
  [
    'Una contrata de aislamientos, unas 50 personas',
    'La velocidad',
    'Presupuesto el 12 de abril de 2026, aceptado el 13, v1 en producción el 17. Cuatro días.',
  ],
  [
    'Una división de fachadas que sustituye un Jotform',
    'Más barato que el no-code, y además es tuyo',
    'Informes de inspección en móvil, PDF de marca, enviado por correo y archivado solo.',
  ],
  [
    'Una calculadora de presupuestos en producción desde diciembre de 2024',
    'Durabilidad. Es lo que mata el «¿y si desapareces?»',
    '20 meses viva y con mantenimiento.',
  ],
  [
    'Un fabricante que pone su marca en nuestra herramienta para su propio distribuidor',
    'El canal de partners',
    'El mismo código bajo una capa de configuración por cliente, con URL y base de datos propias.',
  ],
  [
    'Una editorial de 150 años, 33.000 colegios',
    'Escala, para el producto de datos',
    'Descubrimiento agéntico de fuentes, extracción por visión en lote, enriquecimiento por ISBN.',
  ],
]

const PROCESO: [string, string][] = [
  ['Propuestas', 'Precio fijo por lote, con fechas.'],
  ['Selección', '18 de septiembre de 2026.'],
  ['Arranque', 'Inmediatamente después de la selección.'],
  ['Cadencia', 'Una llamada de revisión por semana, en franja fija.'],
  ['Feedback', 'Por nuestra parte, en menos de 48 horas.'],
  ['Revisiones', 'Máximo dos rondas por entregable.'],
  ['Aceptación', 'Ningún entregable se acepta sin los archivos fuente.'],
]

function Pairs({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="m-0 rounded-sm border border-line">
      {rows.map(([term, detail]) => (
        <div key={term} className="border-b border-line p-5 last:border-b-0">
          <dt className="text-[15px] font-semibold text-ink">{term}</dt>
          <dd className="m-0 mt-1.5 max-w-[62ch] text-[14px]/[1.6] text-graphite">{detail}</dd>
        </div>
      ))}
    </dl>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="m-0 max-w-[62ch] list-disc space-y-2 pl-5 text-[15px]/[1.7] text-graphite">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function Brief() {
  return (
    <div lang="es">
      <Page>
        <PageHeader
          eyebrow="Documento privado"
          title="Brief de marca"
          lead={
            <>
              Lo que sigue es la hipótesis de posicionamiento escrita desde nuestro propio registro de proyectos, no
              inventada. El trabajo del estudio es afilarla, ponerla a prueba y dramatizarla. Si la propuesta es
              sustituirla del todo, queremos el argumento estratégico que lo justifique.
            </>
          }
        />

        <Section
          title="1. Qué es dylo"
          description="La tesis en un párrafo. Es el punto de partida, no una conclusión cerrada."
        >
          <Card
            eyebrow="Tesis"
            title="Software demasiado pequeño para una agencia y demasiado específico para comprarlo hecho."
          >
            <Prose>
              <p className="m-0">
                Las pymes industriales necesitan software pequeño y muy concreto: un configurador de presupuestos para
                sus distribuidores, un selector de producto para el taller, un backoffice para sus operarios, un proceso
                que saque los datos de miles de PDF. Ese software es demasiado pequeño para que una agencia le preste
                atención y demasiado específico para comprarlo hecho, así que no se construye nunca y la empresa sigue
                funcionando con Excel y correo.
              </p>
              <p className="m-0 mt-4">
                dylo industrializa la fabricación de exactamente esos sistemas: plantillas, agentes de IA y un sistema
                operativo propio. La consecuencia es que una aplicación en producción es un producto con precio
                publicado, alcance fijo y tres semanas hasta estar viva. No un proyecto con fase de descubrimiento y un
                presupuesto de 40.000 €.
              </p>
            </Prose>
          </Card>
          <div className="mt-6">
            <Pairs rows={PIEZAS} />
          </div>
        </Section>

        <Section
          title="2. A quién le vendemos"
          description="Pymes industriales españolas y catalanas de 20 a 200 empleados, con un ERP instalado (SAP, Oracle, Sage) y, muy a menudo, vendiendo a través de redes de distribuidores o instaladores."
        >
          <Prose>
            <p className="m-0">
              Quien compra es el propietario, un director o un responsable con cabeza comercial.{' '}
              <strong>Nunca IT.</strong> Todas las operaciones del registro las compró alguien con una cuenta de
              resultados, una irritación operativa concreta, ningún equipo de desarrollo y un ERP que controla otra
              empresa.
            </p>
            <p className="m-0">Así lo cuentan ellos, literalmente:</p>
          </Prose>
          <div className="mt-4">
            <Bullets items={SUS_PALABRAS} />
          </div>
        </Section>

        <Section
          title="3. Las alternativas que valoran"
          description="Contra esto se compara la marca. Ninguna de las cinco es otra fábrica de software."
        >
          <Bullets items={ALTERNATIVAS} />
        </Section>

        <Section
          title="4. La tensión a resolver"
          description="Si sólo se lee una sección de este documento, que sea esta. Es el encargo entero."
        >
          <Card
            tone="ink"
            eyebrow="El centro del encargo"
            title="1.800 € tiene que leerse como industrializado, nunca como barato."
          >
            <Prose>
              <p className="m-0 text-bone/80">
                El precio hace dos trabajos a la vez y tiran en direcciones opuestas. Precio bajo con marca débil se lee
                como <span className="text-oxide">riesgo</span>: va a desaparecer, esto es un hobby, los datos de mi ERP
                no van ahí dentro. Precio bajo con marca fuerte se lee como ventaja: han encontrado la forma de hacerlo
                de manera eficiente y el beneficio me lo llevo yo.
              </p>
              <p className="m-0 mt-4 text-bone/80">Todo lo demás en este encargo es consecuencia de resolver eso.</p>
            </Prose>
          </Card>
        </Section>

        <Section
          title="5. La historia que ya existe"
          description="Hay que afilarla, no reemplazarla. Es lo más raro y más nuestro que tiene la marca hoy."
        >
          <Prose>
            <p className="m-0">
              El nombre juega con el checo: <em>dílo</em> es una obra hecha con oficio, una obra de autor, frente a{' '}
              <em>robota</em>, el trabajo forzado y repetitivo que dio al inglés la palabra «robot». De ahí sale la
              línea que ya usamos: <strong>los robots hacen la robota, tú te quedas con el dílo.</strong>
            </p>
            <p className="m-0">
              Visualmente eso se traduce hoy en una fundición industrial: monocromo cálido, retículas estructurales,
              filetes finos y placas estampadas, con una única nota de óxido. La contención es la marca.
            </p>
          </Prose>
        </Section>

        <Section
          title="6. Las cuatro objeciones"
          description="Aparecen en todas las conversaciones, así que el mensaje tiene que responderlas antes de que las pregunten. La respuesta honesta, con la evidencia, va a la derecha."
        >
          <Pairs rows={OBJECIONES} />
        </Section>

        <Section
          title="7. Qué necesitamos"
          description="El encargo va por lotes, y se puede presentar a uno, a dos o a los tres. También aceptamos una propuesta conjunta entre estudios si cada pieza queda en las mejores manos."
        >
          <dl className="m-0 rounded-sm border border-line">
            {LOTES.map(([lote, titulo, detalle]) => (
              <div key={lote} className="border-b border-line p-5 last:border-b-0">
                <dt className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-concrete uppercase">
                    {lote}
                  </span>
                  <span className="text-[15px] font-semibold text-ink">{titulo}</span>
                </dt>
                <dd className="m-0 mt-1.5 max-w-[62ch] text-[14px]/[1.6] text-graphite">{detalle}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section
          title="8. Requisitos de entrega"
          description="No son negociables, y son el origen de la mayoría de las discusiones en encargos como este. Mejor por delante."
        >
          <Bullets items={ENTREGA} />
        </Section>

        <Section title="9. Lo que no hay que hacer" description="El alcance tiene vallas. Estas son.">
          <Bullets items={MUST_NOTS} />
        </Section>

        <Section
          title="10. Lo que ya existe"
          description="No se parte de cero, y eso es parte del atractivo del encargo: hay dónde apoyarse y hay dónde entregar."
        >
          <Prose>
            <p className="m-0">
              Este mismo sitio es el sistema de diseño: <Link href="/foundations/colour">fundamentos</Link>,{' '}
              <Link href="/components/button">componentes</Link> y el{' '}
              <Link href="/brand-book">brand book de catorce páginas</Link>, todo en código y con tokens ya mapeados
              sobre Tailwind. Existe además el sitio de marca en tres idiomas (ES, CA, EN) y la plantilla de PDF con la
              que salen las propuestas a cliente.
            </p>
            <p className="m-0">
              El sistema se entrega instalable con la CLI de shadcn, así que un token que cambie aquí llega a todas las
              aplicaciones. Es el nivel de rigor de entrega que esperamos también de vuelta.
            </p>
          </Prose>
        </Section>

        <Section
          title="11. Casos"
          description="Seis sistemas en producción, uno por argumento. Van por sector: los nombres de cliente y las capturas se entregan cuando tengamos el permiso por escrito de cada uno."
        >
          <div className="overflow-x-auto rounded-sm border border-line">
            <table className="w-full border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-line bg-paper">
                  {['Caso', 'Qué prueba', 'El hecho'].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="px-4 py-2.5 font-mono text-[10px] font-bold tracking-eyebrow text-concrete uppercase"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CASOS.map(([caso, prueba, hecho]) => (
                  <tr key={caso} className="border-b border-line align-top last:border-b-0">
                    <td className="px-4 py-3 text-[14px]/[1.5] font-semibold text-ink">{caso}</td>
                    <td className="px-4 py-3 text-[13px]/[1.5] text-graphite">{prueba}</td>
                    <td className="px-4 py-3 text-[13px]/[1.5] text-graphite">{hecho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          title="12. Proceso y fechas"
          description="Quien aprueba es una sola persona, que además está entregando proyectos cada semana. Lo decimos por delante para que la cadencia esté en el contrato y no se descubra en la tercera semana."
        >
          <Pairs rows={PROCESO} />
        </Section>

        <Section title="13. Qué queremos recibir" description="Tres cosas, iguales para todos, para poder comparar.">
          <Bullets
            items={[
              'Tres casos relevantes con el razonamiento estratégico detrás. No las imágenes bonitas: compramos el pensamiento.',
              'Las personas concretas que van a hacer el trabajo, con nombre.',
              'Un precio fijo por lote, con fechas. Un retainer o una «fase 0 de descubrimiento» no encaja con este encargo.',
            ]}
          />
          <div className="mt-6">
            <Prose>
              <p className="m-0">
                Y una pregunta, que es la que de verdad filtra:{' '}
                <strong>
                  nuestro precio es 1.800 € por algo que una agencia presupuesta en 40.000 €. ¿Cómo harías que eso se
                  lea como industrializado y no como barato?
                </strong>{' '}
                La respuesta a esa pregunta es el encargo entero: es la sección 4.
              </p>
              <p className="m-0">
                Propuestas y dudas a <a href="mailto:hello@dylo.dev">hello@dylo.dev</a>.
              </p>
            </Prose>
          </div>
        </Section>
      </Page>
    </div>
  )
}
