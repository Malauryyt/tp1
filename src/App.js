import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import RandomText from "./composent.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>TP1 React</h1>
                <RandomText />
            </header>

        </div>
    );
}

//tests pour comprendre
function MyButton() {
    return (
        <button >I'm a button</button>
    );
}

function RandomCont() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (

        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

function RandomColor() {

    const [color, setColor] = useState("edc4f7");

    const generateColor = () => {
        setColor(Math.random().toString(16).substr(-6))
    };

    return (<>
        <div
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "#" + color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button
                style={{
                    padding: "40px",
                    borderRadius: "10px",
                    backgroundImage:
                        "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
                    fontSize: "larger",
                }}
                onClick={generateColor}
            >
                Generate random color
            </button>
        </div>
    </>
    );
}








export default App;
