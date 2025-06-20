import './Projects.css';

const projects = [
  {
    name: "Gestor de Tareas",
    desc: "Aplicación fullstack para gestión de tareas con Laravel y Vue.js.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    demo: "#",
    github: "#"
  },
  {
    name: "Blog Personal",
    desc: "Blog desarrollado en Next.js y PostgreSQL, con autenticación y panel de administración.",
    tech: ["Next.js", "PostgreSQL"],
    demo: "#",
    github: "#"
  },
  {
    name: "API de Análisis de Datos",
    desc: "API RESTful en Flask y Python para análisis de datos y visualización.",
    tech: ["Flask", "Python"],
    demo: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className="projects py-5" id="projects">
      <h2 className="px-5">Proyectos Destacados</h2>
      <div className="projects-list">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="project-tech">{p.tech.join(" · ")}</div>
            <div className="project-links">
              <a href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}