import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHead from '../components/SectionHead';
import { DESTINATIONS, waLink } from '../data/site';

const FILTERS = [
  ['all', 'All Destinations'],
  ['himachal', 'Himachal Pradesh'],
  ['kashmir', 'Jammu & Kashmir'],
  ['ladakh', 'Ladakh'],
  ['uttarakhand', 'Uttarakhand'],
];

const STATE_NAMES = {
  himachal: 'Himachal Pradesh',
  kashmir: 'Jammu & Kashmir',
  ladakh: 'Ladakh',
  uttarakhand: 'Uttarakhand',
};

// Key highlights for traveler context
const HIGHLIGHTS = {
  'Jibhi': ['Chehni Kothi', 'Jibhi Waterfall', 'Serolsar Lake Trek', 'Pine Forest Walks'],
  'Shimla': ['The Ridge & Mall Road', 'Christ Church', 'Jakhoo Temple', 'Kufri Snow View'],
  'Manali': ['Solang Valley', 'Old Manali Cafes', 'Rohtang Pass route', 'Hadimba Temple'],
  'Ladakh': ['Pangong Tso Lake', 'Nubra Valley Dunes', 'Khardung La Pass', 'Thiksey Monastery'],
  'Lahul & Spiti': ['Key Gompa', 'Chandratal Lake', 'Hikkim Highest Post Office', 'Pin Valley'],
  'Tirthan Valley': ['Great Himalayan National Park', 'Trout Fishing', 'Chhoie Waterfall', 'River Treks'],
  'Jalori Pass': ['10,800 ft Mountain Ridge', 'Serolsar Lake Trail', 'Raghupur Fort', '360° Alpine View'],
  'Sojha': ['Seraj Valley Sunset', 'Shoja Nature Path', 'Misty Pine Retreats', 'Peaceful Homestays'],
  'Srinagar': ['Dal Lake Shikara', 'Luxury Houseboats', 'Mughal Gardens', 'Old City Heritage'],
  'Gulmarg': ['Gulmarg Gondola Ride', 'Apharwat Peak', 'Alpine Skiing', 'Strawberry Valley'],
  'Dharamshala': ['McLeod Ganj', 'Dalai Lama Temple', 'Bhagsunag Waterfall', 'Triund Trek'],
  'Nainital': ['Naini Lake Boating', 'Mall Road', 'Naina Peak', 'Snow View Point'],
};

