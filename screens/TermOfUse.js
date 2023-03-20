import { View, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import NumberComponent from './NumberComponent';
import AlphaList from './AlphaList';
import ListContent from './ListContent';
import CustomAppBar from './CustomAppBar';
import FloatButton from './FloatButton';
import ExpandedView from './ExpandedView';
import BottomView from './BottomView';
import IMAGES from '../constants/ImagesContant'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const TermOfUse = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);
    return (
        <View >
            <CustomAppBar />
            <ScrollView>
                <View style={{ height: 250, width: '100%', marginBottom: 20, marginTop: 60 }} >
                    <Image source={IMAGES.TERM} style={{ height: 250, width: '100%', position: 'absolute' }} />
                    <View style={{ height: 250, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 24, color: 'white' }}>Terms of website use
                        </Text>
                        <View style={{ flexDirection: 'row', padding: 5, alignSelf: 'center' }}>
                            <Text style={{ color: 'white', paddingLeft: 5, paddingRight: 5 }}>Home</Text>
                            <Text style={{ color: 'white', paddingLeft: 5, paddingRight: 5 }}>&gt;</Text>
                            <Text style={{ color: 'white', paddingLeft: 5, paddingRight: 5 }}>Pages</Text>
                            <Text style={{ color: 'white', paddingLeft: 5, paddingRight: 5 }}>&gt;</Text>
                            <Text style={{ color: 'white', paddingLeft: 5, paddingRight: 5 }}>Terms of website use </Text>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignSelf: 'center', padding: 9, marginLeft: 15, marginRight: 15 }}>
                    <ListContent num={1} title='THIS IS AN AGREEMENT BETWEEN YOU AND ORNDA.COM' />
                    <ListContent num={2} title='CHANGES TO THESE TERMS' />
                    <ListContent num={3} title='ADDITIONAL TERMS' />
                    <ListContent num={4} title='USING THE SERVICES' />
                    <AlphaList alpha={'a)'} subtitle='GRANT OF RIGHTS' />
                    <AlphaList alpha={'b)'} subtitle='USER ACCOUNTS' />
                    <AlphaList alpha={'c)'} subtitle='ELIGIBILITY' />
                    <AlphaList alpha={'d)'} subtitle='NO UNLAWFUL OR HARMFUL USSE OF ' />
                    <AlphaList alpha={'e)'} subtitle='BUSINESS INFORMATION' />
                    <ListContent num={5} title='CONTENT' />
                    <AlphaList alpha={'a)'} subtitle='RESPONSIBILITY FOR YOUR USER-GENERATED CONTENT' />
                    <AlphaList alpha={'b)'} subtitle='CONTENT GUIDELINES' />
                    <AlphaList alpha={'c)'} subtitle='OUR RIGHT TO USSE YOUR CONTENT; DERIVATIIVE WORKS ' />
                    <AlphaList alpha={'d)'} subtitle='ADVERTISING' />
                    <ListContent num={6} title='PROHIBITED ACTIVITIES' />
                    <ListContent num={7} title='TERMINATION; VIOLATIONS; SURVIVAL' />
                    <ListContent num={8} title='XITY POLICIES' />
                    <AlphaList alpha={'a)'} subtitle='PRIVACY' />
                    <AlphaList alpha={'b)'} subtitle='COPYRIGHHT INFRINGEMENT CLAIMS' />
                    <AlphaList alpha={'c)'} subtitle='MOBILE APPLICATIONS' />
                    <ListContent num={9} title='USE OF USER-GENERATED CONTENT' />
                    <ListContent num={10} title='PROPRIETARY INFORMATION' />
                    <ListContent num={11} title='TRADEMARK INFORMATION' />
                    <ListContent num={12} title='INFORMATION AVAILABLE FROM THE RESULTS PAGES' />
                    <ListContent num={13} title='MAP INFORMATION' />
                    <ListContent num={14} title='LINKS; THIRD PARTY SERVICES' />
                    <ListContent num={15} title='REQUESTS FOR REMOVAL OF LINKS FROM INDICES' />
                    <ListContent num={16} title='SECURITY AND PRIVACY LIMITATIONS' />
                    <ListContent num={17} title='XITY MAKES NO WARRANTY' />
                    <ListContent num={18} title='LIABILITY LIMITATION; YOUR EXCLUSIVE REMEDY' />
                    <ListContent num={19} title='CHANGES TO THE SERVICES; ADDITIONAL LIABILITY LIMITATION' />
                    <ListContent num={20} title='INDEMNIFICATION' />
                    <ListContent num={21} title='GENERAL' />
                    <ListContent num={22} title='COPYRIGHT AND TRADEMARK NOTICES; OTHER ACKNOWLEDGEMENTS' />
                </View>
                <View style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: 10, marginRight: 10 }}>
                    <NumberComponent num={1} title='THIS IS AN AGREEMENT BETWEEN YOU AND ORNDA.COM' />
                    <Text style={styles.theory}>
                        These Terms of Service (“Terms” or “Agreement”) govern your access to and use of XITY’s Internet-based services (“Services”), including, without limitation, Internet navigation assistance web pages or application results containing search results, localized events pages, and other content offered through www.ornda.com, as well as any web page or mobile application that links to or references these Terms (collectively, "XITY Web Pages").
                        The Services may provide paid advertisements, listings, or other sponsored information in addition to unpaid search results. Sponsored advertisements, listings, and sponsored information may be given priority over unpaid listings.</Text>
                    <Text style={styles.theory}>Please read these Terms carefully. By accessing or using the Services and/or XITY Web Pages, you personally, or on behalf of the entity on which you are using our Services, (collectively, “you” or “your”) are accepting all the terms and conditions of this Agreement and are concluding a legally binding agreement with XITY.in (“XITY,” “us,” or “our”).
                        XITY, its affiliates, and its and their respective employees, officers, directors, and representatives shall collectively be referred to herein as the “XITY Parties.” If you do not accept these Terms, do not use the XITY Web Pages and/or Services, and if applicable, delete our mobile application(s) immediately.
                        Any capitalized terms in these Terms not defined herein shall have the meanings ascribed to them in our Privacy Policy or Service-Specific Rules (as defined below).</Text>
                    <Text style={styles.subtheory}>XITY OFFERS THE SERVICES TO YOU CONDITIONED ON YOUR ACCEPTANCE WITHOUT MODIFICATION OF THIS AGREEMENT. YOUR USE OF THE SERVICES CONSTITUTES YOUR ACCEPTANCE OF THIS AGREEMENT. THIS AGREEMENT CONTAINS DISCLAIMERS OF WARRANTIES AND LIABILITY; AND AN EXCLUSIVE REMEDY.
                        THESE PROVISIONS FORM AN ESSENTIAL BASIS OF OUR BARGAIN.
                    </Text>
                    <NumberComponent num={2} title='CHANGES TO THESE TERMS' />
                    <Text style={styles.theory}>
                        These Terms may change from time to time, and those changes will be available for your review on most XITY Web Pages that you view, and on our web page located at http://xity.in/legal/website/terms. We will post any changes to the Terms on this website and, if the changes are significant, we will provide a more prominent notice.
                        You should revisit these Terms on a regular basis. You understand and agree that your access to or use of the Services and/or XITY Web Pages is governed by the Terms effective at the time of your access to or use of the Services and/or XITY Web Pages. Your continued use of our Services or XITY Web Pages after any changes have been made will signify your assent to the changed Terms.
                    </Text>
                    <NumberComponent num={3} title='ADDITIONAL TERMS' />
                    <Text style={styles.theory}>
                        Additional terms may apply to the use of some Services, and are disclosed in the form of the posted guidelines or rules applicable to such Services (the "Service-Specific Rules"), which may be modified from time to time. All such Service-Specific Rules are hereby incorporated by reference into, and form part of, this Agreement.
                        If any provisions of this Agreement conflict with any Service-Specific Rules, the terms of the applicable Service-Specific Rules shall control.
                    </Text>

                    <NumberComponent num={4} title='USING THE SERVICES' />
                    <AlphaList alpha={'a)'} subtitle='GRANT OF RIGHTS' />
                    <Text style={styles.alphatheory}>
                        Subject to your compliance with these Terms, XITY grants you a limited, non-exclusive right to use the Services, including any content available to you via the Services, only as permitted in these Terms.
                        The XITY Web Pages are for your personal, non-commercial use only.
                    </Text>
                    <AlphaList alpha={'b)'} subtitle='USER ACCOUNTS' />
                    <Text style={styles.alphatheory}>
                        In order to take advantage of certain features of the Services (including, without limitation, the posting of reviews of businesses and the receipt of newsletters and special offers from XITY), you may be required to create an account with XITY (a "XITY Account"). You represent and warrant that all registration information provided by you in connection with accessing and/or using the Services is true, accurate, current and complete at the time of registration and you undertake to update all such registration information if at any time during your use of the Services it becomes untrue or inaccurate. XITY's use of any Personal Information that you provide to XITY during the account creation process is governed by XITY's Privacy Policy, which may be reviewed at http://xity.in/legal/website/privacy.aspx.
                        Please note that others may be able to identify you include any identifying information as part of your User-Generated Content. When you create a XITY Account, you agree to take full responsibility for maintaining the confidentiality of your XITY Account user name and password, and for all activity that is generated by your XITY Account. Accordingly, you understand and agree that you will be liable for any activity performed by any people using your XITY Account. You agree to immediately notify XITY of any unauthorized use of your XITY Account or any other breach of security.
                    </Text>
                    <AlphaList alpha={'c)'} subtitle='ELIGIBILITY' />
                    <Text style={styles.alphatheory}>
                        The Services and XITY Web Pages are not intended for users under the age of 18. Users under the age of 18 are expressly prohibited from creating a XITY Account with XITY. By creating a XITY Account or using the Services, you represent and warrant that you are at least 18 years old, are of adequate legal competence and/or capacity to enter into and abide by these Terms with XITY, are not creating a XITY Account in order to compete with XITY, and are not otherwise prohibited from using or receiving the Services in accordance with these Terms.
                    </Text>
                    <AlphaList alpha={'d)'} subtitle='NO UNLAWFUL OR HARMFUL USSE OF ' />
                    <Text style={styles.alphatheory}>
                        You represent and warrant that your usage of the Services will only be for lawful purposes and will be done in accordance with these Terms, any applicable Service-Specific Rules, and all applicable laws generally. You also represent and warrant that you will not use any of the XITY Web Pages or Services to violate any law, regulation or ordinance or any right of XITY or any third party, including, without limitation, any right of privacy, publicity, copyright, patent or trademark or other intellectual property right.
                    </Text>
                    <AlphaList alpha={'e)'} subtitle='BUSINESS INFORMATION' />
                    <Text style={styles.alphatheory}>
                        By submitting Business Information to XITY (including by claiming any business listings at: http://www.xity.in/claim-your-listing/), you consent to having your Business Information used, sold or otherwise distributed by XITY to third parties as permitted in our Privacy Policy at http://xity.com/legal/website/privacy.aspx. “Business Information” is defined as a business name, website URL, telephone number, physical address, email address, description of business, service areas, business category and/or keyword information, credit card information, and other contact information. XITY will comply with applicable laws at all times in our use, sale, or distribution of Business Information. Some Business Information may be Personal Information.          </Text>
                    <Text style={styles.alphatheory}> By submitting Business Information to XITY, you consent to receive autodialled and/or pre-recorded telemarketing calls from or on behalf of XITY or its Partners at the telephone number provided as part of such Business Information. You represent and warrant that you are authorized to disclose such Business Information to XITY. You additionally represent and warrant that any Business Information provided to XITY does not and shall not contain any residential contact information, including any residential landline or cellular telephone numbers.
                    </Text>

                    <NumberComponent num={5} title='CONTENT' />
                    <AlphaList alpha={'a)'} subtitle='RESPONSIBILITY FOR YOUR USER-GENERATED CONTENT' />
                    <Text style={styles.alphatheory}>
                        Certain of the Services may permit you to use your XITY account to submit reviews ("Reviews"), commentary, postings on message boards, data, text, files, links, software, chat content, music, sound, photographs, graphics, images, video, communication, messages or other materials and terms of expression (collectively "User-Generated Content"). User-Generated Content expressly excludes any Personal Information and/or confidential information that you provide to XITY during the XITY Account registration process. You agree that you will only post User-Generated Content that you are legally entitled to publish, and Reviews that you believe to be true, and that you will not purposely provide false or misleading information in your Reviews.</Text>
                    <Text style={styles.alphatheory}>
                        Unless you have the express consent of the proper owner of any materials that are copyrighted, trademarked or otherwise subject to a proprietary right, you are not permitted to upload, post, or otherwise make such materials available on or though the Services. You are solely responsible for complying with all laws applicable to any User-Generated Content you submit to the Services, including any Reviews, and for determining whether any materials you wish to upload, post or otherwise make available on or through the Services are subject to copyright, trademark or some other proprietary right. Additionally, you are solely liable for any damages that may arise as a result of any infringement of copyright, trademark or other proprietary right, or any other damages that result from materials that you upload, post or otherwise make available on or through the Services, including without limitation any Reviews.
                    </Text>
                    <Text style={styles.alphatheory}>
                        You are solely responsible for any User-Generated Content submitted to the Services from your XITY Account, and acknowledge and agree that your User-Generated Content cannot always be withdrawn. XITY reserves the right in its sole and absolute discretion to promulgate such additional rules and policies which it deems necessary or appropriate to govern the posting or submission of materials on or through the Services. XITY reserves the right, but has no obligation, to monitor disputes between you and any business that you have reviewed. XITY reserves the right in its sole discretion and without obligation to monitor all User-Generated Content to ensure conformity with these Terms and any other rules, policies or regulations as may be promulgated by XITY from time to time it its sole discretion, as well as any applicable laws, rules and regulations of any government having proper jurisdiction over XITY.            </Text>
                    <Text style={styles.subtheory2}>BY USING OUR SERVICES, YOU AGREE THAT YOU WILL NOT SUBMIT ANY CONFIDENTIAL INFORMATION OR MATERIALS TO OR THROUGH THE SERVICES OFFERED BY XITY. EXCEPT FOR XITY ACCOUNTS CREATED, XITY CANNOT AND DOES NOT AGREE TO MAINTAIN ANY INFORMATION OR MATERIALS YOU SUBMIT TO OR THROUGH THE SERVICES AS CONFIDENTIAL.
                    </Text>
                    <AlphaList alpha={'b)'} subtitle='CONTENT GUIDELINES' />
                    <Text style={styles.alphatheory}>
                        XITY has the right, but not the obligation, to refuse to post, edit, delete, truncate or to remove any User-Generated Content for any reason, including if the User-Generated Content contains any of the following:           </Text>
                    <Text style={styles.alphatheory}>
                        Offensive, harmful and/or abusive language, including without limitation: expletives, profanities, obscenities, harassment, vulgarities, sexually explicit language and hate speech (e.g., racist/discriminatory speech) References to illegal activity, malpractice, purposeful overcharging, false advertising or health code violations (e.g., food poisoning, foreign objects in food, etc.) Reviews submitted by the reviewed business' employees (past or present) or competitors, as determined by XITY Reviews that do not address the goods and services of the business or Reviews with no qualitative value
                        (e.g., "this place is great!"), as determined by XITY in its sole discretion.
                        Content commenting on other users or violating the privacy of other users, as determined by XITY, in its sole discretion Content that contains personal attacks or describes physical confrontations and/or sexual harassment References to excessive damage caused by business or service to person or property Personal information or messages including, without limitation, email addresses, URLs, phone numbers and postal addresses Messages that are advertising or commercial in nature, amount to spam, or are otherwise inappropriate based on the applicable subject matter Language that violates the standards of good taste or the standards of this website, as determined by XITY in its sole discretion Content determined by XITY to be offensive, illegal, or to violate any central, state, or local law or regulation or the rights of any other person or entity Language intended to impersonate other users (including names of other individuals) or offensive or inappropriate user names or signatures Content that is not in English,
                        that is encrypted or that contains viruses, Trojan horses, worms, time bombs, cancelbots or other computer programming routines that are intended to damage, interfere with, intercept or appropriate any system, data or personal information Content that otherwise violates these Terms, or any Service-Specific Rules, or that may harm or threaten the safety of other users of the Services Content that is false or intentionally misleading Nothing set forth above shall alter or diminish your responsibility with respect to your User-Generated Content, as discussed herein. Reviews do not reflect the views of XITY or any XITY Parties. XITY does not assume responsibility or liability for any Review or for any claims, damages, or losses resulting from any use of a Review. You acknowledge and agree that, with respect to any conduct within the Services, XITY assumes and shall have no liability for any action or failure to act on the part of XITY. We are under no obligation to enforce the Terms on your behalf or against another user.
                    </Text>
                    <AlphaList alpha={'c)'} subtitle='OUR RIGHT TO USSE YOUR CONTENT; DERIVATIIVE WORKS ' />
                    <Text style={styles.alphatheory}>You hereby grant XITY, its subsidiaries, and/or affiliated companies an irrevocable, unrestricted, royalty-free and perpetual worldwide license to use, reproduce, broadcast, modify, adapt, translate, transmit, sell, store, privately and publicly display, privately and publicly perform, create derivative works based upon, distribute, and promote any and all User-Generated Content that you submit, upload, post, send to or through all or any portion of the Services, including without limitation, both within the Services and such other products or services as XITY may designate in any medium now known or hereafter devised, for editorial, commercial, promotional and all other purposes.
                    </Text>
                    <Text style={styles.alphatheory}>
                        To the extent you submit to XITY any ideas, concepts, know-how, techniques or other materials and/or information of any kind, you agree that we are free to use any and all of the foregoing without further permission or payment to you or any third party. You also permit any user of the Services or XITY Web Pages to access, display, view, store and reproduce such User-Generated Content for personal use. You waive any right to inspect or approve uses of any User-Generated Content you submit or to be compensated for any such uses. XITY is under no obligation to give credit or pay any consideration to you for User-Generated Content.
                    </Text>
                    <Text style={styles.alphatheory}>
                        You agree that XITY owns all right, title, and interest in any compilation, collective work or other derivative work created by XITY using or incorporating your User-Generated Content, irrespective of any right, title or interest you or others may retain in your User-Generated Content. By submitting User Generated-Content to or through the Services, you represent and warrant that (i) you have the right to grant any and all necessary licenses and rights provided herein,
                        including without limitation, all necessary copyright and other related rights to the User-Generated Content, free and clear of all claims and encumbrances without violating the rights of any person or entity, including any right to privacy or publicity, and (ii) the User-Generated Content does not and shall not infringe on any copyright or any other third party right nor violate any applicable law or regulation. XITY does not owe you any payment with regard to any feedback, ideas, suggestions, or anything else about the Services contained in any User-Generated Content.
                    </Text>
                    <AlphaList alpha={'d)'} subtitle='ADVERTISING' />
                    <Text style={styles.alphatheory}>
                        You understand and agree that the Services may include advertisements and that these advertisements are necessary for XITY to provide the Services. XITY relies on its advertisers for the accuracy and completeness of such advertising. XITY and its Partners (as defined in our Privacy Policy) may publicly display advertisements and other information adjacent to or included with your User-Generated Content. You are not entitled to any compensation for such advertisements. The manner, mode and extent of such advertising are subject to change without specific notice to you.          </Text>
                    <ListContent num={6} title='PROHIBITED ACTIVITIES' />
                    <Text style={styles.theory}>
                        Without limiting the generality Advertising, you will not use the Services, or any XITY Web Page (i) to violate or infringe upon the rights of others in any way, (ii) to violate or facilitate the violation of any law or to encourage others to violate any law, (iii) to send unsolicited bulk e-mail and/or instant messages, (iv) to transmit, relay, or otherwise communicate vulgar, unlawful, obscene, profane, indecent or otherwise offensive or objectionable materials or information, (v) to falsify your identity or impersonate another person; or (vi) to engage in conduct that limits the use and enjoyment of the Services, or any part thereof, by other users in any way, as determined by XITY in its sole and absolute discretion. You will not send automated queries of any sort to the Services without express permission in advance from XITY.
                        Please note that "sending automated queries" includes, among other things (a) using any software that sends queries to the Services to determine how a web site or web page "ranks" on the Services for various queries; (b) "meta-searching" the Services; (c) performing "offline" searches on the Services; and (d) using software robots, spiders, or other tools to "scrape" or automatically copy any portions of the Web Site or Services.
                    </Text>
                    <Text style={styles.theory}>
                        You may not reproduce, duplicate, copy, sell, resell, exploit or otherwise use the XITY Web Pages, any portion thereof, or any services or products available thereunder for commercial purposes. You may not use the XITY Web Pages in any way that harms XITY, its affiliates, resellers, distributors, advertisers, service providers and/or suppliers (each, a "XITY Party" and collectively, the " XITY Parties") or any customer of a XITY Party, as determined in XITY's sole discretion.
                        Without limiting the generality of this Section, you will not use the XITY Web Pages in any manner that could damage, disable, overburden, or impair any XITY Web Page (or the network(s) connected to any Internet Web Page) or interfere with any other party's use and enjoyment of the Services. Your use of the Services does not give you ownership of or any rights to any materials or content that may be provided to you in connection with your use of the Services, all of which is owned by XITY, its Partners, or other entities
                    </Text>
                    <Text style={styles.theory}>
                        You agree not to (1) reverse engineer, disassemble, alter, decompile, duplicate, create derivative works from, make copies of, extract information from, provide or distribute others with any portion of the XITY Web Pages or Services, or any information available on, extracted or derived from the XITY Web Pages or Services, or any part thereof; (2) connect, use, attempt to connect or use in any way the Services, for purposes other than your private, personal use in good faith and as explicitly offered on our website, including without limitation for any commercial purpose, such as, for instance, sending unsolicited communications of any type or nature; (3) interfere, block, disable or otherwise affect any advertising, advertising element, advertisement banner window, links to other sites and services, or other features that constitute an integral part of the Services; and (4) incorporate, integrate or otherwise include any portion of the Services that is comprised of software into any software, program or product that communicates, accesses, or otherwise connects with the Services or any other instant messaging, Internet, or online service. Finally, you may not assist, encourage, enable, or authorize or assist any third party to do any of the things described in this section.
                    </Text>
                    <ListContent num={7} title='TERMINATION; VIOLATIONS; SURVIVAL' />
                    <Text style={styles.theory}>
                        XITY may terminate these Terms, or terminate or suspend your access to the Services and/or XITY Web Pages at any time, with or without cause, and with or without notice. Upon such termination or suspension, your right to use the Services will immediately cease.
                    </Text>
                    <Text style={styles.theory}>
                        If you violate these Terms in any way, including, without limitation, by repeat infringement of copyrights, XITY may,
                        at its sole discretion, terminate your account, remove or modify any account-related content or access (including, but not limited to, reviews, newsletters, and promotions), or take any other action that XITY believes is appropriate. XITY may investigate violations of these Terms and may involve and cooperate with law enforcement authorities in prosecuting users of the Services or XITY Web Pages who are involved in such violations. If your access to the Services is terminated, XITY may exercise whatever means it deems necessary to prevent unauthorized access to the Services, including, but not limited to, technological barriers, IP mapping, and direct contact with your Internet service provider.
                    </Text>
                    <Text style={styles.theory}>
                        In the event of termination of these Terms, whether by us or you, these Terms shall survive in full force and effect indefinitely, including our right to use your User-Generated Content unless and until XITY chooses to terminate such Terms, regardless of whether you close your XITY Account or whether you continue to use the Services and/or XITY Web Pages.
                    </Text>
                    <ListContent num={8} title='XITY POLICIES' />
                    <AlphaList alpha={'a)'} subtitle='PRIVACY' />
                    <Text style={styles.alphatheory}>
                        You represent that you have read and understood our Privacy Policy located at http://xity.in/legal/website/privacy.in, and that XITY may collect, use and share your information in accordance with such Privacy Policy.
                    </Text>
                    <AlphaList alpha={'b)'} subtitle='COPYRIGHHT INFRINGEMENT CLAIMS' />
                    <Text style={styles.alphatheory}>
                        XITY respects the intellectual property of others, and asks its users, advertisers, licensors and service providers to do the same. If you believe that your work has been copied and is accessible on or through the Services in a way that constitutes copyright infringement, go to http://xity.in/legal/website/copyright for instructions on how to report copyright infringement to XITY.
                    </Text>
                    <AlphaList alpha={'c)'} subtitle='MOBILE APPLICATIONS' />
                    <Text style={styles.alphatheory}>
                        You represent that you have read and understood our Mobile App Terms of Service located at Legal pages in connection with your use and/or download of our mobile applications.          </Text>
                    <ListContent num={9} title='USE OF USER-GENERATED CONTENT' />
                    <Text style={styles.theory}>XITY does not control, verify or endorse any User-Generated Content posted by third-parties on the Services or XITY Web Pages, and does not guarantee the accuracy, integrity, timeliness or quality of such content. You understand that, by using the Services or accessing the XITY Web Pages, you may be exposed to content that is offensive, indecent or objectionable. You agree that you must evaluate and bear all risks associated with the use of any content on the Services, including any reliance on the content, integrity, and accuracy of such content. If you see objectionable content or have any questions about this Agreement, please contact XITY at customercare@xity.in.
                    </Text>
                    <ListContent num={10} title='PROPRIETARY INFORMATION' />
                    <Text style={styles.theory}>
                        As you use the Services, you should expect to receive, access or use information, text, materials, graphics, software, sound, data, advertising, and other content (collectively, "Content") provided by XITY and other XITY Parties. You acknowledge and agree that the XITY Web Pages and any Content, Services or software available through or used in connection with the XITY Web Pages, including without limitation proprietary databases, software, servers, components, and algorithms necessary to operate and provide the Services, contain proprietary and confidential information that is owned by one or more XITY Parties, and is protected by applicable intellectual property and other laws. You further acknowledge and agree that Content made available via the Services or XITY Web Pages, but provided by third parties may be subject to separate Terms and Conditions established by those third parties. XITY's formatting of such content,
                        including the selection of such available content, and its arrangement,enhancement and coordination is copyright protected by XITY. You further acknowledge and agree that Content contained in advertisements or information presented to you through the XITY Web Pages or by advertisers is protected by copyright, trademarks, service marks, patents or other proprietary rights and laws. Except as expressly authorized by the appropriate XITY Parties, you agree not to modify, rent, lease, loan, sell, publish, transmit, distribute, create derivative works based on, or in any way exploit the Services, the XITY Web Pages, or any Content available through or used in connection with the XITY Web Pages, in whole or in part. You are not permitted to store any portion of the content of the Services in a computer unless it is for personal and non-commercial use.
                    </Text>
                    <ListContent num={11} title='TRADEMARK INFORMATION' />
                    <Text style={styles.theory}>
                        You acknowledge and agree that XITY.in ® and other XITY logos, products and service names are or may be trademarks and/or service marks of XITY ("XITY Marks"). You agree that you will not display or use the XITY Marks in any manner, without the express written permission of XITY. The names of other products and companies contained within our Services may be the trademarks or service marks of their respective owners.
                        Nothing in these Terms grants you any license to use any trademark, service mark, names or logos of XITY, any XITY Parties, or any third party.
                    </Text>
                    <ListContent num={12} title='INFORMATION AVAILABLE FROM THE RESULTS PAGES' />
                    <Text style={styles.theory}>
                        XITY and the XITY Parties do not warrant or guarantee the accuracy, completeness or timeliness of any information available via the Services, or on any XITY Web Page. XITY and the XITY Parties do not authorize the use of information available via the Services, or on any XITY Web Page for any purpose other than your personal use. You may not resell, redistribute or use this information for commercial purposes.
                        XITY does not endorse or recommend any particular product or service.
                    </Text>
                    <ListContent num={13} title='MAP INFORMATION' />
                    <Text style={styles.theory}>
                        Google maps Terms of Use may be viewed at https://cloud.google.com/maps-platform/terms.
                    </Text>
                    <ListContent num={14} title='LINKS; THIRD PARTY SERVICES' />
                    <Text style={styles.theory}>
                        Certain portions of the Services contain features and functionality that may link to or be provided from a third party, including without limitation third party websites, databases, applications, software, programs, services, directories, servers, networks, and systems (collectively, "Third Party Services").
                        XITY provides access to these Third Party Services to you as a convenience only and XITY does not, in any way, control or manage such Third Party Services. As such, XITY is not responsible for the content, functionality, accuracy, truthfulness, or availability of such Third Party Services or any link contained therein. By making such Third Party Services available via the Services, XITY is not endorsing or warranting such Third Party Services in any way. Furthermore, XITY does not endorse any product or service that may be offered on or through such Third Party Services or through advertising delivered on or through the Services. Under no circumstances shall the access to or availability of such Third Party Services give rise to any liability to anyone for any damage of whatever nature whatsoever.
                    </Text>
                    <ListContent num={15} title='REQUESTS FOR REMOVAL OF LINKS FROM INDICES' />
                    <Text style={styles.theory}>
                        XITY occasionally receives requests to remove links from its indices that generate web results. Although XITY reserves the right to address such requests individually, XITY is generally not willing to remove any links from its indices.
                    </Text>
                    <ListContent num={16} title='SECURITY AND PRIVACY LIMITATIONS' />
                    <Text style={styles.theory}>
                        By use of any of the Services, you acknowledge that you are aware (1) that data and information on the Services may be subject to forgery, eavesdropping, tampering, sniffing, spamming, spoofing, password cracking, harassment, fraud, electronic trespassing, hacking, nuking, system contamination including viruses, worms and Trojan horses causing unauthorized, damaging and/or harmful access to, or retrieval of, information and data on your computer; (2) of security and privacy limitations in the Services including without limitation the limitation of security, privacy and authentication measures and features; (3) that the security and privacy features available on the Services, are provided to you as a convenience only and may not operate according to their description or may not operate at all; and (4) that information, data or messages may not reach their destination or may reach an erroneous address or recipient.
                        You acknowledge that, as with most Internet applications (i.e. e-mail), there are certain risks associated with accepting or downloading files from or through XITY. Such risks include, but are not limited to, (1) damage to your computer, (2) damage to any data or files stored on your computer, (3) XITY users viewing your IP address, and (4) files you share with other XITY users being redistributed and used without your knowledge.
                    </Text>
                    <ListContent num={17} title='XITY MAKES NO WARRANTY' />
                    <Text style={styles.theory}>
                        The xity parties provide the services and xity web pages "as is," "with all faults" and "as available," and the entire risk as to satisfactory quality, performance, accuracy, security, and effort is with you. to the maximum extent permitted by applicable law, the xity parties make no representations, warranties or conditions, express or implied. the xity parties disclaim any and all warranties or conditions, express, statutory and implied, including without limitation (1) warranties or conditions of merchantability, fitness for a particular purpose, workmanlike effort, accuracy, title and non-infringement, (2) warranties or conditions arising through course of dealing or usage of trade, and
                        (3) warranties or conditions that access to or use of the services will be uninterrupted or error-free.
                    </Text>
                    <Text style={styles.theory}>
                        Xity does not warrant that the services, xity web pages or web site will operate error-free
                        or that the web site or its server a re free of computer viruses or other harmful mechanisms. you understand and agree that you download or otherwise obtain material or data through the use of xity's web pages or services at your own discretion and risk and that you will be solely responsible for any damages to your computer system or loss of data that results from the download of such material or data. if your use of the xity web sites or the services results in the need for servicing or replacement of equipment or data, xity is not responsible for those costs.
                    </Text>
                    <ListContent num={18} title='LIABILITY LIMITATION; YOUR EXCLUSIVE REMEDY' />
                    <Text style={styles.theory}>
                        In no event will any xity party be liable for any damages, including without limitation any indirect, consequential, special, incidental, or punitive damages arising out of, based on, or resulting from this agreement or your use of the services or the xity web pages, even if such xity party has been advised of the possibility of such damages. the exclusion of damages under this section is independent of your exclusive remedy and survives in the event such remedy fails of its essential purpose or is otherwise deemed unenforceable.
                        these limitations and exclusions apply without regard to whether the damages arise from (1) breach of contract, (2) breach of warranty, (3) negligence, or (4) any other cause of action, to the extent such exclusion and limitations are not prohibited by applicable law. if you are dissatisfied with the services, you do not agree with any part of this agreement, or you have any other dispute or claim with or against any xity party with respect to this agreement or the services, then your sole and exclusive remedy is to discontinue using the services
                    </Text>

                    <ListContent num={19} title='CHANGES TO THE SERVICES; ADDITIONAL LIABILITY LIMITATION' />
                    <Text style={styles.theory}>
                        Without limiting the generality of warranty & liability, you acknowledge and agree that the xity parties are not responsible or liable for (1) any content provided by xity or any third parties, including without limitation, any infringing, inaccurate, obscene, indecent, threatening, offensive, defamatory, tortious, or illegal content, or (2) any third party conduct, transmissions or data. in addition, without limiting the generality of warranty & liability, you acknowledge and agree that xity is not responsible or liable for (1) any viruses or other disabling features that affect your access to or use of the services, (2) any incompatibility between the web site or xity web pages and other web sites, services, software and hardware, (3) any delays or failures you may experience in initiating, conducting or completing any transmissions or transactions
                        in connection with the services in an accurate or timely manner, (4) any loss or liability resulting from errors,
                        omissions or misstatements in any and all information or services provided by xity to you,
                        or (5) any losses, damages or costs of any type arising out of or in any way connected with your use of any services available from third parties through links contained on the xity web pages. you agree that you must evaluate and bear all risks associated with the use of any content provided by xity or any third parties, including any reliance on the accuracy or completeness of such content. the limitations, exclusions and disclaimers in sections warranty & liability & changes to services, of this agreement apply to the maximum extent permitted by applicable law, and are not intended to deprive you of any mandatory protections provided to you under applicable law.
                    </Text>
                    <ListContent num={20} title='INDEMNIFICATION' />
                    <Text style={styles.theory}>
                        You Agree To Release, Indemnify, Defend And Hold Harmless XITY, Its Parent, Subsidiaries And Affiliates, And Its And Their Shareholders, Officers, Directors, Employees, Agents And Advisors, From And Against Any And All Losses, Liabilities, Claims (Including Claims Without Legal Merit Or Brought In Bad Faith), Demands, Damages, Costs Or Expenses, Causes Of Action, Suits, Proceedings, Judgments, Awards, Executions And Liens, Including Reasonable Attorneys' Fees And Costs (Whether Brought By Third Parties Or Otherwise) (Collectively, "Claims") Due To Or Arising Out Of Content You Submit, Post, Transmit, Modify Or Otherwise Make Available Through The Services,
                        Your Use Of The Services, Your Connection To The Services, Any Breach By You Of This Agreement, Or Your Violation Of Any Rights Of Another. XITY Reserves The Right, At Its Own Expense, To Assume The Exclusive Defence And Control Of Any Matter Subject To Indemnification By You, Which Will Not Excuse Your Indemnity Obligations Under This Section.
                    </Text>
                    <ListContent num={21} title='GENERAL' />
                    <Text style={styles.theory}>
                        If this Agreement Is With XITY, Claims For Enforcement, Breach Or Violation Of Duties Or Rights Under This Agreement Will Be Adjudicated Under The Laws Of India, Without Reference To Conflict Of Laws Principles. If This Agreement Is With A XITY Affiliate, Claims For Enforcement, Breach Or Violation Of Duties Or Rights Under This Agreement Will Be Adjudicated Under The Laws Of The Place Of Incorporation For Such XITY Affiliate, Without Reference To Conflict Of Laws Principles. All Other Claims, Including, Without Limitation,
                        Claims Under Or For Violation Of Consumer Protection Laws, Unfair Competition Laws, And In Tort, Will Be Adjudicated Under The Laws Of Your State Of Residence In India, Or, If You Reside Outside India, Under The Laws Of The Country To Which The Subject XITY Web Pages Are Directed. If This Agreement Is With XITY, You Hereby Irrevocably Consent To The Exclusive Jurisdiction And Venue Of State Or City Courts In Karnataka, Bangalore, India In All Disputes Arising Out Of Or Relating To This Agreement Or The Use Of The Services. If This Agreement Is With A XITY Affiliate, You Hereby Consent To The Exclusive Jurisdiction And Venue Of The Courts Located In The Place Of Incorporation For Such XITY Affiliate In All Disputes Arising Out Of Or Relating To This Agreement Or The Use Of The Services. Use Of The Services Is Unauthorized In Any Jurisdiction That Does Not Give Effect To All Provisions Of This Agreement, Including Without Limitation This Section.
                        If For Any Reason A Court Of Competent Jurisdiction Finds Any Provision Or Portion Of This Agreement To Be Unenforceable, The Remainder Of This Agreement Will Continue In Full Force And Effect. A Printed Version Of This Agreement And Any Notice Given In Electronic Form Shall Be Admissible In Judicial Or Administrative Proceedings Based Upon Or Relating To This Agreement To The Same Extent And Subject To The Same Conditions As Other Business Documents And Records Originally Generated And Maintained In Printed Form. XITY May Assign This Agreement, In Whole Or In Part, At Any Time With Or Without Notice To You. You May Not Assign This Agreement. Except As Expressly Stated Herein,
                        This Agreement Constitutes The Entire Agreement Between You And XITY With Respect To The Services And It Supersedes All Prior Or Contemporaneous Communications And Proposals, Whether Electronic, Oral Or Written, Between You And XITY With Respect To The Services. The Section Titles In The Terms Are Solely Used For The Convenience Of The Parties And Have No Legal Or Contractual Significance. Any Failure By XITY To Exercise Or Enforce Any Provision Of The Terms Does Not Constitute A Waiver Of Such Right Of Provision.
                    </Text>
                    <Text style={styles.subtheory}>
                        YOU AND XITY AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.
                    </Text>
                    <ListContent num={22} title='COPYRIGHT AND TRADEMARK NOTICES; OTHER ACKNOWLEDGEMENTS' />
                    <Text style={styles.theory}>
                        All Contents Of The XITY Web Pages Are Copyrighted By XITY.In And/Or Its Suppliers. XITY.In, The XITY.In Name And Logos (Old And New), And/Or Other XITY Products And Services Referenced Herein May Also Be Either Trademarks Or Registered Trademarks Of XITY In India And/Or Other Countries. The Names Of Actual Companies And Products Mentioned Herein May Be The Trademarks Of Their Respective Owners. The Example Companies, Organizations, Products, Domain Names, E-Mail Addresses, Logos, People, Places And Events Depicted Herein Are Fictitious. No Association With Any Real Company, Organization, Product, Domain Name, E-Mail Address, Logo, Person, Places Or Events Is Intended Or Should Be Inferred. Any Rights Not Expressly Granted Herein Are Reserved.
                    </Text>
                    <Text style={styles.theory}>
                        Certain Portions Of The Content On The XITY Web Pages May Be Provided By Gudvil Nexus. This Information Is Proprietary To Gudvil Nexus And Is Protected Under Indian Copyright Law And International Treaty Provisions. This Information Is Licensed For Your Personal Or Professional Use And May Not Be Resold Or Provided To Others. You May Not Distribute, Sell, Rent, Sublicense, Or Lease Such Information, In Whole Or In Part, To Any Third Party; And You Will Not Make Such Acxiom Information Available, In Whole Or In Part, To Any Other User In Any Networked Or Time-Sharing Environment, Or Transfer The Information, In Whole Or In Party, To Any Computer Other Than The PC Used To Access This Information.
                    </Text>
                    <Text style={styles.subtheory}>
                        Last Updated: November 2013
                    </Text>
                </View>
                <BottomView />


            </ScrollView>
            {
                isExpand ? <ExpandedView
                    onHomeClick={() => {
                        navigation.navigate('Home')
                        setExpand(false)
                    }}
                    onMyAccClick={() => {
                        navigation.getParent('left_drawer3').openDrawer()
                        setExpand(false)
                    }}
                    onSeviceClick={() => {
                        navigation.getParent('left_drawer2').openDrawer()
                        setExpand(false)

                    }}
                    onMarketsClick={() => {
                        navigation.getParent('right_drawer').openDrawer()
                        setExpand(false)

                    }}
                    onMenuClick={() => {
                        navigation.getParent('left_drawer').openDrawer()
                        setExpand(false)

                    }} onClose={() => { setExpand(false) }} /> : <FloatButton onPress={() => { setExpand(true) }} />
            }
        </View>

    )
}
const styles = StyleSheet.create({
    subtheory: {
        marginBottom: 20,
        fontSize: 13,
        fontWeight: '600',
        color: 'black',
        marginBottom: 20
    },
    theory: {
        marginTop: 7,
        marginBottom: 15,
        fontSize: 13,
        fontWeight: '400',
        color: 'black'
    },
    alphatheory: {
        marginBottom: 20,
        marginTop: 10,
        fontSize: 13,
        fontWeight: '400',
        color: 'black',
        marginLeft: 15
    },
    subtheory2: {
        marginLeft: 10,
        fontSize: 13,
        fontWeight: '600',
        color: 'black',
        marginBottom: 20
    },
})
export default TermOfUse