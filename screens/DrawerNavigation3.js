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
import CustomDrawer3 from './CustomDrawer3';
import LeftDrawerNavigation3 from './DrawerNavigation4';
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

const LeftDrawer2 = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LeftDrawerNavigation2 = () => {
    return (
        <LeftDrawer2.Navigator
            useLegacyImplementation
            id='left_drawer2'
            initialRouteName="LeftDrawer3"
            drawerContent={CustomDrawer3}
            screenOptions={{ swipeEnabled: false, drawerStyle: { width: windowWidth * 0.60 }, drawerPosition: "left", overlayColor: 'transparent', }}>
            <LeftDrawer2.Screen name="Home" options={{ headerShown: false, }} component={HomeScreen} />
            <LeftDrawer2.Screen name="Service" options={{ headerShown: false, }} component={ServiceScreen} />
            <LeftDrawer2.Screen name="ServiceCity" options={{ headerShown: false, }} component={ServiceCityScreen} />
            <LeftDrawer2.Screen name="LeftDrawer3" options={{ headerShown: false, }} component={LeftDrawerNavigation3} />
            <LeftDrawer2.Screen name="Invited" options={{ headerShown: false, }} component={InvitedScreen} />
            <LeftDrawer2.Screen name="InvitedCity" options={{ headerShown: false, }} component={InvitedCityScreen} />
            <LeftDrawer2.Screen name="SignUp" options={{ headerShown: false, }} component={SignUpScreen} />
            <LeftDrawer2.Screen name="UserSignUp" options={{ headerShown: false, }} component={UserSignUpScreen} />
            <LeftDrawer2.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <LeftDrawer2.Screen name="Legal" options={{ headerShown: false }} component={LegalDash} />
            <LeftDrawer2.Screen name="UserLogin" options={{ headerShown: false }} component={UserLoginScreen} />
            <LeftDrawer2.Screen name="Contact" options={{ headerShown: false }} component={ContactUsScreen} />
            <LeftDrawer2.Screen name="Report" options={{ headerShown: false }} component={ReportLogScreen} />
            <LeftDrawer2.Screen name="UserReport" options={{ headerShown: false }} component={UserReportLogScreen} />
            <LeftDrawer2.Screen name="HomeDirectory" options={{ headerShown: false, }} component={HomeDirectory} />
            <LeftDrawer2.Screen name="HelpCenter" options={{ headerShown: false, }} component={HelpCenter} />
            <LeftDrawer2.Screen name="Listning" options={{ headerShown: false, }} component={ListningScreen} />
            <LeftDrawer2.Screen name="Detail" options={{ headerShown: false, }} component={DetailsScreen} />
            <LeftDrawer2.Screen name="CityTown" options={{ headerShown: false, }} component={CityTownScreen} />
            <LeftDrawer2.Screen name="Pricing" options={{ headerShown: false, }} component={Pricing} />
            <LeftDrawer2.Screen name="Part" options={{ headerShown: false, }} component={PartnerManagerScreen} />
            <LeftDrawer2.Screen name="FeedbackHome" options={{ headerShown: false, }} component={FeedbackHome} />
            <LeftDrawer2.Screen name="FeedbackFirst" options={{ headerShown: false, }} component={FeedbackFirstScreen} />
            <LeftDrawer2.Screen name="FeedbackSec" options={{ headerShown: false, }} component={FeedbackSecondScreen} />
            <LeftDrawer2.Screen name="FeedbackThird" options={{ headerShown: false, }} component={FeedbackThirdScreen} />
            <LeftDrawer2.Screen name="FeedbackFourth" options={{ headerShown: false, }} component={FeedbackFouthScreen} />
            <LeftDrawer2.Screen name="FeedbackFifth" options={{ headerShown: false, }} component={FeedbackFifthScreen} />
            <LeftDrawer2.Screen name="FeedbackSixth" options={{ headerShown: false, }} component={FeedbackSixthScreen} />
            <LeftDrawer2.Screen name="FeedbackSeventh" options={{ headerShown: false, }} component={FeedbackSeventhScreen} />
            <LeftDrawer2.Screen name="FeedbackEight" options={{ headerShown: false, }} component={FeedbackEightScreen} />
            <LeftDrawer2.Screen name="FeedbackNineth" options={{ headerShown: false, }} component={FeedbackNinethScreen} />
            <LeftDrawer2.Screen name="FeedbackTenth" options={{ headerShown: false, }} component={FeedbackTenthScreen} />
            <LeftDrawer2.Screen name="FeedbackEleven" options={{ headerShown: false, }} component={FeedbackEleventhScreen} />
            <LeftDrawer2.Screen name="FeedbackCompleted" options={{ headerShown: false, }} component={FeedbackCompletedScreen} />
            <LeftDrawer2.Screen name="Term" options={{ headerShown: false, }} component={TermOfUse} />

        </LeftDrawer2.Navigator>
    )
}

export default LeftDrawerNavigation2