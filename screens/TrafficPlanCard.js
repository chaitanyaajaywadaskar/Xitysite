import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const TrafficPlanCard = ({ overlayImage, overlayImageHeight, overlayBtnBg, btnText, fontSize, blueBtnText, isRecommended }) => {
    return (
        <View style={{ borderRadius: 10, alignSelf: 'center', borderWidth: 1, borderColor: 'rgba(112,112,112,0.2)' }}>
            <View style={{
                width: responsiveWidth(90),
                height: overlayImageHeight,
                alignItems: "center",
                justifyContent: 'center'
            }}>
                <Image source={overlayImage} resizeMode='cover' style={{
                    width: responsiveWidth(90),
                    height: overlayImageHeight,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    position: 'absolute',
                }} />
                <TouchableOpacity style={{ backgroundColor: overlayBtnBg, borderColor: 'white', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 8, borderWidth: 1 }}>
                    <Text style={{ color: 'white', fontSize: fontSize }}>{btnText}</Text>
                </TouchableOpacity>
                <Spacer size={size.sh} />
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: 'white', marginTop: 12, marginRight: 5, fontFamily: 'Roboto-Regular', fontWeight: "600" }}>$</Text>
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(5.5), fontFamily: 'Roboto-Bold', fontWeight: "900" }}>109</Text>
                </View>
                <Spacer size={size.sh} />
                <Text style={{ color: 'white', fontFamily: 'Roboto-Regular' }}>Per Month</Text>
            </View>
            <Spacer size={size.mid} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'Roboto-Regular', color: 'black' }}>Ten Listings</Text>
                <SpacerHorizontal size={size.sm} />
                <Icons.Entypo name='chevron-thin-up' color='#818181' />
            </View>
            <Spacer size={size.sm} />
            <View style={{ width: responsiveWidth(80), alignSelf: 'center', borderColor: '#C9C9C9', borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10 }}>
                <Text style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Text>
            </View>
            <Spacer size={size.mid} />
            <View style={{ backgroundColor: '#C9C9C9', height: 1 }} />
            <Spacer size={size.mid} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'Roboto-Regular', color: 'black' }}>Lifetime Availability</Text>
                <SpacerHorizontal size={size.sm} />
                <Icons.Entypo name='chevron-thin-down' color='#818181' />
            </View>
            <Spacer size={size.mid} />
            <View style={{ backgroundColor: '#C9C9C9', height: 1 }} />
            <Spacer size={size.mid} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'Roboto-Regular', color: 'black' }}>Featured In Seearch Result</Text>
                <SpacerHorizontal size={size.sm} />
                <Icons.Entypo name='chevron-thin-down' color='#818181' />
            </View>
            <Spacer size={size.mid} />
            <View style={{ backgroundColor: '#C9C9C9', height: 1 }} />
            <Spacer size={size.mid} />
            <TouchableOpacity style={{ alignSelf: 'center', borderRadius: 5, backgroundColor: '#012C72', paddingHorizontal: 10, paddingVertical: 15 }}>
                <Text style={{ color: 'white', fontFamily: 'Roboto-Regular' }}>{blueBtnText}</Text>
            </TouchableOpacity>
            <Spacer size={size.mid} />
            {isRecommended && <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 20, paddingVertical: 5, borderTopLeftRadius: 12, borderWidth: 2, borderColor: 'rgba(209,209,209,0.3)', borderTopRightRadius: 12, alignSelf: "center", alignItems: 'center', justifyContent: 'center' }}>
                <Icons.Entypo name='check' color='#0CB900' size={15} />
                <SpacerHorizontal size={size.mid} />
                <Text style={{ fontSize: responsiveFontSize(1.5) }}>Recommended</Text>
            </View>}
        </View>
    )
}

export default TrafficPlanCard