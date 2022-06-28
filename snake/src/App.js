import './App.css';
import React, { useState, useEffect } from 'react';
import { ReactComponent as GITHUB } from '../src/assets/github.svg'
import Snake from "./components/Snake/Snake";
import Food from './components/Food/Food';



const App = () => {

    const [food, setFood] = useState([0, 8]);
    const [score, setScore] = useState(-1);
    const [start, setStart] = useState(false);


    useEffect(() => {
        setScore(score + 1)
    }, [food]);


    const toggleStart = () => {
        setStart(!start)
    }


    const SIZE = 400;
    const apple = './image/apple.svg';
    const cherry = './image/cherry.svg';
    const grape = './image/grape.svg';


    const fruitFood = [apple, cherry, grape];
    let picture = fruitFood.map(img => img);

    const imgRandom = (imgArr) => imgArr[Math.floor(Math.random() * imgArr.length)];

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Score : { score }</h1>
            <div className="game-area" style={{width: `${SIZE}px`, height: `${SIZE}px`}}>
                <Snake size={SIZE} food={food} setFood={setFood} score={score} setScore={setScore} toggleStart={toggleStart} start={start}/>
                <Food food={food} picture={picture} imgRandom={imgRandom}/>
            </div>
            <div className='start'>
                {start ? <button className='stop' onClick={toggleStart}>STOP</button> : <button className='start' onClick={toggleStart}>START</button>}
            </div>


            <footer className='footer'>
                <p>© by Sergej Miroshnichenko</p>
                <div style={{alignItems: 'baseline'}}><a className='footer-github' href="https://github.com/sergejmiroshnichenko?tab=repositories"><GITHUB/> Github </a></div>
                <p>2022</p>
            </footer>
        </>
    );
}

export default App;