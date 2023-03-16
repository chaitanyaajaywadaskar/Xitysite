import { View, Text, Image } from 'react-native'
import React from 'react'
import { SpacerHorizontal } from './spacer'
import { size } from './size'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icons from './Icons/IconsSet';

const DrawerTranspyContainer = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
            marginHorizontal: 5,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#6799EC',
            justifyContent: 'space-between'

        }}>
            <Image source={props.img} resizeMode="contain" style={{
                width: 23,
                height: 23
            }} />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', alignSelf: 'center' }}>{props.name}</Text>

            <SpacerHorizontal size={size.mid} />
            {props.isClick ? <Icons.Entypo name='minus' color='white' size={20} /> :
                <Icons.Entypo name='plus' color='white' size={20} />}
        </TouchableOpacity>
    )
}

export default DrawerTranspyContainer