# ReadMe:
[Project Name to be Determined]

Conception Date: 12/26/2023


## Project Origin: 
The University of Washington’s Informatics program hosts an annual Capstone for iSchool students. The iSchool Capstone allows students to take the culmination of their experience from the informatics program, and address real-world issues brought to them by sponsors or through personal creativity.


Greg Wroblewski, Director of Android Security Assurance at Google, took this opportunity to enlist Google as a sponsor for any informatics teams willing to help solve an ongoing issue in their bug triaging report process.
More information about the iSchool's capstone can be found through this link: https://ischool.uw.edu/capstone 


## Project Team:
To build a workforce and shake hands with Greg, the Convergence Crew was formed with members consisting of the following informatics students in their specified project roles:
- Eddy Peng: Project Manager & Product Designer
- Sami Foell: Product Designer & Researcher Lead
- Kyle Raychel: Front-end Engineer & Cybersecurity SME
- Harold Pham: Backend Engineer & Cybersecurity SME
- Hitanshu Prajapati: Full Stack Engineer


## Problem Scope: 
In the wake of AI-generated cybersecurity threat reports, issues have arisen regarding the identification of valid bug reports at Google. Note that throughout documentation the terms “bug” and “threat” are used synonymously. The ISE researcher team at Google, who are responsible for the analysis of submitted bug reports, spends large amounts of time and resources filtering out false-positive reports. This wasted time adversely affects the performance of relevant processes dependent on accurate bug reports such as the  follows:
- Threat severity assignment 
- Threat mitigation and elimination
With this context in mind, this project aims to identify different avenues for reducing the likelihood of false-positive reports, improving false-positive identification, or reinforcing current structures of the severity assignment process to increase productivity.


## Target Audience: 
The Google ISE Researcher Team is the one who benefit the most from this project. As mentioned before, the Google ISE Researcher Team is responsible for managing uploaded bug reports from individuals or partners, analyzing the reports for quality assurance, purging duplicate reports based on historical data to deter redundancy, and finally performing calculations to assign a severity level to reported bugs to be sent to the development team to mitigate or eliminate.


## Problem Statement: 
How might the Android Security Team receive threat reports of greater accuracy (i.e. duplicates and false positives) and quality to arrive at a 30%+ improvement in actionable reports?


## Primary Research Methodologies: 
- Literature Review: A diverse selection of literature was viewed during this phase of research, including industry insight articles, news reports, and peer-reviewed academic papers
  - Methodology: 
    - Each member of the crew found their sources individually at first. Once individual research had finished, the source insights were compiled and key points were identified about the topic.
  - Topics Researched: 
    - AI decision-making and autonomy levels within systems.
    - Human interaction with AI and how they complement each other.
    - False-positive identification
    - How other disciplines handle false positive reporting.
    - Impacts of false-positive reporting on productivity.
    - AI necessity in the field of cybersecurity
    - Anomaly Detection vs Signature Detection, what Anomaly Detection does better.
    - Levels research in Human-AI interaction
  - Key Findings:
    - AI should only be applied to its intended tasks or functionality. AI that is trained to be effective for one reason might not be as effective for another.
    - AI-generated reports have cons such as increased false-positive reports, however, the benefits of its production capabilities outweigh the cons.
    - AI has different levels of decision-making autonomy, this level of autonomy should match the functionality's need, not more or less.
    - False positives are inversely proportional to false negatives, one goes down, and the other goes up. False positives are preferred over false negatives, which are indicative of false reports not being flagged.
    - False positives are not only damaging for production quality and efficiency, but also to team morale causing an even larger decrease in productivity.
    - Traditional methods of bug triaging without AI has proven burdensome and time-consuming.
    - Human interaction mixed with AI reporting makes it hard to detect false positives. 
    - To analyze reports for false positives, it is more effective to do so before human interaction mixes into the AI-generated content.
