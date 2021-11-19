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
                <CallHistory calls={this.props.calls} />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {calls: state.calls}
}

export default connect(mapStateToProps, { getCalls })(CallHistoryContainer);