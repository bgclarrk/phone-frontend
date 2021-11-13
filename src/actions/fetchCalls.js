function fetchCalls() {

    fetch("http://localhost:3001/api/v1/calls")
      .then(resp => resp.json())
      .then(data => console.log(data))
      
}

export default fetchCalls;