import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import dininghall from '../images/dininghall.png'


const DiningHall = () => {
    return (
        <View style={{ height: 200, width: '100%', marginBottom: 10 }}>
            <Image source={dininghall} resizeMode='cover' style={{ borderRadius: 4, height: 200, width: '100%', position: 'absolute' }} />
            <View style={{ paddingLeft: 19, padding: 35 }}>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: '600' }}>Dining Hall</Text>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: '400' }}>1hr : 20mins</Text>
                <TouchableOpacity style={{ marginTop: 17, backgroundColor: '#4286F5', paddingHorizontal: 42, borderRadius: 20, paddingVertical: 12, alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '400' }}>Play</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DiningHall