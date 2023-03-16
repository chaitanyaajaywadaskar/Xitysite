import { View, Text } from 'react-native'
import React from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const LogoCompanyCard = () => {
    return (
        <View style={{ borderWidth: 1, flexDirection: 'row', borderRadius: 10, borderColor: '#BEBEBE', padding: 15 }}>
            <View style={{ width: 120, height: 120, borderRadius: 5, backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Logo</Text>
            </View>
            <SpacerHorizontal size={size.mid} />
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: responsiveFontSize(2.3), fontFamily: 'Roboto-Medium', color: 'black' }}>Company Name</Text>
                <Spacer size={size.sh} />
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#3B3B3B', fontSize: responsiveFontSize(1.3) }}>Associate Pricing | Duration</Text>
            </View>
        </View>
    )
}

export default LogoCompanyCard