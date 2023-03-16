import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';

const HorizontalTextIcon = ({ Title, TitleColor, Icon, Bg }) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: Bg, borderRadius: 10 }}>
            <View style={{ flex: 0.8, justifyContent: 'center', marginLeft: 20 }}>
                <Text style={{ color: TitleColor, fontWeight: '600', fontSize: 16 }}>{Title}</Text>
            </View>
            <TouchableOpacity style={{ flex: 0.2, paddingVertical: 15, borderRadius: 10, backgroundColor: '#0C3982' }}>
                <Icons.Entypo name={Icon} size={25} color='white' style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
        </View>
    )
}

export default HorizontalTextIcon