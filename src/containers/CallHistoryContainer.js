import React from "react";
import { connect } from 'react-redux';
import CallHistory from "../components/CallHistory";
import fetchCalls from "../actions/fetchCalls";
import deleteCalls from '../actions/deleteCalls';

class CallHistoryContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCalls();
    }

    render() {
        return (
            <div className="container">
                <CallHistory calls={this.props.calls} />
            </div>
        );
    };

}

const mapStateToProps = (state) => {
    return {
        calls: state.calls
    }
}

export default connect(mapStateToProps, {fetchCalls, deleteCalls})(CallHistoryContainer);