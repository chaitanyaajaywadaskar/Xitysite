import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import RadioGroup, { RadioButton, RadioButtonProps } from 'react-native-radio-buttons-group';
import ImageTextInput from './ImageTextInput'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomAppBar from './CustomAppBar'
import ApiManager from './ApiManager'
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UserSignUpScreen = ({ navigation }) => {
    const [radioButtons, setRadioButtons] = useState(true);
    const [isExpand, setExpand] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [fname, setFName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');

    const onCreate = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (fname === '') {
            alert('Name is required')
        }
        else if (username === '') {
            alert('Username is required')
        }
        else if (email === '') {
            alert('Email is required')
        }
        else if (pass === '') {
            alert('Password is required')
        }
        else if (email === '') {
            alert("Email is required")
        }
        else if (phone === '') {
            alert('Phone number is required')
        }
        else if (pass === '') {
            alert('Password is required')
        }
        else if (pass.length <= 5) {
            alert('Password should be more than 6 characters')
        } else {
            handleSignUp();
        }
    }
    const handleSignUp = () => {
        setLogin(true)

        ApiManager.post('bussiness-user',
            {
                fullname: fname,
                username: username,
                email: email,
                phoneno: phone,
                password: pass
            })
            .then(function (response) {
                setLogin(false)
                console.log(response);
                if (response.status === 200) {
                    alert("User created Successfully")

                }
                else {
                    alert("Faild")

                }
            })
            .catch(function (error) {
                console.log(error);
                setLogin(false)
                alert("Failed, Please provide valid details")
            });
    }

    return (
        <Pressable onPress={() => {
            setExpand(false)
        }} style={{ flex: 1 }}>
            <View>
                <CustomAppBar />
                <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#EFF5FF' }}>
                    {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                    <View style={styles.styleCenter}>
                        {isLogin && <View style={{ height: windowHeight, alignItems: 'center', alignSelf: 'center', zIndex: 1, justifyContent: 'center', position: 'absolute' }}>
                            <ActivityIndicator size='large' color='#4286F5' />
                        </View>}
                        <View style={{ height: responsiveHeight(12) }} />
                        <Image source={IMAGES.LOGO} style={styles.imageStylelogo} />
                        <Spacer size={size.xlg} />
                        {/* <Text style={styles.textStyle}>Create your account</Text>
                        <Spacer size={size.xxlg} /> */}

                        <ImageTextInput
                            onChangeText={(value) => { setFName(value) }}
                            hint='Full Name' isUser={true}></ImageTextInput>
                        <Spacer size={size.sm} />
                        <ImageTextInput
                            onChangeText={(value) => {
                                setUsername(value)
                            }}
                            hint='Username' isUser={true}></ImageTextInput>
                        <Spacer size={size.sm} />
                        <ImageTextInput
                            onChangeText={(value) => {
                                setEmail(value)
                            }}
                            hint='Email Address' isEmail={true}></ImageTextInput>
                        <Spacer size={size.sm} />
                        <ImageTextInput
                            onChangeText={(value) => {
                                setPhone(value)
                            }}
                            hint='Phone Number' keyboardType='numeric' isCall={true}></ImageTextInput>
                        <Spacer size={size.sm} />
                        <ImageTextInput
                            onChangeText={(value) => {
                                setPass(value)
                            }}
                            hint='Password' isPass={true}></ImageTextInput>
                        <Spacer size={size.mid} />
                        <View style={{ alignSelf: 'flex-start', marginLeft: 25, }}>
                            <RadioButton
                                onPress={(id) => {
                                    setRadioButtons(true)
                                }}
                                size={18}
                                id='1'
                                label='I agree to the website use Polocies in Legal'
                                labelStyle={{ fontSize: 12 }}
                                value='option1' selected={radioButtons}
                            />
                        </View>
                        <Spacer size={size.xlg} />
                        <TouchableOpacity onPress={
                            onCreate
                        } style={{ width: '80%', padding: 10, borderRadius: 8, backgroundColor: '#4286F5', borderWidth: 2, borderColor: 'rgba(255, 255, 255, .5)', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={styles.buttonText2}>Create account</Text>
                        </TouchableOpacity>
                        <Spacer size={size.mid} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={styles.accountText}>Already have an account?</Text>
                            <Text style={styles.blueText} onPress={() => {
                                navigation.navigate('UserLogin')
                            }}>  Sign In</Text>
                        </View>
                        <View style={{ height: windowHeight * 0.08 }} />
                    </View>
                    <View style={{
                        height: 60, width: '100%', backgroundColor: '#164677', justifyContent: 'center',
                    }} >
                        <Text style={{ color: 'white', fontWeight: '800', alignSelf: 'center', fontSize: 15 }}>© ORNDA ® 2023-23</Text>
                    </View>
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
            </View >
        </Pressable >
    )
}
export default UserSignUpScreen

const styles = StyleSheet.create({
    styleCenter: {
        width: '100%',
        alignContent: 'center',
        margin: 25,
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
        fontSize: responsiveFontSize(3),
        color: 'black',
        textAlign: 'center',
        fontWeight: '600',
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