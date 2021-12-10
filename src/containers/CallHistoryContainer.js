import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory, callHistoryFilter } from '../redux/historySlice';
import CallHistory from '../components/CallHistory';

export function CallHistoryContainer() {
    const dispatch = useDispatch();

    const history = useSelector(
        (state) => {
            const all = state.history.callHistory;
            const filter = state.history.filter;
            if ( filter === null ) {
                return all;
            }
            else {
                return all.filter( h => h.phoneNumber.startsWith(filter) );
            }
        }
    );

    useEffect(() => {
        dispatch(getHistory())
    },[dispatch])

    const filter = (e) => {
        if (e) {
            dispatch(callHistoryFilter(e.target.value))
        } else {
            return history
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
            {filter().map(call => <CallHistory {...call} key={call.createdAt} />)}
        </div>
    );

}

