import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top  = e.clientY + 'px'
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + 'px'
        ring.current.style.top  = e.clientY + 'px'
      }
    }
    const over = (e) => {
      if (e.target.matches('a, button, [data-hover]')) setHovered(true)
    }
    const out = () => setHovered(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={ring} className={`cursor-ring${hovered ? ' hovered' : ''}`} />
    </>
  )
}
