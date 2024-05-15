import React, { useState, useRef } from "react";
import "../App.css";
import VedetteButton from "./VedetteButton";

const TextAreaOne = (props) => {
    const [fieldInput, setFieldInput] = useState("");
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        setFieldInput(event.target.value);
    };

    const handleButtonClick = () => {
        if (props.onButtonClick) {
            // Pass fieldInput value to parent when button is clicked
            props.onButtonClick(fieldInput);
        }
    };

    return (
        <div className="TextAreaAndVedetteContainer">
            <div className="TextAreaContainer">
                <div className="TabContainer">
                    <div className="Column Active">
                        <p>WRITE</p>
                    </div>
                    <div className="Column">
                        <p>PREVIEW</p>
                    </div>
                </div>
                <textarea>When re[Symbol.replace] is called on RegExp objects that utilize RAM while no longer in fast mode or with modified initial RegExp objects, v8 will call into Runtime:: kRegExp ReplaceRT [1]. If the RegExp is global, it will eventually reach this loop [2] which calls into a privileged RegExpUtils:: SetAdvanced String Index</textarea>
                {/* <textarea ref={inputRef} value={fieldInput} onChange={handleInputChange}></textarea> */}
            </div>
            <VedetteButton onClick={handleButtonClick} />
        </div>
    );
};

export default TextAreaOne;