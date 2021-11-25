const initialState = {
    calls: [],
    phoneNumber: "",
    duration: null,
}

function callReducer(state=initialState, action) {

    switch(action.type) {
        case "history/getCalls":
            return {...state, calls: action.payload};
        case "phone/addNumber":
            return {...state, phoneNumber: state.phoneNumber + action.payload}
        case "phone/getNumber":
            return {...state, phoneNumber: state.phoneNumber}
        case "phone/newCall":
            return {...state, calls: action.payload};
        case "history/deleteCall":
            return {...state, calls: state.calls.filter(call => call.id !== action.payload)};
        default:
            return state;
    }

}

export default callReducer;