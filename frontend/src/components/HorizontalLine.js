import React from "react";
import "../App.css";
import { useEffect, useState } from "react";

const HorizontalLine = () => {
    const [numberOfDashes, setNumberOfDashes] = useState(50);

    useEffect(() => {
        const calculateDashes = () => {
            const screenWidth = window.innerWidth;
            const calculatedDashes = Math.floor(screenWidth / 16); // Adjust the division factor as needed
            setNumberOfDashes(calculatedDashes);
        };

        calculateDashes();

        // Update number of dashes on window resize
        window.addEventListener("resize", calculateDashes);

        return () => {
            // Remove event listener on component unmount
            window.removeEventListener("resize", calculateDashes);
        };
    }, []);

    const dashes = Array.from({ length: numberOfDashes }, (_, index) => index + 1);

    return (
        <div className="horizontal-line">
            <span className="start-symbol">&#60;&#33;</span>
            {dashes.map((dash) => (
                <span key={dash}>-</span>
            ))}
            <span className="end-symbol">&#62;</span>
        </div>
    );
};

export default HorizontalLine;
