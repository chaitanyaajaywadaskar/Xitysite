import { View, Text } from 'react-native'
import React from 'react'

const Countries = ({ num, term }) => {
    return (
        <View style={{ marginBottom: 20, height: 130, width: 140, alignSelf: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 45, fontWeight: '700', color: 'white', alignSelf: 'center' }}>{num}</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: 'white', alignSelf: 'center' }}>{term}</Text>
            <View style={{ width: 60, borderWidth: 0.9, borderColor: '#4286F5', alignSelf: 'center' }}></View>

        </View>
    )
}

export default Countries