import React from "react";

class Buttons extends React.Component {

    render() {
        return (
            <div class="row text-center">
                <div class="col-3">
                    <button type="button" class="btn btn-success">Start</button>
                    <button type="button" class="btn btn-danger">end</button>
                </div>
            </div>
        )
    }

}

export default Buttons;