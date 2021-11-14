import React from 'react';
import { connect } from 'react-redux';
import fetchCalls from './actions/fetchCalls';

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
