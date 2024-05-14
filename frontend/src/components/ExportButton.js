import React, { useState } from 'react';
import pdfIcon from "../images/pdfIcon.svg";
import txtIcon from "../images/txtIcon.svg";
import csvIcon from "../images/csvIcon.svg";

const ExportButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <button className="export-btn" onClick={toggleDropdown}>
        <span className="material-icons">ios_share</span>
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div>
            <img className="exportOptionsIcon" src={pdfIcon} alt="pdf page icon" />
            <p>Export to PDF</p>
          </div>
          <div>
            <img className="exportOptionsIcon" src={txtIcon} alt="txt page icon" />
            <p>Export to TXT</p>
          </div>
          <div>
            <img className="exportOptionsIcon" src={csvIcon} alt="csv page icon" />
            <p>Export to CSV</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExportButton;
