import HorizontalLine from "../components/HorizontalLine.js";
import TopRight from "../images/viewReportTopRight.svg";
import Left from "../images/viewReportLeft.svg";
import BottomRight from "../images/viewReportBottomRight.svg";
import VideoThumbnail from "../images/videoThumbnail.svg";

export default function ViewReport() {
    return (
        <div>
            <div className="FormLock">
                <h3>Vedette Locked 🔒</h3>
                <h1>Move To A Larger Device 💻</h1>
                <p>Due to scope and mobile limitations of the live bug reporting form, Vedette only works on laptop and desktop screens (display sizes 1400px and above)</p>
                <a href="https://youtu.be/lXVBjWtMLxo" target="_blank">
                    <h3>YouTube Video Demo Link</h3>
                    <img className="lock-thumbnail" src={VideoThumbnail} alt="Final Video Demo Thumbnail" />
                </a>
                <h3 className="lock-footer">Google x iSchool 2024</h3>
            </div>
            <div className="rawReportContainer">
                <img className="topRightIllustration" src={TopRight} alt="shapes" />
                <img className="leftIllustration" src={Left} alt="shapes" />
                <img className="bottomRightIllustration" src={BottomRight} alt="shapes" />
                <h1>Remove “password” from turn off sycnh screen</h1>
                <div className="metaDataContainer">
                    <div className="metaDataItem">
                        <p>STATUS</p>
                        <p>Fixed</p>
                    </div>
                    <div className="metaDataItem">
                        <p>REPORTER</p>
                        <p>Eugene Giller</p>
                    </div>
                    <div className="metaDataItem">
                        <p>TIMESTAMP</p>
                        <p>04.05.2020</p>
                    </div>
                    <div className="metaDataItem">
                        <p>TYPE</p>
                        <p>Vulnerability</p>
                    </div>
                    <div className="metaDataItem">
                        <p>ACCESS</p>
                        <p>Default</p>
                    </div>
                </div>
                <HorizontalLine />
                <div className="rawReportContents">
                    <p>
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    Never gonna give you up Never gonna let you down Never gonna run around and desert you
                    Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you
                    </p>
                </div>
            </div>
        </div>
    );
}