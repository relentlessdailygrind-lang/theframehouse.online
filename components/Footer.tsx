import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-xl tracking-[0.2em] uppercase mb-4">The Frame House</p>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Premium photo booth experiences for weddings, corporate events, and celebrations across the Great Lakes Bay Region, Michigan.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-muted mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-cream/60 hover:text-cream transition-colors">Home</Link>
              <Link href="/packages" className="text-sm text-cream/60 hover:text-cream transition-colors">Packages & Pricing</Link>
              <Link href="/contact" className="text-sm text-cream/60 hover:text-cream transition-colors">Inquire</Link>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-muted mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-cream/60">Great Lakes Bay Region, MI</p>
              <a href="mailto:hello@theframehouse.online" className="text-sm text-cream/60 hover:text-cream transition-colors">
                hello@theframehouse.online
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-xs tracking-widest uppercase text-cream/40 hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="text-xs tracking-widest uppercase text-cream/40 hover:text-gold transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/30">© 2025 The Frame House LLC. All rights reserved.</p>
          <p className="text-xs text-cream/30">Great Lakes Bay Region, Michigan</p>
        </div>
      </div>
    </footer>
  )
}
