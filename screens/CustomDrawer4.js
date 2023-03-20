import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Spacer from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet'
import DrawerIconTextItem from './DrawerIconTextItem'
import IMAGES from '../constants/ImagesContant'

const CustomDrawer4 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#4286F5', }}>
            <View style={[styles.blueContainer, { justifyContent: 'space-between' }]}>
                <Image source={IMAGES.LOGO} resizeMode='contain' style={styles.logo} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'white', width: 1.5 }} />
                    <TouchableOpacity onPress={() => {
                        navigation.getParent('left_drawer3').closeDrawer()

                    }} style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 20, height: 35, width: 35, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderRadius: 35 / 2, backgroundColor: '#4286F5' }}>

                            <Icons.Entypo name={'cross'} color='white' size={30} />
                        </View>
                    </TouchableOpacity></View>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#4286F5', paddingHorizontal: 15, paddingVertical: 20 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={IMAGES.USERIMG} style={{ width: 70, height: 70 }} />
                    <Spacer size={size.sh} />
                    <Text style={{ color: 'white', fontWeight: '700', fontSize: 18 }}>Username</Text>
                    <Spacer size={size.xxlg} />
                    <DrawerIconTextItem LeadingIcon={
                        <Icons.Ionicons name='notifications-outline' color='white' size={20} />
                    }
                        Title='Notification'
                        TrailingIcon='plus'
                    />
                    <DrawerIconTextItem LeadingIcon={
                        <Icons.FontAwesome name='user-o' color='white' size={20} />
                    }
                        Title='My Profile'
                        TrailingIcon='right'
                    />
                    <DrawerIconTextItem LeadingIcon={
                        <Icons.Entypo name='inbox' color='white' size={20} />
                    }
                        Title='Inbox'
                        TrailingIcon='right'
                    />
                    <DrawerIconTextItem LeadingIcon={
                        <Image source={IMAGES.TODO} resizeMode='contain' style={{ height: 22, width: 22 }} />
                    }
                        Title='Things To Do'
                        TrailingIcon='right'
                    />
                    <DrawerIconTextItem LeadingIcon={
                        <Image source={IMAGES.ACTIVITY} resizeMode='contain' style={{ height: 22, width: 22 }} />
                    }

                        Title='Activity'
                        TrailingIcon='right'
                    />
                    <DrawerIconTextItem LeadingIcon={
                        <Image source={IMAGES.CHAT} resizeMode='contain' style={{ height: 22, width: 22 }} />
                    }

                        Title='Chats'
                        TrailingIcon='right'
                    />
                    <DrawerIconTextItem onPress={() => { navigation.navigate('Contact') }} LeadingIcon={
                        <Image source={IMAGES.CONTACT} resizeMode='contain' style={{ height: 22, width: 22 }} />
                    }

                        Title='Contacts'
                        TrailingIcon='right'
                    />

                    <DrawerIconTextItem LeadingIcon={
                        <Icons.Ionicons name='md-call-sharp' color='white' size={20} />

                    }

                        Title='Calls'
                        TrailingIcon='right'
                    />
                    <DrawerIconTextItem Line={false} LeadingIcon={
                        <Icons.AntDesign name='setting' color='white' size={20} />

                    }

                        Title='Settings'
                        TrailingIcon='plus'
                    />

                    <Spacer size={size.sm} />

                </View>
            </ScrollView>
            <View style={{ paddingVertical: 15, paddingHorizontal: 15, backgroundColor: '#0C3982' }}>
                <TouchableOpacity style={{ backgroundColor: "#4286F5", paddingVertical: 15, borderRadius: 4 }}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, fontWeight: '600' }}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer4

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: '#4286F5' },
    blueContainer: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: '#0C3982',
        flexDirection: 'row',
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row'
    },
    imgView: {
        width: 23,
        height: 23,
        alignSelf: 'center'
    },
    logo: {
        width: 80,
        height: 40
    },
    textStyle: { color: 'white', fontSize: 18, fontWeight: '700', alignSelf: 'center' }
})