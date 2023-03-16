import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../images/xity.png'
import Icons from './Icons/IconsSet';
import PinkBg from '../images/pinkbg.png'
import CarImg from '../images/carsimg.png'
import Choco from '../images/chocoimg.png'
import Francise from '../images/francise.png'
import Furniture from '../images/furniture.png'
import Hr from '../images/hr.png'
import Reality from '../images/house.png'
import Hotel from '../images/hotel.png'
import Seafood from '../images/seafood.png'
import Talent from '../images/talent.png'
import Xpo from '../images/xpo.png'
import Spacer from './spacer';
import { size } from './size';
import DrawerImgItem from './DrawerImgItem';
const CustomDrawer2 = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <View style={styles.topView}>
                <Image source={Logo} style={styles.imageStyle} />
                <View style={styles.row42} >
                    <View style={styles.line} />
                    <TouchableOpacity onPress={() => {
                        navigation.getParent('right_drawer').closeDrawer()
                    }}>
                        <View style={styles.circleView}>

                            <Icons.Entypo name={'cross'} color='white' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ padding: 15 }}>
                <DrawerImgItem Img={CarImg} MainTitle='AUTOMOBILES' SubTitle="Automobiles and After Market" UnderlineText='Autochap.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={PinkBg} MainTitle='FASHION' SubTitle="Women's fashion & Sisterhood" UnderlineText='Holychic.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={Choco} MainTitle='FOOD & BEVARAGES' SubTitle="Food & Bevarages" UnderlineText='Chinmi.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={Francise} MainTitle='FRANCHISE' SubTitle="Liaisons and partners" UnderlineText='Franchiz.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={Furniture} MainTitle='FURNITURE' SubTitle="Home & office furniture" UnderlineText='Frnie.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={Hr} MainTitle='HR' SubTitle="Placements and development" UnderlineText='Hrita.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={Reality} MainTitle='REALITY' SubTitle="Properties & Accommodations" UnderlineText='Arazi.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={Seafood} MainTitle='SEAFOOD' SubTitle="Seafood & recipes" UnderlineText='Vrfshie.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={Talent} MainTitle='TALENT' SubTitle="Modern & Artists" UnderlineText='Zirka.in' />
                <Spacer size={size.sm} />
                <DrawerImgItem Img={Xpo} MainTitle='XPO' SubTitle="Exhibitions and launches" UnderlineText='Xzibit.in' />
                <Spacer size={size.sm} />

            </ScrollView>
            <View style={styles.topView}>
                <Text style={{ color: 'white', fontWeight: '700' }}>*Note: This site switcher are different sites. It is only for re-direction.  You can register an account to avail services on individual sites.</Text>
            </View>
        </View>
    )
}

export default CustomDrawer2

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    line: { height: '120%', alignSelf: 'center', backgroundColor: 'white', width: 1 },
    topView: {
        padding: 15,
        backgroundColor: '#0C3982',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    imageStyle: {
        height: 45,
        width: 75,
        borderRadius: 8,
    },
    row42: { flexDirection: 'row' },
    circleView: { marginLeft: 20, height: 35, width: 35, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderRadius: 35 / 2, backgroundColor: '#4286F5' }
})