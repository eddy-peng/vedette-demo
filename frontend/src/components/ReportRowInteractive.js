import React from "react";
import "../App.css";
import reportDataInteractive from './Fake_Report_Data_Interactive.json';
import { Link } from "react-router-dom";

export default function ReportRowInteractive(props) {
    return (
        <div>
            <div className="pagination">
                <span class="material-icons">refresh</span>
                <div className="pageNav">
                    <p>1-5 of 25</p>
                    <span className="material-icons">navigate_before</span>
                    <span className="material-icons nextAvailable">navigate_next</span>
                </div>
            </div>

            <div className="headingsContainer">
                <div className="reportPercentContainer">
                    <h2 className="valueHeading">OVERALL</h2>
                </div>
                <div className="titlePillContainer">
                    <h2 className="valueHeading">TITLE</h2>
                </div>
                <h2 className="valueHeading">STATUS</h2>
                <h2 className="valueHeading">ID</h2>
                <h2 className="valueHeading">CREATED</h2>
            </div>


            {reportDataInteractive.map((report) => (
                <Link className="reportRowContainer" to='comparison'>
                    <div className="reportRow" key={report.reportID}>
                        <div className="reportPercentContainer">
                            {/*  Insert similarlity percent value */}
                            <p className="reportPercent">92%</p> 
                        </div>
                        <div className="titlePillContainer">
                            <h1 className="reportTitle">{report.Title}</h1>
                            {/* Insert field name and similarlity percent value */}
                            <div className="pillContainer">
                                <div className="reportPill">Description · 12%</div>
                                <div className="reportPill">Technical · 75%</div>
                            </div>
                        </div>
                        <h2 className="reportValue">{report.Status}</h2>
                        <h2 className="reportValue">{report.reportID}</h2>
                        <h2 className="reportValue">{report.Created}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}
