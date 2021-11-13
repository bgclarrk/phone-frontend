import React from 'react';
import { connect } from 'react-redux';
import fetchCalls from './actions/fetchCalls';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchCalls({type: "FETCH_CALLS"});
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }

}

// const mapStateToProps = (state) => {
//   return {
//     calls: state.calls
//   }
// }

export default connect(null, {fetchCalls})(App);
