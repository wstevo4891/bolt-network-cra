import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Use Bootstrap as styles framework
import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
