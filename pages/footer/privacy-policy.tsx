import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Footer.module.css';
import { Divider, Container, Table, Icon } from 'semantic-ui-react';

const privacy = () => {
    const [desktop, setDesktop] = useState<boolean>(true);
    const [font, setFont] = useState<string>('48px');

    useEffect(() => {
        if (window.innerWidth > 440) {
            setDesktop(true);
            setFont('48px');
        } else {
            setDesktop(false);
            setFont('38px');
        }
  
        const updateMedia = () => {
            if (window.innerWidth > 440) {
                setDesktop(true);
                setFont('48px');
            } else {
                setDesktop(false);
                setFont('38px');
            }
        };
          window.addEventListener('resize', updateMedia);
          return () => window.removeEventListener('resize', updateMedia);
      }, []);

    return (
        <>
            <Head>
                <title> HealthStat | Privacy Policy</title>
                <meta name="description" content="privacy policy" />
            </Head>
            <Container style={{ fontSize: '17px' }}>
                <Divider style={{ margin: '3em' }}/>
                <div className={styles.privacy}>
                    <h1 style={{ fontSize: `${font}` }}>
                        HealthStat Privacy Policy
                    </h1>
                    <div style={{ fontSize: '21px' }}>
                        Updated January 1, 2023
                    </div>
                    <Icon 
                            name="shield" 
                            size="massive" 
                            color="black" 
                            style={{ marginTop: '.2em'}}
                    />
                    <Divider style={{ margin: '3em' }} />
                </div>
                <div>
                    <Container>
                        <h2><strong>PRIVACY NOTICE</strong></h2>

                        <p><strong>Last updated January 1, 2023</strong></p>

                        <p>{`This privacy notice for HealthStat ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:`}</p>
                        <ul>
                            <p><li>Visit our website at <Link href='/' passHref><u><a style={{ color: '#3978f5' }} className={styles.hover}>https://healthstat.com</a></u></Link> or any website of ours that links to this privacy notice</li></p>
                            <p><li>Engage with us in other related ways, including any sales, marketing, or events</li></p>
                        </ul>
                        <p><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at jjbertalli@berkeley.edu.</p>
                    </Container>

                    <h2><strong>SUMMARY OF KEY POINTS</strong></h2>
                    
                    <p><strong>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</strong></p>
                    
                    <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with HealthStat and the Services, the choices you make, and the products and features you use.</p>
                    
                    <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
                    
                    <p><strong>Do you receive any information from third parties?</strong> We do not receive any information from third parties.</p>
                    
                    <p><strong>How do you process my information? </strong>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
                    
                    <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>
                    
                    <p><strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>
                    
                    <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
                    
                    <h2><strong>TABLE OF CONTENTS</strong></h2>
                        <ul><strong><u><a href="#1" style={{ color: '#3978f5' }}>1. WHAT INFORMATION DO WE COLLECT?</a></u></strong></ul>
                        <ul><strong><u><a href="#2" style={{ color: '#3978f5' }}>2. HOW DO WE PROCESS YOUR INFORMATION?</a></u></strong></ul>
                        <ul><strong><u><a href="#3" style={{ color: '#3978f5' }}>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></u></strong></ul>
                        <ul><strong><u><a href="#4" style={{ color: '#3978f5' }}>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></u></strong></ul>
                        <ul><strong><u><a href="#5" style={{ color: '#3978f5' }}>5. HOW LONG DO WE KEEP YOUR INFORMATION?</a></u></strong></ul>
                        <ul><strong><u><a href="#6" style={{ color: '#3978f5' }}>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></u></strong></ul>
                        <ul><strong><u><a href="#7" style={{ color: '#3978f5' }}>7. WHAT ARE YOUR PRIVACY RIGHTS?</a></u></strong></ul>
                        <ul><strong><u><a href="#8" style={{ color: '#3978f5' }}>8. CONTROLS FOR DO-NOT-TRACK FEATURES</a></u></strong></ul>
                        <ul><strong><u><a href="#9" style={{ color: '#3978f5' }}>9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></u></strong></ul>
                        <ul><strong><u><a href="#10" style={{ color: '#3978f5' }}>10. DO WE MAKE UPDATES TO THIS NOTICE?</a></u></strong></ul>
                        <ul><strong><u><a href="#11" style={{ color: '#3978f5' }}>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></u></strong></ul>
                        <ul><strong><u><a href="#12" style={{ color: '#3978f5' }}>12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></u></strong></ul>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="1">1. WHAT INFORMATION DO WE COLLECT?</a></strong></h2>
                    <p><strong>Personal information you disclose to us</strong></p>
                    
                    <p>In Short: We collect personal information that you provide to us.</p>
                    
                    <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                    
                    <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul>
                        <p><li>names</li></p>
                        <p><li>email addresses</li></p>
                        <p><li>usernames</li></p>
                        <p><li>passwords</li></p>
                        <p><li>phone numbers</li></p>
                        <p><li>contact or authentication data</li></p>
                    </ul>

                    <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
                    
                    <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                    
                    <p><strong>Information automatically collected</strong></p>
                    
                    <p>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
                    
                    <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                    
                    <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
                    
                    <p>The information we collect includes:</p>
                    <ul>
                        <p><li>{`Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).`}</li></p>
                        <p><li>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li></p>
                    </ul>

                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="2">2. HOW DO WE PROCESS YOUR INFORMATION?</a></strong></h2>
                    
                    <p>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
                
                    <p><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></p>
                    <ul>
                        <p><li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li></p>
                        <p><li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li></p>
                        <p><li><strong>To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</li></p>
                    </ul>

                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="3">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></strong></h2>
                    
                    <p>In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
                    
                    <p>We may need to share your personal information in the following situations:</p>
                    <ul>    
                        <p><li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li></p>
                        <p><li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li></p>
                        <p><li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li></p>
                    </ul>

                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="4">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></strong></h2>
                    
                    <p>In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
                    
                    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="5">5. HOW LONG DO WE KEEP YOUR INFORMATION?</a></strong></h2>
                    
                    <p>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
                    
                    <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
                    
                    <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="6">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></strong></h2>
                    
                   <p>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
                    
                    <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="7">7. WHAT ARE YOUR PRIVACY RIGHTS?</a></strong></h2>
                    
                    <p>In Short: You may review, change, or terminate your account at any time.</p>
                    
                    <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <Link href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm' passHref><u><a style={{ color: '#3978f5' }} className={styles.hover}>ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</a></u></Link></p>
                    
                    <p>If you are located in Switzerland, the contact details for the data protection authorities are available here: <Link href='https://www.edoeb.admin.ch/edoeb/en/ home.html' passHref><u><a style={{ color: '#3978f5' }} className={styles.hover}>https://www.edoeb.admin.ch/edoeb</a></u></Link></p>
                    
                    <p><strong><u>Withdrawing your consent:</u></strong> {`If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "`}<u>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</u>{`" below.`}</p>
                    
                    <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
                    
                    <p><strong>Account Information</strong></p>
                    
                    <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                    
                    <ul>
                        <li>Log in to your account settings and update your user account.</li>
                    </ul>

                    <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
                    
                    <p><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit <Link href='http://www.aboutads.info/choices/' passHref><u><a style={{ color: '#3978f5' }} className={styles.hover}>http://www.aboutads.info/choices/.</a></u></Link></p>
                    
                    <p>If you have questions or comments about your privacy rights, you may email us at jjbertalli@berkeley.edu.</p>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="8">8. CONTROLS FOR DO-NOT-TRACK FEATURES</a></strong></h2>
                    
                    <p>{`Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.`}</p>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="9">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></strong></h2>
                    
                    <p>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
                    
                    <p>{`California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.`}</p>
                    
                    <p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</p>
                    
                    <h3><strong>CCPA Privacy Notice</strong></h3>
                    
                    <p>{`The California Code of Regulations defines a "resident" as:`}</p>
                    
                        <ul>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</ul>
                        <ul>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</ul>
                    
                    <p>{`All other individuals are defined as "non-residents.`}</p>
                    <p>{`If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.`}</p>
                    
                    <p><strong>What categories of personal information do we collect?</strong></p>
                    
                    <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
                    <div>
                        <Table celled striped padded>
                            {desktop ? (
                            <>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            Category
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Examples
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Collected
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                            </>
                            ): null}
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>A. Identifiers</Table.Cell>
                                    <Table.Cell>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>YES</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>B. Personal information categories listed in the California Customer Records statute</Table.Cell>
                                    <Table.Cell>Name, contact information, education, employment, employment history, and financial information</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>YES</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>C. Protected classification characteristics under California or federal law</Table.Cell>
                                    <Table.Cell>Gender and date of birth</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>YES</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>D. Commercial information</Table.Cell>
                                    <Table.Cell>Transaction information, purchase history, financial details, and payment information</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>NO</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>E. Biometric information</Table.Cell>
                                    <Table.Cell>Fingerprints and voiceprints</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>NO</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>F. Internet or other similar network activity</Table.Cell>
                                    <Table.Cell>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>NO</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>G. Geolocation data</Table.Cell>
                                    <Table.Cell>Device location</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>NO</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>H. Audio, electronic, visual, thermal, olfactory, or similar information</Table.Cell>
                                    <Table.Cell>Images and audio, video or call recordings created in connection with our business activities</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>NO</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>I. Professional or employment-related information</Table.Cell>
                                    <Table.Cell>Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>NO</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>J. Education Information</Table.Cell>
                                    <Table.Cell>Student records and directory information</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>NO</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>K. Inferences drawn from other personal information</Table.Cell>
                                    <Table.Cell>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</Table.Cell>
                                    <Table.Cell style={{ textAlign: 'center' }}>NO</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                    
                    <p>We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:</p>
                    <ul>   
                        <p><li>Receiving help through our customer support channels;</li></p>
                        <p><li>Participation in customer surveys or contests; and</li></p>
                        <p><li>Facilitation in the delivery of our Services and to respond to your inquiries.</li></p>
                    </ul> 

                    <p><strong>How do we use and share your personal information?</strong></p>
                    
                    <p>More information about our data collection and sharing practices can be found in this privacy notice.</p>
                    
                    <p>You may contact us by email at jjbertalli@berkeley.edu, or by referring to the contact details at the bottom of this document.</p>
                    
                    <p>If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p>
                    
                    <p><strong>Will your information be shared with anyone else?</strong></p>
                    
                    <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p>
                    
                    <p>{`We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.`}</p>
                    
                    <p>HealthStat has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. HealthStat will not sell personal information in the future belonging to website visitors, users, and other consumers.</p>
                    
                    <p><strong>Your rights with respect to your personal data</strong></p>
                    
                    <p><u>Right to request deletion of the data — Request to delete</u></p>
                    
                    <p>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>
                    
                    <p><u>Right to be informed — Request to know</u></p>
                    
                    <p>Depending on the circumstances, you have a right to know:</p>
                    <ul>
                        <p><li>whether we collect and use your personal information;</li></p>
                        <p><li>the categories of personal information that we collect;</li></p>
                        <p><li>the purposes for which the collected personal information is used;</li></p>
                        <p><li>whether we sell your personal information to third parties;</li></p>
                        <p><li>the categories of personal information that we sold or disclosed for a business purpose;</li></p>
                        <p><li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li></p>
                        <p><li>the business or commercial purpose for collecting or selling personal information.</li></p>
                    </ul>

                    <p>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>
                    
                    <p><u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u></p>
                    
                    <p>We will not discriminate against you if you exercise your privacy rights.</p>
                    
                    <p><u>Verification process</u></p>
                    
                    <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>
                    
                    <p>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>
                    
                    <u>Other privacy rights</u>
                    <ul>
                        <p><li>You may object to the processing of your personal information.</li></p>
                        <p><li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li></p>
                        <p><li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li></p>
                        <p><li>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li></p>
                    </ul>

                    <p>To exercise these rights, you can contact us by email at jjbertalli@berkeley.edu, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="10">10. DO WE MAKE UPDATES TO THIS NOTICE?</a></strong></h2>
                    
                    <p>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                    
                    <p>{`We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.`}</p>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="11">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></strong></h2>
                    
                    <p>If you have questions or comments about this notice, you may email us at jjbertalli@berkeley.edu or by post to:</p>
                    <ul>Santa Clarita, CA 91351</ul>
                    <ul>United States</ul>
                    
                    <Divider style={{ marginTop: '2em' }} />
                    <h2><strong><a id="12">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></strong></h2>
                    
                    <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances.</p>
                </div>
            </Container>
        </>
    );
}

export default privacy;
