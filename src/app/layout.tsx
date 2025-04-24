import './globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className="m-0 box-border">
      <header className="p-4 bg-gray-800 shadow">
        <NavBar/ >
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="p-4 bg-white shadow mt-8">
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </footer>
    </body>
  </html>
);
}
