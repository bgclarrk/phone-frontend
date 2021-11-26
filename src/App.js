import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CallHistoryContainer } from './containers/CallHistoryContainer';
import PhoneContainer from './containers/PhoneContainer';
import Nav from './components/Nav';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="App">
          <Switch>
            <Route path="/phone" component={PhoneContainer} />
            <Route path="/history" component={CallHistoryContainer} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
