import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Multiplebuttons = ({ num }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 0.8, marginRight: 5, borderColor: '#0C3982', borderRadius: 7, height: 50, width: 50, alignItems: 'center', justifyContent: "center", backgroundColor: '#6799EC' }}>
                <Text style={{ fontSize: 14 }}>{num}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Multiplebuttons