import React from "react";
import KeypadDisplay from "../components/KeypadDisplay";
import Keypad from "../components/Keypad";
import Buttons from "../components/Buttons";
import { connect } from "react-redux";

class PhoneContainer extends React.Component {

    render() {
        return (
            <div className="container">
                <KeypadDisplay />
                <Keypad />
                <Buttons />
            </div>
        );
    };

}

const mapStateToProps = (state) => {
    return {
        phoneNumber: state.phoneNumber,
        duration: state.duration
    }
}

export default connect(mapStateToProps)(PhoneContainer);