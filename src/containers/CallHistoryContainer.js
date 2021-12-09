import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory, getCallHistoryFromStore } from '../redux/historySlice';
import CallHistory from '../components/CallHistory';

export function CallHistoryContainer() {
    const dispatch = useDispatch();
    const calls = useSelector(getCallHistoryFromStore);
    let input = null

    useEffect(() => {
        dispatch(getHistory())
    },[dispatch])

    const sortInput = (e) => {
        input = e.target.value;
        let sortedCalls = calls.map(call => call.phoneNumber.startsWith(input))
        console.log(sortedCalls)
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Call History</h2>
            </div>
            <div className="row">
                <div className="col-8">
                    <h6>Sort calls</h6>
                    <input type="text" onChange={sortInput} className="sortInput" />
                </div>
            </div>
            <div className="row">
                <div className="col-2"><h6>Call Start</h6></div>
                <div className="col-2"><h6>Phone Number</h6></div>
                <div className="col-2"><h6>Call Duration</h6></div>
                <div className="col-2"><h6>Delete Call</h6></div>
                <div className="col-2"><h6>Likes</h6></div>
            </div>
            {calls.map(call => <CallHistory {...call} key={call.createdAt} />)}
        </div>
    );

}

