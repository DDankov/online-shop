import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense>
        <App />
        <Toaster
        toastOptions={{
          position : 'top-right',
          style : {
            background : '#283046',
            color : 'white'
          }
        }}
        
        />
      </Suspense>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();