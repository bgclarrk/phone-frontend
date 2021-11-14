function fetchCalls() {

    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/calls")
          .then(resp => resp.json())
          .then(calls => dispatch({
              type: "FETCH_CALLS",
              payload: calls
          }))
    }

}

export default fetchCalls;