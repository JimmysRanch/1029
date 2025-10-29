import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: "Jimmy's Ranch Dashboard",
  description: "Operational overview for Jimmy's Ranch."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
