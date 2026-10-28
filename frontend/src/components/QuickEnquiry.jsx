import { useState } from 'react';
import Icon from './Icon';
import { DEST_OPTIONS, PHONE, PHONE_DISPLAY, waLink } from '../data/site';
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

const Field = ({ id, icon, label, className = '', children }) => (
  <div className={`min-w-0 w-full box-border ${className}`}>
    <label htmlFor={id} className="field-label text-[11px] sm:text-xs mb-1 font-bold">
      <Icon name={icon} className="size-3 sm:size-3.5 text-saffron-500 shrink-0" />
      <span className="truncate">{label}</span>
    </label>
    {children}
  </div>
);

export default function QuickEnquiry({ destination, setDestination, notify }) {
  const [f, setF] = useState({
    checkin: '',
    checkout: '',
    stayDays: '3 Days',
    guests: '2 Adults',
    rooms: '1 Room',
    budget: '₹3,000 – ₹6,000',
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const set = (k) => (e) => {
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

  const submit = async (e) => {
    e.preventDefault();
    const er = {
      destination: !destination,
      checkin: !f.checkin,
      checkout: !f.checkout || f.checkout <= f.checkin,
      name: f.name.trim().length < 2,
      phone: !validPhone(f.phone),
    };
    setErrors(er);
    if (Object.values(er).some(Boolean)) return notify('Please fill in the highlighted fields.', 'error');

    setBusy(true);
    const win = window.open('', '_blank');
    const saved = await saveEnquiry({ type: 'quick', destination, ...f });
    const msg = `Hi JDV Travels, I'd like the best price for a stay.\n\n📍 Destination: ${destination}\n📅 Check-in: ${fmt(f.checkin)}\n📅 Check-out: ${fmt(f.checkout)}\n🗓 Total Stay Days: ${f.stayDays}\n👥 Guests: ${f.guests}\n🛏 Rooms: ${f.rooms}\n💰 Budget/night: ${f.budget}\n🙋 Name: ${f.name}\n📞 Mobile: ${f.phone}`;
    if (win) win.location.href = waLink(msg);
    else window.location.href = waLink(msg);
    setBusy(false);
    notify(saved ? 'Enquiry recorded! Opening WhatsApp…' : 'Opening WhatsApp…');
  };

  return (
    <section id="enquiry" aria-labelledby="enquiryTitle" className="relative z-20 -mt-14 sm:-mt-28">
      <div className="container-x">
        <div className="card reveal p-4 sm:p-8 lg:p-10 shadow-2xl shadow-navy-950/15 border border-white/60 dark:border-white/10 dark:bg-navy-900/95 backdrop-blur-2xl box-border overflow-hidden">
          <div className="mb-4 sm:mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-slate-100 pb-3 sm:pb-5 dark:border-white/10">
            <div>
              <span className="eyebrow mb-1 text-[10px] sm:text-xs">Instant Stay Planner</span>
              <h2 id="enquiryTitle" className="text-lg sm:text-3xl font-extrabold tracking-tight">
                Quick Hotel &amp; Cottage Enquiry
              </h2>
              <p className="hidden sm:block mt-1 text-sm text-slate-500 dark:text-slate-400">
                Tell us where you want to go and get available rooms with genuine photos &amp; direct host prices.
              </p>
            </div>
            <div className="hidden sm:block text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/5 px-4 py-2 rounded-full border border-slate-200/60 dark:border-white/10">
              Prefer to talk directly?{' '}
              <a
                href={`tel:${PHONE}`}
                id="enquiryCallLink"
                className="inline-flex items-center gap-1 font-bold text-navy-900 dark:text-white hover:text-saffron-600 transition"
              >
                <Icon name="phone" className="size-3.5 text-saffron-500" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <form id="quickEnquiryForm" noValidate onSubmit={submit} className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 w-full min-w-0 box-border">
            {/* Destination - full width on mobile, 1 col on desktop */}
            <Field id="qDestination" icon="pin" label="Destination" className="col-span-2 lg:col-span-1">
              <select
                id="qDestination"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setErrors((x) => ({ ...x, destination: false }));
                }}
                className={`field-input cursor-pointer ${errors.destination ? 'invalid' : ''}`}
              >
                <option value="" disabled>Select destination</option>
                {Object.entries(DEST_OPTIONS).map(([g, list]) => (
                  <optgroup key={g} label={g}>
                    {list.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </optgroup>
                ))}
                <option>Not decided yet / Custom</option>
              </select>
            </Field>

            {/* Check-in & Check-out side by side on mobile */}
            <Field id="qCheckin" icon="calendar" label="Check-in" className="col-span-1">
              <input
                type="date"
                id="qCheckin"
                min={today()}
                value={f.checkin}
                onChange={set('checkin')}
                className={`field-input ${errors.checkin ? 'invalid' : ''}`}
              />
            </Field>

            <Field id="qCheckout" icon="calendar" label="Check-out" className="col-span-1">
              <input
                type="date"
                id="qCheckout"
                min={f.checkin ? addDays(f.checkin, 1) : today()}
                value={f.checkout}
                onChange={set('checkout')}
                className={`field-input ${errors.checkout ? 'invalid' : ''}`}
              />
            </Field>

            {/* Total Stay Days & Guests */}
            <Field id="qStayDays" icon="calendar" label="Total Stay Days" className="col-span-1">
              <select id="qStayDays" value={f.stayDays} onChange={set('stayDays')} className="field-input cursor-pointer">
                {STAY_DAYS_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>

            <Field id="qGuests" icon="users" label="Guests" className="col-span-1">
              <select id="qGuests" value={f.guests} onChange={set('guests')} className="field-input cursor-pointer">
                {['1 Adult', '2 Adults', '2 Adults + 1 Child', '2 Adults + 2 Children', '3 Adults', '4 Adults', '5–8 Guests', 'Group (9+)'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>

            <Field id="qRooms" icon="bed" label="Rooms" className="col-span-1">
              <select id="qRooms" value={f.rooms} onChange={set('rooms')} className="field-input cursor-pointer">
                {['1 Room', '2 Rooms', '3 Rooms', '4+ Rooms', 'Entire Villa'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>

            {/* Budget, Name & WhatsApp Mobile */}
            <Field id="qBudget" icon="wallet" label="Budget / night" className="col-span-1">
              <select id="qBudget" value={f.budget} onChange={set('budget')} className="field-input cursor-pointer">
                {['Under ₹3k', '₹3k – ₹6k', '₹6k – ₹10k', '₹10k+', 'Flexible'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>

            <Field id="qName" icon="user" label="Your name" className="col-span-1">
              <input
                id="qName"
                placeholder="Full name"
                autoComplete="name"
                value={f.name}
                onChange={set('name')}
                className={`field-input ${errors.name ? 'invalid' : ''}`}
              />
            </Field>

            <Field id="qPhone" icon="phone" label="WhatsApp Mobile" className="col-span-1">
              <input
                id="qPhone"
                type="tel"
                inputMode="tel"
                placeholder="10-digit number"
                autoComplete="tel"
                value={f.phone}
                onChange={set('phone')}
                className={`field-input ${errors.phone ? 'invalid' : ''}`}
              />
            </Field>

            {/* Submit Button */}
            <div className="col-span-2 lg:col-span-3 mt-1 sm:mt-2">
              <button
                type="submit"
                id="quickEnquirySubmit"
                disabled={busy}
                className="btn btn-primary btn-lg w-full disabled:opacity-60 text-xs sm:text-base font-bold shadow-lg shadow-saffron-500/25 py-3 sm:py-3.5"
              >
                <Icon name="search" className="size-4 sm:size-5" />
                {busy ? 'Finding available stays…' : 'Get Best Stays & Rates on WhatsApp'}
              </button>
            </div>
          </form>

          <p className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5 text-center text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            <Icon name="whatsapp" className="size-3.5 text-wa shrink-0" />
            <span>Opens directly on WhatsApp. Instant replies with no obligation.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
