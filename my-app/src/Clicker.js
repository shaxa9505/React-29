import React, { useRef, useEffect, useState } from 'react';

function Clicker(props) {

    const [count, setCount] = useState(0);
    const [isCounting, setCounting] = useState(false);
    const timerIdRef = useRef(null)

    function handleStart() {
        setCounting(true)
        timerIdRef.current = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
    }

    function handleStop() {
        setCounting(false)
        clearInterval(timerIdRef.current)
    }

    function handleReset() {
        setCounting(false);
        setCount(0)
        clearInterval(timerIdRef.current)
    }

    useEffect(() => {
        console.log("update");

    }, [count])

    useEffect(() => {

        return () => {
            console.log("willUnMount !!!!!!!!!");
        }

    })

    return (
        <div className="App">
            {count} <br /> <br />
            {!isCounting ? <button onClick={handleStart} className="start">Start</button> : <button onClick={handleStop} className="stop">Stop</button>}

            <button onClick={handleReset} className="reset">Reset</button>
        </div>
    );
}

export default Clicker;