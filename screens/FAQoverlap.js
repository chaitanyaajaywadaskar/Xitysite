import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FAQoverlap = ({ Title, isThereLine, onPress, isThereBorder }) => {
    return (
        <Pressable onPress={onPress} style={{ flexDirection: 'row' }}>

            <TouchableOpacity>
                <Text style={{ fontSize: 23, borderBottomColor: '#4286F5', borderBottomWidth: isThereBorder ? 3 : 0, color: '#0C3982', fontWeight: '700', paddingRight: 10, paddingLeft: 10 }}>{Title}</Text>
            </TouchableOpacity>
            {
                isThereLine &&
                <View style={{ borderColor: '#0C3982', borderWidth: 1, marginHorizontal: 10, height: 40 }}></View>
            }

        </Pressable>
    )
}

export default FAQoverlap