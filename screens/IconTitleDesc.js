import { View, Text } from 'react-native'
import React from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const IconTitleDesc = (props) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: "flex-start", marginBottom: 10 }}>
            {props.Icon}
            <SpacerHorizontal size={size.sm} />
            <Text style={{ fontSize: responsiveFontSize(2), fontWeight: '700', width: 100 }}>{props.Title}</Text>
            <SpacerHorizontal size={size.sm} />
            <Text style={{
                width: responsiveWidth(45),
                fontSize: responsiveFontSize(2)
            }}>{props.Desc}</Text>

        </View>
    )
}

export default IconTitleDesc