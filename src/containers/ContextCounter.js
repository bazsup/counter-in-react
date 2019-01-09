import React, { Component } from 'react'

import ContextCounter from '../components/ContextCounter'
import { CounterContext } from '../counter-context'


class CounterView extends Component {
    increaseCounter = () => {
        this.setState(
            prevState => ({
                counter: prevState.counter + 1
            })
        )
    }

    decreaseCounter = () => {
        this.setState(
            prevState => ({
                counter: prevState.counter - 1
            })
        )
    }

    state = {
        counter: 5,
        increaseCounter: this.increaseCounter,
        decreaseCounter: this.decreaseCounter,
    }

    render() {
        return (
            <CounterContext.Provider value={this.state}>
                <ContextCounter />
            </CounterContext.Provider>
        )
    }
}

export default CounterView