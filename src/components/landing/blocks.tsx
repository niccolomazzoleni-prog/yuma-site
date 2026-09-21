import { useState } from "react"
import { Plus, X } from "lucide-react"
import { SectionRail } from "@/components/home/section-rail"
import type { Bullet, LandingContent } from "@/lib/landing-content"

// Blocchi delle pagine prodotto. Stessi token della home: h2 48px, sottotesto
// 20px, corpo 17px, sezioni 88/112px, contenuto centrato.

const H2 =
  "mx-auto max-w-[22ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ref-carbon sm:text-4xl md:text-5xl"
const SUB =
  "mx-auto mt-6 max-w-[62ch] text-[17px] md:text-[20px] leading-[1.7] text-ref-graphite"
const BODY =
  "text-[16px] md:text-[17px] leading-[1.7] text-ref-graphite"

// Dato ancora da confermare col cliente (vedi APPENDICE A del copy).
function TodoTag() {
  return (
    <span className="ml-2 inline-block rounded-[4px] bg-ref-mist px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-ref-ash">
      da confermare
    </span>
  )
}

function BulletLine({ item }: { item: Bullet }) {
  return (
    <li className={`${BODY} ${item.todo ? "text-ref-ash" : ""}`}>
      {item.text}
      {item.todo ? <TodoTag /> : null}
    </li>
  )
}

export function Credibility({ data }: { data: LandingContent["credibility"] }) {
  return (
    <SectionRail id="credibilita" tone="canvas" pad="lg">
      <h2 className={H2}>{data.headline}</h2>
      <p className={SUB}>{data.body}</p>

      <ul className="mx-auto mt-10 grid max-w-[1000px] gap-4 md:grid-cols-3">
        {data.bullets.map((b) => (
          <li
            key={b.text}
            className={`rounded-[16px] border border-ref-fog bg-white px-6 py-7 ${BODY} ${
              b.todo ? "text-ref-ash" : ""
            }`}
          >
            {b.text}
            {b.todo ? <TodoTag /> : null}
          </li>
        ))}
      </ul>

      {data.note ? (
        <p className="mt-8 text-[15px] text-ref-ash">
          {data.note}
          <TodoTag />
        </p>
      ) : null}

      {data.sectors ? (
        <p className="mt-4 text-[15px] font-medium text-ref-graphite">{data.sectors}</p>
      ) : null}
    </SectionRail>
  )
}

