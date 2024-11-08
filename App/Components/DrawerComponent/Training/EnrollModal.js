import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../../Constants/Fonts'
import { moderateScale } from '../../../Constants/PixelRatio'

const EnrollModal = ({ setVisisbleModal }) => {
  return (
    <View
      style={styles.modalStyl}>

      <Text
        style={styles.fontStyl}>
        Are You Sure ?
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <AppButton
          title='Yes, Enroll It'
          style={styles.buttonStyl}
          textStyle={styles.headingText}
        />
        <AppButton
          title='Cancel'
          style={styles.buttonStyl}
          textStyle={styles.headingText}
          onPress={() => setVisisbleModal(false)}
        />
      </View>

    </View>
  )
}


export default EnrollModal

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
  fontStyl: {
      fontFamily: FONTS.Roboto.bold,
      fontSize: moderateScale(18),
      textAlign: 'center'
  },
  buttonStyl: {
      height: moderateScale(45),
      borderRadius: moderateScale(5),
      marginHorizontal: 0,
      marginTop: moderateScale(20),
      width: '45%'
  }
})