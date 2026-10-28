import { useEffect } from 'react';

export async function saveEnquiry(data) {
  try {
    const res = await fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function useReveal(pathname) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    els.forEach((el) => {
      // If already in view, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50) {
        el.classList.add('in');
      } else {
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, [pathname]);
}

export const validPhone = (p) => /^[6-9]\d{9}$/.test(p.replace(/\D/g, '').slice(-10));
