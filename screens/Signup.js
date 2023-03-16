import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Logo from '../images/logo.png'
import RadioGroup, { RadioButton, RadioButtonProps } from 'react-native-radio-buttons-group';
import ImageTextInput from './ImageTextInput'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import BottomView from './BottomView'
import CustomAppBar from './CustomAppBar'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignUpScreen = ({ navigation }) => {
    const [radioButtons, setRadioButtons] = useState(false);
    const [isExpand, setExpand] = useState(false);

    return (
        <Pressable onPress={() => {
            setExpand(false)
        }} style={{ flex: 1 }}>
            <View>
                <CustomAppBar />
                <View style={{ backgroundColor: '#EFF5FF' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.styleCenter}>
                            <Image source={Logo} style={styles.imageStylelogo} />
                            <Spacer size={size.xlg} />
                            {/* <Text style={styles.textStyle}>Create your account</Text>
                            <Spacer size={size.sh} />
                            <Text style={styles.shortTextStyle}>Enter your personal details to create an account</Text> */}
                            <Spacer size={size.xxlg} />


                            <ImageTextInput hint='Your Name' isUser={true}></ImageTextInput>
                            <Spacer size={size.sm} />
                            <ImageTextInput hint='Your pincode' isLocation={true}></ImageTextInput>
                            <Spacer size={size.sm} />
                            <ImageTextInput hint='Email Address' isEmail={true}></ImageTextInput>
                            <Spacer size={size.sm} />
                            <ImageTextInput hint='Phone Number' isCall={true}></ImageTextInput>
                            <Spacer size={size.sm} />
                            <ImageTextInput hint='Password' isPass={true}></ImageTextInput>
                            <Spacer size={size.sm} />
                            <ImageTextInput hint='Confirm Password' isPass={true}></ImageTextInput>
                            <Spacer size={size.mid} />


                            <View style={{ alignSelf: 'flex-start', marginLeft: 25, }}>
                                <RadioButton
                                    onPress={(id) => {
                                        setRadioButtons(true)
                                    }}
                                    size={18}
                                    id='1'
                                    label='I Agree with Legal Policies'
                                    labelStyle={{ fontSize: 12 }}
                                    value='option1' selected={radioButtons}
                                />
                            </View>

                            <Spacer size={size.xlg} />

                            <TouchableOpacity onPress={() => {
                            }} style={{ width: '80%', padding: 10, borderRadius: 8, backgroundColor: '#4286F5', borderWidth: 2, borderColor: 'rgba(255, 255, 255, .5)', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                <Text style={styles.buttonText2}>Create account</Text>
                            </TouchableOpacity>
                            <Spacer size={size.mid} />
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={styles.accountText}>Already have an account?</Text>
                                <Text style={styles.blueText} onPress={() => {
                                    navigation.navigate('Login')
                                }}> Sign in</Text>
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

export default SignUpScreen

const styles = StyleSheet.create({
    styleCenter: {
        width: '100%',
        alignContent: 'center',
        margin: 25,
        marginTop: 80,
        // flex: 1,
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
        fontSize: 16
    },
    line: {
        width: '60%',
        height: 2,
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    shortTextStyle: {
        fontSize: 15,
        width: '70%',
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
