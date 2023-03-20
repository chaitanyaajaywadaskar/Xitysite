import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions"
import { Dropdown } from 'react-native-element-dropdown';
import ImageDescriptionCard from './ImageDescriptionCard'
import IconTitleDesc2 from './IconTitleDesc2'
import GreyTextInput from './GreyTextInput'
import BottomView from './BottomView'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import CustomAppBar from './CustomAppBar'
import IMAGES from '../constants/ImagesContant'

const data1 = [
    { label: 'Feature1 ', value: '1' },
    { label: 'Feature2', value: '2' },
    { label: 'Feature3', value: '3' },
    { label: 'Feature4', value: '4' },
    { label: 'Feature1', value: '5' },
    { label: 'Feature1', value: '6' },
    { label: 'Feature1', value: '7' },
    { label: 'Feature1', value: '8' },
];
const PartnerManagerScreen = ({ navigation }) => {
    const [isFocus1, setIsFocus1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [isExpand, setExpand] = useState(false);

    return (
        <View>
            <Pressable onPress={() => {
                setExpand(false);
            }}><CustomAppBar />
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 60 }}>
                    <View style={{ backgroundColor: 'white' }}>
                        <View style={styles.breadcrumView}>
                            <Text style={styles.breadcrumText}>Home</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.blueArrow}>&gt;</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.breadcrumText}>Pages</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.blueArrow}>&gt;</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.breadcrumText}>User Single</Text>
                        </View>
                        <Spacer size={size.lg} />
                        <View style={{ width: responsiveWidth(90), justifyContent: 'space-between', paddingTop: 15, paddingBottom: 25, paddingHorizontal: 15, height: responsiveHeight(45), alignSelf: 'center' }}>
                            <View style={{
                                width: responsiveWidth(90), height: responsiveHeight(45),
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                overflow: "hidden", position: 'absolute',
                            }}>
                                <Image source={IMAGES.PHOTOGRAPHER} resizeMode='cover' style={{ width: responsiveWidth(90), height: responsiveHeight(45), }} />
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 25, alignSelf: 'flex-end', borderRadius: 5, backgroundColor: '#012C72' }}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Regular' }}>Follow</Text>
                                <SpacerHorizontal size={size.sm} />
                                <Icons.FontAwesome5 name='user-plus' color='#6799EC' />
                            </TouchableOpacity>
                            <Image source={IMAGES.BEARDMAN} style={{ width: responsiveWidth(22), borderWidth: 5, borderColor: 'white', borderRadius: 50, height: responsiveWidth(22) }} />
                            <View>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontWeight: '700', fontSize: responsiveFontSize(2) }}>Alisa Noory</Text>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(1.8) }}>Company name</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ color: '#4286F5', paddingVertical: 10, paddingLeft: 10, fontFamily: 'Roboto-Medium' }}>4</Text>
                                <Text style={{ color: 'white', paddingVertical: 10, fontFamily: 'Roboto-Regular' }}>Places</Text>
                                <View style={{ width: 1, backgroundColor: 'white' }} />
                                <Text style={{ color: '#4286F5', paddingVertical: 10, fontFamily: 'Roboto-Medium' }}>20</Text>
                                <Text style={{ color: 'white', paddingVertical: 10, fontFamily: 'Roboto-Regular' }}>Followers</Text>
                                <View style={{ width: 1, backgroundColor: 'white' }} />
                                <Text style={{ color: '#4286F5', paddingVertical: 10 }}>4</Text>
                                <Text style={{ color: 'white', paddingVertical: 10, paddingRight: 15, fontFamily: 'Roboto-Regular' }}>Following</Text>
                            </View>
                        </View>
                        <View style={{ width: responsiveWidth(90), paddingVertical: 25, paddingHorizontal: 15, alignSelf: 'center', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderBottomColor: '#B4B4B4', borderLeftColor: '#B4B4B4', borderRightColor: '#B4B4B4' }}>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(1.5), color: '#333333' }}>Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim.   </Text>
                            <Spacer size={size.sh} />
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(1.5), color: '#333333' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</Text>
                            <Spacer size={size.lg} />
                            <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 25, alignSelf: 'flex-start', alignItems: 'center', borderRadius: 5, backgroundColor: '#012C72' }}>
                                <Text style={{ color: 'white', fontFamily: 'Roboto-Regular' }}>Visit Website</Text>
                                <SpacerHorizontal size={size.sm} />
                                <Icons.Entypo name='chevron-right' size={15} color='#6799EC' />
                            </TouchableOpacity>
                        </View>
                        <Spacer size={size.lg} />
                        <View style={{ padding: 20, width: responsiveWidth(90), borderRadius: 5, borderColor: '#B4B4B4', borderWidth: 1, alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'black', fontSize: responsiveFontSize(2), fontWeight: '600', fontFamily: 'Roboto-Medium' }} >Listing by : </Text>
                                <Text style={{ color: '#4286F5', fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}>Alisha Noory</Text>
                            </View>
                            <Spacer size={size.sm} />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: responsiveFontSize(1.6), fontWeight: '600', fontFamily: 'Roboto-Medium' }} >Sort by: </Text>
                                <SpacerHorizontal size={size.sh} />
                                <Dropdown
                                    style={styles.dropdown}
                                    containerStyle={styles.dropContainer}
                                    selectedTextStyle={{ color: 'black' }}
                                    renderRightIcon={() => (
                                        <Icons.Entypo name={isFocus1 ? 'chevron-up' : 'chevron-down'} color='#4286F5' size={20} />
                                    )}
                                    renderLeftIcon={() => (
                                        <Icons.Ionicons name='menu' color='#4286F5' size={20} style={{ marginRight: 5, }} />)}
                                    data={data1}
                                    maxHeight={80}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Popularity"
                                    placeholderStyle={styles.placeholder}
                                    value={value1}
                                    onChange={item => {
                                        setValue1(item.value);
                                    }}
                                    onFocus={() => setIsFocus1(true)}
                                    onBlur={() => setIsFocus1(false)}
                                />
                            </View>

                        </View>
                        <Spacer size={size.xxlg} />
                        <FlatList
                            data={[1, 1, 1, 1]}
                            scrollEnabled={false}
                            renderItem={
                                ({ item, index }) => <ImageDescriptionCard isThereBottomMargin={true} />
                            }
                        />
                        <View style={{ width: responsiveWidth(90), borderRadius: 10, borderColor: '#B4B4B4', borderWidth: 1, alignSelf: 'center' }}>
                            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(2) }}>About Author</Text>
                                <Icons.Entypo name='chevron-down' size={25} color='#6799EC' />
                            </View>
                            <View style={{ height: 1, backgroundColor: '#B4B4B4', }} />
                            <View style={{ flexDirection: 'row', paddingVertical: 20, paddingLeft: 20, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image source={IMAGES.ARTGIRL} style={{ height: responsiveWidth(15), width: responsiveWidth(15) }} />
                                    <SpacerHorizontal size={size.sm} />
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', color: 'black', fontSize: responsiveFontSize(2) }}>Alisa Noory</Text>
                                        <Text style={{ fontFamily: 'Roboto-Regular', color: 'black', fontSize: responsiveFontSize(1.5) }}>4 PLACES HOSTED</Text>
                                    </View>
                                </View>
                                <View style={{ padding: 15, paddingRight: 35, borderTopStartRadius: 35, borderBottomStartRadius: 35, borderColor: '#E3E3E3', borderWidth: 0.5, backgroundColor: '#EFEFEF' }}>
                                    <View style={{ backgroundColor: '#4286F5', borderRadius: 25, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }} >
                                        <Icons.MaterialCommunityIcons name='message-text' color='white' size={20} />
                                    </View>
                                </View>
                            </View>

                        </View>
                        <Spacer size={size.xlg} />

                        <View style={{ borderColor: '#BBBBBB', width: responsiveWidth(90), alignSelf: 'center', borderWidth: 1, borderRadius: 10, }}>
                            <View style={{ flexDirection: "row", padding: 20, justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(2) }}>User Contacts</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </View>
                            <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                            <Spacer size={size.mid} />
                            <IconTitleDesc2 Icon={<Icons.Ionicons name={'location-sharp'} size={20} color='#4286F5' />} Title='Address :' Desc=' 27th Brooklyn New York, USA' />
                            <IconTitleDesc2 Icon={<Icons.Ionicons name={'md-call'} size={20} color='#4286F5' />} Title='Phone :' Desc='9743696650' />
                            <IconTitleDesc2 Icon={<Icons.Entypo name={'mail'} size={20} color='#4286F5' />} Title='Mail :' Desc='samplemail1@gmail.com' />
                            <IconTitleDesc2 Icon={<Icons.MaterialCommunityIcons name={'web'} size={20} color='#4286F5' />} MBottom={0} NoLine={true} Title='Website :' Desc='www.sample.com' />
                            <Spacer size={size.sm} />


                            <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', paddingVertical: 15, }}>
                                    <View style={{ height: responsiveWidth(8), alignItems: 'center', marginEnd: 10, marginLeft: 20, justifyContent: 'center', borderRadius: 5, width: responsiveWidth(8), backgroundColor: '#4286F5' }}>
                                        <Icons.EvilIcons name='sc-facebook' color='white' size={25} />
                                    </View>
                                    <View style={{ height: responsiveWidth(8), alignItems: 'center', marginEnd: 10, justifyContent: 'center', borderRadius: 5, width: responsiveWidth(8), backgroundColor: '#4286F5' }}>
                                        <Icons.EvilIcons name='sc-twitter' color='white' size={25} />
                                    </View>
                                    <View style={{ height: responsiveWidth(8), alignItems: 'center', marginEnd: 10, justifyContent: 'center', borderRadius: 5, width: responsiveWidth(8), backgroundColor: '#4286F5' }}>
                                        <Icons.AntDesign name='instagram' color='white' size={25} />
                                    </View>
                                    <View style={{ height: responsiveWidth(8), alignItems: 'center', marginEnd: 10, justifyContent: 'center', borderRadius: 5, width: responsiveWidth(8), backgroundColor: '#4286F5' }}>
                                        <Icons.EvilIcons name='sc-vk' color='white' size={25} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 1, height: 60, backgroundColor: '#BBBBBB' }} />
                                    <SpacerHorizontal size={size.mid} />
                                    <TouchableOpacity onPress={() => {
                                    }}>
                                        <Icons.MaterialCommunityIcons name='email' size={45} color='#BBBBBB' style={{ marginRight: 20 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <Spacer size={size.xlg} />
                        <View style={{ borderColor: '#BBBBBB', paddingBottom: 20, width: responsiveWidth(90), alignSelf: 'center', borderWidth: 1, borderRadius: 10, }}>
                            <View style={{ flexDirection: "row", padding: 20, justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontFamily: 'Roboto-Regular', fontSize: responsiveFontSize(2) }}>Get in Touch</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </View>
                            <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                            <Spacer size={size.mid} />
                            <View style={{ width: responsiveWidth(75), alignSelf: 'center' }}>
                                <GreyTextInput faintBg={true} isAvatar={true} hint='Your Name*' />
                                <Spacer size={size.mid} />
                                <GreyTextInput faintBg={true} isAvatar={true} hint='Email Address*' />
                                <Spacer size={size.mid} />

                                <TextInput multiline={true} style={{ height: 180, textAlignVertical: 'top', paddingLeft: 15, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Additional Information:' />
                                <Spacer size={size.mid} />
                                <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 25, alignSelf: 'flex-start', alignItems: 'center', borderRadius: 5, backgroundColor: '#012C72' }}>
                                    <Text style={{ color: 'white', fontFamily: 'Roboto-Regular' }}>Send Message</Text>
                                    <SpacerHorizontal size={size.sm} />
                                    <Icons.Fontisto name='share-a' size={15} color='#6799EC' />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <Spacer size={size.xxxlg} />

                        <BottomView />
                    </View>
                </ScrollView></Pressable>
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
        </View>
    )
}

export default PartnerManagerScreen

const styles = StyleSheet.create({
    breadcrumView: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        elevation: 5,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },
    breadcrumText: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Roboto-Medium'
    },
    blueArrow: {
        fontSize: 18,
        color: '#4286F5'
    },
    dropdown: {
        height: 40,
        width: 150,
        borderRadius: 5,
        backgroundColor: '#F6F6F6',
        borderColor: '#B4B4B4',
        borderWidth: 0.5,
        paddingVertical: 8,
        paddingHorizontal: 8
    },

    dropContainer: {
        borderRadius: 8,
        marginTop: 5,
    },
    placeholder: {
        fontSize: 12
    },
})