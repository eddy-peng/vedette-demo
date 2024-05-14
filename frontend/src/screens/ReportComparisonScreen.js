import FieldComparisonTechnical from "../components/FieldComparisonTechnical.js";
import FieldComparisonDesc from "../components/FieldComparisonDesc.js";
import HorizontalLine from "../components/HorizontalLine.js";
import ExportButton from "../components/ExportButton.js";
import placeholderIllustration from "../images/placeholderIllustration.svg";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoThumbnail from "../images/videoThumbnail.svg";

const ReportComparisonScreen = () => {
    //  Backup hardcode to fill in the fields
    //  const fakeReportFieldsData = [
    //     {
    //         field: "Report Description",
    //         similarityPercentage: "42% · Likely",
    //         userFieldText: "When re[Symbol.replace] is called on RegExp objects that utilize RAM while no longer in fast mode or with modified initial RegExp objects, v8 will call into Runtime:: kRegExp ReplaceRT [1]. If the RegExp is global, it will eventually reach this loop [2] which calls into a privileged RegExpUtils:: SetAdvanced String Index",
    //         historicalReportID: "319632893",
    //         historicalReportFieldText: "Calling re[Symbol.replace] on modified or non-fast mode RegExp objects triggers Runtime::kRegExpReplaceRT. If the RegExp has privileged permissions, a loop repeatedly calls RegExpUtils:: AdvanceStringIndex to update last_index on RAM, passing it directly to SetLastIndex for tracking match positions. ",
    //     },
    //     {
    //         field: "The Problem (Technical)",
    //         similarityPercentage: "72% · Highly Likely",
    //         userFieldText: "re.exec = function() {gc(); // Move `re` to oldspace using a mark-sweep garbage delete re.exec; re.lastIndex = 1073741823; RegExp.prototype.exec = function() {throw ''; // Break out of Regexp.replace}; return match_object;};",
    //         historicalReportID: "319632893",
    //         historicalReportFieldText: "const customizeExecMethod = function() {    delete customizeExecMethod;    // Set lastIndex to a special value, indicating a HeapNumber    re.lastIndex = 202342355;    RegExp.prototype.exec = function() {        throw 'CustomException';    }; return customMatchObject;};",
    //     },
    // ];

    //Here until the line which has return() is all the setup for calling the endpoint, accepting the output,
    //and format it in a displayable format.
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:9000/api/similarities/similarCheck");
    //             const result = await response.json();
    //             setData(result);
    //             console.log(result);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // if (data === null) {
    //     return <p>Loading...</p>;
    // }

    // const something = data.map((item) => ({
    //     reportID: item.reportID,
    //     title: item.title,
    //     severity: item.severity,
    //     priority: item.priority,
    //     status: item.status,
    //     created: item.created_date,
    // }));

    const handleClickViewReport = () => {
        // Open ViewReport in a new tab
        window.open("/view-report", "_blank");
    };

    return (
        <div className="singleReportComparisonBackground">
            <div className="FormLock">
                <h3>Vedette Locked 🔒</h3>
                <h1>Move To A Larger Device 💻</h1>
                <p>Due to scope and mobile limitations of the live bug reporting form, Vedette only works on laptop and desktop screens (display sizes 1400px and above)</p>
                <a href="https://youtu.be/lXVBjWtMLxo" target="_blank">
                    <h3>YouTube Video Demo Link</h3>
                    <img className="lock-thumbnail" src={VideoThumbnail} alt="Final Video Demo Thumbnail" />
                </a>
                <h3 className="lock-footer">Google x iSchool 2024</h3>
            </div>
            <div className="reportComparisonPopup">
                <div className="singleReportComparison">
                    <div className="popupControls">
                        <div className="goBack">
                            <Link to="/table">
                                <span
                                    className="material-icons"
                                    style={{ color: "white" }}
                                    onMouseEnter={(e) => (e.target.style.color = "gray")}
                                    onMouseLeave={(e) => (e.target.style.color = "white")}
                                >
                                    arrow_back
                                </span>
                                <h4 style={{ color: "white" }}>Back to similar reports</h4>
                            </Link>
                        </div>
                        <div className="CloseIcon">
                            <Link to="/">
                                <span
                                    className="material-icons"
                                    style={{ color: "white" }}
                                    onMouseEnter={(e) => (e.target.style.color = "gray")}
                                    onMouseLeave={(e) => (e.target.style.color = "white")}
                                >
                                    close
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="singleReportMain reportMain headerContainer">
                        <div className="totalContainer">
                            <div className="valueHeading">OVERALL</div>
                            {/* Insert total calcualted percentage below */}
                            <div className="totalPercent">60%</div>
                        </div>
                        <div className="tableOverview">
                            <div>
                                <h1>Remove "password" from turn off synch screen</h1>
                                <p>
                                    {" "}
                                    Explore how each field of your current form compares to this historical report based on three attributes. 
                                    View the entire historical report document at your discretion. 
                                </p>
                            </div>
                            <div className="view-and-export-container">
                                <button onClick={handleClickViewReport}>VIEW REPORT</button>
                                <ExportButton />
                            </div>
                        </div>
                    </div>
                    <HorizontalLine />
                    <div className="attributeKeyContainer">

                        <div className="keyModule">
                            <p className="keyTitle">ATTACK VECTOR</p>
                            <div className="keyItem">
                                <span className="Dot Pink"></span>
                                <p>Local</p>
                            </div>
                        </div>

                        <div className="keyModule">
                            <p className="keyTitle">MEMORY ACCESS TYPE</p>
                            <div className="keyItem">
                                <span className="Dot Blue"></span>
                                <p>Out-of-bound Write</p>
                            </div>
                        </div>

                        <div className="keyModule">
                            <p className="keyTitle">THREAT TYPE</p>
                            <div className="keyItem">
                                <span className="Dot Green"></span>
                                <p>Information Disclosure</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FieldComparisonDesc />
                    <FieldComparisonTechnical />
                    {
                        /*This is where we use the stored endpoint output to fill in the fields we want*/
                        // fakeReportFieldsData.map((item, index) => (
                        //     <FieldComparison
                        //         key={index} // Use index as the key if items don't have unique identifiers
                        //         field={item.title} //Refer to the endpoints for what fields you get
                        //         similarityPercentage={item.title}
                        //         userFieldText={item.title}
                        //         historicalReportID={item.title}
                        //         historicalReportFieldText={item.title}
                        //     />
                        // ))
                    }
                </div>
                <div className="PlaceholderBlurb">
                    <h2>Continue Filling Out Your Report</h2>
                    <img src={placeholderIllustration} alt="Logo" />
                    <p>More comparisons will appear as text fields are populated</p>
                </div>
            </div>
        </div>
    );
};

export default ReportComparisonScreen;
