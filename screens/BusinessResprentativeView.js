import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet';

const BusinessResprentativeView = ({ MainTitle, UserImg, Name, onPress, isBusiness, Designation, BottomText1, BottomText2 }) => {
    return (
        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
            <Pressable onPress={onPress} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>{MainTitle}</Text>
                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

            </Pressable>
            {isBusiness && <View>
                <Spacer size={size.mid} />
                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                <Spacer size={size.mid} />
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={UserImg} resizeMode='contain' style={{ width: 60, height: 60 }} />
                        <SpacerHorizontal size={size.sm} />
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>{Name}</Text>
                            <Text style={{ fontWeight: '500' }}>{Designation}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#63D500', borderRadius: 25, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <Icons.FontAwesome name='user' size={20} color='white' />
                        </View>
                        <SpacerHorizontal size={size.sm} />
                        <View style={{ backgroundColor: '#4286F5', borderRadius: 25, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <Icons.Ionicons name='chatbubbles' size={20} color='white' />
                        </View>
                    </View>
                </View>
                <Spacer size={size.mid} />

                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                <Spacer size={size.mid} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 12 }}>{BottomText1}:</Text>
                    <Text style={{ fontSize: 12 }}>1 Feb 2023</Text>
                    <View style={{ width: 1, backgroundColor: '#BBBBBB' }} />
                    <Text style={{ fontSize: 12 }}>{BottomText2} Date:</Text>
                    <Text style={{ fontSize: 12 }}>3 Feb 2023</Text>
                </View>
            </View>}

        </View>
    )
}

export default BusinessResprentativeView