- Competitor Market Research: A market of bug triaging services was found to inform of potential solutions and insights into the bug reporting industry.
  - Methodology: 
    - Each member of the crew found their sources individually at first. Once individual research was done, market insights were identified and compiled to into similar capabilities, and potential opportunities that these competitors did not address.
  - Markets Researched:
    - Bug triaging services
    - AI integrated threat detection and response suites
    - AI protected SDLC services
    - SIEM and AI integrations
    - Bug Bounty bug report templates
    - Alert management systems for bug triaging
    - Threat Intelligence platforms and severity level assignments
    - AI generated bug reporting
    - SOAR Tools
  - Key Findings:
    - Common features:
      - Alert Filtering & Prioritization: alert grouping, Machine learning anomaly detection, threat/severity level assignment, user filtering, and security data triaging.
      - Data organization: Dashboards, threat/event overviews, timelines, and detailed views.
      - Response speed: Reduced response time, speedy and accurate responses, and reducing false positives and staff burnouts.
      - Hands on/off AI: Relevant information to the function is inputted into the AI, and role-based inputs are available to be used as a way to structure AI training.
      - Facilitation of Collaboration: Different roles need to collaborate/communicate with each other, permission controls are to be put in place, and incident reports are evenly distributed to other analysts.
      - Compatibility with other tools: AI compatibility with a variety of security tools and solutions, playbooks for automated triaging capabilities, threat intelligence for severity assignments, and third party product integrations.
    - Product Opportunities/Ideas:
      - Intuitive UI/UX and navigation
      - Frequent usability tests to understand different needs for intuitive navigation/prompts/use.
      - A guiding source to help users understand the information required by the product.
      - Standardization based on accepted guidelines developed from user research.
      - Integration of existing security frameworks
      - Continuous feedback and evaluation for the AI that is integrated into the product.
      - Requires human involvement in setting goals and active roles of the AI.
- User Research: Greg had arranged for the Convergence Crew to meet with the Android Security Team, ISE researchers, and other parties who were involved in the bug-triaging process. To supplement this, the team found online forums and threads thereafter to inform future decisions and confirm current processes.
  - Methodology: 
    - In-person interviews with the Android Development team, ISE Team, and Greg Wroblewski were conducted for the period of half a day. Shortly after, interview insights were created by each member and compiled to form a concrete understanding of the situation at hand along with the parties involved in each process.
  - Topics Researched:
    - The process between when a threat report is created, to when a severity level is assigned to the threat to be sent to the Android Developers.
    - Issues and challenges in the process of severity assignment that may affect the productivity of the ISE team. 
    - Additional context to the environment that the severity assignment process goes through.
    - Tools and software used throughout the severity assignment process.
    - Hand-off points during the severity assignment process between parties.
    - Considerations and procedures taken during the severity assignment process.
  - Key Findings:
    - Android security is broad, covering many systems that have complex threats
    - Reports need to have specific content because they will be scrutinized deeply internally.
    - Several resources exist to streamline workflow, BUT there is little tools/automation to further enhance at scale.
    - Many aspects of the process require manual and specialized human expertise due to complexity.
    - Threat reports lack consistent structure and quality at scale.
    - Many stakeholders don't have the entire picture of the guidelines & require thorough communication
    - Some historical investigation of automation in cybersecurity with new-found interest in the space.
    - Google emphasizes iterative learning across its people and products.
    - Triaging tries to assign a severity level to a threat, and to streamline the process by identifying duplicates. Duplicates are easily handled once identified.
    - We acknowledge that AI is flawed, yet is still set to replace people. It may not be ready for that yet, so we must supplement its flaws with our abilities as humans.
    - Steps to threat severity assignment:
      1. The threat report is made by partners or individuals who have found a vulnerability in Google systems.
      2. The threat report is submitted through the Google VRP Portal.
      3. A researcher from the ISE team then chooses the threat report to review and start the severity assignment process.
      4. The first step of the process is reproducing the vulnerability/threat based on how it was reported to validate whether it is legitimate or not.
      5. The second step of the process is to gather what attributes are present within the report which may help inform the severity assignment phase. If any important attributes are missing or if more details are needed, the ISE researcher will contact the reporter for more information.
      6. The third step of the process is to use these attributes and additional information from the submitted report to scour the historical threat database, which holds past threat report data, to determine whether the reported threat has been seen in the past. If so, then the currently assessed threat is assigned the severity level of the precedent.
      7. The fourth step of the process is to utilize the Android Severity Assessment Guidelines as a rubric to determine what level of severity the threat should fall under, based on the attributes drawn from the report.
      8. The final step of the process is to assign the severity level to the threat, forward it to the Android Development team, and provide a monetary reward to the reporter based on the level of severity assigned to the report.


