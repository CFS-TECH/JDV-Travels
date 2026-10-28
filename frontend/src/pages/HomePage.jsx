import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import QuickEnquiry from '../components/QuickEnquiry';
import Icon from '../components/Icon';
import SectionHead from '../components/SectionHead';
import { DESTINATIONS, HOTELS, WHY, STEPS, waLink, PHONE, PHONE_DISPLAY, EMAIL } from '../data/site';

const STATS = [
  { val: '15,000+', label: 'Delighted Guests', icon: 'users', sub: 'Across Himachal & Kashmir' },
  { val: '120+', label: 'Hand-Picked Stays', icon: 'bed', sub: 'Cottages, chalets & resorts' },
  { val: '100%', label: 'Direct Rates', icon: 'tag', sub: 'Zero commission markups' },
  { val: '4.9 ★', label: 'Average Rating', icon: 'award', sub: 'Verified Himalayan reviews' },
];

const TESTIMONIALS = [
  {
    name: 'Pooja & Vikram Sharma',
    trip: 'Family Trip to Jibhi & Tirthan Valley',
    text: 'JDV Travels arranged a wooden riverside chalet in Jibhi that was simply magical! Waking up to the sound of the stream and birds, with bonfire and homemade trout dinner. Best trip ever.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    trip: 'Friends Trek to Spiti Valley & Chandratal',
    text: 'Finding decent stays in Kaza and Spiti can be tricky, but JDV Travels gave us live room photos and confirmed cozy homestays with heaters. Seamless coordination even with limited network!',
    rating: 5,
  },
  {
    name: 'Rohit & Neha Kapoor',
    trip: 'Honeymoon in Srinagar & Gulmarg',
    text: 'Our Dal Lake houseboat was straight out of a fairy tale! Intricate wood carvings, warm hospitality, and a romantic sunset shikara ride. JDV Travels took care of every little detail.',
    rating: 5,
  },
];

