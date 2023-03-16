import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Spacer from './spacer'
import { size } from './size'
import Logo from '../images/logo.png'
import LoginBanner from '../images/loginbanner.png'
import ImageTextInput from './ImageTextInput'
import OTPField from './Otpfeild'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomAppBar from './CustomAppBar'
import BottomView from './BottomView'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const UserLoginScreen = ({ navigation }) => {
    const [otp, setOtp] = useState('');
    const [isExpand, setExpand] = useState(false);
    return (
        <Pressable onPress={() => {
            setExpand(false)
        }} style={{ flex: 1 }}>
            <View>
                <CustomAppBar />

                <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#EFF5FF' }}>
                    {/* <ScrollView> */}
                    {/* <View>
                        <FlatList
                            data={new Array(5).keys}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={(item, index) =>
                                <Image source={LoginBanner} style={{ height: responsiveHeight(50), width: '100%' }} />
                            } />
                    </View> */}
                    <View style={styles.styleCenter}>

                        <View style={{ height: responsiveHeight(12) }} />

                        <Image source={Logo} style={styles.imageStylelogo} />
                        <Spacer size={size.xlg} />
                        <Text style={styles.textStyle}>Log in to the account</Text>
                        <Spacer size={size.sh} />
                        <Text style={styles.shortTextStyle}>Enter your phone number to login</Text>
                        <Spacer size={size.xxlg} />



                        <ImageTextInput hint='Enter address or mobile number' isEmail={true} />

                        <Spacer size={size.xlg} />

                        <TouchableOpacity onPress={() => {
                        }} style={{ width: '35%', padding: 10, borderRadius: 8, backgroundColor: '#4286F5', borderWidth: 2, borderColor: 'rgba(255, 255, 255, .5)', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={styles.buttonText2}>Get OTP</Text>
                        </TouchableOpacity>
                        <Spacer size={size.xlg} />

                        <OTPField onChange={otpValue => setOtp(otpValue)} />
                        <Spacer size={size.sm} />
                        <Text style={styles.shortTextStyle}>Resend OTP in 00:37</Text>
                        <Spacer size={size.xlg} />

                        <TouchableOpacity onPress={() => {
                            navigation.navigate('HomeDirectory')
                        }} style={{ width: '80%', padding: 10, borderRadius: 8, backgroundColor: '#4286F5', borderWidth: 2, borderColor: 'rgba(255, 255, 255, .5)', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={styles.buttonText2}>Login</Text>
                        </TouchableOpacity>

                        <Spacer size={size.mid} />


                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={styles.accountText}>New User?</Text>
                            <Text style={styles.blueText} onPress={() => {
                                navigation.navigate('UserSignUp')
                            }}> Register</Text>
                        </View>
                        <Spacer size={size.sh} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={styles.accountText}>Log In Issues?</Text>
                            <Text style={styles.blueText} onPress={() => {
                                navigation.navigate('UserReport')
                            }}> Report Log In Issue</Text>
                        </View>
                        <View style={{ height: windowHeight * 0.1 }} />



                    </View>
                    <BottomView />


                    {/* </ScrollView> */}

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
        </Pressable>
    )
}

export default UserLoginScreen

const styles = StyleSheet.create({
    styleCenter: {
        width: '100%',
        alignContent: 'center',
        margin: 25,
        flex: 1,
        alignSelf: 'center',
    },

    imageStylelogo: {
        height: responsiveHeight(7),
        width: responsiveWidth(20),
        borderRadius: 8,
        alignSelf: 'center'
    },
    imgStyle: {
        width: windowWidth,
        height: windowHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    imageStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 5,
        borderRadius: 8,
    },

    dropdown: {
        height: 50,
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    boldText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',

        fontWeight: '900'
    },
    textStyle: {
        fontSize: responsiveFontSize(3.5),
        color: 'black',
        textAlign: 'center',
        fontWeight: '700',
        fontFamily: 'Roboto-Bold'

    },
    mediumStyle: {

        fontSize: 18,
        width: '70%',
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '800'
    },
    buttonText: {
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 16
    },
    accountText: {
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        color: 'black',
        fontSize: 16
    },
    blueText: {
        fontWeight: '700',
        color: '#0C3982',
        fontSize: responsiveFontSize(2),
        fontFamily: 'Roboto-Bold'

    },
    buttonText2: {
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'Roboto-Regular',
        color: 'white',
        fontSize: responsiveFontSize(1.8)
    },
    line: {
        width: '60%',
        height: 2,
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    shortTextStyle: {
        fontSize: responsiveFontSize(1.7),
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Roboto-Regular'

    },
    shortTextStyle2: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        color: 'white',
        textAlign: 'center',
    },
})
