import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Spacer from './spacer'
import { size } from './size'
import LapTop from '../images/laptop.png'
import BlueLayer from '../images/bluelayer.png'
import GreenLayer from '../images/greenlayer.png'
import PurpleLayer from '../images/purplelayer.png'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import TrafficPlanCard from './TrafficPlanCard'
import SupportView from './SupportView'
import BottomView from './BottomView'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import CustomAppBar from './CustomAppBar'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Pricing = ({ navigation }) => {
    const [btn, setbtn] = useState(0);
    const [isExpand, setExpand] = useState(false);

    return (
        <View>
            <CustomAppBar />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 60 }}>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={styles.overlayContainer}>
                        <Image source={LapTop} resizeMode='cover' style={styles.contactImg} />
                        <Text style={styles.largeText}>Our Tariff Plans</Text>
                        <Spacer size={size.mid} />
                        <Text style={styles.breadCrumText}>Home  &gt;  Pages  &gt;  Pricing Tables</Text>
                    </View>
                    <Spacer size={size.xxxlg} />
                    <View style={styles.collapseText}>
                        <Text style={styles.overlayText}>cost of our services</Text>
                        <Text style={styles.aboveText}>Pricing Tables</Text>
                    </View>
                    <Spacer size={size.lg} />
                    <Text style={styles.disc}>
                        Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
                    </Text>
                    <Spacer size={size.lg} />
                    <View style={styles.blueBox}>
                        <TouchableOpacity onPress={() => {
                            setbtn(0)
                        }} style={btn == 0 ? styles.switchBtn : styles.switchBtn1}>
                            <Text style={btn == 0 ? styles.btnText : styles.btnText1}>Monthly Tariff</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setbtn(1)
                        }} style={btn == 1 ? styles.switchBtn : styles.switchBtn1}>
                            <Text style={btn == 1 ? styles.btnText : styles.btnText1}>Yearly Tariff</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer size={size.xxxlg} />
                    <TrafficPlanCard overlayImage={BlueLayer} overlayImageHeight={responsiveHeight(32)} btnText='Extended' fontSize={responsiveFontSize(1.7)} overlayBtnBg='#8BB7FF' blueBtnText='Choose Extended' isRecommended={true} />
                    <Spacer size={size.lg} />
                    <TrafficPlanCard overlayImage={GreenLayer} overlayImageHeight={responsiveHeight(40)} btnText='Professional' fontSize={responsiveFontSize(1.8)} overlayBtnBg='#5ECFB1' blueBtnText='Choose Professional' isRecommended={false} />
                    <Spacer size={size.lg} />
                    <TrafficPlanCard overlayImage={PurpleLayer} overlayImageHeight={responsiveHeight(40)} btnText='Professional' fontSize={responsiveFontSize(1.8)} overlayBtnBg='#C371F2' blueBtnText='Choose Professional' isRecommended={false} />
                    <Spacer size={size.xxxlg} />

                    <SupportView mainTitle='24 Hours Support' />
                    <SupportView mainTitle='Admin Panel' />
                    <SupportView mainTitle='Mobile Friendly' />
                    <Spacer size={size.xlg} />
                    <BottomView />
                </View>
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

                    }} onClose={() => { setExpand(false) }} /> : <FloatButton onPress={() => { setExpand(true) }} />
            }
        </View>
    )
}

export default Pricing

const styles = StyleSheet.create(
    {
        contactImg: { height: 300, position: 'absolute', width: windowWidth },
        overlayContainer: { height: 300, width: windowWidth, alignItems: 'center', justifyContent: 'center' },
        largeText: { fontWeight: '700', fontFamily: 'Raleway-Bold', fontSize: responsiveFontSize(3.5), color: 'white' },
        breadCrumText: {
            color: 'white',
            fontFamily: 'Roboto-Medium',
            fontWeight: '700',
            fontSize: responsiveFontSize(1.7)
        },
        btnText: { color: 'black', fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(2) },
        btnText1: { color: 'white', fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(2) },
        switchBtn: { backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center', padding: 12 },
        switchBtn1: { borderRadius: 5, alignItems: 'center', justifyContent: 'center', padding: 12 },
        collapseText: { alignItems: 'center', justifyContent: 'center', },
        overlayText: { color: '#EFF5FF', position: 'absolute', fontSize: responsiveFontSize(3), fontFamily: 'Raleway-Heavy' },
        aboveText: { color: '#0C3982', fontSize: responsiveFontSize(2.5), fontFamily: 'Raleway-Bold' },
        disc: { fontFamily: 'Roboto-Regular', width: responsiveWidth(80), alignSelf: 'center', textAlign: 'center', color: '#3B3B3B' },
        blueBox: { backgroundColor: '#4286F5', padding: 5, width: responsiveWidth(80), alignSelf: 'center', borderRadius: 5, },
    }
)
