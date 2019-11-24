import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './store'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
      <Provider store={Store}>
        <App />
      </Provider>,
      div
    )

    ReactDOM.unmountComponentAtNode(div)
  })
})
