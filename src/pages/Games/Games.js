import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { Link } from 'react-router-dom';

import './style.css';
import triangle from './assets/triangle.svg';
import wizdef from './assets/wiz-def.svg';
import wizhandup from './assets/wiz-handup.svg';
import wizpower from './assets/wiz-power.svg';
import wizthinking from './assets/wiz-thinking.svg';


function Games() {
  return (
    <div className="games">
      <Header></Header>
      <section className='games_block-title'>
        <h1 className='games-title'>
          Все 👋 курсы  
          🐊 Брендодила
          бес<span className='text_through'>платно</span> 
        </h1>
      </section>
      <section className='games_block games_block--yellow'>
        <h2 className='games_block_title'>Создай конкурентное 
        позиционирование</h2>
        <img className='games_block_wizhandup' src={wizhandup} alt="wiz"/>
        <div className='block_play'>
          <img src={triangle}/>
        </div>
      </section>
      <section className='games_block games_block--green'>
        <div className='games_block_info'>
          <h2 className='games_block_title'>Поставь цель по SMART</h2>
        </div>
        <img className='games_block_wizdef' src={wizdef} alt="wiz"/>
        <div className='block_play'>
          <img src={triangle}/>
        </div>
      </section>
      <section className='games_container'>
        <div className='games_block_big'>
          <h2 className='games_block_title'>Разработай сильное УТП</h2>
          <img className='games_block_wizpower' src={wizpower} alt="wiz"/>
          <div className='block_play'>
            <img src={triangle}/>
          </div>
        </div>
        <Link to={'/ComeUpWithItBrandName'} className='games_block_big games_block_big--green'>
          <h2 className='games_block_title'>Придумай
          имя бренда</h2>
          <img className='games_block_wizthinking' src={wizthinking} alt="wiz"/>
          <div className='block_play'>
            <img src={triangle}/>
          </div>
        </Link>
      </section>
      <Footer index={2}></Footer>
    </div>
  );
}

export default Games;
