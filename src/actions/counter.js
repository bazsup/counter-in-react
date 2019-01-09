import { INCREASE_COUNTER, DECREASE_COUNTER } from './types'

const increaseCounter = () => ({
    type: INCREASE_COUNTER
})

const decreaseCounter = () => ({
    type: DECREASE_COUNTER
})

export {
    increaseCounter,
    decreaseCounter,
}