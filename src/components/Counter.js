import React from 'react'

const Counter = (props) => (
    <div>
        <h1>Redux counter</h1>
        <h2>{props.counter}</h2>
        <button onClick={props.decreaseCounter}>-1</button>
        <button onClick={props.increaseCounter}>+1</button>
    </div>
)

export default Counter
