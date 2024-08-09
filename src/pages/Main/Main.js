import './style.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import yCe from './assets/y-circle-empty.png';
import yCf from './assets/y-circle-fill.png';
import logo from './assets/logo.png';
import { useState } from 'react';

function Main() {
  const [isToogleOn, setIsToogleOn] = useState(true);
  return (
    <div className="main">
      <Header></Header>
      <section className='main_block-title'>
        <h1 className='main-title'>Привет 👋🏼 Name
        сегодня в Брендландии в тренде👇🏻</h1>
        <div className='main_links'>
          <button className='main_links_button'>📈 SMART</button>
          <button className='main_links_button'>🏆 vcv</button>
          <button className='main_links_button'>Пример</button>
        </div>
      </section>
      <section className='main_block main_block--yellow'>
        <h2 className='main_block_title'>Позиционирование</h2>
        <div className='main_block_decoration'>
          <img src={yCe} />
          <img src={yCf} />
        </div>
      </section>
      <section className='main_block main_block--green'>
        <div className='main_block_toogle'>
          <div className='main_block_toogle_icon'>
            <img src={logo} alt="logo"/>
          </div>
          <div className='main_block_toogle_menu'>
            <button onClick={() => setIsToogleOn(true)} className={!isToogleOn ? 'toogle_menu_button toogle_menu_button--check' : 'toogle_menu_button'}>ВКЛ</button>
            <div className={isToogleOn ? 'toogle_menu_toogle toogle_menu_toogle--on' : 'toogle_menu_toogle toogle_menu_toogle--off'}></div>
            <button onClick={() => setIsToogleOn(false)} className={isToogleOn ? 'toogle_menu_button toogle_menu_button--check' : 'toogle_menu_button'}>ВЫКЛ</button>
          </div>
        </div>
        <div className='main_block_info'>
          <h2 className='main_block_title'>Ты почти прошел 
          игру “SMART”</h2>
          <p className='main_block_progress'>82%</p>
        </div>
      </section>
      <Footer index={0}></Footer>
    </div>
  );
}

export default Main;
