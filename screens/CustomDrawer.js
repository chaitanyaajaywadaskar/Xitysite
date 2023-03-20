import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from './Icons/IconsSet';
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import { ScrollView } from 'react-native-gesture-handler'
import DrawerNormalItem from './DrawerNormalItem'
import DrawerTranspyContainer from './DrawerTranspyContainer'
import GestureDrawerContext from './DrawerContext'
import IMAGES from '../constants/ImagesContant';

const CustomDrawer = ({ navigation }) => {
    const [isHelp, setHelp] = useState(false);
    const [isAbout, setAbout] = useState(false);
    const [isSupport, setSupport] = useState(false);
    const [drawerVal, setDrawerVal] = useState(false);

    return (
        <GestureDrawerContext.Provider value={drawerVal}>
            <View style={styles.main}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Home')
                }} style={styles.blueContainer}>
                    <Image source={IMAGES.HOME} style={styles.imgView} />
                    <SpacerHorizontal size={size.mid} />
                    <Text style={styles.textStyle}>HOME</Text>
                </TouchableOpacity>
                <ScrollView>
                    <Spacer size={size.lg} />
                    {/*  <DrawerNormalItem onPress={() => {
                        // navigation.closeDrawer()
                        // setDrawerVal(true)
                        // navigation.navigate('Part')
                        navigation.getParent('left_drawer3').openDrawer()

                    }} img={User} name='My Account' />

                    <DrawerNormalItem img={Service} name='Services' /> */}
                    <DrawerTranspyContainer isClick={isSupport} img={IMAGES.HELP} onPress={() => {
                        setSupport(!isSupport)
                    }} name='Support' />
                    {isSupport && <View><DrawerNormalItem img={IMAGES.CALL} name='Contact Us' onPress={() => {
                        navigation.navigate('Contact')
                    }} />
                        <DrawerNormalItem img={IMAGES.FEEDBACK} name='Feedback' onPress={() => {
                            navigation.navigate('FeedbackHome')
                        }} />
                        <DrawerNormalItem img={IMAGES.FEEDBACK} name='Customer Care' />
                        <DrawerTranspyContainer isClick={isHelp} img={IMAGES.HELP} onPress={() => {
                            setHelp(!isHelp)
                        }} name='Help Center' />
                        {isHelp && <View style={{ paddingLeft: 20 }}>
                            <DrawerNormalItem onPress={() => {
                                navigation.navigate('HelpCenter')
                            }} img={IMAGES.QUE} name='FAQ' />
                            <DrawerNormalItem img={IMAGES.TUT} name='Tutorials' />
                            <DrawerNormalItem img={IMAGES.FORUM} name='Forum' />
                        </View>}</View>}
                    <DrawerNormalItem onPress={() => {
                        navigation.navigate('Legal')
                    }} img={IMAGES.LEGAL} name='Legal' />
                    {/* <Spacer size={size.mid} /> */}
                    <DrawerTranspyContainer isClick={isAbout} img={IMAGES.INFO} onPress={() => {
                        setAbout(!isAbout)
                    }} name='About' />
                    {isAbout && <View>
                        <DrawerNormalItem img={IMAGES.COMPANY} name='Ornda Agency' />
                        <DrawerNormalItem img={IMAGES.PROJECT} onPress={() => {
                            navigation.navigate('Part')

                        }} name='Xity Project' />
                    </View>
                    }
                    {/* <DrawerNormalItem onPress={() => {
                        navigation.closeDrawer()
                    }} img={Grow} name='Markets' /> */}
                    <DrawerNormalItem onPress={() => {
                        navigation.navigate('Pricing')

                    }} img={IMAGES.PRICE} name='Pricing' />
                    <Spacer size={size.lg} />
                </ScrollView>
                <View style={[styles.blueContainer, { justifyContent: 'space-between' }]}>
                    <Image source={IMAGES.LOGO} resizeMode='contain' style={styles.logo} />
                    <View style={{ backgroundColor: 'white', width: 1.5 }} />
                    <TouchableOpacity onPress={() => {
                        navigation.getParent('left_drawer').closeDrawer()

                    }} style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 20, height: 35, width: 35, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderRadius: 35 / 2, backgroundColor: '#4286F5' }}>

                            <Icons.Entypo name={'cross'} color='white' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>


            </View></GestureDrawerContext.Provider>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: '#4286F5' },
    blueContainer: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: '#0C3982',
        flexDirection: 'row',
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row'
    },
    imgView: {
        width: 23,
        height: 23,
        alignSelf: 'center'
    },
    logo: {
        width: 80,
        height: 40
    },
    textStyle: { color: 'white', fontSize: 18, fontWeight: '700', alignSelf: 'center' }
})