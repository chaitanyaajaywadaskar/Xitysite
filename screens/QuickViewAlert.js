import { View, Text, StyleSheet, Dimensions, TextInput, Image, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../images/map2.png'
import Icons from './Icons/IconsSet';
import Combo from '../images/combologo.png'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
const QuickViewAlert = ({ visible, onRequestClose, onCrossClick }) => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(52, 52, 52, 0.4)'
            }}>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={onCrossClick}>
                        <Icons.Entypo name='cross' size={35} color='white' />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, alignSelf: 'center', width: windowWidth * 0.85, alignContent: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ width: '100%', height: windowHeight * 0.32 }}>
                            <Image source={Map} style={{ position: 'absolute', width: '100%', borderRadius: 10, height: windowHeight * 0.32 }} />
                            <View style={{ height: windowHeight * 0.32, alignItems: 'flex-end', justifyContent: 'flex-end', alignSelf: 'flex-end', padding: 15 }}>
                                <TouchableOpacity style={{ borderRadius: 4, backgroundColor: 'white', width: 35, height: 35, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icons.Entypo name='plus' size={22} color='black' /></TouchableOpacity>
                                <Spacer size={size.sm} />
                                <TouchableOpacity style={{ borderRadius: 4, backgroundColor: 'white', width: 35, height: 35, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icons.Entypo name='minus' size={22} color='black' /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ padding: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icons.Ionicons name='checkmark-circle' size={22} color='#0EBC31' />
                                <SpacerHorizontal size={size.sh} />
                                <Icons.Ionicons name='checkmark-circle' size={22} color='#FFBB00' />
                                <SpacerHorizontal size={size.sm} />
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>Luxary Restaurant</Text>
                            </View>
                            <Spacer size={size.mid} />
                            <Image source={Combo} resizeMode='contain' style={{ height: 40, width: '70%' }} />
                            <Spacer size={size.mid} />
                            <Text>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            </Text>
                            <Spacer size={size.mid} />
                            <TouchableOpacity style={{ backgroundColor: "#53C20A", paddingHorizontal: 25, flexDirection: 'row', alignSelf: 'flex-start', borderRadius: 5, paddingVertical: 12 }}>
                                <Icons.Ionicons name='md-call-sharp' size={20} color='white' />
                                <SpacerHorizontal size={size.sm} />
                                <Text style={{ color: 'white', fontSize: 16 }}>Call Now</Text>
                            </TouchableOpacity>
                        </View>

                    </View></View>
            </View>
        </Modal>
    )
}

export default QuickViewAlert