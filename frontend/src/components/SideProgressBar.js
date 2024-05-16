import React from "react";
import "../App.css";
import SimilarityScorePopUp from "./SimilarityScorePopUp";
import { Link } from "react-router-dom";
import HelpButton from "./HelpButton";
import ToolTip from "./ToolTip";

const SideProgressBar = () => {
    return (
        <div className="SideCheckList">
            <SimilarityScorePopUp />
            {/* Our solution */}
            <div className="ListHeader SimilarityScoreHeader">
                <div>
                    <div className="SimilarityScoreTitleAndHelp">
                        <h3>SIMILARITY SCORE</h3>
                        {/* <span className="material-icons">help</span> */}
                        <HelpButton/>
                    </div>
                    <Link to='/table'> 
                        <h4 className="HyperLink">View Reports</h4>
                    </Link>
                </div>

                {/* Insert the output main percentage below along with the similarity score scale. */}
                <h4>84% - Very Likely</h4>
            </div>
            <div className="ListHeader">
                <h3>REPORT PROGRESS</h3>
                <div className="ProgressCheck">
                    <span class="material-icons">done_all</span>
                </div>
            </div>
            <div className="ListItem">
                <div className="CheckBox Filled"></div>
                <h4>About you</h4>
            </div>

            {/* Section similarity percentage hardcoded. For MVP, only for show */}
            <div className="ListItem">
                <div className="CheckBox Filled"></div>
                <div className="SectionChecks">
                    <h4>Report description</h4>
                    <ToolTip content="Similarity to all submitted reports’ description" direction="bottom">
                        <h4>60%</h4>
                    </ToolTip>
                </div>
            </div>
            <div className="ListItem">
                <div className="CheckBox Filled"></div>
                <div className="SectionChecks">
                    <h4>Bug location</h4>
                    <ToolTip content="Information is taken into consideration" direction="bottom">
                        <h4><span class="material-icons">manage_search</span></h4>
                    </ToolTip>
                </div>
            </div>
            <div className="ListItem">
                <div className="CheckBox"></div>
                <div className="SectionChecks">
                    <h4>The problem</h4>
                    <h4>13%</h4>
                </div>
            </div>
            <div className="ListItem">
                <div className="CheckBox NotThereYet"></div>
                <h4>The cause</h4>
            </div>
            <h3>This is a demo, and the connection to the AI is disabled for security reasons. Broken links are intentional. The data is illustrative.</h3>
        </div>
    );
};

export default SideProgressBar;
