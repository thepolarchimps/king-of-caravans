'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/rebel-and-the-banned', label: 'Rebel & The Banned' },
  { href: '/releases', label: 'Releases' },
  { href: '/connect', label: 'Connect' }
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} aria-current={isActive ? 'page' : undefined}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
