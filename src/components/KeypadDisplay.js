import { useDispatch } from 'react-redux';
import { getPhoneNumber } from '../redux/phoneSlice';

export function KeypadDisplay() {

    return (
        <div className="row">
            <div className="col-3">
                <div className="alert alert-secondary text-center" role="alert">
                    Phone Number: 
                </div>
            </div>
        </div>
    )

}