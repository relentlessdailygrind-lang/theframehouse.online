import Link from 'next/link'

const packages = [
  {
    name: 'Essential',
    hours: 2,
    price: 650,
    popular: false,
    desc: 'The perfect introduction to The Frame House experience — ideal for smaller gatherings, showers, and intimate celebrations.',
    includes: [
      '2 hours of service',
      'Unlimited digital photos',
      'Custom branded overlay',
      'Professional attendant',
      'Online gallery (48-hr delivery)',
      'Unlimited digital downloads',
      'Setup & breakdown included',
    ],
  },
  {
    name: 'Classic',
    hours: 3,
    price: 850,
    popular: true,
    desc: 'Our most popular package. Three full hours means your guests have all night to create memories — plus printed strips they take home.',
    includes: [
      '3 hours of service',
      'Unlimited digital photos',
      'Custom branded overlay',
      'Professional attendant',
      'Online gallery (48-hr delivery)',
      'Unlimited digital downloads',
      'Unlimited 2×6 print strips',
      'Props package included',
      'Setup & breakdown included',
    ],
  },
  {
    name: 'Signature',
    hours: 4,
    price: 1050,
    popular: false,
    desc: 'The full Frame House experience. Four hours, a custom backdrop, guest book, and priority gallery delivery — nothing left out.',
    includes: [
      '4 hours of service',
      'Unlimited digital photos',
      'Custom branded overlay',
      'Professional attendant',
      'Priority gallery delivery (24 hrs)',
      'Unlimited digital downloads',
      'Unlimited 2×6 print strips',
      'Props package included',
      'Custom backdrop',
      'Guest book with printed strips',
      'Setup & breakdown included',
    ],
  },
]

const addOns = [
  { name: 'Additional Hour', price: '$150 / hr' },
  { name: 'Idle / Standby Time', price: '$75 / hr' },
  { name: 'Travel Fee', price: '$1.50 / mile beyond 50 mi' },
  { name: 'Custom Backdrop Upgrade', price: '$100' },
  { name: 'Extra Props Package', price: '$50' },
]

const alwaysIncluded = [
  { title: 'Professional Setup', desc: 'We arrive early, set up everything, and leave no trace when we go.' },
  { title: 'Dedicated Attendant', desc: 'A Frame House attendant manages the booth so you never have to.' },
  { title: 'Custom Overlay', desc: 'Every photo includes your event name, date, or custom design.' },
  { title: 'Digital Gallery', desc: 'Full-resolution gallery delivered to your inbox within 48 hours.' },
  { title: 'Unlimited Downloads', desc: 'Your guests can download every photo, for free, forever.' },
  { title: 'On-site Tech Support', desc: 'Technical support the entire duration of your event — guaranteed.' },
]

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 4–6 weeks in advance. Wedding season (May–October) fills fast — the sooner the better.',
  },
  {
    q: 'Is a deposit required?',
    a: 'Yes. We require a 25% non-refundable deposit to hold your date, with the balance due 14 days before the event.',
  },
  {
    q: 'How much space does the setup require?',
    a: 'The booth itself needs approximately 6×6 ft. With a backdrop, plan for 8×8 ft. We can work in tighter spaces — just let us know.',
  },
  {
    q: 'What events do you serve?',
    a: 'Weddings, corporate events, birthday parties, quinceañeras, school events, brand activations, and more.',
  },
  {
    q: 'Do you travel outside the Great Lakes Bay Region?',
    a: 'Yes — we travel anywhere in Michigan and beyond. A travel fee of $1.50/mile applies for events more than 50 miles from Saginaw.',
  },
  {
    q: 'What happens if the booth has a technical issue?',
    a: 'Our attendant handles everything on-site. In the rare event of a hardware failure we cannot resolve, we refund the remaining time pro-rated.',
  },
]

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border-light py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Pricing</p>
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6">Packages</h1>
          <p className="text-muted leading-relaxed">
            Straightforward pricing. No hidden fees. Every package includes setup,
            breakdown, and a dedicated attendant.
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative border p-8 flex flex-col ${
                pkg.popular ? 'border-gold' : 'border-border-light'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-8 bg-gold text-ink text-xs tracking-widest uppercase px-4 py-1">
                  Most Popular
                </div>
              )}
              <p className="text-xs tracking-widest uppercase text-gold mb-2">
                {pkg.hours} Hours
              </p>
              <h2 className="font-serif text-3xl text-ink mb-3">{pkg.name}</h2>
              <p className="text-muted text-sm leading-relaxed mb-6">{pkg.desc}</p>
              <p className="font-serif text-5xl text-ink mb-8">
                ${pkg.price.toLocaleString()}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                    <span className="text-gold mt-0.5 flex-shrink-0 leading-none">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center text-xs tracking-widest uppercase px-6 py-4 transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-ink text-cream hover:bg-gold hover:text-ink'
                    : 'border border-ink text-ink hover:bg-ink hover:text-cream'
                }`}
              >
                Book {pkg.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Always included */}
      <section className="bg-stone-50 border-t border-border-light py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Every Package</p>
            <h2 className="font-serif text-4xl text-ink">Always Included</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {alwaysIncluded.map((item) => (
              <div key={item.title} className="border-t border-border-light pt-6">
                <h3 className="font-medium text-ink text-sm mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Customize</p>
          <h2 className="font-serif text-4xl text-ink">Add-Ons</h2>
        </div>
        <div className="divide-y divide-border-light">
          {addOns.map((addon) => (
            <div key={addon.name} className="flex justify-between items-center py-5">
              <span className="text-ink text-sm">{addon.name}</span>
              <span className="text-muted text-sm font-mono">{addon.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — dark */}
      <section className="bg-ink py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">FAQ</p>
            <h2 className="font-serif text-4xl text-cream">Questions</h2>
          </div>
          <div className="space-y-0">
            {faqs.map((item) => (
              <div key={item.q} className="border-t border-cream/10 py-8">
                <h3 className="font-serif text-xl text-cream mb-3">{item.q}</h3>
                <p className="text-cream/55 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Ready?</p>
        <h2 className="font-serif text-4xl text-ink mb-6">
          Let&apos;s check your date.
        </h2>
        <p className="text-muted mb-10 leading-relaxed">
          Fill out our inquiry form and we&apos;ll respond within 24 hours with
          availability and a custom quote.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-ink text-cream text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-ink transition-all duration-300"
        >
          Inquire Now
        </Link>
      </section>
    </>
  )
}
