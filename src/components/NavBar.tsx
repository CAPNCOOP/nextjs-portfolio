'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className="mx-0 flex items-center relative z-50 w-full justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Taylor W. Cooper</h1>
        </div>

        <div>
          <button
            className="md:hidden text-gray-800 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <ul
            className={`absolute top-16 left-0 w-full bg-stone-900 transition-all duration-300 ease-in-out z-50 md:bg-transparent md:static md:flex md:space-x-6 md:items-center md:w-auto ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            {[
              { name: 'Home', href: '/' },
              { name: 'Projects', href: '/projects' },
              { name: 'Photography', href: '/photos' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="block px-4 py-2 text-gray-500 hover:-translate-y-[3px] hover:text-gray-800 transition transform"
                  onClick={handleLinkClick}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
