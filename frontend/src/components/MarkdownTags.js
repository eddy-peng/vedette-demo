const MarkdownTags = () => {
    return (
        <div className="MarkdownTags">
            <h3>**bold**</h3>
            <h3>*italics*</h3>
            <h3>~strike~</h3>
            <h3>`code`</h3>
            <h3>```preformatted```</h3>
            <h3>&#62;quote</h3>
            <h3 className="HyperLink">Markdown Cheatsheet</h3>
        </div>
    );
};

export default MarkdownTags;
