import { View, Text, StyleSheet, Dimensions, Modal, TextInput, ScrollView, TouchableOpacity, Image, FlatList, Animated, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import RoundedBox from './roundedBox';
import Icons from './Icons/IconsSet';
import StarsImage from './StarsImage'
import ImageDescriptionCard from './ImageDescriptionCard'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import Carousel from 'react-native-reanimated-carousel';
import QuickViewAlert from './QuickViewAlert'
import ClaimFormAlert from './ClaimFormAlert'
import ResturantCard from './ResturantCard'
import TravelCardView from './TravelCardView'
import TestomonialCard from './TestomonialCard'
import BottomView from './BottomView'
import Lottie from 'lottie-react-native'
import Play from '../lottiefiles/play_video.json'
import CustomAppBar from './CustomAppBar'
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HomeDirectory = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [resCurrentIndex, setResCurrentIndex] = useState(0);
    const [resCurrentIndex2, setResCurrentIndex2] = useState(0);
    const [resCurrentIndex3, setResCurrentIndex3] = useState(0);
    const [switchBtn, setSwitcBtn] = useState(0);
    const [resData, setResData] = useState([1, 2, 3, 4, 5]);
    const [travelData, setTravelData] = useState([6, 7, 8, 9, 10]);
    const [testomonialData, setTestomonialData] = useState([11, 12, 13, 14, 15]);
    const resRef = useRef();
    const resRef1 = useRef();
    return (
        <Pressable onPress={() => {
            setExpand(false)
        }} >
            <CustomAppBar />
            <View style={{ marginTop: 60 }}>
                <QuickViewAlert visible={modalVisible2} onCrossClick={() => { setModalVisible2(false); }} onRequestClose={() => { setModalVisible2(false); }} />
                <ClaimFormAlert visible={modalVisible} onCrossClick={() => {
                    setModalVisible(false)
                }} onRequestClose={() => {
                    setModalVisible(false)
                }} isSelected={isSelected} setSelection={setSelection} />

                <ScrollView>
                    <View style={{ height: windowHeight * 0.7, }}>
                        <Image source={IMAGES.HOMELAP} resizeMode='stretch' style={styles.imageStylelogo} />
                        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, top: 50 }}>
                            <Spacer size={size.xxxlg} />
                            <Text style={styles.shortTextStyle}>B*Found | Find*X</Text>
                            <Text style={styles.textStyle}>Find Anything</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={styles.textStyle}>Around</Text>
                                <Text style={styles.textStyleBlue}> You</Text>
                                <Text style={styles.textStyle}>.</Text>
                            </View>
                            <Spacer size={size.lg} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <RoundedBox onPress={() => {
                                    navigation.navigate('Listning')
                                }} img={IMAGES.GEAR} Title='Business' />
                                <RoundedBox img={IMAGES.BATCH} Title='Professionals' />
                                <RoundedBox img={IMAGES.TECHNICIAN} Title='Handymen' />
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ alignItems: 'center', opacity: 0.2, marginTop: 30 }}>

                            <Text style={styles.textStyleBlueSmall}>NEW LISTNINGS</Text>

                        </View>
                        <Text style={styles.overlayText}>Latest Listings</Text>
                        <Spacer size={size.lg} />

                        <View>

                            <Animated.FlatList
                                ref={resRef}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                                data={resData}
                                keyExtractor={item => item.id}
                                onScroll={e => {
                                    const x = e.nativeEvent.contentOffset.x;
                                    setResCurrentIndex((x / windowWidth).toFixed(0))
                                }}
                                renderItem={(item, index) =>
                                    <View key={item.id} style={{ width: windowWidth }}><ResturantCard onEyeClick={() => {
                                        setModalVisible2(true)
                                    }} key={item.id} /></View>

                                } />
                            <TouchableOpacity onPress={() => {
                                resRef.current.scrollToIndex({ animated: true, index: parseInt(resCurrentIndex) > 0 && parseInt(resCurrentIndex) - 1 })
                            }} style={{ width: 40, height: 30, borderRadius: 5, position: 'absolute', top: '40%', left: 15 }}>
                                <Image source={IMAGES.LEFT} resizeMode='cover' style={{ width: 40, height: 30, borderRadius: 5 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                resRef.current.scrollToIndex({ animated: true, index: parseInt(resCurrentIndex) < (resData.length - 1) && parseInt(resCurrentIndex) + 1 })
                            }} style={{ width: 40, height: 30, borderRadius: 5, position: 'absolute', top: '40%', right: 15 }}>
                                <Image source={IMAGES.RIGHT} resizeMode='cover' style={{ width: 40, height: 30, borderRadius: 5, }} />
                            </TouchableOpacity>

                        </View>

                        <View style={{ height: 62 }}>
                            <View style={{ alignItems: 'center', opacity: 0.2, marginTop: 30 }}>

                                <Text style={styles.textStyleBlueSmall}>PROMOTED BUSINESSES</Text>

                            </View>
                            <Text style={styles.overlayText2}>Featured Businesses</Text>
                        </View>
                        <Spacer size={size.lg} />

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 15 }}>
                            <TouchableOpacity onPress={() => { setSwitcBtn(0) }} style={{ paddingHorizontal: 20, paddingVertical: 12, backgroundColor: switchBtn == 0 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 0 ? 0 : 1 }}>
                                <Text style={{ color: switchBtn == 0 ? 'white' : 'black', alignSelf: 'center', fontSize: 16 }}>Entertainment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSwitcBtn(1) }} style={{ paddingHorizontal: 20, paddingVertical: 12, backgroundColor: switchBtn == 1 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 1 ? 0 : 1 }}>
                                <Text style={{ color: switchBtn == 1 ? 'white' : 'black', alignSelf: 'center', fontSize: 16 }}>Food & Bevarages</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSwitcBtn(2) }} style={{ paddingHorizontal: 20, paddingVertical: 12, backgroundColor: switchBtn == 2 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 2 ? 0 : 1 }}>
                                <Text style={{ color: switchBtn == 2 ? 'white' : 'black', alignSelf: 'center', fontSize: 16 }}>Hotels</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSwitcBtn(3) }} style={{ paddingHorizontal: 20, paddingVertical: 12, backgroundColor: switchBtn == 3 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 3 ? 0 : 1 }}>
                                <Text style={{ color: switchBtn == 3 ? 'white' : 'black', alignSelf: 'center', fontSize: 16 }}>Shops</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSwitcBtn(4) }} style={{ paddingHorizontal: 20, paddingVertical: 12, backgroundColor: switchBtn == 4 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 4 ? 0 : 1 }}>
                                <Text style={{ color: switchBtn == 4 ? 'white' : 'black', alignSelf: 'center', fontSize: 16 }}>Gyms</Text>
                            </TouchableOpacity>

                        </ScrollView>
                        <Spacer size={size.lg} />

                    </View>
                    <ImageDescriptionCard onClaimClick={() => {
                        setModalVisible(true)
                    }} onEyeClick={() => {
                        setModalVisible2(true)
                    }} />
                    <Spacer size={size.lg} />
                    <ImageDescriptionCard onClaimClick={() => {
                        setModalVisible(true)
                    }} onEyeClick={() => {
                        setModalVisible2(true)
                    }} />
                    <Spacer size={size.lg} />
                    <ImageDescriptionCard onClaimClick={() => {
                        setModalVisible(true)
                    }} onEyeClick={() => {
                        setModalVisible2(true)
                    }} />
                    <Spacer size={size.xlg} />
                    <TouchableOpacity onPress={() => {
                    }} style={{ width: windowWidth * 0.8, alignSelf: 'center', paddingVertical: 10, borderRadius: 6, backgroundColor: '#4286F5' }}>
                        <Text style={{ color: 'white', fontSize: 17, alignSelf: 'center' }}>Check Out All Business Listings</Text>
                    </TouchableOpacity>
                    <Spacer size={size.xxxlg} />

                    <View style={{ width: windowWidth, height: 250 }}>
                        <Image source={IMAGES.BLACKBANNER} resizeMode='cover' style={{ bottom: 0, position: 'absolute', width: windowWidth, height: 250 }} />

                        <View style={{ paddingVertical: 10, alignItems: 'center', }}>
                            <Lottie source={Play} resizeMode='cover' autoPlay={true} loop={true} style={{
                                width: 60,
                                height: 60,
                            }} />
                            <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '600' }}>Digital Campaign</Text>
                            <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '600', fontSize: 16 }}>Get ready to start your exciting journey.</Text>
                            <View style={{ width: '60%', alignSelf: 'center' }}>
                                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '600', fontSize: 16, textAlign: 'center' }}>Our agency will lead you through the amazing digital world</Text>
                            </View>


                        </View>
                        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderTopWidth: 8, borderTopColor: '#8BB7FF', width: windowWidth, position: 'absolute', backgroundColor: 'white', bottom: -10 }}>
                            <View style={{ borderRightColor: 'black', borderRightWidth: 1, paddingRight: 20 }}>
                                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>0</Text>
                                <Text style={{ fontSize: 12 }}>Businesses</Text>
                            </View>
                            <View style={{ borderRightColor: 'black', borderRightWidth: 1, paddingRight: 20 }}>
                                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>0</Text>
                                <Text style={{ fontSize: 12 }}>Professionals</Text>
                            </View>
                            <View style={{ borderRightColor: 'black', borderRightWidth: 1, paddingRight: 20 }}>
                                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>0</Text>
                                <Text style={{ fontSize: 12 }}>Handymen</Text>
                            </View>
                            <View >
                                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>0</Text>
                                <Text style={{ fontSize: 12 }}>Users</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: windowWidth, marginTop: 30, height: 200, justifyContent: 'space-evenly', alignItems: "flex-end" }}>
                        <Image source={IMAGES.BANNER2} style={[styles.bannerimageStyle, { width: windowWidth * 0.95, height: 220 }]} />
                        <View style={{ marginRight: 25, width: '70%', alignItems: 'flex-end' }}>
                            <Spacer size={size.xxxlg} />
                            <Text style={{ fontSize: 22, color: 'white', fontWeight: '800' }}>Best Cafes & Bars</Text>
                            <Text style={{ fontSize: 13, color: 'white', fontWeight: '600', textAlign: 'right' }}>Cafes have a way of making friendships stronger, making gloomy days seem golden as sung by Manna Dey himself, and making you feel a little more at home.</Text>
                            <Spacer size={size.sm} />
                            <TouchableOpacity onPress={() => {
                            }} style={{ width: '60%', paddingVertical: 10, borderRadius: 6, backgroundColor: '#4286F5' }}>
                                <Text style={{ color: 'white', fontSize: 17, alignSelf: 'center' }}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Spacer size={size.xxlg} />

                    <View style={{ height: 62 }}>
                        <View style={{ alignItems: 'center', opacity: 0.2, marginTop: 30 }}>
                            <Text style={styles.textStyleBlueSmall}>TOP PROFESSIONALS</Text>
                        </View>
                        <Text style={styles.overlayText2}>Featured Businesses</Text>
                    </View>
                    <Spacer size={size.lg} />
                    <Carousel
                        loop
                        defaultIndex={0}
                        width={windowWidth}
                        height={250}
                        mode='parallax'
                        autoPlay={true}
                        data={[...new Array(5).keys()]}
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => setCurrentIndex(index)}
                        renderItem={({ index }) => (
                            <View>
                                <Image source={IMAGES.PERSON} style={{ width: windowWidth, borderRadius: 10, alignSelf: "center", height: 220 }} />
                                <Spacer size={size.sm} />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: "center", width: windowWidth }}>
                                    <View style={{}}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                            <Text style={{ fontSize: 18, fontWeight: '600', color: 'black' }}>Ohan Yew</Text>
                                            <Icons.AntDesign name='checkcircle' size={20} color='#0EBC31' />

                                            <SpacerHorizontal size={size.sh} />
                                        </View>
                                        <Spacer size={size.sh} />
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icons.Ionicons name='location-sharp' size={20} color='#4286F5' />
                                            <SpacerHorizontal size={size.sh} />
                                            <Text style={{ fontSize: 16, }}>27th Brooklyn New York, USA</Text>

                                        </View>
                                    </View>
                                    <SpacerHorizontal size={size.sh} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <StarsImage size={20} />

                                        </View>
                                        <Spacer size={size.sh} />

                                        <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>
                                            10 Reviews
                                        </Text>
                                    </View>

                                </View>
                            </View>
                        )}
                    />
                    <View style={{ width: windowWidth, marginTop: 30, height: 220, justifyContent: 'space-evenly', alignItems: "flex-start" }}>
                        <Image source={IMAGES.BANNER2} style={[styles.bannerimageStyle, { width: windowWidth * 0.95, height: 220 }]} />
                        <View style={{ marginLeft: 25, width: '70%', alignItems: 'flex-start' }}>
                            <Spacer size={size.xxxlg} />
                            <Text style={{ fontSize: 22, color: 'white', fontWeight: '800' }}>Best Cafes & Bars</Text>
                            <Text style={{ fontSize: 13, color: 'white', fontWeight: '600', textAlign: 'left' }}>Cafes have a way of making friendships stronger, making gloomy days seem golden as sung by Manna Dey himself, and making you feel a little more at home.</Text>
                            <Spacer size={size.sm} />
                            <TouchableOpacity style={{ width: '60%', paddingVertical: 10, borderRadius: 6, backgroundColor: '#4286F5' }}>
                                <Text style={{ color: 'white', fontSize: 17, alignSelf: 'center' }}>View List</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', paddingVertical: 35, marginTop: 60, backgroundColor: '#EFF5FF', borderRadius: 12, width: windowWidth * 0.9 }}>
                        <Text style={{ fontSize: 25, fontWeight: '600', alignSelf: 'center', color: 'black' }}>Handy People</Text>
                        <Text style={{ fontSize: 14, alignSelf: 'center', color: 'black' }}>Promoted Handymen</Text>
                        <Spacer size={size.lg} />
                        <View style={{ marginHorizontal: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity style={{ backgroundColor: '#4286F5', paddingVertical: 10, borderRadius: 4, paddingHorizontal: 20 }}>
                                    <Text style={{ color: 'white' }}>Electricians</Text>
                                </TouchableOpacity>
                                <SpacerHorizontal size={size.sm} />
                                <TouchableOpacity style={{ borderColor: '#BBBBBB', borderWidth: 1, paddingVertical: 10, borderRadius: 4, paddingHorizontal: 20 }}>
                                    <Text style={{ color: 'black' }}>Plumbers</Text>
                                </TouchableOpacity>
                                <SpacerHorizontal size={size.sm} />

                                <TouchableOpacity style={{ borderColor: '#BBBBBB', borderWidth: 1, paddingVertical: 10, borderRadius: 4, paddingHorizontal: 20 }}>
                                    <Text style={{ color: 'black' }}>Cooks</Text>
                                </TouchableOpacity>
                                <SpacerHorizontal size={size.sm} />

                                <TouchableOpacity style={{ borderColor: '#BBBBBB', borderWidth: 1, paddingVertical: 10, borderRadius: 4, paddingHorizontal: 20 }}>
                                    <Text style={{ color: 'black' }}>Maids</Text>
                                </TouchableOpacity>
                                <SpacerHorizontal size={size.sm} />

                                <TouchableOpacity style={{ borderColor: '#BBBBBB', borderWidth: 1, paddingVertical: 10, borderRadius: 4, paddingHorizontal: 20 }}>
                                    <Text style={{ color: 'black' }}>Ac Mechanic</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <Spacer size={size.xlg} />
                        {/* <Carousel
                            loop
                            defaultIndex={0}
                            width={windowWidth * 0.9}
                            height={220}
                            autoPlay={true}
                            data={[...new Array(5).keys()]}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => setCurrentIndex(index)}
                            renderItem={({ index }) => (
                                <View>
                                    <Image source={person} style={{ width: windowWidth * 0.7, borderRadius: 10, alignSelf: "center", height: 160 }} />
                                    <Spacer size={size.sm} />

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: "center", width: windowWidth * 0.7 }}>
                                        <View style={{}}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                <Text style={{ fontSize: 15, fontWeight: '600', color: 'black' }}>Ohan Yew</Text>
                                                <Image source={Check} resizeMode='contain' style={{ width: 18, height: 18, }} />
                                                <SpacerHorizontal size={size.sh} />
                                            </View>
                                            <Spacer size={size.sh} />
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={Location} resizeMode='contain' style={{ width: 12, height: 12, }} />
                                                <SpacerHorizontal size={size.sh} />
                                                <Text style={{ fontSize: 10, }}>27th Brooklyn New York, USA</Text>

                                            </View>
                                        </View>
                                        <SpacerHorizontal size={size.sh} />
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <StarsImage size={15} />

                                            </View>
                                            <Spacer size={size.sh} />

                                            <Text style={{ color: 'black', fontWeight: '700', fontSize: 11 }}>
                                                10 Reviews
                                            </Text>
                                        </View>

                                    </View>
                                </View>
                            )}
                        /> */}
                        <View>

                            <Animated.FlatList
                                horizontal
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                                data={testomonialData}
                                style={{ alignSelf: 'center', width: windowWidth * 0.7 }}
                                onScroll={e => {
                                    const x = e.nativeEvent.contentOffset.x;
                                    setResCurrentIndex3((x / windowWidth).toFixed(0))
                                }}
                                renderItem={(item, index) =>
                                    <View key={item.id} style={{ width: windowWidth * 0.7, marginLeft: 0, alignSelf: 'center' }}>
                                        <View>
                                            <Image source={IMAGES.PERSON} style={{ width: windowWidth * 0.7, borderRadius: 10, alignSelf: "center", height: 160 }} />
                                            <Spacer size={size.sm} />

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: "center", width: windowWidth * 0.7 }}>
                                                <View style={{}}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                        <Text style={{ fontSize: 15, fontWeight: '600', color: 'black' }}>Ohan Yew</Text>
                                                        <Icons.AntDesign name='checkcircle' size={20} color='#0EBC31' />
                                                        <SpacerHorizontal size={size.sh} />
                                                    </View>
                                                    <Spacer size={size.sh} />
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Icons.Ionicons name='location-sharp' size={20} color='#4286F5' />
                                                        <SpacerHorizontal size={size.sh} />
                                                        <Text style={{ fontSize: 10, }}>27th Brooklyn New York, USA</Text>

                                                    </View>
                                                </View>
                                                <SpacerHorizontal size={size.sh} />
                                                <View style={{ flexDirection: 'column' }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Icons.FontAwesome name={'star'} size={15} color='gold' style={{ alignSelf: 'center' }} />
                                                        <Icons.FontAwesome name={'star'} size={15} color='gold' style={{ alignSelf: 'center' }} />
                                                        <Icons.FontAwesome name={'star'} size={15} color='gold' style={{ alignSelf: 'center' }} />
                                                        <Icons.FontAwesome name={'star'} size={15} color='gold' style={{ alignSelf: 'center' }} />
                                                        <Icons.FontAwesome name={'star'} size={15} color='gold' style={{ alignSelf: 'center' }} />
                                                    </View>
                                                    <Spacer size={size.sh} />

                                                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 11 }}>
                                                        10 Reviews
                                                    </Text>
                                                </View>

                                            </View>
                                        </View>
                                    </View>

                                } />
                            <TouchableOpacity onPress={() => {
                            }} style={{ width: 40, height: 30, borderRadius: 5, position: 'absolute', top: '30%', left: 15 }}>
                                <Image source={IMAGES.LEFT} resizeMode='cover' style={{ width: 40, height: 30, borderRadius: 5 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                            }} style={{ width: 40, height: 30, borderRadius: 5, position: 'absolute', top: '30%', right: 15 }}>
                                <Image source={IMAGES.RIGHT} resizeMode='cover' style={{ width: 40, height: 30, borderRadius: 5, }} />
                            </TouchableOpacity>

                        </View>

                    </View>
                    <Spacer size={size.lg} />
                    <View style={{ backgroundColor: "#0C3982", borderRadius: 8, alignSelf: 'center', width: windowWidth * 0.9, padding: 25 }}>
                        <Text style={{ color: 'white', alignSelf: "center", fontSize: 22, fontWeight: '600' }}>Free to post your listing!</Text>
                        <Spacer size={size.mid} />
                        <Text style={{ color: 'white', alignSelf: "center", textAlign: "center", fontSize: 12, fontWeight: '600' }}>You are not alone. Xity.in by Ornda Agency is the best site to help you grow your customers & revenue and be happy with your business.</Text>
                    </View>
                    <Spacer size={size.lg} />
                    <ScrollView horizontal>
                        <Image source={IMAGES.BANNERBLUEBTN} resizeMode='contain' style={{ width: windowWidth, height: 180, }} />
                        <Image source={IMAGES.BANNERBLUEBTN} resizeMode='contain' style={{ width: windowWidth, height: 180, }} />
                        <Image source={IMAGES.BANNERBLUEBTN} resizeMode='contain' style={{ width: windowWidth, height: 180, }} />
                    </ScrollView>
                    <View style={{ height: 62 }}>
                        <View style={{ alignItems: 'center', opacity: 0.2, marginTop: 30 }}>

                            <Text style={styles.textStyleBlueSmall}>TIPD AND INSPIRATION</Text>

                        </View>
                        <Text style={styles.overlayText2}>Directory Blog Posts</Text>
                    </View>
                    <View>
                        <Spacer size={size.xxxlg} />
                        {/* Travel */}
                        <FlatList
                            data={travelData}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            onScroll={e => {
                                const x1 = e.nativeEvent.contentOffset.x;
                                setResCurrentIndex2((x1 / (windowWidth)).toFixed(0))
                            }}
                            pagingEnabled
                            renderItem={(item, index) => <TravelCardView Img={IMAGES.POSTER} />} />



                        <Spacer size={size.lg} />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignSelf: 'center',
                                padding: 6,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#707070'
                            }}>
                            {travelData.map((item, index) => {
                                return (
                                    <View
                                        style={{
                                            padding: 4,
                                            borderRadius: 4,
                                            backgroundColor: parseInt(resCurrentIndex2) == index ? '#4286F5' : '#FFFFFF',
                                            opacity: 0.58,
                                            marginLeft: 5,
                                        }}></View>
                                );
                            })}
                        </View>

                        <Spacer size={size.mid} />
                        <View style={{ height: 62 }}>
                            <View style={{ alignItems: 'center', opacity: 0.2, marginTop: 30 }}>
                                <Text style={styles.textStyleBlueSmall}>TESTIMONIALS</Text>
                            </View>
                            <Text style={styles.overlayText2}>Testimonials</Text>
                        </View>
                        <Spacer size={size.xxxlg} />


                        <View>

                            <Animated.FlatList
                                ref={resRef1}
                                horizontal
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                                data={testomonialData}
                                onScroll={e => {
                                    const x = e.nativeEvent.contentOffset.x;
                                    setResCurrentIndex3((x / windowWidth).toFixed(0))
                                }}
                                renderItem={(item, index) =>
                                    <View key={item.id} style={{ width: windowWidth }}><TestomonialCard User={IMAGES.GIRLAVATAR} key={item.id} /></View>

                                } />
                            <TouchableOpacity onPress={() => {
                                resRef1.current.scrollToIndex({ animated: true, index: parseInt(resCurrentIndex3) > 0 && parseInt(resCurrentIndex3) - 1 })
                            }} style={{ width: 40, height: 30, borderRadius: 5, position: 'absolute', top: '55%', left: 15 }}>
                                <Image source={IMAGES.LEFT} resizeMode='cover' style={{ width: 40, height: 30, borderRadius: 5 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                resRef1.current.scrollToIndex({ animated: true, index: parseInt(resCurrentIndex3) < (testomonialData.length - 1) && parseInt(resCurrentIndex3) + 1 })
                            }} style={{ width: 40, height: 30, borderRadius: 5, position: 'absolute', top: '55%', right: 15 }}>
                                <Image source={IMAGES.RIGHT} resizeMode='cover' style={{ width: 40, height: 30, borderRadius: 5, }} />
                            </TouchableOpacity>

                        </View>


                    </View>
                    <Spacer size={size.xxxlg} />
                    <View style={{ width: windowWidth * 0.98, alignSelf: 'center', backgroundColor: '#D5D5D5', height: 1 }} />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Image source={IMAGES.HEXLAB} style={{ width: 150, height: 150 }} />
                        <Image source={IMAGES.AVEN} style={{ width: 150, height: 150 }} />
                        <Image source={IMAGES.VELOCITY} style={{ width: 150, height: 150 }} />
                        <Image source={IMAGES.IDEAA} style={{ width: 150, height: 150 }} />
                        <Image source={IMAGES.TREVA} style={{ width: 150, height: 150 }} />
                        <Image source={IMAGES.HEXA} style={{ width: 150, height: 150 }} />
                    </ScrollView>
                    <Spacer size={size.lg} />
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


            </View >

        </Pressable >
    )
}

