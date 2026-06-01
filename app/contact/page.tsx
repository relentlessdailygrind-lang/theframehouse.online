'use client'

import { useState } from 'react'

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Quinceañera',
  'Nightclub / Bar',
  'Brand Activation',
  'Other',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Header */}
      <section className="border-b border-border-light py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6">Inquire</h1>
          <p className="text-muted leading-relaxed">
            Fill out the form below and we&apos;ll get back to you within 24 hours
            with availability and a custom quote.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === 'sent' ? (
              <div className="border border-gold p-12 text-center">
                <p className="font-serif text-3xl text-ink mb-4">Thank you.</p>
                <p className="text-muted leading-relaxed">
                  We received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                      First Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full border border-border-light bg-transparent px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-gold transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                      Last Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full border border-border-light bg-transparent px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-gold transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-border-light bg-transparent px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-gold transition-colors"
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-border-light bg-transparent px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-gold transition-colors"
                      placeholder="(989) 555-0100"
                    />
                  </div>
                </div>

                {/* Event type */}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                    Event Type <span className="text-gold">*</span>
                  </label>
                  <select
                    name="eventType"
                    required
                    className="w-full border border-border-light bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Date + Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                      Event Date <span className="text-gold">*</span>
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      className="w-full border border-border-light bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                      Hours Needed
                    </label>
                    <select
                      name="hours"
                      className="w-full border border-border-light bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Not sure yet</option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                      <option value="5+">5+ hours</option>
                    </select>
                  </div>
                </div>

                {/* Venue */}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                    Venue / Location
                  </label>
                  <input
                    type="text"
                    name="venue"
                    className="w-full border border-border-light bg-transparent px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-gold transition-colors"
                    placeholder="Venue name and city"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-ink mb-2">
                    Anything else?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full border border-border-light bg-transparent px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your event, any special requests, or questions you have..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please email us directly at hello@theframehouse.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto bg-ink text-cream text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-ink transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                </button>

                <p className="text-xs text-muted">
                  We respond within 24 hours. For urgent inquiries, email{' '}
                  <a href="mailto:hello@theframehouse.com" className="text-ink underline">
                    hello@theframehouse.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-4">Location</p>
              <p className="text-sm text-ink leading-relaxed">
                Based in the Great Lakes Bay Region, Michigan.
                <br />
                Serving Saginaw, Bay City, Midland, and surrounding areas.
                <br />
                <span className="text-muted">Travel available statewide.</span>
              </p>
            </div>

            <div className="border-t border-border-light pt-8">
              <p className="text-xs tracking-widest uppercase text-gold mb-4">Response Time</p>
              <p className="text-sm text-ink">Within 24 hours</p>
              <p className="text-sm text-muted mt-1">Mon – Sun, 9am – 8pm</p>
            </div>

            <div className="border-t border-border-light pt-8">
              <p className="text-xs tracking-widest uppercase text-gold mb-4">Deposit</p>
              <p className="text-sm text-ink leading-relaxed">
                25% deposit required to hold your date.
                Balance due 14 days before the event.
              </p>
            </div>

            <div className="border-t border-border-light pt-8 bg-stone-50 p-6">
              <p className="font-serif text-2xl text-ink mb-2">Starting at</p>
              <p className="font-serif text-4xl text-ink mb-1">$650</p>
              <p className="text-xs text-muted tracking-wide">2-hour minimum</p>
              <div className="mt-4 space-y-1">
                <p className="text-xs text-muted">— Includes setup & breakdown</p>
                <p className="text-xs text-muted">— Professional attendant</p>
                <p className="text-xs text-muted">— Digital gallery delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
