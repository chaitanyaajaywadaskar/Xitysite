import { View, Text } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const Guidesblock = ({ Title, Icon, bc, Image }) => {
    return (
        <View style={{ borderColor: bc, borderWidth: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginBottom: 18, flexDirection: 'row', height: 110, width: responsiveWidth(75), }}>
            <View style={{ alignItems: 'center' }}>
                {Icon}
                {Image}
                <Text style={{ fontSize: 15, color: '#3B3B3B', fontWeight: '500', marginTop: 8 }}>{Title}</Text>
            </View>

        </View>
    )
}

export default Guidesblock