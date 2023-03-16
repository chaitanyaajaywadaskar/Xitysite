import { View, Text } from 'react-native'
import React from 'react'

const RangeSlider = ({ value }) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#CFCFCF', height: 10, width: '80%', borderRadius: 10 }}>
            <View style={{ backgroundColor: '#8BB7FF', width: value, height: 10, borderRadius: 10 }} />
        </View>
    )
}

export default RangeSlider