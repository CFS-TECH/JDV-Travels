import Icon from './Icon';
import SectionHead from './SectionHead';
import { HOTELS, waLink } from '../data/site';

export default function Hotels() {
  return (
    <section id="hotels" aria-labelledby="hotelsTitle" className="bg-slate-50 py-24 dark:bg-navy-900/40">
      <div className="container-x">
        <SectionHead eyebrow="Featured Hotels" title="Hand-Picked Stays We Love" id="hotelsTitle">
          A few popular stays our guests enjoy. Ask us for live availability and the best price for your dates.
        </SectionHead>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOTELS.map((h, i) => (
            <article key={h.name} style={{ '--d': `${i * 0.1}s` }} className="reveal card group overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-52 overflow-hidden">
                <img src={h.img} alt={`${h.name} in ${h.loc}`} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur"><Icon name={h.tag[0]} className="size-3.5 text-saffron-500" />{h.tag[1]}</span>
                <span className="absolute bottom-3 right-3 rounded-full bg-navy-900/80 px-3 py-1 text-xs text-white backdrop-blur">{h.type}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><Icon name="pin" className="size-3.5" />{h.loc}</div>
                <h3 className="mt-2 text-lg font-bold">{h.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {h.amenities.map(([ic, t]) => (
                    <li key={t} className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs dark:bg-white/5"><Icon name={ic} className="size-3" />{t}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10">
                  <span className="text-xs text-slate-500">Price<strong className="block text-sm text-navy-900 dark:text-white">On request</strong></span>
                  <a id={`hotelEnquire${i + 1}`} target="_blank" rel="noopener" className="btn btn-primary btn-sm"
                    href={waLink(`Hi JDV Travels, I'm interested in ${h.name}, ${h.loc.split(',')[0]}. Please share availability and the best price.`)}>Enquire</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a href="#enquiry" id="hotelsMoreBtn" className="btn btn-outline btn-lg group">Looking for something else? Tell us your budget <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></a>
        </div>
      </div>
    </section>
  );
}
