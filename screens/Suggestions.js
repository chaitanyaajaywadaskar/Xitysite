import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';


const Suggestions = () => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#0C3982', borderRadius: 10, marginBottom: 0 }}>
            <View style={{ flex: 0.75, justifyContent: 'center', marginLeft: 20 }}>
                <Text style={{ fontWeight: '400', fontSize: 14, color: 'white' }}>Suggestions</Text>
            </View>
            <TouchableOpacity style={{ flex: 0.25, paddingVertical: 15, borderRadius: 5, backgroundColor: '#4286F5' }}>
                <Icons.Entypo name={'minus'} size={27} color='white' style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
        </View>
    )
}


export default Suggestions