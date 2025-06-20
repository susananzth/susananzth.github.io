import { FaLaravel, FaPhp , FaPython, FaDatabase, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiPostgresql, SiFlask } from "react-icons/si";
import './About.css';

export default function About() {
  return (
    <section className="about py-5" id="about">
      <h2>Sobre mí</h2>
      <p>
        Soy desarrolladora web fullstack con experiencia en la creación de aplicaciones robustas y escalables.
        Me apasiona aprender nuevas tecnologías y resolver problemas complejos con código limpio y eficiente.
      </p>
      <div className="tech-icons">
        <FaPhp title="PHP" />
        <FaLaravel title="Laravel" />
        <SiNextdotjs title="Next.js" />
        <FaPython title="Python" />
        <SiFlask title="Flask" />
        <FaDatabase title="Database" />
        <SiMysql title="MySQL" />
        <SiPostgresql title="PostgreSQL" />
        <FaJs title="JavaScript" />
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
      </div>
    </section>
  );
}