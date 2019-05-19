import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPage from '../../pages/main-page/MainPage';
import SinglePage from '../../pages/single-page/SinglePage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/card' component={SinglePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
