import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import StarsImage from './StarsImage'
import Spacer from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const TestomonialCard = ({ User, }) => {
    return (
        <View style={{ height: 250, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <View style={{ borderWidth: 1, alignContent: 'center', borderRadius: 10, width: windowWidth * 0.85, alignSelf: 'center', borderColor: '#BBBBBB', height: 200 }}>
                <Image source={User} resizeMode='contain' style={{ width: 70, height: 70, position: 'absolute', top: -35, alignSelf: 'center', }} />

                <Spacer size={size.xxxlg} />

                <View style={{ alignSelf: 'center', height: 40, flexDirection: 'row' }}>
                    <Icons.FontAwesome name={'star'} size={20} color='gold' style={{ alignSelf: 'center' }} />
                    <Icons.FontAwesome name={'star'} size={20} color='gold' style={{ alignSelf: 'center' }} />
                    <Icons.FontAwesome name={'star'} size={20} color='gold' style={{ alignSelf: 'center' }} />
                    <Icons.FontAwesome name={'star'} size={20} color='gold' style={{ alignSelf: 'center' }} />
                    <Icons.FontAwesome name={'star'} size={20} color='gold' style={{ alignSelf: 'center' }} />
                </View>
                <Text style={{ width: windowWidth * 0.7, alignSelf: 'center', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</Text>
                <Text style={{ fontWeight: '800', color: 'black', fontSize: 18, alignSelf: "center" }}>Business Name</Text>
                <View style={{ alignSelf: 'center', position: 'absolute', bottom: 0, borderTopLeftRadius: 12, borderTopRightRadius: 12, paddingHorizontal: 20, paddingVertical: 5, backgroundColor: '#0C3982' }}>
                    <Text style={{ color: 'white' }}>Date: 1/2/23</Text>
                </View>
                <Spacer size={size.xlg} />

            </View></View>
    )
}

export default TestomonialCard