import React from "react";
import "../App.css";

function HelpButton() {
    const openPDF = () => {
        window.open(`${process.env.PUBLIC_URL}/SimilarityScoreDocumentation.pdf`, '_blank');
    };

    return (
        <div>
            <span className="material-icons" onClick={openPDF}>help</span>
        </div>
    );
}

export default HelpButton;