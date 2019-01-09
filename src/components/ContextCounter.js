import React from 'react'
import { CounterContext } from '../counter-context'

const ContextCounter = () => (
    <CounterContext.Consumer>
        {({
            counter,
            increaseCounter,
            decreaseCounter,
        }) => (
            <>
                <h1>Context API counter</h1>
                <h2>{counter}</h2>
                <button onClick={decreaseCounter}>-1</button>
                <button onClick={increaseCounter}>+1</button>
            </>
        )}
    </CounterContext.Consumer>
)

export default ContextCounter
