import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import './style.css';
import { useState } from 'react';

function ComeUpWithItBrandName() {
  const [countPage, setCountPage] = useState(0);
  return (
    <div className="comeUpWithItBrandName">
      <Header title='Придумай имя бренда'></Header>
        <div className='gameWindow'>
            {countPage === 0 ? 
                <div>
                    <h1 className='comeUpWithItBrandName_title'>Есть такая модель для постановки конкретных целей — SMART</h1>
                    <button className='comeUpWithItBrandName_button' onClick={() => setCountPage(1)}>Вперед</button>
                </div>
            : <></>}
        </div>
      <Footer index={2}></Footer>
    </div>
  );
}

export default ComeUpWithItBrandName;
