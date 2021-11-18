import React from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import CallHistory from '../components/CallHistory';
import fetchCalls from '../actions/fetchCalls';
import deleteCalls from '../actions/deleteCalls';

function CallHistoryContainer(props) {

    useEffect(() => this.props.fetchCalls());

    return (
        <div className="container">
            <CallHistory calls={this.props.calls} />
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        calls: state.calls
    }
}

export default connect(mapStateToProps, {fetchCalls, deleteCalls})(CallHistoryContainer);