import Logo from "./assets/Logo3.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={Logo} alt="Encore Recordings logo" className="foot-img" />
        <a
          href="https://instagram.com/encorerecordings"
          target="_blank"
          rel="noreferrer"
          className="foot-text"
        >
          @encorerecordings
        </a>
      </div>
      <div className="footer-bottom">
        <p>© 2026 AIR Recordings. All rights reserved.</p>
      </div>
    </footer>
  );
}