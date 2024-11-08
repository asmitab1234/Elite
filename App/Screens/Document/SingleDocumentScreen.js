import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Icon, StatusBar, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const SingleDocumentScreen = () => {
  return (
    <Container>
      <StatusBar backgroundColor={'transparent'} barStyle='dark-content' translucent={true} />
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D' }}
        style={styles.imageStyl}
      >
        <Icon
          name='chevron-small-left'
          type='Entypo'
          size={40}
          color={'#FFFFFF'}
          style={{
            position: 'absolute',
            top: 40,
            left: 15
          }}
          onPress={() => NavigationService.back()}
        />
      </ImageBackground>

      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Text
          style={styles.titleStyl}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </Text>
        <Text
          style={styles.titleStyl1}>
          Version - {' '}
          <Text
            style={{
              ...styles.titleStyl1,
              fontFamily: FONTS.Roboto.regular
            }}>
            10
          </Text>
        </Text>
        <Pressable
          onPress={() => NavigationService.navigate('Profile')}
          style={styles.bottomCardView}>
          <Image
            style={styles.user}
            source={require('../../Assets/Home/user.png')}
          />
          <View>
            <Text
              style={styles.nameText}>
              Mrs. Lorem Ipsum
            </Text>
            <Text
              style={styles.date}>
              Feb 19,2024
            </Text>
          </View>
        </Pressable>

        <View style={styles.lineStyl} />

        <Text
          style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
        </Text>
        {/* 
        <Text
          style={styles.downloadText}>
          Download
        </Text>
        <TouchableOpacity
          style={styles.iconView}>
          <Icon
            name='file-pdf'
            type='FontAwesome5'
            size={30}
            color={'#CF3131'}
          />
        </TouchableOpacity> */}

      </ScrollView>
    </Container >
  )
}

export default SingleDocumentScreen

const styles = StyleSheet.create({
  imageStyl: {
    height: height / 3,
    width: width
  },
  textTitle: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(13),
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(8)
  },
  descText: {
    fontFamily: FONTS.Roboto.regular,
    marginHorizontal: moderateScale(15),
    fontSize: moderateScale(13)
  },
  description: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(13),
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(15),
    textAlign: 'justify'
  },
  titleStyl: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(16),
    // width:'75%',
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(8)
  },
  bottomCardView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(15)
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
  },
  downloadText: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(14),
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(15)
  },
  iconView: {
    marginLeft: moderateScale(15),
    marginVertical: moderateScale(8),
    padding: moderateScale(15),
    borderWidth: moderateScale(1),
    borderStyle: 'dashed',
    borderRadius: moderateScale(4),
    width: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineStyl: {
    backgroundColor: '#CCCCCC',
    height: moderateScale(1),
    width: '90%',
    marginHorizontal: moderateScale(15),
    marginVertical: moderateScale(5)
  },
  titleStyl1: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(15),
    marginHorizontal: moderateScale(15),
    marginBottom: moderateScale(8)
  }
})