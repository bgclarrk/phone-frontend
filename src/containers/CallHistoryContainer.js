import React from "react";
import { connect } from 'react-redux';
import CallHistory from "../components/CallHistory";
import fetchCalls from "../actions/fetchCalls";

class CallHistoryContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCalls();
    }

    render() {
        return (
            <div>
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

export default connect(mapStateToProps, {fetchCalls})(CallHistoryContainer);