import React from "react";
import moment from 'moment';

const CallHistory = (props) => {
    
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
            {props.calls.map(call => {
                return (
                    <div key={call.created_at}>
                        &nbsp; {formattedTime(call.created_at)}
                        &nbsp; {formattedPhone(call.phone_number)}
                        &nbsp; {formattedDuration(call.duration)}
                    </div>
                )
            })}
        </div>
    )

}

export default CallHistory;