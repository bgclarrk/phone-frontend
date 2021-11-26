import React from 'react';
import { useDispatch } from 'react-redux';
import { setDuration } from '../redux/phoneSlice';

export function Buttons() {
    const dispatch = useDispatch()
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
        }
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