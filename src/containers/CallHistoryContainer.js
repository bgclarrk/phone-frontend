import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCallsAction } from '../redux/actionCreators';
import { selectAllCalls } from '../redux/historySlice';
import CallHistory from '../components/CallHistory';

export function CallHistoryContainer() {
    const dispatch = useDispatch()
    const calls = useSelector(selectAllCalls)

    useEffect(() => {
        debugger
        getCallsAction()
    }, [dispatch])

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
            {/* {calls.map(call => <CallHistory {...calls} key={call.createdAt}/>)} */}
        </div>
    );

}