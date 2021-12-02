import { useSelector } from 'react-redux';
import { CallDetails } from './CallDetails';

export const Display = () => {
    const call = useSelector(state => state.call)

    return (
        <div className="row">
            <div className="col-3">
                <div className="alert alert-secondary text-center" role="alert">
                    {call.phoneNumber}
                    <CallDetails />
                </div>
            </div>
        </div>
    )

}