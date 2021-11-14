function callReducer(state = { calls: [] }, action) {

    // switch(state.action) {
    //     case "FETCH_CALLS":
    //         return {
    //             calls: state.calls + 1
    //         }
    //     default:
    //         return state;
    // }
    return action.payload
}

export default callReducer;