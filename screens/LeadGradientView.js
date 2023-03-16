import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icons from './Icons/IconsSet';

const LeadGradientView = ({ Num, Title }) => {
    return (
        <LinearGradient colors={['#4286F5', '#8BB7FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 40, paddingVertical: 10, justifyContent: 'space-between' }}>
            <View>
                <Text style={{ color: 'white', fontSize: 65 }}>{Num}</Text>
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 18 }}>{Title}</Text>
            </View>
            <Icons.SimpleLineIcons name='emotsmile' size={80} color='#8BB7FF' />
        </LinearGradient>
    )
}

export default LeadGradientView