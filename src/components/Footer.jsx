export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 3rem',
      borderTop: '0.5px solid rgba(var(--fg-rgb),0.06)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem'
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'rgba(var(--fg-rgb),0.15)', letterSpacing: '-0.5px' }}>
        Adisa<span style={{ color: 'var(--red)' }}>.</span>
      </span>
      <span style={{ fontSize: '11px', color: 'var(--slate)', letterSpacing: '0.06em' }}>
        © 2026 Adisa Laras Pertiwi — Cilacap, Indonesia
      </span>
      <span style={{ fontSize: '11px', color: 'var(--slate)', letterSpacing: '0.04em' }}>
        Built with <span style={{ color: 'var(--red)' }}>·</span> Love
      </span>
    </footer>
  )
}
