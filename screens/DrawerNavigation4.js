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
import CustomDrawer4 from './CustomDrawer4';
import HomeScreen from './HomeScreen';
import UserLoginScreen from './UserLoginScreen';
import UserSignUpScreen from './UserSignUpScreen';
import ServiceCityScreen from './ServiceCityScreen';
import InvitedCityScreen from './InvitedCityScreen';
import HelpCenter from './HelpCenter';
import LegalDash from './LegalDash';
import Pricing from './Pricing';
import PartnerManagerScreen from './PartnerManagerScreen';
import LeftDrawerNavigation4 from './DrawerNavigator5';
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

const LeftDrawer3 = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LeftDrawerNavigation3 = () => {
    return (
        <LeftDrawer3.Navigator
            useLegacyImplementation
            id='left_drawer3'
            initialRouteName="LeftDrawer4"
            drawerContent={CustomDrawer4}
            screenOptions={{ swipeEnabled: false, drawerStyle: { width: windowWidth / 2 }, drawerPosition: "left", overlayColor: 'transparent', }}>
            <LeftDrawer3.Screen name="LeftDrawer4" options={{ headerShown: false, }} component={LeftDrawerNavigation4} />
            <LeftDrawer3.Screen name="Home" options={{ headerShown: false, }} component={HomeScreen} />
            <LeftDrawer3.Screen name="Service" options={{ headerShown: false, }} component={ServiceScreen} />
            <LeftDrawer3.Screen name="ServiceCity" options={{ headerShown: false, }} component={ServiceCityScreen} />
            <LeftDrawer3.Screen name="Invited" options={{ headerShown: false, }} component={InvitedScreen} />
            <LeftDrawer3.Screen name="InvitedCity" options={{ headerShown: false, }} component={InvitedCityScreen} />
            <LeftDrawer3.Screen name="SignUp" options={{ headerShown: false, }} component={SignUpScreen} />
            <LeftDrawer3.Screen name="UserSignUp" options={{ headerShown: false, }} component={UserSignUpScreen} />
            <LeftDrawer3.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <LeftDrawer3.Screen name="Legal" options={{ headerShown: false }} component={LegalDash} />
            <LeftDrawer3.Screen name="UserLogin" options={{ headerShown: false }} component={UserLoginScreen} />
            <LeftDrawer3.Screen name="Contact" options={{ headerShown: false }} component={ContactUsScreen} />
            <LeftDrawer3.Screen name="Report" options={{ headerShown: false }} component={ReportLogScreen} />
            <LeftDrawer3.Screen name="UserReport" options={{ headerShown: false }} component={UserReportLogScreen} />
            <LeftDrawer3.Screen name="HomeDirectory" options={{ headerShown: false, }} component={HomeDirectory} />
            <LeftDrawer3.Screen name="HelpCenter" options={{ headerShown: false, }} component={HelpCenter} />
            <LeftDrawer3.Screen name="Listning" options={{ headerShown: false, }} component={ListningScreen} />
            <LeftDrawer3.Screen name="Detail" options={{ headerShown: false, }} component={DetailsScreen} />
            <LeftDrawer3.Screen name="CityTown" options={{ headerShown: false, }} component={CityTownScreen} />
            <LeftDrawer3.Screen name="Pricing" options={{ headerShown: false, }} component={Pricing} />
            <LeftDrawer3.Screen name="Part" options={{ headerShown: false, }} component={PartnerManagerScreen} />
            <LeftDrawer3.Screen name="FeedbackHome" options={{ headerShown: false, }} component={FeedbackHome} />
            <LeftDrawer3.Screen name="FeedbackFirst" options={{ headerShown: false, }} component={FeedbackFirstScreen} />
            <LeftDrawer3.Screen name="FeedbackSec" options={{ headerShown: false, }} component={FeedbackSecondScreen} />
            <LeftDrawer3.Screen name="FeedbackThird" options={{ headerShown: false, }} component={FeedbackThirdScreen} />
            <LeftDrawer3.Screen name="FeedbackFourth" options={{ headerShown: false, }} component={FeedbackFouthScreen} />
            <LeftDrawer3.Screen name="FeedbackFifth" options={{ headerShown: false, }} component={FeedbackFifthScreen} />
            <LeftDrawer3.Screen name="FeedbackSixth" options={{ headerShown: false, }} component={FeedbackSixthScreen} />
            <LeftDrawer3.Screen name="FeedbackSeventh" options={{ headerShown: false, }} component={FeedbackSeventhScreen} />
            <LeftDrawer3.Screen name="FeedbackEight" options={{ headerShown: false, }} component={FeedbackEightScreen} />
            <LeftDrawer3.Screen name="FeedbackNineth" options={{ headerShown: false, }} component={FeedbackNinethScreen} />
            <LeftDrawer3.Screen name="FeedbackTenth" options={{ headerShown: false, }} component={FeedbackTenthScreen} />
            <LeftDrawer3.Screen name="FeedbackEleven" options={{ headerShown: false, }} component={FeedbackEleventhScreen} />
            <LeftDrawer3.Screen name="FeedbackCompleted" options={{ headerShown: false, }} component={FeedbackCompletedScreen} />
            <LeftDrawer3.Screen name="Term" options={{ headerShown: false, }} component={TermOfUse} />

        </LeftDrawer3.Navigator>
    )
}

export default LeftDrawerNavigation3