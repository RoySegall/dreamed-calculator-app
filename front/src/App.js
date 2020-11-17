import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <section className="results">0</section>
                <section className="buttons">
                    <section className="numbers">
                        <section className="upper">
                            <button>7</button>
                            <button className="middle-button">8</button>
                            <button>9</button>
                        </section>

                        <section className="middle">
                            <button>4</button>
                            <button className="middle-button">5</button>
                            <button>6</button>
                        </section>

                        <section className="bottom">
                            <button>1</button>
                            <button className="middle-button">2</button>
                            <button>3</button>
                        </section>
                        <section className="ground-zero">
                            <button>0</button>
                        </section>
                    </section>

                    <section className="actions">
                        <button>+</button>
                    </section>
                </section>
            </div>

        </div>
    );
}

export default App;
