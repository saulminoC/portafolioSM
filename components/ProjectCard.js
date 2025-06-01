export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-700">{project.description}</p>
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-3 inline-block text-blue-600 hover:underline"
        >
          Ver proyecto
        </a>
      )}
    </div>
  );
}
