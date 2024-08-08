import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { Link } from 'react-router-dom';

import './style.css';

function Games() {
  return (
    <div className="games">
      <Header></Header>
      <section className='games_block-title'>
        <h1 className='games-title'>
          Все 👋 курсы  
          🐊 Брендодила
          бесплатно 
        </h1>
      </section>
      <section className='games_block games_block--yellow'>
        <h2 className='games_block_title'>Создай конкурентное 
        позиционирование</h2>
      </section>
      <section className='games_block games_block--green'>
        <div className='games_block_info'>
          <h2 className='games_block_title'>Поставь цель по SMART</h2>
        </div>
      </section>
      <section className='games_container'>
        <div className='games_block_big'>
          <h2 className='games_block_title'>Разработай сильное УТП</h2>
        </div>
        <Link to={'/ComeUpWithItBrandName'} className='games_block_big'>
          <h2 className='games_block_title'>Придумай
          имя бренда</h2>
        </Link>
      </section>
      <Footer index={2}></Footer>
    </div>
  );
}

export default Games;
