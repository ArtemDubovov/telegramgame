import { Link } from "react-router-dom";
import './style.css';
import ic0 from './assets/index-0.png';
import ic1 from './assets/index-1.png';
import ic2 from './assets/index-2.png';
import ic3 from './assets/index-3.png';
import ic0a from './assets/index-0-active.png';
import ic1a from './assets/index-1-active.png';
import ic2a from './assets/index-2-active.png';
import ic3a from './assets/index-3-active.png';

import {data} from './data.js';
const listIconsActive = [ic0a, ic1a, ic2a, ic3a];
const listIcons = [ic0, ic1, ic2, ic3];

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
                    <img src={index === i ? listIconsActive[index] : listIcons[i]} alt=""></img>
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
