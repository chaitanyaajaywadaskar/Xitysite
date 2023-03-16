import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import Term from '../images/termoficon.svg'
import General from '../images/generalicon.svg'
import BannerAds from '../images/banneradsicon.svg'
import Directory from '../images/directoryicon.svg'
import Marketplace from '../images/marketplaceicon.svg'
import Community from '../images/communityicon.svg'
import Other from '../images/othersicon.svg'
import Xzit from '../images/xzibiticon.svg'
import Hammer from '../images/hammericon.svg'
import Xclub from '../images/xclubicon.svg'
import Govt from '../images/governmenticon.svg'
import DrawerFifthItems from './DrawerFifthItems';
import DrawerFifthInsideItem from './DrawerFifthInsideItem';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const CustomDrawer5 = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: '#0C3982', height: '100%', }}>
            <ScrollView style={{ padding: 20 }}>
                <TouchableOpacity onPress={() => {
                    navigation.closeDrawer();
                }} style={{ width: 32, alignSelf: 'flex-end', height: 32, borderRadius: 25, borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderColor: 'white' }}>
                    <Icons.Entypo name='cross' size={22} color='white' />
                </TouchableOpacity>
                <Spacer size={size.sm} />
                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                    <Icons.FontAwesome name='search' size={20} color='white' />
                    <TextInput
                        style={{
                            height: 40,
                            marginLeft: 10,
                            fontSize: responsiveFontSize(1.8)
                        }}
                        placeholder='Search'
                        placeholderTextColor='white'

                    /></View>
                <Spacer size={size.xxxlg} />

                <Text style={{ color: '#C1D8FF', marginLeft: 15, fontSize: responsiveFontSize(1.6), }}>WEBSITE T'S & C'S</Text>
                <Spacer size={size.sh} />
                <DrawerFifthItems Logo={
                    <Term width={25} height={25} />
                } Title='Terms of use'
                    ExpandedView={
                        <View style={{ backgroundColor: '#1F4B92', borderRadius: 8, paddingHorizontal: 10, margin: 10 }}>
                            <DrawerFifthInsideItem Title='Notices' />
                            <DrawerFifthInsideItem Title='Terms' />
                            <DrawerFifthInsideItem Title='Privacy' isHighlighted={true} />
                            <DrawerFifthInsideItem Title='Cookies' />
                            <DrawerFifthInsideItem Title='Copyright' />
                            <DrawerFifthInsideItem Title='User Info' />
                            <DrawerFifthInsideItem Title='Accessibility' />
                            <DrawerFifthInsideItem Title='Disclaimers' />
                        </View>
                    } />
                <Spacer size={size.sh} />
                <View style={{ height: 2, backgroundColor: '#1F4B92' }} />
                <Spacer size={size.mid} />
                <Text style={{ color: '#C1D8FF', marginLeft: 15, fontSize: responsiveFontSize(1.6), }}>USER T'S & C'S</Text>
                <Spacer size={size.sh} />
                <DrawerFifthItems Logo={
                    <General width={25} height={25} />
                } Title='General' ExpandedView={
                    <View style={{ backgroundColor: '#1F4B92', borderRadius: 8, paddingHorizontal: 10, margin: 10 }}>
                        <DrawerFifthInsideItem Title='User' />
                        <DrawerFifthInsideItem Title='Business' />
                        <DrawerFifthInsideItem Title='Buying & Selling' />
                        <DrawerFifthInsideItem Title='Law Enforcement' isHighlighted={true} />
                    </View>
                } />
                <Spacer size={size.sh} />
                <View style={{ height: 2, backgroundColor: '#1F4B92' }} />
                <Spacer size={size.mid} />
                <Text style={{ color: '#C1D8FF', marginLeft: 15, fontSize: responsiveFontSize(1.6), }}>PROMOTION T'S & C'S</Text>
                <Spacer size={size.sh} />
                <DrawerFifthItems Logo={
                    <BannerAds width={25} height={25} />
                } Title='Banner Ads' ExpandedView={
                    <View style={{ backgroundColor: '#1F4B92', borderRadius: 8, paddingHorizontal: 10, margin: 10 }}>
                        <DrawerFifthInsideItem Title='AD Policies' />
                        <DrawerFifthInsideItem Title='AD Creative Specs' />
                        <DrawerFifthInsideItem Title='Self-Service Ads' />
                        <DrawerFifthInsideItem Title='AD Payment' isHighlighted={true} />
                    </View>
                } />
                <Spacer size={size.sh} />
                <View style={{ height: 2, backgroundColor: '#1F4B92' }} />
                <Spacer size={size.mid} />
                <Text style={{ color: '#C1D8FF', marginLeft: 15, fontSize: responsiveFontSize(1.6), }}>SERVICE T'S & C'S</Text>
                <Spacer size={size.sh} />
                <DrawerFifthItems Logo={
                    <Directory width={25} height={25} />
                } Title='Directory' />
                <DrawerFifthItems Logo={
                    <Marketplace width={25} height={25} fill='white' />
                } Title='Marketplace' />
                <DrawerFifthItems Logo={
                    <Community width={25} height={25} />
                } Title='Community' ExpandedView={
                    <View style={{ backgroundColor: '#1F4B92', borderRadius: 8, paddingHorizontal: 10, margin: 10 }}>
                        <DrawerFifthInsideItem Title='Respect' />
                        <DrawerFifthInsideItem Title='Discrimination' />
                        <DrawerFifthInsideItem Title='Discussion' />
                        <DrawerFifthInsideItem Title='Identity' isHighlighted={true} />
                        <DrawerFifthInsideItem Title='Activity' isHighlighted={true} />
                    </View>
                } />
                <DrawerFifthItems Logo={
                    <Other width={25} height={25} />
                } Title='Others' ExpandedView={
                    <View style={{ backgroundColor: '#1F4B92', borderRadius: 8, paddingHorizontal: 10, margin: 10 }}>
                        <DrawerFifthInsideItem Title='Deals & Coupons' />
                        <DrawerFifthInsideItem Title='Delivery' />
                        <DrawerFifthInsideItem Title='Jobs' isHighlighted={true} />
                        <DrawerFifthInsideItem Title='Events' />
                        <DrawerFifthInsideItem Title='Webinar' />
                        <DrawerFifthInsideItem Title='Forum' />
                        <DrawerFifthInsideItem Title='E-Learning' />
                        <DrawerFifthInsideItem Title='Rfq' />
                        <DrawerFifthInsideItem Title='Contribute' />
                        <DrawerFifthInsideItem Title='Delivery' />
                        <DrawerFifthInsideItem Title='Marketing' />
                    </View>
                } />
                <DrawerFifthItems Logo={
                    <Xzit width={25} height={25} />
                } Title='Xzibit' />
                <DrawerFifthItems Logo={
                    <Govt width={25} height={25} />
                } Title='Government' />
                <DrawerFifthItems Logo={
                    <Xclub width={25} height={25} />
                } Title='X-club' />
                <Spacer size={size.sh} />
                <View style={{ height: 2, backgroundColor: '#1F4B92' }} />
                <Spacer size={size.mid} />

            </ScrollView>
        </View>
    )
}

export default CustomDrawer5