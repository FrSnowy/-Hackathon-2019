import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import MainPage from './pages/main-page/MainPage';
import SinglePage from './pages/single-page/SinglePage';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <SinglePage/>
      </div>
    </Provider>
  );
}

export default App;
