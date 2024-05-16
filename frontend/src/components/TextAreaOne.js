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
                <textarea>Steps to reproduce the problem: Create an XHTML document and create a div element with an explicitly namespaced tag assuming some parent has set xmlns:xhtml="http://www.w3.org/1999/xhtml" Attempt to call attachShadow on that element Problem Description The call to attachShadow will fail withe the following error: Uncaught DOMException: Failed to execute 'attachShadow' on 'Element': This element does not support attachShadow NB: If the XHTML namespace is the default and a div is defined as, the attachShadow method will work. This appears to be a case of the attachShadow function checking the qualified tag name as written in the XML rather than checking the XML namespace URI and name part separately.</textarea>
                {/* <textarea ref={inputRef} value={fieldInput} onChange={handleInputChange}></textarea> */}
            </div>
            <VedetteButton onClick={handleButtonClick} />
        </div>
    );
};

export default TextAreaOne;