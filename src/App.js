import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/calls")
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }

}

export default App;
