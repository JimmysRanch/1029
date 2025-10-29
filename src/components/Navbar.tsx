const navItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Appointments', href: '/appointments' },
  { label: 'Clients', href: '/clients' },
  { label: 'Staff', href: '/staff' },
  { label: 'POS', href: '/pos' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'Finance', href: '/finance' },
  { label: 'Messages', href: '/messages' },
  { label: 'Reports', href: '/reports' },
  { label: 'Settings', href: '/settings' }
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="text-lg font-semibold tracking-wide text-sky-300">Scruffy Butts</span>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-200">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-sky-300">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
