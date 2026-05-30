import { useEffect, useRef, useState } from 'react'

const achievements = [
  {
    year: '2024',
    title: 'Top 2 KRENOVA',
    org: 'Pemkab Cilacap',
    desc: 'Penghargaan Kreativitas dan Inovasi Masyarakat tingkat Kabupaten Cilacap dari Pemerintah Daerah.',
    type: 'Award',
  },
  {
    year: '2023–2024',
    title: 'Secretary General',
    org: 'BEM PNC',
    desc: 'Sekretaris Jenderal Badan Eksekutif Mahasiswa Politeknik Negeri Cilacap periode 2023–2024.',
    type: 'Leadership',
  },
  {
    year: '2023–2024',
    title: 'Coordinator — Divisi Kominfo',
    org: 'PROTIC (Programming Community)',
    desc: 'Koordinator Divisi Komunikasi dan Informasi komunitas programming aktif di Politeknik Negeri Cilacap.',
    type: 'Leadership',
  },
  {
    year: '2022–2025',
    title: 'D3 Teknik Informatika',
    org: 'Politeknik Negeri Cilacap',
    desc: 'Program studi Teknik Informatika, lulus dengan keterlibatan aktif dalam organisasi dan kompetisi inovasi.',
    type: 'Education',
  },
]

const typeColors = {
  Award: 'var(--red)',
  Leadership: '#4B9CD3',
  Education: '#5DCAA5',
}

export default function Certificates() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="certificates" ref={ref} style={{ padding: '8rem 3rem', background: 'rgba(255,255,255,0.015)', borderTop: '0.5px solid rgba(var(--fg-rgb),0.05)', borderBottom: '0.5px solid rgba(var(--fg-rgb),0.05)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4rem', opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--red)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>03 — Certificates & Achievements</span>
          <div style={{ flex: 1, height: '0.5px', background: 'rgba(var(--fg-rgb),0.08)', transformOrigin: 'left', transform: visible ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 0.8s ease 0.2s' }} />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, var(--red), rgba(232,62,74,0.1))',
            transformOrigin: 'top', transform: visible ? 'scaleY(1)' : 'scaleY(0)',
            transition: 'transform 1s ease 0.3s'
          }} />

          {achievements.map((a, i) => (
            <div key={a.title} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', alignItems: 'start',
              marginBottom: '3rem', position: 'relative',
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-20px)',
              transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`
            }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-2rem', top: '6px',
                width: '9px', height: '9px', borderRadius: '50%',
                background: typeColors[a.type] || 'var(--red)',
                transform: 'translateX(-4px)',
                boxShadow: `0 0 0 3px rgba(${a.type === 'Award' ? '232,62,74' : a.type === 'Leadership' ? '75,156,211' : '93,202,165'},0.15)`
              }} />

              <div>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--white-dim)', letterSpacing: '0', marginBottom: '4px' }}>{a.year}</div>
                <span style={{
                  fontSize: '10px', padding: '2px 8px',
                  background: `${typeColors[a.type]}18`,
                  border: `0.5px solid ${typeColors[a.type]}40`,
                  color: typeColors[a.type],
                  letterSpacing: '0.1em',
                }}>{a.type}</span>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.3px', marginBottom: '4px' }}>{a.title}</h3>
                <p style={{ fontSize: '12px', color: 'var(--red)', letterSpacing: '0.06em', marginBottom: '8px' }}>{a.org}</p>
                <p style={{ fontSize: '13px', color: 'var(--white-dim)', lineHeight: 1.65 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #certificates { padding: 5rem 1.5rem; }
          #certificates > div > div:nth-child(2) > div { grid-template-columns: 80px 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </section>
  )
}
