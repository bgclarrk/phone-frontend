import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDuration, addHistory } from '../redux/phoneSlice';

export function Buttons() {
    const dispatch = useDispatch();
    let select = useSelector(state => state.call);
    let callInProgress = false;
    let callTime;
    let call;

    const startCount = () => {
        if (!callInProgress) {
            callInProgress = true;
            callTime = 0;
            call = setInterval(incrementCount, 1000);
        }
    }

    const incrementCount = () => {
        callTime = callTime + 1;
    }

    const endCount = () => {
        if (callInProgress) {
            callInProgress = false;
            dispatch(setDuration(callTime))
            clearInterval(call)
            callTime = 0;
            addCallToHistory()
        }
    }
    
    const addCallToHistory = () => {
        addHistory(select);
        debugger
    }

    return (
        <div className="row text-center">
            <div className="col-3">
                <button type="button" onClick={startCount} className="btn btn-success btn-lg">Start</button>
                <button type="button" onClick={endCount} className="btn btn-danger btn-lg">end</button>
            </div>
        </div>
    )

}

export default Buttons;