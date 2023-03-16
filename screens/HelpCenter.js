import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import img from '../images/banner4.png'
import townhub from '../images/townhub.png'
import discount from '../images/discount.png'
import listing from '../images/listing.png'
import salesquestions from '../images/salesquestions.png'
import BreadCrum from './BreadCrum'
import BlockLayer from './BlockLayer'
import ChannelButton from './ChannelButton'
import FAQoverlap from './FAQoverlap'
import Guidesblock from './Guidesblock'
import Suggestions from './Suggestions'
import Tutorials from './Tutorials'
import FAQTab from './FAQTab'
import Forum from './Forum'
import BottomView from './BottomView';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';
import CustomAppBar from './CustomAppBar';
import FloatButton from './FloatButton';
import ExpandedView from './ExpandedView';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const HelpCenter = () => {
    const [tabs, settabs] = useState(0);
    const [isExpand, setExpand] = useState(false);

    return (
        <View>
            <CustomAppBar />

            <ScrollView>
                <View>

                    <View style={{ width: '100%', height: 250, marginTop: 60, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={img} resizeMode='cover' style={{ width: '100%', height: 250, position: 'absolute', marginTop: 20 }} />
                        <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 27, color: 'white', paddingBottom: 6 }}>Help Center
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <BreadCrum Title='Home' />
                            <BreadCrum Title='Pages' />
                            < Text style={{ textAlign: 'center', color: 'white', paddingRight: 5, fontWeight: '500', fontSize: 15 }}>Help Center </Text>
                        </View>
                    </View >
                    <View style={{ backgroundColor: 'white' }}>
                        <View style={{ paddingBottom: 11, paddingLeft: 8, paddingRight: 8 }}>
                            <Text style={{ fontFamily: 'Raleway', paddingTop: 20, alignSelf: 'center', fontSize: 29, fontWeight: 'bold', color: '#EFF5FF', position: 'absolute' }}>
                                DISCOVER & CONNECT
                            </Text>
                            <Text style={styles.item}>
                                How it works
                            </Text>
                        </View>

                        <Text style={styles.smalltext}>
                            Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
                        </Text>

                        <BlockLayer Title='Find Interesting Place'
                            subtext='01' Icon={<Icons.Entypo name={'location-pin'}
                                size={70} color='#4286F5' style={{ alignSelf: 'center' }} />} />
                        <BlockLayer Title='Contact a Few Owners' subtext='02' Icon={<Icons.MaterialIcons name={'email'}
                            size={60} color='#4286F5' style={{ alignSelf: 'center' }} />} />
                        <BlockLayer Title='Make a Listing' subtext='03' Image={<Image source={listing} style={{ height: 50, width: 50, alignSelf: 'center', marginTop: 10 }} />} />

                        <View style={{ marginBottom: 30, backgroundColor: '#5ECFB1', borderColor: 'rgba(187,187,187,0.4)', borderWidth: 9, borderRadius: 29, height: 60, width: 60, alignSelf: 'center', justifyContent: 'center' }}>
                            <Icons.AntDesign name={'check'} size={23} color='white' style={{ alignSelf: 'center' }} />
                        </View>
                    </View>
                    <LinearGradient colors={['#4286F5', '#8BB7FF']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ padding: 20, alignSelf: 'center', width: '100%', height: 640, alignItems: 'center', alignItems: 'center' }}>
                        <Text style={styles.textheading}>Our Video Tutorials</Text>
                        <Text style={{ marginBottom: 10, color: 'white', fontSize: 16, textAlign: 'center' }}> In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi
                            magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipsicing elit.
                        </Text>

                        <ChannelButton subtitle='Vimeo channel' Icon={<Icons.Entypo name={'vimeo'} size={15} color='white' />} />
                        <ChannelButton subtitle='Youtube channel' Icon={<Icons.Entypo name={'youtube'} size={15} color='white' />} />

                        <View style={{ height: 230, width: '100%', marginTop: 25, marginBottom: 20 }}>
                            <Image source={townhub} resizeMode='cover' style={{ borderRadius: 15, height: 230, width: '100%', position: 'absolute' }} />
                            <View style={{ marginBottom: 15, marginTop: 150 }}>
                                <TouchableOpacity style={styles.townhubButton}>
                                    <View style={{ backgroundColor: '#4286F5', borderRadius: 25, height: 38, width: 38, justifyContent: 'center', alignItems: 'center', }}>
                                        <Icons.FontAwesome5 name={'video'} size={15} color='white' />
                                    </View>
                                    <Text style={{ color: 'black', fontSize: 13, paddingLeft: 6 }}>How Townhub Works</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>


                    <View style={{ marginTop: 30, marginBottom: 30 }}>
                        <Text style={{ fontFamily: 'Raleway', alignSelf: 'center', fontSize: 34, fontWeight: 'bold', color: '#EFF5FF', position: 'absolute', bottom: 2 }}>
                            KNOWLEDGE BASE
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <FAQoverlap isThereLine={true} isThereBorder={tabs == 0 ? true : false} Title='FAQ' onPress={() => {
                                settabs(0)
                            }} />
                            <FAQoverlap isThereLine={true} isThereBorder={tabs == 1 ? true : false} Title='Tutorials' onPress={() => {
                                settabs(1)
                            }} />
                            <FAQoverlap Title='Forum' isThereBorder={tabs == 2 ? true : false} onPress={() => {
                                settabs(2)
                            }} />

                        </View>
                    </View>
                    <Text style={styles.smalltext}>
                        Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
                    </Text>
                    <View style={{ alignSelf: 'center', borderColor: '#CFCFCF', height: 110, width: responsiveWidth(75), backgroundColor: 'white', borderRadius: 15, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, justifyContent: 'space-between' }}>
                            <View />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ paddingTop: 5, alignItems: 'center' }}>
                                    <Icons.MaterialCommunityIcons name={'rocket-launch'} size={38} color='#4286F5' />
                                    <Text style={{ fontSize: 15, color: '#3B3B3B', fontWeight: '500', marginTop: 8 }}>Getting Started</Text>
                                </View>
                            </View>
                            <Icons.MaterialIcons name={'keyboard-arrow-right'} size={23} color='#4286F5' />
                        </View>
                    </View>

                    <Guidesblock Title='Pricing Plans' bc='rgba(207,207,207,1)' Image={<Image source={discount} style={{ height: 40, width: 40 }} />} />
                    <Guidesblock Title='Sales Questions' bc='rgba(207,207,207,1)' Image={<Image source={salesquestions} style={{ height: 40, width: 40 }} />} />
                    <Guidesblock Title='Usage Guides' bc='rgba(207,207,207,1)' Image={<Image source={salesquestions} style={{ height: 40, width: 40 }} />} />

                    <View style={{ padding: 17 }}>
                        <Text style={{ fontSize: 19, color: '#3B3B3B', fontWeight: '500' }}>Getting Started</Text>
                        <View style={styles.hmargin}></View>
                        <Suggestions />
                    </View>
                    {
                        tabs == 0 && <FAQTab />
                    }
                    {
                        tabs == 1 && <Tutorials />
                    }
                    {
                        tabs == 2 && <Forum />
                    }

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

