import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl space-y-8">
          {children}
        </main>
      </body>
    </html>
  );
}
