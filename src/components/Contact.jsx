import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%', background: 'transparent',
    border: 'none', borderBottom: '0.5px solid rgba(var(--fg-rgb),0.18)',
    color: 'var(--white)', fontSize: '14px', padding: '12px 0',
    fontFamily: 'var(--font-body)', letterSpacing: '0.02em',
    outline: 'none', transition: 'border-color 0.2s',
    borderRadius: 0,
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '8rem 3rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4rem', opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--red)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>04 — Contact</span>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(var(--fg-rgb),0.08)', transformOrigin: 'left', transform: visible ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 0.8s ease 0.2s' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Left */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.1s' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-2px', lineHeight: 0.95, color: 'var(--white)', marginBottom: '1.5rem' }}>
            Let's work<br /><em style={{ color: 'var(--red)', fontStyle: 'normal' }}>together.</em>
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Terbuka untuk peluang fullstack development, kolaborasi project, atau sekadar diskusi teknologi.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: 'Email', value: 'adisalaras20@gmail.com', href: 'mailto:adisalaras20@gmail.com' },
              { label: 'Phone', value: '+62 882 3364 2596', href: 'tel:+6288233642596' },
              { label: 'Location', value: 'Cilacap, Jawa Tengah' },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                <span style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--slate)', textTransform: 'uppercase', minWidth: '64px' }}>{label}</span>
                {href
                  ? <a href={href} data-hover style={{ fontSize: '14px', color: 'var(--white-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--red)'}
                    onMouseLeave={e => e.target.style.color = 'var(--white-dim)'}
                  >{value}</a>
                  : <span style={{ fontSize: '14px', color: 'var(--white-dim)' }}>{value}</span>
                }
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adisa-laras-pertiwi-a63794284/' },
              { label: 'GitHub', href: 'https://github.com/adisalaras' }
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-hover style={{ fontSize: '12px', color: 'var(--slate)', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s', borderBottom: '0.5px solid transparent', paddingBottom: '2px' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.borderBottomColor = 'var(--red)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--slate)'; e.currentTarget.style.borderBottomColor = 'transparent' }}
              >{label} ↗</a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.25s' }}>
          {sent ? (
            <div style={{ padding: '3rem', border: '0.5px solid rgba(93,202,165,0.3)', background: 'rgba(93,202,165,0.04)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '48px', marginBottom: '1rem' }}>✓</div>
              <p style={{ fontSize: '14px', color: 'var(--white-dim)' }}>Pesan terkirim! Saya akan segera menghubungi Anda.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { id: 'name', label: 'Nama', type: 'text', placeholder: 'Nama lengkap Anda' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'email@example.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{label}</label>
                  <input
                    type={type} placeholder={placeholder} required
                    value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--red)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(var(--fg-rgb),0.18)'}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Pesan</label>
                <textarea
                  placeholder="Ceritakan project atau kebutuhan Anda..." required rows={4}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.borderBottomColor = 'var(--red)'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(var(--fg-rgb),0.18)'}
                />
              </div>
              <button type="submit" data-hover style={{
                border: '1px solid rgba(var(--fg-rgb),0.3)', background: 'transparent',
                color: 'var(--white)', fontSize: '11px', letterSpacing: '0.16em',
                padding: '14px 32px', textTransform: 'uppercase', cursor: 'none',
                fontFamily: 'var(--font-body)', alignSelf: 'flex-start', borderRadius: 0,
                transition: 'background 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.borderColor = 'var(--red)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(var(--fg-rgb),0.3)' }}
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 5rem 1.5rem; }
          #contact > div:last-child { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--slate); }
      `}</style>
    </section>
  )
}
