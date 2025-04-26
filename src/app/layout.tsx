import './globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import PageWrapper from '@/components/PageWrapper';
import { GithubIcon, LinkedinIcon } from 'lucide-react';


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
      <head>
        <link rel="preload" as="image" href="/landscape/trees-top-layer.svg" />
        <link rel="preload" as="image" href="/landscape/trees-layer-1.svg" />
        <link rel="preload" as="image" href="/landscape/trees-layer-2.svg" />
              <link rel="preload" as="image" href="/landscape/mountain-1.svg" />
        <link rel="preload" as="image" href="/landscape/mountain-2.svg" />
        <link rel="preload" as="image" href="/landscape/bg-layer.svg" />
      </head>

      <body className="m-0 box-border">
        <header className="p-4 bg-stone-800 shadow">
          <NavBar />
        </header>

        <main className="min-h-screen">
          <PageWrapper>{children}</PageWrapper>
        </main>

        <footer className="flex justify-between content-center p-4 bg-stone-900 shadow">
          <div className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Taylor Cooper. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/CAPNCOOP"
              className="text-gray-400 hover:text-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/tcooper1412"
              className="text-gray-400 hover:text-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={30} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

