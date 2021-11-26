import { useSelector, useDispatch } from 'react-redux';

export const KeypadDisplay = () => {

    function stop() {
        debugger;
        return "poo"
    }

    return (
        <div className="row">
            <div className="col-3">
                <div className="alert alert-secondary text-center" role="alert">
                    Number: {stop()}
                </div>
            </div>
        </div>
    )

}