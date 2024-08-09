import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import { questions } from './data';

import './style.css';
import { useState } from 'react';

import imageQuestionWait from './assets/answer.svg';
import imageQuestionCorrect from './assets/correct.svg';
import imageQuestionWrong from './assets/wrong.svg';
import { Link } from 'react-router-dom';


function ComeUpWithItBrandName() {
  const [styleBtnLeft, setStyleBtnLeft] = useState('comeUpWithItBrandName_answerButtons__button');
  const [styleBtnRight, setStyleBtnRight] = useState('comeUpWithItBrandName_answerButtons__button');
  const [canChoice, setCanChoice] = useState(true);
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
                    <div className='comeUpWithItBrandName_title'>
                        <h1 className='comeUpWithItBrandName_title'>Есть такая модель для постановки конкретных целей — SMART</h1>
                        <img className='comeUpWithItBrandName_title_img' src={imageQuestionWait} alt="wizard"></img>
                    </div>
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
                    <h2 className='comeUpWithItBrandName_gameTitle'>Эта цель поставлена по методике SMART?</h2>
                    <div className='comeUpWithItBrandName_question'>{questions[countQuestion].text}</div>
                    <div className='comeUpWithItBrandName_answerTable'>
                        {
                            currentAnswer === null ? <img src={imageQuestionWait} alt="wait answer"></img> :
                            currentAnswer === questions[countQuestion].answer ?
                            <>
                                <img src={imageQuestionCorrect} alt="correct answer"></img>
                                <p>👍Верно! <br />
                                Все 5 критериев при постановке цели учтены!</p>
                            </>
                            :
                            <>
                                <img src={imageQuestionWrong} alt="wrong answer"></img>
                                <p>🚫 Ошибочка...<br />
                                Цель по SMART. Все 5 критериев учтены!</p>
                            </>
                        }
                    </div>
                    <div className='comeUpWithItBrandName_answerButtons'>
                        <button 
                            onClick={() => {
                                if (!canChoice) return;
                                if (countQuestion + 1 >= questions.length) setIsFinishGame(true);
                                setCurrentAnswer(() => true);
                                setStyleBtnLeft(() => styleBtnLeft + ' comeUpWithItBrandName_answerButtons__button--check');
                                setCanChoice(() => false);
                                if (questions[countQuestion].answer === true) setScore(() => score + 1);
                            }}
                            className={styleBtnLeft}>
                                Да
                        </button>
                        <div className={
                            currentAnswer && questions[countQuestion].answer ? 'comeUpWithItBrandName_toogle comeUpWithItBrandName_toogle--true comeUpWithItBrandName_toogle--correct' :
                            currentAnswer && !questions[countQuestion].answer ? 'comeUpWithItBrandName_toogle comeUpWithItBrandName_toogle--true comeUpWithItBrandName_toogle--wrong'
                            : currentAnswer === false && questions[countQuestion].answer ? 'comeUpWithItBrandName_toogle comeUpWithItBrandName_toogle--false comeUpWithItBrandName_toogle--wrong'
                            : currentAnswer === false && !questions[countQuestion].answer ? 'comeUpWithItBrandName_toogle comeUpWithItBrandName_toogle--false comeUpWithItBrandName_toogle--correct'
                            : 'comeUpWithItBrandName_toogle'
                        }></div>
                        <button onClick={() => {
                            if (!canChoice) return;
                            if (countQuestion + 1 >= questions.length) setIsFinishGame(true);
                            setCurrentAnswer(() => false)
                            setStyleBtnRight(() => styleBtnRight + ' comeUpWithItBrandName_answerButtons__button--check');
                            setCanChoice(() => false);
                            if (questions[countQuestion].answer === false) setScore(() => score + 1);
                        }}
                        className={styleBtnRight}>
                            Нет
                        </button>
                        
                    </div>
                    {currentAnswer !== null && countQuestion + 1 < questions.length && <button className='comeUpWithItBrandName_button--game' onClick={() => {
                        
                        setCanChoice(() => true);
                        setCountQuestion(() => countQuestion + 1);
                        setCurrentAnswer(() => null);
                        setStyleBtnLeft(() => 'comeUpWithItBrandName_answerButtons__button');
                        setStyleBtnRight(() => 'comeUpWithItBrandName_answerButtons__button');
                    }}>Далее</button>}
                    {
                        isFinishGame && 
                        <>
                            <p className='comeUpWithItBrandName_finishText'>Поздравляю, ты ответил на все вопросы. Из них верно: {score}, неверно: {questions.length - score}.</p>
                            <Link to='/СreateAnOffer' className='comeUpWithItBrandName_button--game'>Следующий этап</Link>
                        </>

                    }
                </>
            : <></>}
        </div>
      <Footer index={2}></Footer>
    </div>
  );
}

export default ComeUpWithItBrandName;
