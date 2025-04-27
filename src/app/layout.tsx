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

      <body className="m-0 box-border">
      <header className="w-full bg-gray-100 border-b-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
          <NavBar />
        </div>
      </header>


        <main className="min-h-screen bg-gray-100">
          <PageWrapper>{children}</PageWrapper>
        </main>

        <footer className="flex justify-between content-center p-4 bg-gray-100 shadow">
          <div className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Taylor Cooper. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/CAPNCOOP"
              className="text-gray-500 hover:text-gray-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/tcooper1412"
              className="text-gray-500 hover:text-gray-400 transition"
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

