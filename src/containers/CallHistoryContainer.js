import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory, filterCalls, getCallHistoryFromStore, getfilteredCallHistoryFromStore } from '../redux/historySlice';
import CallHistory from '../components/CallHistory';

export function CallHistoryContainer() {
    const dispatch = useDispatch();
    const calls = useSelector(getCallHistoryFromStore);
    const filteredCalls = useSelector(getfilteredCallHistoryFromStore)

    useEffect(() => {
        dispatch(getHistory())
    },[dispatch])

    const filter = (e) => {
        if (e) {
            dispatch(filterCalls(e.target.value))
            return filteredCalls.map(call => <CallHistory {...call} key={calls.createdAt} />)
        } else {
            return calls.map(call => <CallHistory {...call} key={call.createdAt} />)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Call History</h2>
            </div>
            <div className="row">
                <div className="col-8">
                    <h6>Sort calls</h6>
                    <input type="text" onChange={(e) => filter(e)} className="sortInput" />
                </div>
            </div>
            <div className="row">
                <div className="col-2"><h6>Call Start</h6></div>
                <div className="col-2"><h6>Phone Number</h6></div>
                <div className="col-2"><h6>Call Duration</h6></div>
                <div className="col-2"><h6>Likes</h6></div>
                <div className="col-2"><h6>Delete Call</h6></div>
            </div>
            {filter()}
        </div>
    );

}

