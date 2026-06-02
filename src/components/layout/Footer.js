import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <nav>
        <a href="/about">Sobre mí</a>
        <a href="/projects">Proyectos</a>
        <a href="/contact">Contacto</a>
        <a href="/privacy">Privacidad</a>
      </nav>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <FaGithub />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Edwin — Todos los derechos reservados.</p>
    </footer>
  );
};
