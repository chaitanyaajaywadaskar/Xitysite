import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPField = ({ onChange }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef([]);

    const handleOTPChange = (index, text) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text.length === 1) {
            const nextIndex = index + 1;
            if (nextIndex < 6) {
                inputs.current[nextIndex].focus();
            }
        }
        onChange(newOtp.join(''));
    };

    return (
        <View style={styles.container}>
            {otp.map((otpValue, index) => (
                <TextInput
                    key={index}
                    style={styles.otpInput}
                    value={otpValue}
                    maxLength={1}
                    keyboardType="number-pad"
                    onChangeText={text => handleOTPChange(index, text)}
                    ref={input => {
                        inputs.current[index] = input;
                    }}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        alignSelf: 'center',
    },
    otpInput: {
        width: 30,
        height: 50,
        borderBottomWidth: 2,
        borderColor: 'black',
        textAlign: 'center',
    },
});

export default OTPField;
