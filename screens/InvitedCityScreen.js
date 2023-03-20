import { View, Text, StyleSheet, Dimensions, TextInput, Modal, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet';
import ImageTextInput from './ImageTextInput'
import FloatButton from './FloatButton'
import ExpandedView from './ExpandedView'
import BottomView from './BottomView'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomAppBar from './CustomAppBar'
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const InvitedScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isExpand, setExpand] = useState(false);
    return (
        <Pressable onPress={() => {
            setExpand(false)
        }} style={{}}>
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{ backgroundColor: 'white', paddingBottom: 20, borderRadius: 4, alignSelf: 'center', width: windowWidth * 0.85 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, backgroundColor: '#EFF5FF', borderRadius: 4, height: 40 }}>
                                <Text style={{
                                    fontSize: responsiveFontSize(1.8), color: '#3B3B3B',
                                    fontFamily: 'Roboto-Regular',
                                }}>
                                    Get Invited
                                </Text>
                                <TouchableOpacity onPress={() => {
                                    setModalVisible(false)
                                }} style={{ borderLeftWidth: 1, paddingLeft: 10, borderLeftColor: '#CFE1FF' }}>
                                    <Icons.Entypo name={'cross'} color='#0C3982' size={25} style={{}} />

                                </TouchableOpacity>
                            </View>
                            <View>
                                <Spacer size={size.xlg} />

                                <ImageTextInput isBlue={true} hint='Your Name*' isUser={true}></ImageTextInput>
                                <Spacer size={size.sm} />
                                <ImageTextInput isBlue={true} hint='Email Address*' isEmail={true}></ImageTextInput>
                                <Spacer size={size.sm} />

                                <ImageTextInput isBlue={true} hint='Phone Number*' isCall={true}></ImageTextInput>
                                <Spacer size={size.sm} />

                                <TextInput
                                    placeholder='Your Message Here:'
                                    multiline={true}
                                    // numberOfLines={4}
                                    placeholderTextColor='grey'
                                    style={{
                                        backgroundColor: '#F5F7FB',
                                        width: '80%',
                                        alignSelf: 'center',
                                        height: 130,
                                        textAlignVertical: 'top',
                                        paddingLeft: 15,
                                        borderRadius: 4, borderColor: 'rgba(207, 207, 207, .5)', borderWidth: 1
                                    }}
                                />
                                <Spacer size={size.mid} />
                                <TouchableOpacity onPress={() => {
                                    setModalVisible(true)
                                }} style={{ width: '40%', padding: 10, borderRadius: 4, backgroundColor: '#4286F5', alignContent: 'center', justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start', marginLeft: 34 }}>
                                    <Text style={styles.buttonBlueText}>Send Message</Text>
                                </TouchableOpacity>

                            </View>
                        </View></View>
                </Modal>

                <Image source={IMAGES.PINCODEBG} resizeMode='cover' style={styles.imgStyle} />
                <CustomAppBar />
                <ScrollView>

                    <View style={styles.styleCenter}>
                        {/* <TouchableOpacity onPress={() => {
                            setModalVisible(true)
                        }} style={{ width: '30%', padding: 10, borderRadius: 8, backgroundColor: '#0C3982', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={styles.buttonText}>Get Invited</Text>
                        </TouchableOpacity> */}
                        <Spacer size={size.sm} />
                        <Text style={styles.mediumStyle}>Under Construction</Text>
                        <Spacer size={size.sm} />
                        <Text style={styles.textStyle}>Bangalore City{'\n'} Coming Soon</Text>
                        <View style={styles.line} />
                        {/* <Text style={styles.shortTextStyle}>Sign Up now to our platform and you will be the first to receive an invitation to the launch along with freebies, deals and coupons...</Text> */}
                        <TouchableOpacity onPress={() => {
                            setModalVisible(true)
                        }} style={{ width: '30%', padding: 10, borderRadius: 8, backgroundColor: '#0C3982', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={styles.buttonText}>Get Invited</Text>
                        </TouchableOpacity>
                        <Spacer size={size.sm} />

                        <View style={{ flexDirection: 'row', width: responsiveWidth(50), alignSelf: 'center' }}>
                            <View style={{ width: responsiveWidth(15) }}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6), fontWeight: '900' }}>CALL: </Text>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6), fontWeight: '900' }}>WRITE: </Text>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6), fontWeight: '900' }}>FIND US: </Text>
                            </View>
                            <View>
                                <Text style={{ color: 'white', fontWeight: '600', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6) }}> +91 9845891221</Text>
                                <Text style={{ color: 'white', fontWeight: '600', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6) }}>560022.apoorva@ornda.com</Text>
                                <Text style={{ color: 'white', fontWeight: '600', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6), width: responsiveWidth(50) }}>Find us : No.36, 1st Main, 14 th Cross, Lic Colony, Bangalore - 560022, Karnataka</Text>

                            </View>
                        </View>
                        <Spacer size={size.sm} />

                        {/* <TouchableOpacity onPress={() => {
                            navigation.navigate('UserSignUp')
                        }} style={{ width: '30%', padding: 10, borderRadius: 8, backgroundColor: 'white', borderWidth: 2, borderColor: 'rgba(255, 255, 255, .5)', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={styles.buttonText2}>Sign Up</Text>
                        </TouchableOpacity> */}
                        <Spacer size={size.xxlg} />
                        {/* Social Icon */}
                        {/* <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image source={fb} style={styles.imageStyle} />
                        <Image source={twit} style={styles.imageStyle} />
                        <Image source={ig} style={styles.imageStyle} />
                        <Image source={vk} style={styles.imageStyle} />
                    </View> */}
                        <Spacer size={size.xlg} />
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <View >
                                <Text style={styles.boldText}>595</Text>
                                <Spacer size={size.sh} />
                                <Text style={styles.shortTextStyle2}>DAYS</Text>

                            </View>
                            <SpacerHorizontal size={size.xxxlg} />

                            <View>
                                <Text style={styles.boldText}>14</Text>
                                <Spacer size={size.sh} />
                                <Text style={styles.shortTextStyle2}>HOURS</Text>

                            </View>
                        </View>
                        <Spacer size={size.sm} />
                        <View style={{
                            borderStyle: 'dashed',
                            borderWidth: 1,
                            borderColor: 'white',
                            width: '50%',
                            alignSelf: 'center',
                            borderRadius: 2,
                        }}>
                        </View>
                        <Spacer size={size.sm} />

                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <View >
                                <Text style={styles.boldText}>59</Text>
                                <Spacer size={size.sh} />
                                <Text style={styles.shortTextStyle2}>MINUTES</Text>

                            </View>
                            <SpacerHorizontal size={size.xxxlg} />

                            <View >
                                <Text style={styles.boldText}>29</Text>
                                <Spacer size={size.sh} />
                                <Text style={styles.shortTextStyle2}>SECONDS</Text>

                            </View>
                        </View>

                    </View>

                    <Spacer size={size.sm} />
                    {/* <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>

                            <Text style={{ color: '#4286F5', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6) }}>Call: </Text>
                            <Text style={{ color: 'white', fontWeight: '700', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6) }}> +91 9845891221</Text>
                            <View style={{ width: 2, backgroundColor: 'white' }} />
                            <Text style={{ color: '#4286F5', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6) }}>Write: </Text>
                            <Text style={{ color: 'white', fontWeight: '700', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6) }}>560022.apoorva@ornda.com</Text>
                        </View>
                        <Spacer size={size.sm} />
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={{ color: '#4286F5', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6) }}>Find us: </Text>
                            <Text style={{ color: 'white', fontWeight: '700', fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.6), width: responsiveWidth(50) }}>Find us : No.36, 1st Main, 14 th Cross, Lic Colony, Bangalore - 560022, Karnataka</Text>
                        </View>
                    </View> */}
                    <Spacer size={size.xxxlg} />
                    <Spacer size={size.sm} />
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

        </Pressable>
    )
}

export default InvitedScreen

const styles = StyleSheet.create({
    styleCenter: {
        width: '100%',
        alignContent: 'center',
        margin: 25,
        marginTop: 100,
        flex: 1,
        alignSelf: 'center',
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
        fontSize: responsiveFontSize(4),
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto-Black',
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize: responsiveFontSize(3),
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 60,
        fontWeight: '800',
        fontFamily: 'Roboto-Bold',

    },
    mediumStyle: {
        fontFamily: 'Raleway-Medium',
        fontSize: responsiveFontSize(2.2),
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
        fontFamily: 'Roboto-Regular',
        fontSize: responsiveFontSize(2)
    },
    buttonBlueText: {
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 14
    },
    buttonText2: {
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'Roboto-Medium',
        color: 'black',
        fontSize: responsiveFontSize(2)
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
        width: responsiveWidth(70),
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Raleway-Regular',

    },
    shortTextStyle2: {
        fontSize: responsiveFontSize(1.8),
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        fontFamily: 'Roboto-Regular',

        color: 'white',
        textAlign: 'center',
    },
})
