import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import UserImg from '../images/user.png'
import Directory from '../images/files.png'
import Market from '../images/market.png'
import Community from '../images/community.png'
import Blog from '../images/blog.png'
import Icons from './Icons/IconsSet'
import Coupons from '../images/coupons.png'
import Job from '../images/job.png'
import Events from '../images/events.png'
import Webinar from '../images/webinar.png'
import Forum from '../images/forum.png'
import RFQ from '../images/rfq.png'
import Contribute from '../images/contribute.png'
import Delivery from '../images/delivery.png'
import Marketing from '../images/marketing.png'
import CS from '../images/support.png'
import Govt from '../images/govt.png'
import Xclub from '../images/xclub.png'
import Logo from '../images/logo.png'
import Spacer from './spacer';
import { size } from './size';
import ExpandIconButton from './ExpandIconButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CustomDrawer3 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#4286F5', }}>
            <View style={{ paddingVertical: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0C3982' }}>
                <Image source={UserImg} resizeMode='cover' style={{ width: 120, height: 120, borderRadius: 5 }} />
                <Spacer size={size.sh} />
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 18 }}>Username</Text>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#4286F5', paddingHorizontal: 15, paddingVertical: 20 }}>
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>MAIN</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Directory} onPress={() => {
                    navigation.navigate('HomeDirectory')
                }} name='Directory' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Market} onPress={() => { }} name='Marketplace' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Community} onPress={() => { }} name='Community' isBig={true} />
                <Spacer size={size.mid} />
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>AUXILLARY</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Blog} onPress={() => { }} name='Blog' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Coupons} onPress={() => { }} name='Deals & Coupons' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Job} onPress={() => { }} name='Jobs' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Events} onPress={() => { }} name='Events' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Webinar} onPress={() => { }} name='Webinar' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Forum} onPress={() => { }} name='Forum' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Forum} onPress={() => { }} name='E-Learning' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={RFQ} onPress={() => { }} name='RFQ' isBig={true} />
                <Spacer size={size.mid} />

                <ExpandIconButton Img={Contribute} onPress={() => { }} name='Contribute' isBig={true} />

                <Spacer size={size.mid} />
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>HUMAN RESOURCES</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Delivery} onPress={() => { }} name='Delivery' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Marketing} onPress={() => { }} name='Marketing' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={CS} onPress={() => { }} name='Customer Care' isBig={true} />
                <Spacer size={size.mid} />
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>OTHERS</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Govt} onPress={() => { }} name='Government' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Xclub} onPress={() => { }} name='X-Club' isBig={true} />
                <Spacer size={size.mid} />
                <Text style={{ color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>PUBLICATION</Text>
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Govt} onPress={() => { }} name='City Magazines' isBig={true} />
                <Spacer size={size.mid} />
                <ExpandIconButton Img={Xclub} onPress={() => { }} name='Local NewsLetters' isBig={true} />

                <Spacer size={size.xxxlg} />
            </ScrollView>
            <View style={{
                justifyContent: 'space-between', paddingHorizontal: 15,
                paddingVertical: 15,
                backgroundColor: '#0C3982',
                flexDirection: 'row',
            }}>
                <Image source={Logo} resizeMode='contain' style={{
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