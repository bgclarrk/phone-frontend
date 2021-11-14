import React from 'react';
import { connect } from 'react-redux';
import CallHistoryContainer from './containers/CallHistoryContainer';
import PhoneContainer from './containers/PhoneContainer';


class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }

}

export default connect()(App);
