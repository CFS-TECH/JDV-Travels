import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHead from '../components/SectionHead';
import { STEPS, PHONE, PHONE_DISPLAY, waLink } from '../data/site';

const DETAILED_STEPS = [
  {
    step: '01',
    title: 'Share Your Travel Vision',
    desc: 'Use our quick web form, message us on WhatsApp, or give us a quick call. Tell us your destination (Jibhi, Manali, Shimla, Ladakh, Kashmir, etc.), check-in/out dates, guest count, and your comfortable budget.',
    tips: 'Mention any preferences like river-facing balcony, bonfire facility, or heater availability.',
  },
  {
    step: '02',
    title: 'Receive Curated Stays & Real Photos',
    desc: 'Our local coordinators check real-time availability with verified properties. Within minutes, you receive genuine room photos, video clips, exact amenities, and direct negotiated prices.',
    tips: 'No stock pictures or misleading angles — what you see is what you get.',
  },
  {
    step: '03',
    title: 'Hassle-Free Confirmation',
    desc: 'Pick your favourite chalet, hotel, or resort. We confirm the reservation directly with the property host, secure the room, and share your confirmed stay voucher.',
    tips: 'Clear, upfront pricing with zero booking engine commissions.',
  },
  {
    step: '04',
    title: 'Relax & Enjoy Your Mountain Journey',
    desc: 'Pack your bags and travel with confidence! Your personal JDV coordinator stays on call 24/7 throughout your trip to assist with route directions, road status, and seamless check-in.',
    tips: 'Stay stress-free even during winter snowfalls or monsoon weather shifts.',
  },
];

const FAQS = [
  {
    q: 'Do you cover offbeat destinations like Jibhi, Sojha, and Lahaul & Spiti?',
    a: 'Yes, absolutely! Offbeat Himalayan destinations are our primary specialty. We have established relationships with authentic wooden homestays, riverside camps, and boutique chalets across Jibhi, Sojha, Tirthan Valley, Jalori Pass, and Spiti that often do not appear on standard commercial booking websites.',
  },
  {
    q: 'How does JDV Travels get better rates than online travel websites?',
    a: 'Generic online platforms charge hotels between 18% to 25% commission fees, which drives room prices up. We coordinate directly with property owners and mountain hosts, passing the negotiated direct rates straight to you without commissions or hidden convenience fees.',
  },
  {
    q: 'Can you arrange stays for groups, families, and couples in Kashmir & Ladakh?',
    a: 'Yes! We arrange heritage luxury houseboats on Dal Lake and Nigeen Lake, snow-view resorts in Gulmarg and Pahalgam, and deluxe camps and boutique hotels in Leh and Nubra Valley. Every property is curated for comfort, heating, and family convenience.',
  },
  {
    q: 'What if weather changes or high passes like Jalori Pass or Rohtang face closures?',
    a: 'Because we are mountain specialists based on the ground, we monitor mountain passes (such as Jalori Pass, Atal Tunnel, Zojila, and Khardung La) daily. If unexpected snow or weather strikes, we immediately advise alternative scenic routes or coordinate date adjustments with properties.',
  },
  {
    q: 'Is there any fee or charge to request hotel options and quotes?',
    a: 'No. Requesting options, photos, and price quotes is 100% free with no obligation to book. You only pay once you have selected your ideal stay and are ready to confirm your reservation.',
  },
  {
    q: 'How quickly will I receive options after submitting an enquiry?',
    a: 'We usually respond on WhatsApp within 10 to 30 minutes during standard hours, providing available properties and exact pricing tailored to your dates.',
  },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="pt-20 sm:pt-28 pb-4 sm:pb-12">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-10 sm:py-16 text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-saffron-500/10 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="eyebrow !text-saffron-400 text-[10px] sm:text-xs">Transparent &amp; Personal</span>
          <h1 className="mt-2 sm:mt-3 text-2.5xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tight">
            How Booking <span className="italic font-serif bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-300 bg-clip-text text-transparent">Works</span>
          </h1>
          <p className="mx-auto mt-2 sm:mt-3 max-w-lg text-xs sm:text-base text-white/75 leading-relaxed">
            Simple 4-step process to reserve your dream Himalayan stay with zero booking fees.
          </p>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {DETAILED_STEPS.map((s, i) => (
              <div
                key={s.step}
                style={{ '--d': `${i * 0.1}s` }}
                className="card reveal flex flex-col justify-between p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <span className="font-display text-4xl font-extrabold text-saffron-500/80">{s.step}</span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.desc}</p>
                </div>
                <div className="mt-6 rounded-2xl bg-saffron-500/10 p-3.5 text-xs text-saffron-700 dark:text-saffron-400 font-medium">
                  <strong>Insider Tip:</strong> {s.tips}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Booking Enquiry Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20 dark:bg-navy-900/40">
        <div className="container-x max-w-4xl">
          <SectionHead
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know"
            id="faqHead"
          >
            Have questions before booking? We have clear answers.
          </SectionHead>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-white transition dark:border-white/10 dark:bg-navy-900"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between p-6 text-left font-bold text-navy-900 dark:text-white cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <span className={`grid size-8 place-items-center rounded-full bg-slate-100 transition-transform dark:bg-white/10 ${isOpen ? 'rotate-180' : ''}`}>
                      <Icon name="arrow" className="size-4 rotate-90" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm text-slate-500">Have a different question not answered here?</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a href={waLink('Hi JDV Travels, I have a question regarding booking a stay.')} target="_blank" rel="noopener" className="btn btn-whatsapp">
                <Icon name="whatsapp" className="size-4" /> Ask on WhatsApp
              </a>
              <a href={`tel:${PHONE}`} className="btn btn-outline">
                <Icon name="phone" className="size-4" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
