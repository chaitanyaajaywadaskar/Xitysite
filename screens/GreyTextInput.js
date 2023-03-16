import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';

const GreyTextInput = (props) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: props.faintBg ? '#F8F8F8' : '#EFEFEF', borderRadius: 4, borderColor: 'rgba(207, 207, 207, .5)', borderWidth: 1 }}>
            <View style={{ flex: 0.06, marginVertical: 3, paddingVertical: 10, paddingLeft: 15 }}>
                {props.isAvatar && <Icons.FontAwesome name='user' size={18} color={'#4286F5'} />}
                {props.isBussiness && <Icons.FontAwesome name='vcard' size={18} color={'#4286F5'} />}
                {props.isEmail && <Icons.MaterialCommunityIcons name='email' size={18} color={'#4286F5'} />}
                {props.isCall && <Icons.Ionicons name='call' size={18} color={'#4286F5'} />}
                {props.isBook && <Icons.Foundation name='book' size={18} color={'#4286F5'} />}

            </View>
            <View style={{ flex: 0.8, paddingLeft: 10, justifyContent: 'center' }}>
                <TextInput placeholder={props.hint} placeholderTextColor='grey' underlineColor='transparent' activeUnderlineColor='black' style={{ height: 40, backgroundColor: props.faintBg ? '#F8F8F8' : '#EFEFEF', }}></TextInput>
            </View>
        </View>
    )
}

export default GreyTextInput