const BASE_API_URL = "http://localhost:3001/api/v1/calls";

export const getCallsAction = () => {
    
    return fetch(`${BASE_API_URL}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(resp => resp.json())
        .then(calls => calls)
}

export const newCallAction = () => {
    return dispatch => fetch(`${BASE_API_URL}/new`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: "POST"
    })
        .then((resp) => resp.json())
        .then((calls) => dispatch({
            type: "phone/newCall",
            payload: calls
        }))
}

export const deleteCallAction = (id) => {
    return dispatch => fetch(`${BASE_API_URL}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: "DELETE"
    })
        .then(() => dispatch({
            type: "history/deleteCall",
            payload: id
        }))
}