import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import RouterComponent from './layouts/RouterComponent';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          <title>MyCollege</title>
        </Helmet>
        <RouterComponent />
      </HelmetProvider>
    </Provider>
  );
};

export default App;
