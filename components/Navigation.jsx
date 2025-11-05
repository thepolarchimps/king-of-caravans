'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/rebel-and-the-banned', label: 'Rebel & The Banned' },
  { href: '/releases', label: 'Releases' },
  { href: '/connect', label: 'Connect' }
];

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  return (
    <nav className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
      <button
        type="button"
        className="site-nav__toggle"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      <div className="site-nav__links" id="primary-navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
