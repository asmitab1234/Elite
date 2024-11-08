import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { AppButton, AppTextInput, Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const HobbieModal = ({ SetHobbieModal }) => {
    return (
        <View
            style={styles.modalStyl}>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: moderateScale(15)
                }}>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.bold,
                        fontSize: moderateScale(20)
                    }}>
                    Hobbies
                </Text>
                <TouchableOpacity
                    onPress={() => SetHobbieModal(false)}>
                    <Icon
                        name='close'
                        type='AntDesign'
                        size={26}
                        color={'#B41C1C'}
                    />
                </TouchableOpacity>
            </View>

            <AppTextInput
                title='Hobbies : '
                titleStyle={styles.headingText}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.fontStyl}
            />

            <AppTextInput
                title='Hobby Background Color : '
                titleStyle={styles.headingText}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.fontStyl}
                mainContainerStyle={{
                    marginTop: moderateScale(8)
                }}
            />

            <AppButton
                title='Submit'
                style={styles.buttonStyl}
                textStyle={styles.headingText}
                onPress={() => SetHobbieModal(false)}
            />
        </View>
    )
}

export default HobbieModal

const styles = StyleSheet.create({
    modalStyl: {
        // height: height / 2,
        // width: width,
        borderRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        padding: moderateScale(20),
    },
    headingText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    inputContainerStyle: {
        borderRadius: moderateScale(5),
        height: moderateScale(45)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        marginHorizontal: 0,
        marginTop: moderateScale(20)
    }
})