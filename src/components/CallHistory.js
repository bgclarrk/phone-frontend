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
            <div class="row">
                <h2>Call History</h2>
            </div>
            <div class="row">
                <div class="col-3"><h6>Call Start</h6></div>
                <div class="col-3"><h6>Phone Number</h6></div>
                <div class="col-3"><h6>Call Duration</h6></div>
                <div class="col-3"><h6>Delete Call</h6></div>
            </div>
            {props.calls.map(call => {
                return (
                    <div class="row" key={call.created_at}>
                        <div class="col-3">&nbsp; {formattedTime(call.created_at)}</div>
                        <div class="col-3">&nbsp; {formattedPhone(call.phone_number)}</div>
                        <div class="col-3">&nbsp; {formattedDuration(call.duration)}</div>
                        <div id={call.id} class="col-3">&nbsp; X</div>
                    </div>
                )
            })}
        </div>
    )

}

export default CallHistory;