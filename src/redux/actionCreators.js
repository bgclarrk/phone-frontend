export const getCalls = () => {
    return dispatch => fetch("http://localhost:3001/api/v1/calls",{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((calls) => dispatch({
            type: "FETCH_CALLS",
            payload: calls
        }))
}