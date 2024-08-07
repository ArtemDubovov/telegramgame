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
      <Footer></Footer>
    </div>
  );
}

export default Main;
