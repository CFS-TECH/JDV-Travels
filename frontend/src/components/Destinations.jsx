import { useState } from 'react';
import Icon from './Icon';
import SectionHead from './SectionHead';
import { DESTINATIONS } from '../data/site';

const FILTERS = [
  ['all', 'All'],
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

export default function Destinations({ onPick }) {
  const [filter, setFilter] = useState('all');
  const list = DESTINATIONS.filter((d) => filter === 'all' || d.state === filter);

  return (
    <section id="destinations" aria-labelledby="destTitle" className="py-24">
      <div className="container-x">
        <SectionHead eyebrow="Popular Destinations" title="Where Do You Want to Stay?" id="destTitle">
          Explore hand-picked stays and boutique chalets across the Himalayas.
        </SectionHead>

        <div className="reveal mb-10 flex justify-center overflow-x-auto pb-2">
          <div role="tablist" aria-label="Filter destinations by state" className="inline-flex rounded-full bg-slate-100 p-1.5 dark:bg-white/5">
            {FILTERS.map(([k, label]) => (
              <button key={k} id={`filter-${k}`} role="tab" type="button" aria-selected={filter === k} onClick={() => setFilter(k)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all ${filter === k ? 'bg-navy-900 text-white shadow-lg dark:bg-saffron-500' : 'text-slate-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <article key={d.name} style={{ '--d': `${(i % 3) * 0.1}s` }} className="reveal group relative h-96 overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10">
              <img src={d.img} alt={d.alt} loading="lazy" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white transition duration-500 group-hover:-translate-y-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">{STATE_NAMES[d.state] || d.state}</span>
                <h3 className="mt-3 text-2xl font-bold !text-white">{d.name}</h3>
                <p className="mt-2 text-sm text-white/80">{d.text}</p>
                <button type="button" id={`dest${d.name.replace(/\s+/g, '')}`} onClick={() => onPick(d.name)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-saffron-400 hover:gap-3 transition-all cursor-pointer">
                  Check hotels <Icon name="arrow" className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
