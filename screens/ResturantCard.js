import { View, Text, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';
import PinkCircle from '../images/pinkcircle.png'
import Avatar from '../images/avatar.png'
import BlueHeart from '../images/blueheart.png'
import BlueEye from '../images/blueeye.png'
import BannerBlue from '../images/banner.png'
import StarsImage from './StarsImage'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ResturantCard = ({ onPress, onEyeClick }) => {
    return (

        <TouchableWithoutFeedback onPress={onPress} >
            <View style={{ height: 190, width: windowWidth - 50, alignSelf: "center", justifyContent: "space-between" }}>
                <Image source={BannerBlue} resizeMode='cover' style={{ height: 190, position: 'absolute', alignSelf: 'center', borderRadius: 10, width: windowWidth - 50 }} />

                {/* TOP VIEW */}
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: "center", width: windowWidth - 50, padding: 10, justifyContent: 'space-between' }}>


                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image source={BlueHeart} resizeMode='contain' style={{ width: 30, height: 30, }} />
                        </TouchableOpacity>

                        <SpacerHorizontal size={size.sm} />
                        <TouchableOpacity onPress={onEyeClick}>

                            <Image source={BlueEye} resizeMode='contain' style={{ width: 30, height: 30, }} />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#00C899', flexDirection: 'row', height: 23, paddingHorizontal: 8, alignItems: 'center', borderRadius: 30 }}>
                        <Icons.Feather name={'unlock'} size={12} color='white' style={{ alignSelf: 'center' }} />

                        <Text style={{ color: 'white', marginLeft: 5, fontSize: 12, fontWeight: '600' }}>Open Now</Text>
                    </TouchableOpacity>
                </View>
                {/* BOTTOM VIEW */}
                <View style={{ paddingHorizontal: 8, paddingBottom: 5 }}>
                    {/* ROW1 */}
                    <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>
                                Luxary Restaurant
                            </Text>
                            <Spacer size={size.sh} />
                            <View style={{ flexDirection: 'row' }}>
                                <Icons.Ionicons name={'location-sharp'} size={15} color='white' style={{ alignSelf: 'center' }} />
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 10, alignSelf: 'center' }}>
                                    27th Brooklyn New York, USA
                                </Text>
                            </View>

                        </View>

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

                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '700' }}>3.5</Text>

                                </TouchableOpacity>
                                <SpacerHorizontal size={size.sh} />
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icons.FontAwesome name={'star'} size={12} color='gold' style={{ alignSelf: 'center' }} />
                                        <Icons.FontAwesome name={'star'} size={12} color='gold' style={{ alignSelf: 'center' }} />
                                        <Icons.FontAwesome name={'star'} size={12} color='gold' style={{ alignSelf: 'center' }} />
                                        <Icons.FontAwesome name={'star'} size={12} color='gold' style={{ alignSelf: 'center' }} />
                                        <Icons.FontAwesome name={'star'} size={12} color='gold' style={{ alignSelf: 'center' }} />

                                    </View>

                                    <Text style={{ color: 'white', fontWeight: '700', fontSize: 11 }}>
                                        10 Reviews
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    {/* LINE */}
                    <Spacer size={size.sh} />
                    <View style={{ height: 1.5, width: '100%', marginBottom: 5, alignSelf: 'center', backgroundColor: 'white' }} />
                    {/* BOTTOM2 */}


                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={PinkCircle} resizeMode='cover' style={{ width: 22, height: 22 }} />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ color: 'white', fontWeight: '700' }}>Restaurant</Text>
                            <SpacerHorizontal size={size.mid} />
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 17 }}>$$$</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Image source={Avatar} resizeMode='cover' style={{ width: 25, height: 25 }} />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ color: 'white', fontWeight: '700' }}>By.Rose merry</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ResturantCard