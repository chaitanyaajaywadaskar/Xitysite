import { View, Text } from 'react-native'
import React from 'react'
// import Icons from './Icons'

const BreadCrum = ({ Title }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            < Text style={{ textAlign: 'center', color: 'white', paddingRight: 5, fontWeight: '500', fontSize: 15 }}>{Title} </Text>
            <Text style={{ textAlign: 'center', color: 'white', paddingRight: 5 }}>&gt; </Text>
        </View>
    )
}

export default BreadCrum