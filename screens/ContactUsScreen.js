import { View, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import ContactImg from '../images/contactimg.png'
import Logo from '../images/logo.png'
import fbIcon from '../images/fbicon.png'
import twitIcon from '../images/twittericon.png'
import igIcon from '../images/instaicon.png'
import ytIcon from '../images/yticon.png'
import vIcon from '../images/vIcon.png'
import Banner4 from '../images/banner4.png'
import Yellow from '../images/yellowicon.png'
import MapImg from '../images/map.png'
import ShareIcon from '../images/shareicon.png'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet';
import IconTitleDesc from './IconTitleDesc'
import ImageOverlayText from './ImageOverlayText'
import GreyTextInput from './GreyTextInput'
import BottomView from './BottomView'
import BannerBlue from '../images/banner.png'
import PinkBurger from '../images/pinkcircle.png'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomAppBar from './CustomAppBar'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ContactUsScreen = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);
    const [isMapAlert, setIsMapAlert] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <CustomAppBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 60 }}>
                    <View style={styles.overlayContainer}>
                        <Image source={ContactImg} resizeMode='cover' style={styles.contactImg} />
                        <Text style={styles.largeText}>Contact Us</Text>
                        <Spacer size={size.mid} />
                        <View style={styles.shortLine} />
                        <Spacer size={size.mid} />
                        <Text style={styles.whiteShortText}>Home  &gt;  Contacts Us</Text>

                    </View>

                    <Spacer size={size.mid} />
                    <View style={{ paddingHorizontal: 15 }}>
                        <Image source={Logo} resizeMode='contain' style={styles.imageStyle} />
                        <Spacer size={size.sm} />
                        <Text style={styles.description}>Xity is Your Resource For All Things Local. From businesses, professionals, industries, brands to deals, events, jobs, and government services in your locality we'll help you find it all.</Text>
                        <Text style={styles.descriptionBold}>We invite all visitors and businesses to join us and make a MARK on the local community!</Text>
                        <Spacer size={size.xlg} />
                        <Text style={styles.textLarge}>Get In Touch</Text>
                        <Spacer size={size.mid} />
                        <View style={styles.borderView}>
                            <IconTitleDesc Icon={<Icons.Ionicons name={'location-sharp'} size={20} color='#4286F5' />} Title='Address :' Desc='No.36, 1st Main, 14th Cross, Lic Colony, Bangalore – 560022, Karnataka.' />
                            <View style={styles.line} />
                            <IconTitleDesc Icon={<Icons.Ionicons name={'md-call'} size={20} color='#4286F5' />} Title='Phone :' Desc='9743696650' />
                            <Spacer size={size.sm} />
                            <View style={styles.line} />
                            <IconTitleDesc Icon={<Icons.Entypo name={'mail'} size={20} color='#4286F5' />} Title='Mail :' Desc='contactus@ornda.com' />
                            <Spacer size={size.sm} />
                            <View style={styles.line} />
                            <View style={styles.iconContainer}>
                                <Image source={fbIcon} style={styles.imageIcon} />
                                <Image source={twitIcon} style={styles.imageIcon} />
                                <Image source={igIcon} style={styles.imageIcon} />
                                <Image source={ytIcon} style={styles.imageIcon} />
                                <Image source={vIcon} style={styles.imageIcon} />
                            </View>
                            <Spacer size={size.mid} />
                            <View style={styles.line} />
                            <TouchableOpacity style={styles.greenBtn}>
                                <Text style={styles.greenBtnText}>Chat Now</Text>
                            </TouchableOpacity>

                        </View>
                        <Spacer size={size.lg} />

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                            <ImageOverlayText Img={Banner4} Desc='Please review our FAQs, it can help you with general information.' BtnText='FAQs' />
                            <ImageOverlayText Img={Banner4} Desc='Please review our FAQs, it can help you with general information.' BtnText='FAQs' />
                            <ImageOverlayText Img={Banner4} Desc='Please review our FAQs, it can help you with general information.' BtnText='FAQs' />

                        </ScrollView>
                        <Spacer size={size.lg} />
                        <Text style={styles.textLarge}>Fill out this form to get in touch with us</Text>
                        <Spacer size={size.mid} />

                        <Text style={styles.description}>We are always happy to hear from our customers. We are always grateful for any time you spend providing us with the knowledge we need to ensure our customers are completely satisfied with the service we offer. If you have any questions or feedback, please do not hesitate to contact a member of the Eloe Customer Care team.</Text>
                        <Spacer size={size.lg} />
                        <GreyTextInput hint='*First name' isAvatar={true} />
                        <Spacer size={size.sm} />
                        <GreyTextInput hint='*Last name' isAvatar={true} />
                        <Spacer size={size.sm} />
                        <GreyTextInput hint='Business name' isBussiness={true} />
                        <Spacer size={size.sm} />
                        <GreyTextInput hint='Email' isEmail={true} />
                        <Spacer size={size.sm} />
                        <GreyTextInput hint='*Phone number' isCall={true} />
                        <Spacer size={size.sm} />
                        <GreyTextInput hint='*Subject' isBook={true} />
                        <Spacer size={size.sm} />
                        <TextInput
                            placeholder='*Message'
                            multiline={true}
                            placeholderTextColor='grey'
                            style={styles.msgBox}
                        />
                        <Spacer size={size.mid} />
                        <Text style={styles.midSizeText}>Attachments:</Text>
                        <Spacer size={size.sm} />
                        <TouchableOpacity style={styles.greyBtn}>
                            <Text style={{ color: 'white' }}>Upload file</Text>
                        </TouchableOpacity>
                        <Spacer size={size.sh} />
                        <Text style={{ fontSize: responsiveFontSize(1.7), color: '#3B3B3B' }}>(Max. 2MB, accepted formats:jpeg, gif, png, pdf, doc. )</Text>
                        <Spacer size={size.mid} />
                        <TouchableOpacity style={styles.imgWithTextBtn}>
                            <Text style={styles.imgBtnText}>Send Message</Text>
                            <SpacerHorizontal size={size.mid} />

                            <Image source={ShareIcon} style={styles.shareBtn} />
                        </TouchableOpacity>
                        <Spacer size={size.mid} />
                        <Spacer size={size.mid} />
                        <Text style={styles.textLarge}>We'll be in touch soon</Text>
                        <Spacer size={size.sh} />
                        <Text style={styles.description}>We aim to respond within 24 hours, but during busy periods like holidays, sales and special campaigns, we may take a little longer getting back to you. Want to get in touch? Scroll down for more details.</Text>
                        <Spacer size={size.lg} />

                        <Spacer size={size.xlg} />

                    </View>
                    <Pressable onPress={() => {
                        setIsMapAlert(true);
                    }}>
                        <View style={{ height: 350, alignItems: 'center', justifyContent: 'center', }}>

                            <Image source={MapImg} resizeMode='cover' style={{ width: windowWidth, height: 350, position: 'absolute', bottom: 0, }} />

                            <View style={{ position: 'absolute', flexDirection: 'row', right: 10, bottom: 25 }}>
                                <Image source={Yellow} style={{ width: 45, height: 45 }} />
                            </View>
                            <View style={{ position: 'absolute', right: 10, }}>
                                <TouchableOpacity style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: 'white' }}>
                                    <Icons.Entypo name={'plus'} size={30} color='#0C3982' style={{ alignSelf: 'center' }} />
                                </TouchableOpacity>
                                <Spacer size={size.sh} />
                                <TouchableOpacity style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: 'white' }}>
                                    <Icons.Entypo name={'minus'} size={30} color='#0C3982' style={{ alignSelf: 'center' }} />
                                </TouchableOpacity>
                            </View>

                            {isMapAlert && <View style={{ height: 220, width: windowWidth * 0.7, alignSelf: 'center', }} >
                                <Image source={BannerBlue} style={{ height: 220, alignSelf: 'center', position: 'absolute', justifyContent: 'center', borderRadius: 8, width: windowWidth * 0.7 }} />

                                <View style={{ width: windowWidth * 0.7, justifyContent: 'space-between', height: 220, }}>
                                    <View style={{ flexDirection: 'row', paddingTop: 8, paddingHorizontal: 10, justifyContent: 'space-between' }}>
                                        <TouchableOpacity style={{ backgroundColor: '#00C899', flexDirection: 'row', height: 23, paddingHorizontal: 8, alignItems: 'center', borderRadius: 30 }}>
                                            <Icons.Feather name={'unlock'} size={12} color='white' style={{ alignSelf: 'center' }} />

                                            <Text style={{ color: 'white', marginLeft: 5, fontSize: 12, fontWeight: '600' }}>Open Now</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            setIsMapAlert(false);

                                        }} style={{ backgroundColor: "#0C3982", padding: 3, borderRadius: 6 }}>
                                            <Icons.Entypo name={'cross'} size={20} color='white' style={{ alignSelf: 'center' }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: '100%', padding: 10, backgroundColor: 'white', borderRadius: 8 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                            <Text style={{ color: 'black', }}>Ornda Agency Pvt Ltd</Text>
                                        </View>
                                        <Image source={PinkBurger} resizeMode='contain' style={{ position: 'absolute', right: 25, top: -20, width: 40, height: 40 }} />

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Icons.Entypo name='location-pin' size={15} color='#4286F5' />
                                                <SpacerHorizontal size={size.sh} />
                                                <Text style={{ color: 'black', fontSize: 9 }}>No.26, 1st Main, 14th Cross, Lic Colony,{'\n'} Bangalore - 560022, Karnataka.</Text>
                                            </View>
                                            <Icons.Ionicons name='swap-horizontal' size={15} color='#0C3982' />
                                        </View>
                                        <View style={{ height: 1, marginVertical: 5, backgroundColor: 'grey' }} />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: 'black', fontSize: 12 }}>Details</Text>
                                                <SpacerHorizontal size={size.sh} />
                                                <Icons.AntDesign name='arrowright' size={15} color='black' />
                                            </View>
                                            <Icons.AntDesign name='hearto' size={15} color='#4286F5' />

                                        </View>
                                    </View>

                                </View>
                            </View>}
                        </View></Pressable>
                    <BottomView />
                </View>
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

