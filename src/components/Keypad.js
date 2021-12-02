import { useDispatch } from 'react-redux';
import { addNumber } from '../redux/phoneSlice';

export function Keypad() {
    const dispatch = useDispatch()

    return (
        <div class="keypad-container">
            <div className="row">
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("1"))}
                        id="1"
                        className="btn btn-primary btn-lg keypad"
                    >
                        1
                    </button>
                </div>
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("2"))}
                        id="2"
                        className="btn btn-primary btn-lg keypad"
                    >
                        2
                    </button>
                </div>
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("3"))}
                        id="3"
                        className="btn btn-primary btn-lg keypad"
                    >
                        3
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("4"))}
                        id="4"
                        className="btn btn-primary btn-lg keypad"
                    >
                        4
                    </button>
                </div>
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("5"))}
                        id="5"
                        className="btn btn-primary btn-lg keypad"
                    >
                        5
                    </button>
                </div>
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("6"))}
                        id="6"
                        className="btn btn-primary btn-lg keypad"
                    >
                        6
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("7"))}
                        id="7"
                        className="btn btn-primary btn-lg keypad"
                    >
                        7
                    </button>
                </div>
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("8"))}
                        id="8"
                        className="btn btn-primary btn-lg keypad"
                    >
                        8
                    </button>
                </div>
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("9"))}
                        id="9"
                        className="btn btn-primary btn-lg keypad"
                    >
                        9
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("#"))}
                        id="0"
                        className="btn btn-primary btn-lg keypad"
                    >
                        &#x204E;
                    </button>
                </div>
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("0"))}
                        id="0"
                        className="btn btn-primary btn-lg keypad"
                    >
                        0
                    </button>
                </div>
                <div className="col-1 text-center">
                    <button
                        type="button"
                        onClick={() => dispatch(addNumber("#"))}
                        id="0"
                        className="btn btn-primary btn-lg keypad"
                    >
                        &#35;
                    </button>
                </div>
            </div>
        </div>
    )

}