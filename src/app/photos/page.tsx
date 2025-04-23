'use client';

import Image from 'next/image';

export default function PhotosPage() {
  const galleries = {
    Landscapes: ['nat-1.jpg', 'nat-2.jpg', 'nat-3.jpg', 'nat-4.jpg', 'nat-5.jpg', 'nat-6.jpg', 'nat-7.jpg', 'nat-8.jpg', 'nat-9.jpg', 'nat-10.jpg', 'nat-11.jpg', 'nat-12.jpg'],
    Automotive: ['cm-01.jpg', 'cm-02.jpg', 'cm-03.jpg', 'cm-04.jpg', 'cm-05.jpg', 'cm-06.jpg', 'cm-07.jpg', 'cm-08.jpg', 'cm-09.jpg', 'cm-10.jpg', 'cm-11.jpg', 'cm-12.jpg', 'cm-13.jpg', 'cm-14.jpg', 'cm-16.jpg',],
    Military: ['mi-01.jpg', 'mi-02.jpg', 'mi-03.jpg', 'mi-04.jpg', 'mi-05.jpg', 'mi-06.jpg', 'mi-07.jpg', 'mi-08.jpg', 'mi-09.jpg', 'mi-10.jpg', 'mi-11.jpg', 'mi-12.jpg', 'mi-13.jpg', 'mi-14.jpg', 'mi-15.jpg', 'mi-16.jpg', 'mi-18.jpg', 'mi-20.jpg', 'mi-21.jpg', 'mi-23.jpg', 'mi-24.jpg'],
  };

  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Photography</h1>
      {Object.entries(galleries).map(([category, images]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {images.map((filename, index) => (
              <div key={index} className="relative w-full h-64">
                <Image
                  src={`/photos/${filename}`}
                  alt={`${category} photo ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded shadow"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
