import React, {useState} from 'react';
import './App.scss';

const handleNumberClick = (setCurrentNumber, currentNumber, selectedNumber) => {
    if (currentNumber === 0) {
        setCurrentNumber(selectedNumber);
        return;
    }

    setCurrentNumber(String(currentNumber) + String(selectedNumber));
};

const NumberSection = ({numbers, sectionName, setCurrentNumber, currentNumber}) => <section className={sectionName}>
    {numbers.map((number, index) =>
        <button
            key={number}
            className={index === 1 ? 'middle-button' : ''}
            onClick={() => {handleNumberClick(setCurrentNumber, currentNumber, number)}}
        >{number}</button>
    )}
</section>

function App() {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(null);

    return (
        <div className="App">
            <div className="wrapper">
                <section className="results"><div className="first-number">{secondNumber}</div> {currentNumber}</section>
                <section className="buttons">
                    <section className="numbers">
                        <NumberSection numbers={[7, 8, 9]} sectionName="upper" setCurrentNumber={setCurrentNumber} currentNumber={currentNumber}/>
                        <NumberSection numbers={[4, 5, 6]} sectionName="middle" setCurrentNumber={setCurrentNumber} currentNumber={currentNumber}/>
                        <NumberSection numbers={[1, 2, 3]} sectionName="bottom" setCurrentNumber={setCurrentNumber} currentNumber={currentNumber}/>
                        <section className="ground-zero">
                            <button onClick={() => handleNumberClick(setCurrentNumber, currentNumber, 0)}>0</button>
                        </section>
                    </section>

                    <section className="actions">
                        <button className={`plus ${secondNumber ? 'disabled' : ''}`} onClick={() => {

                            if (currentNumber === 0) {
                                return;
                            }

                            setSecondNumber(currentNumber);
                            setCurrentNumber(0);
                        }} disabled={secondNumber}>+</button>
                        <button className={`equals ${!secondNumber ? 'disabled' : ''}`} disabled={!secondNumber}>=</button>
                    </section>
                </section>
            </div>

        </div>
    );
}

export default App;