export default function HomePage({ destination, setDestination, notify }) {
  const navigate = useNavigate();

  const handlePick = (name) => {
    setDestination(name);
    notify(`${name} selected. Let's find your dates!`);
    navigate(`/contact?destination=${encodeURIComponent(name)}`);
  };

  const featuredDestinations = DESTINATIONS.slice(0, 8);
  const featuredHotels = HOTELS.slice(0, 4);

  return (
    <>
      <Hero />
      <QuickEnquiry destination={destination} setDestination={setDestination} notify={notify} />

      {/* Stats Counter Bar - Single Row for all screens */}
      <section className="py-4 sm:py-10 bg-slate-100/70 dark:bg-navy-950/80 border-y border-slate-200/60 dark:border-white/5">
        <div className="container-x">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-6 w-full max-w-5xl mx-auto">
            {STATS.map((s, idx) => (
              <div
                key={s.label}
                style={{ '--d': `${idx * 0.08}s` }}
                className="reveal card flex flex-col items-center justify-center p-2 sm:p-6 text-center border border-slate-200/70 dark:border-white/10 shadow-xs hover:shadow-md transition-all duration-300 min-w-0"
              >
                <span className="grid size-6 sm:size-9 place-items-center rounded-full bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 mb-1 sm:mb-2 shrink-0">
                  <Icon name={s.icon} className="size-3 sm:size-4.5" />
                </span>
                <span className="font-display text-xs sm:text-3xl lg:text-4xl font-extrabold text-navy-900 dark:text-white leading-tight truncate max-w-full">
                  {s.val}
                </span>
                <strong className="block mt-0.5 sm:mt-1 text-[8px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider text-saffron-600 dark:text-saffron-400 leading-tight">
                  {s.label}
                </strong>
                <span className="hidden sm:block mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Focus Destinations */}
      <section className="py-8 sm:py-20">
        <div className="container-x">
          <div className="flex items-center justify-between gap-3 mb-4 sm:mb-10">
            <div>
              <span className="eyebrow text-[10px] sm:text-xs">Prime Mountain Focus</span>
              <h2 className="mt-1 sm:mt-2 text-xl sm:text-4xl font-bold tracking-tight">Featured Himalayan Stays</h2>
              <p className="hidden sm:block mt-1 text-slate-600 dark:text-slate-400 max-w-xl text-xs sm:text-sm">
                Authentic boutique chalets and mountain stays across Himachal, Kashmir &amp; Ladakh.
              </p>
            </div>
            <Link
              to="/destinations"
              className="text-xs sm:text-sm font-bold text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 inline-flex items-center gap-1 shrink-0 py-1.5 px-3 rounded-full bg-saffron-500/10 dark:bg-saffron-400/10 sm:bg-transparent"
            >
              <span>View All</span> <Icon name="arrow" className="size-3.5" />
            </Link>
          </div>

          {/* Swipeable on mobile, Grid on tablet & desktop */}
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {featuredDestinations.map((d, i) => (
              <article
                key={d.name}
                style={{ '--d': `${(i % 4) * 0.08}s` }}
                className="reveal group relative w-[75vw] max-w-[270px] sm:w-auto h-72 sm:h-96 shrink-0 snap-start overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg shadow-navy-950/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={d.img}
                  alt={d.alt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white transition duration-500 group-hover:-translate-y-1">
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold backdrop-blur-md capitalize">
                    {d.state === 'himachal' ? 'Himachal Pradesh' : d.state === 'kashmir' ? 'Jammu & Kashmir' : d.state}
                  </span>
                  <h3 className="mt-2 sm:mt-3 text-lg sm:text-2xl font-bold !text-white">{d.name}</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">{d.text}</p>
                  <button
                    type="button"
                    onClick={() => handlePick(d.name)}
                    className="mt-2.5 sm:mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-saffron-400 hover:gap-2.5 transition-all cursor-pointer"
                  >
                    Check Stays &amp; Prices <Icon name="arrow" className="size-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="bg-slate-50 py-8 sm:py-20 dark:bg-navy-900/40 border-t border-slate-100 dark:border-white/5">
        <div className="container-x">
          <div className="flex items-center justify-between gap-3 mb-4 sm:mb-10">
            <div>
              <span className="eyebrow text-[10px] sm:text-xs">Hand-Picked Stays</span>
              <h2 className="mt-1 sm:mt-2 text-xl sm:text-4xl font-bold tracking-tight">Popular Cottages &amp; Resorts</h2>
              <p className="hidden sm:block mt-2 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
                Riverside wooden chalets in Jibhi &amp; Tirthan, snow retreats in Manali &amp; Sojha, and luxury houseboats in Kashmir.
              </p>
            </div>
            <Link
              to="/hotels"
              className="text-xs sm:text-sm font-bold text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 inline-flex items-center gap-1 shrink-0 py-1.5 px-3 rounded-full bg-saffron-500/10 dark:bg-saffron-400/10 sm:bg-transparent"
            >
              <span>View All</span> <Icon name="arrow" className="size-3.5" />
            </Link>
          </div>

          {/* Swipeable on mobile, Grid on tablet & desktop */}
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {featuredHotels.map((h, i) => (
              <article
                key={h.name}
                style={{ '--d': `${i * 0.1}s` }}
                className="reveal card group flex flex-col justify-between w-[75vw] max-w-[270px] sm:w-auto shrink-0 snap-start overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div>
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={h.img}
                      alt={`${h.name} in ${h.loc}`}
                      loading="lazy"
                      className="size-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-navy-900 shadow-md backdrop-blur">
                      <Icon name={h.tag[0]} className="size-3 text-saffron-500" />{h.tag[1]}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-navy-950/80 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-white backdrop-blur">
                      {h.type}
                    </span>
                  </div>

                  <div className="p-3.5 sm:p-5">
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <Icon name="pin" className="size-3 sm:size-3.5 text-saffron-500" />
                      {h.loc}
                    </div>
                    <h3 className="mt-1 text-sm sm:text-lg font-bold truncate">{h.name}</h3>
                    <ul className="mt-2.5 flex flex-wrap gap-1">
                      {h.amenities.map(([ic, t]) => (
                        <li key={t} className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium dark:bg-white/5">
                          <Icon name={ic} className="size-2.5 sm:size-3 text-navy-900 dark:text-saffron-400" />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3.5 sm:p-5 pt-0">
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 dark:border-white/10">
                    <span className="text-[11px] text-slate-500">Rate<strong className="block text-xs sm:text-sm font-bold text-navy-900 dark:text-white">Direct Quote</strong></span>
                    <a
                      target="_blank"
                      rel="noopener"
                      className="btn btn-primary btn-sm text-[11px] sm:text-xs py-1.5 px-3"
                      href={waLink(`Hi JDV Travels, I want to book ${h.name} (${h.loc}). Please share current availability and best price.`)}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Teaser - Desktop full section, Mobile minimal trust strip */}
      <div className="sm:hidden py-3 border-y border-slate-200/60 dark:border-white/5 bg-slate-50 dark:bg-navy-950/40">
        <div className="container-x">
          <div className="grid grid-cols-3 gap-2 text-center text-navy-900 dark:text-white">
            <div className="flex flex-col items-center">
              <span className="text-saffron-500 text-base">🛡️</span>
              <span className="text-[10px] font-bold mt-0.5">Verified Stays</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-saffron-500 text-base">🏷️</span>
              <span className="text-[10px] font-bold mt-0.5">Direct Deals</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-saffron-500 text-base">💬</span>
              <span className="text-[10px] font-bold mt-0.5">Local Expert</span>
            </div>
          </div>
        </div>
      </div>

      <section className="hidden sm:block relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-20 text-white">
        <div className="container-x relative">
          <div className="reveal mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow !text-saffron-400 text-xs">The JDV Promise</span>
            <h2 className="mt-3 text-4xl font-bold !text-white">Himalayan Stays Made Effortless</h2>
            <p className="mt-3 text-white/75 text-base max-w-lg mx-auto">
              From verified local hosts to transparent direct deals without booking fees, discover the difference.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.slice(0, 3).map(([ic, t, d], i) => (
              <div
                key={t}
                style={{ '--d': `${i * 0.1}s` }}
                className="reveal group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-saffron-500/50 hover:bg-white/10"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-saffron-400 to-saffron-600 shadow-md shadow-saffron-500/30 transition group-hover:scale-110">
                  <Icon name={ic} className="size-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold !text-white">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/why-us" className="btn btn-outline-light text-base py-3 px-6 group">
              Why Travelers Choose Us <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Traveler Testimonials - Desktop full grid, Mobile clean single quote */}
      <section className="py-6 sm:py-20">
        <div className="container-x">
          <SectionHead
            eyebrow="Guest Experience"
            title="Stories from the Himalayas"
            id="testimonialsTitle"
          >
            Read how travelers experienced their dream vacations in Jibhi, Spiti, Tirthan, and Kashmir with JDV Travels.
          </SectionHead>

          {/* Mobile: 1 clean lightweight card */}
          <div className="sm:hidden">
            <div className="card p-4 rounded-xl border border-slate-200/80 dark:border-white/10 text-center shadow-xs">
              <div className="flex justify-center gap-1 text-saffron-500 text-xs mb-1.5">
                ★★★★★
              </div>
              <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed">
                &ldquo;{TESTIMONIALS[0].text}&rdquo;
              </p>
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-white/10 text-[11px] font-bold text-navy-900 dark:text-white">
                {TESTIMONIALS[0].name} • <span className="text-saffron-600 dark:text-saffron-400 font-normal">{TESTIMONIALS[0].trip}</span>
              </div>
            </div>
          </div>

          {/* Tablet & Desktop: 3 cards */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.name}
                style={{ '--d': `${idx * 0.1}s` }}
                className="card reveal flex flex-col justify-between p-6 sm:p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl rounded-3xl"
              >
                <div>
                  <div className="flex gap-1 text-saffron-500 mb-3 sm:mb-4 text-sm">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed italic text-slate-600 dark:text-slate-300">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/10">
                  <strong className="block text-sm font-bold text-navy-900 dark:text-white">{t.name}</strong>
                  <span className="text-xs text-saffron-600 dark:text-saffron-400 font-semibold">{t.trip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Banner - Hidden on mobile to prevent clutter with footer */}
      <section className="hidden md:block pb-24">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 p-14 text-white shadow-xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -bottom-10 size-60 rounded-full bg-saffron-500/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="eyebrow !text-saffron-400 mb-3 text-xs">Direct Human Assistance</span>
              <h2 className="text-4xl font-extrabold !text-white leading-tight">
                Need help choosing the right mountain valley?
              </h2>
              <p className="mt-3 text-white/75 text-base leading-relaxed">
                Connect directly with our hill travel coordinators via WhatsApp or email for genuine advice on weather, roads, and cozy chalets.
              </p>
              <div className="mt-8 flex flex-row gap-3">
                <Link to="/contact" className="btn btn-primary text-sm py-3.5 px-6">
                  Enquire Now
                </Link>
                <a href={waLink()} target="_blank" rel="noopener" className="btn btn-whatsapp text-sm py-3.5 px-6">
                  <Icon name="whatsapp" className="size-5" /> WhatsApp
                </a>
                <a href={`mailto:${EMAIL}`} className="btn btn-outline-light text-sm py-3.5 px-6">
                  <Icon name="mail" className="size-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
