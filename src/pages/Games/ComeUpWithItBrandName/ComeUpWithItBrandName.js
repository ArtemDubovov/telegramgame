import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import './style.css';

function ComeUpWithItBrandName() {
  return (
    <div className="ComeUpWithItBrandName">
      <Header title='Придумай имя бренда'></Header>
      <Footer index={2}></Footer>
    </div>
  );
}

export default ComeUpWithItBrandName;
