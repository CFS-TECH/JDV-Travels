import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { HOTELS, waLink } from '../data/site';

const CATEGORIES = [
  'All Stays',
  'Boutique Wooden Cottage',
  'Mountain Chalet',
  'Valley Homestay',
  'Alpine Stay',
  'Luxury Mountain Stay',
  'Luxury Houseboat',
  'Mountain Lodge',
  'Boutique Resort',
];

export default function HotelsPage({ setDestination, notify }) {
  const [selectedCat, setSelectedCat] = useState('All Stays');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredHotels = useMemo(() => {
    return HOTELS.filter((h) => {
      const matchCat = selectedCat === 'All Stays' || h.type === selectedCat;
      const matchQuery =
        !query.trim() ||
        h.name.toLowerCase().includes(query.toLowerCase()) ||
        h.loc.toLowerCase().includes(query.toLowerCase()) ||
        h.type.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCat, query]);

  const handleBookStay = (hotel) => {
    const locDest = hotel.loc.split(',')[0].trim();
    setDestination(locDest);
    notify(`Selected ${hotel.name}. Fill your dates for availability!`);
    navigate(`/contact?destination=${encodeURIComponent(locDest)}&stay=${encodeURIComponent(hotel.name)}`);
  };

  return (
    <div className="pt-20 sm:pt-28 pb-4 sm:pb-12">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-8 sm:py-16 text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-saffron-500/10 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="eyebrow !text-saffron-400 text-[10px] sm:text-xs">Curated Accommodations</span>
          <h1 className="mt-1.5 sm:mt-3 text-2.5xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tight">
            Himalayan Hotels &amp; <span className="italic font-serif bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-300 bg-clip-text text-transparent">Cottages</span>
          </h1>
          {/* Subtitle hidden on mobile to avoid content overload */}
          <p className="hidden sm:block mx-auto mt-3 max-w-lg text-sm sm:text-base text-white/75 leading-relaxed">
            Verified riverside wooden chalets, boutique mountain resorts &amp; heritage stays at direct rates.
          </p>

          <div className="mx-auto mt-4 sm:mt-7 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search stay by name or place (e.g. Jibhi Chalet)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 sm:py-3 pl-9 sm:pl-11 text-xs sm:text-sm text-white placeholder-white/50 backdrop-blur-md outline-none transition focus:border-saffron-400 focus:bg-white/15"
              />
              <Icon name="search" className="absolute left-3 top-2 sm:top-3 size-3.5 sm:size-4 text-white/50" />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-2 sm:top-3 text-xs font-semibold text-white/70 hover:text-white cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <div className="container-x mt-6 sm:mt-10">
        <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar pb-2 px-1">
          <div role="tablist" aria-label="Filter stays by type" className="inline-flex rounded-full bg-slate-100 p-1 sm:p-1.5 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCat === cat}
                onClick={() => setSelectedCat(cat)}
                className={`whitespace-nowrap rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-navy-900 text-white shadow-md dark:bg-saffron-500'
                    : 'text-slate-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>Showing <strong>{filteredHotels.length}</strong> stays</span>
          <span className="hidden sm:inline">Direct host rates • Zero booking fee</span>
        </div>

        {/* Hotels Grid */}
        <div className="mt-4 sm:mt-8 grid gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHotels.map((h, i) => (
            <article
              key={h.name}
              style={{ '--d': `${(i % 3) * 0.1}s` }}
              className="card reveal group flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl rounded-2xl sm:rounded-3xl"
            >
              <div className="relative h-44 sm:h-64 overflow-hidden">
                <img
                  src={h.img}
                  alt={`${h.name} in ${h.loc}`}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 sm:left-4 sm:top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-navy-900 shadow-md backdrop-blur dark:bg-navy-900/95 dark:text-white">
                  <Icon name={h.tag[0]} className="size-3 sm:size-3.5 text-saffron-500" />
                  {h.tag[1]}
                </span>
                <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-full bg-navy-900/85 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white backdrop-blur">
                  {h.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Icon name="pin" className="size-3 sm:size-3.5 text-saffron-500" />
                    {h.loc}
                  </div>
                  <h2 className="mt-1 sm:mt-2 text-base sm:text-xl font-bold">{h.name}</h2>

                  {/* Amenities: Hidden on mobile to keep card ultra-compact */}
                  <div className="hidden sm:block mt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Included Amenities</span>
                    <ul className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                      {h.amenities.slice(0, 3).map(([ic, t]) => (
                        <li
                          key={t}
                          className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium dark:bg-white/5"
                        >
                          <Icon name={ic} className="size-3.5 text-navy-900 dark:text-saffron-400" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-3.5 sm:mt-6 border-t border-slate-100 pt-3 sm:pt-4 dark:border-white/10">
                  <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                    <div>
                      <span className="text-[10px] sm:text-xs text-slate-400">Pricing</span>
                      <strong className="block text-xs sm:text-sm font-bold text-navy-900 dark:text-white">Best Rate Guarantee</strong>
                    </div>
                    <span className="rounded-md bg-wa/10 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-wa">Instant Quote</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleBookStay(h)}
                      className="btn btn-primary flex-1 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold justify-center"
                    >
                      Enquire Stay
                    </button>
                    <a
                      target="_blank"
                      rel="noopener"
                      className="btn btn-whatsapp py-2 sm:py-2.5 px-3 text-xs sm:text-sm font-semibold justify-center"
                      href={waLink(`Hi JDV Travels, I want to book ${h.name} (${h.loc}). Please share available rooms and best rate.`)}
                      title="Enquire on WhatsApp"
                    >
                      <Icon name="whatsapp" className="size-3.5 sm:size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: Minimal 1-line help link. Desktop: Full callout banner */}
        <div className="sm:hidden mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Looking for another property?{' '}
          <a href={waLink('Hi JDV Travels, I have a specific hotel/villa in mind. Can you check availability and rates?')} target="_blank" rel="noopener" className="font-bold text-saffron-600 dark:text-saffron-400 hover:underline">
            Ask us on WhatsApp &rarr;
          </a>
        </div>

        {/* Custom Request Banner - Desktop only */}
        <div className="hidden sm:block mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-white/10 dark:bg-navy-900/40 sm:p-12">
          <h3 className="text-2xl font-bold">Have a specific hotel or villa in mind?</h3>
          <p className="mx-auto mt-2 max-w-xl text-slate-600 dark:text-slate-400 text-sm">
            Send us the property name or your preferred locality anywhere across Himachal, Kashmir or Ladakh. We verify direct availability and negotiate rates on your behalf.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setDestination('Himachal / Kashmir');
                navigate('/contact');
              }}
              className="btn btn-primary"
            >
              Request Custom Property
            </button>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-whatsapp">
              <Icon name="whatsapp" className="size-4" /> Chat with Stay Planner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
