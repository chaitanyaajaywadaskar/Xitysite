import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import xitylogo from '../images/xity.png'
import Icons from './Icons/IconsSet';


const BottomButtons = ({ onPressup, onPressDown }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
            {/* <UpandDownarrow Icon={<Icons.MaterialIcons name={'keyboard-arrow-up'} size={25} color='white' />} /> */}
            <TouchableOpacity onPress={onPressup} style={{ flexDirection: 'row', marginRight: 5, borderRadius: 7, paddingVertical: 8, paddingHorizontal: 8, backgroundColor: '#0C3982' }}>
                <Icons.MaterialIcons name={'keyboard-arrow-up'} size={25} color='#8BB7FF' />
            </TouchableOpacity>
            {/* <UpandDownarrow Icon={<Icons.MaterialIcons name={'keyboard-arrow-down'} size={25} color='white' />} /> */}

            <TouchableOpacity onPress={onPressDown} style={{ flexDirection: 'row', marginRight: 5, borderRadius: 7, paddingVertical: 8, paddingHorizontal: 8, backgroundColor: '#0C3982' }}>
                <Icons.MaterialIcons name={'keyboard-arrow-down'} size={25} color='white' />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10, borderRadius: 6, backgroundColor: '#0C3982' }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', alignSelf: 'center', paddingRight: 8 }}>Powered By</Text>
                <Image source={xitylogo} style={{ height: 40, width: 55 }} />
            </View>
        </View>
    )
}

export default BottomButtons