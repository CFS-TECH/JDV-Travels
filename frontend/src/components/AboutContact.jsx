import { useState } from 'react';
import Icon from './Icon';
import SectionHead from './SectionHead';
import { OWNER_NAME, PHONE, PHONE_DISPLAY, WA_DISPLAY, EMAIL, WEBSITE_URL, WEBSITE_DISPLAY, waLink } from '../data/site';
import { saveEnquiry, validPhone } from '../lib/api';

export function About() {
  return (
    <section id="about" aria-labelledby="aboutTitle" className="bg-slate-50 py-24 dark:bg-navy-900/40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal relative pb-16 pr-10">
          <img src="/Assets/destinations/manali.png" alt="Snowy Himalayan peaks and pine forest" loading="lazy" className="h-[420px] w-full rounded-3xl object-cover shadow-2xl" />
          <img src="/Assets/hotels/lakeside-resort.png" alt="Resort terrace overlooking a hill lake" loading="lazy" className="absolute bottom-0 right-0 h-48 w-60 rounded-3xl border-8 border-white object-cover shadow-2xl dark:border-navy-950" />
          <div className="absolute left-6 top-6 flex animate-float items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur dark:bg-navy-900/95">
            <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-saffron-400 to-saffron-600"><Icon name="award" className="size-5 text-white" /></div>
            <div><strong className="block text-sm text-navy-900 dark:text-white">Hill Stay Specialists</strong><span className="text-xs text-slate-500">Himachal, J&amp;K, Ladakh &amp; Uttarakhand</span></div>
          </div>
        </div>
        <div className="reveal" style={{ '--d': '.15s' }}>
          <span className="eyebrow">About Us</span>
          <h2 id="aboutTitle" className="mt-4 text-3xl font-bold sm:text-4xl">Your Trusted Partner for Mountain Holidays</h2>
          <p className="mt-4 leading-relaxed text-sm sm:text-base text-slate-600 dark:text-slate-300">Founded by <strong>{OWNER_NAME}</strong>, JDV Travels connects you with hand-picked wooden chalets, boutique resorts and homestays across Himachal Pradesh, Jammu &amp; Kashmir, and Ladakh with genuine host-direct pricing.</p>
          <p className="mt-4 leading-relaxed">Tell us where you want to go, your dates and your budget. We check availability directly with property hosts, compare options, and secure the best deals for you without any guesswork.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Hotels for every budget', 'Family, couple & group stays', 'Clear, upfront pricing', 'Personal WhatsApp support'].map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium text-navy-900 dark:text-white">
                <span className="grid size-6 place-items-center rounded-full bg-wa/15"><Icon name="check" className="size-3.5 text-wa" /></span>{t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} id="aboutCallBtn" className="btn btn-primary"><Icon name="phone" className="size-4" /> Call {PHONE_DISPLAY}</a>
            <a href={waLink()} target="_blank" rel="noopener" id="aboutWhatsappBtn" className="btn btn-whatsapp"><Icon name="whatsapp" className="size-4" /> WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({ notify }) {
  const [f, setF] = useState({ name: '', phone: '', trip: '', message: '' });
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); setErrors({ ...errors, [k]: false }); };

  const submit = async (e) => {
    e.preventDefault();
    const er = { name: f.name.trim().length < 2, phone: !validPhone(f.phone), message: f.message.trim().length < 3 };
    setErrors(er);
    if (Object.values(er).some(Boolean)) return notify('Please fill in the highlighted fields.', 'error');
    const win = window.open('', '_blank');
    const saved = await saveEnquiry({ type: 'contact', ...f });
    const msg = `Hi JDV Travels,\n\n${f.message}\n\n🙋 Name: ${f.name}\n📞 Mobile: ${f.phone}${f.trip ? `\n📍 Trip: ${f.trip}` : ''}`;
    if (win) win.location.href = waLink(msg); else window.location.href = waLink(msg);
    notify(saved ? 'Message saved! Opening WhatsApp…' : 'Opening WhatsApp…');
    setF({ name: '', phone: '', trip: '', message: '' });
  };

  const cards = [
    { id: 'contactCallCard', href: `tel:${PHONE}`, icon: 'phone', bg: 'from-navy-500 to-navy-900', small: 'Call us', big: PHONE_DISPLAY },
    { id: 'contactWhatsappCard', href: waLink(), icon: 'whatsapp', bg: 'from-wa to-wa-dark', small: 'WhatsApp', big: WA_DISPLAY, ext: true },
    { id: 'contactEmailCard', href: `mailto:${EMAIL}`, icon: 'mail', bg: 'from-saffron-500 to-amber-600', small: 'Email us directly', big: EMAIL },
    { id: 'contactWebsiteCard', href: WEBSITE_URL, icon: 'globe', bg: 'from-sky-500 to-navy-700', small: 'Website', big: WEBSITE_DISPLAY },
    { id: 'contactCover', icon: 'mountain', bg: 'from-navy-600 to-navy-900', small: 'Core regions', big: 'Himachal, J&K, Ladakh & Uttarakhand' },
  ];

  return (
    <section id="contact" aria-labelledby="contactTitle" className="py-24">
      <div className="container-x">
        <SectionHead eyebrow="Contact Us" title="Let's Plan Your Stay" id="contactTitle">Call, WhatsApp or drop a message. We'll help you find the right hotel.</SectionHead>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="grid gap-4 lg:col-span-2">
            {cards.map((c, i) => {
              const Tag = c.href ? 'a' : 'div';
              return (
                <Tag key={c.id} id={c.id} href={c.href} {...(c.ext ? { target: '_blank', rel: 'noopener' } : {})} style={{ '--d': `${i * 0.1}s` }}
                  className="reveal card group flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-2xl">
                  <span className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${c.bg} transition group-hover:scale-110`}><Icon name={c.icon} className="size-5 text-white" /></span>
                  <span><small className="block text-xs text-slate-500">{c.small}</small><strong className="text-navy-900 dark:text-white">{c.big}</strong></span>
                </Tag>
              );
            })}
          </div>
          <div className="reveal card p-8 lg:col-span-3" style={{ '--d': '.15s' }}>
            <h3 className="text-2xl font-bold">Send Us a Message</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">We usually reply on WhatsApp within a short time.</p>
            <form id="contactForm" noValidate onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="cName" className="field-label"><Icon name="user" className="size-3.5 text-saffron-500" />Name</label>
                <input id="cName" placeholder="Full name" autoComplete="name" value={f.name} onChange={set('name')} className={`field-input ${errors.name ? 'invalid' : ''}`} /></div>
              <div><label htmlFor="cPhone" className="field-label"><Icon name="phone" className="size-3.5 text-saffron-500" />Mobile</label>
                <input id="cPhone" type="tel" inputMode="tel" placeholder="10-digit number" autoComplete="tel" value={f.phone} onChange={set('phone')} className={`field-input ${errors.phone ? 'invalid' : ''}`} /></div>
              <div className="sm:col-span-2"><label htmlFor="cTrip" className="field-label"><Icon name="pin" className="size-3.5 text-saffron-500" />Destination &amp; dates (optional)</label>
                <input id="cTrip" placeholder="e.g. Manali, 12–15 Dec" value={f.trip} onChange={set('trip')} className="field-input" /></div>
              <div className="sm:col-span-2"><label htmlFor="cMessage" className="field-label"><Icon name="message" className="size-3.5 text-saffron-500" />Message</label>
                <textarea id="cMessage" rows={4} placeholder="Tell us about your trip: guests, budget, type of hotel…" value={f.message} onChange={set('message')} className={`field-input resize-none ${errors.message ? 'invalid' : ''}`} /></div>
              <button type="submit" id="contactSubmit" className="btn btn-whatsapp btn-lg sm:col-span-2"><Icon name="whatsapp" className="size-5" /> Send on WhatsApp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
