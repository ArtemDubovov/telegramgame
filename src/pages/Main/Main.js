import './style.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Main() {
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
      </section>
      <section className='main_block main_block--green'>
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
