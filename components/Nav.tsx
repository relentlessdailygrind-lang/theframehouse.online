'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/packages', label: 'Packages' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border-light">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg tracking-[0.2em] text-ink uppercase">
          The Frame House
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase transition-colors ${
                pathname === link.href ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase bg-ink text-cream px-6 py-3 hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Inquire
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-border-light px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-xs tracking-widest uppercase text-ink font-medium"
          >
            Inquire Now →
          </Link>
        </div>
      )}
    </header>
  )
}
