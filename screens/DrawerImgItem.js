import { View, Text, Image } from 'react-native'
import React from 'react'
import Spacer from './spacer'
import { size } from './size'

const DrawerImgItem = ({ Img, MainTitle, SubTitle, UnderlineText }) => {
    return (
        <View>
            <Image source={Img} style={{ width: '100%', height: 180, borderRadius: 10 }} />
            <Spacer size={size.sh} />
            <View style={{ flexDirection: 'row' }}><Text style={{ color: 'black', fontSize: 13 }}>{MainTitle} -</Text>
                <Text style={{ fontSize: 12 }}>{SubTitle}</Text></View>
            <Spacer size={size.sh} />
            <Text style={{ textDecorationLine: 'underline', fontSize: 12, color: 'black' }}>{UnderlineText}</Text>
            <Spacer size={size.sm} />
            <View style={{ width: '100%', height: 1, backgroundColor: 'grey' }} />
        </View>
    )
}

export default DrawerImgItem