import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

export default function SEO({ title, description, image = '/optimized/preview-image.webp' }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
