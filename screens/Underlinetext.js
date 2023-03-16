import { View, Text } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';



const Underlinetext = () => {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>Shift</Text>
                <Icons.MaterialCommunityIcons
                    name={'arrow-up-bold-outline'} size={15} color='white' style={{ alignSelf: 'center' }} />
            </View>
            <Icons.AntDesign
                name={'plus'} size={12} color='white' style={{ alignSelf: 'center', marginRight: 3, marginLeft: 3, fontWeight: '600' }} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>Enter</Text>
                <Icons.MaterialCommunityIcons
                    name={'arrow-left-bottom'} size={14} color='white' style={{ alignSelf: 'center', marginRight: 3 }} />
                <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>to make a line break</Text>
            </View>
        </View>
    )
}

export default Underlinetext