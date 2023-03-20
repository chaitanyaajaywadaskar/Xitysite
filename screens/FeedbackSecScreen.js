import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import BottomButtons from './BottomButtons';
import CustomAppBar from './CustomAppBar';
import BottomView from './BottomView';
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import FloatButton from './FloatButton';
import ExpandIconButton from './ExpandIconButton';
import ExpandedView from './ExpandedView';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import IMAGES from '../constants/ImagesContant'

const FeedbackSecondScreen = ({ navigation }) => {
    const [textInputCompanyName, settextInputCompanyName] = useState('');
    const [isExpand, setExpand] = useState(false);

    const checkTextInput = () => {
        var textlength = textInputCompanyName.trim().length;
        if (textlength > 0) {
            navigation.navigate('FeedbackThird');
        } else {
            alert('Please Enter Company name');
        }
    };
    return (
        <View>
            <CustomAppBar />
            <ScrollView  >
                <View style={{ height: height * 0.9 }}>
                    <Image source={IMAGES.MAINIMAGE} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ padding: 25, marginTop: height * 0.20, }}>
                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <Text style={{
                                color: 'white', fontSize: responsiveFontSize(2), fontWeight: '900',
                                fontFamily: 'Raleway-Medium',
                            }}>2</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <SpacerHorizontal size={size.mid} />

                            <View>
                                <Text style={styles.textheading}>What's your company name?</Text>
                                <TextInput placeholder='Type your answer here...' onChangeText={(value) => settextInputCompanyName(value)} placeholderTextColor='white' color='white' style={{ borderBottomWidth: 0.8, width: responsiveWidth(75), fontSize: responsiveFontSize(2), color: 'white' }}></TextInput>
                                <Spacer size={size.mid} />
                                <TouchableOpacity onPress={checkTextInput} style={{ marginTop: 30, paddingHorizontal: 25, alignSelf: 'flex-start', paddingVertical: 12, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                                    <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                                        Ok
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackFirst')} onPressDown={() => navigation.navigate('FeedbackThird')} />
                </View>
                <Spacer size={size.mid} />

                <BottomView />
            </ScrollView >
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

    }
})
export default FeedbackSecondScreen