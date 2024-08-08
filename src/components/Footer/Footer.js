import { Link } from "react-router-dom";
import './style.css';
import ic0A from './assets/index-0-active.png';
import ic1 from './assets/index-1.png';
import ic2 from './assets/index-2.png';
import ic3 from './assets/index-3.png';

import {data} from './data.js';

const listIcons = [ic0A, ic1, ic2, ic3];

console.log(data);

function Footer({index}) {
  return (
    <footer className="footer">
        <nav>
          <ul className="footer_menu">
            {
              data.map((el, i) => 
                <li key={el.index}> 
                  <Link className={el.index === index ? 'footer_button footer_button--active' : 'footer_button'} to={el.path}>
                    <img src={listIcons[i]} alt=""></img>
                  </Link>
                </li>
              )
            }
          </ul>
        </nav>
    </footer>
  );
}

export default Footer;
