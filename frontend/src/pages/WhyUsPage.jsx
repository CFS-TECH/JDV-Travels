import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHead from '../components/SectionHead';
import { WHY, PHONE, PHONE_DISPLAY, waLink } from '../data/site';

const ADVANTAGES = [
  {
    icon: 'shield',
    title: 'Verified Stays & Honest Quality',
    desc: 'We personally visit or vet properties for hygienic bedding, clean washrooms, authentic views, and warm host hospitality. No unpleasant surprises on arrival.',
  },
  {
    icon: 'tag',
    title: 'Direct Rates, Zero Markups',
    desc: 'Unlike automated booking engines that add heavy commissions and surprise service charges, we negotiate transparent direct rates with hoteliers.',
  },
  {
    icon: 'compass',
    title: 'Deep Himalayan Route Expertise',
    desc: 'Traveling through high passes like Jalori Pass, Rohtang, or Khardung La? We know real-time road conditions, weather patterns, and mountain logistics.',
  },
  {
    icon: 'whatsapp',
    title: 'Instant WhatsApp Assistance',
    desc: 'No endless IVR calls or robotic chat widgets. Get real human answers, genuine room photos, and price quotes in minutes directly on your phone.',
  },
  {
    icon: 'wallet',
    title: 'Budget to Ultra-Luxury',
    desc: 'From riverside backpacker camps in Tirthan and cozy wooden chalets in Jibhi to luxury houseboats in Srinagar and premium resorts in Manali.',
  },
  {
    icon: 'headset',
    title: '24/7 On-Trip Concierge',
    desc: 'From the moment you enquire until you return home, your dedicated travel coordinator is one call or text away to assist with check-in or route updates.',
  },
];

const COMPARISON = [
  { feature: 'Direct Property Rates', jdv: 'Yes (Direct host pricing)', generic: 'No (High commission markups)' },
  { feature: 'Real Photos & Live Video Updates', jdv: 'Yes (Sent directly on WhatsApp)', generic: 'Only stock / outdated photos' },
  { feature: 'Mountain Road & Pass Guidance', jdv: 'Yes (Daily Jalori, Rohtang, Zojila updates)', generic: 'None' },
  { feature: 'Customer Support', jdv: 'Dedicated real person on WhatsApp/Call', generic: 'Automated chatbots & slow email tickets' },
  { feature: 'Offbeat Stays (Sojha, Jibhi, Spiti)', jdv: 'Deep hand-picked network', generic: 'Limited or unverified listings' },
  { feature: 'Flexibility for Group & Custom Stays', jdv: '100% Customized', generic: 'Rigid predefined booking packages' },
];

