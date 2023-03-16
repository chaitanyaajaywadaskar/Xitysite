import { View, Text, StyleSheet, Dimensions, TextInput, Image, Modal, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Icons from './Icons/IconsSet';
import SkateImg from '../images/skateimg.png'
import Map from '../images/map2.png'
import SliderImg from '../images/slider.png'
import Left from '../images/arrleft.png'
import Right from '../images/arrright.png'
import PinkBurger from '../images/pinkcircle.png'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import ResturantCard from './ResturantCard';
import ExpandedView from './ExpandedView';
import FloatButton from './FloatButton';
import BannerBlue from '../images/banner.png'
import QuickViewAlert from './QuickViewAlert';
import CategoriesAlert from './CategoriesAlert';
import BottomView from './BottomView';
import { Dropdown } from 'react-native-element-dropdown';
import CustomAppBar from './CustomAppBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ListningScreen = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [isSelected, setSelection] = useState(false);
    const [isMap, setMap] = useState(false);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);

    const data1 = [
        { label: 'Feature1 ', value: '1' },
        { label: 'Feature2', value: '2' },
        { label: 'Feature3', value: '3' },
        { label: 'Feature4', value: '4' },
        { label: 'Feature1', value: '5' },
        { label: 'Feature1', value: '6' },
        { label: 'Feature1', value: '7' },
        { label: 'Feature1', value: '8' },
    ];
    const data2 = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
    ];
    return (
        <Pressable onPress={() => {
            setExpand(false)
        }} style={styles.main}>
            <View>
                <CustomAppBar />
                <QuickViewAlert visible={modalVisible2} onCrossClick={() => { setModalVisible2(false); }} onRequestClose={() => { setModalVisible2(false); }} />
                <CategoriesAlert visible={modalVisible} onCrossClick={() => {
                    setModalVisible(false);
                }} onRequestClose={() => { }} sliderValue={sliderValue} isSelected={isSelected} setSelection={setSelection} setSliderValue={setSliderValue} />

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 60 }}>
                    <View style={styles.overlayContainer}>
                        {
                            isMap ?
                                <Image source={Map} style={styles.overlayImg} /> :
                                <Image source={SkateImg} style={styles.overlayImg} />
                        }
                        <View style={styles.breadcrumView}>
                            <Text style={styles.breadcrumText}>Home</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.blueArrow}>&gt;</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.breadcrumText}>Listings</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.blueArrow}>&gt;</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.breadcrumText}>New york</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.blueArrow}>&gt;</Text>
                            <SpacerHorizontal size={size.sm} />
                            <Text style={styles.breadcrumText}>Listing single</Text>
                        </View>
                        {isMap && <View style={{ height: 350, justifyContent: 'center', alignSelf: 'center' }}>
                            <Image source={BannerBlue} style={{ height: 180, alignSelf: 'center', position: 'absolute', justifyContent: 'center', borderRadius: 8, width: windowWidth * 0.7 }} />
                            <View style={{ position: 'absolute', right: -40, }}>
                                <TouchableOpacity style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: 'white' }}>
                                    <Icons.Entypo name={'plus'} size={20} color='#0C3982' style={{ alignSelf: 'center' }} />
                                </TouchableOpacity>
                                <Spacer size={size.sh} />
                                <TouchableOpacity style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: 'white' }}>
                                    <Icons.Entypo name={'minus'} size={20} color='#0C3982' style={{ alignSelf: 'center' }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ position: 'absolute', flexDirection: 'row', right: -40, bottom: 25 }}>
                                <TouchableOpacity style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: 'white' }}>
                                    <Icons.Entypo name={'chevron-left'} size={20} color='#0C3982' style={{ alignSelf: 'center' }} />
                                </TouchableOpacity>
                                <SpacerHorizontal size={size.sh} />
                                <TouchableOpacity style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: 'white' }}>
                                    <Icons.Entypo name={'chevron-right'} size={20} color='#0C3982' style={{ alignSelf: 'center' }} />
                                </TouchableOpacity>
                                <SpacerHorizontal size={size.sh} />
                                <TouchableOpacity style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: '#0C3982' }}>
                                    <Icons.MaterialIcons name={'my-location'} size={20} color='white' style={{ alignSelf: 'center' }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: windowWidth * 0.7, justifyContent: 'space-between', height: 180, }}>
                                <View style={{ flexDirection: 'row', paddingTop: 8, paddingHorizontal: 10, justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#00C899', flexDirection: 'row', height: 23, paddingHorizontal: 8, alignItems: 'center', borderRadius: 30 }}>
                                        <Icons.Feather name={'unlock'} size={12} color='white' style={{ alignSelf: 'center' }} />

                                        <Text style={{ color: 'white', marginLeft: 5, fontSize: 12, fontWeight: '600' }}>Open Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: "#0C3982", padding: 3, borderRadius: 6 }}>
                                        <Icons.Entypo name={'cross'} size={20} color='white' style={{ alignSelf: 'center' }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '100%', padding: 10, backgroundColor: 'white', borderRadius: 8 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icons.AntDesign name='checkcircle' size={15} color='#0EBC31' />
                                        <SpacerHorizontal size={size.sh} />
                                        <Icons.AntDesign name='checkcircle' size={15} color='#FFBB00' />
                                        <SpacerHorizontal size={size.sh} />
                                        <Text style={{ color: 'black', }}>Luxary Restaurant</Text>
                                    </View>
                                    <Image source={PinkBurger} resizeMode='contain' style={{ position: 'absolute', right: 25, top: -20, width: 40, height: 40 }} />

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icons.Entypo name='location-pin' size={15} color='#4286F5' />
                                            <SpacerHorizontal size={size.sh} />
                                            <Text style={{ color: 'black', fontSize: 9 }}>27th Brooklyn New York,USA-State| City | Pincode</Text>
                                        </View>
                                        <Icons.Ionicons name='swap-horizontal' size={15} color='#0C3982' />
                                    </View>
                                </View>

                            </View>
                        </View>}

                    </View>
                    <View style={styles.bottomOverlayView}>
                        <View style={styles.row42}>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(true)
                            }} style={styles.blueBox}>
                                <Image source={SliderImg} resizeMode={'contain'} style={styles.sliderImg} />
                            </TouchableOpacity>
                            <SpacerHorizontal size={size.sm} />
                            <View>
                                <Text style={styles.shortBold}>Results For :</Text>
                                <Text style={styles.largeText}>Pin code | Category Name</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => {
                            setMap(!isMap)
                        }} style={styles.blueBtn}>
                            <Text style={styles.blueBtnText}>{isMap ? 'Hide Map' : 'View on map'}</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer size={size.mid} />
                    <View style={styles.titleBtnView}>
                        <View style={styles.view42}>
                            <Text style={styles.largeText}>Sort By:  </Text>
                            <Dropdown
                                style={styles.dropdown}
                                containerStyle={styles.dropContainer}
                                selectedTextStyle={{ color: 'black' }}
                                renderRightIcon={() => (
                                    <Icons.Entypo name={isFocus1 ? 'chevron-up' : 'chevron-down'} color='#164677' size={20} />
                                )}
                                renderLeftIcon={() => (
                                    <Icons.Ionicons name='menu' color='#164677' size={20} style={{ marginRight: 5, }} />)}
                                data={data1}
                                maxHeight={80}
                                labelField="label"
                                valueField="value"
                                placeholder="Featured"
                                placeholderStyle={styles.placeholder}
                                value={value1}
                                onChange={item => {
                                    setValue1(item.value);
                                }}
                                onFocus={() => setIsFocus1(true)}
                                onBlur={() => setIsFocus1(false)}
                            />

                        </View>
                        <View style={styles.view42}>
                            <Text style={styles.largeText}>View:</Text>
                            <SpacerHorizontal size={size.sh} />
                            <Dropdown
                                style={styles.dropdown2}
                                containerStyle={styles.dropContainer2}
                                selectedTextStyle={{ color: 'black' }}
                                renderRightIcon={() => (
                                    <Icons.Entypo name={isFocus2 ? 'chevron-up' : 'chevron-down'} color='#164677' size={20} />
                                )}
                                renderLeftIcon={() => (
                                    <Icons.Entypo name='eye' size={18} color='#164677' style={{ marginRight: 5, }} />)}
                                data={data2}
                                maxHeight={80}
                                labelField="label"
                                valueField="value"
                                placeholder="9"
                                placeholderStyle={styles.placeholder}
                                value={value2}
                                onChange={item => {
                                    setValue2(item.value);
                                }}
                                onFocus={() => setIsFocus2(true)}
                                onBlur={() => setIsFocus2(false)}
                            />
                            {/* <View style={styles.icon2text1Btn}>
                            <Icons.Entypo name='eye' size={18} color='#164677' />
                            <SpacerHorizontal size={size.lg} />
                            <Text>9</Text>
                            <SpacerHorizontal size={size.lg} />

                            <Icons.Entypo name='chevron-down' size={15} color='#0C3982' />
                        </View> */}
                        </View>
                    </View>
                    <Spacer size={size.lg} />

                    <ResturantCard onEyeClick={() => {
                        setModalVisible2(true);
                    }} onPress={() => {
                        navigation.navigate('Detail')
                    }} />
                    <Spacer size={size.lg} />
                    <ResturantCard onPress={() => { }} />
                    <Spacer size={size.lg} />
                    <ResturantCard onPress={() => { }} />
                    <Spacer size={size.lg} />
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.arrowBtn}>
                            <Image source={Left} />
                        </TouchableOpacity>
                        <View style={styles.numBtn}>
                            <Text>1</Text>
                        </View>
                        <View style={styles.numBtn}>
                            <Text>2</Text>
                        </View>
                        <View style={styles.numBtn}>
                            <Text>...</Text>
                        </View>
                        <View style={styles.numBtn}>
                            <Text>15</Text>
                        </View>
                        <TouchableOpacity style={styles.arrowBtn}>
                            <Image source={Right} />
                        </TouchableOpacity>
                    </View>
                    <Spacer size={size.xxxlg} />
                    <BottomView />

                </ScrollView >
                {
                    isExpand ? <ExpandedView
                        onHomeClick={() => {
                            navigation.navigate('Home')
                            setExpand(false)
                        }}
                        onMyAccClick={() => {
                            navigation.getParent('left_drawer3').openDrawer()
                            setExpand(false)
                        }}
                        onSeviceClick={() => {
                            navigation.getParent('left_drawer2').openDrawer()
                            setExpand(false)

                        }}
                        onMarketsClick={() => {
                            navigation.getParent('right_drawer').openDrawer()
                            setExpand(false)

                        }}
                        onMenuClick={() => {
                            navigation.getParent('left_drawer').openDrawer()
                            setExpand(false)

                        }} onClose={() => { setExpand(false) }} /> : <FloatButton onPress={() => { setExpand(true) }} />
                }
            </View>

        </Pressable >
    )
}

