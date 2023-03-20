import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Logo from '../images/logo.png'
import ImageTextInput from './ImageTextInput'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import CustomAppBar from './CustomAppBar'
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ReportLogScreen = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);

    return (

        <View style={{ flex: 1 }}>
            <CustomAppBar />
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#EFF5FF' }}>
                <View style={styles.styleCenter}>
                    <Image source={IMAGES.LOGO} style={styles.imageStylelogo} />
                    <Spacer size={size.xxxlg} />
                    <Spacer size={size.xlg} />
                    {/* <Text style={styles.textStyle}>Report Log In Issues</Text> */}
                    <Spacer size={size.sh} />
                    <Text style={styles.shortTextStyle}>Enter your registered email address {'\n'} associated with your account.</Text>
                    <Spacer size={size.xxlg} />
                    <View style={{ height: 50 }}>
                        <ImageTextInput hint='Enter Registered Email address' isEmail={true}></ImageTextInput>
                    </View>
                    <Spacer size={size.sm} />
                    <TouchableOpacity onPress={() => {
                    }} style={{ width: '80%', padding: 10, borderRadius: 8, backgroundColor: '#4286F5', borderWidth: 2, borderColor: 'rgba(255, 255, 255, .5)', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={styles.buttonText2}>Submit</Text>
                    </TouchableOpacity>

                    <Spacer size={size.xlg} />


                    <View style={{ alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.accountText}>Return to </Text>
                        <Spacer size={size.sh} />
                        <Text style={styles.blueText} onPress={() => { navigation.navigate('Login') }}>Sign In</Text>
                    </View>
                    <Spacer size={size.xxxlg} />


                </View>
                <View style={{
                    height: 60, width: '100%', backgroundColor: '#164677', justifyContent: 'center',
                }} >
                    <Text style={{ color: 'white', fontWeight: '800', alignSelf: 'center', fontSize: 15 }}>© ORNDA ® 2023-23</Text>
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

export default ReportLogScreen

const styles = StyleSheet.create({
    styleCenter: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 150,
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
