import './Skills.css';

const skills = [
  {
    area: "Backend",
    techs: [
      { name: "Laravel", desc: "Desarrollo de APIs RESTful, autenticación, Eloquent ORM, migraciones y testing." },
      { name: "Flask", desc: "Microservicios, endpoints REST, integración con bases de datos y despliegue en Docker." },
      { name: "Python", desc: "Automatización, scripting, análisis de datos y desarrollo web." },
      { name: "PHP", desc: "Desarrollo de aplicaciones web robustas y mantenimiento de sistemas existentes." }
    ]
  },
  {
    area: "Frontend",
    techs: [
      { name: "Next.js", desc: "SSR, SSG, rutas dinámicas, consumo de APIs y optimización de rendimiento." },
      { name: "JavaScript", desc: "ES6+, manipulación DOM, asincronía, fetch/AJAX y librerías modernas." },
      { name: "HTML5", desc: "Semántica, accesibilidad y SEO básico." },
      { name: "CSS3", desc: "Flexbox, Grid, animaciones, responsive design y preprocesadores (Sass)." }
    ]
  },
  {
    area: "Bases de Datos",
    techs: [
      { name: "MySQL", desc: "Modelado relacional, consultas avanzadas, optimización y backups." },
      { name: "PostgreSQL", desc: "Procedimientos almacenados, triggers y manejo de grandes volúmenes de datos." }
    ]
  },
  {
    area: "Herramientas & DevOps",
    techs: [
      { name: "Git & GitHub", desc: "Control de versiones, ramas, pull requests y flujos colaborativos." },
      { name: "Docker", desc: "Contenerización de aplicaciones y despliegue local/remoto." },
      { name: "Linux", desc: "Automatización de tareas, bash scripting y administración básica de servidores." }
    ]
  }
];

export default function Skills() {
  return (
    <section className="skills py-5" id="skills">
      <h2 className="px-5">Habilidades</h2>
      <div className="skills-list">
        {skills.map(({ area, techs }) => (
          <div className="skills-area" key={area}>
            <h3>{area}</h3>
            <ul>
              {techs.map(({ name, desc }) => (
                <li key={name}>
                  <strong>{name}:</strong> <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}