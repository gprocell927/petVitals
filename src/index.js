import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Reading from './components/Reading'
import LogIn from './components/LogIn'
import Patient from './components/PatientSetup'
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={LogIn} />
        <Match exactly pattern="/patientsetup" component={Patient} />
        <Match exactly pattern="/reading" component={Reading} />
      </div>
    </BrowserRouter>
  )
}
render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Root />
  </Provider>,
  document.getElementById('root')
);
