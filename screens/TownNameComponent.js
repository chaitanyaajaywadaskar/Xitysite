import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';




const TownNameComponent = ({ num, title, subtitle, Image }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            {Image}
            <View>
                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{num}</Text>
                <Text style={{ fontSize: 21, fontWeight: '500', color: 'black' }}>{title}</Text>
                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}> {subtitle}</Text>
            </View>
            <View>
                <TouchableOpacity style={{ borderRadius: 30, height: 60, width: 60, borderWidth: 0.2, borderColor: 'black' }}>
                    <Icons.AntDesign name='arrowright' size={23} color='black' style={{ alignSelf: 'center', marginTop: 15 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TownNameComponent