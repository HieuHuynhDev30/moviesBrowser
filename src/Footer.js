import { Link } from "react-router-dom";
import logo2 from "./images/movies-browser-low-resolution-logo-white-on-transparent-background.png";
import './App.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container lh-lg" style={{ width: 'min(100%, 30rem)' }}>
        <Link  to="/" >
          <img src={logo2} className="w-100" />
        </Link>
        <div className="d-flex justify-content-between gap-5 fs-5 w-100">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="about" className="text-nowrap" style={{ color: "inherit", textDecoration: "none" }}>
            About us
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
