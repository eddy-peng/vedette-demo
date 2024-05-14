import vedetteIcon from "../images/vedetteIcon.svg";
import React, { useState } from "react";

const VedetteButton = (props) => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {onClick} = props;

    const handleClick = () => {
        setIsLoading(true); // Show loading spinner
        setPopupVisible(true); // Show popup

        // Simulate asynchronous operation
        setTimeout(() => {
            setPopupVisible(false); // Hide the popup after 3 seconds
            setIsLoading(false); // Hide loading spinner
        }, 3000);
        if (onClick) {
            onClick();
        }
    };

return (
    <div className="circle-container">
        {popupVisible && ( // Conditionally render the popup
            <div className="popup visible">
                <p className="popup-text">Vedette Analyzing</p>
            </div>
        )}
        <div onClick={handleClick} className="circle">
            {isLoading ? (
                <div className="loading"></div>
            ) : (
                <img src={vedetteIcon} alt="Vedette Logo" />
            )}
        </div>
    </div>
);
};

export default VedetteButton;