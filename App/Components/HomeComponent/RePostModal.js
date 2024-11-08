import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { AppTextInput, Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const RePostModal = ({ setRePostModalVisible }) => {
    const colors = useTheme()
    return (
        <View
            style={styles.modalStyl}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Text
                    style={styles.headingText}>
                    Re Post
                </Text>
                <Icon
                    name='close'
                    type='AntDesign'
                    color={'#EB0000'}
                    onPress={() => setRePostModalVisible(false)}
                />
            </View>
            <View
                style={{
                    height: moderateScale(0.5),
                    width: '100%',
                    backgroundColor: colors.primaryFontColor,
                    marginTop: moderateScale(8)
                }}
            />
            <View
                style={styles.imgTextInputView}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' }}
                    style={styles.imageStyl}
                />
                <AppTextInput
                    placeholder='Write a text'
                    inputStyle={styles.inputStyl}
                    inputContainerStyle={styles.inputContainerStyle}
                    mainContainerStyle={{ width: '82%' }}
                    rightAction={
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <Image
                                source={require('../../Assets/Home/Emoji.png')}
                                style={{
                                    ...styles.sendImg,
                                    marginRight: moderateScale(8)
                                }}
                            />
                            <Image
                                source={require('../../Assets/Home/send.png')}
                                style={styles.sendImg}
                            />
                        </View>
                    }
                />
            </View>
        </View>
    )
}

export default RePostModal

const styles = StyleSheet.create({
    modalStyl: {
        backgroundColor: '#FFFFFF',
        padding: moderateScale(10),
        borderRadius: moderateScale(8)
    },
    headingText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(16)
    },
    imageStyl: {
        height: moderateScale(35),
        width: moderateScale(35),
        borderRadius: moderateScale(50),
        marginRight: moderateScale(10)
    },
    imgTextInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(15)
    },
    inputStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    inputContainerStyle: {
        height: moderateScale(45),
        borderRadius: moderateScale(50)
    },
    sendImg: {
        height: moderateScale(20),
        width: moderateScale(20),

    }
})