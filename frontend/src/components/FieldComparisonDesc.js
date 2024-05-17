const FieldComparisonDesc = (props) => {
    return (
        <div className="fieldComparison">
            <div className="fieldComparisonInfo">
                <div className="fieldDescription">
                    <text>FIELD</text>
                    <h1>Report Description</h1>
                </div>
                <div className="fieldDescription">
                    <text>SIMILARITY</text>
                    <h1>12% · Likely</h1>
                </div>
            </div>
            <div>
                <div className="reportsContainer">
                    <div className="comparedReport submittedReport">
                        <h2>Your Report</h2>
                        {/* <text>{props.userFieldText}</text> */}
                        <text>Element.attachShadow reported as unsupported for div with <mark className="blueHighlight">explicit XML namespace</mark> name. The call to attachShadow will fail withe the following error: <mark className="pinkHighlight">Uncaught DOMException</mark>: Failed to execute <mark className="greenHighlight">'attachShadow' on 'Element'</mark>: This element does not support attachShadow</text>
                    </div>
                    <div className="comparedReport historicalReport">
                        <h2>Report ID: 41485950</h2>
                        <text>A vulnerability has been found in <mark className="pinkHighlight">Google Chrome's CRX3 file signature validation</mark>, which would allow an attacker to embed their <mark className="greenHighlight">own malicious payload</mark> inside a legitimate <mark className="blueHighlight">CRX extension</mark> with a valid signature and key.</text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FieldComparisonDesc;
