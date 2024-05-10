import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import {persistor, store} from './App/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

<PersistGate persistor={persistor}>
<Toaster  position="top-right"/>
    <App />
    </PersistGate>
   
  </Provider>
);

