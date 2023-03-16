import { View, Text, Image } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet'

import callimage from '../images/callimage.png'
import writetous from '../images/writetous.png'


const BottomPage = () => {
    return (

        <View>
            <View style={{ alignSelf: 'center', borderBottomLeftRadius: 40, borderTopLeftRadius: 40, borderColor: '#CFCFCF', borderWidth: 0.4, height: 80, width: 320, backgroundColor: 'white', marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={callimage} style={{ height: 55, width: 55, alignSelf: 'center' }} />
                        <View style={{ marginLeft: 15, paddingTop: 5 }}>
                            <Text style={{ color: '#0C3982', fontWeight: '500' }}>Call Us</Text>
                            <Text style={{ color: '#000000' }}>+91 7895677869</Text>
                        </View>
                    </View>
                    <View><Icons.MaterialIcons name={'keyboard-arrow-left'} size={23} color='#4286F5' /></View>
                </View>
            </View>

            <View style={{ alignSelf: 'center', borderBottomRightRadius: 40, borderTopRightRadius: 40, borderColor: '#CFCFCF', borderWidth: 0.4, height: 80, width: 320, backgroundColor: 'white', marginBottom: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, justifyContent: 'space-between' }}>
                    <Icons.MaterialIcons name={'keyboard-arrow-right'} size={23} color='#4286F5' />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignSelf: 'flex-end', paddingBottom: 5 }}>
                            <Text style={{ color: '#0C3982', fontWeight: '500', marginLeft: 53 }}>Write to us</Text>
                            <Text style={{ color: '#000000' }}>sample@gmail.com</Text>
                        </View>
                        <Image source={writetous} style={{ height: 55, width: 55, alignSelf: 'center' }} />
                    </View>
                </View>
            </View>
        </View>

    )
}



export default BottomPage