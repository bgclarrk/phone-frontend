import React from 'react';

class KeypadDisplay extends React.Component {
    // componentDidMount() {
    //     debugger;
    // }
    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <div className="alert alert-secondary text-center" role="alert">
                        {/* {this.props.store.getState().phoneNumber} */}
                    </div>
                </div>
            </div>
        )
    }

}

export default KeypadDisplay;