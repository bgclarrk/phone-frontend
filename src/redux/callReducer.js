const initialState = {
    calls: [],
    phoneNumber: "",
    duration: 0
}

function callReducer(state=initialState, action) {

    switch(action.type) {
        case "FETCH_CALLS":
            debugger;
            return {...state, calls: action.payload};
        default:
            return state;
    }

}

export default callReducer;