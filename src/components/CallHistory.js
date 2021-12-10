import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deleteHistory } from '../redux/historySlice';
import React, {useState} from 'react';

const CallHistory = ({id, phoneNumber, duration, createdAt}) => {
    const dispatch = useDispatch();
    const [likes, setLikes] = useState(0)

    const formattedTime = (dateTime) => {
        return moment(dateTime).format('L LT');
    }

    const formattedPhone = (phoneNumber) => {
        if (phoneNumber.length === 10) {
            let cleaned = ('' + phoneNumber).replace(/\D/g, '');
            let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phoneNumber
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

    function callHistoryLikes() {
        setLikes(likes => likes + 1)
    }

    return (
        <div>
            <div className="row" key={createdAt}>
                <div className="col-2"> {formattedTime(createdAt)}</div>
                <div className="col-2"> {formattedPhone(phoneNumber)}</div>
                <div className="col-2"> {formattedDuration(duration)}</div>
                <div onClick={callHistoryLikes} className="col-2 like">
                    +  {likes}
                </div>
                <div id={id} onClick={() => dispatch(deleteHistory(id))} className="col-2 delete">
                    X
                </div>
            </div>
        </div>
    )

}

export default CallHistory;