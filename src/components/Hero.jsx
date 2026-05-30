import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const parallaxRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const delay = (d) => ({ animationDelay: `${d}ms`, opacity: visible ? undefined : 0 })

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '0 4rem',
    }}>

      {/* Background gradient mesh */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 55% 70% at 75% 50%, rgba(232,62,74,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 20% 60%, rgba(28,33,56,0.7) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      {/* Ghost watermark — parallax, sits behind photo */}
      <div ref={parallaxRef} style={{
        position: 'absolute', right: '-20px', bottom: '-40px',
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(80px, 14vw, 200px)',
        lineHeight: 0.9,
        color: 'rgba(244,242,237,0.035)',
        letterSpacing: '-4px',
        userSelect: 'none', pointerEvents: 'none',
        textAlign: 'right',
        whiteSpace: 'nowrap',
        zIndex: 1,
      }}>
        developer<br />
        developer<br />
        dev
      </div>

      {/* Noise texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.025, zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px'
      }} />

      {/* MAIN SPLIT LAYOUT */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: '1200px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* LEFT — text content */}
        <div>
          <p
            className={visible ? 'animate-fade-up' : ''}
            style={{ ...delay(0), fontSize: '12px', letterSpacing: '0.14em', color: 'var(--white-dim)', marginBottom: '16px', textTransform: 'lowercase' }}
          >
            hello, welcome to my works. I am
          </p>

          <h1
            className={visible ? 'animate-fade-up' : ''}
            style={{
              ...delay(120),
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(58px, 9vw, 120px)',
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: '-3px',
              color: 'var(--white)',
              marginBottom: '1.75rem',
            }}
          >
            Adisa
            <span style={{
              display: 'inline-block',
              width: '0.12em', height: '0.12em',
              marginLeft: '0.04em',
              borderRadius: '50%',
              background: 'var(--red)',
              verticalAlign: 'middle',
              animation: 'pulse-ring 2.5s ease infinite',
            }} />
          </h1>

          <p
            className={visible ? 'animate-fade-up' : ''}
            style={{ ...delay(240), fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.75, maxWidth: '420px', marginBottom: '2.5rem' }}
          >
            A fullstack developer building scalable web systems — from workflow automation to integrated education platforms — with Node.js, Laravel, Go &amp; React.
          </p>

          {/* Location badge */}
          <div
            className={visible ? 'animate-fade-up' : ''}
            style={{ ...delay(300), display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2rem' }}
          >
            <span style={{ fontSize: '13px', color: 'var(--red)' }}>📍</span>
            <span style={{ fontSize: '12px', color: 'var(--slate)', letterSpacing: '0.04em' }}>Cilacap, Indonesia</span>
          </div>

          {/* CTA buttons */}
          <div
            className={visible ? 'animate-fade-up' : ''}
            style={{ ...delay(360), display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <a
              href="#contact"
              data-hover
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1px solid rgba(244,242,237,0.35)',
                color: 'var(--white)',
                fontSize: '12px',
                letterSpacing: '0.1em',
                padding: '13px 28px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                borderRadius: 0,
                transition: 'background 0.2s, border-color 0.2s',
                fontWeight: 500,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.borderColor = 'var(--red)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(244,242,237,0.35)' }}
            >
              Get in Touch <span style={{ fontSize: '14px' }}>→</span>
            </a>

            <a
              href="mailto:adisalaras20@gmail.com"
              data-hover
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1px solid rgba(244,242,237,0.12)',
                color: 'var(--white-dim)',
                fontSize: '12px',
                letterSpacing: '0.1em',
                padding: '13px 24px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                borderRadius: 0,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(244,242,237,0.3)'; e.currentTarget.style.color = 'var(--white)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(244,242,237,0.12)'; e.currentTarget.style.color = 'var(--white-dim)' }}
            >
              <span style={{ fontSize: '13px' }}>✉</span> Email
            </a>
          </div>

          {/* Social links */}
          <div
            className={visible ? 'animate-fade-up' : ''}
            style={{ ...delay(480), display: 'flex', gap: '10px', marginTop: '2rem' }}
          >
            {[
              { label: 'LI', href: 'https://www.linkedin.com/in/adisa-laras-pertiwi-a63794284/' },
              { label: 'GH', href: 'https://github.com/adisalaras' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" data-hover style={{
                width: '34px', height: '34px', borderRadius: '50%',
                border: '1px solid rgba(244,242,237,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--white-dim)', fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.04em', textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--white)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(244,242,237,0.15)'; e.currentTarget.style.color = 'var(--white-dim)' }}
              >{label}</a>
            ))}
          </div>
        </div>

        {/* RIGHT — profile photo */}
        <div
          className={visible ? 'animate-fade-up' : ''}
          style={{
            ...delay(200),
            flexShrink: 0,
            position: 'relative',
          }}
        >
          {/* Outer glow ring */}
          <div style={{
            position: 'absolute', inset: '-12px',
            borderRadius: '50%',
            border: '1px solid rgba(232,62,74,0.2)',
            animation: 'pulse-ring 3s ease infinite',
          }} />
          {/* Second ring */}
          <div style={{
            position: 'absolute', inset: '-24px',
            borderRadius: '50%',
            border: '0.5px solid rgba(232,62,74,0.08)',
          }} />

          <img
            src="/public/profile.png"
            alt="Adisa Laras Pertiwi"
            onError={e => {
              // fallback: show initials avatar if no photo
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
            style={{
              display: 'block',
              width: 'clamp(200px, 22vw, 320px)',
              height: 'clamp(200px, 22vw, 320px)',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              border: '2px solid rgba(232,62,74,0.3)',
            }}
          />

          {/* Fallback initials avatar (hidden by default) */}
          <div style={{
            display: 'none',
            width: 'clamp(200px, 22vw, 320px)',
            height: 'clamp(200px, 22vw, 320px)',
            borderRadius: '50%',
            border: '2px solid rgba(232,62,74,0.3)',
            background: 'var(--navy-light)',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700,
            color: 'var(--red)',
            letterSpacing: '-2px',
          }}>
            ALP
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={visible ? 'animate-fade-in' : ''}
        style={{ ...delay(700), position: 'absolute', right: '3rem', bottom: '3rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
      >
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, var(--red))', animation: 'float 2s ease-in-out infinite' }} />
        <span style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--slate)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>scroll</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero { padding: 6rem 1.5rem 4rem; }
          #hero > div:nth-child(4) {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #hero > div:nth-child(4) > div:first-child p,
          #hero > div:nth-child(4) > div:first-child h1 {
            text-align: center;
          }
          #hero > div:nth-child(4) > div:first-child > div {
            justify-content: center;
          }
          #hero > div:nth-child(4) > div:last-child {
            order: -1;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
