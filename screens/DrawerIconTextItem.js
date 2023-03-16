import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet'
import { SpacerHorizontal } from './spacer'
import { size } from './size'

const DrawerIconTextItem = ({ LeadingIcon, Title, TrailingIcon, onPress, Line = true }) => {
    return (
        <View style={{ width: '100%', flexDirection: 'row', borderBottomColor: Line ? '#D8D8D8' : 'transparent', marginBottom: 10, paddingBottom: 10, borderBottomWidth: 0.6, alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
                <View style={{ width: 25 }}>
                    {LeadingIcon}
                </View>
                <SpacerHorizontal size={size.sm} />
                <Text style={{ color: 'white', fontSize: 17 }}>{Title}</Text>
            </TouchableOpacity>
            <Icons.AntDesign name={TrailingIcon} color='white' size={20} />
        </View>
    )
}

export default DrawerIconTextItem