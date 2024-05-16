import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./App.css";
import Form from "./screens/Form";
import ReportTable from "./screens/Report_Table";
import ReportComparisonScreen from "./screens/ReportComparisonScreen";
import { Routes, Route } from "react-router-dom";
import ViewReport from "./screens/ViewReport";

/* Frontend App.js */
function App() {
    // Send this data to API for similarity analysis

    const [reportContent, setReportContent] = useState({
        formPage: "The Problem",
    });

    const { pathname } = useLocation();

    // Scroll to the top whenever the location changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleGetReportContent = async (fieldsList) => {
        try {
            let tempReportContent = { ...reportContent }; // Make a copy of reportContent
    
            for (let i = 0; i < fieldsList.length; i++) {
                let field = fieldsList[i];
                tempReportContent["fieldTitle" + (i + 1)] = field.fieldTitle;
                tempReportContent["filedContent" + (i + 1)] = field.fieldContent;
                tempReportContent["formID"] = 0; //For now we can assume same form and user for mvp
                tempReportContent["userID"] = 0;
            }
    
            // Update reportContent using functional update
            setReportContent(prevReportContent => ({ ...prevReportContent, ...tempReportContent }));
    
            console.log(reportContent);
    
            const response = await fetch('http://localhost:9000/api/similarities/postUserInput', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tempReportContent), // Send tempReportContent here
            });
    
            if (!response.ok) {
                throw new Error('Failed to send data to the server');
            }
    
            console.log('Data sent successfully to server');
        } catch (error) {
            console.error('Error:', error)
        }
    };

    // Store data received from API after analysis

    // return <Form />;
    // Comment out <Form /> and such to see

    // Pass in relevant/corresponding data to these components

    return (
        <Routes>
            <Route path="" element={<Form getReportContent={handleGetReportContent} />} />
            <Route path="/table" element={<ReportTable />} />
            <Route path="/table/comparison" element={<ReportComparisonScreen />} />
            <Route path="/view-report" element={<ViewReport />} />
        </Routes>
    );
    // return <ReportComparisonScreen />;
}

export default App;
