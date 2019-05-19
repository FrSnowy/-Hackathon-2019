import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/MainPage';
import SinglePage from '../../pages/single-page/SinglePage';
import AddEventPage from '../../pages/add-event-page/AddEventPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/card' component={SinglePage}/>
          <Route path='/add' component={AddEventPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
