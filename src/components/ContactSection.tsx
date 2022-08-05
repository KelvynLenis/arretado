import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function ContactSection() {
  return (
    <div className="contact-section">
      <div className="logo-wrapper">
        <img src="/img/logo.svg" alt="" />
        <h1>Arretado</h1>
        <p>"Cara feia para mim é fome."</p>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com/KelvynLenis" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/kmartins_f0/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/KelvynLenis" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:kmartinslenis30@hotmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2022 Kelvyn Lenis Martins Arretado. All Rights reserved.</p>
      </div>
    </div>
  )
}
