import { useSelector } from 'react-redux';

export const KeypadDisplay = () => {

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <div className="alert alert-secondary text-center" role="alert">
                        {useSelector(state => state.call.phoneNumber)}
                    </div>
                </div>
            </div>
        </>
    )

}