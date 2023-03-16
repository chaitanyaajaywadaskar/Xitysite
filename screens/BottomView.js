import { View, Linking, Text } from 'react-native'
import React, { useCallback } from 'react'

const supportedURL = 'https://ornda.com/';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            console.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Text onPress={handlePress} style={{ color: 'white', fontWeight: '800', alignSelf: 'center', fontSize: 15 }}>{children}</Text>;
};

const BottomView = () => {
    return (
        <View style={{
            height: 60, width: '100%', backgroundColor: '#164677', justifyContent: 'center',
        }} >
            <OpenURLButton url={supportedURL}>© ORNDA ® 2023-23</OpenURLButton>

        </View>
    )
}

export default BottomView