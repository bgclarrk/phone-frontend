import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPhoneNumber } from '../redux/actionCreators';

function KeypadDisplay({getPhoneNumber, phoneNumber}) {

    useEffect(() => {
        return getPhoneNumber()
    }, [getPhoneNumber, phoneNumber])
debugger;
    return (
        <div className="row">
            <div className="col-3">
                <div className="alert alert-secondary text-center" role="alert">
                    {getPhoneNumber}
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {...state.phoneNumber}
}

export default connect(mapStateToProps, { getPhoneNumber })(KeypadDisplay);