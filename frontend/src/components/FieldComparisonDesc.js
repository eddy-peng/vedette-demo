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
                    <h1>48% · Likely</h1>
                </div>
            </div>
            <div>
                <div className="reportsContainer">
                    <div className="comparedReport submittedReport">
                        <h2>Your Report</h2>
                        {/* <text>{props.userFieldText}</text> */}
                        <text>When re[Symbol.replace] is called on <mark className="blueHighlight">RegExp objects that utilize RAM</mark> while no longer in fast mode or with modified initial RegExp <mark className="pinkHighlight">objects, v8 will call into Runtime:: kRegExp</mark> ReplaceRT [1]. If the RegExp is global, it will eventually reach this loop [2] which calls into a <mark className="greenHighlight">privileged RegExpUtils:: SetAdvanced String Index</mark></text>
                    </div>
                    <div className="comparedReport historicalReport">
                        <h2>Report ID: 1234567</h2>
                        <text>When re[Symbol.replace] is called on <mark className="blueHighlight">RegExp objects that utilize RAM</mark> while no longer in fast mode or with modified initial RegExp <mark className="pinkHighlight">objects, v8 will call into Runtime:: kRegExp</mark> ReplaceRT [1]. If the RegExp is global, it will eventually reach this loop [2] which calls into a <mark className="greenHighlight">privileged RegExpUtils:: SetAdvanced String Index</mark></text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FieldComparisonDesc;
