import { View, Text, Linking, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useCallback } from 'react'
import Video from 'react-native-video';
import BgVideo from '../Video/background.mp4'
import Icons from './Icons/IconsSet';
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import { TouchableHighlight } from 'react-native-gesture-handler';
import BottomView from './BottomView';
import girlwithcurl from '../images/curlygirl.png'
import lakeBg from '../images/lakebg.png'
import brownGirl from '../images/brownmundi.png'

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomAppBar from './CustomAppBar';
import StarsImage from './StarsImage';
import LogoCompanyCard from './LogoCompanyCard';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const supportedURL = 'https://ornda.com/';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            console.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Text onPress={handlePress} style={styles.LinkText}>{children}</Text>;
};

export default function HomeScreen({ navigation }) {

    const [isPin, setPin] = useState(true);
    const [isCity, setCity] = useState(false);
    return (
        <View>

            <CustomAppBar />

            <ScrollView >
                {/* <View style={{ flex: 1 }} > */}

                <View style={styles.styleCenter}>
                    <Video source={BgVideo}
                        style={styles.backgroundVideo} resizeMode='cover' repeat={true} />
                    <View style={[styles.backgroundVideo, { backgroundColor: 'rgba(0,0,0,0.4)' }]} />
                    <View style={{ height: responsiveHeight(35) }} />
                    <Text style={styles.textStyle}>MAKE YOUR MARK.</Text>
                    <Text style={styles.textStyle}>CHANGE OUR WORLD.</Text>
                    <View style={styles.line} />
                    <Spacer size={size.sh} />

                    <Text style={styles.shortTextStyle}>Expert In The Local Market.</Text>
                    <Spacer size={size.mid} />
                    <Text style={styles.shortTextStyle}>Choose your Location</Text>
                    <Spacer size={size.sh} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={() => {
                            setPin(true);
                            setCity(false)
                        }}>
                            <Text style={[styles.shortBoldTextStyle, { color: isPin ? '#FFC400' : 'white', }]}>By Pin code</Text>
                        </TouchableHighlight>
                        <SpacerHorizontal size={size.sm} />
                        <View style={{ height: 25, width: 2, backgroundColor: 'white' }} />
                        <SpacerHorizontal size={size.sm} />
                        <TouchableHighlight onPress={() => {
                            setCity(true)
                            setPin(false);
                        }}>
                            <Text style={[styles.shortBoldTextStyle, { color: isCity ? '#FFC400' : 'white', }]}>By City</Text>
                        </TouchableHighlight>
                    </View>
                    <Spacer size={size.lg} />

                    <View style={styles.searchContainer}>
                        <TextInput
                            placeholder={isPin ? "Enter Pincode" : "Enter City Name"} placeholderTextColor='grey' style={{ width: '71%', }} />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                                isCity ? navigation.navigate('ServiceCity') : navigation.navigate('Service')

                            }}>
                                <Icons.Fontisto name={'radio-btn-active'} color='grey' size={18} style={styles.radioStyle} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.blueContainer} onPress={() => {
                                isCity ? navigation.navigate('InvitedCity') : navigation.navigate('Invited')

                            }}>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: '700', alignSelf: 'center' }}>Go</Text>
                                {/* <Icons.Fontisto name={'search'} size={18} color='white' style={{ alignSelf: 'center' }} /> */}

                            </TouchableOpacity>
                        </View>



                    </View>

                    <View style={{ height: responsiveHeight(30), justifyContent: 'flex-end' }} />


                </View>
                <View style={{ paddingHorizontal: 15, backgroundColor: 'white' }}>
                    <View style={{
                        height: 600,
                    }}>
                        <View style={{ height: 350, width: '100%', marginTop: 50, backgroundColor: '#8BB7FF', alignSelf: 'center' }}>
                            <View style={{ width: '100%', height: 380, top: 120, position: 'absolute' }}>
                                <Image source={girlwithcurl} resideMode='contain' style={{ width: '100%', height: 388, }} />
                                <View style={{ width: 50, height: 50, backgroundColor: '#012C72', alignSelf: 'center', alignItems: 'center', position: 'absolute', bottom: -28, justifyContent: 'center', borderRadius: 25 }}>
                                    <Icons.FontAwesome name='pause' color='white' size={12} />
                                </View>
                            </View>
                        </View></View>
                    <StarsImage mLeft={10} size={25} />
                    <Spacer size={size.lg} />
                    <Text style={{ fontSize: responsiveFontSize(2.4), color: 'black' }}>
                        “When an unknown printer took a galley of type aware Lawanda scrambled it to make a type specimen book survived not only five centuries, but also the leap into the original area content“
                    </Text>
                    <Spacer size={size.mid} />
                    <View style={{ backgroundColor: '#8BB7FF', height: 4, width: 50 }} />
                    <Spacer size={size.lg} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={brownGirl} resideMode='contain' style={{ width: 70, height: 70, }} />
                        <SpacerHorizontal size={size.mid} />
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: 'black', fontSize: responsiveFontSize(3), fontFamily: 'Roboto-Medium' }}>Donald Simpsom</Text>
                            <Text style={{ color: 'black', fontSize: responsiveFontSize(2.2), fontFamily: 'Roboto-Regular' }}>Corporate Director</Text>
                        </View>
                    </View>
                    <Spacer size={size.xxxlg} />
                    <Text style={{ alignSelf: 'center', color: '#0C3982', fontFamily: 'Raleway-Bold', fontSize: responsiveFontSize(2.4) }}>Our Make-Over Brands</Text>
                    <Spacer size={size.sh} />
                    <Text style={{ alignSelf: 'center', color: '#3B3B3B', fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(1.9) }}>Collaboration Makes Us Better</Text>
                    <Spacer size={size.mid} />
                    <LogoCompanyCard />
                    <Spacer size={size.sm} />
                    <LogoCompanyCard />
                    <Spacer size={size.xxxlg} />
                    <View style={{ width: '100%', height: 400, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={lakeBg} style={{ width: '100%', borderRadius: 15, position: 'absolute', height: 400 }} />
                        <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Roboto-Medium', fontWeight: '800', fontSize: responsiveFontSize(3.5) }}>Do You Have Any{'\n'} Questions ?</Text>
                        <Spacer size={size.mid} />
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(2.3), marginHorizontal: 10, textAlign: 'center' }}>
                            We look forward to a successful relationship in the future. Should you need any further information, please do not hesitate to contact us.
                        </Text>
                        <Spacer size={size.xxxlg} />
                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#4286F5', alignSelf: 'center', padding: 15, alignItems: 'center', width: 200, justifyContent: 'center', borderRadius: 25 }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2) }}>Contact Us</Text>
                            <SpacerHorizontal size={size.mid} />
                            <Icons.Feather name='arrow-right-circle' color='white' size={25} />

                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ height: 600 }} /> */}
                <View style={{
                    height: 60, width: '100%', marginTop: 60, flexDirection: 'row', backgroundColor: '#164677', justifyContent: 'space-between', paddingHorizontal: 15
                }} >
                    <OpenURLButton url={supportedURL}>© ORNDA ® 2023-23</OpenURLButton>
                    <Text onPress={() => {
                        navigation.navigate('Legal')
                    }} style={styles.LinkText}>LEGAL</Text>
                </View>


                {/* </View> */}

            </ScrollView></View>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
    LinkText: { color: 'white', fontWeight: '700', fontFamily: 'Roboto-Regular', alignSelf: 'center', fontSize: 15 },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',

        justifyContent: 'space-between',
        marginHorizontal: 30,
        borderRadius: 6,
        paddingStart: 8,
        borderColor: 'rgba(255, 255, 255, .8)',
        borderWidth: 4
    },
    lottieStyle: {
        width: 50,
        height: 50,
    },
    radioStyle: {
        alignSelf: 'center',
        marginRight: 10
    },
    blueContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C3982',
        width: 55,
        height: 48,
        borderRadius: 8,
    },
    textStyle: {
        fontSize: responsiveFontSize(3),
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Raleway-Bold'
    },
    shortTextStyle: {
        fontSize: responsiveFontSize(1.8),
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        fontWeight: '700'
    },
    shortBoldTextStyle: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        textDecorationLine: 'underline',
        textDecorationColor: 'white',

    },
    styleCenter: {
        width: '100%',
        height: windowHeight,
        alignContent: 'center',
        justifyContent: 'space-between',
        // flex: 1,
        // alignSelf: 'center'
    },
    floatButton: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        backgroundColor: '#8BB7FF',
        borderRadius: 8
    },
    line: {
        width: '50%',
        height: 2,
        marginTop: 8,
        alignSelf: 'center',
        backgroundColor: 'white'
    }
});