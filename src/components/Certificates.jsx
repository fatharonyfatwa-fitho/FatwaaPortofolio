import { useCallback, useEffect, useRef, useState } from 'react'
import { m, AnimatePresence, useInView } from 'framer-motion'
import { certificates } from '../data'
import { RevealLines, Stamp, Sparkle, ease } from './ui'

const variants = {
  enter: (d) => ({ x: d > 0 ? 90 : -90, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d) => ({ x: d > 0 ? -90 : 90, opacity: 0, scale: 0.97 }),
}

const Chevron = ({ flip }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: 'scaleX(-1)' } : undefined} aria-hidden>
    <path d="M9 5l7 7-7 7" />
  </svg>
)

export default function Certificates() {
  const [[index, dir], setSlide] = useState([0, 1])
  const [paused, setPaused] = useState(false)
  const box = useRef(null)
  const inView = useInView(box, { margin: '-15% 0px' })
  const n = certificates.length
  const cert = certificates[index]

  const go = useCallback((d) => setSlide(([i]) => [(i + d + n) % n, d]), [n])
  const jump = (i) => setSlide(([cur]) => [i, i > cur ? 1 : -1])

  // gentle autoplay while the section is on screen; hovering pauses it
  useEffect(() => {
    if (!inView || paused) return
    const t = setTimeout(() => go(1), 6500)
    return () => clearTimeout(t)
  }, [index, inView, paused, go])

  // warm up the next image so the slide never shows empty
  useEffect(() => {
    const im = new Image()
    im.src = certificates[(index + 1) % n].img
  }, [index, n])

  return (
    <section className="sec navy" id="featured">
      <Stamp size={160} style={{ right: '-40px', top: '40px' }} />
      <div className="wrap">
        <div className="cert-head">
          <div>
            <p className="kicker" style={{ color: 'var(--on-navy-soft)' }}>
              Credentials
            </p>
            <RevealLines className="h-cond" lines={['Certificates &', 'Documents']} />
          </div>
          <p className="body-serif">Courses, trainings, and official records. Use the arrows, the dots, or swipe.</p>
        </div>

        <div className="cert-stage" ref={box} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <AnimatePresence initial={false} custom={dir}>
            <m.div
              key={index}
              className="cert-slide"
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) go(1)
                else if (info.offset.x > 70) go(-1)
              }}
              data-cursor="Drag"
            >
              <img src={cert.img} width={cert.w} height={cert.h} alt={`${cert.title} — ${cert.issuer}`} draggable="false" decoding="async" />
            </m.div>
          </AnimatePresence>
          <button className="cert-nav prev" onClick={() => go(-1)} aria-label="Previous certificate">
            <Chevron flip />
          </button>
          <button className="cert-nav next" onClick={() => go(1)} aria-label="Next certificate">
            <Chevron />
          </button>
          <Sparkle size={20} style={{ left: '3%', top: '6%' }} color="#f1efea" />
        </div>

        <div className="cert-info">
          <div>
            <h3>{cert.title}</h3>
            <p>
              {cert.issuer} · {cert.date}
            </p>
            <p>{cert.detail}</p>
          </div>
          <div className="cert-side">
            <span className="cert-count">
              {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
            </span>
            <a className="cert-link" href={cert.img} target="_blank" rel="noopener noreferrer">
              Open full size ↗
            </a>
          </div>
        </div>

        <div className="cert-dots">
          {certificates.map((c, i) => (
            <button key={c.title} className={i === index ? 'on' : ''} onClick={() => jump(i)} aria-label={`Show ${c.title}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
