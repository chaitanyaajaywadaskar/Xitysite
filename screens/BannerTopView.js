import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';
import { SpacerHorizontal } from './spacer';
import { size } from './size';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BannerTopView = ({ onEyeClick }) => {
    return (
        <View style={{ flexDirection: 'row', width: windowWidth * 0.85, alignSelf: 'center', position: 'absolute', top: 10, justifyContent: 'space-between', }}>
            <View style={{
                marginTop: 8,
                flexDirection: 'row',
            }}>
                <TouchableOpacity style={{
                    alignSelf: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: '#0C3982',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                }} onPress={() => {

                }}>

                    <Icons.EvilIcons name={'heart'} size={18} color='white' style={{ alignSelf: 'center' }} />

                </TouchableOpacity>
                <SpacerHorizontal size={size.sm} />
                <TouchableOpacity style={{
                    alignSelf: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: '#0C3982',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                }} onPress={onEyeClick}>

                    <Icons.Entypo name={'eye'} size={18} color='white' style={{ alignSelf: 'center' }} />

                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#00C899', flexDirection: 'row', height: 23, paddingHorizontal: 8, marginTop: 10, alignItems: 'center', borderRadius: 30 }}>
                <Icons.Feather name={'unlock'} size={12} color='white' style={{ alignSelf: 'center' }} />

                <Text style={{ color: 'white', marginLeft: 5, fontSize: 12, fontWeight: '600' }}>Open Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BannerTopView