import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet'



const Suggestionsblock = () => {
    return (
        <View style={{ flexDirection: 'row', borderColor: '#CFCFCF', borderWidth: 0.4, backgroundColor: '#FFFFFF', borderColor: '#CFCFCF', borderRadius: 10, marginBottom: 10 }}>
            <View style={{ flex: 0.75, justifyContent: 'center', marginLeft: 20 }}>
                <Text style={{ fontWeight: '400', fontSize: 14, color: 'black' }}>Suggestions</Text>
            </View>
            <TouchableOpacity style={{ flex: 0.25, paddingVertical: 15, borderRadius: 5, backgroundColor: '#4286F5' }}>
                <Icons.AntDesign name={'plus'} size={27} color='white' style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
        </View>
    )
}

export default Suggestionsblock