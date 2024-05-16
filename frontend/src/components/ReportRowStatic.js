import React from "react";
import "../App.css";
import reportDataStatic from './Fake_Report_Data_Static.json';

export default function ReportRowStatic(props) {
    return (
        <div>
            {reportDataStatic.map((report) => (
                <div className="reportRowContainer" to='comparison'>
                    <div className="reportRowStatic" key={report.reportID}>
                        <div className="reportPercentContainer">
                            {/*  Insert similarlity percent value */}
                            <p className="reportPercent">23%</p> 
                        </div>
                        <div className="titlePillContainer">
                            <h1 className="reportTitle">{report.Title}</h1>
                            {/* Insert field name and similarlity percent value */}
                            <div className="pillContainer">
                                <div className="reportPill">Description · 32%</div>
                                <div className="reportPill">Technical · 11%</div>
                            </div>
                        </div>
                        <h2 className="reportValue">{report.Status}</h2>
                        <h2 className="reportValue">{report.reportID}</h2>
                        <h2 className="reportValue">{report.Created}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}
