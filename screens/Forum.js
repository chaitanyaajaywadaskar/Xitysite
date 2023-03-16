import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MyAccount from './MyAccount'
import Suggestionsblock from './Suggestionsblock'
import BottomPage from './BottomPage'

const Forum = () => {
    return (
        <View style={{ marginLeft: 10, marginRight: 10 }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: '700', color: 'black', alignItems: 'center', paddingBottom: 12 }}>
                    My Account
                </Text>
                <MyAccount Title={'1.'} subtitle='How to Create an Account' />
                <MyAccount Title={'2.'} subtitle='Best Practices for Account Security' />
                <MyAccount Title={'3.'} subtitle='Export and Back Up Account Data' />
                <MyAccount Title={'4.'} subtitle='Change Your Account Email Address' />

                <TouchableOpacity style={{ marginTop: 17, backgroundColor: '#4286F5', paddingHorizontal: 42, borderRadius: 20, paddingVertical: 12, alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '400' }}>View</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: '700', color: 'black', alignItems: 'center', paddingBottom: 12 }}>
                    My Account
                </Text>
                <MyAccount Title={'1.'} subtitle='How to Create an Account' />
                <MyAccount Title={'2.'} subtitle='Best Practices for Account Security' />
                <MyAccount Title={'3.'} subtitle='Export and Back Up Account Data' />
                <MyAccount Title={'4.'} subtitle='Change Your Account Email Address' />

                <TouchableOpacity style={{ marginTop: 17, backgroundColor: '#4286F5', paddingHorizontal: 42, borderRadius: 20, paddingVertical: 12, alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '400' }}>View</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: '700', color: 'black', alignItems: 'center', paddingBottom: 12 }}>
                    My Account
                </Text>
                <MyAccount Title={'1.'} subtitle='How to Create an Account' />
                <MyAccount Title={'2.'} subtitle='Best Practices for Account Security' />
                <MyAccount Title={'3.'} subtitle='Export and Back Up Account Data' />
                <MyAccount Title={'4.'} subtitle='Change Your Account Email Address' />

                <TouchableOpacity style={{ marginTop: 17, backgroundColor: '#4286F5', paddingHorizontal: 42, borderRadius: 20, paddingVertical: 12, alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '400' }}>View</Text>
                </TouchableOpacity>
            </View>

            <Suggestionsblock />
            <View style={{ marginBottom: 40 }}></View>
            <Text style={{ fontSize: 25, fontWeight: '600', color: '#0C3982', alignSelf: 'center' }}>Still Need Help ?</Text>
            <View style={styles.smallmargin}></View>
            <BottomPage />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,

        padding: 24,
        backgroundColor: 'white',
        alignSelf: 'center',
        height: 275,
        width: 330,
        marginBottom: 20
    },
    smallmargin: {
        borderWidth: 1.5,
        borderColor: "#4286F5",
        borderRadius: 10,
        margin: 10,
        alignSelf: 'center',
        width: 80,
        marginBottom: 30
    }

})
export default Forum