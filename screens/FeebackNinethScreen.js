import { View, Text, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import BottomButtons from './BottomButtons'
import CustomAppBar from './CustomAppBar';
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

const FeedbackNinethScreen = ({ navigation }) => {
    const [textInputCity, setTextInputCity] = useState('');
    const [textInputPin, setTextInputPin] = useState('');
    const [isExpand, setExpand] = useState(false);

    const checkTextInput = () => {
        var textlength = textInputCity.trim().length;
        var textlength1 = textInputPin.trim().length;
        if (textlength > 0 && textlength1 > 0) {
            navigation.navigate('FeedbackTenth');
        } else {
            alert('Please enter your answer');
        }

    };

    return (
        <View  >
            <CustomAppBar />
            <ScrollView>
                <View style={{ height: height * 0.9 }}>
                    <Image source={IMAGES.MAINIMAGE} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ padding: 25, marginTop: height * 0.20, alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 15, }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2), }}>9</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <View>
                                <Text style={styles.textheading}>What's your location?</Text>
                                <TextInput placeholder='Type your city here...' onChangeText={(value) => setTextInputCity(value)} placeholderTextColor='white' color='white' style={{ borderBottomWidth: 0.8, width: responsiveWidth(75), fontSize: responsiveFontSize(2), color: 'white' }}></TextInput>
                                <TextInput placeholder='Type your pin code here...' onChangeText={(value) => setTextInputPin(value)} placeholderTextColor='white' color='white' style={{ borderBottomWidth: 0.8, width: responsiveWidth(75), fontSize: responsiveFontSize(2), color: 'white' }}></TextInput>
                                <TouchableOpacity onPress={checkTextInput} style={{ marginTop: 30, alignSelf: 'flex-start', paddingHorizontal: 25, paddingVertical: 12, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                                    <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                                        Ok
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackEight')} onPressDown={() => navigation.navigate('FeedbackTenth')} />
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
    textheading: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: '900',
        fontFamily: 'Raleway-Medium',
        width: responsiveWidth(80)

    }
})
export default FeedbackNinethScreen