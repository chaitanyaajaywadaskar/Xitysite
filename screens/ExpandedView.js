import { View, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'
import ExpandIconButton from './ExpandIconButton'
import { size } from './size'
import Spacer from './spacer'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;
const ExpandedView = (props) => {
    return (
        <View style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            width: 50,
            height: responsiveHeight(85),
            borderRadius: 8,
            padding: 5,
            backgroundColor: '#4286F5',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ExpandIconButton isThereText={false} Img={IMAGES.HOME} onPress={props.onHomeClick} name='Home' isDark={true} />
            <Spacer size={size.sm} />
            <View style={{ height: 1, width: '100%', alignSelf: 'center', backgroundColor: '#8BB7FF' }} />
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
                <Spacer size={size.mid} />
                <ExpandIconButton isThereText={false} Img={IMAGES.MENU} onPress={props.onMenuClick} name='Main Menu ' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.SERVICES} onPress={props.onSeviceClick} name='Services' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.USERICON} onPress={props.onMyAccClick} name='My Account' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.SIDEBAR} onPress={() => { }} name='Sidebar' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.CHAT} onPress={() => { }} name='Chat' />

                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.SEARCH} onPress={() => { }} name='Search' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.UPARROW} onPress={() => { }} name='Top Page' />

                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.FEEDBACK} onPress={() => { }} name='Feedback' />
                <Spacer size={size.sm} />
                <Image source={IMAGES.THREEMENU} style={{ width: 20, height: 15, alignSelf: 'center' }} />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.GROW} onPress={props.onMarketsClick} name='Markets' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.INTERNET} onPress={() => { }} name='Online services' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={IMAGES.GRID} onPress={() => { }} name='Third-party Apps' />
                <Spacer size={size.mid} />
            </ScrollView>
            <View style={{ height: 1, width: '100%', alignSelf: 'center', backgroundColor: '#8BB7FF' }} />
            <Spacer size={size.sm} />
            <ExpandIconButton isThereText={false} Img={IMAGES.WRONG} onPress={props.onClose} name='Close' isDark={true} />

        </View>
    )
}

export default ExpandedView