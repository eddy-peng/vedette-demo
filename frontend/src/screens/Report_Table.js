import ReportRowInteractive from "../components/ReportRowInteractive.js";
import ReportRowStatic from "../components/ReportRowStatic.js";
import { Link } from "react-router-dom";
import VideoThumbnail from "../images/videoThumbnail.svg";

export default function reportTable() {
    return (
        <div className="backgroundForPopup">
            <div className="FormLock">
                <h3>Vedette Locked 🔒</h3>
                <h1>Your Screen Size Is Too Small 💻</h1>
                <p>Due to scope and mobile limitations of the live bug reporting form, Vedette only works on laptop and desktop screens (display sizes 1400px and above).</p>
                <p>Additionally, ensure that your browser is on 100% zoom size or less.</p>
                <p>Aren't on a large enough screen? Feel free to watch Vedette's video demo!</p>
                <a href="https://youtu.be/lXVBjWtMLxo" target="_blank">
                    <h3>YouTube Video Demo Link</h3>
                    <img className="lock-thumbnail" src={VideoThumbnail} alt="Final Video Demo Thumbnail" />
                </a>
                <h3 className="lock-footer">Google x iSchool 2024</h3>
            </div>
            <div className="reportTablePopUp">
                <div className="reportMain">
                    <div className="totalContainer">
                        <div className="valueHeading">TOTAL</div>
                        {/* Insert total calcualted percentage below */}
                        <div className="totalPercent">84%</div>
                    </div>
                    <div className="headerContainer">
                        <div className="tableOverview">
                            <h1>Similar Reports</h1>
                            <p>
                                {" "}
                                Previously remediated reports that are similar to yours below.
                                Please ensure your report is not a duplicate threat.
                            </p>
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
                </div>
                <ReportRowInteractive />
                <ReportRowStatic />
            </div>
        </div>
    );
}
