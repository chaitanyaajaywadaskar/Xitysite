import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ServiceScreen from './ServiceScreen';
import InvitedScreen from './InvitedScreen';
import SignUpScreen from './Signup';
import LoginScreen from './LoginScreen';
import ReportLogScreen from './ReportScreen';
import HomeDirectory from './HomeDirectory';
import ContactUsScreen from './ContactUsScreen';
import ListningScreen from './ListningScreen';
import DetailsScreen from './DetailsScreen';
import CityTownScreen from './CityTownScreen';
import CustomDrawer2 from './CustomDrawer2';
import LeftDrawerNavigation2 from './DrawerNavigation3';
import HomeScreen from './HomeScreen';
import UserLoginScreen from './UserLoginScreen';
import UserSignUpScreen from './UserSignUpScreen';
import ServiceCityScreen from './ServiceCityScreen';
import InvitedCityScreen from './InvitedCityScreen';
import HelpCenter from './HelpCenter';
import Pricing from './Pricing';
import PartnerManagerScreen from './PartnerManagerScreen';
import LegalDash from './LegalDash';
import UserReportLogScreen from './UserReportScreen';
import FeedbackHome from './FeedbackHome';
import FeedbackFirstScreen from './FeedbackFirstScreen';
import FeedbackSecondScreen from './FeedbackSecScreen';
import FeedbackThirdScreen from './FeedbackThirdScreen';
import FeedbackFouthScreen from './FeebackFourthScreen';
import FeedbackFifthScreen from './FeedbackFifthScreen';
import FeedbackSixthScreen from './FeebackSixthScreen';
import FeedbackSeventhScreen from './FeedbackSeventhScreen';
import FeedbackEightScreen from './FeedbackEightScreen';
import FeedbackNinethScreen from './FeebackNinethScreen';
import FeedbackTenthScreen from './FeedbackTenthScreen';
import FeedbackEleventhScreen from './FeedbackEleventhScreen';
import FeedbackCompletedScreen from './FeedbackCompletedScreen';
import TermOfUse from './TermOfUse';
const RightDrawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RightDrawerNavigation = () => {
    return (
        <RightDrawer.Navigator
            useLegacyImplementation
            id='right_drawer'
            initialRouteName="Leftdrawer2"
            drawerContent={CustomDrawer2}
            screenOptions={{ swipeEnabled: false, drawerStyle: { width: windowWidth * 0.8 }, drawerPosition: "right", overlayColor: 'transparent', }}>
            <RightDrawer.Screen name="Home" options={{ headerShown: false, }} component={HomeScreen} />
            <RightDrawer.Screen name="Service" options={{ headerShown: false, }} component={ServiceScreen} />
            <RightDrawer.Screen name="ServiceCity" options={{ headerShown: false, }} component={ServiceCityScreen} />
            <RightDrawer.Screen name="Leftdrawer2" options={{ headerShown: false, }} component={LeftDrawerNavigation2} />
            <RightDrawer.Screen name="Invited" options={{ headerShown: false, }} component={InvitedScreen} />
            <RightDrawer.Screen name="InvitedCity" options={{ headerShown: false, }} component={InvitedCityScreen} />
            <RightDrawer.Screen name="SignUp" options={{ headerShown: false, }} component={SignUpScreen} />
            <RightDrawer.Screen name="UserSignUp" options={{ headerShown: false, }} component={UserSignUpScreen} />
            <RightDrawer.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <RightDrawer.Screen name="Legal" options={{ headerShown: false }} component={LegalDash} />
            <RightDrawer.Screen name="UserLogin" options={{ headerShown: false }} component={UserLoginScreen} />
            <RightDrawer.Screen name="Contact" options={{ headerShown: false }} component={ContactUsScreen} />
            <RightDrawer.Screen name="Report" options={{ headerShown: false }} component={ReportLogScreen} />
            <RightDrawer.Screen name="UserReport" options={{ headerShown: false }} component={UserReportLogScreen} />
            <RightDrawer.Screen name="HomeDirectory" options={{ headerShown: false, }} component={HomeDirectory} />
            <RightDrawer.Screen name="HelpCenter" options={{ headerShown: false, }} component={HelpCenter} />
            <RightDrawer.Screen name="Listning" options={{ headerShown: false, }} component={ListningScreen} />
            <RightDrawer.Screen name="Detail" options={{ headerShown: false, }} component={DetailsScreen} />
            <RightDrawer.Screen name="CityTown" options={{ headerShown: false, }} component={CityTownScreen} />
            <RightDrawer.Screen name="Pricing" options={{ headerShown: false, }} component={Pricing} />
            <RightDrawer.Screen name="Part" options={{ headerShown: false, }} component={PartnerManagerScreen} />
            <RightDrawer.Screen name="FeedbackHome" options={{ headerShown: false, }} component={FeedbackHome} />
            <RightDrawer.Screen name="FeedbackFirst" options={{ headerShown: false, }} component={FeedbackFirstScreen} />
            <RightDrawer.Screen name="FeedbackSec" options={{ headerShown: false, }} component={FeedbackSecondScreen} />
            <RightDrawer.Screen name="FeedbackThird" options={{ headerShown: false, }} component={FeedbackThirdScreen} />
            <RightDrawer.Screen name="FeedbackFourth" options={{ headerShown: false, }} component={FeedbackFouthScreen} />
            <RightDrawer.Screen name="FeedbackFifth" options={{ headerShown: false, }} component={FeedbackFifthScreen} />
            <RightDrawer.Screen name="FeedbackSixth" options={{ headerShown: false, }} component={FeedbackSixthScreen} />
            <RightDrawer.Screen name="FeedbackSeventh" options={{ headerShown: false, }} component={FeedbackSeventhScreen} />
            <RightDrawer.Screen name="FeedbackEight" options={{ headerShown: false, }} component={FeedbackEightScreen} />
            <RightDrawer.Screen name="FeedbackNineth" options={{ headerShown: false, }} component={FeedbackNinethScreen} />
            <RightDrawer.Screen name="FeedbackTenth" options={{ headerShown: false, }} component={FeedbackTenthScreen} />
            <RightDrawer.Screen name="FeedbackEleven" options={{ headerShown: false, }} component={FeedbackEleventhScreen} />
            <RightDrawer.Screen name="FeedbackCompleted" options={{ headerShown: false, }} component={FeedbackCompletedScreen} />
            <RightDrawer.Screen name="Term" options={{ headerShown: false, }} component={TermOfUse} />

        </RightDrawer.Navigator>
    )
}

export default RightDrawerNavigation