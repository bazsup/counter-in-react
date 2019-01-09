import { connect } from 'react-redux'

import { increaseCounter, decreaseCounter } from '../actions/counter'
import Counter from '../components/Counter'

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)