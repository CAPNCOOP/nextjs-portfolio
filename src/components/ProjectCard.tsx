'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-800 mb-4">{description}</p>
      <Link href={link} className="bg-gray-300 text-gray-600 p-2 mt-auto flex rounded-lg shadow-md justify-center">
        View Project
      </Link>
    </motion.div>
  );
}
