import { StyleSheet, TouchableOpacity, Text, Modal, Image, View, Dimensions, ScrollView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { range, size } from './size'
import Icons from './Icons/IconsSet';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import StarsImage from './StarsImage'
import CustomStatisticsView from './CustomStatisticsView'
import LeadGradientView from './LeadGradientView'
import SpecialItemView from './SpecialItemView'
import TodaysBestItemView from './TodaysBestItemView'
import ReviewSlideView from './ReviewSlideView'
import GreyTextInput from './GreyTextInput'
import RangeSlider from './RangeSlider'
import IconTitleDesc from './IconTitleDesc'
import SocialIcon from './SocialIcon'
import BusinessResprentativeView from './BusinessResprentativeView'
import PromotedListningItem from './PromotedListningItem'
import HorizontalTextIcon from './HorizontalTextIcon'
import BlueWhiteGradientView from './BlueWhiteGradientView'
import ExpandedView from './ExpandedView'
import FloatButton from './FloatButton'
import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';
import BottomView from './BottomView'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomAppBar from './CustomAppBar'
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DetailsScreen = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [radioButtons, setRadioButtons] = useState(false);
    const [switchBtn, setSwitcBtn] = useState(0);
    const [switchBtn1, setSwitcBtn1] = useState(0);
    const [switchBtn2, setSwitcBtn2] = useState(0);
    const [isAbout, setAbout] = useState(false);
    const [isSatistics, setSatistics] = useState(false);
    const [isWorking, setWorking] = useState(false);
    const [isGallery, setGallery] = useState(false);
    const [isBooking, setBooking] = useState(false);
    const [isSpecial, setSpecial] = useState(false);
    const [isBest, setBest] = useState(false);
    const [isTeam, setTeam] = useState(false);
    const [isReview, setReview] = useState(false);
    const [isLocation, setLocation] = useState(false);
    const [isContacts, setContacts] = useState(false);
    const [isPriceRange, setPriceRange] = useState(false);
    const [isBussines, setBussines] = useState(false);
    const [isAgent, setAgent] = useState(false);
    const [isPromoted, setPromoted] = useState(false);
    const [isAd, setAd] = useState(false);
    const [isReportClick, setReportClick] = useState(false);


    return (
        <Pressable onPress={() => {
            setExpand(false)
        }} style={styles.main}>
            <View><CustomAppBar />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{ borderColor: '#D2D2D2', paddingTop: 15, paddingBottom: 15, borderWidth: 1, backgroundColor: 'white', alignSelf: 'center', width: windowWidth * 0.9 }}>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Report</Text>
                                <TouchableOpacity onPress={() => {
                                    setModalVisible(false);
                                }}>
                                    <Icons.Entypo name='cross' color='black' size={25} />
                                </TouchableOpacity>
                            </View>
                            <Spacer size={size.sm} />

                            <View style={{ backgroundColor: '#CFCFCF', marginHorizontal: 15, height: 1 }} />
                            <Spacer size={size.sm} />
                            <View style={{ paddingHorizontal: 30 }}>
                                <TextInput style={{ paddingLeft: 15, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Issue type' />
                                <Spacer size={size.sm} />
                                <View style={{ paddingHorizontal: 15, backgroundColor: '#F8F8F8', borderRadius: 5, flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', borderColor: '#EFEFEF', borderWidth: 1 }}>
                                    <Text style={{ color: '#919191' }}>Select an issue</Text>
                                    <Icons.Entypo name='chevron-down' size={25} color='#0C3982' />
                                </View>
                                <Spacer size={size.mid} />

                                <View style={{ alignSelf: 'flex-start', }}>
                                    <RadioButton
                                        onPress={(id) => {
                                            setRadioButtons(true)
                                        }}
                                        size={18}
                                        color='#0C3982'
                                        id='1'
                                        label='I agress to Term & Conditions'
                                        labelStyle={{ fontSize: 14 }}
                                        value='option1' selected={radioButtons}
                                    />
                                </View>
                                <Spacer size={size.mid} />
                                <TouchableOpacity style={{ borderRadius: 5, backgroundColor: '#4286F5', paddingVertical: 12, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 16, }}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => {
                        setModalVisible2(!modalVisible2);
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{ borderColor: '#D2D2D2', paddingTop: 15, paddingBottom: 15, borderWidth: 1, backgroundColor: 'white', alignSelf: 'center', width: windowWidth * 0.9 }}>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Contact Business</Text>
                                <TouchableOpacity onPress={() => {
                                    setModalVisible2(false);
                                }}>
                                    <Icons.Entypo name='cross' color='black' size={25} />
                                </TouchableOpacity>
                            </View>
                            <Spacer size={size.sm} />

                            <View style={{ backgroundColor: '#CFCFCF', marginHorizontal: 15, height: 1 }} />
                            <Spacer size={size.sm} />
                            <View style={{ paddingHorizontal: 30 }}>
                                <TextInput multiline={true} style={{ height: 120, textAlignVertical: 'top', paddingLeft: 15, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Your message' />
                                <Spacer size={size.sm} />
                                <Spacer size={size.mid} />

                                <View style={{ alignSelf: 'flex-start', }}>
                                    <RadioButton
                                        onPress={(id) => {
                                            setRadioButtons(true)
                                        }}
                                        size={18}
                                        color='#0C3982'
                                        id='1'
                                        label='I agress to Term & Conditions'
                                        labelStyle={{ fontSize: 14 }}
                                        value='option1' selected={radioButtons}
                                    />
                                </View>
                                <Spacer size={size.mid} />
                                <TouchableOpacity style={{ borderRadius: 5, backgroundColor: '#4286F5', paddingVertical: 12, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 16, }}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>
                <ScrollView style={{ marginTop: 60 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.overlayContainer}>
                        <Image source={IMAGES.SNACKBG} resizeMode='cover' style={styles.overlayImg} />
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
                    </View>
                    <View style={styles.bottomOverlayView2}>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Spacer size={size.sh} />
                            <TouchableWithoutFeedback onPress={() => {
                                setSwitcBtn1(0)
                            }} style={{ flexDirection: 'row', }}>
                                <Icons.MaterialCommunityIcons name='image' size={20} color='#4286F5' />
                                <SpacerHorizontal size={size.sm} />
                                <Text style={{}}>Top</Text>

                            </TouchableWithoutFeedback>
                            <View style={{ height: 4, backgroundColor: switchBtn1 == 0 ? '#4286F5' : 'transparent' }} />
                        </View>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Spacer size={size.sh} />
                            <TouchableWithoutFeedback onPress={() => {
                                setSwitcBtn1(1)

                            }} style={{ flexDirection: 'row', }}>
                                <Icons.FontAwesome name='info' size={20} color='#CFCFCF' />
                                <SpacerHorizontal size={size.sm} />
                                <Text style={{}}>Details</Text>

                            </TouchableWithoutFeedback>
                            <View style={{ height: 4, backgroundColor: switchBtn1 == 1 ? '#4286F5' : 'transparent' }} />
                        </View>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Spacer size={size.sh} />
                            <TouchableWithoutFeedback onPress={() => {
                                setSwitcBtn1(2)

                            }} style={{ flexDirection: 'row', }}>
                                <Icons.MaterialCommunityIcons name='image-multiple' size={20} color='#CFCFCF' />
                                <SpacerHorizontal size={size.sm} />
                                <Text style={{}}>Gallery</Text>

                            </TouchableWithoutFeedback>
                            <View style={{ height: 4, backgroundColor: switchBtn1 == 2 ? '#4286F5' : 'transparent' }} />
                        </View>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Spacer size={size.sh} />
                            <TouchableWithoutFeedback onPress={() => {
                                setSwitcBtn1(3)

                            }} style={{ flexDirection: 'row' }}>
                                <Icons.MaterialIcons name='rate-review' size={20} color='#CFCFCF' />
                                <SpacerHorizontal size={size.sm} />
                                <Text style={{}}>Reviews</Text>
                            </TouchableWithoutFeedback>
                            <View style={{ height: 4, backgroundColor: switchBtn1 == 3 ? '#4286F5' : 'transparent' }} />
                        </View>

                    </View>
                    <Spacer size={size.sm} />
                    <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginRight: 15 }}>
                        <TouchableOpacity style={{ borderRadius: 4, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: '#4286F5', flexDirection: 'row' }}>
                            <Icons.AntDesign name='heart' size={20} color='white' />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ color: 'white' }}>Save</Text>
                        </TouchableOpacity>
                        <SpacerHorizontal size={size.mid} />
                        <TouchableOpacity style={{ borderRadius: 4, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: '#4286F5', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icons.Fontisto name='share-a' size={15} color='white' />
                            <SpacerHorizontal size={size.sh} />
                            <Text style={{ color: 'white' }}>Share</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer size={size.sh} />
                    <View style={{ margin: 15 }}>
                        <View style={{ borderColor: '#BBBBBB', backgroundColor: 'white', borderRadius: 10, borderWidth: 1, padding: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ paddingRight: 5 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Luxary Restaurant</Text>
                                        <SpacerHorizontal size={size.sm} />
                                        <Icons.Ionicons name='checkmark-circle' size={22} color='#0EBC31' />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icons.MaterialIcons name='location-on' size={13} color='#4286F5' />
                                        <SpacerHorizontal size={size.sh} />
                                        <Text style={{ fontSize: 10 }}>27th Brooklyn New York, USA</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icons.MaterialIcons name='location-on' size={13} color='#4286F5' />
                                        <SpacerHorizontal size={size.sh} />
                                        <Text style={{ fontSize: 8 }}>27th Brooklyn New York, USA</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row' }}>

                                        <Icons.MaterialIcons name='email' size={13} color='#4286F5' />
                                        <SpacerHorizontal size={size.sh} />
                                        <Text style={{ fontSize: 8 }}>samplemail1@gmail.com</Text>
                                    </View>

                                </View>
                                <View style={{ width: 1, backgroundColor: '#BBBBBB' }} />

                                <View style={{ padding: 10, marginLeft: 10, flexDirection: 'row', alignSelf: 'center', backgroundColor: '#EFF5FF' }}>
                                    <View style={{ backgroundColor: '#0C3982', height: 25, width: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                        <Text style={{ fontSize: 8, color: 'white', fontWeight: '800' }}>3.5</Text>
                                    </View>
                                    <SpacerHorizontal size={size.sh} />
                                    <View>
                                        <StarsImage size={12} />
                                        <Text style={{ fontSize: 9 }}>10 Reviews</Text>
                                    </View>
                                </View>
                            </View>
                            <Spacer size={size.sm} />
                            <View style={{ height: 1.5, backgroundColor: '#BBBBBB' }} />
                            <Spacer size={size.sm} />

                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Image source={IMAGES.PINKBURGER} resizeMode='contain' style={{ width: 25, height: 25 }} />
                                <Text style={{ fontSize: 12, fontWeight: '500', alignSelf: 'center' }}>Restaurant</Text>
                                <Image source={IMAGES.GIRLAVATAR2} resizeMode='contain' style={{ width: 25, height: 25 }} />
                                <Text style={{ fontSize: 12, fontWeight: '500', alignSelf: 'center' }}>By, Rose merry</Text>
                                <TouchableOpacity style={{ backgroundColor: '#00C899', flexDirection: 'row', height: 23, paddingHorizontal: 8, alignItems: 'center', borderRadius: 30 }}>
                                    <Icons.Feather name={'unlock'} size={12} color='white' style={{ alignSelf: 'center' }} />

                                    <Text style={{ color: 'white', marginLeft: 5, fontSize: 12, fontWeight: '600' }}>Open Now</Text>
                                </TouchableOpacity>
                            </View>
                            <Spacer size={size.sm} />
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ backgroundColor: '#EFEFEF', borderRadius: 6, paddingHorizontal: 20, paddingVertical: 10 }}>
                                    <Text style={{ fontSize: 10 }}>Viewed-0</Text>
                                </View>
                                <SpacerHorizontal size={size.mid} />
                                <View style={{ backgroundColor: '#EFEFEF', borderRadius: 6, paddingHorizontal: 20, paddingVertical: 10 }}>
                                    <Text style={{ fontSize: 10 }}>Favourite-0</Text>
                                </View>
                            </View>
                        </View>
                        <Spacer size={size.mid} />
                        <Image source={IMAGES.DETAILSBANNER} style={{ width: '100%', height: 140, borderRadius: 10 }} />
                        <Spacer size={size.mid} />
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setAbout(!isAbout)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>About</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />
                            </TouchableWithoutFeedback>
                            {
                                isAbout &&
                                <View>
                                    <Spacer size={size.mid} />

                                    <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                    <Spacer size={size.mid} />
                                    <Text style={{ fontSize: 16 }}>
                                        Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim.
                                    </Text>
                                    <Spacer size={size.lg} />

                                    <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                    <Spacer size={size.mid} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={{ fontSize: 16 }}>
                                                Year Established:
                                            </Text>
                                            <Spacer size={size.sh} />
                                            <Text style={{ fontSize: 16, color: 'black', fontSize: 18 }}>
                                                1 Feb 2023
                                            </Text>
                                        </View>
                                        <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 6, paddingHorizontal: 8, backgroundColor: '#4286F5' }}>
                                            <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '600' }}>Download Brochure</Text>
                                            <SpacerHorizontal size={size.sm} />
                                            <Icons.MaterialCommunityIcons name={'download'} size={25} color='white' style={{ alignSelf: 'center' }} />

                                        </TouchableOpacity>
                                    </View>
                                    <Spacer size={size.mid} />

                                    <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                    <Spacer size={size.mid} />
                                    <View>
                                        <Text style={{ fontSize: 16 }}>Documents :</Text>
                                        <Spacer size={size.sm} />
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                            <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 6, paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4286F5' }}>
                                                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '600' }}>File 1</Text>
                                                <SpacerHorizontal size={size.sm} />
                                                <Icons.MaterialCommunityIcons name={'download'} size={20} color='white' style={{ alignSelf: 'center' }} />

                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 6, paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4286F5' }}>
                                                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '600' }}>File 2</Text>
                                                <SpacerHorizontal size={size.sm} />
                                                <Icons.MaterialCommunityIcons name={'download'} size={20} color='white' style={{ alignSelf: 'center' }} />

                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 6, paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4286F5' }}>
                                                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '600' }}>File 3</Text>
                                                <SpacerHorizontal size={size.sm} />
                                                <Icons.MaterialCommunityIcons name={'download'} size={20} color='white' style={{ alignSelf: 'center' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View></View>
                            }

                        </View>
                        <Spacer size={size.mid} />
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setSatistics(!isSatistics)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Statistics</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>
                            {
                                isSatistics &&
                                <View>

                                    <Spacer size={size.sm} />
                                    <CustomStatisticsView Title='Views' Num={0} />
                                    <CustomStatisticsView Title='Ratings' Num={0} />
                                    <CustomStatisticsView Title='Favourite' Num={0} />
                                    <CustomStatisticsView Title='Shares' Num={0} />
                                    <CustomStatisticsView Title='Messages' Num={0} />
                                    <CustomStatisticsView Title='Appointments' Num={0} />
                                    <CustomStatisticsView Title='Shop Views' Num={0} />
                                    <CustomStatisticsView Title='Subscribed' Num={0} />
                                    <CustomStatisticsView Title='Images' Num={0} />
                                    <CustomStatisticsView Title='Videos' Num={0} />
                                    <CustomStatisticsView Title='360 Degree' Num={0} />
                                    <CustomStatisticsView Title='Street view' Num={0} />
                                </View>
                            }
                        </View>
                        <Spacer size={size.mid} />
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 10 }}>
                            <View style={{ height: 175, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={IMAGES.DETAILSBANNER2} resizeMode="cover" style={{ height: 175, width: '100%', borderRadius: 10, position: 'absolute' }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 6, borderColor: '#FFFFFF', borderWidth: 1, marginRight: 6 }}>
                                        <Text style={{ fontSize: 12, color: 'white' }}>
                                            View More
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#4286F5', borderRadius: 6 }}>
                                        <Text style={{ fontSize: 12, color: 'white' }}>
                                            Send inquiry
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <Spacer size={size.mid} />
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setWorking(!isWorking)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Working Hours</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>
                            {
                                isWorking &&
                                <View>
                                    <Spacer size={size.mid} />
                                    <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                    <Spacer size={size.mid} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Monday</Text>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                        </View>
                                    </View>
                                    <Spacer size={size.mid} />

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Tuesday</Text>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                        </View>
                                    </View>
                                    <Spacer size={size.mid} />

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Wednesday</Text>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                        </View>
                                    </View>
                                    <Spacer size={size.mid} />

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Thursday</Text>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                        </View>
                                    </View>
                                    <Spacer size={size.mid} />

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400', color: '#4286F5' }}>Friday</Text>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                        </View>
                                    </View>
                                    <Spacer size={size.mid} />

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Saturday</Text>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>9 AM -5 PM</Text>
                                        </View>
                                    </View>
                                    <Spacer size={size.mid} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Sunday</Text>
                                        <Text style={{ alignSelf: 'flex-start', fontSize: 15, fontWeight: '400', color: "#0C3982", fontWeight: '600' }}>Closed</Text>
                                    </View>
                                    <Spacer size={size.mid} />
                                </View>
                            }

                        </View>
                        <Spacer size={size.mid} />
                        <View style={{ backgroundColor: '#EFF5FF', padding: 20, borderRadius: 10 }}>
                            <Text style={{ color: "black", fontSize: 22, fontWeight: '600' }}>Criteria</Text>
                            <Spacer size={size.mid} />
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{}}>

                                {
                                    switchBtn2 == 0 ?
                                        <TouchableOpacity style={{ backgroundColor: "#4286F5", borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10 }}>
                                            <Text style={{ color: 'white' }}>Add to Gallery</Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => {
                                            setSwitcBtn2(0)
                                        }} style={{ flexDirection: 'row' }}>

                                            <Text style={{ fontSize: 15, alignSelf: 'center', marginHorizontal: 15 }}>Add to Gallery</Text>
                                            <View style={{ width: 1, backgroundColor: '#BBBBBB' }} />
                                        </TouchableOpacity>
                                }
                                {
                                    switchBtn2 == 1 ?
                                        <TouchableOpacity style={{ backgroundColor: "#4286F5", borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10 }}>
                                            <Text style={{ color: 'white' }}>Listing Feature</Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => {
                                            setSwitcBtn2(1)
                                        }} style={{ flexDirection: 'row' }}>

                                            <Text style={{ fontSize: 15, alignSelf: 'center', marginHorizontal: 15 }}>Listing Feature</Text>
                                            <View style={{ width: 1, backgroundColor: '#BBBBBB' }} />
                                        </TouchableOpacity>
                                }
                                {
                                    switchBtn2 == 2 ?
                                        <TouchableOpacity style={{ backgroundColor: "#4286F5", borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10 }}>
                                            <Text style={{ color: 'white' }}>Site Feature</Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => {
                                            setSwitcBtn2(2)
                                        }} style={{ flexDirection: 'row' }}>

                                            <Text style={{ fontSize: 15, alignSelf: 'center', marginHorizontal: 15 }}>Site Feature</Text>
                                            <View style={{ width: 1, backgroundColor: '#BBBBBB' }} />
                                        </TouchableOpacity>
                                }
                                {
                                    switchBtn2 == 3 ?
                                        <TouchableOpacity style={{ backgroundColor: "#4286F5", borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10 }}>
                                            <Text style={{ color: 'white' }}>Business Tags</Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => {
                                            setSwitcBtn2(3)
                                        }} style={{ flexDirection: 'row' }}>

                                            <Text style={{ fontSize: 15, alignSelf: 'center', marginHorizontal: 15 }}>Business Tags</Text>
                                            <View style={{ width: 1, backgroundColor: '#BBBBBB' }} />
                                        </TouchableOpacity>
                                }
                                {
                                    switchBtn2 == 4 ?
                                        <TouchableOpacity style={{ backgroundColor: "#4286F5", borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10 }}>
                                            <Text style={{ color: 'white' }}>Location Tags</Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={() => {
                                            setSwitcBtn2(4)
                                        }} style={{ flexDirection: 'row' }}>

                                            <Text style={{ fontSize: 15, alignSelf: 'center', marginHorizontal: 15 }}>Location Tags</Text>
                                            <View style={{ width: 1, backgroundColor: '#BBBBBB' }} />
                                        </TouchableOpacity>
                                }

                            </ScrollView>
                            <Spacer size={size.lg} />
                            <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                            <Spacer size={size.lg} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={IMAGES.ELEVATORBTN} style={{ width: 25, height: 25 }} />
                                        <SpacerHorizontal size={size.sm} />
                                        <Text>Elevator in building</Text>
                                    </View>
                                    <Spacer size={size.sm} />
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={IMAGES.WIFIBTN} style={{ width: 25, height: 25 }} />
                                        <SpacerHorizontal size={size.sm} />
                                        <Text>Free WiFi</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={IMAGES.PARKINGBTN} style={{ width: 25, height: 25 }} />
                                        <SpacerHorizontal size={size.sm} />
                                        <Text>Free Parking</Text>
                                    </View>
                                    <Spacer size={size.sm} />
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={IMAGES.CLOUD} style={{ width: 25, height: 25 }} />
                                        <SpacerHorizontal size={size.sm} />
                                        <Text>Air Conditioned</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Spacer size={size.sm} />
                        {/* Gallery */}

                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setGallery(!isGallery)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Gallery</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity style={{ backgroundColor: "#4286F5", borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10 }}>
                                        <Text style={{ color: 'white' }}>Add to Gallery</Text>
                                    </TouchableOpacity>
                                    <SpacerHorizontal size={size.mid} />
                                    <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                                </View>
                            </TouchableWithoutFeedback>
                            {isGallery && <View>
                                <Spacer size={size.sm} />
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ textDecorationLine: 'underline', fontWeight: '600', fontSize: 15 }}>Profile</Text>
                                    <SpacerHorizontal size={size.mid} />
                                    <Text style={{ textDecorationLine: 'underline', fontWeight: '600', fontSize: 15 }}>Community</Text>
                                </View>
                                <Spacer size={size.sm} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.sm} />
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <TouchableOpacity onPress={() => { setSwitcBtn(0) }} style={{ paddingHorizontal: 20, paddingVertical: 8, backgroundColor: switchBtn == 0 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 0 ? 0 : 1 }}>
                                        <Text style={{ color: switchBtn == 0 ? 'white' : 'grey', alignSelf: 'center', fontSize: 16 }}>Photo</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setSwitcBtn(1) }} style={{ paddingHorizontal: 20, paddingVertical: 8, backgroundColor: switchBtn == 1 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 1 ? 0 : 1 }}>
                                        <Text style={{ color: switchBtn == 1 ? 'white' : 'grey', alignSelf: 'center', fontSize: 16 }}>Video</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setSwitcBtn(2) }} style={{ paddingHorizontal: 20, paddingVertical: 8, backgroundColor: switchBtn == 2 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 2 ? 0 : 1 }}>
                                        <Text style={{ color: switchBtn == 2 ? 'white' : 'grey', alignSelf: 'center', fontSize: 16 }}>Street view</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setSwitcBtn(3) }} style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 8, backgroundColor: switchBtn == 3 ? '#4286F5' : 'transparent', borderRadius: 4, borderColor: '#BBBBBB', borderWidth: switchBtn == 3 ? 0 : 1 }}>
                                        <Image source={IMAGES.DEGREE} style={{ width: 20, height: 20 }} />
                                        <SpacerHorizontal size={size.sh} />

                                        <Text style={{ color: switchBtn == 3 ? 'white' : 'grey', alignSelf: 'center', fontSize: 16 }}>360 Degree</Text>
                                    </TouchableOpacity>


                                </ScrollView>

                                <Spacer size={size.mid} />
                                <ScrollView horizontal>
                                    <Image source={IMAGES.MG1} style={{ width: 250, height: 150, borderRadius: 20, }} />
                                    <SpacerHorizontal size={size.mid} />
                                    <Image source={IMAGES.SHOPIMG} style={{ width: 250, height: 150, borderRadius: 20, }} />
                                    <SpacerHorizontal size={size.mid} />
                                    <Image source={IMAGES.MG3} style={{ width: 250, height: 150, borderRadius: 20, }} />
                                </ScrollView>
                            </View>}
                        </View>
                        <Spacer size={size.mid} />

                        <LeadGradientView Num={0} Title='Leads' />
                        <Spacer size={size.sm} />
                        <LeadGradientView Num={0} Title='Customers' />
                        <Spacer size={size.sm} />
                        <LeadGradientView Num={0} Title='Revenue' />
                        <Spacer size={size.sm} />
                        {/* Appointments */}
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setBooking(!isBooking)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Appointment booking</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>
                            {isBooking && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.mid} />
                                <TextInput style={{ paddingLeft: 15, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Your name*' />
                                <Spacer size={size.mid} />
                                <TextInput style={{ paddingLeft: 15, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Email address*' />
                                <Spacer size={size.mid} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text>Persons</Text>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#F8F8F8', borderRadius: 5, borderColor: '#EFEFEF', borderWidth: 1 }}>
                                        <Icons.Entypo name='minus' size={20} color='black' style={{ padding: 8 }} />
                                        <Text style={{ color: '#4286F5', padding: 8, paddingHorizontal: 15, borderLeftColor: '#EBEBEB', borderLeftWidth: 1, borderRightColor: '#EBEBEB', borderRightWidth: 1 }}>1</Text>
                                        <Icons.Entypo name='plus' size={20} color='black' style={{ padding: 8 }} />

                                    </View>
                                </View>
                                <Spacer size={size.mid} />
                                <TextInput style={{ paddingLeft: 15, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Date/Time' />
                                <Spacer size={size.mid} />
                                <TextInput multiline={true} style={{ height: 120, textAlignVertical: 'top', paddingLeft: 15, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Additional Information' />
                                <Spacer size={size.lg} />
                                <TouchableOpacity style={{ backgroundColor: "#4286F5", alignSelf: 'flex-end', borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10 }}>
                                    <Text style={{ color: 'white' }}>Book table now</Text>
                                </TouchableOpacity>
                            </View>}
                        </View>
                        <Spacer size={size.mid} />
                        {/* Our Special */}
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setSpecial(!isSpecial)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Our Special Items</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>
                            {isSpecial && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.mid} />
                                <SpecialItemView />
                                <Spacer size={size.mid} />
                                <SpecialItemView />
                                <Spacer size={size.mid} />
                                <SpecialItemView />
                                <Spacer size={size.mid} />
                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#4286F5", alignSelf: 'flex-end', borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Catalog</Text>
                                    <SpacerHorizontal size={size.sh} />
                                    <Icons.MaterialIcons name='file-download' size={20} color='white' />
                                </TouchableOpacity>
                            </View>}

                        </View>
                        <Spacer size={size.mid} />
                        {/* Todays Best */}
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setBest(!isBest)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Today's Best</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>
                            {isBest && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.mid} />

                                <View style={{ backgroundColor: '#F8F8F8', flexDirection: 'row', borderRadius: 8, width: '100%', borderColor: '#EFEFEF', borderWidth: 1, alignItems: 'center' }}>
                                    <SpacerHorizontal size={size.sm} />
                                    <Icons.MaterialCommunityIcons name='calendar-check' size={25} color='#4286F5' />
                                    <TextInput style={{ paddingLeft: 15, width: '75%', }} placeholder='Date' />
                                </View>
                                <Spacer size={size.mid} />
                                <Text style={{ fontWeight: '700', fontSize: 16 }}>Menu:</Text>
                                <Spacer size={size.sh} />
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#4286F5", alignSelf: 'flex-end', borderRadius: 4, paddingHorizontal: 25, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Main</Text>
                                    </TouchableOpacity>
                                    <SpacerHorizontal size={size.mid} />
                                    <Text>Dessert</Text>
                                    <SpacerHorizontal size={size.mid} />

                                    <View style={{ width: 1, height: 35, backgroundColor: '#BBBBBB' }} />
                                    <SpacerHorizontal size={size.mid} />
                                    <Text>Lunch</Text>
                                    <SpacerHorizontal size={size.mid} />

                                    <View style={{ width: 1, height: 35, backgroundColor: '#BBBBBB' }} />
                                    <SpacerHorizontal size={size.mid} />
                                    <Text>All</Text>


                                </View>
                                <Spacer size={size.sm} />
                                <TodaysBestItemView Title='Calabrian Black Sausage' />
                                <Spacer size={size.sm} />
                                <TodaysBestItemView Title='Saute Filet of Seabass' />
                                <Spacer size={size.sm} />
                                <TodaysBestItemView Title='Saute Crispy Goats' />
                                <Spacer size={size.sm} />
                                <Text style={{ fontWeight: '700', fontSize: 16 }}>Extra Services</Text>
                                <Spacer size={size.sm} />
                                <TodaysBestItemView Title='Steak Filet' />
                                <Spacer size={size.sm} />
                                <TodaysBestItemView Title='Miso chicken' />
                                <Spacer size={size.sm} />
                                <TodaysBestItemView Title='Wildberry' />
                                <Spacer size={size.sm} />
                                <TodaysBestItemView Title='Grill Salmont' />
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.mid} />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Total Cost</Text>
                                    <Text style={{ fontSize: 22, color: 'black' }}>$</Text>
                                    <Text style={{ fontSize: 22, color: 'black' }}>0.00</Text>
                                </View>
                                <Spacer size={size.mid} />
                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#4286F5", alignSelf: 'flex-end', borderRadius: 4, paddingHorizontal: 25, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Book now</Text>
                                </TouchableOpacity>
                                <Spacer size={size.mid} />
                                <Text style={{ color: 'red', fontStyle: 'italic' }}>The total cost above doesn't include 10% service fee.</Text>
                            </View>}
                        </View>
                        <Spacer size={size.mid} />
                        {/* Our Review */}
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setTeam(!isTeam)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Our Team</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>
                            {isTeam && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.sh} />
                                <View style={{ margin: 15, }}>
                                    <Image source={IMAGES.GRPIMG} style={{ width: '80%', height: 150, borderRadius: 6 }} />
                                    <Spacer size={size.sh} />
                                    <Text style={{ fontWeight: '800', fontSize: 16 }}>Alisa Gray</Text>
                                    <Text style={{ color: '#0C3982', fontWeight: '600' }}>Business consultant</Text>
                                    <Spacer size={size.sh} />
                                    <Text style={{ width: '80%', }} >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    </Text>
                                    <Spacer size={size.sh} />
                                    <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                    <Spacer size={size.sh} />
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icons.Ionicons name='call-sharp' color='#4286F5' size={20} />
                                        <SpacerHorizontal size={size.mid} />
                                        <Text>+91 8767567456</Text>
                                    </View>

                                </View></View>}
                        </View>
                        <Spacer size={size.mid} />

                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setReview(!isReview)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Review</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity style={{ backgroundColor: "#4286F5", borderRadius: 4, paddingHorizontal: 15, paddingVertical: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Write review</Text>
                                    </TouchableOpacity>
                                    <SpacerHorizontal size={size.xlg} />
                                    <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                                </View>
                            </TouchableWithoutFeedback>
                            {isReview && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.mid} />
                                <View style={{ marginHorizontal: 10 }}>
                                    <View style={{ backgroundColor: '#EFEFEF', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 4 }}>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>Add Review</Text>
                                    </View>
                                    <Spacer size={size.mid} />
                                    <ReviewSlideView Title='Cleanliness' />
                                    <Spacer size={size.sh} />
                                    <ReviewSlideView Title='Comfort' />
                                    <Spacer size={size.sh} />
                                    <ReviewSlideView Title='Staf' />
                                    <Spacer size={size.sh} />
                                    <ReviewSlideView Title='Facilities' />
                                    <Spacer size={size.mid} />
                                    <GreyTextInput faintBg={true} isAvatar={true} hint='Your Name*' />
                                    <Spacer size={size.mid} />
                                    <GreyTextInput faintBg={true} isAvatar={true} hint='Email Address*' />
                                    <Spacer size={size.mid} />

                                    <TextInput multiline={true} style={{ height: 120, textAlignVertical: 'top', paddingLeft: 15, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Your Review' />
                                    <Spacer size={size.mid} />
                                    <View style={{ backgroundColor: '#F8F8F8', paddingVertical: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }}>
                                        <Icons.MaterialCommunityIcons name='image-multiple' size={30} color='#4286F5' />
                                        <Text>Click here or drop files to upload</Text>
                                    </View>
                                    <Spacer size={size.lg} />

                                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#4286F5", alignSelf: 'flex-end', borderRadius: 4, paddingHorizontal: 25, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Submit review</Text>
                                    </TouchableOpacity>
                                    <Spacer size={size.lg} />
                                    <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                    <Spacer size={size.mid} />
                                    <View style={{ backgroundColor: '#EFF5FF', padding: 15, borderRadius: 10 }} >
                                        <View style={{ backgroundColor: '#0C3982', alignSelf: "flex-start", padding: 10, borderRadius: 4 }}>
                                            <Text style={{ color: 'white', fontWeight: '700' }}>3.5</Text>
                                        </View>
                                        <Spacer size={size.sm} />
                                        <StarsImage size={15} />
                                        <Spacer size={size.sm} />
                                        <Text style={{ fontWeight: '700' }}>Quality</Text>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <RangeSlider value={range.x5} />
                                            <SpacerHorizontal size={size.mid} />
                                            <Text>5.0</Text>
                                        </View>
                                        <Spacer size={size.sm} />

                                        <Text style={{ fontWeight: '700' }}>Price</Text>

                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <RangeSlider value={range.x3} />
                                            <SpacerHorizontal size={size.mid} />
                                            <Text>3.0</Text>
                                        </View>
                                        <Spacer size={size.sm} />

                                        <Text style={{ fontWeight: '700' }}>Location</Text>

                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <RangeSlider value={range.x3} />
                                            <SpacerHorizontal size={size.mid} />
                                            <Text>3.0</Text>
                                        </View>
                                        <Spacer size={size.sm} />

                                        <Text style={{ fontWeight: '700' }}>Service</Text>

                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <RangeSlider value={range.x3} />
                                            <SpacerHorizontal size={size.mid} />
                                            <Text>3.0</Text>
                                        </View>
                                        <Spacer size={size.sm} />

                                    </View>
                                    <Spacer size={size.xlg} />

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Image source={IMAGES.GIRLAVATAR2} style={{ width: 60, height: 60 }} />
                                        <View style={{
                                            backgroundColor: "#F5F5F5",
                                            padding: 15,
                                            borderRadius: 6
                                        }}>
                                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                <Text style={{ color: 'black', fontSize: 18 }}>Liza Rose</Text>
                                                <SpacerHorizontal size={size.mid} />
                                                <StarsImage size={15} />
                                                <SpacerHorizontal size={size.mid} />
                                                <View style={{ backgroundColor: '#0C3982', alignSelf: "flex-start", padding: 10, borderRadius: 4 }}>
                                                    <Text style={{ color: 'white', fontWeight: '700' }}>3.5</Text>
                                                </View>
                                            </View>
                                            <Spacer size={size.mid} />
                                            <View style={{ width: '82%' }}>
                                                <Text>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                </Text>
                                            </View>
                                            <Spacer size={size.mid} />

                                            <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                            <Spacer size={size.mid} />
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                                                <Icons.FontAwesome5 name='calendar-check' size={25} color='#4286F5' />
                                                <Text>3 Feb 2023</Text>
                                                <View style={{ flexDirection: 'row', padding: 5, borderRadius: 25, backgroundColor: 'white' }}>
                                                    <Icons.FontAwesome name='thumbs-up' size={15} color='#BBBBBB' />
                                                    <SpacerHorizontal size={size.sh} />
                                                    <Text style={{ fontSize: 11 }}>Helpful Review</Text>
                                                    <SpacerHorizontal size={size.sh} />
                                                    <Text style={{ fontSize: 11 }}>3</Text>
                                                </View>
                                            </View>
                                            <Spacer size={size.mid} />

                                            <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                            <Spacer size={size.mid} />
                                            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>

                                                <TouchableOpacity onPress={() => {
                                                    setReportClick(!isReportClick)
                                                }} style={{ backgroundColor: '#0C3982', alignSelf: "flex-start", padding: 10, borderRadius: 8 }}>
                                                    <Icons.Entypo name='reply' color='white' size={15} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => {
                                                    setModalVisible(true);
                                                }} style={{ backgroundColor: 'white', alignSelf: "flex-start", padding: 10, borderRadius: 8 }}>
                                                    <Icons.Ionicons name='flag' color='#BBBBBB' size={15} />
                                                </TouchableOpacity>

                                                {isReportClick && <View style={{ position: 'absolute', zIndex: 1, top: 42 }}>
                                                    <View style={{ backgroundColor: '#EFF5FF', padding: 5 }}>
                                                        <Text style={{ fontWeight: '600' }}>Report This Review</Text>
                                                    </View>
                                                    <View style={{ padding: 10, backgroundColor: 'white', }}>
                                                        <Text style={{ fontSize: 12 }}>Please Choose one of the following reasons.</Text>
                                                        <Spacer size={size.mid} />
                                                        <View style={{ alignSelf: 'flex-start', borderColor: 'grey', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                                                            <Text style={{ fontSize: 10 }}>Fake content</Text>
                                                        </View>
                                                        <Spacer size={size.sm} />
                                                        <View style={{ alignSelf: 'flex-start', borderColor: 'grey', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                                                            <Text style={{ fontSize: 10 }}>Inappropriate content</Text>
                                                        </View>
                                                        <Spacer size={size.sm} />

                                                        <View style={{ alignSelf: 'flex-start', borderColor: 'grey', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                                                            <Text style={{ fontSize: 10 }}>Abusive content</Text>
                                                        </View>
                                                    </View>
                                                </View>}
                                            </View>
                                        </View>
                                    </View>
                                </View></View>}
                        </View>
                        <Spacer size={size.mid} />

                        {/* Location */}
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, zIndex: -1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setLocation(!isLocation)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Location</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>
                            {isLocation && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.mid} />
                                <View style={{ width: '100%', height: 295, justifyContent: 'flex-end' }}>
                                    <Image source={IMAGES.MAP3} style={{ position: 'absolute', width: '100%', height: 295, borderRadius: 8 }} />
                                    <View style={{ marginRight: 10, marginBottom: 10, }}>
                                        <View style={{ padding: 10, alignSelf: 'flex-end', backgroundColor: 'white' }}>
                                            <Icons.Entypo name='plus' size={20} color='black' />
                                        </View>
                                        <Spacer size={size.sm} />
                                        <View style={{ padding: 10, alignSelf: 'flex-end', backgroundColor: 'white' }}>
                                            <Icons.Entypo name='minus' size={20} color='black' />
                                        </View>
                                    </View>
                                </View>
                                <Spacer size={size.mid} />
                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#4286F5", alignSelf: 'flex-end', borderRadius: 4, paddingHorizontal: 25, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Show direction</Text>
                                </TouchableOpacity></View>}
                        </View>
                        <Spacer size={size.mid} />

                        {/* Contacts */}
                        <View style={{ borderColor: '#BBBBBB', zIndex: -1, borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setContacts(!isContacts)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Contacts</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>

                            {isContacts && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.mid} />
                                <IconTitleDesc Icon={<Icons.Ionicons name={'location-sharp'} size={20} color='#4286F5' />} Title='Address :' Desc=' 27th Brooklyn New York, USA' />
                                <IconTitleDesc Icon={<Icons.Ionicons name={'md-call'} size={20} color='#4286F5' />} Title='Phone :' Desc='9743696650' />
                                <IconTitleDesc Icon={<Icons.Entypo name={'mail'} size={20} color='#4286F5' />} Title='Mail :' Desc='samplemail1@gmail.com' />
                                <IconTitleDesc Icon={<Icons.MaterialCommunityIcons name={'web'} size={20} color='#4286F5' />} Title='Website :' Desc='www.sample.com' />
                                <Spacer size={size.sm} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.sm} />
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={IMAGES.WHATSUP} style={{ width: 40, height: 40 }} />
                                    <SpacerHorizontal size={size.mid} />
                                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>Chat Via Whatsapp</Text>
                                </View>
                                <Spacer size={size.sm} />

                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.sm} />

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <SocialIcon Img={IMAGES.FBBLUE} />
                                        <SocialIcon Img={IMAGES.TWITERBLUE} />
                                        <SocialIcon Img={IMAGES.INSTABLUE} />
                                        <SocialIcon Img={IMAGES.VBLUE} />
                                    </View>
                                    <View style={{ width: 1, height: 60, backgroundColor: '#BBBBBB' }} />
                                    <TouchableOpacity onPress={() => {
                                        setModalVisible2(true)
                                    }}>

                                        <Icons.MaterialCommunityIcons name='email' size={45} color='#BBBBBB' />
                                    </TouchableOpacity>

                                </View>
                            </View>}
                        </View>
                        <Spacer size={size.mid} />

                        {/* Subcribed */}
                        <View style={{ backgroundColor: '#0C3982', width: '100%', borderRadius: 8, paddingHorizontal: 15, paddingVertical: 20 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '800', marginLeft: 10 }}>Subscribe</Text>
                            <Spacer size={size.sm} />
                            <View style={{ height: 1, backgroundColor: 'white' }} />
                            <Spacer size={size.sm} />
                            <Text style={{ color: 'white', fontWeight: '600', marginRight: 20, fontSize: 15, marginLeft: 10 }}>
                                Subscribe to Business Name alerts and never miss our promotional events.
                            </Text>
                            <Spacer size={size.xlg} />
                            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "white", alignSelf: 'flex-start', marginLeft: 10, borderRadius: 4, paddingHorizontal: 25, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 16, }}>Subscribe</Text>
                            </TouchableOpacity>
                        </View>
                        <Spacer size={size.mid} />
                        {/* Price Range */}
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setPriceRange(!isPriceRange)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Price Range</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />

                            </TouchableWithoutFeedback>
                            {isPriceRange && <View>


                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.mid} />
                                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#4286F5', fontSize: 15 }}>$</Text>
                                        <SpacerHorizontal size={size.sh} />
                                        <Text style={{ color: '#4286F5', fontSize: 15 }}>$</Text>
                                        <SpacerHorizontal size={size.sh} />
                                        <Text style={{ color: '#4286F5', fontSize: 15 }}>$</Text>
                                        <SpacerHorizontal size={size.sh} />
                                        <Text style={{ fontSize: 15 }}>$</Text>
                                        <SpacerHorizontal size={size.sh} />
                                        <Text style={{ fontSize: 15 }}>$</Text>
                                    </View>
                                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#FF8000", alignSelf: 'flex-start', marginLeft: 10, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 8, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 16, }}>Moderate</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 16, fontWeight: '600' }}>$60-$100</Text></View>
                            </View>}
                        </View>
                        <Spacer size={size.mid} />
                        {/* Business Representative */}
                        <BusinessResprentativeView onPress={() => {
                            setBussines(!isBussines)
                        }} MainTitle='Business Representative' isBusiness={isBussines} UserImg={IMAGES.GIRLAVATAR2} Name='Rose merry' Designation='Owner' BottomText1='Created Date' BottomText2='Modified Date' />
                        <Spacer size={size.mid} />
                        <BusinessResprentativeView onPress={() => {
                            setAgent(!isAgent)
                        }} MainTitle='Xity Agent' UserImg={IMAGES.AVATARBOY} isBusiness={isAgent} Name='Nick Doe' Designation='0 Listings' BottomText1='Approved Date' BottomText2='Managed Date' />
                        <Spacer size={size.mid} />
                        {/* Promoted Listnings */}
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setPromoted(!isPromoted)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Promoted Listings</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />
                            </TouchableWithoutFeedback>
                            {isPromoted && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.sh} />
                                <PromotedListningItem Img={IMAGES.CAFE} />
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.sh} />
                                <PromotedListningItem Img={IMAGES.CAFE} /></View>}
                        </View>
                        <Spacer size={size.mid} />

                        {/* Advertisement */}
                        <View style={{ borderColor: '#BBBBBB', borderWidth: 1, borderRadius: 10, padding: 15 }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setAd(!isAd)
                            }} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: "700", color: '#3B3B3B' }}>Advertisement</Text>
                                <Icons.Entypo name={'chevron-down'} size={25} color='#4286F5' style={{ alignSelf: 'center' }} />
                            </TouchableWithoutFeedback>
                            {isAd && <View>
                                <Spacer size={size.mid} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.sm} />
                                <Image source={IMAGES.BEACH} style={{ width: '100%', height: 280, borderRadius: 10 }} />
                                <Spacer size={size.sm} />
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: "500" }}>Apartment With Pool</Text>
                                <Spacer size={size.sm} />
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: "300" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
                                <Spacer size={size.sm} />
                                <View style={{ height: 1, backgroundColor: '#BBBBBB' }} />
                                <Spacer size={size.sm} />
                                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18 }}>1/10</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={IMAGES.LEFT} style={{ height: 30, width: 35, borderRadius: 4 }} />
                                        <SpacerHorizontal size={size.sh} />
                                        <Image source={IMAGES.RIGHT} style={{ height: 30, width: 35, borderRadius: 4 }} />
                                    </View>
                                </View></View>}
                        </View>
                        <Spacer size={size.mid} />
                        <HorizontalTextIcon Title='Service & Products' TitleColor='black' Icon='plus' Bg='#F3F3F3' />
                        <Spacer size={size.mid} />
                        <HorizontalTextIcon Title='FAQ' TitleColor='white' Icon='minus' Bg='#8BB7FF' />
                        <Spacer size={size.sm} />
                        <View style={{ padding: 15, elevation: 0.2, shadowColor: 'rgba(52, 52, 52, 0.15)', borderRadius: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: "black", fontSize: 15 }}>FAQs</Text>
                                <View style={{ backgroundColor: 'black', width: 2 }} />
                                <Text style={{ fontSize: 15 }}>Disclosure</Text>
                                <View style={{ backgroundColor: 'black', width: 2 }} />
                                <Text style={{ fontSize: 15 }}>Terms & Conditions</Text>
                            </View>
                            <Spacer size={size.sm} />
                            <Text style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                        </View>
                        <Spacer size={size.mid} />
                        <HorizontalTextIcon Title='Terms & Conditions' TitleColor='black' Icon='plus' Bg='#F3F3F3' />
                        <Spacer size={size.mid} />
                        <HorizontalTextIcon Title='Social feeds' TitleColor='black' Icon='plus' Bg='#F3F3F3' />
                        <Spacer size={size.mid} />
                        <HorizontalTextIcon Title='Activity' TitleColor='black' Icon='plus' Bg='#F3F3F3' />
                        <Spacer size={size.sm} />
                    </View>
                    <BlueWhiteGradientView />
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

export default DetailsScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFFFFF'
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
    overlayContainer: { height: 440, width: windowWidth },
    bottomView: { flexDirection: "row", padding: 15, justifyContent: "space-between" },
    bottomOverlayView: { borderRadius: 8, justifyContent: 'space-between', backgroundColor: 'white', flexDirection: 'row', elevation: 3, shadowOpacity: 0.1, shadowColor: 'black', },
    bottomOverlayView2: { borderRadius: 8, justifyContent: 'space-between', backgroundColor: 'white', flexDirection: 'row', elevation: 3, shadowOpacity: 0.1, shadowColor: 'black', paddingHorizontal: 15, height: 50 },
    overlayImg: { position: 'absolute', height: 465, width: windowWidth },


})