import React from 'react';

class Buttons extends React.Component {

    state = {
        duration: 0,
    }

    render() {
        return (
            <div className="row text-center">
                <div className="col-3">
                    <button type="button" className="btn btn-success btn-lg">Start</button>
                    <button type="button" className="btn btn-danger btn-lg">end</button>
                </div>
            </div>
        )
    }

}

export default Buttons;