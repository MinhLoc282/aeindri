import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Web3Provider } from 'hooks/useWeb3';
import { AlchemyProvider } from 'hooks/useAlchemy';

import App from 'App/App';
import Notification from 'components/Notification';

import store from 'store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3Provider>
        <AlchemyProvider>
          <BrowserRouter>
            <App />
            <Notification />
          </BrowserRouter>
        </AlchemyProvider>
      </Web3Provider>
    </Provider>
  </React.StrictMode>,
);
