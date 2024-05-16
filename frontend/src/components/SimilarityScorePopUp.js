import React, { useState } from "react";
import "../App.css";

const SimilarityScorePopUp = () => {

    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="SimilarityScorePopUp FadeInRight">

                    {/* Code block below is for green popup. Uncomment to show!  */}
                    {/* <div className="ColorSign SignGreen">
                        <span class="material-icons">sentiment_very_satisfied</span>
                    </div>
                    <div>
                        <h3>UNLIKELY DUPLICATE</h3>
                        <h4>Report similarity between 0-24%</h4>
                    </div>
                    <div className="CloseIcon" onClick={handleClose}>
                        <span className="material-icons">close</span>
                    </div> */}

                    {/* Code block below is for yellow popup. Uncomment to show! */}
                    {/* <div className="ColorSign SignYellow">
                        <span class="material-icons">sentiment_neutral</span>
                    </div>
                    <div>
                        <h3>LIKELY DUPLICATE</h3>
                        <h4>Report similarity between 25-49%</h4>
                    </div>
                    <div className="CloseIcon" onClick={handleClose}>
                        <span className="material-icons">close</span>
                    </div> */}

                    {/* Code block below is for orange popup. Uncomment to show! */}
                    {/* <div className="ColorSign SignOrange">
                        <span class="material-icons">sentiment_dissatisfied</span>
                    </div>
                    <div>
                        <h3>HIGHLY LIKELY DUPLICATE</h3>
                        <h4>Report similarity between 50-74%</h4>
                    </div>
                    <div className="CloseIcon" onClick={handleClose}>
                        <span className="material-icons">close</span>
                    </div> */}

                    {/* Code block below is for red popup. Uncomment to show! */}
                    <div className="ColorSign SignRed">
                        <span class="material-icons">mood_bad</span>
                    </div>
                    <div>
                        <h3>VERY LIKELY DUPLICATE</h3>
                        <h4>Report similarity between 75-99%</h4>
                    </div>
                    <div className="CloseIcon" onClick={handleClose}>
                        <span className="material-icons">close</span>
                    </div>

                </div>
            )}
        </>
    );

}

export default SimilarityScorePopUp;