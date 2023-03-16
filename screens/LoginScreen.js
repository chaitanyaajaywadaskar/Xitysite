import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Spacer from './spacer'
import { size } from './size'
import Logo from '../images/logo.png'
import ImageTextInput from './ImageTextInput'
import OTPField from './Otpfeild'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import CustomAppBar from './CustomAppBar'
import BottomView from './BottomView'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginScreen = ({ navigation }) => {
    const [otp, setOtp] = useState('');
    const [isExpand, setExpand] = useState(false);

    return (
        <Pressable onPress={() => {
            setExpand(false)
        }} style={{ flex: 1 }}>
            <View>
                <CustomAppBar />
                <View style={{ backgroundColor: '#EFF5FF' }}>
                    <ScrollView>
                        <View style={styles.styleCenter}>
                            <Image source={Logo} style={styles.imageStylelogo} />
                            <Spacer size={size.xlg} />
                            {/* <Text style={styles.textStyle}>Log in to the account</Text>
                            <Spacer size={size.sh} />
                            <Text style={styles.shortTextStyle}>Enter your phone number to login</Text> */}
                            <Spacer size={size.xxlg} />



                            <ImageTextInput hint='Enter Pincode' isLocation={true}></ImageTextInput>
                            <Spacer size={size.sm} />

                            <ImageTextInput hint='Enter Phone Number' isCall={true}></ImageTextInput>
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
                                <Text style={styles.buttonText2}>Sign In</Text>
                            </TouchableOpacity>
                            <Spacer size={size.mid} />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: '30%', height: 1, backgroundColor: 'grey' }} />
                                <Text>  Sign In Issues?  </Text>
                                <View style={{ width: '30%', height: 1, backgroundColor: 'grey' }} />
                            </View>
                            <Spacer size={size.mid} />
                            <Text style={{ textDecorationLine: 'underline', alignSelf: 'center' }} onPress={() => {
                                navigation.navigate('Report')
                            }}>Please contact Admin</Text>
                            <Spacer size={size.mid} />

                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.accountText}>Don't have an account?</Text>
                                <Spacer size={size.sh} />
                                <Text style={styles.blueText} onPress={() => { navigation.navigate('SignUp') }}>Register</Text>
                            </View>
                            <Spacer size={size.xxxlg} />


                        </View>
                        <BottomView />


                    </ScrollView>

                </View>
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

export default LoginScreen

const styles = StyleSheet.create({
    styleCenter: {
        width: '100%',
        alignContent: 'center',
        margin: 25,
        marginTop: 85,
        flex: 1,
        alignSelf: 'center',
    },

    imageStylelogo: {
        height: 40,
        width: 72,
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
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 60,
        fontWeight: '800'
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
        fontWeight: '500',
        textAlign: 'center',

        color: 'black',
        fontSize: 16
    },
    blueText: {
        fontWeight: '800',
        color: '#0C3982',
        fontSize: 16
    },
    buttonText2: {
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 14
    },
    line: {
        width: '60%',
        height: 2,
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    shortTextStyle: {
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
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
