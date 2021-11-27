import moment from 'moment';
import { connect } from 'react-redux';
import { deleteCall } from '../redux/historySlice';

const CallHistory = ({id, phoneNumber, duration, createdAt, deleteCall}) => {
debugger;
    const formattedTime = (dateTime) => {
        return moment(dateTime).format('L LT');
    }

    const formattedPhone = (phoneNumber) => {
        let cleaned = ('' + phoneNumber).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }

    const formattedDuration = (duration) => {
        let minutes = Math.floor(duration / 60).toString();
        let seconds = (duration % 60).toString();

        if (seconds.length === 1) {
            seconds = ('0' + seconds).slice(-2);
        }
        if (minutes.length === 1) {
            minutes = ('0' + minutes).slice(-2);
        }

        return minutes + ':' + seconds
    }

    return (
        <div>
            <div className="row" key={createdAt}>
                <div className="col-3"> {formattedTime(createdAt)}</div>
                <div className="col-3"> {formattedPhone(phoneNumber)}</div>
                <div className="col-3"> {formattedDuration(duration)}</div>
                <div id={id} onClick={() => deleteCall(id)} className="col-3">
                    X
                </div>
            </div>
        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {...state.calls}
// }

export default connect(null, {deleteCall})(CallHistory);