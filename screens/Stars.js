import { View, Text } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';


const Stars = ({ num }) => {
    return (
        <View style={{ margin: 5 }}>
            <Icons.Ionicons name={'md-star-outline'} size={32} color='white' />
            <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center' }}>{num}</Text>
        </View>
    )
}

export default Stars