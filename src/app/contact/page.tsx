'use client';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setFormStatus('Message sent successfully!');
      form.reset();
    } else {
      setFormStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Let’s Talk</h1>
      <p className="text-lg text-gray-700 mb-8">
        Whether you’ve got a job opportunity, project idea, or just want to connect — I’d be glad to hear from you.
      </p>

      <div className="flex space-x-6 mb-12">
        <a
          href="https://github.com/CAPNCOOP"
          className="text-gray-700 hover:text-blue-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/tcooper1412"
          className="text-gray-700 hover:text-blue-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon size={40} />
        </a>
      </div>

      <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded p-3"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="border border-gray-300 rounded p-3 resize-none"
        />
        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Send It
        </button>
      </form>
        {formStatus && (
        <p className="mt-6 text-sm text-center text-gray-600">{formStatus}</p>
      )}
    </section>
  );
}

