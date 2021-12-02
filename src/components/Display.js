import { useSelector } from 'react-redux';

export const Display = () => {
    const status = useSelector(state => state.call.status)
    const duration = useSelector(state => state.call.duration)

    const callInProgress = () => {
        if (status) {
            return (
                <div className="row">
                    <div className="col-1">
                        "Call in progress"
                    </div>
                    <div className="col-2 text-right">
                        <h6>{duration}</h6>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <div className="alert alert-secondary text-center" role="alert">
                        {useSelector(state => state.call.phoneNumber)}
                    </div>
                </div>
            </div>
            {callInProgress}
        </>
    )

}