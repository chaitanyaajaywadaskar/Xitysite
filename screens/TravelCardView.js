import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const TravelCardView = ({ Img }) => {
    return (
        <View style={{ width: windowWidth * 0.9, marginHorizontal: 20, padding: 20, alignSelf: 'center', height: 400, }}>
            <Image source={Img} resizeMode='cover' style={{ position: 'absolute', borderRadius: 8, width: windowWidth * 0.9, alignSelf: 'center', height: 400, }} />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity style={{ borderRadius: 25, alignSelf: 'flex-start', paddingVertical: 5, paddingHorizontal: 20, borderColor: 'white', borderWidth: 1 }}><Text style={{ color: 'white' }}>Travel</Text></TouchableOpacity>
                <Spacer size={size.sm} />
                <Text style={{ paddingRight: 40, fontSize: 18, color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
                <Spacer size={size.sm} />
                <View style={{ flexDirection: 'row' }}>
                    <Icons.FontAwesome name='user' size={18} color='white' />
                    <SpacerHorizontal size={size.sm} />
                    <Text style={{ color: 'white', fontSize: 13 }}>By,Rose merry</Text>
                </View>
            </View>
        </View>
    )
}

export default TravelCardView