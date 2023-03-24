import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import mainImage from '../images/mainImage.png'
import BottomButtons from './BottomButtons'
import RadioButtons from './RadioButtons'
import CustomAppBar from './CustomAppBar'
import { ScrollView } from 'react-native';
import Spacer from './spacer';
import { size } from './size';
import BottomView from './BottomView';
import FloatButton from './FloatButton';
import ExpandedView from './ExpandedView';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import IMAGES from '../constants/ImagesContant'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FeedbackTenthScreen = ({ navigation }) => {
    const [textInputFeedback, setTextInputFeedback] = useState('');
    const [isExpand, setExpand] = useState(false);

    const checkTextInput = () => {
        var textlength = textInputFeedback.trim().length;
        if (textlength > 0) {
            navigation.navigate('FeedbackEleven');
        } else {
            alert('Please enter your answer');
        }
    };
    return (
        <View >
            <CustomAppBar />
            <ScrollView>
                <View style={{ height: height * 0.9 }}>
                    <Image source={IMAGES.MAINIMAGE} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ marginLeft: 10, marginRight: 10, padding: 15, marginTop: height * 0.20, alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2) }}>10</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <View>
                                <Text style={styles.textheading}>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</Text>
                                <RadioButtons />
                                <View >
                                    <TextInput placeholder='Describe your feedback...' onChangeText={(value) => setTextInputFeedback(value)} placeholderTextColor='white' style={{ borderBottomWidth: 0.8, color: 'white', width: responsiveWidth(75), fontSize: responsiveFontSize(2), }}></TextInput>
                                    <TouchableOpacity onPress={checkTextInput} style={{ marginTop: 30, alignSelf: 'flex-start', paddingHorizontal: 25, paddingVertical: 12, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                                        <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                                            Ok
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackNineth')} onPressDown={() => navigation.navigate('FeedbackEleven')} />
                </View>
                <Spacer size={size.mid} />
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

                    }}
                    onClose={() => { setExpand(false) }} /> : <FloatButton onPress={() => { setExpand(true) }} />
            }

        </View>
    )
}
const styles = StyleSheet.create({
    radioWrapper: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',

    },
    radiobg: {
        height: 18,
        width: 18,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 4
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textheading: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: '600',
        fontFamily: 'Raleway-Medium',
        width: responsiveWidth(80)
    },
    bottomspace: {
        flexDirection: 'row',
        marginBottom: 10
    }

})
export default FeedbackTenthScreen