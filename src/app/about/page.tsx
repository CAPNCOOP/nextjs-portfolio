'use client';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from  'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Taylor Cooper | Web Developer" 
        description="Get to know Taylor Cooper, a creative and dedicated web developer based in Asheville, NC, passionate about building functional, beautiful websites."
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >

        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-10 items-start">
      
            <div className="flex-shrink-0">
              <Image
                src="/optimized/headshot.webp"
                alt="Taylor Cooper"
                width={300}
                height={300}
                className='rounded-lg object-cover shadow-lg'
              />
            </div>

            <div className="flex-1">
            <h1 className="text-4xl text-gray-800 font-bold mb-4">About Me</h1>
              <p className="mb-4 text-gray-600">
                I&apos;m Taylor Cooper, a web developer and former Marine Corps combat photographer based in Asheville, NC. After years of capturing real-world stories with a camera, I&apos;ve transitioned that eye for design into a career in software and web development.
              </p>
              <p className="mb-4 text-gray-600">
                I bring initiative, accountability, and leadership into every project — values forged in both military and professional environments. Whether managing over 200 client accounts or mentoring junior Marines, I&apos;ve learned how to deliver with clarity and care.
              </p>
              <p className="mb-4 text-gray-600">
                When I&apos;m not coding, I&apos;m hiking, training, or learning something new. If there&apos;s one thing that drives me, it&apos;s growth — in my skills, my mindset, and the projects I take on.
              </p>

              <section className="mt-8">
                <h2 className="text-2xl text-gray-800 font-semibold mb-4">Professional Highlights</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Five years of global storytelling as a Marine Corps combat photographer</li>
                  <li>Developer focused on clean, accessible code with Next.js, Tailwind, and PHP</li>
                  <li>Proven communicator with leadership experience managing over 200 accounts</li>
                  <li>Lifelong learner dedicated to continuous improvement and adaptability</li>
                </ul>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Timeline</h2>
                <div className="border-l-2 border-gray-300 pl-4 space-y-4">
                  <div className='text-gray-500'>
                    <span className="font-medium text-blue-900">2016</span> — Enlisted in the Marine Corps, specializing in communication and media
                  </div>
                  <div className='text-gray-500'>
                    <span className="font-medium text-blue-900">2017–2021</span> — Led visual storytelling efforts across global deployments, mentored junior Marines
                  </div>
                  <div className='text-gray-500'>
                    <span className="font-medium text-blue-900">2021</span> — Began formal training in Software and Web Development at A-B Tech
                  </div>
                  <div className='text-gray-500'>
                    <span className="font-medium text-blue-900">2022–2023</span> — Worked as Partner Success Executive, managing 200+ client accounts
                  </div>
                  <div className='text-gray-500'>
                    <span className="font-medium text-blue-900">2025</span> — Received A.A.S in web-development, launching tech career with a focus on full-stack web development and open source
                  </div>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">Skills & Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-600 mb-2">Development</h3>
                    <ul className="list-disc text-gray-600 list-inside space-y-1">
                      <li>Next.js, PHP, JavaScript (ES6+)</li>
                      <li>TailwindCSS, HTML5, CSS3</li>
                      <li>Git & GitHub, VS Code, MySQL</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2 text-gray-700">Creative</h3>
                    <ul className="list-disc text-gray-600 list-inside space-y-1">
                      <li>Adobe Photoshop, Illustrator, Premiere Pro, Audition, Figma, Canva</li>
                      <li>Photography (DSLR), Video editing, Color correction</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2 text-gray-700">Professional</h3>
                    <ul className="list-disc text-gray-600 list-inside space-y-1">
                      <li>Leadership & team mentoring</li>
                      <li>Client communication & account management</li>
                      <li>Curriculum design & technical instruction</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mt-12">
                <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700">
                  “I’m always building something — on screen or in myself.”
                </blockquote>
              </section>

              <div className="about-links">
                <Link href="/resume.pdf" className="resume-link">
                  📄 Download Resume (Coming Soon)
                </Link>
              </div>
            </div>
          </div>
        </section>
        </motion.section>
      </>
  );
}
