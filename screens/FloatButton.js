import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native'
import SettingLottie from '../lottiefiles/settings.json'
const FloatButton = (props) => {
    return (
        <TouchableOpacity style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: '#4286F5',
            borderRadius: 8
        }} onPress={props.onPress}>
            <Lottie source={SettingLottie} autoPlay={true} loop={true} style={{
                width: 50,
                height: 50,
            }} />
        </TouchableOpacity>
    )
}

export default FloatButton