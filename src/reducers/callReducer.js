const initialState = {
    calls: [],
    phoneNumber: "",
    duration: 0
}

function callReducer(state=initialState, action) {

    switch(action.type) {
        case "FETCH_CALLS":
            return {...state, calls: action.payload};
        case "PHONE_NUMBER":
            return {...state, phoneNumber: this.state.phoneNumber += action.payload};
        case "CREATE_CALLS":
            return {...state, calls: action.payload};
        case "INCREASE_DURATION":
            return {...state, duration: action.payload};
        case "DELETE_CALLS":
            return {...state, calls: action.payload};
        default:
            return state;
    }

}

export default callReducer;