import './Hero.css'
import avatar from './assets/logo.png'

export default function Hero() {
  return (
    <section className="hero text-center p-5">
      <img src={avatar} alt="Susana Piñero Rodríguez" className="hero-avatar mb-3" />
      <h1 className="hero-title">Desarrolladora Web Fullstack</h1>
      <p className="hero-desc">
        Especializada en Laravel, Next.js, Flask, Python, MySQL, PostgreSQL, JavaScript, HTML y CSS.<br />
        Apasionada por crear soluciones eficientes y escalables.
      </p>
      <div className="hero-actions mt-4">
        <a href="https://github.com/susananzth" className="btn btn-primary me-2">Ver Proyectos</a>
        <a href="https://www.linkedin.com/in/susananzth" className="btn btn-outline-secondary">Descargar CV</a>
      </div>
    </section>
  )
}