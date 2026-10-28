import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHead from '../components/SectionHead';
import { OWNER_NAME, PHONE, PHONE_DISPLAY, PHONE_2, PHONE_2_DISPLAY, WA_DISPLAY, EMAIL, WEBSITE_URL, WEBSITE_DISPLAY, waLink } from '../data/site';

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-28 pb-4 sm:pb-12">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-10 sm:py-16 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-saffron-500/10 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="eyebrow !text-saffron-400 text-[10px] sm:text-xs">Our Story &amp; Mission</span>
          <h1 className="mt-2 sm:mt-3 text-2.5xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tight">
            About <span className="italic font-serif bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-300 bg-clip-text text-transparent">JDV Travels</span>
          </h1>
          <p className="mx-auto mt-2 sm:mt-3 max-w-lg text-xs sm:text-base text-white/75 leading-relaxed">
            Helping travelers discover authentic mountain stays without markups or guesswork.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative pb-16 pr-10">
            <img
              src="/Assets/destinations/manali.png"
              alt="Snowy Himalayan peaks and pine forest"
              loading="lazy"
              className="h-[460px] w-full rounded-3xl object-cover shadow-2xl"
            />
            <img
              src="/Assets/destinations/jibhi.jpg"
              alt="Cozy wooden cottage in Jibhi"
              loading="lazy"
              className="absolute bottom-0 right-0 h-52 w-64 rounded-3xl border-8 border-white object-cover shadow-2xl dark:border-navy-950"
            />
            <div className="absolute left-6 top-6 flex animate-float items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur dark:bg-navy-900/95">
              <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-saffron-400 to-saffron-600">
                <Icon name="award" className="size-5 text-white" />
              </div>
              <div>
                <strong className="block text-sm text-navy-900 dark:text-white">Himalayan Specialists</strong>
                <span className="text-xs text-slate-500">Himachal, J&amp;K, Ladakh &amp; Uttarakhand</span>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ '--d': '.15s' }}>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Your Mountain Holiday Companion</h2>
            <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
              Founded and led by <strong>{OWNER_NAME}</strong>, <strong>JDV Travels</strong> was built on the belief that mountain holidays should be relaxing from the very first planning step. We saw travelers getting overwhelmed by cookie-cutter hotel listings, misleading photos, and unpredictable cancellations on large commercial booking engines.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              We decided to do things differently: direct, personal, and grounded in real local knowledge. Our team personally coordinates with independent cottage owners, heritage houseboat caretakers, and boutique resort hosts across <strong>Jibhi, Shimla, Manali, Ladakh, Lahul &amp; Spiti, Tirthan Valley, Jalori Pass, Sojha</strong>, and throughout <strong>Jammu &amp; Kashmir</strong>.
            </p>

            {/* Owner Highlight Card */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-saffron-500/30 bg-saffron-500/5 p-4 dark:bg-white/5">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 text-white shadow-md">
                <Icon name="user" className="size-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-600 dark:text-saffron-400">
                  Founder &amp; Owner
                </span>
                <h3 className="text-lg font-extrabold text-navy-900 dark:text-white">{OWNER_NAME}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dedicated to personal hospitality &amp; verified Himalayan stays
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Honest & transparent pricing',
                'Pre-screened & hygienic stays',
                'Tailored to your specific budget',
                'Direct WhatsApp support anytime',
                'Road & weather updates included',
                'Cottages, houseboats & luxury resorts',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-navy-900 dark:text-white">
                  <span className="grid size-5 place-items-center rounded-full bg-wa/15">
                    <Icon name="check" className="size-3 text-wa" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary">
                Plan Your Stay With Us
              </Link>
              <a href={waLink()} target="_blank" rel="noopener" className="btn btn-whatsapp">
                <Icon name="whatsapp" className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regions We Cover in Detail */}
      <section className="bg-slate-50 py-20 dark:bg-navy-900/40">
        <div className="container-x">
          <SectionHead
            eyebrow="Our Territorial Expertise"
            title="Every Corner of the Northern Mountains"
            id="aboutRegions"
          >
            We operate across all of Himachal Pradesh, all of Jammu &amp; Kashmir, Ladakh, and Uttarakhand.
          </SectionHead>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-6">
              <span className="text-3xl">🏔️</span>
              <h3 className="mt-4 text-xl font-bold">Himachal Pradesh</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Primary focus on Jibhi, Shimla, Manali, Lahul &amp; Spiti, Tirthan Valley, Jalori Pass, Sojha, Kasol, and Dharamshala.
              </p>
            </div>
            <div className="card p-6">
              <span className="text-3xl">🌸</span>
              <h3 className="mt-4 text-xl font-bold">Jammu &amp; Kashmir</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Hand-picked houseboats on Dal Lake, snow retreats in Gulmarg, pine chalets in Pahalgam, Sonamarg, and Katra.
              </p>
            </div>
            <div className="card p-6">
              <span className="text-3xl">🌌</span>
              <h3 className="mt-4 text-xl font-bold">Ladakh</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Luxury camps and heritage hotels across Leh, Nubra Valley sand dunes, Pangong Tso, and Zanskar.
              </p>
            </div>
            <div className="card p-6">
              <span className="text-3xl">🌲</span>
              <h3 className="mt-4 text-xl font-bold">Uttarakhand</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Lakeside retreats in Nainital, scenic ridges of Mussoorie, riverside sanctuaries in Rishikesh, and Auli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Credentials Banner */}
      <section className="py-14">
        <div className="container-x">
          <div className="card p-6 sm:p-10 border border-slate-200/80 dark:border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex-1">
              <span className="eyebrow">Direct Contact Details</span>
              <h3 className="mt-2.5 text-2xl font-bold sm:text-3xl">Get in touch directly with our team</h3>
              <p className="mt-1.5 text-sm sm:text-base text-slate-500 dark:text-slate-400">
                Reach us anytime via email, phone, or WhatsApp for instant booking assistance.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-4 py-3 border border-slate-200/60 dark:border-white/10">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                    <Icon name="user" className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Owner</span>
                    <strong className="block text-sm font-bold text-navy-900 dark:text-white truncate">{OWNER_NAME}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-4 py-3 border border-slate-200/60 dark:border-white/10">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                    <Icon name="phone" className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Phone Call</span>
                    <div className="flex flex-col text-xs sm:text-sm font-bold text-navy-900 dark:text-white leading-snug">
                      <a href={`tel:${PHONE}`} className="hover:text-saffron-600 transition">{PHONE_DISPLAY}</a>
                      <a href={`tel:${PHONE_2}`} className="hover:text-saffron-600 transition">{PHONE_2_DISPLAY}</a>
                    </div>
                  </div>
                </div>

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-4 py-3 border border-slate-200/60 dark:border-white/10 hover:border-wa transition"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-wa/10 text-wa">
                    <Icon name="whatsapp" className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">WhatsApp</span>
                    <strong className="block text-sm font-bold text-navy-900 dark:text-white">{WA_DISPLAY}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-4 py-3 border border-slate-200/60 dark:border-white/10 hover:border-saffron-400 transition sm:col-span-1 lg:col-span-2"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                    <Icon name="mail" className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email</span>
                    <strong className="block text-sm font-bold text-navy-900 dark:text-white truncate">{EMAIL}</strong>
                  </div>
                </a>

                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-4 py-3 border border-slate-200/60 dark:border-white/10 hover:border-saffron-400 transition"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400">
                    <Icon name="globe" className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Website</span>
                    <strong className="block text-sm font-bold text-navy-900 dark:text-white truncate">{WEBSITE_DISPLAY}</strong>
                  </div>
                </a>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary btn-lg whitespace-nowrap self-start lg:self-center">
              Open Contact Page <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