## Proposed Solution:
After the Convergence Crew compiled the user research, ideation ensued, with the general consensus amongst the sponsor and the crew being that the minimum viable product follows these specifications:
Location within the severity assignment process:
- Before the ISE team receives the report, and right when reporters want to use the report form to submit a vulnerability/threat.
Solution:
- The revamping of the Google VRP report form to provide an adaptive and guided experience for the reporter.
Must contain the following features:
- Automated duplicate checking: As the report form is filled out, the threat will concurrently be assessed as a duplicate or not. 
  - A percentage will be displayed to the reporter indicating the probability that the reported threat is a duplicate.
  - The more input fields that are filled, the more accurate the probability will be.
  - Some fields will be weighed more than others.
The following listed features are ideas to consider throughout development:
- Automated form checks and recommendations
  - As reporters fill in fields from the report form, AI will provide structural recommendations (preview and reasoning) based on historical training data with the user being given the option to accept or reject the recommendation. This aims to standardize user inputs.
  - When the reporter completes the form, on completed submission, the form will identify which fields are completed adequately with valid data types, legitimate entries, and comprehensive. The form will also check whether an entry is AI generated, gibberish, inappropriate, or does not fulfill requirements in which case it will prompt the user to fix those inputs.
  - An AI chatbot to provide guidance in filling out the form.
  - AI Feedback popup/page, The reporter may at any time give the AI feedback on its performance in assisting the form-filling process.
- Informative and explicit report form instructions
  - Given the past form’s prompt inconsistency, detailed instruction, and general formatting will be applied to this new form solution.
- A form walkthrough
  - Provide users a guided walkthrough of the form sections, what kind of content to put in each field, real-life examples of high-quality reports that follow the Android Security program rules.
  - This initial step will reduce effort to understand text-heavy rules doc and see them in real-application on the live platform.
- A variety of curated report form templates adhering to the ISE team’s accepted criteria of must-have attributes that reporters must provide
  - Different form templates may be more compatible with one type of reporter than another.
- Form input field placeholders
  - In each input field, using AI, a translucent text will be displayed showing an example of what kinds of information past reports entered into those fields for reporters to have a better understanding of what is expected of them.
 
## Given Resources:
- .csv
  - Contains 25326 entries of reports submitted through the Chromium vulnerability report program.
- .txt
  - Contains the corresponding 25326 entrys’ raw reports, in the same order as provided in the .csv file.
- A ChatGPT API Key from our sponsor Greg Wroblewski’s OpenAI account
  - To be used to connect to GPT4.

## Github/Project File Structuring:
- The root directory will have the respective development folders with their respective dependencies and files installed there. These folder names are called the “frontend” and “backend” folders with their frameworks, environments, and related content stored in them.
- The root directory will have the following files:
  - The git ignore file so that files and folders throughout the repo will be able to be hidden easily from this root .gitignore file.
  - The dotenv file so that sensitive information is stored into variables, with these variables being accessible throughout the project repo from this root .env file.
  - The package.json with the “concurrently” dependency so that both backend and frontend can be run concurrently with a single command.
- The monorepo structure is in use essentially.

  
