import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contáctame</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h5>Dirección</h5>
              <a href="https://www.google.com/maps/place/Lima" target="_blank" rel="noopener noreferrer">
                Lima, Perú
              </a>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h5>Correo</h5>
              <a href="mailto:me@susananzth.com">me@susananzth.com</a>
            </div>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h5>Teléfono</h5>
              <a href="tel:+51982701107">( +51 ) 982-701-107</a>
            </div>
          </div>
          <div className="contact-social">
            <a href="https://twitter.com/susananzth" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com/susananzth" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/susananzth/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/susananzth" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://gitlab.com/susananzth" target="_blank" rel="noopener noreferrer"><FaGitlab /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <label>
            Nombre
            <input type="text" name="name" required />
          </label>
          <label>
            Correo
            <input type="email" name="email" required />
          </label>
          <label>
            Mensaje
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}