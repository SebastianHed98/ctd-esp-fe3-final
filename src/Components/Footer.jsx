import { useGlobalContext } from "../Components/utils/global.context";

const Footer = () => {
  const { state } = useGlobalContext();

  return (
    <footer className={`footer ${state.theme}`}>
      <div className="footer-left">
	  <p className="footer-text">Powered by Digital House</p>
        <img className="footer-logo" src="/images/DH.png" alt="DH Logo" />
      </div>
      <div className="footer-right">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="/images/ico-facebook.png"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="/images/ico-instagram.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="/images/ico-tiktok.png"
            alt="TikTok"
          />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icon"
            src="/images/ico-whatsapp.png"
            alt="WhatsApp"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
