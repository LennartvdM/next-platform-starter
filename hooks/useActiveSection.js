// hooks/useActiveSection.js
'use client';
import { useEffect, useState } from 'react';

export function useActiveSection(ids = []) {
  const [active, setActive] = useState(ids[0] || null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      el && observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
