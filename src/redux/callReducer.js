const initialState = {
    calls: [],
    phoneNumber: "",
    duration: null,
}

function callReducer(state=initialState, action) {

    switch(action.type) {
        case "FETCH_CALLS":
            return {...state, calls: action.payload};
        case "NEW_CALL":
            return {...state, calls: action.payload};
        case "DELETE_CALL":
            return {...state, calls: state.calls.filter(call => call.id !== action.payload)};
        default:
            return state;
    }

}

export default callReducer;