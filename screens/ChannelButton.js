import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'



const ChannelButton = ({ Icon, subtitle }) => {
    return (
        <View style={{ marginBottom: 15, alignSelf: 'center', margin: 15 }}>
            <TouchableOpacity style={{
                alignItems: 'center',
                flexDirection: 'row',
                width: 170, backgroundColor: 'white', padding: 6,
                borderRadius: 40, borderWidth: 5, borderColor: 'rgba(255,255,255,0.2)',
            }}>
                <View style={{ backgroundColor: '#4286F5', borderRadius: 25, height: 38, width: 38, justifyContent: 'center', alignItems: 'center' }}>
                    {Icon}
                </View>
                <Text style={{ color: 'black', fontSize: 13, paddingLeft: 6 }}>{subtitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChannelButton