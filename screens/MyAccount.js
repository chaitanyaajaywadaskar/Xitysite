import { View, Text } from 'react-native'
import React from 'react'

const MyAccount = ({ Title, subtitle }) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }}>
            <Text style={{ paddingRight: 9 }}>{Title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '400' }}>{subtitle}</Text>
        </View>
    )
}

export default MyAccount