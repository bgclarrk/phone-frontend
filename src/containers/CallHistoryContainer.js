import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../redux/historySlice';
import CallHistory from '../components/CallHistory';

export function CallHistoryContainer() {
    const dispatch = useDispatch();
    const { history } = useSelector(state => state.history.callHistory);

    useEffect(() => {
        dispatch(getHistory())
    },[history])

    return (
        <div className="container">
            <div className="row">
                <h2>Call History</h2>
            </div>
            <div className="row">
                <div className="col-3"><h6>Call Start</h6></div>
                <div className="col-3"><h6>Phone Number</h6></div>
                <div className="col-3"><h6>Call Duration</h6></div>
                <div className="col-3"><h6>Delete Call</h6></div>
            </div>
            {useSelector(state => state.history.callHistory)
                .map(hist => <CallHistory {...hist} key={hist.createdAt} />)}
        </div>
    );

}

