import React, {useState} from 'react';
import Data from '../quotes.json';
import Text from './Text.js';

const QuoteBox = () => {
    const [randomNumber, setRandom ] = useState(100);

    const handleRandomNumber = () => {
        const random = Math.random() * (Data.quotes.length - 0);
        setRandom(Math.floor(random) + 0);
    }
    console.log(randomNumber)

    return (
        <div className='box'>
            <div className='quote'>
                <Text position={randomNumber} />
                <button onClick={handleRandomNumber} className='button'>
                    New quote 
                </button>
            </div> 
        </div>
    )
}

export default QuoteBox;