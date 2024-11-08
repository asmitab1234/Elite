import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { AppTextInput, Card, Container, StatusBar, Text } from 'react-native-basic-elements'
import HomeHeader from '../../Components/Header/HomeHeader'
import HomePostCard from '../../Components/HomeComponent/HomePostCard'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import HomeStoryCard from '../../Components/HomeComponent/HomeStoryCard'
import NavigationService from '../../Services/Navigation'
import HomeOptionCard from '../../Components/HomeComponent/HomeOptionCard'
import PostService from '../../Services/PostService'
import { RefreshControl } from 'react-native'

const Home = () => {
  useEffect(() => {
    GetUserData()
  }, [])

  // ==========GetUserData List Start============
  const [UserData, setUserData] = useState({})
  const [refreshing, setRefreshing] = useState(false);
  const GetUserData = () => {
    PostService.Get_GetUserData_Data()
      .then(result => {
        if (result && result.status) {
          setUserData(result?.data);
        }
      })
      .catch(err => {
        console.log('error>>', err);
      });
  };
  // ==========GetUserData List END================

  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    GetUserData()

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={'#FFFFFF'}
      />
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <HomeStoryCard />
        {/* <HomeOptionCard /> */}
        <Card
          shadow={false}
          style={styles.topCard}>
          <Pressable
            // onPress={() => NavigationService.navigate('CreateNewPost')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: moderateScale(10)
            }}>
            <Image
              style={styles.profileImage}
              source={{ uri: UserData?.image }}
            />
            <Pressable
              onPress={() => NavigationService.navigate('CreateNewPost')}
            >
              <View pointerEvents="none"
                style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                <AppTextInput
                  placeholder='Share Moments That Matters...'
                  inputContainerStyle={styles.inputContainer}
                  mainContainerStyle={styles.inputBox}
                  inputStyle={styles.fontStyl}
                />
              </View>
            </Pressable>
          </Pressable>
        </Card>

        <HomePostCard />
      </ScrollView>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  profileImage: {
    height: moderateScale(35),
    width: moderateScale(35),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(3),
    borderColor: '#D4A218'

  },
  inputContainer: {
    borderWidth: 0,
    // width:'40%'
  },
  inputBox: {
    width: '82%',
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
    justifyContent: 'center'
  },
  fontStyl: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(13)
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