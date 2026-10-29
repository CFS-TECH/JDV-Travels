import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHead from '../components/SectionHead';
import { OWNER_NAME, PHONE, PHONE_DISPLAY, PHONE_2, PHONE_2_DISPLAY, WA_DISPLAY, EMAIL, WEBSITE_URL, WEBSITE_DISPLAY, waLink } from '../data/site';

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-28 pb-4 sm:pb-12 overflow-x-hidden">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-8 sm:py-16 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-saffron-500/10 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="eyebrow !text-saffron-400 text-[10px] sm:text-xs">Our Story &amp; Mission</span>
          <h1 className="mt-1.5 sm:mt-3 text-2xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tight">
            About <span className="italic font-serif bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-300 bg-clip-text text-transparent">JDV Travels</span>
          </h1>
          <p className="mx-auto mt-1.5 sm:mt-3 max-w-lg text-xs sm:text-base text-white/75 leading-relaxed">
            Helping travelers discover authentic mountain stays without markups or guesswork.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-6 sm:py-20">
        <div className="container-x grid items-center gap-6 sm:gap-14 lg:grid-cols-2">
          <div className="reveal relative min-w-0 sm:pb-16 sm:pr-10">
            <img
              src="/Assets/destinations/manali.png"
              alt="Snowy Himalayan peaks and pine forest"
              loading="lazy"
              className="h-52 sm:h-[460px] w-full rounded-2xl sm:rounded-3xl object-cover shadow-xl sm:shadow-2xl"
            />
            <img
              src="/Assets/destinations/jibhi.jpg"
              alt="Cozy wooden cottage in Jibhi"
              loading="lazy"
              className="hidden sm:block absolute bottom-0 right-0 h-52 w-64 rounded-3xl border-8 border-white object-cover shadow-2xl dark:border-navy-950"
            />
            <div className="absolute left-3 bottom-3 sm:bottom-auto sm:left-6 sm:top-6 flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/95 px-3 py-2 sm:p-4 shadow-lg sm:shadow-xl backdrop-blur dark:bg-navy-900/95">
              <div className="grid size-8 sm:size-11 place-items-center rounded-lg sm:rounded-xl bg-gradient-to-br from-saffron-400 to-saffron-600 shrink-0">
                <Icon name="award" className="size-4 sm:size-5 text-white" />
              </div>
              <div>
                <strong className="block text-xs sm:text-sm text-navy-900 dark:text-white leading-tight">Himalayan Specialists</strong>
                <span className="text-[10px] sm:text-xs text-slate-500">Himachal, J&amp;K, Ladakh &amp; Uttarakhand</span>
              </div>
            </div>
          </div>

          <div className="reveal min-w-0" style={{ '--d': '.15s' }}>
            <span className="eyebrow text-[10px] sm:text-xs">Who We Are</span>
            <h2 className="mt-1.5 sm:mt-4 text-lg font-bold sm:text-4xl">Your Mountain Holiday Companion</h2>
            <p className="mt-2 sm:mt-4 text-xs sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Founded by <strong>{OWNER_NAME}</strong>, <strong>JDV Travels</strong> connects you directly with verified cottages, resorts, and houseboats across <strong>Himachal, Kashmir, Ladakh &amp; Uttarakhand</strong> at honest host prices.
            </p>
            <p className="hidden sm:block mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              We coordinate personally with property owners in Jibhi, Shimla, Manali, Spiti, Tirthan Valley, Jalori Pass, Sojha, Srinagar, and Gulmarg—so you get real room photos and zero booking markups.
            </p>

            {/* Owner Highlight Card */}
            <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-saffron-500/30 bg-saffron-500/5 p-3 sm:p-4 dark:bg-white/5">
              <div className="grid size-10 sm:size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 text-white shadow-md">
                <Icon name="user" className="size-5 sm:size-6" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-saffron-600 dark:text-saffron-400">
                  Founder &amp; Owner
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-navy-900 dark:text-white truncate">{OWNER_NAME}</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  Dedicated to personal hospitality &amp; verified Himalayan stays
                </p>
              </div>
            </div>

            <ul className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
              {[
                'Transparent direct pricing',
                'Pre-screened hygienic stays',
                'Tailored to your budget',
                '24/7 WhatsApp support',
                'Road & weather updates',
                'Cottages, camps & resorts',
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-semibold text-navy-900 dark:text-white">
                  <span className="grid size-4 sm:size-5 shrink-0 place-items-center rounded-full bg-wa/15">
                    <Icon name="check" className="size-2.5 sm:size-3 text-wa" />
                  </span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-4">
              <Link to="/contact" className="btn btn-primary text-xs sm:text-sm py-2.5 sm:py-3 px-4 justify-center">
                Plan Your Stay
              </Link>
              <a href={waLink()} target="_blank" rel="noopener" className="btn btn-whatsapp text-xs sm:text-sm py-2.5 sm:py-3 px-4 justify-center">
                <Icon name="whatsapp" className="size-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regions We Cover in Detail */}
      <section className="bg-slate-50 py-8 sm:py-20 dark:bg-navy-900/40">
        <div className="container-x">
          <SectionHead
            eyebrow="Our Territorial Expertise"
            title="Every Corner of the Northern Mountains"
            id="aboutRegions"
          >
            We operate across all of Himachal Pradesh, all of Jammu &amp; Kashmir, Ladakh, and Uttarakhand.
          </SectionHead>

          <div className="mt-4 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            <div className="card p-3.5 sm:p-6 rounded-2xl">
              <span className="text-2xl sm:text-3xl">🏔️</span>
              <h3 className="mt-2 sm:mt-4 text-sm sm:text-xl font-bold leading-snug">Himachal Pradesh</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 sm:line-clamp-none">
                Jibhi, Shimla, Manali, Lahul &amp; Spiti, Tirthan Valley, Jalori Pass, Sojha, Kasol, and Dharamshala.
              </p>
            </div>
            <div className="card p-3.5 sm:p-6 rounded-2xl">
              <span className="text-2xl sm:text-3xl">🌸</span>
              <h3 className="mt-2 sm:mt-4 text-sm sm:text-xl font-bold leading-snug">Jammu &amp; Kashmir</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 sm:line-clamp-none">
                Hand-picked houseboats on Dal Lake, snow retreats in Gulmarg, pine chalets in Pahalgam, Sonamarg &amp; Katra.
              </p>
            </div>
            <div className="card p-3.5 sm:p-6 rounded-2xl">
              <span className="text-2xl sm:text-3xl">🌌</span>
              <h3 className="mt-2 sm:mt-4 text-sm sm:text-xl font-bold leading-snug">Ladakh</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 sm:line-clamp-none">
                Luxury camps and heritage hotels across Leh, Nubra Valley sand dunes, Pangong Tso, and Zanskar.
              </p>
            </div>
            <div className="card p-3.5 sm:p-6 rounded-2xl">
              <span className="text-2xl sm:text-3xl">🌲</span>
              <h3 className="mt-2 sm:mt-4 text-sm sm:text-xl font-bold leading-snug">Uttarakhand</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 sm:line-clamp-none">
                Lakeside retreats in Nainital, scenic ridges of Mussoorie, riverside sanctuaries in Rishikesh, and Auli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Credentials Banner */}
      <section className="py-6 sm:py-14">
        <div className="container-x">
          <div className="card p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-8">
            <div className="flex-1 min-w-0">
              <span className="eyebrow text-[10px] sm:text-xs">Direct Contact Details</span>
              <h3 className="mt-1.5 sm:mt-2.5 text-lg font-bold sm:text-3xl">Get in touch directly with our team</h3>
              <p className="mt-1 text-xs sm:text-base text-slate-500 dark:text-slate-400">
                Reach us anytime via email, phone, or WhatsApp for instant booking assistance.
              </p>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 max-w-3xl">
                <div className="flex items-center gap-2.5 sm:gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200/60 dark:border-white/10">
                  <span className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                    <Icon name="user" className="size-3.5 sm:size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">Owner</span>
                    <strong className="block text-xs sm:text-sm font-bold text-navy-900 dark:text-white truncate">{OWNER_NAME}</strong>
                  </div>
                </div>

                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200/60 dark:border-white/10 hover:border-saffron-400 transition"
                >
                  <span className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                    <Icon name="globe" className="size-3.5 sm:size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">Website</span>
                    <strong className="block text-xs sm:text-sm font-bold text-navy-900 dark:text-white truncate">{WEBSITE_DISPLAY}</strong>
                  </div>
                </a>

                <div className="flex items-center gap-2.5 sm:gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200/60 dark:border-white/10">
                  <span className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                    <Icon name="phone" className="size-3.5 sm:size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">Phone Call</span>
                    <div className="flex flex-col text-[11px] sm:text-sm font-bold text-navy-900 dark:text-white leading-snug">
                      <a href="tel:+918219232827" className="hover:text-saffron-600 transition truncate">+91 82192 32827</a>
                      <a href="tel:+919805576370" className="hover:text-saffron-600 transition truncate">+91 98055 76370</a>
                    </div>
                  </div>
                </div>

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2.5 sm:gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200/60 dark:border-white/10 hover:border-wa transition"
                >
                  <span className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-lg bg-wa/10 text-wa">
                    <Icon name="whatsapp" className="size-3.5 sm:size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">WhatsApp</span>
                    <strong className="block text-[11px] sm:text-sm font-bold text-navy-900 dark:text-white truncate">{WA_DISPLAY}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="col-span-2 flex items-center gap-2.5 sm:gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-200/60 dark:border-white/10 hover:border-saffron-400 transition"
                >
                  <span className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                    <Icon name="mail" className="size-3.5 sm:size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email</span>
                    <strong className="block text-xs sm:text-sm font-bold text-navy-900 dark:text-white truncate">{EMAIL}</strong>
                  </div>
                </a>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary w-full sm:w-auto justify-center text-xs sm:text-base py-3 sm:py-3.5 px-6 whitespace-nowrap self-stretch sm:self-start lg:self-center">
              Open Contact Page <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
