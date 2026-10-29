import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHead from '../components/SectionHead';
import { DEST_OPTIONS, PHONE, PHONE_DISPLAY, PHONE_2_DISPLAY, WA_DISPLAY, EMAIL, INSTAGRAM_URL, FACEBOOK_URL, WEBSITE_URL, WEBSITE_DISPLAY, waLink } from '../data/site';
import { saveEnquiry, validPhone } from '../lib/api';

const today = () => new Date().toISOString().slice(0, 10);
const addDays = (d, n) => {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x.toISOString().slice(0, 10);
};
const calcStayDays = (ci, co) => {
  if (!ci || !co) return null;
  const diff = Math.round((new Date(co) - new Date(ci)) / 86400000);
  if (diff <= 0) return null;
  if (diff === 1) return '1 Day';
  if (diff <= 14) return `${diff} Days`;
  return '15+ Days';
};
const STAY_DAYS_OPTIONS = [
  '1 Day',
  '2 Days',
  '3 Days',
  '4 Days',
  '5 Days',
  '6 Days',
  '7 Days',
  '8 Days',
  '9 Days',
  '10 Days',
  '11 Days',
  '12 Days',
  '13 Days',
  '14 Days',
  '15+ Days',
];
const fmt = (d) => (d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '-');

export default function ContactPage({ destination, setDestination, notify }) {
  const [searchParams] = useSearchParams();
  const qDest = searchParams.get('destination');
  const qStay = searchParams.get('stay');

  const [dest, setDest] = useState(destination || qDest || 'Jibhi');
  const [f, setF] = useState({
    checkin: '',
    checkout: '',
    stayDays: '3 Days',
    guests: '2 Adults',
    rooms: '1 Room',
    budget: '₹3,000 – ₹6,000',
    name: '',
    phone: '',
    notes: qStay ? `Interested in booking stay: ${qStay}` : '',
  });

  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (qDest) {
      setDest(qDest);
      setDestination(qDest);
    }
  }, [qDest, setDestination]);

  useEffect(() => {
    if (qStay) {
      setF((p) => ({ ...p, notes: `Interested in booking stay: ${qStay}` }));
    }
  }, [qStay]);

  const setField = (k) => (e) => {
    const v = e.target.value;
    setF((p) => {
      const n = { ...p, [k]: v };
      if (k === 'checkin') {
        const daysNum = parseInt(p.stayDays, 10) || 1;
        if (!p.checkout || p.checkout <= v) n.checkout = addDays(v, daysNum);
        const computed = calcStayDays(v, n.checkout);
        if (computed) n.stayDays = computed;
      } else if (k === 'checkout') {
        const computed = calcStayDays(p.checkin, v);
        if (computed) n.stayDays = computed;
      } else if (k === 'stayDays' && p.checkin) {
        const daysNum = parseInt(v, 10);
        if (!Number.isNaN(daysNum) && daysNum >= 1 && daysNum <= 14) {
          n.checkout = addDays(p.checkin, daysNum);
        }
      }
      return n;
    });
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const submitEnquiry = async (e) => {
    e.preventDefault();
    const er = {
      destination: !dest,
      checkin: !f.checkin,
      checkout: !f.checkout || f.checkout <= f.checkin,
      name: f.name.trim().length < 2,
      phone: !validPhone(f.phone),
    };
    setErrors(er);

    if (Object.values(er).some(Boolean)) {
      return notify('Please complete the highlighted fields.', 'error');
    }

    setBusy(true);
    const win = window.open('', '_blank');
    const saved = await saveEnquiry({
      type: 'quick',
      destination: dest,
      ...f,
    });

    const msg = `Hi JDV Travels, I would like to book a stay.\n\n📍 Destination: ${dest}${
      f.notes ? `\n🏨 Stay/Notes: ${f.notes}` : ''
    }\n📅 Check-in: ${fmt(f.checkin)}\n📅 Check-out: ${fmt(f.checkout)}\n🗓 Total Stay Days: ${f.stayDays}\n👥 Guests: ${f.guests}\n🛏 Rooms: ${
      f.rooms
    }\n💰 Budget/night: ${f.budget}\n🙋 Name: ${f.name}\n📞 Mobile: ${f.phone}\n📧 Email to: ${EMAIL}`;

    if (win) win.location.href = waLink(msg);
    else window.location.href = waLink(msg);

    setBusy(false);
    notify(saved ? 'Enquiry recorded! Opening WhatsApp…' : 'Opening WhatsApp…');
  };

  const contactCards = [
    {
      id: 'contactWa',
      href: waLink(),
      icon: 'whatsapp',
      bg: 'from-wa to-wa-dark',
      label: 'Instant WhatsApp',
      val: WA_DISPLAY,
      ext: true,
    },
    {
      id: 'contactCall',
      href: `tel:${PHONE}`,
      icon: 'phone',
      bg: 'from-navy-700 to-navy-950',
      label: 'Direct Phone',
      val: PHONE_DISPLAY,
      subVal: PHONE_2_DISPLAY,
    },
    {
      id: 'contactEmail',
      href: `mailto:${EMAIL}`,
      icon: 'mail',
      bg: 'from-saffron-500 to-amber-600',
      label: 'Email Enquiry',
      val: EMAIL,
    },
  ];

  return (
    <div className="pt-20 sm:pt-28 pb-4 sm:pb-12">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-8 sm:py-16 text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-saffron-500/10 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="eyebrow !text-saffron-400 text-[10px] sm:text-xs">Direct Coordination</span>
          <h1 className="mt-1.5 sm:mt-3 text-2.5xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tight">
            Contact &amp; <span className="italic font-serif bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-300 bg-clip-text text-transparent">Stay Enquiry</span>
          </h1>
          <p className="hidden sm:block mx-auto mt-3 max-w-lg text-sm sm:text-base text-white/75 leading-relaxed">
            Tell us your travel dates and stay preferences. We will connect you directly with verified properties and best prices.
          </p>
        </div>
      </section>

      <div className="container-x mt-4 sm:mt-12">
        {/* Contact Info Cards - Desktop only to remove extra content on mobile */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 sm:gap-6 mb-3 sm:mb-4">
          {contactCards.map((c) => {
            const Tag = c.href ? 'a' : 'div';
            return (
              <Tag
                key={c.id}
                id={c.id}
                href={c.href}
                {...(c.ext ? { target: '_blank', rel: 'noopener' } : {})}
                className="card flex items-center gap-3.5 p-3.5 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl border border-slate-200/80 dark:border-white/10"
              >
                <span className={`grid size-11 sm:size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.bg} text-white shadow-md`}>
                  <Icon name={c.icon} className="size-5" />
                </span>
                <span className="min-w-0">
                  <small className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold truncate">{c.label}</small>
                  <strong className="block truncate text-xs sm:text-sm font-bold text-navy-900 dark:text-white leading-snug">{c.val}</strong>
                  {c.subVal && (
                    <strong className="block truncate text-xs sm:text-sm font-bold text-navy-900 dark:text-white leading-snug">{c.subVal}</strong>
                  )}
                </span>
              </Tag>
            );
          })}
        </div>

        {/* Social Connect Strip - Desktop only */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-8 sm:mb-14 pt-1">
          <span>Follow our mountain updates:</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-pink-500 dark:text-slate-300 transition"
          >
            <Icon name="instagram" className="size-3.5 text-pink-500" /> @jdvtravels
          </a>
          <span className="text-slate-300 dark:text-white/20">•</span>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-500 dark:text-slate-300 transition"
          >
            <Icon name="facebook" className="size-3.5 text-blue-500" /> Facebook Page
          </a>
          <span className="text-slate-300 dark:text-white/20">•</span>
          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-saffron-500 dark:text-slate-300 transition"
          >
            <Icon name="globe" className="size-3.5 text-saffron-500" /> {WEBSITE_DISPLAY}
          </a>
        </div>

        {/* Main Form Section */}
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-12 items-start">
          <div className="card p-4 sm:p-8 lg:p-10 lg:col-span-8 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-2xl sm:rounded-3xl box-border overflow-hidden">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">Himalayan Stay Enquiry Form</h2>
            <p className="hidden sm:block mt-1 text-sm text-slate-500 dark:text-slate-400">
              Fill in your dates and preferences. We will reply directly on WhatsApp with verified stays &amp; lowest direct rates.
            </p>

            <form noValidate onSubmit={submitEnquiry} className="mt-3 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 box-border w-full">
              {/* Destination - full width */}
              <div className="col-span-2 min-w-0">
                <label htmlFor="formDest" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                  <Icon name="pin" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                  <span>Destination</span>
                </label>
                <select
                  id="formDest"
                  value={dest}
                  onChange={(e) => {
                    setDest(e.target.value);
                    setDestination(e.target.value);
                    setErrors((x) => ({ ...x, destination: false }));
                  }}
                  className={`field-input cursor-pointer ${errors.destination ? 'invalid' : ''}`}
                >
                  <option value="" disabled>Select destination</option>
                  {Object.entries(DEST_OPTIONS).map(([group, list]) => (
                    <optgroup key={group} label={group}>
                      {list.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </optgroup>
                  ))}
                  <option>Other / Not decided yet</option>
                </select>
              </div>

              {/* Check-in, Check-out & Total Stay Days */}
              <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 min-w-0">
                <div className="col-span-1 min-w-0">
                  <label htmlFor="formCheckin" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                    <Icon name="calendar" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                    <span className="truncate">Check-in</span>
                  </label>
                  <input
                    type="date"
                    id="formCheckin"
                    min={today()}
                    value={f.checkin}
                    onChange={setField('checkin')}
                    className={`field-input ${errors.checkin ? 'invalid' : ''}`}
                  />
                </div>

                <div className="col-span-1 min-w-0">
                  <label htmlFor="formCheckout" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                    <Icon name="calendar" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                    <span className="truncate">Check-out</span>
                  </label>
                  <input
                    type="date"
                    id="formCheckout"
                    min={f.checkin ? addDays(f.checkin, 1) : today()}
                    value={f.checkout}
                    onChange={setField('checkout')}
                    className={`field-input ${errors.checkout ? 'invalid' : ''}`}
                  />
                </div>

                <div className="col-span-2 sm:col-span-1 min-w-0">
                  <label htmlFor="formStayDays" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                    <Icon name="calendar" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                    <span className="truncate">Total Stay Days</span>
                  </label>
                  <select
                    id="formStayDays"
                    value={f.stayDays}
                    onChange={setField('stayDays')}
                    className="field-input cursor-pointer"
                  >
                    {STAY_DAYS_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests & Rooms side by side on mobile */}
              <div className="col-span-1 min-w-0">
                <label htmlFor="formGuests" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                  <Icon name="users" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                  <span className="truncate">Guests</span>
                </label>
                <select id="formGuests" value={f.guests} onChange={setField('guests')} className="field-input cursor-pointer">
                  {['1 Adult', '2 Adults', '2 Adults + 1 Child', '2 Adults + 2 Children', '3 Adults', '4 Adults', '5–8 Guests', 'Group (9+)'].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 min-w-0">
                <label htmlFor="formRooms" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                  <Icon name="bed" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                  <span className="truncate">Rooms</span>
                </label>
                <select id="formRooms" value={f.rooms} onChange={setField('rooms')} className="field-input cursor-pointer">
                  {['1 Room', '2 Rooms', '3 Rooms', '4+ Rooms', 'Entire Villa/Chalet'].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Budget & Name side by side on mobile */}
              <div className="col-span-1 min-w-0">
                <label htmlFor="formBudget" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                  <Icon name="wallet" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                  <span className="truncate">Budget / night</span>
                </label>
                <select id="formBudget" value={f.budget} onChange={setField('budget')} className="field-input cursor-pointer">
                  {['Under ₹3,000', '₹3,000 – ₹6,000', '₹6,000 – ₹10,000', '₹10,000+', 'Flexible'].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 min-w-0">
                <label htmlFor="formName" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                  <Icon name="user" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                  <span className="truncate">Your Name</span>
                </label>
                <input
                  id="formName"
                  placeholder="Full name"
                  autoComplete="name"
                  value={f.name}
                  onChange={setField('name')}
                  className={`field-input ${errors.name ? 'invalid' : ''}`}
                />
              </div>

              {/* Phone - full width on mobile */}
              <div className="col-span-2 min-w-0">
                <label htmlFor="formPhone" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                  <Icon name="phone" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                  <span>WhatsApp Mobile Number</span>
                </label>
                <input
                  id="formPhone"
                  type="tel"
                  inputMode="tel"
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  value={f.phone}
                  onChange={setField('phone')}
                  className={`field-input ${errors.phone ? 'invalid' : ''}`}
                />
              </div>

              {/* Special Requests */}
              <div className="col-span-2 min-w-0">
                <label htmlFor="formNotes" className="field-label text-[11px] sm:text-xs font-bold mb-1">
                  <Icon name="message" className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
                  <span>Special Requests (Optional)</span>
                </label>
                <textarea
                  id="formNotes"
                  rows={2}
                  placeholder="e.g. Riverside balcony, bonfire setup, heater required..."
                  value={f.notes}
                  onChange={setField('notes')}
                  className="field-input resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-2 mt-1 sm:mt-2">
                <button
                  type="submit"
                  disabled={busy}
                  className="btn btn-primary btn-lg w-full disabled:opacity-60 cursor-pointer text-xs sm:text-base font-bold shadow-lg shadow-saffron-500/25 py-3 sm:py-3.5 justify-center"
                >
                  <Icon name="search" className="size-4 sm:size-5" />
                  {busy ? 'Preparing Enquiry…' : 'Get Best Stays & Rates on WhatsApp'}
                </button>
                <p className="hidden sm:flex mt-2.5 items-center justify-center gap-1.5 text-center text-xs text-slate-500 dark:text-slate-400">
                  <Icon name="whatsapp" className="size-3.5 text-wa shrink-0" />
                  <span>Opens directly on WhatsApp for live room photos &amp; fastest quotes.</span>
                </p>
              </div>
            </form>
          </div>

          {/* Side Info Box - Desktop & Tablet only */}
          <div className="hidden lg:block space-y-6 lg:col-span-4">
            <div className="card p-6 border border-slate-200 dark:border-white/10 rounded-3xl">
              <h3 className="text-lg font-bold">Why Book via JDV Travels?</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-wa/15 text-wa mt-0.5">
                    <Icon name="check" className="size-3" />
                  </span>
                  <span><strong>Zero Hidden Costs:</strong> Transparent direct prices with verified mountain hosts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-wa/15 text-wa mt-0.5">
                    <Icon name="check" className="size-3" />
                  </span>
                  <span><strong>Focus on Offbeat Stays:</strong> Specialists in Jibhi, Sojha, Tirthan, and Spiti Valley.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-wa/15 text-wa mt-0.5">
                    <Icon name="check" className="size-3" />
                  </span>
                  <span><strong>Live Local Support:</strong> Real-time guidance for mountain roads, passes &amp; weather.</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-3xl">
              <span className="eyebrow !text-saffron-400">Prefer Direct Email?</span>
              <h3 className="mt-3 text-xl font-bold !text-white">Email Us Your Plan</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                You can write to us directly at our official email address. We review group requests and custom itineraries promptly.
              </p>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/10 p-3 text-sm">
                <Icon name="mail" className="size-4 text-saffron-400" />
                <a href={`mailto:${EMAIL}`} className="font-semibold text-white hover:underline break-all">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
