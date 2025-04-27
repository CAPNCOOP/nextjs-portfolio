'use client';
import HeroLandscape from '@/components/HeroLandscape';
import SEO from '@/components/SEO';


export default function Home() {
  return (
    <>
      <SEO 
        title="Taylor Cooper | Portfolio Home" 
        description="A portfolio for developer and creative Taylor Weston Cooper, showcasing projects built with modern web technologies."
      />

      <main>
        <HeroLandscape />
      </main>
    </>
  );
}
