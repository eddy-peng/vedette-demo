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
                <h4>60% - Highly Likely</h4>
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
                <h4>The problem</h4>

                {/* Uncomment the below blurb of code to add the section percentage for The problem and delete the above h4 */}
                {/* <div className="SectionChecks">
                    <h4>The problem</h4>
                    <h4>20%</h4>
                </div> */}
            </div>
            <div className="ListItem">
                <div className="CheckBox NotThereYet"></div>
                <h4>The cause</h4>
            </div>
        </div>
    );
};

export default SideProgressBar;
