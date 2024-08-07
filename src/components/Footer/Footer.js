import { Link } from "react-router-dom";
import './style.css';

function Footer() {
  return (
    <footer className="Footer">
        <nav>
          <ul className="footer_menu">
            <li>
              <Link className="footer_button" to="/"></Link>
            </li>
            <li>
              <Link className="footer_button" to="/2"></Link>
            </li>
            <li>
              <Link className="footer_button" to="/3"></Link>
            </li>
            <li>
              <Link className="footer_button" to="/4"></Link>
            </li>
          </ul>
        </nav>
    </footer>
  );
}

export default Footer;
