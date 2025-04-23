import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-white">
      <h1 className="text-5xl font-extrabold mb-4">Hey, I&apos;m Taylor Cooper</h1>
      <p className="text-xl text-gray-600 max-w-xl">
        I&apos;m a front-end developer focused on building clean, accessible, and modern web experiences.
      </p>
      <div className="mt-6 flex space-x-4">
        <Link
          href="/projects"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className=" text-black border border-black px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
