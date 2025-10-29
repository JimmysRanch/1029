'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/appointments', label: 'Appointments' },
  { href: '/clients', label: 'Clients' },
  { href: '/staff', label: 'Staff' },
  { href: '/pos', label: 'POS' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/finance', label: 'Finance' },
  { href: '/messages', label: 'Messages' },
  { href: '/reports', label: 'Reports' },
  { href: '/settings', label: 'Settings' }
];

function buildClassName(isActive: boolean) {
  const base = 'rounded-md px-3 py-2 text-sm font-medium transition-colors';
  const active = 'bg-slate-900 text-white shadow-sm';
  const inactive = 'text-slate-600 hover:bg-slate-100 hover:text-slate-900';
  return `${base} ${isActive ? active : inactive}`;
}

export default function Navbar() {
  const pathname = usePathname() || '/';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <span className="text-lg font-semibold text-slate-900">Jimmy&apos;s Ranch</span>
        <ul className="flex flex-wrap items-center gap-2">
          {links.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={buildClassName(isActive)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
