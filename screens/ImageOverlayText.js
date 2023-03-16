import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Spacer from './spacer'
import { size } from './size'

const ImageOverlayText = (props) => {
    return (
        <View style={{ height: 180, width: 300, borderRadius: 10, marginRight: 15, alignItems: 'center', justifyContent: "center" }}>
            <Image source={props.Img} style={{ borderRadius: 10, position: 'absolute', height: 180, width: 300 }} />
            <Text style={{ color: 'white', width: '80%', textAlign: "center", fontWeight: '600', fontSize: 16 }}>{props.Desc}</Text>
            <Spacer size={size.sm} />
            <TouchableOpacity style={{ backgroundColor: '#4286F5', paddingHorizontal: 40, paddingVertical: 10, borderRadius: 4 }}>
                <Text style={{ color: 'white', fontSize: 15 }}>{props.BtnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ImageOverlayText