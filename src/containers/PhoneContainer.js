import React from "react";
import KeypadDisplay from "../components/KeypadDisplay";
import Keypad from "../components/Keypad";
import Buttons from "../components/Buttons";

class PhoneContainer extends React.Component {

    render() {
        return (
            <div class="container">
                <KeypadDisplay />
                <Keypad />
                <Buttons />
            </div>
        );
    };

}

export default PhoneContainer;