import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { AppButton, Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const NotificationAcceptModal = ({ setModalVisible }) => {
    const colors = useTheme()
    return (
        <View
            style={styles.modalStyl}>
            <View
                style={styles.imageNameView}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D' }}
                        style={styles.imageStyl}
                    />
                    <View
                        style={{
                            marginLeft: moderateScale(8)
                        }}>
                        <Text
                            style={styles.textStyl}>
                            Niladri Roy
                        </Text>
                        <Text
                            style={{
                                ...styles.textStyl,
                                fontFamily: FONTS.Roboto.light,
                            }}>
                            10 Days Ago
                        </Text>
                    </View>
                </View>
                <Icon
                    name='close'
                    type='AntDesign'
                    size={28}
                    color={'#C71212'}
                    onPress={() => setModalVisible(false)}
                />
            </View>
            <Text
                style={{
                    ...styles.textStyl,
                    marginVertical: moderateScale(10)
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <AppButton
                    title='Approve'
                    style={{
                        ...styles.buttonStyl,
                        backgroundColor: '#3A992E'
                    }}
                    textStyle={{
                        ...styles.textStyl,
                        color: colors.secondaryThemeColor
                    }}
                />
                <AppButton
                    title='Reject'
                    style={{
                        ...styles.buttonStyl,
                        backgroundColor: '#B91313D5'
                    }}
                    textStyle={{
                        ...styles.textStyl,
                        color: colors.secondaryThemeColor
                    }}
                />
            </View>
        </View>
    )
}

export default NotificationAcceptModal

const styles = StyleSheet.create({
    modalStyl: {
        padding: moderateScale(8),
        borderRadius: moderateScale(8),
        backgroundColor: '#FFFFFF'
    },
    imageNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageStyl: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(50)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    buttonStyl: {
        height: moderateScale(45),
        marginHorizontal: moderateScale(0),
        width: '45%'
    }
})