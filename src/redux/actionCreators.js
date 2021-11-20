export const getCalls = () => {
    return dispatch => fetch("http://localhost:3001/api/v1/calls",{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((calls) => dispatch({
            type: "FETCH_CALLS",
            payload: calls
        }))
}

export const newCall = () => {
    return dispatch => fetch(`http://localhost:3001/api/v1/calls/new`,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: "POST"
    })
        .then((res) => res.json())
        .then((calls) => dispatch({
            type: "NEW_CALL",
            payload: calls
        }))
}

export const deleteCall = (id) => {
    return dispatch => fetch(`http://localhost:3001/api/v1/calls/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: "DELETE"
    })
        .then((res) => res.json())
        .then((calls) => dispatch({
            type: "DELETE_CALL",
            payload: id
        }))
}