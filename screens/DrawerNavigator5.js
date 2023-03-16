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
import HomeScreen from './HomeScreen';
import UserLoginScreen from './UserLoginScreen';
import UserSignUpScreen from './UserSignUpScreen';
import ServiceCityScreen from './ServiceCityScreen';
import InvitedCityScreen from './InvitedCityScreen';
import HelpCenter from './HelpCenter';
import LegalDash from './LegalDash';
import Pricing from './Pricing';
import PartnerManagerScreen from './PartnerManagerScreen';
import CustomDrawer5 from './CustomDrawer5';
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

const LeftDrawer4 = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LeftDrawerNavigation4 = () => {
    return (
        <LeftDrawer4.Navigator
            useLegacyImplementation
            id='left_drawer4'
            initialRouteName="Home"
            drawerContent={CustomDrawer5}
            screenOptions={{ swipeEnabled: false, drawerStyle: { width: windowWidth * 0.7 }, drawerPosition: "left", overlayColor: 'transparent', }}>
            <LeftDrawer4.Screen name="Home" options={{ headerShown: false, }} component={HomeScreen} />
            <LeftDrawer4.Screen name="Service" options={{ headerShown: false, }} component={ServiceScreen} />
            <LeftDrawer4.Screen name="ServiceCity" options={{ headerShown: false, }} component={ServiceCityScreen} />
            <LeftDrawer4.Screen name="Invited" options={{ headerShown: false, }} component={InvitedScreen} />
            <LeftDrawer4.Screen name="InvitedCity" options={{ headerShown: false, }} component={InvitedCityScreen} />
            <LeftDrawer4.Screen name="SignUp" options={{ headerShown: false, }} component={SignUpScreen} />
            <LeftDrawer4.Screen name="UserSignUp" options={{ headerShown: false, }} component={UserSignUpScreen} />
            <LeftDrawer4.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <LeftDrawer4.Screen name="Legal" options={{ headerShown: false }} component={LegalDash} />
            <LeftDrawer4.Screen name="UserLogin" options={{ headerShown: false }} component={UserLoginScreen} />
            <LeftDrawer4.Screen name="Contact" options={{ headerShown: false }} component={ContactUsScreen} />
            <LeftDrawer4.Screen name="Report" options={{ headerShown: false }} component={ReportLogScreen} />
            <LeftDrawer4.Screen name="UserReport" options={{ headerShown: false }} component={UserReportLogScreen} />
            <LeftDrawer4.Screen name="HomeDirectory" options={{ headerShown: false, }} component={HomeDirectory} />
            <LeftDrawer4.Screen name="HelpCenter" options={{ headerShown: false, }} component={HelpCenter} />
            <LeftDrawer4.Screen name="Listning" options={{ headerShown: false, }} component={ListningScreen} />
            <LeftDrawer4.Screen name="Detail" options={{ headerShown: false, }} component={DetailsScreen} />
            <LeftDrawer4.Screen name="CityTown" options={{ headerShown: false, }} component={CityTownScreen} />
            <LeftDrawer4.Screen name="Pricing" options={{ headerShown: false, }} component={Pricing} />
            <LeftDrawer4.Screen name="Part" options={{ headerShown: false, }} component={PartnerManagerScreen} />
            <LeftDrawer4.Screen name="FeedbackHome" options={{ headerShown: false, }} component={FeedbackHome} />
            <LeftDrawer4.Screen name="FeedbackFirst" options={{ headerShown: false, }} component={FeedbackFirstScreen} />
            <LeftDrawer4.Screen name="FeedbackSec" options={{ headerShown: false, }} component={FeedbackSecondScreen} />
            <LeftDrawer4.Screen name="FeedbackThird" options={{ headerShown: false, }} component={FeedbackThirdScreen} />
            <LeftDrawer4.Screen name="FeedbackFourth" options={{ headerShown: false, }} component={FeedbackFouthScreen} />
            <LeftDrawer4.Screen name="FeedbackFifth" options={{ headerShown: false, }} component={FeedbackFifthScreen} />
            <LeftDrawer4.Screen name="FeedbackSixth" options={{ headerShown: false, }} component={FeedbackSixthScreen} />
            <LeftDrawer4.Screen name="FeedbackSeventh" options={{ headerShown: false, }} component={FeedbackSeventhScreen} />
            <LeftDrawer4.Screen name="FeedbackEight" options={{ headerShown: false, }} component={FeedbackEightScreen} />
            <LeftDrawer4.Screen name="FeedbackNineth" options={{ headerShown: false, }} component={FeedbackNinethScreen} />
            <LeftDrawer4.Screen name="FeedbackTenth" options={{ headerShown: false, }} component={FeedbackTenthScreen} />
            <LeftDrawer4.Screen name="FeedbackEleven" options={{ headerShown: false, }} component={FeedbackEleventhScreen} />
            <LeftDrawer4.Screen name="FeedbackCompleted" options={{ headerShown: false, }} component={FeedbackCompletedScreen} />
            <LeftDrawer4.Screen name="Term" options={{ headerShown: false, }} component={TermOfUse} />

        </LeftDrawer4.Navigator>
    )
}

export default LeftDrawerNavigation4