export default HomeDirectory

const styles = StyleSheet.create({
    styleCenter: {
        width: '100%',
        alignContent: 'center',
        margin: 25,
        flex: 1,
        alignSelf: 'center',
    },
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
    overlayText: {
        color: '#0C3982',
        position: 'absolute',
        top: 38,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    overlayText2: {
        color: '#0C3982',
        position: 'absolute',

        bottom: 0,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600'
    },

    imageStylelogo: {
        width: windowWidth,
        height: windowHeight * 0.7,
    },
    bannerimageStyle: {
        width: windowWidth - 50,
        height: 200,
        alignSelf: 'center',
        top: 18,
        position: 'absolute',
        borderRadius: 10,
    },
    imgStyle: {
        width: windowWidth,
        height: windowHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    imageStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 5,
        borderRadius: 8,
    },

    dropdown: {
        height: 50,
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    boldText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        fontWeight: '900'
    },
    textStyle: {
        fontSize: 36,
        color: 'white',
        textAlign: 'center',
        fontWeight: '700'
    },
    textStyleBlue: {
        fontSize: 36,
        color: '#8BB7FF',
        textAlign: 'center',
        fontWeight: '700'
    },
    textStyleBlueSmall: {
        fontSize: 30,
        color: '#8BB7FF',
        textAlign: 'center',
        fontWeight: '700'
    },
    mediumStyle: {

        fontSize: 18,
        width: '70%',
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '800'
    },
    buttonText: {
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 16
    },
    accountText: {
        fontWeight: '500',
        textAlign: 'center',

        color: 'black',
        fontSize: 16
    },
    blueText: {
        fontWeight: '800',
        color: '#0C3982',
        fontSize: 16
    },
    buttonText2: {
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 16
    },
    line: {
        width: '60%',
        height: 2,
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    shortTextStyle: {
        fontSize: 16,
        width: '70%',
        alignSelf: 'center',
        fontWeight: "700",
        color: 'white',
        textAlign: 'center',
    },
    shortTextStyle2: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        color: 'white',
        textAlign: 'center',
    },
})
