import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import MainPage from './pages/main-page/MainPage';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