export default ListningScreen

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    breadcrumView: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },
    breadcrumText: {
        fontSize: 15,
        fontWeight: '700'
    },
    blueArrow: {
        fontSize: 18,
        color: '#4286F5'
    },
    dropdown: {
        height: 40,
        width: 120,
        backgroundColor: '#F8F8F8',
        borderColor: '#EFEFEF',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 4
    },
    dropContainer2: {
        borderRadius: 8,
        marginTop: 5,
    },
    dropdown2: {
        height: 40,
        width: 80,
        backgroundColor: '#F8F8F8',
        borderColor: '#EFEFEF',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 4
    },
    dropContainer: {
        borderRadius: 8,
        marginTop: 5,
    },
    placeholder: {
        fontSize: 12
    },
    numBtn: { paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#EFF5FF' },
    bottomView: { flexDirection: "row", padding: 15, justifyContent: "space-between" },
    view42: { flexDirection: 'row', alignItems: "center" },
    icon2text1Btn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', borderColor: '#EFEFEF', borderWidth: 1, paddingVertical: 8, paddingHorizontal: 4 },
    titleBtnView: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 },
    blueBtnText: { color: 'white', fontWeight: '700', fontSize: 15 },
    blueBtn: { backgroundColor: '#4286F5', padding: 10, borderRadius: 6 },
    largeText: { fontSize: 15, fontWeight: '600' },
    shortBold: { fontWeight: '700', fontSize: 15 },
    overlayContainer: { height: 400, width: windowWidth },
    overlayImg: { position: 'absolute', height: 405, width: windowWidth },
    bottomOverlayView: { borderRadius: 8, justifyContent: 'space-between', backgroundColor: 'white', flexDirection: 'row', elevation: 3, shadowOpacity: 0.1, shadowColor: 'black', paddingVertical: 10, paddingHorizontal: 15 },
    blueBox: { alignItems: "center", justifyContent: 'center', backgroundColor: '#4286F5', padding: 8, borderRadius: 5 },
    sliderImg: { width: 25, height: 20, },
    row42: { flexDirection: 'row' },
    arrowBtn: { paddingHorizontal: 20, paddingVertical: 15, borderRadius: 4, backgroundColor: "#4286F5" },
    bannerContainer: {
        marginLeft: 40,
        marginTop: 8,
        flexDirection: 'row',
    },
    blueContainer: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#0C3982',
        padding: 5,
        borderRadius: 6,
    },
    bannerimageStyle: {
        width: windowWidth - 50,
        height: 200,
        alignSelf: 'center',
        top: 18,
        position: 'absolute',
        borderRadius: 10,
    },
})