const styles = StyleSheet.create({
    item: {
        fontWeight: 'bold',

        borderColor: '#707070',

        color: '#0C3982',
        textAlign: 'center',
        paddingTop: 27,
        fontFamily: 'Raleway',
        fontSize: 18

    },
    viewLayer: {
        paddingTop: 15,
        backgroundColor: '#F9F9F9',
        borderColor: '#BBBBBB',
        borderWidth: 1,
        height: 250,
        width: 280,
        marginTop: 8,
        alignSelf: 'center',
        borderRadius: 11
    },
    smallmargin: {
        borderWidth: 1,
        height: 1,
        width: 80,
        borderColor: 'black',
        alignItems: 'flex-end'

    },
    vmargin: {
        borderColor: '#CFCFCF',
        borderWidth: 0.8,
        marginLeft: 10,
        height: 70,
        width: 1
    },
    townhubButton: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 40,
        borderWidth: 5,
        borderColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    textheading: {
        marginTop: 15,
        marginBottom: 10,
        color: 'white',
        fontSize: 30,
        fontWeight: '700'
    },
    smalltext: {
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 15, marginTop: 10,
        paddingLeft: 9,
        paddingRight: 9,
    },
    hmargin: {
        borderWidth: 0.8,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        margin: 13,
        alignItems: 'center',
        width: 325,


    },


});
export default HelpCenter