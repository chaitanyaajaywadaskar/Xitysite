import { View } from 'react-native'
import React from 'react'
import { size } from './size'


export const Spacer = (props) => {
    return (
        <View style={{ height: props.size }} ></View>
    )
}
export const SpacerHorizontal = (props) => {
    return (
        <View style={{ width: props.size }} ></View>
    )
}

export default Spacer