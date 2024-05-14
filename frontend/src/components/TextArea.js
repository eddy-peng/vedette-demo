import React, { useState, useRef } from "react";
import "../App.css";
import VedetteButton from "./VedetteButton";

const TextArea = (props) => {
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
                <textarea ref={inputRef} value={fieldInput} onChange={handleInputChange}></textarea>
            </div>
            <VedetteButton onClick={handleButtonClick} />
        </div>
    );
};

export default TextArea;