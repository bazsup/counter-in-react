import React, { Component } from 'react'

class CounterView extends Component {
    state = {
        counter: 0
    }

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

    render() {
        return (
            <div>
                <h1>Simple counter</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.decreaseCounter}>-1</button>
                <button onClick={this.increaseCounter}>+1</button>
            </div>
        )
    }
}

export default CounterView