import React from 'react';
import { KeypadDisplay } from '../components/KeypadDisplay';
import { Keypad } from '../components/Keypad';
import Buttons from '../components/Buttons';

export const PhoneContainer = () => {

    return (
        <div className="container">
            <KeypadDisplay />
            <Keypad />
            <Buttons />
        </div>
    );

}