import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet'
import Spacer from './spacer';
import { size } from './size';
import ExpandIconButton from './ExpandIconButton';
import IMAGES from '../constants/ImagesContant'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CustomDrawer3 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#4286F5', }}>
            <View style={{ paddingVertical: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0C3982' }}>
                <Image source={IMAGES.USERIMG} resizeMode='cover' style={{ width: 120, height: 120, borderRadius: 5 }} />
                <Spacer size={size.sh} />
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 18 }}>Username</Text>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#4286F5', paddingHorizontal: 15, paddingVertical: 20 }}>
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>MAIN</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.FILES} onPress={() => {
                    navigation.navigate('HomeDirectory')
                }} name='Directory' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.MARKET} onPress={() => { }} name='Marketplace' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.COMMUNITY} onPress={() => { }} name='Community' isBig={true} />
                <Spacer size={size.mid} />
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>AUXILLARY</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.BLOG} onPress={() => { }} name='Blog' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.COUPON} onPress={() => { }} name='Deals & Coupons' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.JOB} onPress={() => { }} name='Jobs' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.EVENT} onPress={() => { }} name='Events' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.WEBINAR} onPress={() => { }} name='Webinar' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.FORUM} onPress={() => { }} name='Forum' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.FORUM} onPress={() => { }} name='E-Learning' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.RFQ} onPress={() => { }} name='RFQ' isBig={true} />
                <Spacer size={size.mid} />

                <ExpandIconButton Img={IMAGES.CONTRIBUTE} onPress={() => { }} name='Contribute' isBig={true} />

                <Spacer size={size.mid} />
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>HUMAN RESOURCES</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.DELIVERY} onPress={() => { }} name='Delivery' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.MARKETING} onPress={() => { }} name='Marketing' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.SUPPORT} onPress={() => { }} name='Customer Care' isBig={true} />
                <Spacer size={size.mid} />
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>OTHERS</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.GOVT} onPress={() => { }} name='Government' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.XCLUB} onPress={() => { }} name='X-Club' isBig={true} />
                <Spacer size={size.mid} />
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>PUBLICATION</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.GOVT} onPress={() => { }} name='City Magazines' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={IMAGES.XCLUB} onPress={() => { }} name='Local NewsLetters' isBig={true} />

                <Spacer size={size.xxxlg} />
            </ScrollView>
            <View style={{
                justifyContent: 'space-between', paddingHorizontal: 15,
                paddingVertical: 15,
                backgroundColor: '#0C3982',
                flexDirection: 'row',
            }}>
                <Image source={IMAGES.LOGO} resizeMode='contain' style={{
                    width: 60,
                    height: 35
                }} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'white', width: 1.5 }} />
                    <TouchableOpacity onPress={() => {
                        navigation.getParent('left_drawer2').closeDrawer()

                    }} style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 20, height: 35, width: 35, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderRadius: 35 / 2, backgroundColor: '#4286F5' }}>

                            <Icons.Entypo name={'cross'} color='white' size={30} />
                        </View>
                    </TouchableOpacity></View>
            </View>
        </View>
    )
}

export default CustomDrawer3

const styles = StyleSheet.create({})