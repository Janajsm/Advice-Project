import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Advice.css";

export const AdviceForm = () => {
    const [advice, setAdvice] = useState("Click Button Get Advice")
    const [count, setCount] = useState(0)
    async function getadvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json()
        // console.log(data)
        setAdvice(data.slip.advice)
        setCount((c)=>c+1)
    }
    useEffect(function () {
        getadvice();
    },[])
  return (
    <div className="advice-container">
        <h2 className="advice-text">{advice}</h2>
        <button className="advice-button" onClick={getadvice}>Get Advice</button>
        <Counter count={count} />
    </div>
  )
}

function Counter(props) {
    return (
        <p className="counter-text">You Have read <b>{props.count}</b> pieces of advice</p>
    )
}
