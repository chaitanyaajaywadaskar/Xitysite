import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../images/xity.png'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet'

const LegalDash = ({ navigation }) => {
    return (
        <View>
            <View style={{ backgroundColor: '#0C3982', paddingHorizontal: 25, paddingVertical: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{}} onPress={() => {
                            navigation.navigate('Home')

                        }}>
                            <Image source={Logo} style={{ height: 35, width: 60 }} />
                        </TouchableOpacity>
                        <Spacer size={size.sm} />
                        {/* <Text style={{ color: 'white' }}>LEGAL</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* <TouchableOpacity>
                            <Icons.AntDesign name='search1' size={30} color='white' />
                        </TouchableOpacity> */}
                        <SpacerHorizontal size={size.mid} />
                        <TouchableOpacity onPress={() => {
                            navigation.getParent('left_drawer4').openDrawer()
                        }}>
                            <Icons.Ionicons name='menu' size={40} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ color: '#8BB7FF' }}>Application</Text>
                    <Icons.AntDesign name='right' size={15} color='white' />
                    <Text style={{ color: 'white' }}>Dashboard</Text>
                </View> */}
            </View>
        </View>
    )
}

export default LegalDash