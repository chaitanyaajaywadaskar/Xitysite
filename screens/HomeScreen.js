import { View, Text, Linking, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, Dimensions, FlatList } from 'react-native'
import React, { useState, useCallback } from 'react'
import Video from 'react-native-video';
import BgVideo from '../Video/background.mp4'
import Icons from './Icons/IconsSet';
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomAppBar from './CustomAppBar';
import StarsImage from './StarsImage';
import LogoCompanyCard from './LogoCompanyCard';
import Overlapping from './Overlapping';
import CitiesComponent from './CitiesComponent';
import TownNameComponent from './TownNameComponent';
import MultipleImage from './MultipleImage';
import ChannelButton from './ChannelButton';
import Countries from './Countries';
import Subscribebutton from './Subscribebutton';
import Contents from './Contents';
import IMAGES from '../constants/ImagesContant';
import ButtonComponent from './ButtonComponent';
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
    const [listLogo, setListlogo] = useState([1, 1]);

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


                <View style={{ width: '100%', backgroundColor: '#EFF5FF', padding: 25 }}>
                    <Overlapping overlaytitle='CITIES CATALOGUE' title='Explore Recent Cities' />

                    <CitiesComponent city='Bangalore' Image={<Image source={IMAGES.BANGLORE} style={styles.ImageView} />} />
                    <CitiesComponent city='Chennai' Image={<Image source={IMAGES.CHENNAI} style={styles.ImageView} />} />
                    <CitiesComponent city='Mumbai' Image={<Image source={IMAGES.MUMBAI} style={styles.ImageView} />} />
                    <CitiesComponent city='Hyderabad' Image={<Image source={IMAGES.HYDRABAD} style={styles.ImageView} />} />
                    <CitiesComponent city='Coimbtare' Image={<Image source={IMAGES.COIMBTARE} style={styles.ImageView} />} />
                    <CitiesComponent city='Pune' Image={<Image source={IMAGES.PUNE} style={styles.ImageView} />} />
                    <ButtonComponent Title='View All Cities' />
                </View>
                <View style={{ backgroundColor: 'white', paddingTop: 25 }}>
                    <Overlapping overlaytitle='EXPLORE PIN CODES' title='Latest Pin Codes' />
                    <View style={styles.subView}>
                        <Image source={IMAGES.TOWNNAME} style={{ height: 250, width: '100%', borderRadius: 6, marginBottom: 15 }} />
                        <TownNameComponent num={560022} title='TownName' subtitle='0 Listings' />
                    </View>
                    <MultipleImage num={603103} />
                    <MultipleImage num={560076} />
                    <MultipleImage num={600119} />
                    <MultipleImage num={603103} />
                    <MultipleImage num={560076} />
                    <MultipleImage num={600119} />
                </View>
                <View style={{ height: 400, width: '100%', marginVertical: 20, justifyContent: 'center' }}>
                    <Image source={IMAGES.PROMO} style={{ height: 400, width: '100%', position: 'absolute' }} />
                    <Text style={styles.smallText}>Aliquam erat volutpat interdum</Text>

                    <View style={{ height: 260, width: 250, alignSelf: 'center' }}>
                        <Text style={styles.innerText}>Get ready to start your exciting journey.</Text>
                        <Text style={styles.innerText}>Our agency will lead you through the amazing digital world</Text>
                        <ChannelButton subtitle='Promo Video' Icon={<Icons.AntDesign name={'play'} size={15} />} />
                    </View>
                </View>
                <View style={{ height: 700, width: '100%', alignSelf: 'center', paddingTop: 30 }}>
                    <Image source={IMAGES.COUNTRYIMAGE}
                        style={{ position: 'absolute', height: 700, width: '100%' }} />

                    <Countries num={1} term='Countries' />
                    <Countries num={6} term='Cities' />
                    <Countries num={7} term='Pin Codes / Towns' />
                    <Countries num={13} term='Amenities' />

                </View>

                <View style={styles.blueView}>
                    <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 15 }}>
                        <Text style={{ fontSize: 28, fontWeight: '400', color: 'black' }}>Let's </Text>
                        <Text style={{ fontSize: 28, fontWeight: '700', color: 'black' }}>Stay In Touch</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: 'black', padding: 10, textAlign: 'center' }}>
                        Join Xity's newsletter, so that we reach out to you with our best alerts and offers.
                    </Text>
                    <TextInput placeholder='Enter your Email Address...' style={styles.inputTextInput}></TextInput>
                    <Subscribebutton content='Subscribe' />
                </View>

                <View style={styles.androidimage}>
                    <Image source={IMAGES.ANDROID} resizeMode='cover' style={{ height: 450, width: 220, alignSelf: 'center' }} />
                </View>

                <View style={{ alignSelf: 'center', marginRight: 25, marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image source={IMAGES.APPSTORE} style={styles.playstorebutton} />
                        <Image source={IMAGES.GOOGLEPLAY} style={styles.playstorebutton} />
                    </View>
                    <Text style={styles.boldText}>
                        Xity is a Directory + Marketplace + Community platform
                    </Text>
                    <Text style={{ fontSize: 16, color: 'black', marginBottom: 15 }}>
                        Join us! Our members can access savings and community support.
                    </Text>
                    <Contents isThereLine={true} title='Downloads' />
                    <Contents isThereLine={true} title='User' />
                    <Contents isThereLine={false} title='Member' />
                </View>

                <View style={{ paddingHorizontal: 15, backgroundColor: 'white' }}>
                    <View style={{
                        height: 600,
                    }}>
                        <View style={{ height: 350, width: '100%', marginTop: 50, backgroundColor: '#8BB7FF', alignSelf: 'center' }}>
                            <View style={{ width: '100%', height: 380, top: 120, position: 'absolute' }}>
                                <Image source={IMAGES.GIRLWITHCURL} resideMode='contain' style={{ width: '100%', height: 388, }} />
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
                        <Image source={IMAGES.BROWNMUNDE} resideMode='contain' style={{ width: 70, height: 70, }} />
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
                    <FlatList
                        horizontal
                        style={{ width: '100%', }}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        data={listLogo}
                        renderItem={({ item }) =>
                            <View style={{ width: responsiveWidth(90), marginRight: 15 }}>
                                <LogoCompanyCard />
                                <Spacer size={size.sm} />
                                <LogoCompanyCard />
                            </View>} />
                    <Spacer size={size.xxxlg} />
                    <View style={{ width: '100%', height: 400, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={IMAGES.LAKEBG} style={{ width: '100%', borderRadius: 15, position: 'absolute', height: 400 }} />
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
    overlayText: {
        position: 'absolute',
        color: '#DFEBFF',
        fontSize: 39,
        fontWeight: '700',
        alignSelf: 'center'
    },
    subView: {
        borderColor: '#C5C5C5',
        borderWidth: 0.9,
        padding: 15,
        borderRadius: 6,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15
    },
    subViewrow: {
        borderColor: '#C5C5C5',
        borderWidth: 0.9,
        padding: 15,
        borderRadius: 6,
        marginLeft: 15,
        marginRight: 15,
    },
    innerText: {
        fontSize: 25,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white'
    },
    ImageView: {
        height: 125,
        width: 125,
        margin: 18
    },
    smallText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        marginBottom: 20
    },
    inputTextInput: {
        height: 60,
        margin: 12,
        borderRadius: 8,
        padding: 10,
        width: 275,
        backgroundColor: 'white'
    },

    playstorebutton: {
        height: 50,
        width: 145,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 20
    },
    blueView: {
        alignItems: 'center',
        backgroundColor: '#8BB7FF',
        height: 340,
        width: 320,
        borderRadius: 15,
        alignSelf: 'center',
        margin: 15,
        marginTop: 30
    },
    boldText: {
        fontSize: 23, fontWeight: '700', color: 'black', marginBottom: 15
    },
    androidimage: {
        width: '100%', marginTop: 25, marginBottom: 30, alignSelf: 'center'
    },
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