function callReducer(state = { calls: [] }, action) {

    switch(action.type) {
        case "FETCH_CALLS":
            return {calls: action.payload};
        case "CREATE_CALLS":
            return {calls: action.payload};
        case "DELETE_CALLS":
            return {calls: action.payload};
        default:
            return state;
    }

}

export default callReducer;