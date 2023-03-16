import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import mainImage from '../images/mainImage.png'
import CustomAppBar from './CustomAppBar';
import BottomView from './BottomView';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FeedbackCompletedScreen = () => {
    return (
        <View>
            <ScrollView>
                <View style={{ height: height }}>
                    <CustomAppBar />
                    <Image source={mainImage} style={{ position: 'absolute', height: height, width: width }} />
                    <View style={{ backgroundColor: 'rgba(255,255,255,0.5)', position: 'absolute', height: height, width: width * 0.9, alignSelf: 'center' }} />
                    <View style={styles.centered}>
                        <Text style={styles.title}>Thanks, Name,(Dynamic) We really appreciate your feedback</Text>
                        <Text style={styles.subtext}>We'll use your answers to improve and grow.</Text>
                        <TouchableOpacity style={{ backgroundColor: '#012C72', paddingHorizontal: 50, paddingVertical: 14, borderRadius: 8 }}>
                            <Text style={styles.feedbackbutton}>Feedback</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <BottomView />
            </ScrollView>
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
        height: 140,
        width: 230,
        color: '#000000',
        fontWeight: '500',
        textAlign: 'center'
    },
    button: {
        borderRadius: 9,
        paddingHorizontal: 25,
        padding: 12,
        alignSelf: 'center',
        backgroundColor: '#012C72',
        margin: 25
    },
    subtext: {
        alignSelf: 'center',
        height: 70,
        width: 180,
        fontSize: 17,
        textAlign: 'center'
    },
    feedbackbutton: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    }
})
export default FeedbackCompletedScreen