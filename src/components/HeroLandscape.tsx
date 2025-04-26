'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroLandscape: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image with Fade-In */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/optimized/homeNew.webp" 
          alt="Taylor Cooper overlooking mountains"
          fill
          priority
          className="object-cover brightness-50"
        />
      </motion.div>

      {/* Hero Content with Rise-Up Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 p-8"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hey, I&apos;m Taylor Cooper</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          I&apos;m a front-end developer focused on building clean, accessible, and modern web experiences.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="/projects"
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroLandscape;
