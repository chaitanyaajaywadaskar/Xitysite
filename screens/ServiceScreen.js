import { View, Text, Image, Dimensions, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import FloatButton from './FloatButton'
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import ExpandedView from './ExpandedView';
import BottomView from './BottomView'
import { Dropdown } from 'react-native-element-dropdown';
import Icons from './Icons/IconsSet';
import { Pressable } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomAppBar from './CustomAppBar'
import ApiManager from './ApiManager'
import IMAGES from '../constants/ImagesContant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const ServiceScreen = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [category, setCategory] = useState([]);
    const [category1, setCategory1] = useState([]);
    const [category2, setCategory2] = useState([]);

    useEffect(() => {
        stateData()
        cityData()
        pincodeData()
    }, [])

    stateData = () => {
        ApiManager.get('api/state')
            .then(function (response) {
                console.log('Hoo' + response.data);
                var count = Object.keys(response.data.data).length;
                let dropDownData = [];

                for (var i = 0; i < count; i++) {
                    dropDownData.push({ value: response.data.data[i]._id, label: response.data.data[i].name });
                }
                setCategory(dropDownData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    cityData = () => {
        ApiManager.get('api/city')
            .then(function (response) {
                console.log('Coo' + response.data);
                var count = Object.keys(response.data).length;
                let dropDownData = [];

                for (var i = 0; i < count; i++) {
                    dropDownData.push({ value: response.data.data[i]._id, label: response.data.data[i].name });
                }
                setCategory1(dropDownData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    pincodeData = () => {
        ApiManager.get('api/pincode')
            .then(function (response) {
                console.log('Hoo' + response.data.data[0].pincodeno);
                var count = Object.keys(response.data.data).length;
                let dropDownData = [];

                for (var i = 0; i < count; i++) {
                    dropDownData.push({ value: response.data.data[i]._id, label: response.data.data[i].pincodeno.toString() });
                }
                setCategory2(dropDownData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // const data = [
    //     { label: 'Assam ', value: '1' },
    //     { label: 'Bihar', value: '2' },
    //     { label: 'Bombay', value: '3' },
    //     { label: 'East Punjab', value: '4' },
    //     { label: 'Madhya Pradesh', value: '5' },
    //     { label: 'Maharastra', value: '6' },
    //     { label: 'Goa', value: '7' },
    //     { label: 'Rajanstan', value: '8' },
    // ];
    // const data1 = [
    //     { label: 'Mumbai', value: '1' },
    //     { label: 'Kolkatta', value: '2' },
    //     { label: 'Hydrabad', value: '3' },
    //     { label: 'Banglore', value: '4' },
    //     { label: 'Pune', value: '5' },
    //     { label: 'Jaipur', value: '6' },
    //     { label: 'Nagpur', value: '7' },
    //     { label: 'Nashik', value: '8' },
    // ];
    // const data2 = [
    //     { label: '411001', value: '1' },
    //     { label: '445602', value: '2' },
    //     { label: '451052', value: '3' },
    //     { label: '485621', value: '4' },
    //     { label: '485621', value: '5' },
    //     { label: '485621', value: '6' },
    //     { label: '485621', value: '7' },
    //     { label: '485641', value: '8' },
    // ];
    return (
        <View >

            <Image source={IMAGES.SERVICEBG} style={styles.imgStyle} />
            <CustomAppBar />

            <Pressable onPress={() => {
                setExpand(false)
            }} >
                <View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ height: responsiveHeight(20) }} />

                        <View style={styles.styleCenter}>
                            <Text style={styles.textStyle}>Not In Service</Text>
                            <View style={styles.line} />
                            <Text style={styles.shortTextStyle}>We are yet to commence at your pin code location. We will add your pin code location shortly.</Text>
                            <Text style={styles.mediumStyle}>Choose from available {'\n'}pin code towns</Text>
                            <Spacer size={size.mid} />

                            <Dropdown
                                style={styles.dropdown}
                                containerStyle={styles.dropContainer}
                                selectedTextStyle={{ color: 'black' }}
                                search={true}
                                searchPlaceholder='Search here'
                                renderRightIcon={() => (
                                    <Icons.Entypo name={isFocus ? 'chevron-up' : 'chevron-down'} color='grey' size={20} />
                                )}
                                data={category}
                                maxHeight={150}
                                labelField="label"
                                valueField="value"
                                placeholder="Select State"
                                placeholderStyle={styles.placeholder}
                                value={value}
                                onChange={item => {
                                    setValue(item.name);
                                }}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                            />
                            <Dropdown
                                style={styles.dropdown}
                                containerStyle={styles.dropContainer}
                                selectedTextStyle={{ color: 'black' }}
                                search={true}
                                searchPlaceholder='Search here'
                                renderRightIcon={() => (
                                    <Icons.Entypo name={isFocus1 ? 'chevron-up' : 'chevron-down'} color='grey' size={20} />
                                )}
                                data={category1}
                                maxHeight={150}
                                labelField="label"
                                valueField="value"
                                placeholder="Select City"
                                placeholderStyle={styles.placeholder}
                                value={value1}
                                onChange={item => {
                                    setValue1(item.value);
                                }}
                                onFocus={() => setIsFocus1(true)}
                                onBlur={() => setIsFocus1(false)}

                            />
                            <Dropdown
                                style={styles.dropdown}
                                containerStyle={styles.dropContainer}
                                search={true}
                                searchPlaceholder='Search here'
                                selectedTextStyle={{ color: 'black' }}
                                renderRightIcon={() => (
                                    <Icons.Entypo name={isFocus2 ? 'chevron-up' : 'chevron-down'} color='grey' size={20} />
                                )}
                                data={category2}
                                maxHeight={150}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Pincode"
                                placeholderStyle={styles.placeholder}
                                value={value2}
                                onChange={item => {
                                    setValue2(item.value);
                                }}
                                onFocus={() => setIsFocus2(true)}
                                onBlur={() => setIsFocus2(false)}

                            />


                            <Spacer size={size.xxlg} />
                            <TouchableOpacity style={styles.goBtn} onPress={() => {

                                navigation.navigate('Invited')
                            }}>
                                <Text style={styles.buttonText}>Go</Text>
                            </TouchableOpacity>
                            <Spacer size={size.xlg} />
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '800', alignSelf: 'center' }}>Or</Text>
                            <Spacer size={size.xlg} />
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Home')
                            }} style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#0C3982', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 5 }} >
                                <Text style={{ color: 'white', fontWeight: '700', fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Regular' }}>Back to Home</Text>
                                <SpacerHorizontal size={size.sm} />
                                <Image source={IMAGES.HOME} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: responsiveHeight(20) }} />


                        <BottomView />

                    </ScrollView></View>
                {/* FLOATBUTTON */}

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

                        }}
                        onClose={() => { setExpand(false) }} /> : <FloatButton onPress={() => { setExpand(true) }} />
                }
            </Pressable>


        </View>
    )
}

export default ServiceScreen

const styles = StyleSheet.create({
    styleCenter: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
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
    goBtn: { width: '30%', padding: 10, borderRadius: 8, backgroundColor: '#4286F5', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' },

    dropdown: {
        height: 45,
        marginHorizontal: 30,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingLeft: 15,
        paddingRight: 10
    },
    dropContainer: {
        borderRadius: 8,
        marginTop: 5,
    },
    placeholder: {
        fontSize: 12
    },
    textStyle: {
        fontSize: responsiveFontSize(3.5),
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Raleway-Bold',
        fontWeight: 'bold'
    },
    mediumStyle: {
        marginTop: 10,
        fontSize: responsiveFontSize(2.5),
        color: 'white',
        fontFamily: 'Raleway-Bold',
        fontWeight: '900',
        textAlign: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontWeight: '700',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: responsiveFontSize(2)
    },
    line: {
        width: responsiveWidth(60),
        height: 2,
        marginTop: 8,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    shortTextStyle: {
        fontSize: responsiveFontSize(1.8),
        fontFamily: 'Roboto-Regular',
        width: '70%',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        color: 'white',
        textAlign: 'center',
    },
})
