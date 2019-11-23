import React, { Component } from 'react'

import { connect } from 'react-redux'

import { increment, decrement, reset } from './actions/counter_actions'

import './styles/index.scss'

class Counter extends Component {
  render() {
    console.log(this.props)

    return(
      <div className="display-container">
        <div className="row justify-content-center">
          <div className="counter">
            <h2>Counter</h2>

            <div>
              <button onClick={this.decrement}>-</button>

              <span className="count">{this.props.count}</span>

              <button onClick={this.increment}>+</button>

              <button className="reset-btn" onClick={this.reset}>
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  reset = () => {
    this.props.reset()
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  }
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
  increment,
  decrement,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
