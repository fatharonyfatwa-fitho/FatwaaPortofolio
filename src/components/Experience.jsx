import { useRef, useState } from 'react'
import { m, AnimatePresence, useInView } from 'framer-motion'
import { experience, organizations } from '../data'
import { RevealLines, Stamp, ease } from './ui'

/* Year that rolls into place like a slot machine. */
function RollingYear({ year, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  // non-numeric labels (e.g. "Intern") can't roll like digits, so slide them in instead
  if (!/^\d+$/.test(String(year))) {
    return (
      <div className="exp-year" ref={ref}>
        <m.span initial={{ y: '1em' }} animate={inView ? { y: '0em' } : {}} transition={{ duration: 1.2, ease, delay }}>
          {year}
        </m.span>
      </div>
    )
  }
  return (
    <div className="exp-year" ref={ref} aria-label={String(year)}>
      {String(year)
        .split('')
        .map((d, i) => (
          <m.span
            key={i}
            className="digit"
            initial={{ y: '0em' }}
            animate={inView ? { y: `-${Number(d) + 10}em` } : {}}
            transition={{ duration: 1.6 + i * 0.25, ease, delay }}
            aria-hidden
          >
            {[...Array(20)].map((_, n) => (
              <span key={n}>{n % 10}</span>
            ))}
          </m.span>
        ))}
    </div>
  )
}

function Column({ job, i }) {
  const [open, setOpen] = useState(false)
  return (
    <m.div
      className="exp-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.9, ease, delay: i * 0.12 }}
    >
      <m.span className="dot" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', delay: 0.4 + i * 0.2 }} />
      <RollingYear year={job.year} delay={0.2 + i * 0.12} />
      <h4>{job.role}</h4>
      <p className="co">{job.company}</p>
      <p className="period">{job.period}</p>
      <p className="body-serif">{job.points[0]}</p>
      <AnimatePresence initial={false}>
        {open && (
          <m.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease }}>
            {job.points.slice(1).map((p) => (
              <li key={p}>{p}</li>
            ))}
            <li style={{ fontStyle: 'italic' }}>{job.blurb}</li>
          </m.ul>
        )}
      </AnimatePresence>
      <button className={`more ${open ? 'open' : ''}`} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {open ? 'Show less' : 'Read more'} <i>+</i>
      </button>
    </m.div>
  )
}

function Block({ items, title }) {
  const rule = useRef(null)
  const inView = useInView(rule, { once: true, margin: '-10% 0px' })
  return (
    <>
      {title && <h3 className="exp-sub">{title}</h3>}
      <div className="exp-cols" ref={rule}>
        <m.div className="exp-rule" initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 1.4, ease }} />
        {items.map((job, i) => (
          <Column key={job.company} job={job} i={i} />
        ))}
      </div>
    </>
  )
}

export default function Experience() {
  return (
    <section className="sec cream" id="experience">
      <Stamp size={170} style={{ right: '-50px', top: '40px' }} />
      <div className="wrap">
        <RevealLines className="h-cond" lines={['Internship', 'Experience']} />
        <Block items={experience} />
        <Block items={organizations} title="Organizations & committees" />
      </div>
    </section>
  )
}
