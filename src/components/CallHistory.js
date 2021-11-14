import React from "react";

const CallHistory = (props) => {
    
    return (
        <div>
            {props.calls.map(call => {
                return (
                    <div key={call.created_at}>
                        {call.created_at} - {call.phone_number} - {call.duration}
                    </div>
                )
            })}
        </div>
    )

}

export default CallHistory;