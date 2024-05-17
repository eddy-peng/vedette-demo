const FieldComparisonTechnical = (props) => {
    return (
        <div className="fieldComparison">
            <div className="fieldComparisonInfo">
                <div className="fieldDescription">
                    <text>FIELD</text>
                    <h1>The Problem (Technical)</h1>
                </div>
                <div className="fieldDescription">
                    <text>SIMILARITY</text>
                    <h1>75% · Very Unlikely</h1>
                </div>
            </div>
            <div>
                <div className="reportsContainer">
                    <div className="comparedReport submittedReport">
                        <h2>Your Report</h2>
                        {/* <text>{props.userFieldText}</text> */}
                        {/* <text>When re[Symbol.replace] is called on <mark className="blueHighlight">RegExp objects that utilize RAM</mark> while no longer in fast mode or with modified initial RegExp <mark className="pinkHighlight">objects, v8 will call into Runtime:: kRegExp</mark> ReplaceRT [1]. If the RegExp is global, it will eventually reach this loop [2] which calls into a <mark className="greenHighlight">privileged RegExpUtils:: SetAdvanced String Index</mark></text> */}
                        <text><mark className="greenHighlight">Attempt to call attachShadow</mark> on that element Problem Description The call to attachShadow will fail withe the following error: <mark className="blueHighlight">Uncaught DOMException: Failed to execute 'attachShadow' on 'Element'</mark>: This element does not support attachShadow NB: If the <mark className="pinkHighlight">XHTML namespace is the default</mark> and a div is defined as, the attachShadow method will work.</text>
                    </div>
                    <div className="comparedReport historicalReport">
                        <h2>Report ID: 41485950</h2>
                        <text>This vulnerability exists due to <mark className="blueHighlight">unexpected file handling by the Minizip library</mark>, which <mark className="greenHighlight">allows earlier-occurring portions of a ZIP file to be used</mark> instead of later-occurring portions of the file. Specifically, if an <mark className="pinkHighlight">EOCD64 (64-bit end-of-central-directory locator) token</mark> is present earlier in the file, it will be used instead of a later-occuring EOCD (32-bit end-of-central-directory locator) token.</text>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default FieldComparisonTechnical;
