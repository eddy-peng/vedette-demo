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
                <h1>Your Screen Size Is Too Small 💻</h1>
                <p>Due to the scope and mobile limitations of the live bug reporting form, Vedette only works on laptop and desktop screens (display sizes 1400px and above).</p>
                <p>Additionally, ensure that your browser is on 100% zoom size or less.</p>
                <p>Not on a large enough screen? Feel free to watch Vedette's video demo!</p>
                <a href="https://youtu.be/lXVBjWtMLxo" target="_blank">
                    <h3>YouTube Video Demo Link</h3>
                    <img className="lock-thumbnail" src={VideoThumbnail} alt="Final Video Demo Thumbnail" />
                </a>
                <h3 className="lock-footer">Google x iSchool 2024</h3>
            </div>
            <div className="rawReportContainer">
                <img className="topRightIllustration" src={TopRight} alt="shapes" />
                <img className="leftIllustration" src={Left} alt="shapes" />
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
                    <ul>
                        <p>Sample extension has been installed! :)</p>
                    </ul>
                    <p>4. Create the attack CRX file ("attack.crx") with an embedded ZIP64 payload by running the following:</p>
                    <ul>
                        <p>$ python3 payload_embedder.py my_sample_app.crx payload.zip attack.crx</p>
                    </ul>
                    <p>5. Start up a Python http server to host the attack files:</p>
                    <ul>
                        <p>$ python3 -m http.server 8000</p>
                    </ul>
                    <p>6. Close and restart Chrome to trigger an immediate extension update. The extension will update to the malicious version.</p>
                    <p>7. Verify the malicious extension has been successfully installed. When navigating to any website, such as https://www.google.com, you will see the following red banner:</p>
                    <ul>
                        <p>Page contents have been pwned! :(</p>
                    </ul>
                    <p>POSSIBLE ATTACK SCENARIOS</p>
                    <p>**-------------------------** ---------------------------------</p>
                    <p>Attacking a self-hosted enterprise extension (unmitigated)</p>
                    <p>**-------------------------** ---------------------------------</p>
                    <p>A likely attack scenario for this vulnerability would be the case where an enterprise extension, self-hosted outside of the Chrome Web Store, has been made available to company employees with an update URL set to an HTTP server on the company's intranet. An employee leaves the building with their laptop and heads over to a coffee shop. A local attacker, also in this coffee shop, sets up their IP or host name to match the company's internal update server. The next time Chrome runs extension updates on the employee's device, it will download the maliciously modified extension from the attacker's device. Because it still contains a valid signature, the employee's laptop will upgrade to the malicious extension.</p>
                    <p>**-------------------------** ---------------------------------</p>
                    <p>Attacking Chrome Web Store (CWS) hosted extensions (highly mitigated)</p>
                    <p>**-------------------------** ---------------------------------</p>
                    <p>Mitigations:</p>
                    <ol>
                        <li>Would require HTTPS MITM.</li>
                        <li>Chrome immediately detects an installed attacker-modified extension as being corrupt and disables it due to it containing an invalid "verified_contents.json" file, which is needed for CWS-installed extensions.</li>
                    </ol>
                    <p>**-------------------------** ---------------------------------</p>
                    <p>Attacking internal Chrome components (highly mitigated)</p>
                    <p>**-------------------------** ---------------------------------</p>
                    <p>Mitigations:</p>
                    <ol>
                        <li>Would require HTTPS MITM.</li>
                        <li>Chrome uses the Omaha CUP protocol (https://chromium.googlesource.com/chromium/src.git/+/master/docs/updater/protocol_3_1.md) which signs each HTTPS request and response body. This heavily mitigates any tampering from taking place.</li>
                    </ol>
                    <p>**-------------------------** ---------------------------------</p>
                    <p>Windows user to system LPE (near-miss)</p>
                    <p>**-------------------------** ---------------------------------</p>
                    <p>A low-privileged executable can use the "Google Chrome Elevation Service" to run a CRX file containing an executable as the highly-privileged "nt authority\system" user. The CRX file is first validated to ensure it has been signed by the correct hard-coded signature ("GetRecoveryCRXHash" from https://github.com/chromium/chromium/blob/main/chrome/elevation_service/elevated_recovery_impl.cc).</p>
                    <p>This scenario could not be demonstrated \*only\* because the smallest publicly-available CRX file signed with this key was found to be 73.2kB (https://github.com/google/omaha/blob/main/omaha/testing/unittest_support/CodeRed.crx3), with a payload approximately 7kB too big to be exploitable.</p>
                    <ul>
                        <p>If the Chrome team can sign a slightly smaller CRX file with this same private key, you may be able to demonstrate the LPE with the following steps:</p>
                    </ul>
                    <ol>
                        <li>Download the attached "windows_lpe_poc.exe", "windows_lpe_payload.zip", and "windows_lpe_poc.bat". Place these files in a directory "C:\poc\" along with the previously downloaded "payload_embedder.py" and "crx3_pb2.py".</li>
                        <li>Inject the "windows_lpe_payload.zip" payload into the signed CRX file ("CodeRed.crx") as follows:</li>
                        <ul>
                            <p>$ python3 payload_embedder.py CodeRed.crx windows_lpe_payload.zip CodeRedAttack.crx</p>
                        </ul>
                        <li>Run "windows_lpe_test.exe" as follows to perform the COM call necessary for LPE (note that the full path of "CodeRedAttack.crx" must be used):</li>
                        <ul>
                            <p>$ .\windows_lpe_poc.exe C:\poc\CodeRedAttack.crx</p>
                        </ul>
                        <li>Verify that "windows_lpe_poc.bat" has run, placing the output of several commands including "whoami" into "C:\poc\output.txt". This file should indicate that the attacker's code was running as the "nt authority\system" user.</li>
                    </ol>
                    <p>SUGGESTED PATCH</p>
                    <p>A simple yet effective way to patch this vulnerability would be to add an additional verification to the "VerifyCrx3" function, in order to detect any EOCD or EOCD64 token embedded within the header bytes. Since "VerifyCrx3" is called every time a CRX3 file has its signature validated, there is little chance of missing any affected code paths within the Chromium codebase. The header size in a CRX3 file is typically &lt; 2kB, so this would have very minimal performance impact.</p>
                    <p>FIRST AFFECTED GIT COMMIT</p>
                    <p>The CRX2 format (https://chromium.googlesource.com/chromium/src/+/8c83fe076ebe86c04e6d703be2bfb2f2e8729158/components/crx_file/crx_file.h) appears to only support a single key and signature in the file header, so it is unlikely an attacker would have enough control over this header to perform the necessary payload injection without invalidating the existing signature.</p>
                    <p>Thus, it seems this vulnerability was introduced when the CRX3 format was first implemented, in the following commit: https://chromium.googlesource.com/chromium/src/+/11f044437561f28e16d0a2549714d860310fb3fd</p>
                    <p>At this point, the verifier code was expanded to verify both CRX2 and CRX3 files, including CRX3 files with a malicious ZIP64 payload embedded in the header.</p>
                    <p>CREDIT INFORMATION</p>
                    <p>Reporter credit: Malcolm Stagg (@malcolmst) of SODIUM-24, LLC</p>
                    <br/>
                    <HorizontalLine />
                    <p>End Of Raw Report</p>
                </div>
                <img className="bottomRightIllustration" src={BottomRight} alt="shapes" />
            </div>
        </div>
    );
}