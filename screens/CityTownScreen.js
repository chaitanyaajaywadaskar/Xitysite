import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import BottomView from './BottomView'
import CustomAppBar from './CustomAppBar'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CityTownScreen = () => {
    const [isExpand, setExpand] = useState(false);
    const [isLocationView, setLocationView] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <CustomAppBar />
            <View style={{ flexDirection: 'row', paddingTop: 5, marginTop: 60, paddingHorizontal: 10, backgroundColor: 'white', paddingBottom: 5, alignItems: 'center' }}>
                <Icons.Ionicons name='location-sharp' size={20} color='#4286F5' style={{ paddingBottom: 10 }} />
                <SpacerHorizontal size={size.sh} />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '800' }}>
                        603103 </Text>

                    <Text style={{ fontSize: 12, }}>
                        Tamilnadu | Chengalpattu
                    </Text>
                </View>

                <View style={{ backgroundColor: '#CFCFCF', height: 40, marginTop: 10, marginLeft: 20, width: 1.5, alignSelf: 'center' }}>

                </View>
                <Pressable onPress={() => {
                    setLocationView(!isLocationView)
                }} style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 20, fontSize: 16, alignSelf: 'center', fontWeight: '500', color: '#0C3982', textDecorationLine: 'underline' }}>
                        Change Location </Text>
                </Pressable>
            </View>

            <ScrollView>
                {/* firstimage */}
                <View style={{ width: '100%', height: 300, }}>
                    <Image source={IMAGES.MASKGRP} resizeMode='cover' style={{ width: '100%', height: 300, position: "absolute" }} />
                    {isLocationView && <View style={{ paddingTop: 10, width: windowWidth * 0.7, alignSelf: 'center' }}>
                        <View style={styles.triangle} />
                        <View style={{ alignSelf: 'center', backgroundColor: 'white', width: windowWidth * 0.7, padding: 15, borderRadius: 5 }}>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>Select Pin code</Text>
                            <Spacer size={size.sh} />
                            <TextInput underlineColorAndroid='#3B3B3B' placeholder='Enter Pin Code | Enter City' />
                            <Spacer size={size.sh} />
                            <TouchableOpacity style={{ backgroundColor: "#0C3982", paddingHorizontal: 30, paddingVertical: 8, borderRadius: 5, alignSelf: 'flex-end' }}>
                                <Text style={{ color: 'white', fontSize: 10, fontWeight: '600' }}>GO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
                </View>
                {/* blue space */}
                <View style={{ backgroundColor: '#0C3982', paddingVertical: 25, paddingHorizontal: 20 }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Category Name
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginRight: 15 }}>
                            Business Name
                        </Text>
                        <Icons.AntDesign name='checkcircle' size={20} color='#0EBC31' />

                    </View>

                    {/* maringbottom given to provide space between text and detail button */}
                    <Text style={{ fontSize: 15, fontFamily: 'Roboto', color: 'white', marginTop: 10, marginBottom: 20 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                    </Text>

                    {/* instead f h and w to button use padding horizontal and padding vertical */}
                    <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'flex-start', paddingHorizontal: 25, paddingVertical: 10, alignItems: 'center', borderWidth: 4, borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'white', borderRadius: 8 }}>
                        <Text styles={{ fontSize: 21, color: 'white' }}>
                            Details
                        </Text>
                        <Image source={IMAGES.BACK} style={{ height: 10, width: 18, marginLeft: 15 }} />
                    </TouchableOpacity>




                </View>

                {/* whitespace */}
                <View style={{ backgroundColor: '#FFFFFF', width: '100%', paddingRight: 10, paddingLeft: 10 }}>
                    <Spacer size={size.mid} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderRadius: 5, paddingHorizontal: 20, backgroundColor: '#012C72' }}>
                            <Image source={IMAGES.SPEAKER} style={{ height: 18, width: 18, }} />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2) }}>HIGHLIGHTS</Text>
                        </TouchableOpacity>
                        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                            <Icons.Entypo name='chevron-with-circle-left' size={25} color='grey' />
                            <SpacerHorizontal size={size.sh} />
                            <Icons.Entypo name='chevron-with-circle-right' size={25} color='grey' />
                        </View>
                    </View>
                    <Spacer size={size.mid} />
                    <Text style={{ fontSize: responsiveFontSize(2.2) }}>Lorem ipsum dolor sit amet, consectetur...</Text>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: '#4286F5' }} >Read More</Text>
                    <Spacer size={size.mid} />
                    <TouchableOpacity style={{ backgroundColor: '#4286F5', alignSelf: 'flex-start', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 5 }}>
                        <Text style={{ fontSize: responsiveFontSize(2.2), color: 'white' }}>GUIDES</Text>
                    </TouchableOpacity>
                    <Spacer size={size.mid} />

                    <View style={{ backgroundColor: '#012C72', padding: 20 }}>
                        <ScrollView horizontal>
                            <View>
                                <Image source={IMAGES.MG1} resizeMode='cover' style={{ height: 180, width: 300, marginLeft: 15 }} />
                                <Spacer size={size.mid} />
                                <Text style={{ color: 'white', alignSelf: 'center' }}>Lorem ipsum dolor sit amet</Text>
                            </View>
                            <View>
                                <Image source={IMAGES.MG1} resizeMode='cover' style={{ height: 180, width: 300, marginLeft: 15 }} />
                                <Spacer size={size.mid} />
                                <Text style={{ color: 'white', alignSelf: 'center' }}>Lorem ipsum dolor sit amet</Text>
                            </View>
                            <View>
                                <Image source={IMAGES.MG1} resizeMode='cover' style={{ height: 180, width: 300, marginLeft: 15 }} />
                                <Spacer size={size.mid} />
                                <Text style={{ color: 'white', alignSelf: 'center' }}>Lorem ipsum dolor sit amet</Text>
                            </View>
                            <View>
                                <Image source={IMAGES.MG1} resizeMode='cover' style={{ height: 180, width: 300, marginLeft: 15 }} />
                                <Spacer size={size.mid} />
                                <Text style={{ color: 'white', alignSelf: 'center' }}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <Spacer size={size.mid} />
                    <View>
                        <Text style={{ fontFamily: 'Raleway', paddingTop: 23, alignSelf: 'center', fontSize: responsiveFontSize(4), fontWeight: 'bold', color: '#EFF5FF', position: 'absolute' }}>
                            EXPLORE WHAT TO DO
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',

                            borderColor: '#707070',

                            color: '#0C3982',
                            textAlign: 'center',
                            paddingTop: 35,
                            fontFamily: 'Raleway',
                            fontSize: responsiveFontSize(2.3)
                        }}>
                            Explore what to do
                        </Text>
                    </View>
                    <Spacer size={size.mid} />
                    <Text style={{ paddingTop: 15, paddingHorizontal: 10, fontFamily: 'Roboto', fontSize: responsiveFontSize(2), textAlign: 'center', marginBottom: 10 }}>
                        If You Give People The Opportunity To Do The Right Thing, You'll Rarely Be Disappointed
                    </Text>
                    <Spacer size={size.mid} />
                    <View style={{ height: responsiveHeight(40), alignItems: "center", paddingBottom: 20, justifyContent: 'flex-end', width: '100%', }}>
                        <Image source={IMAGES.DIRECTORYBANNER} resizeMode='cover' style={{ position: 'absolute', height: responsiveHeight(40), width: '90%', borderRadius: 5, alignSelf: 'center', }} />
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(2.5) }}>Directory</Text>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(1.8) }}>0 Listings</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(1.8) }}>Find :</Text>
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(1.8) }}>Business</Text>
                            <View style={{ width: 1, backgroundColor: 'white', marginHorizontal: 5 }} />
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(1.8) }}>Professionals</Text>
                            <View style={{ width: 1, backgroundColor: 'white', marginHorizontal: 5 }} />
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(1.8) }}>Handyman</Text>
                        </View>
                        <Spacer size={size.mid} />

                        <TouchableOpacity style={{ backgroundColor: '#4286F5', borderRadius: 5, padding: 5, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white' }}>Explore</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer size={size.xxxlg} />
                    <Spacer size={size.lg} />







                    <View style={{ height: responsiveHeight(35), alignItems: "center", paddingBottom: 20, justifyContent: 'flex-end', width: '100%', }}>
                        <Image source={IMAGES.MARKETPLACE} resizeMode='cover' style={{ position: 'absolute', height: responsiveHeight(40), width: '90%', borderRadius: 5, alignSelf: 'center', }} />
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(2.5) }}>Directory</Text>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(1.8) }}>0 Listings</Text>

                        <Spacer size={size.mid} />
                    </View>
                    <Spacer size={size.xxxlg} />
                    <Spacer size={size.mid} />

                    <View style={{ height: responsiveHeight(35), alignItems: "center", paddingBottom: 20, justifyContent: 'flex-end', width: '100%', }}>
                        <Image source={IMAGES.MARKETPLACE} resizeMode='cover' style={{ position: 'absolute', height: responsiveHeight(40), width: '90%', borderRadius: 5, alignSelf: 'center', }} />
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(2.5) }}>Directory</Text>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(1.8) }}>0 Listings</Text>

                        <Spacer size={size.mid} />
                    </View>
                    <Spacer size={size.xxxlg} />
                    <Spacer size={size.mid} />


                    <View style={{ height: responsiveHeight(35), alignItems: "center", paddingBottom: 20, justifyContent: 'flex-end', width: '100%', }}>
                        <Image source={IMAGES.MARKETPLACE} resizeMode='cover' style={{ position: 'absolute', height: responsiveHeight(40), width: '90%', borderRadius: 5, alignSelf: 'center', }} />
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(2.5) }}>Directory</Text>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(1.8) }}>0 Listings</Text>

                        <Spacer size={size.mid} />
                    </View>
                    <Spacer size={size.lg} />

                    <TouchableOpacity style={{ backgroundColor: '#4286F5', alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 5 }}>
                        <Text style={{ fontSize: responsiveFontSize(2.2), color: 'white' }}>Load More</Text>
                    </TouchableOpacity>






                    <View>
                        <Text style={{ fontFamily: 'Raleway', paddingTop: 23, alignSelf: 'center', fontSize: 37, fontWeight: 'bold', color: '#EFF5FF', position: 'absolute' }}>
                            SPONSERS
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',

                            borderColor: '#707070',

                            color: '#0C3982',
                            textAlign: 'center',
                            paddingTop: 35,
                            fontFamily: 'Raleway',
                            fontSize: responsiveFontSize(2)
                        }}>
                            Our Supporters
                        </Text>
                    </View>
                    <Text style={{ paddingTop: 15, fontFamily: 'Roboto', fontSize: responsiveFontSize(2), textAlign: 'center', marginBottom: 10 }}>
                        Make Us Stronger To Strengthen Our Community
                    </Text>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                        {/* 1st column */}
                        <View style={{}}>


                            <Image source={IMAGES.COMPONENT1} style={{ height: 80, width: windowWidth * 0.42, backgroundColor: '#59B712', borderColor: '#707070', marginBottom: 10 }} />
                            <Image source={IMAGES.COMPONENT2} style={{ height: 80, width: windowWidth * 0.42, backgroundColor: '#59B712', borderColor: '#707070', marginBottom: 10 }} />
                            <Image source={IMAGES.COMPONENT3} style={{ height: 80, width: windowWidth * 0.42, backgroundColor: '#59B712', borderColor: '#707070', marginBottom: 10 }} />
                            <Image source={IMAGES.COMPONENT2} style={{ height: 80, width: windowWidth * 0.42, backgroundColor: '#59B712', borderColor: '#707070', marginBottom: 10 }} />
                        </View>

                        {/* 2nd column */}

                        <View style={{}}>

                            <Image source={IMAGES.COMPONENT5} style={{ height: 80, width: windowWidth * 0.42, backgroundColor: '#59B712', borderColor: '#707070', marginBottom: 10 }} />
                            <Image source={IMAGES.COMPONENT6} style={{ height: 80, width: windowWidth * 0.42, backgroundColor: '#59B712', borderColor: '#707070', marginBottom: 10 }} />
                            <Image source={IMAGES.COMPONENT7} style={{ height: 80, width: windowWidth * 0.42, backgroundColor: '#59B712', borderColor: '#707070', marginBottom: 10 }} />
                            <Image source={IMAGES.COMPONENT8} style={{ height: 80, width: windowWidth * 0.42, backgroundColor: '#59B712', borderColor: '#707070', marginBottom: 10 }} />
                        </View>
                    </View>
                </View>
                <BottomView />

            </ScrollView >

            {
                isExpand ? <ExpandedView
                    onHomeClick={() => {
                        navigation.navigate('Home')
                        setExpand(false)
                    }}
                    onMyAccClick={() => {
                        navigation.getParent('left_drawer3').openDrawer()
                        setExpand(false)
                    }}
                    onSeviceClick={() => {
                        navigation.getParent('left_drawer2').openDrawer()
                        setExpand(false)

                    }}
                    onMarketsClick={() => {
                        navigation.getParent('right_drawer').openDrawer()
                        setExpand(false)

                    }}
                    onMenuClick={() => {
                        navigation.getParent('left_drawer').openDrawer()
                        setExpand(false)

                    }} onClose={() => { setExpand(false) }} /> : <FloatButton onPress={() => { setExpand(true) }} />
            }





        </View >
    )
}

export default CityTownScreen

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        alignSelf: 'flex-end',
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        marginRight: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "white",
    },
})