export function Problem({ data }: { data: LandingContent["problem"] }) {
  return (
    <SectionRail id="problema" tone="linen" pad="lg">
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
        {data.label}
      </p>
      <h2 className={`${H2} mt-5`}>{data.headline}</h2>
      {data.sub ? <p className={SUB}>{data.sub}</p> : null}

      {data.items ? (
        <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 md:grid-cols-3">
          {data.items.map((it) => (
            <article
              key={it.title}
              className="rounded-[24px] border border-ref-fog bg-white px-8 py-10 text-left"
            >
              <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-ref-carbon md:text-[22px]">
                {it.title}
              </h3>
              <p className={`mt-4 ${BODY}`}>{it.desc}</p>
            </article>
          ))}
        </div>
      ) : null}

      {data.causes ? (
        <div className="mx-auto mt-14 grid max-w-[1100px] gap-10 text-left md:grid-cols-2">
          <div>
            <h3 className="text-[20px] font-semibold text-ref-carbon">
              {data.causesTitle}
            </h3>
            <ul className="mt-5 space-y-4">
              {data.causes.map((c) => (
                <li key={c.title} className={BODY}>
                  <span className="font-semibold text-ref-carbon">{c.title}</span>{" "}
                  {c.desc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-ref-carbon">
              {data.solutionTitle}
            </h3>
            <ul className="mt-5 space-y-4">
              {data.solutions?.map((c) => (
                <li key={c.title} className={BODY}>
                  <span className="font-semibold text-ref-carbon">{c.title}</span>{" "}
                  {c.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {data.table ? (
        <div className="mx-auto mt-14 max-w-[1000px] overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{data.tableTitle}</caption>
            <thead>
              <tr>
                <th className="w-1/2 border-b border-ref-fog pb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-ref-ash">
                  Oggi
                </th>
                <th className="w-1/2 border-b border-ref-fog pb-4 pl-6 text-[13px] font-medium uppercase tracking-[0.08em] text-ref-lavender">
                  Con YUMA Projects
                </th>
              </tr>
            </thead>
            <tbody>
              {data.table.map((row) => (
                <tr key={row.before}>
                  <td className={`border-b border-ref-fog py-5 pr-6 ${BODY}`}>
                    {row.before}
                  </td>
                  <td className="border-b border-ref-fog py-5 pl-6 text-[16px] font-medium leading-[1.7] text-ref-carbon md:text-[17px]">
                    {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </SectionRail>
  )
}

export function Modules({ data }: { data: LandingContent["modules"] }) {
  const statusClass: Record<string, string> = {
    attivo: "bg-ref-mintwash text-ref-carbon",
    "in rilascio": "bg-ref-mist text-ref-graphite",
    "in sviluppo": "bg-ref-mist text-ref-ash",
  }
  return (
    <SectionRail id="moduli" tone="canvas" pad="lg">
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
        {data.label}
      </p>
      <h2 className={`${H2} mt-5`}>{data.headline}</h2>
      {data.note ? (
        <p className="mt-6 text-[15px] text-ref-ash">
          {data.note.text}
          {data.note.todo ? <TodoTag /> : null}
        </p>
      ) : null}

      <div className="mx-auto mt-14 grid max-w-[1200px] gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((m) => (
          <article
            key={m.name}
            className="flex flex-col rounded-[24px] border border-ref-fog bg-white px-8 py-10 text-left"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-ref-carbon md:text-[22px]">
                {m.name}
              </h3>
              <span
                className={`rounded-pill px-3 py-1 text-[12px] font-medium ${statusClass[m.status]}`}
              >
                {m.status}
              </span>
            </div>
            <p className={`mt-4 ${BODY}`}>{m.desc}</p>
          </article>
        ))}
      </div>
      {data.items.some((m) => m.statusTodo) ? (
        <p className="mt-8 text-[14px] text-ref-ash">
          Lo stato dei moduli è
          <TodoTag />
        </p>
      ) : null}
    </SectionRail>
  )
}

export function Roles({ data }: { data: LandingContent["roles"] }) {
  return (
    <SectionRail id="ruoli" tone="linen" pad="lg">
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
        {data.label}
      </p>
      <h2 className={`${H2} mt-5`}>{data.headline}</h2>

      <div className="mx-auto mt-14 grid max-w-[1100px] gap-5 md:grid-cols-3">
        {data.items.map((r) => (
          <article
            key={r.role}
            className="rounded-[24px] border border-ref-fog bg-white px-8 py-10 text-left"
          >
            <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-ref-carbon md:text-[22px]">
              {r.role}
            </h3>
            <p className={`mt-4 ${BODY}`}>{r.desc}</p>
          </article>
        ))}
      </div>
    </SectionRail>
  )
}

export function CaseStudy({ data }: { data: LandingContent["caseStudy"] }) {
  return (
    <SectionRail id="caso" tone="canvas" pad="lg">
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
        {data.label}
      </p>
      <h2 className={`${H2} mt-5`}>{data.headline}</h2>
      <p className="mt-4 text-[15px] italic text-ref-ash">{data.note}</p>

      <div className="mx-auto mt-12 max-w-[820px] space-y-6 text-left">
        {data.blocks.map((b) => (
          <p key={b.title} className={BODY}>
            <span className="font-semibold text-ref-carbon">{b.title}</span> {b.desc}
          </p>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-[820px] rounded-[24px] border border-ref-fog bg-ref-linen px-8 py-10 text-left">
        <h3 className="text-[20px] font-semibold text-ref-carbon">
          {data.resultsTitle}
        </h3>
        <p className="mt-2 text-[14px] text-ref-ash">
          {data.resultsNote}
          <TodoTag />
        </p>
        <ul className="mt-5 space-y-3">
          {data.results.map((r) => (
            <BulletLine key={r.text} item={r} />
          ))}
        </ul>
      </div>
    </SectionRail>
  )
}

export function Systems({ data }: { data: LandingContent["systems"] }) {
  return (
    <SectionRail id="sistemi" tone="linen" pad="lg">
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
        {data.label}
      </p>
      <h2 className={`${H2} mt-5`}>{data.headline}</h2>
      <p className={SUB}>{data.sub}</p>

      <ul className="mx-auto mt-12 grid max-w-[1100px] gap-5 text-left md:grid-cols-2">
        {data.items.map((it) => {
          const [title, ...rest] = it.text.split(". ")
          return (
            <li
              key={it.text}
              className="rounded-[24px] border border-ref-fog bg-white px-8 py-10"
            >
              <h3 className="text-[20px] font-semibold leading-[1.3] text-ref-carbon">
                {title}
              </h3>
              <p className={`mt-4 ${BODY}`}>
                {rest.join(". ")}
                {it.todo ? <TodoTag /> : null}
              </p>
            </li>
          )
        })}
      </ul>
    </SectionRail>
  )
}

export function Together({ data }: { data: LandingContent["together"] }) {
  return (
    <SectionRail id="come-si-lavora" tone="canvas" pad="lg">
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
        {data.label}
      </p>
      <h2 className={`${H2} mt-5`}>{data.headline}</h2>

      <ol className="mx-auto mt-14 grid max-w-[1100px] gap-5 md:grid-cols-2 lg:grid-cols-4">
        {data.steps.map((s) => (
          <li
            key={s.n}
            className="rounded-[24px] border border-ref-fog bg-white px-7 py-9 text-left"
          >
            <span className="text-[13px] font-medium tabular-nums text-ref-ash">
              {s.n}
            </span>
            <h3 className="mt-3 text-[20px] font-semibold leading-[1.3] text-ref-carbon">
              {s.title}
            </h3>
            <p className={`mt-3 ${BODY}`}>{s.desc}</p>
          </li>
        ))}
      </ol>
    </SectionRail>
  )
}

export function ForWhom({ data }: { data: LandingContent["forWhom"] }) {
  return (
    <SectionRail id="a-chi-e-rivolto" tone="linen" pad="lg">
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
        {data.label}
      </p>
      <h2 className={`${H2} mt-5`}>{data.headline}</h2>

      <ul className="mx-auto mt-12 max-w-[820px] space-y-4 text-left">
        {data.bullets.map((b) => (
          <li key={b} className={`border-b border-ref-fog pb-4 ${BODY}`}>
            {b}
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-8 max-w-[820px] text-left text-[15px] leading-[1.7] text-ref-ash">
        {data.notFor}
      </p>
    </SectionRail>
  )
}

export function FaqBlock({ data }: { data: LandingContent["faq"] }) {
  const [open, setOpen] = useState(0)
  return (
    <SectionRail id="faq" tone="canvas" pad="lg">
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
        {data.label}
      </p>
      <h2 className={`${H2} mt-5`}>{data.headline}</h2>

      <div className="mx-auto mt-14 max-w-[880px] text-left">
        {data.items.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="border-b border-ref-fog">
              <h3 className="m-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex w-full items-center gap-5 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ref-lavender focus-visible:ring-offset-4"
                >
                  <span
                    className={`flex-1 text-[18px] font-semibold leading-[1.4] md:text-[20px] ${
                      isOpen ? "text-ref-carbon" : "text-ref-graphite group-hover:text-ref-carbon"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span aria-hidden className="text-ref-ash">
                    {isOpen ? (
                      <X className="h-5 w-5" strokeWidth={1.75} />
                    ) : (
                      <Plus className="h-5 w-5" strokeWidth={1.75} />
                    )}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-200 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className={`max-w-[62ch] pb-8 ${BODY} ${f.todo ? "text-ref-ash" : ""}`}>
                    {f.a}
                    {f.todo ? <TodoTag /> : null}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionRail>
  )
}
