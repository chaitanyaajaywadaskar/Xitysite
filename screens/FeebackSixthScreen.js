import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import BottomButtons from './BottomButtons'
import Stars from './Stars'
import CustomAppBar from './CustomAppBar';
import Spacer from './spacer';
import { size } from './size';
import rstar from '../images/ratestar.png'
import BottomView from './BottomView';
import FloatButton from './FloatButton';
import ExpandedView from './ExpandedView';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import IMAGES from '../constants/ImagesContant'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const FeedbackSixthScreen = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);

    return (
        <View>
            <CustomAppBar />
            <ScrollView>

                <View style={{ height: height * 0.9 }}>
                    <Image source={IMAGES.MAINIMAGE} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ padding: 25, marginTop: height * 0.20, alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2), }}>6</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={styles.textheading}>What did you think of the design?</Text>
                                <Text style={styles.subtextheading}>
                                    If not, just skip this question
                                </Text>
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
                                <TouchableOpacity onPress={() => navigation.navigate('FeedbackSeventh')} style={{ marginTop: 30, alignSelf: 'flex-start', paddingHorizontal: 25, paddingVertical: 12, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                                    <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                                        Ok
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackFifth')} onPressDown={() => navigation.navigate('FeedbackSeventh')} />
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
        marginBottom: 38
    },
    bottomView: {
        // width: '100%',
        // height: 50,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: 'absolute',
        // bottom: 5,


    },

})

export default FeedbackSixthScreen