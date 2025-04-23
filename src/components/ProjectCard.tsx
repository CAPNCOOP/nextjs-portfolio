type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
};

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
