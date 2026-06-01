import Link from 'next/link'
import Image from 'next/image'

const moments = [
  {
    title: 'The line never stops.',
    desc: "Guests who swore they'd never take photos end up closing out the booth. It happens every time.",
  },
  {
    title: 'Everyone fits.',
    desc: 'No cramped curtains. The whole crew piles in — bridesmaids, grandma, the table that just met.',
  },
  {
    title: 'They take it home.',
    desc: 'Printed strips go straight in pockets. Digital gallery hits inboxes within 48 hours.',
  },
  {
    title: 'Your name is on every shot.',
    desc: "Custom overlay with your event name and date. Every photo looks like it belonged at your event.",
  },
  {
    title: 'You don\'t touch it.',
    desc: 'Our attendant runs the booth all night. You enjoy the party.',
  },
  {
    title: 'We go where you go.',
    desc: 'Great Lakes Bay Region and beyond. If you\'re celebrating somewhere, we\'ll get there.',
  },
]

const packages = [
  { name: 'Essential', hours: '2 Hours', price: '$650', popular: false, desc: 'Intimate events, showers, smaller parties' },
  { name: 'Classic', hours: '3 Hours', price: '$850', popular: true, desc: 'The sweet spot. Most events book this.' },
  { name: 'Signature', hours: '4 Hours', price: '$1,050', popular: false, desc: 'Full night. Backdrop. Guest book. Everything.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[88vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Great Lakes Bay Region, Michigan
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.08] mb-8">
            The booth your
            <br />
            guests won&apos;t
            <br />
            <em>stop talking about.</em>
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-10 max-w-md">
            Open air. No curtains. Just your people piling in, laughing, and walking
            away with something they actually keep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-ink text-cream text-xs tracking-widest uppercase px-8 py-4 text-center hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Check Your Date
            </Link>
            <Link
              href="/packages"
              className="border border-ink text-ink text-xs tracking-widest uppercase px-8 py-4 text-center hover:bg-ink hover:text-cream transition-all duration-300"
            >
              See Pricing
            </Link>
          </div>
        </div>

        {/* Couple booth photos — stacked */}
        <div className="grid grid-rows-2 h-[55vh] lg:h-auto">
          <div className="relative overflow-hidden">
            <Image
              src="/couple-booth-1.png"
              alt="Couple at The Frame House photo booth"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/couple-booth-2.png"
              alt="Couple posing at The Frame House photo booth"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-t border-b border-border-light py-14 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-serif text-2xl md:text-3xl text-ink leading-relaxed">
            &ldquo;Everyone ends up at the photo booth.
            <br className="hidden md:block" />
            <em> That&apos;s just what happens.</em>&rdquo;
          </p>
          <p className="text-xs tracking-widest uppercase text-muted mt-5">
            — Every event planner who books us twice
          </p>
        </div>
      </section>

      {/* How it feels */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">What Happens</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
              Here&apos;s what your
              <br />
              guests actually do.
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              They walk past it once, curious. Then someone grabs a friend. Then a whole table
              gets up. By the end of the night, people who haven&apos;t taken a photo in years
              are doing their third round.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              It&apos;s not just a booth. It&apos;s the thing everyone remembers.
            </p>
            <Link
              href="/packages"
              className="text-xs tracking-widest uppercase text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              What&apos;s included →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {moments.map((m) => (
              <div key={m.title} className="border-t border-border-light pt-5">
                <h3 className="font-medium text-ink text-sm mb-2">{m.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Package teaser — dark */}
      <section className="bg-ink py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Pricing</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Straightforward. No surprises.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-8 border ${
                  pkg.popular ? 'border-gold' : 'border-cream/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink text-xs tracking-widest uppercase px-4 py-1 whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <p className="text-xs tracking-widest uppercase text-gold mb-3">{pkg.hours}</p>
                <h3 className="font-serif text-2xl text-cream mb-2">{pkg.name}</h3>
                <p className="text-cream/50 text-sm mb-6">{pkg.desc}</p>
                <p className="font-serif text-4xl text-cream mb-8">{pkg.price}</p>
                <Link
                  href="/packages"
                  className="block text-center text-xs tracking-widest uppercase border border-cream/20 text-cream px-6 py-3 hover:border-gold hover:text-gold transition-colors"
                >
                  See What&apos;s Included
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-cream/30 text-xs tracking-wide mt-8">
            Setup, breakdown, and a dedicated attendant included in every package.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Events</p>
          <h2 className="font-serif text-4xl text-ink">If people are celebrating, we&apos;re in.</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {['Weddings', 'Corporate', 'Birthdays', 'Quinceañeras', 'Nightclubs', 'Brand Events'].map(
            (event) => (
              <div
                key={event}
                className="border border-border-light text-center py-8 px-3 text-xs tracking-widest uppercase text-muted hover:border-gold hover:text-gold transition-colors cursor-default"
              >
                {event}
              </div>
            )
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border-light py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Book Now</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">
            Dates go fast. Yours might still be open.
          </h2>
          <p className="text-muted max-w-sm mx-auto mb-10 leading-relaxed">
            Send us your event details. We&apos;ll confirm availability within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ink text-cream text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Check Your Date
          </Link>
        </div>
      </section>
    </>
  )
}
