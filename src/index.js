import React from 'react';
import { render } from 'react-dom';
import './stylesheets/index.css';
import App from './components/ui/App';
import registerServiceWorker from './registerServiceWorker'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
