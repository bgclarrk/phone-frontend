import React from 'react';
import { connect } from 'react-redux';
import fetchCalls from './actions/fetchCalls';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchCalls({type: "FETCH_CALLS", payload: {name: "checking"} });
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }

}

export default connect(null, {fetchCalls})(App);
