import { Image, View } from 'react-native'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react-native'
import SettingLottie from '../lottiefiles/loader.json'
import IMAGES from '../constants/ImagesContant';
const LoaderScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Drawer')
        }, 3000);
    })
    return (
        <View style={{ flex: 1, backgroundColor: '#dbecf9', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={IMAGES.LOADER} style={{

            }} />
            {/* <Lottie source={SettingLottie} autoPlay={true} loop={true} style={{
                width: 50,
                height: 50,
            }} />  */}
        </View>
    )
}

export default LoaderScreen