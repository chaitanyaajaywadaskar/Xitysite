import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
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
const FeedbackEleventhScreen = ({ navigation }) => {
    const [textInputEmail, setTextInputEmail] = useState('');
    const [isExpand, setExpand] = useState(false);

    const checkTextInput = () => {
        var textlength = textInputEmail.trim().length;
        if (textlength > 0) {
            navigation.navigate('FeedbackCompleted');
        } else {
            alert('Please enter your email address');
        }
    };
    return (
        <View >
            <CustomAppBar />
            <ScrollView>
                <View style={{ height: height * 0.9 }}>
                    <Image source={IMAGES.MAINIMAGE} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ marginLeft: 10, marginRight: 10, padding: 25, marginVertical: 60, alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 15, }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2) }}>11</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <View>
                                <Text style={styles.textheading}>And finally, can we get your email address?</Text>
                                <Text style={styles.subtextheading}>We'll just use this to follow up if needed.NO spam,promise.</Text>

                                <TextInput placeholder='name@example.com' onChangeText={(value) => setTextInputEmail(value)} placeholderTextColor='white' color='white' style={{ borderBottomWidth: 0.8, width: responsiveWidth(75), fontSize: responsiveFontSize(2), color: 'white', }}></TextInput>
                                <TouchableOpacity onPress={checkTextInput} style={{ marginTop: 30, alignSelf: 'flex-start', paddingHorizontal: 27, paddingVertical: 13, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                                    <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                                        Ok
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackTenth')} onPressDown={() => navigation.navigate('FeedbackCompleted')} />
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
        fontWeight: '600',
        fontFamily: 'Raleway-Medium',
        width: responsiveWidth(80)
    },
    subtextheading: {
        color: 'white',
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        marginVertical: 20
    }
})
export default FeedbackEleventhScreen