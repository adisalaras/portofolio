import { useEffect, useRef, useState } from 'react'

const skills = [
  { cat: 'Backend', items: ['Node.js (Express)', 'PHP (Laravel)', 'Go'] },
  { cat: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
  { cat: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { cat: 'DevOps', items: ['Git', 'Docker', 'Nginx', 'REST API'] },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 3rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Section label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--red)', textTransform: 'uppercase' }}>01 — About</span>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(var(--fg-rgb),0.08)', transformOrigin: 'left', transform: visible ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 0.8s ease 0.2s' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Left: text */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.1s' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.05, color: 'var(--white)', marginBottom: '1.5rem' }}>
            Building systems<br />that <em style={{ color: 'var(--red)', fontStyle: 'normal' }}>scale.</em>
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.8, marginBottom: '1rem' }}>
            Fullstack developer dengan 1+ tahun pengalaman membangun dan memelihara aplikasi web yang scalable di berbagai industri — mulai dari education technology hingga business automation systems.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.8 }}>
            Skilled dalam Node.js, Laravel, dan Go dengan keahlian kuat di REST API development dan pengelolaan data berskala besar menggunakan PostgreSQL, MySQL, dan MongoDB.
          </p>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2.5rem' }}>
            {[['1+', 'Years Exp'], ['3+', 'Projects Built'], ['1.2K+', 'Users Served']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-2px', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: '11px', color: 'var(--slate)', letterSpacing: '0.06em', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: skills grid */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.25s' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {skills.map((s) => (
              <div key={s.cat}>
                <div style={{ fontSize: '10px', letterSpacing: '0.16em', color: 'var(--red)', textTransform: 'uppercase', marginBottom: '10px' }}>{s.cat}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {s.items.map(item => (
                    <span key={item} style={{
                      fontSize: '12px', padding: '5px 12px',
                      border: '0.5px solid rgba(var(--fg-rgb),0.12)',
                      color: 'var(--white-dim)',
                      letterSpacing: '0.02em',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                      data-hover
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--white)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(var(--fg-rgb),0.12)'; e.currentTarget.style.color = 'var(--white-dim)' }}
                    >{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education card */}
          <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', border: '0.5px solid rgba(var(--fg-rgb),0.08)', background: 'var(--white-faint)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'var(--red)' }} />
            <div style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--red)', textTransform: 'uppercase', marginBottom: '6px' }}>Education</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '2px' }}>Cilacap State Polytechnic</div>
            <div style={{ fontSize: '12px', color: 'var(--white-dim)' }}>D3 — Informatics Engineering &nbsp;·&nbsp; 2022–2025</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about { padding: 5rem 1.5rem; }
          #about > div:last-child { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
