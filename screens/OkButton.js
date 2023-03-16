import { View, Text, TouchableOpacity } from 'react-native'
import React, { useReact } from 'react'

const OkButton = ({ onPress }) => {

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={{ marginTop: 30, alignSelf: 'flex-start', paddingHorizontal: 25, paddingVertical: 12, alignItems: 'center', backgroundColor: '#0C3982', borderRadius: 8 }}>
                <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>
                    Ok
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default OkButton