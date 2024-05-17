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
                <h1>Security: CRX3 File Signature Verification Bypass via Embedded ZIP64 Payload</h1>
                <div className="metaDataContainer">
                    <div className="metaDataItem">
                        <p>REPORTER</p>
                        <p>Malcolm Stagg</p>
                    </div>
                    <div className="metaDataItem">
                        <p>TYPE</p>
                        <p>Vulnerability</p>
                    </div>
                    <div className="metaDataItem">
                        <p>ACCESS</p>
                        <p>Default</p>
                    </div>
                    <div className="metaDataItem">
                        <p>STATUS</p>
                        <p>Fixed</p>
                    </div>
                    <div className="metaDataItem">
                        <p>DATE CREATED</p>
                        <p>Dec 20, 2023 02:13AM</p>
                    </div>
                </div>
                <HorizontalLine />
                <div className="rawReportContents">
                    <p>VULNERABILITY DETAILS</p>
                    <p>A vulnerability has been found in Google Chrome's CRX3 file signature validation, which would allow an attacker to embed their own malicious payload inside a legitimate CRX extension with a valid signature and key. The CRX file will still contain valid signatures, but the attacker-controlled embedded files will be extracted by Chrome whenever the CRX file is unpacked.</p>
                    <p>This vulnerability exists due to unexpected file handling by the Minizip library, which allows earlier-occurring portions of a ZIP file to be used instead of later-occurring portions of the file. Specifically, if an EOCD64 (64-bit end-of-central-directory locator) token is present earlier in the file, it will be used instead of a later-occuring EOCD (32-bit end-of-central-directory locator) token. Since the CRX file contains a protobuf header which is mostly unsigned and can be thus be arbitrarily-controlled by an attacker, the attacker can embed their own ZIP64 payload in the CRX file header, ensuring it contains a valid EOCD64 token. This can be done without modifying the signature of the file, since only the unsigned portions of the file header have been modified by the attacker.</p>
                    <p>When Minizip extracts the file, as long as the original, intended, payload is less than 64kB, Minizip will locate the EOCD64 token in the header portion of the file, and extract the attacker-controlled, unsigned, ZIP64 payload instead of the intended, signed, ZIP payload.</p>
                    <p>SOURCE CODE ANALYSIS</p>
                    <p>CRX file verification code is mostly contained within crx_verifier.cc (https://chromium.googlesource.com/chromium/src/+/refs/heads/main/components/crx_file/crx_verifier.cc), with the protobuf header of the file documented in crx3.proto (https://chromium.googlesource.com/chromium/src/+/refs/heads/main/components/crx_file/crx3.proto).</p>
                    <p>The comment on "signed_header_data" indicates how the signature verification is performed:</p>
                    <p>All proofs in this CrxFile message are on the value</p>
                    <ul>
                        <li>   "CRX3 SignedData\x00" + signed_header_size + signed_header_data +</li>
                        <li>   archive, where "\x00" indicates an octet with value 0, "CRX3 SignedData"</li>
                        <li>   is encoded using UTF-8, signed_header_size is the size in octets of the</li>
                        <li>   contents of this field and is encoded using 4 octets in little-endian</li>
                        <li>   order, signed_header_data is exactly the content of this field, and</li>
                        <li>   archive is the remaining contents of the file following the header.</li>
                        <li>   optional bytes signed_header_data = 10000;</li>
                    </ul>
                    <p>The "VerifyCrx3" function in crx_verifier.cc is used to extract the header and perform this hashing for signature validation. Notably, all fields in the header, with the exception of "signed_header_data", are exempt from signature validation.</p>
                    <p>After a CRX file signature is successfully verified, the Minizip library contained in Zlib is used to perform the extraction (https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/zlib/contrib/minizip/unzip.c).</p>
                    <p>The "unzOpenInternal" function, on line 580, is responsible for opening and performing initial parsing of the ZIP file. On line 619, Minizip first attempts to find an EOCD64 token ("PK\x06\x07") stored within the last 64kB of the file:</p>
                    <p>central_pos = unz64local_SearchCentralDir64(&us.z_filefunc,us.filestream);</p>
                    <p>Only if this search is unsuccessful, or cannot be successfully validated, is a 32-bit EOCD token ("PK\x05\x06") found as a fallback on line 681:</p>
                    <p>central_pos = unz64local_SearchCentralDir(&us.z_filefunc,us.filestream);</p>
                    <p>As long as the original ZIP payload is &lt; 64kB, an attacker's valid ZIP64 payload within the file header containing "PK\x06\x07" will be found and used by Minizip's "unz64local_SearchCentralDir64" function.</p>
                    <p>VERSION</p>
                    <p>Chrome Version: 119.0.6045.159 (Official Build) (64-bit)</p>
                    <p>Operating System: Ubuntu 20.04</p>
                    <p>REPRODUCTION CASE</p>
                    <p>1. Download the following attached file:</p>
                    <ul>
                        <li>"my_sample_app.crx": sample Chrome extension</li>
                        <li>"my_sample_app.xml": malicious update manifest file</li>
                        <li>"payload.zip": malicious payload to inject into the sample extension</li>
                        <li>"payload_embedder.py", "crx3_pb2.py": Python script and supporting files to create the attack CRX file</li>
                        <p>The extension, "my_sample_app.crx", is signed with a CRX ID of "pgjekmobohkakcbceofnhpgjolabonjl".</p>
                    </ul>
                    <p>2. Navigate to chrome://extensions and enable developer mode. Drag "my_sample_app.crx" to the browser window to install it. Note that this step could be similarly completed using enterprise policy files instead of enabling developer mode (https://support.google.com/chrome/a/answer/9867568).</p>
                    <ul>
                        <p>The installed extension is set up to use a local update server of "http://localhost:8000/my_sample_app.xml"</p>
                    </ul>
                    <p>3. Verify the extension has been successfully installed. When navigating to any website, such as https://www.google.com, you should see the following green banner:</p>
                    <p>Sample extension has been installed! :)</p>
                    <p>4. Create the attack CRX file ("attack.crx") with an embedded ZIP64 payload by running the following:</p>
                    <p>$ python3 payload_embedder.py my_sample_app.crx payload.zip attack.crx</p>
                    <p>5. Start up a Python http server to host the attack files:</p>
                    <p>$ python3 -m http.server 8000</p>
                    <p>6. Close and restart Chrome to trigger an immediate extension update. The extension will update to the malicious version.</p>
                    <p>7. Verify the malicious extension has been successfully installed. When navigating to any website, such as https://www.google.com, you will see the following red banner:</p>
                    <p>Page contents have been pwned! :(</p>
                </div>
            </div>
        </div>
    );
}