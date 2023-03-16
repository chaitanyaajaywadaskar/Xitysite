import { View, Text, StyleSheet, Dimensions, TextInput, Image, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import SliderBase from '@react-native-community/slider';
import CheckBox from '@react-native-community/checkbox';
import Thum from '../images/thum.png'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CategoriesAlert = ({ visible, onRequestClose, onCrossClick, sliderValue, isSelected, setSelection, setSliderValue }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        ><View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
                <View style={{ padding: 15, backgroundColor: 'white', borderRadius: 4, alignSelf: 'center', width: windowWidth * 0.85, alignContent: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>
                            Filters
                        </Text>
                        <TouchableOpacity onPress={onCrossClick} style={{ paddingLeft: 10, }}>
                            <Icons.Entypo name={'cross'} color='black' size={30} style={{}} />

                        </TouchableOpacity>
                    </View>
                    <Spacer size={size.sh} />

                    <View style={{ height: 1, backgroundColor: '#CFCFCF' }} />
                    <View style={{ marginHorizontal: 15 }}>
                        <Spacer size={size.lg} />
                        <View style={{ flexDirection: 'row', backgroundColor: '#F8F8F8', borderRadius: 4, borderColor: 'rgba(207, 207, 207, .5)', borderWidth: 1 }}>
                            <View style={{ flex: 0.07, marginVertical: 3, paddingVertical: 10, paddingLeft: 15 }}>
                                <Icons.FontAwesome name='bookmark-o' size={18} color={'#0C3982'} />
                            </View>
                            <View style={{ flex: 0.9, paddingLeft: 10, justifyContent: 'center' }}>
                                <TextInput placeholder='What are you looking for?' placeholderTextColor='grey' underlineColor='transparent' activeUnderlineColor='black' style={{ height: 40, backgroundColor: '#F8F8F8' }}></TextInput>
                            </View>
                        </View>
                        <Spacer size={size.sh} />
                        <View style={{ flexDirection: 'row', backgroundColor: '#F8F8F8', borderRadius: 4, borderColor: 'rgba(207, 207, 207, .5)', borderWidth: 1 }}>
                            <View style={{ flex: 0.07, marginVertical: 3, paddingVertical: 10, paddingLeft: 15 }}>
                                <Icons.Feather name='menu' size={18} color={'#0C3982'} />
                            </View>
                            <View style={{ flex: 0.8, paddingLeft: 10, justifyContent: 'center' }}>
                                <TextInput placeholder='All Categories' placeholderTextColor='grey' underlineColor='transparent' activeUnderlineColor='black' style={{ height: 40, backgroundColor: '#F8F8F8' }}></TextInput>
                            </View>
                            <View style={{ flex: 0.1, paddingLeft: 10, justifyContent: 'center' }}>
                                <Icons.Entypo name='chevron-down' size={22} color={'#0C3982'} />
                            </View>
                        </View>
                        <Spacer size={size.sh} />
                        <View style={{ flexDirection: 'row', backgroundColor: '#F8F8F8', borderRadius: 4, borderColor: 'rgba(207, 207, 207, .5)', borderWidth: 1 }}>
                            <View style={{ flex: 0.07, marginVertical: 3, paddingVertical: 10, paddingLeft: 15 }}>
                                <Icons.Feather name='menu' size={18} color={'#0C3982'} />
                            </View>
                            <View style={{ flex: 0.8, paddingLeft: 10, justifyContent: 'center' }}>
                                <TextInput placeholder='Sub Categories' placeholderTextColor='grey' underlineColor='transparent' activeUnderlineColor='black' style={{ height: 40, backgroundColor: '#F8F8F8' }}></TextInput>
                            </View>
                            <View style={{ flex: 0.1, paddingLeft: 10, justifyContent: 'center' }}>
                                <Icons.Entypo name='chevron-down' size={22} color={'#0C3982'} />
                            </View>
                        </View>


                        <Spacer size={size.mid} />
                        <TouchableOpacity onPress={() => {
                            setModalVisible(true)
                        }} style={{ padding: 10, flexDirection: 'row', borderRadius: 4, backgroundColor: '#00B900', justifyContent: 'center', alignItems: 'center' }}>
                            <Icons.AntDesign name='clockcircleo' size={20} color='white' />
                            <SpacerHorizontal size={size.sh} />
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Open Now</Text>
                            <SpacerHorizontal size={size.sh} />

                            <Icons.Feather name='check' size={20} color='white' />

                        </TouchableOpacity>
                        <Spacer size={size.sm} />
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Price:</Text>
                        <Spacer size={size.sm} />
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text>$00</Text>
                            <Text>$00</Text>
                            <Text>$000</Text>
                            <Text>$0000</Text>
                            <Text>$00000</Text>
                        </View>
                        <SliderBase
                            style={{ marginVertical: 5 }}
                            minimumValue={0}
                            maximumValue={1}
                            onValueChange={(value) => {
                                setSliderValue(value);
                            }}
                            value={sliderValue}
                            minimumTrackTintColor="#0C3982"
                            maximumTrackTintColor="#EFEFEF"
                            thumbTintColor='#4286F5'
                            thumbImage={Thum}
                        />
                        <Spacer size={size.sm} />
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Site Features</Text>
                        <Spacer size={size.sh} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                            />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ fontSize: 16, }}>Elevator in building</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                            />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ fontSize: 16, }}>Instant Book</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                            />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ fontSize: 16, }}>Free WiFi</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                            />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ fontSize: 16, }}>Smoking Allowed</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                            />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ fontSize: 16, }}>Friendly workspace</Text>
                        </View>
                        <Spacer size={size.sh} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ backgroundColor: '#4286F5', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 4 }}><Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>Search</Text></TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, borderRadius: 4, borderWidth: 1, borderColor: 'grey' }}><Text style={{ fontWeight: '600', fontSize: 15 }}>Reset Filters</Text></TouchableOpacity>
                        </View>
                    </View>
                </View></View>
        </Modal>
    )
}

export default CategoriesAlert