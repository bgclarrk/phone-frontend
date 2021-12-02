import React from 'react';
import { Display } from '../components/Display';
import { Keypad } from '../components/Keypad';
import Buttons from '../components/Buttons';

export const PhoneContainer = () => {

    return (
        <div className="container">
            <Display />
            <Keypad />
            <Buttons />
        </div>
    );

}