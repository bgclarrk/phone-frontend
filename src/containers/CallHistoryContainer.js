import React from 'react';
import { connect } from 'react-redux';
import { getCalls } from '../redux/actionCreators';
import CallHistory from '../components/CallHistory';

class CallHistoryContainer extends React.Component {

    componentDidMount() {
        this.props.getCalls();
    }

    render() {
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
                {/* {this.props.calls.map(call => <CallHistory {...call} key={call.createdAt}/>)} */}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {calls: state.calls}
}

export default connect(mapStateToProps, { getCalls })(CallHistoryContainer);