export default function DestinationsPage({ setDestination, notify }) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      const matchState = filter === 'all' || d.state === filter;
      const matchQuery =
        !query.trim() ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.text.toLowerCase().includes(query.toLowerCase()) ||
        (HIGHLIGHTS[d.name] && HIGHLIGHTS[d.name].some((h) => h.toLowerCase().includes(query.toLowerCase())));
      return matchState && matchQuery;
    });
  }, [filter, query]);

  const handleSelect = (name) => {
    setDestination(name);
    notify(`${name} selected! Plan your stay details.`);
    navigate(`/contact?destination=${encodeURIComponent(name)}`);
  };

  return (
    <div className="pt-20 sm:pt-28 pb-4 sm:pb-12">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-8 sm:py-16 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-saffron-500/10 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="eyebrow !text-saffron-400 text-[10px] sm:text-xs">Curated Mountain Escapes</span>
          <h1 className="mt-1.5 sm:mt-3 text-2xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tight">
            Explore the <span className="italic font-serif bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-300 bg-clip-text text-transparent">Himalayas</span>
          </h1>
          {/* Subtitle hidden on mobile to avoid excess text */}
          <p className="hidden sm:block mx-auto mt-3 max-w-lg text-sm sm:text-base text-white/75 leading-relaxed">
            Hand-picked boutique stays, riverside chalets &amp; scenic homestays across Himachal, Kashmir &amp; Ladakh.
          </p>

          {/* Search bar inside header */}
          <div className="mx-auto mt-4 sm:mt-7 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destination or valley (e.g. Jibhi, Spiti)..."
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

      {/* Filter Tabs */}
      <div className="container-x mt-6 sm:mt-10">
        <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar pb-2 px-1">
          <div role="tablist" aria-label="Filter destinations by region" className="inline-flex rounded-full bg-slate-100 p-1 sm:p-1.5 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shrink-0">
            {FILTERS.map(([k, label]) => (
              <button
                key={k}
                id={`filter-${k}`}
                role="tab"
                type="button"
                aria-selected={filter === k}
                onClick={() => setFilter(k)}
                className={`whitespace-nowrap rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === k
                    ? 'bg-navy-900 text-white shadow-md dark:bg-saffron-500'
                    : 'text-slate-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>Showing <strong>{filtered.length}</strong> destination{filtered.length !== 1 ? 's' : ''}</span>
          {query && <span>Filter: &ldquo;{query}&rdquo;</span>}
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-4 sm:mt-8 grid gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d, i) => (
            <article
              key={d.name}
              style={{ '--d': `${(i % 3) * 0.1}s` }}
              className="card reveal group flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl rounded-2xl sm:rounded-3xl"
            >
              <div className="relative h-44 sm:h-64 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.alt}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <span className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-navy-900/80 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-white backdrop-blur">
                  {STATE_NAMES[d.state] || d.state}
                </span>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-4">
                  <h2 className="text-lg sm:text-2xl font-bold !text-white">{d.name}</h2>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-6">
                <div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2 sm:line-clamp-none">
                    {d.text}
                  </p>

                  {/* Highlights: Hidden on mobile to avoid content overload */}
                  {HIGHLIGHTS[d.name] && (
                    <div className="hidden sm:block mt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Key Highlights</span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {HIGHLIGHTS[d.name].slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3.5 sm:mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 sm:pt-4 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => handleSelect(d.name)}
                    className="btn btn-primary flex-1 sm:flex-initial py-2 sm:py-2.5 px-3 text-xs sm:text-sm font-semibold justify-center"
                  >
                    View Stays
                  </button>
                  <a
                    href={waLink(`Hi JDV Travels, I am planning a trip to ${d.name} (${STATE_NAMES[d.state]}). Please share stay options and rates.`)}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-whatsapp flex-1 sm:flex-initial py-2 sm:py-2.5 px-3 text-xs sm:text-sm font-semibold justify-center"
                  >
                    <Icon name="whatsapp" className="size-3.5 sm:size-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="my-16 text-center">
            <p className="text-lg text-slate-500">No destinations found matching &ldquo;{query}&rdquo;.</p>
            <button
              type="button"
              onClick={() => { setFilter('all'); setQuery(''); }}
              className="mt-4 btn btn-outline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Mobile: Minimal 1-line link. Desktop: Full callout banner */}
        <div className="sm:hidden mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Want an offbeat Himalayan spot?{' '}
          <a href={waLink("Hi JDV Travels, I'm looking for an offbeat Himalayan destination not on the list.")} target="_blank" rel="noopener" className="font-bold text-saffron-600 dark:text-saffron-400 hover:underline">
            Chat with expert &rarr;
          </a>
        </div>

        {/* Custom Enquiry Callout - Desktop only */}
        <div className="hidden sm:block mt-16 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 p-8 text-center text-white sm:p-12">
          <h3 className="text-2xl font-bold !text-white sm:text-3xl">Want an offbeat Himalayan destination?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/80 text-sm">
            Looking for secluded hamlets around Jibhi, Shoja, Zanskar, Sangla or Gurez? We customize stays anywhere across Himachal and Jammu &amp; Kashmir.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => handleSelect('Custom Himalayan Stay')}
              className="btn btn-primary"
            >
              Enquire Custom Destination
            </button>
            <a
              href={waLink("Hi JDV Travels, I'm looking for an offbeat Himalayan destination not on the list.")}
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp"
            >
              <Icon name="whatsapp" className="size-4" /> Chat with Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
