import React from 'react';
import CallHistoryContainer from './containers/CallHistoryContainer';
import PhoneContainer from './containers/PhoneContainer';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PhoneContainer />
        <CallHistoryContainer />
      </div>
    );
  }

}

export default App;
