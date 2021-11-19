import React from 'react';
import CallHistoryContainer from './containers/CallHistoryContainer';
import PhoneContainer from './containers/PhoneContainer';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/call" component={PhoneContainer} />
          <Route path="/history" component={CallHistoryContainer} />
        </Switch>
      </div>
    );
  }

}

export default App;
