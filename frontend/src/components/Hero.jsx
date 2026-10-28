import { Link, useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { PHONE, waLink } from '../data/site';

export default function Hero() {
  const navigate = useNavigate();

  const handlePillClick = (place) => {
    navigate(`/contact?destination=${encodeURIComponent(place)}`);
  };

  return (
    <section id="home" className="relative flex min-h-[78vh] sm:min-h-[92vh] items-center overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-36">
      {/* Background Hero Banner with subtle breathing scale */}
      <img
        src="/Assets/hero-banner.png"
        alt="Himalayan mountain landscape"
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-center scale-105 animate-[float_24s_ease-in-out_infinite]"
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-900/35" />
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-slate-50 dark:from-navy-950 via-slate-50/30 dark:via-navy-950/60 to-transparent" />

      {/* Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 size-80 rounded-full bg-amber-400/15 blur-3xl" />

      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Live Availability Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-navy-950/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-xl shadow-lg shadow-amber-500/10">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
              </span>
              <span className="text-amber-300 font-bold uppercase tracking-wider text-[10px]">Himalayan Stays</span>
              <span className="text-white/40">|</span>
              <span className="text-white/90 text-[11px] sm:text-xs">Himachal &bull; Kashmir &bull; Ladakh</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-up [animation-delay:.1s] mt-4 sm:mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Find Your Perfect <br />
              <span className="bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-300 bg-clip-text text-transparent italic font-serif font-normal">
                Mountain Stay
              </span>
            </h1>

            {/* Clean, Ultra-Crisp Subtitle */}
            <p className="animate-fade-up [animation-delay:.2s] mt-3 sm:mt-4 text-xs sm:text-base text-white/85 max-w-lg leading-relaxed">
              Hand-picked chalets &amp; retreats at direct host rates. Zero booking commission.
            </p>

            {/* Call to Action Buttons */}
            <div className="animate-fade-up [animation-delay:.25s] mt-6 sm:mt-8 flex flex-wrap gap-3 items-center">
              <Link
                to="/contact"
                id="heroEnquireBtn"
                className="btn btn-primary flex-1 sm:flex-initial py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-bold shadow-xl shadow-saffron-500/25 hover:shadow-saffron-500/40 hover:scale-[1.02] transition-all justify-center"
              >
                Get Direct Quote <Icon name="arrow" className="size-4" />
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                id="heroWhatsappBtn"
                className="btn btn-whatsapp flex-1 sm:flex-initial py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.02] transition-all justify-center"
              >
                <Icon name="whatsapp" className="size-4 sm:size-5" /> WhatsApp Now
              </a>
              <a
                href={`tel:${PHONE}`}
                id="heroCallBtn"
                className="btn btn-outline-light hidden sm:inline-flex py-3 sm:py-3.5 px-6 text-sm font-semibold backdrop-blur-md"
              >
                <Icon name="phone" className="size-4" /> Call Us
              </a>
            </div>

            {/* Trust Badges on Desktop */}
            <ul className="hidden sm:flex animate-fade-up [animation-delay:.35s] mt-8 flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-white/85 pt-6 border-t border-white/15">
              {[
                ['shield', '100% Verified Properties'],
                ['tag', 'Direct Host Rates (No Markup)'],
                ['award', '4.9★ Average Guest Rating'],
              ].map(([i, t]) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-saffron-500/25 text-saffron-400">
                    <Icon name={i} className="size-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Floating Feature Showcase (Desktop & Tablet) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4 relative">
            {/* Glowing Accent Ring */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-saffron-500/30 via-amber-400/20 to-transparent blur-2xl opacity-75" />

            <div className="relative rounded-3xl border border-white/20 bg-navy-950/60 p-5 backdrop-blur-2xl shadow-2xl text-white">
              {/* Featured Chalet Image */}
              <div className="relative h-56 overflow-hidden rounded-2xl group">
                <img
                  src="/Assets/destinations/jibhi.jpg"
                  alt="Wooden Chalet in Jibhi"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md flex items-center gap-1 border border-amber-300/30">
                  ★ 4.9 Verified Host
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] uppercase tracking-wider text-saffron-400 font-bold block">Featured Stay</span>
                  <h3 className="text-sm font-bold text-white drop-shadow">Riverside Wooden Chalet &bull; Jibhi</h3>
                </div>
              </div>

              {/* Quick Details & Action */}
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                <div>
                  <span className="text-white/60 block text-[10px] uppercase tracking-wider">Direct Deal</span>
                  <strong className="text-amber-300 text-sm font-bold">Best Price Guaranteed</strong>
                </div>
                <button
                  type="button"
                  onClick={() => handlePillClick('Jibhi')}
                  className="rounded-full bg-gradient-to-r from-saffron-500 to-amber-500 hover:from-saffron-600 hover:to-amber-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105 cursor-pointer"
                >
                  Book Jibhi &rarr;
                </button>
              </div>

              {/* Floating Trust Card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/25 bg-navy-950/95 p-3 shadow-2xl backdrop-blur-xl flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-saffron-500/20 text-saffron-400 shrink-0">
                  <Icon name="award" className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">15,000+ Guests</div>
                  <div className="text-[10px] text-white/70">Delighted Himalayan trips</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
