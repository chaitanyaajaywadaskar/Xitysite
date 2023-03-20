import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = ({ Title }) => {
    return (
        <View>
            <TouchableOpacity style={{
                paddingVertical: 16, paddingHorizontal: 22, backgroundColor: '#4286F5', marginTop: 20, marginBottom: 20,
                borderRadius: 6, alignSelf: 'flex-start', alignSelf: 'center', justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 15, color: 'white', fontWeight: '500' }}>
                    {Title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent