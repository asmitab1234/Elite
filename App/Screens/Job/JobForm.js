import { Dimensions, Image, Modal, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, CheckBox, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BackHeader from '../../Components/Header/BackHeader'
const { height, width } = Dimensions.get('window')

const JobForm = () => {
    const colors = useTheme()
    const [check, setCheck] = useState(false);
    const [text, setText] = useState('')
    return (
        <Container>
            <BackHeader title='Job Title' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ViewStyl}>

                <View
                    style={styles.imageInput}>
                    <Image
                        source={require('../../Assets/Refferal/Designation.png')}
                        style={styles.imgStyl}
                    />
                    <AppTextInput
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        inputContainerStyle={styles.inputContainer}
                        value='Lorem Ipsum'
                    />
                </View>
                <View
                    style={styles.imageInput}>
                    <Image
                        source={require('../../Assets/Refferal/time.png')}
                        style={styles.imgStyl}
                    />
                    <AppTextInput
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        inputContainerStyle={styles.inputContainer}
                        value='Full Time'
                    />
                </View>
                <View
                    style={styles.imageInput}>
                    <Image
                        source={require('../../Assets/Refferal/Skills.png')}
                        style={styles.imgStyl}
                    />
                    <AppTextInput
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        inputContainerStyle={styles.inputContainer}
                        value='React'
                    />
                </View>
                <View
                    style={styles.imageInput}>
                    <Image
                        source={require('../../Assets/Refferal/LocationIcon.png')}
                        style={styles.imgStyl}
                    />
                    <AppTextInput
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        inputContainerStyle={styles.inputContainer}
                        value='Kolkata'
                    />
                </View>

                <View
                    style={styles.chckBoxText}>
                    <Text
                        style={styles.fontStyl}>
                        Open to Referral Hiring
                    </Text>
                    <CheckBox
                        checked={check}
                        onChange={(val) => setCheck(val)}
                        size={18}
                        containerStyle={{
                            borderWidth: moderateScale(1),
                            marginLeft: moderateScale(8),
                        }}
                        inactiveBackgroundColor={'transparent'}
                    />
                </View>

                <View style={styles.viewLine} />

                <AppTextInput
                    title='Why Join Us'
                    titleStyle={{
                        ...styles.fontStyl,
                        fontSize: moderateScale(18),
                    }}
                    inputStyle={{
                        ...styles.fontStyl,
                        // width: '10%'
                    }}
                    mainContainerStyle={{
                        ...styles.inputBox,
                        width: '100%',
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer,
                        height: moderateScale(80),
                    }}
                // numberOfLines={10}
                // value='Fractals Global Services is a next-gen Digital and HR Services, Software Products, and branding and Marketing company. We leverage Data, Cognitive Automation Technologies, and Online Media to develop products and solutions that help clients and society at large to accelerate value creation.'
                />

                <AppTextInput
                    title='Position Description'
                    titleStyle={{
                        ...styles.fontStyl,
                        fontSize: moderateScale(18),
                    }}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        ...styles.inputBox,
                        width: '100%',
                        marginTop: moderateScale(8)
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer,
                        height: moderateScale(80),
                    }}
                />

                <AppTextInput
                    title='Responsibilities'
                    titleStyle={{
                        ...styles.fontStyl,
                        fontSize: moderateScale(18),
                    }}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        ...styles.inputBox,
                        width: '100%',
                        marginTop: moderateScale(8)
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer,
                        height: moderateScale(80),
                    }}
                />

                <AppTextInput
                    title='Qualifications'
                    titleStyle={{
                        ...styles.fontStyl,
                        fontSize: moderateScale(18),
                    }}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        ...styles.inputBox,
                        width: '100%',
                        marginTop: moderateScale(8)
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer,
                    }}
                />

                <AppTextInput
                    title='Good To Have'
                    titleStyle={{
                        ...styles.fontStyl,
                        fontSize: moderateScale(18),
                    }}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        ...styles.inputBox,
                        width: '100%',
                        marginTop: moderateScale(8)
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer,
                    }}

                />

                <Text
                    style={{
                        ...styles.fontStyl,
                        fontSize: moderateScale(18),
                        marginTop: moderateScale(8)
                    }}>
                    Sounds you know someone who can fit?
                </Text>

                <View
                    style={styles.buttonView}>
                    <AppButton
                        title='Refer'
                        textStyle={{
                            ...styles.fontStyl,
                            fontSize: moderateScale(17)
                        }}
                        style={styles.refferBox}
                    />
                    <AppButton
                        title='Apply'
                        textStyle={{
                            ...styles.fontStyl,
                            fontSize: moderateScale(17)
                        }}
                        style={styles.refferBox}
                    />
                </View>
            </ScrollView>
        </Container>
    )
}

export default JobForm

const styles = StyleSheet.create({
    ViewStyl: {
        marginHorizontal: moderateScale(15)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15),
    },
    imgStyl: {
        height: moderateScale(30),
        width: moderateScale(30),
        marginRight: moderateScale(8)
    },
    imageInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(8)
    },
    inputBox: {
        width: '85%',
        // marginLeft: moderateScale(10),

    },
    inputContainer: {
        height: moderateScale(40),
        borderWidth: 0,
        backgroundColor: '#999999BE',
        borderRadius: moderateScale(0)
    },
    chckBoxText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(8)
    },
    viewLine: {
        height: moderateScale(2),
        width: '100%',
        backgroundColor: '#666060',
        borderRadius: moderateScale(20),
        marginVertical: moderateScale(10)
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(20),
        justifyContent: 'space-between'
    },
    refferBox: {
        height: moderateScale(50),
        width: moderateScale(120),
        backgroundColor: '#E0BB82D3',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 0
    }
})