import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';
import { NAV, PHONE, PHONE_DISPLAY, EMAIL, INSTAGRAM_URL, FACEBOOK_URL, waLink } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    try {
      return document.documentElement.classList.contains('dark') || localStorage.getItem('jdv-theme') === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('jdv-theme', dark ? 'dark' : 'light');
    } catch {}
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-navy-900/10' : ''}`}>
      {/* Top Banner Bar - hidden on mobile to keep header clean and compact */}
      <div className={`hidden md:block bg-navy-950 text-white/80 text-[11px] transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0' : 'max-h-10'}`}>
        <div className="container-x flex items-center justify-between py-1.5">
          <span className="hidden lg:flex items-center gap-1.5 font-medium">
            <Icon name="mountain" className="size-3 text-saffron-400" />
            Himalayan Stays • Himachal, Kashmir, Ladakh &amp; Uttarakhand
          </span>
          <div className="flex gap-4 sm:gap-6 ml-auto items-center font-medium">
            <a href={`tel:${PHONE}`} id="topbarCall" className="hidden sm:flex items-center gap-1.5 hover:text-saffron-400 transition">
              <Icon name="phone" className="size-3.5 text-saffron-400" />{PHONE_DISPLAY}
            </a>
            <a href={waLink()} target="_blank" rel="noopener" id="topbarWhatsapp" className="flex items-center gap-1.5 hover:text-wa transition font-semibold">
              <Icon name="whatsapp" className="size-3.5 text-wa" />WhatsApp Us
            </a>
            <div className="flex items-center gap-2 pl-2 border-l border-white/20">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" title="Instagram @jdvtravels" className="hover:text-pink-400 transition">
                <Icon name="instagram" className="size-3.5" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" title="Facebook Page" className="hover:text-blue-400 transition">
                <Icon name="facebook" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-navy-950/95 shadow-md shadow-navy-900/5 backdrop-blur-xl py-2.5' : 'bg-white/85 dark:bg-navy-950/85 backdrop-blur-md py-3.5'} border-b border-slate-100 dark:border-white/5`}>
        <div className="container-x flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" id="brandLink" className="flex items-center gap-3 group" aria-label="JDV Travels home" onClick={() => setOpen(false)}>
            <div className="relative">
              <img src="/Assets/jdv%20logo.jpeg" alt="JDV Travels logo" className="size-11 rounded-full object-cover ring-2 ring-saffron-500/50 shadow-md transition duration-300 group-hover:scale-105" />
              <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-wa border-2 border-white dark:border-navy-950" title="Online for instant replies" />
            </div>
            <span className="leading-tight">
              <span className="block font-display text-2xl font-extrabold tracking-tight text-navy-900 dark:text-white">
                JDV <span className="bg-gradient-to-r from-saffron-500 to-amber-500 bg-clip-text text-transparent">Travels</span>
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Mountain Stays · Chalets
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Pill Bar */}
          <nav id="mainNav" aria-label="Main navigation" className="hidden lg:block">
            <div className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-100/70 p-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 shadow-inner">
              {NAV.map(([path, label]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-100/90 text-amber-900 shadow-sm dark:bg-amber-500/20 dark:text-amber-300'
                        : 'text-slate-600 hover:text-navy-950 hover:bg-white/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              id="themeToggle"
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid size-10 place-items-center rounded-full border border-slate-200/80 bg-white/80 text-navy-900 shadow-xs hover:border-saffron-400 hover:text-saffron-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-saffron-400 transition cursor-pointer"
            >
              <Icon name={dark ? 'sun' : 'moon'} className="size-4.5" />
            </button>

            <Link
              to="/contact"
              id="headerEnquireBtn"
              className="btn btn-primary btn-sm hidden sm:inline-flex shadow-sm hover:shadow-md"
            >
              <Icon name="search" className="size-3.5" /> Get Best Price
            </Link>

            <button
              id="menuToggle"
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobileNav"
              className="grid size-10 place-items-center rounded-full border border-slate-200/80 bg-white/80 text-navy-900 shadow-xs hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 lg:hidden cursor-pointer"
            >
              <Icon name={open ? 'close' : 'menu'} className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobileNav"
        className={`fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col justify-between bg-white p-6 shadow-2xl transition-transform duration-300 ease-out dark:bg-navy-950 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <img src="/Assets/jdv%20logo.jpeg" alt="Logo" className="size-9 rounded-full object-cover ring-2 ring-saffron-500/40" />
              <span className="font-display text-lg font-bold">JDV <span className="text-saffron-500">Travels</span></span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 cursor-pointer"
            >
              <Icon name="close" className="size-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="mt-6 space-y-1.5">
            {NAV.map(([path, label]) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-semibold transition ${
                      isActive
                        ? 'bg-saffron-500/10 text-saffron-600 dark:bg-saffron-500/20 dark:text-saffron-400'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="space-y-3 border-t border-slate-100 pt-6 dark:border-white/10">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary w-full py-3 text-sm shadow-md"
          >
            <Icon name="search" className="size-4" /> Get Best Hotel Price
          </Link>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <a
              href={`tel:${PHONE}`}
              className="btn btn-outline py-2.5"
            >
              <Icon name="phone" className="size-3.5" /> Call Us
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp py-2.5"
            >
              <Icon name="whatsapp" className="size-3.5" /> WhatsApp
            </a>
          </div>
          <div className="text-center pt-2">
            <a href={`mailto:${EMAIL}`} className="text-xs text-slate-500 hover:text-saffron-500 dark:text-slate-400">
              {EMAIL}
            </a>
          </div>
          <div className="flex justify-center items-center gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-pink-500 transition font-medium"
            >
              <Icon name="instagram" className="size-3.5" /> Instagram
            </a>
            <span className="text-slate-300 dark:text-white/20">•</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-blue-500 transition font-medium"
            >
              <Icon name="facebook" className="size-3.5" /> Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
