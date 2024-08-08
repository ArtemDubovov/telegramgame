import { Link } from "react-router-dom";
import './style.css';

import {data} from './data.js';

console.log(data);

function Footer({index}) {
  return (
    <footer className="Footer">
        <nav>
          <ul className="footer_menu">
            {
              data.map(el => 
                <li>
                  <Link className={el.index == index ? 'footer_button footer_button--active' : 'footer_button'} to={el.path}></Link>
                </li>
              )
            }
          </ul>
        </nav>
    </footer>
  );
}

export default Footer;
