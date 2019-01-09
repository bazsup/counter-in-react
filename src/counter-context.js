import React from 'react'

export const CounterContext = React.createContext({
    counter: 0,
    increaseCounter: () => {},
    decreaseCounter: () => {},
})
