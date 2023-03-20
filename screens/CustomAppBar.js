import { View, Text, TextInput, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from './Icons/IconsSet'
import { Appbar } from 'react-native-paper'

import { useNavigation } from '@react-navigation/native';
import { SpacerHorizontal } from './spacer'
import { size } from './size'
import IMAGES from '../constants/ImagesContant';

export default function CustomAppBar() {
    const navigation = useNavigation();
    const [isExpand, setExpand] = useState(false)
    const [isSignIn, setSignIn] = useState(false)
    return (
        <View style={{
            backgroundColor: 'white', height: 60, shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            position: 'absolute',
            top: 0,
            zIndex: 1,
            width: '100%',
            shadowRadius: 2,
            elevation: 15
        }}>
            <View style={style.mainContainer}>
                <TouchableWithoutFeedback style={style.imageStyle} onPress={() => {
                    navigation.navigate('Home')
                }}>
                    <Image source={IMAGES.LOGO} style={style.imageStyle} />
                </TouchableWithoutFeedback>
                <View style={style.secondHalf}>
                    {isExpand ?
                        <View style={{ height: 40, flexDirection: 'row', elevation: 5, alignSelf: 'center', backgroundColor: 'white' }}>
                            <SpacerHorizontal size={size.sm} />
                            <Icon.Fontisto name={'search'} size={22} style={style.iconStyle} />
                            <SpacerHorizontal size={size.sm} />
                            <View style={{ width: 1, backgroundColor: '#DCDCDC', marginVertical: 5 }} />
                            <SpacerHorizontal size={size.sm} />
                            <TextInput style={{}} placeholder='Search here' />
                            <SpacerHorizontal size={size.sm} />
                            <TouchableWithoutFeedback onPress={() => {
                                setExpand(false)
                            }}>
                                <Icon.Entypo name={'cross'} size={22} style={style.iconStyle} />
                            </TouchableWithoutFeedback>
                            <SpacerHorizontal size={size.sm} />

                        </View> :
                        <TouchableWithoutFeedback onPress={() => {
                            setExpand(true)
                        }}>
                            <Icon.Fontisto name={'search'} size={22} style={style.iconStyle} />
                        </TouchableWithoutFeedback>
                    }
                    {
                        isSignIn ? <TouchableOpacity onPress={() => {
                            navigation.navigate('UserLogin')
                        }}>
                            <Image source={IMAGES.USERIMG} style={{ marginLeft: 10, height: 45, width: 45, borderRadius: 5 }} />
                        </TouchableOpacity> : <TouchableOpacity style={{ marginLeft: 10, flexDirection: 'row', borderRadius: 5, alignItems: 'center', backgroundColor: '#4db7fe', paddingHorizontal: 15, paddingVertical: 10 }}
                            onPress={() => {
                                // navigation.navigate('UserLogin')
                                setSignIn(true)
                            }}>
                            <Icon.FontAwesome name='user' style={{ alignSelf: 'center' }} size={15} color='white' />
                            <SpacerHorizontal size={size.sh} />
                            <Text style={{ color: 'white' }}>Sign In</Text>
                        </TouchableOpacity>
                    }

                    {/* <TouchableOpacity onPress={() => { navigation.navigate('UserLogin') }}>
                        <Image source={UserImg} style={style.imageStyle2} />
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        elevation: 15,
        shadowColor: '#52006A', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5
    },
    imageStyle: {
        height: 38,
        width: 70,
        borderRadius: 8,
    },
    secondHalf: {
        flexDirection: 'row',

    },
    iconStyle: {
        color: '#0C3982',
        alignSelf: 'center'
    },
    imageStyle2: {
        height: 45,
        width: 45,
        borderRadius: 8,
        marginLeft: 15
    }
})