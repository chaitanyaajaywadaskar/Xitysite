import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import BottomButtons from './BottomButtons'
import mainImage from '../images/mainImage.png'
import OkButton from './OkButton'
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
const FeedbackEightScreen = ({ navigation }) => {

    const [isOk, setisOk] = useState(false)
    const [isExpand, setExpand] = useState(false);


    return (
        <View>
            <CustomAppBar />
            <ScrollView>
                <View style={{ height: height * 0.9 }}>
                    <Image source={mainImage} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ marginLeft: 10, marginRight: 15, padding: 25, marginTop: height * 0.20, alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2), }}>8</Text>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={responsiveWidth(6)} color='white' />
                            <View>
                                <Text style={styles.textheading}>Would you consider using our site?</Text>
                                <Text style={styles.subtextheading}>
                                    If not, just skip this question
                                </Text>
                                <View >
                                    <TouchableOpacity style={styles.bbutton} onPress={() => { setisOk(!isOk) }} >
                                        <Text style={{ fontSize: 17, color: 'white', fontWeight: '600' }}>
                                            Yes
                                        </Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.bbutton} onPress={() => { setisOk(!isOk) }}>
                                        <Text style={{ fontSize: 17, color: 'white', fontWeight: '600' }}>
                                            No
                                        </Text>
                                    </TouchableOpacity>
                                    {isOk && <OkButton onPress={() => navigation.navigate('FeedbackNineth')} />}
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BottomButtons onPressup={() => navigation.navigate('FeedbackSeventh')} onPressDown={() => navigation.navigate('FeedbackNineth')} />
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
        fontWeight: '600',
        marginBottom: 20,
    },
    bbutton: {
        marginTop: 20,
        paddingHorizontal: 40,
        paddingVertical: 11,
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#8BB7FF',
        borderRadius: 10,
        borderColor: '#0C3982',
        borderWidth: 0.9
    }
})
export default FeedbackEightScreen