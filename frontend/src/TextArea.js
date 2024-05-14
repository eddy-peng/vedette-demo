import React from 'react';
import './App.css';

const TextArea = () => {
  return (
    <div className="TextAreaContainer">
        <div className="TabContainer">
            <div className="Column Active">
                <p>WRITE</p>
            </div>
            <div className="Column">
                <p>PREVIEW</p>
            </div>
        </div>
        <textarea></textarea>
    </div>
  );
};

export default TextArea;