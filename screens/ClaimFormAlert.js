import { View, Text, Dimensions, Modal, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';
import CheckBox from '@react-native-community/checkbox';
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ClaimFormAlert = ({ visible, onRequestClose, onCrossClick, isSelected, setSelection }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        ><View style={{
            flex: 1,
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
                <View style={{ backgroundColor: 'white', borderRadius: 4, alignSelf: 'center', width: windowWidth * 0.9 }}>
                    <View style={{ backgroundColor: '#0C3982', flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Claim your business listing</Text>
                        <TouchableOpacity onPress={onCrossClick}>
                            <Icons.Entypo name={'cross'} size={30} color='white' style={{}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TextInput style={{ fontSize: 12, paddingLeft: 15, height: 40, backgroundColor: '#F8F8F8', borderRadius: 5, width: '48%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='First Name' />
                            <TextInput style={{ fontSize: 12, paddingLeft: 15, height: 40, backgroundColor: '#F8F8F8', borderRadius: 5, width: '48%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Last Name' />
                        </View>
                        <Spacer size={size.mid} />
                        <TextInput style={{ fontSize: 12, paddingLeft: 15, height: 40, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Business Email' />
                        <Spacer size={size.mid} />
                        <TextInput style={{ fontSize: 12, paddingLeft: 15, height: 40, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Phone ' />
                        <Spacer size={size.mid} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput style={{ fontSize: 12, paddingLeft: 15, height: 40, backgroundColor: '#F8F8F8', borderRadius: 5, width: '90%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='Verification Details' />
                            <SpacerHorizontal size={size.sm} />

                            <Icons.Entypo name='attachment' color='black' size={20} />
                        </View>
                        <Spacer size={size.mid} />
                        <Text style={{ color: 'black', fontWeight: '400' }}>New User? to signup enter an email</Text>
                        <Spacer size={size.mid} />

                        <TextInput style={{ fontSize: 12, paddingLeft: 15, height: 40, backgroundColor: '#F8F8F8', borderRadius: 5, width: '100%', borderColor: '#EFEFEF', borderWidth: 1 }} placeholder='sample@gmail.com ' />
                        <Spacer size={size.mid} />

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}

                            />
                            <SpacerHorizontal size={size.sm} />
                            <Text style={{ fontSize: 12, fontWeight: '500' }}>Returning User? Check this box to sign in</Text>
                        </View>
                        <Spacer size={size.mid} />

                        <TouchableOpacity onPress={() => {
                            // navigation.navigate('Listning')
                        }} style={{ backgroundColor: "#4286F5", alignItems: 'center', borderRadius: 4, paddingVertical: 10 }}>
                            <Text style={{ color: 'white' }}>Claim Your Business Now!</Text>
                        </TouchableOpacity>
                        <Spacer size={size.mid} />

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icons.FontAwesome5 name='shield-alt' color='#34BE03' />
                            <SpacerHorizontal size={size.sh} />
                            <Text style={{ fontSize: 11 }}>Claim request is processed after verification...</Text>
                        </View>
                    </View>
                </View>
            </View></Modal>
    )
}

export default ClaimFormAlert