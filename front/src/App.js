import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage';
import SinglePage from './pages/single-page/SinglePage';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/card' component={SinglePage}/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
