import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDuration, setStatus, clearCall } from '../redux/phoneSlice';
import { addHistory } from '../redux/historySlice';

export function Buttons() {
    const dispatch = useDispatch();
    const call = useSelector(state => state.call);
    let status = useSelector(state => state.call.status);
    useEffect(
        () => {
            let timer
            if(status) {
                timer = setInterval(incrementCount,1000)
            } else {
                if(timer){
                clearTimeout(timer)
                }
            }
            return () => {
                clearTimeout(timer)
                }
        }, [status]
    );

    const startCall = () => {
        if (!status && call.phoneNumber) {
            dispatch(setStatus(true));
        }
    }

    const incrementCount = () => {
        dispatch(setDuration())
    }

    const endCall = () => {
        if (status) {
            dispatch(setStatus(false));
            dispatch(addHistory(call));
            dispatch(clearCall());
        }
    }
    

    
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