import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppTextInput, Card, Container, Text } from 'react-native-basic-elements'
// import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import TopTab from '../../Navigation/TopTab'
import SurveyTopTab from '../../Navigation/SurveyTopTab'
import { Pressable } from 'react-native'
import NavigationService from '../../Services/Navigation'
import SurvayService from '../../Services/SurvayService'
import SurveyHeader from '../../Components/Header/SurveyHeader'
const { height, width } = Dimensions.get('window')

const Survay = () => {
  useEffect(() => {
    getBanner()
  }, [])
  const [banner, Setbanner] = useState();
  // ===============================Survay Banner Start===============================================
  const getBanner = () => {
    SurvayService.Get_Survey_Banner()
      .then(result => {
        if (result && result.status) {
          Setbanner(result?.data);
        } 
      })
      .catch(err => {
        console.log('error>>', err);
      });
  };
  // ===============================Survay Banner END===============================================
  return (
    <Container>
      <SurveyHeader title='Survey' />
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{ uri: banner?.coverImage }}
          style={styles.imageStyl}
        >

        </ImageBackground>
        <Card
          // shadow={false}
          style={styles.topCard}>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: moderateScale(10),
            }}
            onPress={() => NavigationService.navigate('CreateNewPost')}
          >
            <Image
              style={styles.profileImage}
              source={{ uri: banner?.image }}
            />
            <AppTextInput
              placeholder='Share Moment That Matters...'
              inputContainerStyle={styles.inputContainer}
              mainContainerStyle={styles.inputBox}
              inputStyle={styles.fontStyl}
              editable={false}
            />
          </Pressable>
          {/* <View>
                    <View style={styles.viewLine} />
                    <View
                        style={styles.eventoption}>
                        <View
                            style={styles.createView}>
                            <Image
                                source={require('../../Assets/Home/createNewPost.png')}
                                resizeMode='contain'
                                style={styles.imageCreate}
                            />
                            <Text
                                style={styles.createEventText}>
                                Create Events
                            </Text>
                        </View>
                        <View
                            style={styles.createView}>
                            <Image
                                source={require('../../Assets/Home/Eventcreate.png')}
                                resizeMode='contain'
                                style={styles.imageCreate}
                            />
                            <Text
                                style={styles.createEventText}>
                                Create New Post
                            </Text>
                        </View>
                    </View>
                </View> */}
        </Card>
        < SurveyTopTab />
      </ScrollView>
    </Container>
  )
}

export default Survay

const styles = StyleSheet.create({
  imageStyl: {
    height: height / 3.5,
    width: width
  },
  profileImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(3),
    borderColor: '#D4A218'

  },
  inputContainer: {
    borderWidth: 0
  },
  inputBox: {
    width: '85%',
    marginLeft: moderateScale(10)
  },
  topCard: {
    // alignItems: 'center',
    // flexDirection: 'row',
    backgroundColor: '#f5f5f5f5',
    marginHorizontal: moderateScale(13),
    marginTop: moderateScale(10),
    paddingHorizontal: 0,
    borderRadius: moderateScale(25),
    height: moderateScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(10)

  },
  fontStyl: {
    fontFamily: FONTS.Roboto.light
  },
  viewLine: {
    height: moderateScale(0.5),
    width: '100%',
    backgroundColor: '#BEBDBD',
    marginVertical: moderateScale(10)
  },
  eventoption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(10)
  },
  imageCreate: {
    height: moderateScale(20),
    width: moderateScale(20)
  },
  createEventText: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(13),
    marginLeft: moderateScale(8)
  },
  createView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})