export default function WhyUsPage() {
  return (
    <div className="pt-20 sm:pt-28 pb-4 sm:pb-12">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-10 sm:py-16 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-saffron-500/10 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="eyebrow !text-saffron-400 text-[10px] sm:text-xs">The JDV Advantage</span>
          <h1 className="mt-2 sm:mt-3 text-2.5xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tight">
            Why Choose <span className="italic font-serif bg-gradient-to-r from-amber-200 via-saffron-400 to-amber-300 bg-clip-text text-transparent">JDV Travels</span>
          </h1>
          <p className="mx-auto mt-2 sm:mt-3 max-w-lg text-xs sm:text-base text-white/75 leading-relaxed">
            Direct host partnerships, verified stays &amp; genuine local mountain guidance.
          </p>
        </div>
      </section>

      {/* Core Advantages - Swipeable Row on Mobile, Grid on Desktop */}
      <section className="py-8 sm:py-20">
        <div className="container-x">
          <div className="reveal mx-auto mb-6 sm:mb-12 max-w-2xl text-center">
            <span className="eyebrow text-[10px] sm:text-xs">Our Commitments</span>
            <h2 id="whyCommitments" className="mt-1.5 sm:mt-4 text-xl sm:text-4xl font-bold">
              What Makes Our Himalayan Service Different
            </h2>
            <p className="hidden sm:block mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Carefully curated stays, transparent pricing, and genuine human support for your mountain getaway.
            </p>
          </div>

          {/* Mobile: 1 Row Horizontal Swipe Reel. Desktop: 3-Col Grid */}
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {ADVANTAGES.map((adv, i) => (
              <div
                key={adv.title}
                style={{ '--d': `${(i % 3) * 0.1}s` }}
                className="card reveal flex flex-col justify-between w-[75vw] max-w-[270px] shrink-0 snap-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:max-w-none"
              >
                <div>
                  <div className="grid size-10 sm:size-14 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-saffron-400 to-saffron-600 shadow-md shadow-saffron-500/25">
                    <Icon name={adv.icon} className="size-4 sm:size-6 text-white" />
                  </div>
                  <h3 className="mt-3 sm:mt-6 text-sm sm:text-xl font-bold text-navy-900 dark:text-white leading-snug">
                    {adv.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3 sm:line-clamp-none">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - Mobile Cards & Desktop Table */}
      <section className="bg-slate-50 py-8 sm:py-20 dark:bg-navy-900/40">
        <div className="container-x">
          <div className="mx-auto mb-6 sm:mb-12 max-w-2xl text-center">
            <span className="eyebrow text-[10px] sm:text-xs">Direct Comparison</span>
            <h2 className="mt-1.5 sm:mt-4 text-xl sm:text-4xl font-bold">JDV Travels vs Generic Portals</h2>
            <p className="hidden sm:block mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              See why booking through mountain specialists gives you better value and peace of mind.
            </p>
          </div>

          {/* Mobile View: 100% Responsive Comparison Cards (No Cut-off Text) */}
          <div className="md:hidden space-y-3">
            {COMPARISON.map((row) => (
              <div
                key={row.feature}
                className="card p-3.5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-navy-900 shadow-xs"
              >
                <div className="font-bold text-xs text-navy-900 dark:text-white mb-2">
                  {row.feature}
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  {/* JDV Advantage */}
                  <div className="rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 p-2.5 border border-emerald-500/20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                      JDV Travels
                    </span>
                    <div className="font-semibold text-emerald-700 dark:text-emerald-300 flex items-start gap-1 leading-snug">
                      <Icon name="check" className="size-3 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{row.jdv}</span>
                    </div>
                  </div>

                  {/* Generic Apps */}
                  <div className="rounded-xl bg-slate-100 dark:bg-white/5 p-2.5 border border-slate-200/60 dark:border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Generic Apps
                    </span>
                    <div className="text-slate-500 dark:text-slate-400 flex items-start gap-1 leading-snug">
                      <Icon name="close" className="size-3 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.generic}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet View: Full Table */}
          <div className="hidden md:block overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-navy-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-100/70 text-xs font-bold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <tr>
                  <th className="px-6 py-4">Feature / Service</th>
                  <th className="px-6 py-4 text-saffron-600 dark:text-saffron-400">JDV Travels</th>
                  <th className="px-6 py-4 text-slate-500">Generic Online Booking Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="transition hover:bg-slate-50/50 dark:hover:bg-white/5">
                    <td className="px-6 py-4 font-semibold text-navy-900 dark:text-white">{row.feature}</td>
                    <td className="px-6 py-4 font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                      <Icon name="check" className="size-4 shrink-0" />
                      {row.jdv}
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to action - Desktop only, hidden on mobile to avoid double banner with footer */}
      <section className="hidden sm:block py-16">
        <div className="container-x text-center">
          <div className="rounded-3xl bg-gradient-to-r from-saffron-500 to-saffron-600 p-8 text-white shadow-xl shadow-saffron-500/20 sm:p-14">
            <h2 className="text-3xl font-bold !text-white sm:text-4xl">Ready to experience mountain hospitality?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Tell us your preferred destination — whether it is Jibhi, Shimla, Manali, Ladakh, Spiti, Tirthan, or Kashmir. We will find you stays that match your taste and budget.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-navy-900 hover:bg-slate-100 btn-lg font-bold">
                Get Best Hotel Price
              </Link>
              <a
                href={waLink("Hi JDV Travels, I'd like help planning my Himalayan stay.")}
                target="_blank"
                rel="noopener"
                className="btn bg-navy-950 text-white hover:bg-navy-900 btn-lg font-bold"
              >
                <Icon name="whatsapp" className="size-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
