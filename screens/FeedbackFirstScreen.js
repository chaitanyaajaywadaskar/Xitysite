import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import mainImage from '../images/mainImage.png'
import Icons from './Icons/IconsSet';
import BottomButtons from './BottomButtons'
import CustomAppBar from './CustomAppBar';
import BottomView from './BottomView';
import FloatButton from './FloatButton';
import ExpandedView from './ExpandedView';
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const FeedbackFirstScreen = ({ navigation }) => {
    const [textInputName, setTextInputName] = useState('');
    const [isExpand, setExpand] = useState(false);

    const checkTextInput = () => {
        var textlength = textInputName.trim().length;
        if (textlength > 0) {
            navigation.navigate('FeedbackSec');
        } else {
            alert('Please Enter name');
        }
    };


    return (
        <View>
            <CustomAppBar />
            <ScrollView>
                <View style={{ height: height * 0.9 }}>
                    <Image source={mainImage} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ padding: 25, marginTop: height * 0.20, }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: '800', fontFamily: 'Raleway-Medium' }}>1</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <SpacerHorizontal size={size.mid} />
                            <View>
                                <Text style={styles.textheading}>What's your name?</Text>
                                <Spacer size={size.mid} />
                                <TextInput placeholder='Type your answer here...' onChangeText={(value) => setTextInputName(value)} placeholderTextColor='white' color='white' style={{ borderBottomWidth: 0.8, width: responsiveWidth(75), fontSize: responsiveFontSize(2), color: 'white' }}
                                />
                                <Spacer size={size.xxlg} />

                                <TouchableOpacity
                                    onPress={checkTextInput} style={{ marginTop: 30, alignSelf: 'flex-start', paddingHorizontal: 25, paddingVertical: 12, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                                    <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                                        Ok
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BottomButtons onPressDown={() => navigation.navigate('FeedbackSec')} />

                </View>
                <View style={{ height: 20 }} />

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
    bottomView: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    textheading: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: '900',
        fontFamily: 'Raleway-Medium',
    }
})
export default FeedbackFirstScreen