import { View, Text, Image } from 'react-native'
import React from 'react'
import HeadSet from '../images/headset.png'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
const SupportView = ({ mainTitle }) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 15, alignSelf: 'center', width: responsiveWidth(90), borderRadius: 10, borderWidth: 1, borderColor: '#CFCFCF', paddingVertical: 25, paddingHorizontal: 15 }}>
            <Image source={HeadSet} style={{ width: responsiveWidth(12), height: responsiveWidth(12) }} />
            <SpacerHorizontal size={size.mid} />
            <View style={{ width: responsiveWidth(68) }}>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(2.4), color: 'black' }}>{mainTitle}</Text>
                <Spacer size={size.sh} />
                <Text style={{ fontFamily: 'Roboto-Regular', color: 'black', fontSize: responsiveFontSize(1.5) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</Text>
            </View>
        </View>
    )
}

export default SupportView