import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Spacer from './spacer';
import { size } from './size';
const RoundedBox = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ borderWidth: 1, borderColor: 'white', borderRadius: 8, width: 90, paddingVertical: 10, alignItems: 'center' }}>
            <Image source={props.img} resizeMode='center' style={{
                height: 45,
                width: 45,
                borderRadius: 8,
            }} />
            <Spacer size={size.sh} />

            <Text style={{ fontSize: 11, color: 'white' }}>{props.Title}</Text>
        </TouchableOpacity>
    )
}

export default RoundedBox