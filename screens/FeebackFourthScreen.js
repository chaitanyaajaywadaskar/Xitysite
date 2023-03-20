import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import BottomButtons from './BottomButtons'
import Multiplebuttons from './Multiplebuttons'
import CustomAppBar from './CustomAppBar'
import BottomView from './BottomView';
import Spacer from './spacer';
import { size } from './size';
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
const FeedbackFouthScreen = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);
    return (
        <View  >
            <CustomAppBar />
            <ScrollView>
                <View style={{ height: height * 0.9, }}>
                    <Spacer size={size.mid} />

                    <Image source={IMAGES.MAINIMAGE} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ marginLeft: 15, marginRight: 10, marginTop: height * 0.15, alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 15, }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2), }}>4</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <View>
                                <Text style={styles.textheading}>Could you find what you were looking for?</Text>
                                <Spacer size={size.mid} />
                                <Text style={styles.subtextheading}>Think about the navigation here. Was it easy to find your way around?</Text>
                                <Spacer size={size.xxxlg} />
                                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                        <Multiplebuttons num={1} />
                                        <Multiplebuttons num={2} />
                                        <Multiplebuttons num={3} />
                                        <Multiplebuttons num={4} />
                                        <Multiplebuttons num={5} />
                                    </View>
                                    <Text style={[styles.subtextheading, { width: responsiveWidth(50) }]}>Not at all</Text>
                                    <Spacer size={size.mid} />

                                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                        <Multiplebuttons num={6} />
                                        <Multiplebuttons num={7} />
                                        <Multiplebuttons num={8} />
                                        <Multiplebuttons num={9} />
                                        <Multiplebuttons num={10} />
                                    </View>
                                    <Text style={styles.subtextheading2}>Yes, very easily</Text>
                                </View>

                                <TouchableOpacity onPress={() => navigation.navigate('FeedbackFifth')} style={{ marginTop: 30, alignSelf: 'flex-start', paddingHorizontal: 25, paddingVertical: 12, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                                    <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                                        Ok
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 0.1, marginRight: 10 }}>
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackThird')} onPressDown={() => navigation.navigate('FeedbackFifth')} />
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
        fontSize: responsiveFontSize(1.8),
        fontWeight: '400',
        width: responsiveWidth(80)
    },
    subtextheading2: {
        color: 'white',
        fontSize: responsiveFontSize(1.8),
        fontWeight: '400',
        marginBottom: 15,
        alignSelf: 'flex-end',
    }

})
export default FeedbackFouthScreen