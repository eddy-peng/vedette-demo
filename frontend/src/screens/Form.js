import HorizontalLine from "../components/HorizontalLine.js";
import TextEntryFieldOne from "../components/TextEntryFieldOne.js";
import TextEntryFieldTwo from "../components/TextEntryFieldTwo.js";
import SideProgressBar from "../components/SideProgressBar.js";
import { useEffect, useState } from "react";
import VideoThumbnail from "../images/videoThumbnail.svg";

const Form = (props) => {
    const [fieldsInfo, setFieldsInfo] = useState([]);

    const handleAddFieldInfo = (field, fieldHeading) => {
        // Check if the field already exists in fieldsInfo
        const fieldIndex = fieldsInfo.findIndex((item) => item.fieldTitle === fieldHeading);

        if (fieldIndex !== -1) {
            // If field exists, update its content
            const updatedFieldsInfo = [...fieldsInfo];
            updatedFieldsInfo[fieldIndex].fieldContent = field.fieldContent;
            setFieldsInfo(updatedFieldsInfo);
        } else {
            // If field doesn't exist, add it to fieldsInfo
            setFieldsInfo((prevFieldsInfo) => [
                ...prevFieldsInfo,
                { fieldTitle: fieldHeading, fieldContent: field.fieldContent },
            ]);
        }
        /*
        // send data to backend endpoint
        fetch('http://localhost:3000/api/similarities/postUserInput', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fieldTitle: fieldHeading, fieldContent: field.fieldContent }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Data saved');
            } else {
                console.error('Failed to save')
            }
        })
        .catch(error => {
            console.error('Error saving:', error);
        });
        */
    };

    // console.log(fieldsInfo);

    useEffect(() => {
        props.getReportContent(fieldsInfo);
    }, [fieldsInfo]);

    return (
        // FormContainer encompasses all
        <div className="FormContainer">

            <div className="FormLock">
                <h3>Vedette Locked 🔒</h3>
                <h1>Your Screen Size Is Too Small 💻</h1>
                <p>Due to scope and mobile limitations of the live bug reporting form, Vedette only works on laptop and desktop screens (display sizes 1400px and above).</p>
                <p>Additinally, ensure that your browser is on 100% zoom size or less.</p>
                <p>Aren't on a large enough screen? Feel free to watch Vedette's video demo!</p>
                <a href="https://youtu.be/lXVBjWtMLxo" target="_blank">
                    <h3>YouTube Video Demo Link</h3>
                    <img className="lock-thumbnail" src={VideoThumbnail} alt="Final Video Demo Thumbnail" />
                </a>
                <h3 className="lock-footer">Google x iSchool 2024</h3>
            </div>

            {/* FormHeader is where the Form Name & the close Icon goes */}
            <header className="FormHeader">
                <h2>Google Product Form</h2>
                <div className="CloseIcon">
                    <span className="material-icons">close</span>
                </div>
            </header>

            {/* FormBody is the main contents of the page */}
            <body className="FormBody">
                {/* TheProblemForm is where the prompts and inputs are*/}
                <div className="TheProblemForm">
                    <HorizontalLine />

                    <h1>The problem</h1>

                    <TextEntryFieldOne
                        heading="Please describe the technical details of the vulnerability"
                        getField={handleAddFieldInfo}
                    />
                    <TextEntryFieldTwo
                        heading="Please briefly explain who can exploit the vulnerability, and what they gain
                        when doing so."
                        getField={handleAddFieldInfo}
                    />

                    {/* PROMPT #3: upload file section */}
                    <h2 className="UploadSection">Upload file</h2>
                    <h3>
                        You can add a file to your report to provide additional information on the
                        vulnerability. Max file size is 50MB.
                    </h3>
                    <div className="UploadButton">
                        <button>
                            <span className="material-icons">attach_file</span>SELECT FILE
                        </button>
                    </div>

                    {/* buttons at the end of the form */}
                    <div className="ButtonSet">
                        <button>BACK</button>
                        <button>CONTINUE</button>
                    </div>
                </div>

                {/* SideCheckList is where the progress checklist is located */}
                <SideProgressBar />
            </body>
        </div>
    );
};

export default Form;
