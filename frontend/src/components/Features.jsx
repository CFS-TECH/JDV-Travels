import Icon from './Icon';
import SectionHead from './SectionHead';
import { STEPS, WHY } from '../data/site';

export function WhyUs() {
  return (
    <section id="why" aria-labelledby="whyTitle" className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-24 text-white">
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-navy-500/30 blur-3xl" />
      <div className="container-x relative">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow !text-saffron-400">Why Choose Us</span>
          <h2 id="whyTitle" className="mt-4 text-3xl font-bold !text-white sm:text-4xl">Hill Stays, Made Simple</h2>
          <p className="mt-4 text-white/70">We do the searching, comparing and calling so you can focus on the holiday.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(([ic, t, d], i) => (
            <div key={t} style={{ '--d': `${(i % 3) * 0.1}s` }} className="reveal group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-saffron-500/50 hover:bg-white/10">
              <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-saffron-400 to-saffron-600 shadow-lg shadow-saffron-500/30 transition group-hover:scale-110 group-hover:rotate-6">
                <Icon name={ic} className="size-6 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-bold !text-white">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="howTitle" className="py-24">
      <div className="container-x">
        <SectionHead eyebrow="How Booking Works" title="Book Your Stay in 4 Easy Steps" id="howTitle">
          No online payment forms or confusing booking engines. Just talk to a real person.
        </SectionHead>
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-0.5 bg-gradient-to-r from-saffron-500/0 via-saffron-500/50 to-saffron-500/0 lg:block" />
          {STEPS.map(([ic, t, d], i) => (
            <div key={t} style={{ '--d': `${i * 0.1}s` }} className="reveal relative text-center">
              <div className="relative mx-auto grid size-20 place-items-center rounded-full bg-white shadow-xl ring-8 ring-saffron-500/10 dark:bg-navy-900">
                <Icon name={ic} className="size-8 text-navy-900 dark:text-saffron-400" />
                <span className="absolute -right-1 -top-1 grid size-7 place-items-center rounded-full bg-saffron-500 text-xs font-bold text-white">{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{d}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-14 text-center">
          <a href="#enquiry" id="howEnquireBtn" className="btn btn-primary btn-lg group">Start Your Enquiry <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></a>
        </div>
      </div>
    </section>
  );
}
