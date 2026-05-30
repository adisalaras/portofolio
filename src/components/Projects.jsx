import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    num: '01',
    title: 'SITAMAN',
    subtitle: 'UII Yogyakarta',
    desc: 'Workflow automation system untuk pengajuan, persetujuan, dan tracking tugas akhir. Mengurangi proses manual dan meningkatkan transparansi untuk 500+ pengajuan tahunan.',
    stack: ['Laravel', 'Node.js', 'Bootstrap', 'MySQL'],
    metric: '500+',
    metricLabel: 'Annual Submissions',
    company: 'PT Tanjung Mulia Informatika',
  },
  {
    num: '02',
    title: 'SIMTA',
    subtitle: 'Politeknik Transportasi Bali',
    desc: 'Sistem academic workflow berbasis role untuk koordinasi antar civitas akademika. Digunakan oleh 1.200+ mahasiswa dan staf, memperbaiki koordinasi dan mengurangi beban administratif.',
    stack: ['Laravel', 'Bootstrap', 'PostgreSQL', 'REST API'],
    metric: '1.2K+',
    metricLabel: 'Active Users',
    company: 'PT Tanjung Mulia Informatika',
  },
  {
    num: '03',
    title: 'Inventory System',
    subtitle: 'Aneka Emas',
    desc: 'Custom inventory system untuk real-time stock tracking dan reporting. Implementasi role-based access control dan structured database design untuk aplikasi yang scalable.',
    stack: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
    metric: 'Real-time',
    metricLabel: 'Stock Tracking',
    company: 'PT Tanjung Mulia Informatika',
  },
  {
    num: '04',
    title: 'Integrated Edu Platform',
    subtitle: 'CAZH Teknologi Inovasi',
    desc: 'Platform pendidikan terintegrasi mencakup dashboard, parent apps, digital student cards, dan POS system. Digunakan oleh ribuan mitra. Redesign layanan legacy dengan teknologi modern.',
    stack: ['Node.js', 'Go', 'React', 'MongoDB', 'Docker'],
    metric: '1000s',
    metricLabel: 'Partners Served',
    company: 'PT CAZH Teknologi Inovasi',
  },
]

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
      style={{
        padding: '2rem',
        border: `0.5px solid ${hovered ? 'rgba(232,62,74,0.4)' : 'rgba(var(--fg-rgb),0.07)'}`,
        background: hovered ? 'rgba(232,62,74,0.04)' : 'transparent',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s, background 0.3s',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(30px)',
        transitionProperty: 'opacity, transform, border-color, background',
        transitionDuration: `0.6s`,
        transitionDelay: `${index * 100}ms, ${index * 100}ms, 0.3s, 0.3s`,
        transitionTimingFunction: 'ease',
      }}
    >
      {/* Red accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: hovered ? '100%' : '3px', height: '2px', background: 'var(--red)', transition: 'width 0.4s ease' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 700, color: 'rgba(var(--fg-rgb),0.06)', letterSpacing: '-2px', lineHeight: 1 }}>{project.num}</span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: hovered ? 'var(--red)' : 'var(--white)', transition: 'color 0.3s', lineHeight: 1 }}>{project.metric}</div>
          <div style={{ fontSize: '10px', color: 'var(--slate)', letterSpacing: '0.08em' }}>{project.metricLabel}</div>
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: '4px' }}>{project.title}</h3>
      <p style={{ fontSize: '11px', color: 'var(--red)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{project.subtitle}</p>
      <p style={{ fontSize: '13px', color: 'var(--white-dim)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
        {project.stack.map(t => (
          <span key={t} style={{ fontSize: '10px', padding: '3px 10px', border: '0.5px solid rgba(var(--fg-rgb),0.14)', color: 'var(--white-dim)', letterSpacing: '0.06em' }}>{t}</span>
        ))}
      </div>

      <div style={{ fontSize: '11px', color: 'var(--slate)', letterSpacing: '0.04em' }}>{project.company}</div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} style={{ padding: '8rem 3rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--red)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>02 — Projects</span>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(var(--fg-rgb),0.08)', transformOrigin: 'left', transform: visible ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 0.8s ease 0.2s' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(var(--fg-rgb),0.05)' }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} inView={visible} />
        ))}
      </div>

      {/* Scrolling marquee */}
      <div style={{ overflow: 'hidden', marginTop: '5rem', borderTop: '0.5px solid rgba(var(--fg-rgb),0.06)', borderBottom: '0.5px solid rgba(var(--fg-rgb),0.06)', padding: '16px 0' }}>
        <div style={{ display: 'flex', animation: 'marquee 20s linear infinite', whiteSpace: 'nowrap' }}>
          {['Node.js', 'Laravel', 'Go', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'REST API', 'Node.js', 'Laravel', 'Go', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'REST API'].map((t, i) => (
            <span key={i} style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'var(--slate)', textTransform: 'uppercase', padding: '0 2rem' }}>
              {t} <span style={{ color: 'var(--red)', marginLeft: '2rem' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects { padding: 5rem 1.5rem; }
          #projects > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
