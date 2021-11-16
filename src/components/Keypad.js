import React from "react";

class Keypad extends React.Component {

    render() {
        return (
            <div class="text-center">
                <div class="row text-center">
                    <div class="col-1">
                        <button type="button" id="1" class="btn btn-primary btn-lg keypad">1</button>
                    </div>
                    <div class="col-1">
                        <button type="button" id="2" class="btn btn-primary btn-lg keypad">2</button>
                    </div>
                    <div class="col-1">
                        <button type="button" id="3" class="btn btn-primary btn-lg keypad">3</button>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-1">
                        <button type="button" id="4" class="btn btn-primary btn-lg keypad">4</button>
                    </div>
                    <div class="col-1">
                        <button type="button" id="5" class="btn btn-primary btn-lg keypad">5</button>
                    </div>
                    <div class="col-1">
                        <button type="button" id="6" class="btn btn-primary btn-lg keypad">6</button>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-1">
                        <button type="button" id="7" class="btn btn-primary btn-lg keypad">7</button>
                    </div>
                    <div class="col-1">
                        <button type="button" id="8" class="btn btn-primary btn-lg keypad">8</button>
                    </div>
                    <div class="col-1">
                        <button type="button" id="9" class="btn btn-primary btn-lg keypad">9</button>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-1">
                        <button type="button" id="asterisk" class="btn btn-primary btn-lg keypad">&#x204E;</button>
                    </div>
                    <div class="col-1">
                        <button type="button" id="0" class="btn btn-primary btn-lg keypad">0</button>
                    </div>
                    <div class="col-1">
                        <button type="button" id="hashtag" class="btn btn-primary btn-lg keypad">&#35;</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Keypad;