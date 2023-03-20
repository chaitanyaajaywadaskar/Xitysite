import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import Icons from './Icons/IconsSet';
import StarsImage from './StarsImage'
import BannerTopView from './BannerTopView'
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageDescriptionCard = ({ onClaimClick, onEyeClick, isThereBottomMargin }) => {
    return (
        <View style={{ height: 430, marginBottom: isThereBottomMargin ? 20 : 0, width: windowWidth * 0.9, alignSelf: 'center', borderRadius: 6 }}>

            <Image source={IMAGES.PLAINBANNER} resizeMode='contain' style={{ width: windowWidth * 0.9, height: 215, }} />
            <BannerTopView onEyeClick={onEyeClick} />
            <View style={{ position: 'absolute', top: 140, left: 10 }}>
                <View style={{ justifyContent: 'flex-end', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{
                            alignSelf: 'flex-start',
                            justifyContent: 'center',
                            backgroundColor: '#0C3982',
                            padding: 5,
                            borderRadius: 6,
                        }} onPress={() => {

                        }}>

                            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: '700' }}>3.5</Text>

                        </TouchableOpacity>
                        <SpacerHorizontal size={size.mid} />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <StarsImage size={17} />

                            </View>

                            <Text style={{ color: 'white', fontWeight: '800', fontSize: 11 }}>
                                10 Reviews
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={{ width: windowWidth * 0.9, height: 250, backgroundColor: 'white', borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 30, alignSelf: 'center', position: 'absolute', bottom: 0 }}>
                <View style={{ position: 'absolute', right: 20, top: -40 }}>
                    <Image source={IMAGES.GIRLAVATAR2} resizeMode='contain' style={{ width: 65, height: 65, borderRadius: 35 }} />

                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 25 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 18 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icons.AntDesign name='checkcircle' size={18} color='#0EBC31' />

                            <SpacerHorizontal size={size.sh} />
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>Luxary Restaurant</Text>
                        </View>
                        <TouchableOpacity onPress={onClaimClick}>
                            <Text style={{ alignSelf: 'center', color: 'blue', borderBottomColor: 'blue', borderBottomWidth: 1 }}>Claim</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer size={size.sh} />
                    <View style={{ flexDirection: 'row' }}>
                        <Icons.Ionicons name='location-sharp' size={18} color='#4286F5' />

                        <SpacerHorizontal size={size.sh} />
                        <Text style={{ fontSize: 12, }}>27th Brooklyn New York, USA</Text>
                        <SpacerHorizontal size={size.mid} />
                        <Icons.Feather name={'chevron-down'} size={20} color='blue' style={{ alignSelf: 'center' }} />

                    </View>
                    <Spacer size={size.mid} />
                    <View style={{ width: '100%', backgroundColor: '#EFEFEF', height: 2 }} />
                    <Spacer size={size.sm} />
                    <Text style={{ fontSize: 16, }}>Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales...interdum metus at nisi tempor laoreet. Integer gravida</Text>
                    <Spacer size={size.sm} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: 'black' }}>Facilities: </Text>
                        <SpacerHorizontal size={size.sh} />
                        <Image source={IMAGES.LOGOCOMBO} resizeMode='contain' style={{ width: 100, height: 25, }} />

                    </View>

                    <View style={{ width: '100%', backgroundColor: '#EFEFEF', height: 1 }} />
                    <Spacer size={size.sh} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={IMAGES.PINKBURGER} resizeMode='cover' style={{ width: 22, height: 22 }} />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ fontWeight: '600' }}>Restaurant</Text>
                            <SpacerHorizontal size={size.mid} />
                            <Text style={{ fontWeight: '700', fontSize: 16 }}>$$$</Text>
                        </View>
                        <View style={{ height: 25, width: 1, backgroundColor: '#D5D5D5' }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Icons.MaterialCommunityIcons name={'email'} size={18} color='#BBBBBB' />
                            <SpacerHorizontal size={size.sh} />
                            <Icons.Entypo name={'location-pin'} size={18} color='#BBBBBB' />
                            <SpacerHorizontal size={size.sh} />
                            <Icons.MaterialCommunityIcons name={'image-multiple'} size={18} color='#BBBBBB' />
                            <SpacerHorizontal size={size.sh} />
                            <Icons.Ionicons name={'swap-horizontal'} size={18} color='#BBBBBB' />
                            <SpacerHorizontal size={size.sh} />
                            <Icons.Entypo name={'share'} size={18} color='#BBBBBB' />

                        </View>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default ImageDescriptionCard