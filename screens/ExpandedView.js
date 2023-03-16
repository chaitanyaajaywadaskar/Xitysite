import { View, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'
import ExpandIconButton from './ExpandIconButton'
import { size } from './size'
import Spacer from './spacer'
import Fwrong from '../images/fwrong.png'
import FGrid from '../images/fgrid.png'
import FInternet from '../images/finternet.png'
import FThree from '../images/fthree.png'
import FUp from '../images/fuparrow.png'
import FUser from '../images/fuser.png'
import FFeedback from '../images/ffeedback.png'
import Fchat from '../images/fchat.png'
import Fmarket from '../images/fgrow.png'
import FService from '../images/fservices.png'
import Fside from '../images/fsidebar.png'
import Fmenu from '../images/fmenu.png'
import Fhome from '../images/fhome.png'
import FSearch from '../images/search.png'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
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
            <ExpandIconButton isThereText={false} Img={Fhome} onPress={props.onHomeClick} name='Home' isDark={true} />
            <Spacer size={size.sm} />
            <View style={{ height: 1, width: '100%', alignSelf: 'center', backgroundColor: '#8BB7FF' }} />
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
                <Spacer size={size.mid} />
                <ExpandIconButton isThereText={false} Img={Fmenu} onPress={props.onMenuClick} name='Main Menu ' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={FService} onPress={props.onSeviceClick} name='Services' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={FUser} onPress={props.onMyAccClick} name='My Account' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={Fside} onPress={() => { }} name='Sidebar' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={Fchat} onPress={() => { }} name='Chat' />

                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={FSearch} onPress={() => { }} name='Search' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={FUp} onPress={() => { }} name='Top Page' />

                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={FFeedback} onPress={() => { }} name='Feedback' />
                <Spacer size={size.sm} />
                <Image source={FThree} style={{ width: 20, height: 15, alignSelf: 'center' }} />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={Fmarket} onPress={props.onMarketsClick} name='Markets' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={FInternet} onPress={() => { }} name='Online services' />
                <Spacer size={size.sm} />
                <ExpandIconButton isThereText={false} Img={FGrid} onPress={() => { }} name='Third-party Apps' />
                <Spacer size={size.mid} />
            </ScrollView>
            <View style={{ height: 1, width: '100%', alignSelf: 'center', backgroundColor: '#8BB7FF' }} />
            <Spacer size={size.sm} />
            <ExpandIconButton isThereText={false} Img={Fwrong} onPress={props.onClose} name='Close' isDark={true} />

        </View>
    )
}

export default ExpandedView