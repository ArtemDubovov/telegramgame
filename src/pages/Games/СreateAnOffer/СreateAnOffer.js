import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import './style.css';

import { data, coordinateWords } from './data.js';
import { useEffect, useMemo, useState } from 'react';




function СreateAnOffer() {
    const [currentOffer, setCurrentOffer] = useState(0);
    const [words, setWords] = useState([]);
		const [wordsSingle, setWordsSingle] = useState(shuffleArray(data[currentOffer].words));

		function shuffleArray(array) {
			if (!array) return [];
			return array.map((text, i) => ({ text, sort: Math.random(), coordinates: coordinateWords[i] }))
			.sort((a, b) => a.sort - b.sort)
			.map(({text, coordinates}) => ({text, coordinates}));
		}

		console.log(wordsSingle);

  return (
    <div className='createAnOffer'>
        <Header title='Придумай имя бренда'/>
            <div className='gameWindow'>
                <h1 className='createAnOffer_gameTitle'>Собери из слов связную цель по SMART</h1>
                <div className='createAnOffer-wrapper-single'>
                    {
                        wordsSingle.map((el, i) =>
                          <button key={el.text}
                            onClick={() => {
															setWords(() => [...words, el]);
															const newList = [...wordsSingle];
															newList.splice(i, 1);
															setWordsSingle(() => [...newList]);
                            }
                            } style={{top: el.coordinates.x, left: el.coordinates.y}} className='createAnOffer_button'>{el.text}
                          </button>)
                        
                    }
                </div>
                <div className='createAnOffer-wrapper-offer'>
									{
										words.map((el, i) =>
											<button className='createAnOffer_button-offer' key={el.text}
												onClick={() => {
													setWordsSingle(() => [...wordsSingle, el]);
													const newList = [...words];
													newList.splice(i, 1);
													setWords(() => [...newList]);
												}}>
												{el.text}
											</button>)
									}
								</div>
            </div>
        <Footer index={2}/>
    </div>
  );
}

export default СreateAnOffer;