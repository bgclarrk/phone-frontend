function deleteCalls() {

    return (dispatch, id) => {
        debugger;
        fetch("http://localhost:3001/api/v1/calls/" + id, {
            method: 'DELETE',
            headers: 'application/json'
        })
          .then(resp => resp.json())
          .then(calls => dispatch({
              type: "DELETE_CALLS",
              payload: calls,
          }))
    }

}

export default deleteCalls;