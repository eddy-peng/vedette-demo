import TextAreaTwo from "./TextAreaTwo";
import MarkdownTags from "./MarkdownTags";
import { useState } from "react";

const TextEntryFieldTwo = (props) => {
    const [fieldInputInfo, setFieldInputInfo] = useState({
        fieldTitle: props.heading,
        fieldContent: "",
    });

    // Function to update fieldContent state when button is clicked
    const handleButtonClick = (text) => {
        // Update state only when the button is clicked
        setFieldInputInfo({
            ...fieldInputInfo,
            fieldContent: text,
        });
        console.log("Button clicked");
    };

    // Testing
    console.log("Field Content:", fieldInputInfo);

    return (
        <div>
            <h2>{props.heading}</h2>
            <MarkdownTags />
            <TextAreaTwo 
                fieldInput={fieldInputInfo.fieldContent} 
                onButtonClick={handleButtonClick} 
            />
        </div>
    );
};

export default TextEntryFieldTwo;