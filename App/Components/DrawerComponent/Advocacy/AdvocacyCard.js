import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import NavigationService from '../../../Services/Navigation'
import moment from 'moment'
import NodataFound from '../../../Screens/NodataFound/NodataFound'

const AdvocacyCard = ({ item }) => {
  return (<>

    {item == 0 ? <NodataFound /> :
      <Card
        onPress={() => NavigationService.navigate('AdvocacySingleScreen', { Postid: item?._id })}
        shadow={false}
        style={styles.mainCard}>
        <Image
          style={styles.imageStyl}
          source={{ uri: item?.image }}
        />
        <Text
          style={styles.title}>
          {item.title}
        </Text>
        <View
          style={styles.bottomCardView}>
          <Image
            style={styles.user}
            source={{ uri: item?.userImage }}
          />
          <View>
            <Text
              style={styles.nameText}>
              {item?.userName}
            </Text>
            <Text
              style={styles.date}>
              {moment(item?.createdOn).format('MMMM Do YYYY')}
            </Text>
          </View>
        </View>
      </Card>
    }
  </>
  )
}

export default AdvocacyCard

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: moderateScale(6),
    marginTop: moderateScale(10),
    width: moderateScale(162),
    padding: 0
  },
  imageStyl: {
    height: moderateScale(100),
    marginHorizontal: moderateScale(8),
    marginTop: moderateScale(8),
    borderRadius: moderateScale(5)

  },
  title: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(13),
    marginHorizontal: moderateScale(8)
  },
  bottomCardView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
    backgroundColor: '#FFFFFF',
    padding: moderateScale(10)
  },
  user: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(80)
  },
  nameText: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(11),
    marginHorizontal: moderateScale(8)
  },
  date: {
    fontFamily: FONTS.Roboto.light,
    fontSize: moderateScale(10),
    marginHorizontal: moderateScale(8)
  }
})