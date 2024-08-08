import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import { questions } from './data';

import './style.css';
import { useState } from 'react';

function ComeUpWithItBrandName() {
  const [countPage, setCountPage] = useState(0);
  const [countQuestion, setCountQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null); // true or false
  const [score, setScore] = useState(0);
  const [isFinishGame, setIsFinishGame] = useState(false);
  return (
    <div className="comeUpWithItBrandName">
      <Header title='Придумай имя бренда'></Header>
        <div className='gameWindow'>
            {
            countPage === 0 ? 
                <>
                    <h1 className='comeUpWithItBrandName_title'>Есть такая модель для постановки конкретных целей — SMART</h1>
                    <button className='comeUpWithItBrandName_button' onClick={() => setCountPage(1)}>Вперед</button>
                </> :
            countPage === 1 ?
                <>
                    <h1 className='comeUpWithItBrandName_subtitle'>Что такое SMART?</h1>
                    <p className='comeUpWithItBrandName_context'>
                        SMART — это методика постановки целей и задач в управлении. Суть методики в том, чтобы сделать абстрактные цели понятными,
                        конкретными и достижимыми. Джордж Т. Доран, эксперт в области стратегического планирования, описал эту методику в статье «S.M.A.R.T.
                         — способ описания управленческих целей и задач» в 1981 году.
                    </p>
                    <p className='comeUpWithItBrandName_context'>
                        При правильном использовании методика помогает компании расти и улучшать ключевые показатели, организовывать работу сотрудников и управлять командой.
                    </p>
                    <h1 className='comeUpWithItBrandName_subtitle'>Вот 2 примера целей по SMART:</h1>
                    <br></br>
                    <div className='comeUpWithItBrandName_example'>
                        <p>Каждые полгода проходить проверку у терапевта и трёх специалистов, выполняя их рекомендации по результатам.</p>
                    </div>
                    <div className='comeUpWithItBrandName_example'>
                        <p>Похудеть на 15 кг за полгода, проконсультировавшись с диетологом и добавив три тренировки в неделю.</p>
                    </div>
                    <button className='comeUpWithItBrandName_button' onClick={() => setCountPage(2)}>Вперед</button>
                </>
            :
            countPage === 2 ?
                <>
                    <h2>Эта цель поставлена по методике SMART?</h2>
                    <div className='comeUpWithItBrandName_question'>{questions[countQuestion].text}</div>
                    <div className='comeUpWithItBrandName_answerTable'></div>
                    <div className='comeUpWithItBrandName_answerButtons'>
                        <button 
                            onClick={() => {
                                setCurrentAnswer(true);
                            }}
                            className='comeUpWithItBrandName_answerButtons__button'>
                                Да
                        </button>
                        <div className={
                            currentAnswer === true ? 'comeUpWithItBrandName_toogle comeUpWithItBrandName_toogle--true'
                            : currentAnswer === false ? 'comeUpWithItBrandName_toogle comeUpWithItBrandName_toogle--false'
                            : 'comeUpWithItBrandName_toogle'
                        }></div>
                        <button onClick={() => setCurrentAnswer(false)} className='comeUpWithItBrandName_answerButtons__button'>
                            Нет
                        </button>
                    </div>
                </>
            : <></>}
        </div>
      <Footer index={2}></Footer>
    </div>
  );
}

export default ComeUpWithItBrandName;