export default ContactUsScreen

const styles = StyleSheet.create(
    {
        contactImg: { height: 300, position: 'absolute', width: windowWidth },
        imageStyle: {
            height: 35,
            width: 60,
            borderRadius: 8,
        },
        imageIcon: {
            height: 40,
            width: 40,
            marginHorizontal: 5,
            borderRadius: 8,
        },
        description: {
            fontSize: responsiveFontSize(2),
            color: '#3B3B3B',
            fontFamily: 'Roboto-Regular'
        },
        descriptionBold: {
            fontSize: responsiveFontSize(2),
            fontWeight: '700',
            color: '#3B3B3B'
        },
        textLarge: {
            fontSize: responsiveFontSize(2.6),
            fontWeight: '700',
            color: '#3B3B3B',
            fontFamily: 'Roboto-Medium',
            width: '80%'
        },
        greenBtn: { paddingHorizontal: 40, borderRadius: 4, alignSelf: "flex-start", paddingVertical: 15, backgroundColor: "#59B712" },
        greenBtnText: { color: 'white', fontSize: 18 },
        rowContainer: { flexDirection: 'row', alignItems: "flex-start", },
        midSizeText: { fontSize: responsiveFontSize(2.2), color: '#3B3B3B', fontWeight: '600', },
        msgBox: {
            backgroundColor: '#EFEFEF',
            width: '100%',
            alignSelf: 'center',
            height: 200,
            textAlignVertical: 'top',
            paddingLeft: 15,

            borderRadius: 4, borderColor: 'rgba(207, 207, 207, .5)', borderWidth: 1
        },
        whiteShortText: { color: 'white', fontWeight: "700" },
        overlayContainer: { height: 300, width: windowWidth, alignItems: 'center', justifyContent: 'center' },
        largeText: { fontWeight: '700', fontSize: 24, color: 'white' },
        shortLine: { width: '30%', height: 1.2, backgroundColor: 'white' },
        shareBtn: { width: 20, height: 20 },
        imgBtnText: { color: 'white', fontWeight: '700', fontSize: 18 },
        imgWithTextBtn: { flexDirection: 'row', borderRadius: 4, alignItems: 'center', backgroundColor: '#4286F5', alignSelf: 'flex-start', paddingHorizontal: 35, paddingVertical: 15 },
        greyBtn: { alignSelf: 'flex-start', backgroundColor: '#AFAFAF', paddingHorizontal: 35, paddingVertical: 15, borderRadius: 4 },
        borderView: { borderColor: '#BBBBBB', paddingVertical: 15, paddingHorizontal: 10, borderWidth: 1, borderRadius: 10 }
        , line: { height: 1, backgroundColor: '#BBBBBB', marginBottom: 15 },
        iconContainer: { flexDirection: 'row', alignSelf: 'flex-start' },
    }
)
