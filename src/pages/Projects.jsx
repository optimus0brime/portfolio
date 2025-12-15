import { config } from '../data';

export default function Projects() {
  return (
    <main className="main page-content">
      <h1 className="page-title">projects</h1>
      
      <div className="projects-grid">
        {config.projects.map((project, i) => (
          <a 
            key={i} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card"
          >
            <h2 className="project-name">{project.name}</h2>
            <p className="project-desc">{project.description}</p>
            <span className="project-tech">{project.tech}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
