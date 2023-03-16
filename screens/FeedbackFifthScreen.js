import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import BottomButtons from './BottomButtons'
import mainImage from '../images/mainImage.png'
import Underlinetext from './Underlinetext'
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
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const FeedbackFifthScreen = ({ navigation }) => {
    const [textInputName, setTextInputName] = useState('');
    const [isExpand, setExpand] = useState(false);

    const checkTextInput = () => {
        var textlength = textInputName.trim().length;
        if (textlength > 0) {
            navigation.navigate('FeedbackSixth');
        } else {
            alert('Please enter your answer');
        }
    };
    return (
        <View>
            <CustomAppBar />
            <ScrollView>

                <View style={{ height: height * 0.9 }}>
                    <Image source={mainImage} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ padding: 25, marginTop: height * 0.20, alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <Text style={{
                                color: 'white', fontSize: responsiveFontSize(2), fontWeight: '900',
                                fontFamily: 'Raleway-Medium',
                            }}>5</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <View>
                                <Text style={styles.textheading}>Mind telling us why you voted{'\n'} _ _ _ _ _?</Text>
                                <Text style={styles.subtextheading}>
                                    If not, just skip this question
                                </Text>
                                <Spacer size={size.sh} />

                                <TextInput placeholder='Type your answer here...' onChangeText={(value) => setTextInputName(value)} placeholderTextColor='#FFFFFF' color='white' style={{ borderBottomWidth: 0.8, fontSize: 15, color: 'white', width: responsiveWidth(80) }}></TextInput>
                                <Spacer size={size.xlg} />
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
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackFourth')} onPressDown={() => navigation.navigate('FeedbackSixth')} />
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
    },
    subtextheading: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Raleway-Medium',
        width: responsiveWidth(80),
        marginBottom: 20,
        marginTop: 5,
    },

})
export default FeedbackFifthScreen