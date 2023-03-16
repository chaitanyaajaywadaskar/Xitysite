import { View, Text, Image } from 'react-native'
import React from 'react'
import BlueGrad from '../images/bluegradient.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Spacer from './spacer'
import { size } from './size'

const BlueWhiteGradientView = () => {
    return (
        <View style={{ width: '100%', height: 150, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={BlueGrad} style={{ width: '100%', height: 150, position: 'absolute' }} />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Join our online Directory</Text>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>Grow your business and be happy with your business online</Text>
            <Spacer size={size.mid} />
            <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 35, backgroundColor: 'white', borderRadius: 5 }}>
                <Text style={{ color: '#0C3982' }}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BlueWhiteGradientView