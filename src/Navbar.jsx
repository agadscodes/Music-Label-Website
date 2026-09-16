import { siInstagram } from "simple-icons";
import Logo from "./assets/logo.png";
function InstagramIcon({ size = 18 }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={"currentColor"}
    >
      <path d={siInstagram.path} />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="navbar">
      <img className="navbar__logo" src={Logo} alt="" />
      <nav className="navbar__links">
        <a href="#roster" className="navbar__cta">
          Roster
        </a>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="social-icon"
        >
          <InstagramIcon size={18} />
        </a>
      </nav>
    </header>
  );
}
