import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SpacerHorizontal } from './spacer'
import { size } from './size'

const DrawerNormalItem = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                paddingHorizontal: 15,
                paddingVertical: 15,
                flexDirection: 'row',

            }}>
            <Image source={props.img} resizeMode="contain" style={{
                width: 23,
                height: 23
            }} />
            <SpacerHorizontal size={size.mid} />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', alignSelf: 'center' }}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default DrawerNormalItem