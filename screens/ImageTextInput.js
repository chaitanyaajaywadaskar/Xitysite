import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';

const ImageTextInput = (props) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: props.isBlue ? '#F5F7FB' : 'white', marginHorizontal: 35, borderRadius: 4, borderColor: 'rgba(207, 207, 207, .5)', borderWidth: 1 }}>
            <View style={{ flex: 0.1, borderRightWidth: 1, borderRightColor: 'rgba(207, 207, 207, .5)', marginVertical: 3, paddingVertical: 10, paddingLeft: 15 }}>
                {props.isUser && <Icons.FontAwesome name='user' size={18} color={'#4286F5'} />}
                {props.isLocation && <Icons.Ionicons name='location-sharp' size={18} color={'#4286F5'} />}
                {props.isEmail && <Icons.MaterialCommunityIcons name='email' size={18} color={'#4286F5'} />}
                {props.isCall && <Icons.Ionicons name='call' size={18} color={'#4286F5'} />}
                {props.isPass && <Icons.Fontisto name='locked' size={18} color={'#4286F5'} />}

            </View>
            <View style={{ flex: 0.8, paddingLeft: 10, justifyContent: 'center' }}>
                <TextInput placeholder={props.hint} placeholderTextColor='grey' underlineColor='transparent' activeUnderlineColor='black' style={{ height: 40, backgroundColor: props.isBlue ? '#F5F7FB' : 'white', }}></TextInput>
            </View>
        </View>
    )
}

export default ImageTextInput