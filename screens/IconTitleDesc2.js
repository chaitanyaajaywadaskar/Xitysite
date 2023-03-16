import { View, Text } from 'react-native'
import React from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const IconTitleDesc2 = ({ Icon, Title, Desc, NoLine, MBottom }) => {
    return (
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginHorizontal: 20, borderBottomWidth: NoLine ? 0 : 2, borderBottomColor: '#ECECEC', alignItems: "flex-start", marginBottom: MBottom }}>
            {Icon}
            <SpacerHorizontal size={size.sm} />
            <Text style={{ fontSize: responsiveFontSize(1.8), fontWeight: '600', fontFamily: 'Roboto-Medium', color: 'black', width: responsiveWidth(25) }}>{Title}</Text>
            <SpacerHorizontal size={size.sm} />
            <Text style={{
                width: responsiveWidth(45),
                fontSize: responsiveFontSize(1.6)
            }}>{Desc}</Text>

        </View>
    )
}

export default IconTitleDesc2