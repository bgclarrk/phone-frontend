import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDuration, setStatus, clearCall } from '../redux/phoneSlice';
import { addHistory } from '../redux/historySlice';

export function Buttons() {
    const dispatch = useDispatch();
    const call = useSelector(state => state.call);
    let status = useSelector(state => state.call.status);
    let timer;

    const startCall = () => {
        if (!status) {
            dispatch(setStatus(true));
            timer = setInterval(incrementCount, 1000);
        }
    }

    const incrementCount = () => {
        dispatch(setDuration())
    }

    const endCall = () => {
        if (status) {
            dispatch(setStatus(false));
            stopTimer();
            dispatch(addHistory(call));
            dispatch(clearCall());
        }
    }
    
    const stopTimer = () => clearInterval(timer);
    
    return (
        <div className="row text-center">
            <div className="col-3">
                <button type="button" onClick={startCall} className="btn btn-success btn-lg">Start</button>
                <button type="button" onClick={endCall} className="btn btn-danger btn-lg">end</button>
            </div>
        </div>
    )

}

export default Buttons;