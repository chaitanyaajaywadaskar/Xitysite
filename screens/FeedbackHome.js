import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons/IconsSet';
import CustomAppBar from './CustomAppBar';
import BottomView from './BottomView';
import ExpandedView from './ExpandedView';
import FloatButton from './FloatButton';
import IMAGES from '../constants/ImagesContant'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const FeedbackHome = ({ navigation }) => {
    const [isExpand, setExpand] = useState(false);

    return (
        <View>
            <CustomAppBar />
            <ScrollView >
                <View style={{ height: height }}>
                    <Image source={IMAGES.MAINIMAGE} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', position: 'absolute', height: height, width: width * 0.9, alignSelf: 'center' }}>
                    </View>
                    <View style={styles.centered}>
                        <Text style={styles.title}>YOUR FEEDBACK PLEASE</Text>
                        <Text style={styles.subtext}>So, you just visited our site?</Text>
                        <Text style={styles.subtext}>We'd love to hear your thoughts.</Text>
                        <TouchableOpacity style={styles.button}
                            onPress={() => navigation.navigate('FeedbackFirst')}
                        >
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 21 }}>Let's Go</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons.MaterialCommunityIcons name={'clock'} size={19} color='black' style={{ alignSelf: 'center' }} />
                            <Text style={{ fontSize: 16, padding: 8 }}>Takes 7+ minutes</Text>
                        </View>
                        <Text style={{ fontSize: 19 }}>10 Questions</Text>
                    </View></View>
                <BottomView />
            </ScrollView>

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
        </View>
    )
}
const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        marginVertical: 2,
        color: '#000000',
        marginBottom: 15,
        fontWeight: '500'
    },
    button: {
        borderRadius: 9,
        paddingHorizontal: 25,
        padding: 12,
        alignSelf: 'center',
        backgroundColor: '#012C72',
        margin: 25

    }
})
export default FeedbackHome