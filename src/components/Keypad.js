import React from 'react';

class Keypad extends React.Component {

    render() {
        return (
            <div className="text-center">
                <div className="row text-center">
                    <div className="col-1">
                        <button type="button" id="1" className="btn btn-primary btn-lg keypad">1</button>
                    </div>
                    <div className="col-1">
                        <button type="button" id="2" className="btn btn-primary btn-lg keypad">2</button>
                    </div>
                    <div className="col-1">
                        <button type="button" id="3" className="btn btn-primary btn-lg keypad">3</button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-1">
                        <button type="button" id="4" className="btn btn-primary btn-lg keypad">4</button>
                    </div>
                    <div className="col-1">
                        <button type="button" id="5" className="btn btn-primary btn-lg keypad">5</button>
                    </div>
                    <div className="col-1">
                        <button type="button" id="6" className="btn btn-primary btn-lg keypad">6</button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-1">
                        <button type="button" id="7" className="btn btn-primary btn-lg keypad">7</button>
                    </div>
                    <div className="col-1">
                        <button type="button" id="8" className="btn btn-primary btn-lg keypad">8</button>
                    </div>
                    <div className="col-1">
                        <button type="button" id="9" className="btn btn-primary btn-lg keypad">9</button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-1">
                        <button type="button" id="asterisk" className="btn btn-primary btn-lg keypad">&#x204E;</button>
                    </div>
                    <div className="col-1">
                        <button type="button" id="0" className="btn btn-primary btn-lg keypad">0</button>
                    </div>
                    <div className="col-1">
                        <button type="button" id="hashtag" className="btn btn-primary btn-lg keypad">&#35;</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Keypad;