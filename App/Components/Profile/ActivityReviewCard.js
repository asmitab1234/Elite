import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../Constants/Fonts'
import { modeToNum } from 'react-native-big-calendar'
import { moderateScale } from '../../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'

const ActivityReviewCard = () => {
  return (
    <View>
      <Text
        style={styles.TextStyl}>
        Thank You Card
      </Text>
      <ImageBackground
        source={require('../../Assets/ThankYou/ThankYouclean.png')}
        style={styles.cardStyl}
        resizeMode='stretch'
      ></ImageBackground>
    </View>
  )
}

export default ActivityReviewCard

const styles = StyleSheet.create({
  TextStyl: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(15),
    marginTop: moderateScale(10)
  },
  cardStyl: {
    height: moderateScale(270),
    marginTop:moderateScale(8)
    // width: '96%',
    // marginHorizontal: moderateScale(15)
  },
})