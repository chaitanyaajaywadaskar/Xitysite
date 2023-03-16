import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
// import { Rating } from 'react-native-ratings';
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import mainImage from '../images/mainImage.png'
import rstar from '../images/ratestar.png'
import Stars from './Stars'
import BottomButtons from './BottomButtons'
import CustomAppBar from './CustomAppBar';
import BottomView from './BottomView';
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import FloatButton from './FloatButton';
import ExpandedView from './ExpandedView';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { Rating, AirbnbRating } from 'react-native-ratings';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const FeedbackThirdScreen = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);
    const [rating, setRating] = useState(0);

    return (
        <View>
            <CustomAppBar />
            <ScrollView >
                <View style={{ height: height * 0.9 }}>
                    <Image source={mainImage} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ padding: 25, marginTop: height * 0.20, }}>
                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <Text style={{
                                color: 'white', fontSize: responsiveFontSize(2), fontWeight: '900',
                                fontFamily: 'Raleway-Medium',
                            }}>3</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <SpacerHorizontal size={size.mid} />
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={styles.textheading}>Thanks, Name (Dynamic), So,what was your overall impression of our site?</Text>
                                <AirbnbRating
                                    showRating={false}
                                    starContainerStyle={{ width: width * 0.45, marginTop: 25, justifyContent: 'space-between' }}
                                    count={5}
                                    size={30}
                                    starImage={rstar}
                                    selectedColor='white' />
                                <View style={{ flexDirection: 'row', marginStart: 10, marginTop: 10, width: width * 0.40, justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: '900', fontFamily: 'Raleway-Medium' }}>1</Text>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: '900', fontFamily: 'Raleway-Medium' }}>2</Text>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: '900', fontFamily: 'Raleway-Medium' }}>3</Text>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: '900', fontFamily: 'Raleway-Medium' }}>4</Text>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: '900', fontFamily: 'Raleway-Medium' }}>5</Text>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('FeedbackFourth')} style={{ marginTop: 30, alignSelf: 'flex-start', paddingHorizontal: 25, paddingVertical: 12, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                                    <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                                        Ok
                                    </Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Stars num={1} />
                            <Stars num={2} />
                            <Stars num={3} />
                            <Stars num={4} />
                            <Stars num={5} />
                        </View> */}

                        {/* <Rating style={{ alignSelf: 'center' }}
                            ratingCount={5}
                            starSize={14}
                            type='star'
                            ratingBackgroundColor='transparent'
                            size={14} /> */}

                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackSec')} onPressDown={() => navigation.navigate('FeedbackFourth')} />
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
export default FeedbackThirdScreen