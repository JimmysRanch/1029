import './globals.css';
import Navbar from '../components/Navbar';

type RootLayoutProps = {
  children: any;
};

export const metadata = {
  title: "Jimmy's Ranch Dashboard",
  description: 'Operational overview for Jimmy\'s Ranch.'
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
