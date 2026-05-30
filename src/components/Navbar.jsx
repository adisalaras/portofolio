import { useState, useEffect } from 'react'

const links = ['about', 'projects', 'certificates', 'contact']

export default function Navbar({ theme = 'dark', toggleTheme = () => {} }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '1.4rem 3rem',
    background: scrolled ? 'rgba(var(--bg-rgb),0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '0.5px solid rgba(var(--fg-rgb),0.06)' : 'none',
    transition: 'background 0.4s ease, border 0.4s ease',
  }

  return (
    <nav style={nav}>
      <a href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', letterSpacing: '0.06em', color: 'var(--white)', textDecoration: 'none', fontWeight: 600 }}>
        adisa.dev
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l}`} style={{ color: 'var(--white-dim)', fontSize: '12px', letterSpacing: '0.06em', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = 'var(--white-dim)'}
            >
              <span style={{ opacity: 0.5, marginRight: '4px' }}>—</span>{l}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          data-hover
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            width: '34px', height: '34px', borderRadius: '50%',
            border: '1px solid rgba(var(--fg-rgb),0.18)', background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'none', fontSize: '14px', lineHeight: 1, color: 'var(--white)',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.transform = 'rotate(20deg)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(var(--fg-rgb),0.18)'; e.currentTarget.style.transform = 'rotate(0deg)' }}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'none', color: 'var(--white)', fontSize: '20px', padding: '4px' }}
          className="hamburger"
          aria-label="menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--navy)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2.5rem', zIndex: 99
        }}>
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontSize: '40px', color: 'var(--white)', textDecoration: 'none', letterSpacing: '-1px' }}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
