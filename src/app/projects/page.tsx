'use client';
import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Blue Ridge Bounty',
      description: 'A full-featured farmers market platform for vendors and admins.',
      link: '/projects/blueridgebounty'
    },
    {
      title: 'Weather App',
      description: 'A simple app that shows the current weather using an API.',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'The site you’re looking at right now!',
      link: '#',
    },
    {
      title: 'More Coming Soon',
      description: 'More Projects will be available soon!',
      link: '#',
    },
  ];

  return (
    <>
      <SEO 
        title="Taylor Cooper | Projects" 
        description="Explore web development projects created by Taylor Cooper, including full-stack apps, creative designs, and custom platforms."
      />

      <section className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl text-gray-800 font-bold mb-6">My Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-blue-950">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}
