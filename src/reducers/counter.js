import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/types'

const initalState = 10

const counterReducer = (state = initalState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER: {
            return state + 1
        }
        case DECREASE_COUNTER: {
            return state - 1
        }
        default: {
            return state
        }
    }
}

export default counterReducer
