import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, CheckBox, Container, RadioButton, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import LinearGradient from 'react-native-linear-gradient'
const { height, width } = Dimensions.get('window')

const SignIn = () => {
    const colors = useTheme()
    const [selected, setSelected] = useState('LoremIpsum');
    return (
        <Container>
            <StatusBar translucent={true} backgroundColor={'transparent'} />

            <LinearGradient
                colors={[colors.gradientColorOne, colors.gradientColorTwo]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.linerGradient}
            >
                <View
                    style={styles.imageBackground}>
                    <Image
                        source={require('../../Assets/eliteemployeeexperiencehublogo.png')}
                        style={styles.imageStyl}
                    />
                </View>
            </LinearGradient>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(30)
                }}>
                <Text
                    style={styles.StayConnected}>
                    Login To Your Acccount
                </Text>

                <AppTextInput
                    title='Email Id :'
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputContainer}
                    mainContainerStyle={styles.mainContainerStyle}
                    titleStyle={styles.titleStyl}
                    keyboardType='email-address'
                    placeholder='abc@gmail.com'
                />
                <View
                    style={{
                        height: moderateScale(1),
                        width: '100%',
                        backgroundColor: colors.gradientColorTwo
                    }}
                />
                <AppTextInput
                    title='Password :'
                    inputStyle={styles.inputText}
                    inputContainerStyle={styles.inputContainer}
                    mainContainerStyle={{
                        ...styles.mainContainerStyle,
                        marginTop: moderateScale(15)
                    }}
                    titleStyle={styles.titleStyl}
                    secureTextEntry={true}
                    placeholder='Enter your password'
                />
                <View
                    style={{
                        height: moderateScale(1),
                        width: '100%',
                        backgroundColor: colors.gradientColorTwo,
                        marginBottom: moderateScale(15)
                    }}
                />
                <View
                    style={styles.radioButtonTextView}>
                    <RadioButton
                        selected={selected == 'LoremIpsum'}
                        onChange={(val) => setSelected('LoremIpsum')}
                        size={20}
                        containerStyle={{
                            borderWidth: moderateScale(1),
                            marginRight: moderateScale(10),
                        }}
                        activeColor={colors.gradientColorOne}
                    />
                    <Text
                        style={styles.radioText}>
                        I agree with the{' '}
                        <Text
                            style={{
                                ...styles.radioText,
                                color: colors.gradientColorTwo
                            }}>
                            terms and condition
                        </Text>
                    </Text>
                </View>
                <View
                    style={styles.radioButtonTextView}>
                    <RadioButton
                        selected={selected == 'LoremIpsum2'}
                        onChange={(val) => setSelected('LoremIpsum2')}
                        size={20}
                        containerStyle={{
                            borderWidth: moderateScale(1),
                            marginRight: moderateScale(10),
                        }}
                        activeColor={colors.gradientColorOne}
                    />
                    <Text
                        style={styles.radioText}>
                        Remember Password
                    </Text>
                </View>

                <View
                    style={styles.buttonView}>
                    <AppButton
                        title='Login'
                        textStyle={styles.titleStyl}
                        style={styles.buttonStyl}
                        gradient={true}
                        gradientColors={[colors.gradientColorOne, colors.gradientColorTwo]}
                        gradientStart={{ x: 0, y: 2 }}
                        gradientEnd={{ x: 1, y: 0 }}
                        onPress={() => NavigationService.navigate('AppStack')}
                    />
                    <LinearGradient
                        colors={[colors.gradientColorOne, colors.gradientColorTwo]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.linerGradientButtonStyl}
                    >
                        <TouchableOpacity
                            style={styles.forgotBox}>
                            <Text
                                style={{
                                    ...styles.titleStyl,
                                    fontSize: moderateScale(14)
                                }}>
                                Forgot Password ?*
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <Text
                    style={{
                        ...styles.bottomText,
                        marginTop: moderateScale(20)
                    }}>
                    *Still Can't Login?
                </Text>
                <Text
                    style={{
                        ...styles.bottomText,
                        // marginTop: moderateScale(20)
                    }}>
                    Contacy Your Company HR
                </Text>

            </ScrollView>
        </Container>
    )
}

export default SignIn

const styles = StyleSheet.create({
    linerGradient: {
        height: height / 2.5,
        width: width,
        borderBottomLeftRadius: moderateScale(15),
        borderBottomRightRadius: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBackground: {
        backgroundColor: '#FFFFFF',
        height: moderateScale(120),
        width: moderateScale(120),
        borderRadius: moderateScale(100),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyl: {
        height: moderateScale(100),
        width: moderateScale(100),
        borderRadius: moderateScale(100)
    },
    StayConnected: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(20),
        marginVertical: moderateScale(10),
        textAlign: 'center'
    },
    inputContainer: {
        height: moderateScale(42),
        borderRadius: moderateScale(5),
        borderWidth: 0
    },
    mainContainerStyle: {
        marginTop: moderateScale(15),
        // marginHorizontal: moderateScale(50),
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    },
    inputText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15)
    },
    buttonView: {
        flexDirection: 'row',
        marginTop: moderateScale(42),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonStyl: {
        width: '40%',
        borderRadius: moderateScale(30),
        height: moderateScale(42),
        marginHorizontal: 0,
    },
    linerGradientButtonStyl: {
        height: moderateScale(42),
        width: '55%',
        borderRadius: moderateScale(30),
        marginHorizontal: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgotBox: {
        backgroundColor: '#FFFFFF',
        height: moderateScale(38),
        width: '98%',
        borderRadius: moderateScale(30),
        marginHorizontal: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioButtonTextView: {
        flexDirection: 'row',
        marginTop: moderateScale(10),
        alignItems: 'center',
    },
    radioText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    bottomText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
})