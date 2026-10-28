import { Link, useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { PHONE, PHONE_DISPLAY, PHONE_2, PHONE_2_DISPLAY, WA_DISPLAY, EMAIL, INSTAGRAM_URL, FACEBOOK_URL, WEBSITE_URL, WEBSITE_DISPLAY, waLink } from '../data/site';

export function Footer() {
  const navigate = useNavigate();

  const handleDestPick = (place) => {
    navigate(`/contact?destination=${encodeURIComponent(place)}`);
  };

  return (
    <footer className="bg-navy-950 pt-8 sm:pt-12 pb-20 text-white/70 lg:pb-0">
      <div className="container-x">
        {/* Clean CTA Banner */}
        <div className="relative mb-8 sm:mb-12 flex flex-col lg:flex-row items-center justify-between gap-5 overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-saffron-500 to-amber-600 px-6 py-6 sm:px-10 sm:py-8 text-white shadow-xl shadow-saffron-500/15">
          <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-white/10" />
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold !text-white">Planning a trip to the Himalayas?</h3>
            <p className="mt-1 text-xs sm:text-sm text-white/90">
              Direct deals across Himachal, Kashmir, Ladakh &amp; Uttarakhand with zero hidden fees.
            </p>
          </div>

          <div className="relative flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              id="footerEnquireBtn"
              className="btn bg-white text-navy-950 hover:bg-slate-100 text-xs sm:text-sm py-2.5 px-5 font-bold whitespace-nowrap shadow-md flex-1 sm:flex-initial justify-center"
            >
              <Icon name="search" className="size-4 text-saffron-600" /> Enquire Now
            </Link>
            <a
              href={`tel:${PHONE}`}
              id="footerCallBtn"
              className="btn bg-navy-950 text-white hover:bg-navy-900 text-xs sm:text-sm py-2.5 px-5 font-bold whitespace-nowrap shadow-md flex-1 sm:flex-initial justify-center"
            >
              <Icon name="phone" className="size-4 text-saffron-400" /> Call Now
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              id="footerWhatsappBtn"
              className="btn bg-wa text-white hover:bg-wa-dark text-xs sm:text-sm py-2.5 px-5 font-bold whitespace-nowrap shadow-md w-full sm:w-auto justify-center"
            >
              <Icon name="whatsapp" className="size-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-10 pb-8 sm:pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-full sm:col-span-1 lg:col-span-1">
            <Link to="/" id="footerBrand" className="flex items-center gap-2.5 sm:gap-3">
              <img src="/Assets/jdv%20logo.jpeg" alt="JDV Travels logo" loading="lazy" className="size-9 sm:size-11 rounded-full object-cover" />
              <span className="font-display text-lg sm:text-xl font-bold text-white">JDV <span className="text-saffron-400">Travels</span></span>
            </Link>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/75">
              Your trusted partner for stays, wooden chalets, resorts &amp; homestays across Himachal Pradesh, Jammu &amp; Kashmir, Ladakh, and Uttarakhand.
            </p>
            {/* Elegant Social Links */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-white/40">Follow:</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="footerInstagram"
                aria-label="JDV Travels Instagram"
                className="text-white/70 hover:text-pink-400 transition"
              >
                <Icon name="instagram" className="size-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="footerFacebook"
                aria-label="JDV Travels Facebook"
                className="text-white/70 hover:text-blue-400 transition"
              >
                <Icon name="facebook" className="size-4" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="footerSocialWa"
                aria-label="Chat on WhatsApp"
                className="text-white/70 hover:text-wa transition"
              >
                <Icon name="whatsapp" className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Pages & Destinations Side-by-Side in 2 Columns on Mobile */}
          <div className="col-span-full sm:col-span-1 lg:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <h4 className="mb-2.5 text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Quick Pages</h4>
              <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
                {[
                  ['/', 'Home'],
                  ['/destinations', 'Destinations'],
                  ['/hotels', 'Featured Hotels'],
                  ['/why-us', 'Why Us'],
                  ['/how-it-works', 'How It Works'],
                  ['/about', 'About Us'],
                  ['/contact', 'Contact'],
                ].map(([path, t]) => (
                  <li key={path}>
                    <Link to={path} className="transition hover:pl-1 hover:text-saffron-400">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2.5 text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Destinations</h4>
              <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
                {['Jibhi', 'Shimla', 'Manali', 'Ladakh', 'Lahul & Spiti', 'Tirthan', 'Jalori pass', 'Sojha', 'Srinagar', 'Gulmarg'].map((d) => (
                  <li key={d}>
                    <button
                      type="button"
                      onClick={() => handleDestPick(d)}
                      className="cursor-pointer text-left transition hover:pl-1 hover:text-saffron-400 truncate max-w-full"
                    >
                      {d}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-full sm:col-span-1 lg:col-span-1">
            <h4 className="mb-2.5 text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Icon name="mail" className="size-3.5 sm:size-4 text-saffron-400 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="phone" className="size-3.5 sm:size-4 text-saffron-400 shrink-0 mt-0.5" />
                <span className="flex flex-col leading-snug">
                  <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE_DISPLAY}</a>
                  <a href={`tel:${PHONE_2}`} className="hover:text-white">{PHONE_2_DISPLAY}</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="whatsapp" className="size-3.5 sm:size-4 text-wa shrink-0" />
                <a href={waLink()} target="_blank" rel="noopener" className="hover:text-white">WhatsApp: {WA_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="globe" className="size-3.5 sm:size-4 text-saffron-400 shrink-0" />
                <a href={WEBSITE_URL} className="hover:text-white">{WEBSITE_DISPLAY}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 sm:py-6 text-[11px] sm:text-xs">
        <div className="container-x flex flex-col justify-between gap-1 sm:gap-2 sm:flex-row text-center sm:text-left text-white/60">
          <span>© {new Date().getFullYear()} JDV Travels. All rights reserved.</span>
          <span>Bookings are confirmed manually after enquiry.</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions({ toast }) {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-center gap-4 lg:flex">
        <a
          href={`tel:${PHONE}`}
          id="callFloat"
          aria-label={`Call JDV Travels at ${PHONE_DISPLAY}`}
          className="group relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-saffron-500 to-amber-600 text-white shadow-2xl shadow-saffron-500/40 transition hover:scale-110"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-saffron-500/40" />
          <Icon name="phone" className="relative size-6" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
            Call {PHONE_DISPLAY}
          </span>
        </a>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          id="waFloat"
          aria-label="Chat with JDV Travels on WhatsApp"
          className="group relative grid size-14 place-items-center rounded-full bg-wa text-white shadow-2xl shadow-wa/40 transition hover:scale-110"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-wa/40" />
          <Icon name="whatsapp" className="relative size-7" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
            WhatsApp {WA_DISPLAY}
          </span>
        </a>
      </div>

      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white/95 text-xs font-semibold backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/95 lg:hidden"
      >
        <a href={`tel:${PHONE}`} id="mobileCall" className="flex flex-col items-center gap-1 py-3 text-navy-900 dark:text-white">
          <Icon name="phone" className="size-5" />Call
        </a>
        <a href={waLink()} target="_blank" rel="noopener" id="mobileWhatsapp" className="flex flex-col items-center gap-1 py-3 text-wa">
          <Icon name="whatsapp" className="size-5" />WhatsApp
        </a>
        <Link to="/contact" id="mobileEnquire" className="flex flex-col items-center gap-1 bg-saffron-500 py-3 text-white">
          <Icon name="send" className="size-5" />Enquire
        </Link>
      </nav>

      <div
        id="toast"
        role="status"
        aria-live="polite"
        className={`fixed left-1/2 top-24 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-2xl transition-all duration-300 ${
          toast ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-4'
        } ${toast?.type === 'error' ? 'bg-red-500' : 'bg-navy-900'}`}
      >
        <Icon name={toast?.type === 'error' ? 'close' : 'check'} className="size-4" />
        {toast?.msg}
      </div>
    </>
  );
}
