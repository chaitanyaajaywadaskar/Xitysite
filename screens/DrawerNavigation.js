import { Dimensions } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ServiceScreen from './ServiceScreen';
import CustomDrawer from './CustomDrawer';
import InvitedScreen from './InvitedScreen';
import SignUpScreen from './Signup';
import LoginScreen from './LoginScreen';
import ContactUsScreen from './ContactUsScreen';
import ReportLogScreen from './ReportScreen';
import HomeDirectory from './HomeDirectory';
import ListningScreen from './ListningScreen';
import DetailsScreen from './DetailsScreen';
import CityTownScreen from './CityTownScreen';
import RightDrawerNavigation from './DrawerNavigation2';
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LeftDrawer = createDrawerNavigator();

const LeftDrawerNavigation = () => {
    return (
        <LeftDrawer.Navigator
            id='left_drawer'
            initialRouteName="RightDrawer"
            drawerContent={CustomDrawer}
            screenOptions={{ swipeEnabled: false, drawerStyle: { width: windowWidth / 2 }, overlayColor: 'transparent', }}>
            <LeftDrawer.Screen name="Home" options={{ headerShown: false, }} component={HomeScreen} />
            <LeftDrawer.Screen name="Service" options={{ headerShown: false, }} component={ServiceScreen} />
            <LeftDrawer.Screen name="ServiceCity" options={{ headerShown: false, }} component={ServiceCityScreen} />
            <LeftDrawer.Screen name="RightDrawer" options={{ headerShown: false, }} component={RightDrawerNavigation} />
            <LeftDrawer.Screen name="Invited" options={{ headerShown: false, }} component={InvitedScreen} />
            <LeftDrawer.Screen name="InvitedCity" options={{ headerShown: false, }} component={InvitedCityScreen} />
            <LeftDrawer.Screen name="SignUp" options={{ headerShown: false, }} component={SignUpScreen} />
            <LeftDrawer.Screen name="UserSignUp" options={{ headerShown: false, }} component={UserSignUpScreen} />
            <LeftDrawer.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <LeftDrawer.Screen name="Legal" options={{ headerShown: false }} component={LegalDash} />
            <LeftDrawer.Screen name="UserLogin" options={{ headerShown: false }} component={UserLoginScreen} />
            <LeftDrawer.Screen name="Contact" options={{ headerShown: false }} component={ContactUsScreen} />
            <LeftDrawer.Screen name="Report" options={{ headerShown: false }} component={ReportLogScreen} />
            <LeftDrawer.Screen name="UserReport" options={{ headerShown: false }} component={UserReportLogScreen} />
            <LeftDrawer.Screen name="HomeDirectory" options={{ headerShown: false, }} component={HomeDirectory} />
            <LeftDrawer.Screen name="HelpCenter" options={{ headerShown: false, }} component={HelpCenter} />
            <LeftDrawer.Screen name="Listning" options={{ headerShown: false, }} component={ListningScreen} />
            <LeftDrawer.Screen name="Detail" options={{ headerShown: false, }} component={DetailsScreen} />
            <LeftDrawer.Screen name="CityTown" options={{ headerShown: false, }} component={CityTownScreen} />
            <LeftDrawer.Screen name="Pricing" options={{ headerShown: false, }} component={Pricing} />
            <LeftDrawer.Screen name="Part" options={{ headerShown: false, }} component={PartnerManagerScreen} />
            <LeftDrawer.Screen name="FeedbackHome" options={{ headerShown: false, }} component={FeedbackHome} />
            <LeftDrawer.Screen name="FeedbackFirst" options={{ headerShown: false, }} component={FeedbackFirstScreen} />
            <LeftDrawer.Screen name="FeedbackSec" options={{ headerShown: false, }} component={FeedbackSecondScreen} />
            <LeftDrawer.Screen name="FeedbackThird" options={{ headerShown: false, }} component={FeedbackThirdScreen} />
            <LeftDrawer.Screen name="FeedbackFourth" options={{ headerShown: false, }} component={FeedbackFouthScreen} />
            <LeftDrawer.Screen name="FeedbackFifth" options={{ headerShown: false, }} component={FeedbackFifthScreen} />
            <LeftDrawer.Screen name="FeedbackSixth" options={{ headerShown: false, }} component={FeedbackSixthScreen} />
            <LeftDrawer.Screen name="FeedbackSeventh" options={{ headerShown: false, }} component={FeedbackSeventhScreen} />
            <LeftDrawer.Screen name="FeedbackEight" options={{ headerShown: false, }} component={FeedbackEightScreen} />
            <LeftDrawer.Screen name="FeedbackNineth" options={{ headerShown: false, }} component={FeedbackNinethScreen} />
            <LeftDrawer.Screen name="FeedbackTenth" options={{ headerShown: false, }} component={FeedbackTenthScreen} />
            <LeftDrawer.Screen name="FeedbackEleven" options={{ headerShown: false, }} component={FeedbackEleventhScreen} />
            <LeftDrawer.Screen name="FeedbackCompleted" options={{ headerShown: false, }} component={FeedbackCompletedScreen} />
            <LeftDrawer.Screen name="Term" options={{ headerShown: false, }} component={TermOfUse} />
        </LeftDrawer.Navigator>
    )
}


export default LeftDrawerNavigation