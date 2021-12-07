import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory, getCallHistoryFromStore } from '../redux/historySlice';
import CallHistory from '../components/CallHistory';

export function CallHistoryContainer() {
    const dispatch = useDispatch();
    const calls = useSelector(getCallHistoryFromStore);

    useEffect(() => {
        dispatch(getHistory())
    },[dispatch])

    return (
        <div className="container">
            <div className="row">
                <h2>Call History</h2>
            </div>
            <div className="row">
                <div className="col-8">
                    <h6>Sort calls</h6>
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-2"><h6>Call Start</h6></div>
                <div className="col-2"><h6>Phone Number</h6></div>
                <div className="col-2"><h6>Call Duration</h6></div>
                <div className="col-2"><h6>Delete Call</h6></div>
                <div className="col-2"><h6>Likes</h6></div>
            </div>
            {calls.map(hist => <CallHistory {...hist} key={hist.createdAt} />)}
        </div>
    );

}

