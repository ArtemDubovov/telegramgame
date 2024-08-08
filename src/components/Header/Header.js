import photo from './assets/photo.png';
import cube from './assets/cube.png';
import './style.css';

function Header({title}) {
  return (
    <header className="header">
        <div className='header_logo'>
          <img src={photo} alt='logo'></img>
        </div>
        {title ? <div className='header_title'>{title}</div> : <></>}
        <div className='header_btn'>
          <img src={cube} alt='logo'></img>
        </div>
    </header>
  );
}

export default Header;
