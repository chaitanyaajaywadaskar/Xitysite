import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const DrawerFifthItems = ({ Logo, Title, ExpandedView, }) => {
    const [isExpand, setExpand] = useState(false);
    const [isClick, setClick] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => {
                setExpand(!isExpand);
                setClick(!isClick)
            }} style={{ flexDirection: 'row', marginVertical: 10, borderRadius: isClick ? 30 : 0, backgroundColor: isClick ? 'white' : null, height: 50, paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    {Logo}
                    <SpacerHorizontal size={size.xlg} />
                    <Text style={{ color: isClick ? 'black' : 'white', fontSize: responsiveFontSize(1.8) }}>{Title}</Text>
                </View>
                <Icons.Entypo name={isClick ? 'minus' : 'plus'} size={20} color={isClick ? 'black' : 'white'} />
            </TouchableOpacity>
            {isExpand && ExpandedView
            }
        </View>
    )
}

export default DrawerFifthItems