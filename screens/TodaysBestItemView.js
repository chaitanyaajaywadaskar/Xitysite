import { View, Text } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';

const TodaysBestItemView = ({ Title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 12, width: 100 }}>
                {Title}
            </Text>
            <Text style={{ fontSize: 12, }}>28.00$</Text>
            <Icons.Entypo name='cross' size={25} color='black' />
            <View style={{ flexDirection: 'row', backgroundColor: '#F8F8F8', borderRadius: 5, borderColor: '#EFEFEF', borderWidth: 1 }}>
                <Icons.Entypo name='minus' size={20} color='black' style={{ padding: 8 }} />
                <Text style={{ color: '#4286F5', padding: 8, paddingHorizontal: 15, borderLeftColor: '#EBEBEB', borderLeftWidth: 1, borderRightColor: '#EBEBEB', borderRightWidth: 1 }}>1</Text>
                <Icons.Entypo name='plus' size={20} color='black' style={{ padding: 8 }} />

            </View>
        </View>
    )
}

export default TodaysBestItemView