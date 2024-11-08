import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Card, Container, Icon, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import Modal, { ReactNativeModal } from "react-native-modal";
import HomeDeleteEditModal from './HomeDeleteEditModal'
import NavigationService from '../../Services/Navigation'
import CommentModal from './CommentModal'
import HomePageService from '../../Services/HomePageService'
import PostItemData from './HomePageMapData/PostItemData/PostItemData'
import { ActivityIndicator } from 'react-native'
const { width, height } = Dimensions.get('window');
const HomePostCard = () => {
  const [LoaderStatus, setLoaderStatus] = useState(true)
  const [like, setLike] = useState(false)
  const [HomePostData, setHomePostData] = useState([])
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const [isCommentModalVisible, setCommentModalVisible] = useState(false);
  const commentToggleModal = () => {
    setCommentModalVisible(!isCommentModalVisible);
  }

  const onClick = () => {
    setLike(!like)
  }

  useEffect(() => {
    getAffinitity()
  }, [])

  // ==========Affinitity List Start============
  const getAffinitity = () => {
    data = {
      "postType": "public"
    }
    HomePageService.Home_Post_view(data)
      .then(result => {
        setLoaderStatus(true)
        if (result && result.status) {
          setHomePostData(result?.data);
          setLoaderStatus(false)
        }
      })
      .catch(err => {
        console.log('error>>', err);
        setLoaderStatus(false)
      });
  };
  // ==========Affinitity List END================

  return (
    <View>
      {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1, height: height / 2 }} /> : <>
        {HomePostData.map((item, index) => (
          <PostItemData item={item} key={index} />
        ))}
      </>}

      
      <ReactNativeModal isVisible={isModalVisible}
        style={{ margin: 0, justifyContent: 'flex-end', }}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
      >
        <HomeDeleteEditModal
          setModalVisible={setModalVisible} />
      </ReactNativeModal>


      <ReactNativeModal isVisible={isCommentModalVisible}
        style={{ margin: 0, justifyContent: 'flex-end' }}
        onBackdropPress={() => setCommentModalVisible(false)}
        onBackButtonPress={() => setCommentModalVisible(false)}
      >
        <CommentModal setCommentModalVisible={setCommentModalVisible} />
      </ReactNativeModal>
    </View >
  )
}

export default HomePostCard

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 0,
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(9)
  },
  userImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(100),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(8),
  },
  nameText: {
    fontFamily: FONTS.Roboto.regular,
    marginLeft: moderateScale(8),
    fontSize: moderateScale(13)
  },
  holderText: {
    fontFamily: FONTS.Roboto.light,
    fontSize: moderateScale(12),
    marginLeft: moderateScale(8)
  },
  badgeStyl: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(13),
  },
  badgeName: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // flex:1
  },
  badgeImgStyl: {
    height: moderateScale(17),
    width: moderateScale(17),
    marginHorizontal: moderateScale(5)
  },
  moreNameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // flex:1
  },
  postImagetStl: {
    height: moderateScale(300),
    width: '100%',
    marginTop: moderateScale(15)
  },
  captionText: {
    fontFamily: FONTS.Roboto.regular,
    marginHorizontal: moderateScale(8),
    fontSize: moderateScale(11),
    marginTop: moderateScale(15)
  },
  viewLine: {
    height: moderateScale(0.5),
    width: '100%',
    backgroundColor: '#BEBDBD',
    // marginVertical: moderateScale(10),
    marginTop: moderateScale(10)
  },
  reactionImg: {
    height: moderateScale(20),
    width: moderateScale(20),
    marginRight: moderateScale(5)
  },
  reactionText: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(11)
  },
  reactMap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(15)
  },
  person: {
    fontFamily: FONTS.Roboto.light,
    fontSize: moderateScale(11),
    marginTop: moderateScale(10),
    marginLeft: moderateScale(12)
  },
  reactionView: {
    backgroundColor: '#DBDADA',
    padding: moderateScale(15),
    borderRadius: moderateScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    width: moderateScale(230),
    marginTop: moderateScale(10),
    position: 'absolute',
    bottom: moderateScale(50),
    marginBottom: moderateScale(5),
    left: moderateScale(6)
  },
  imgStyl: {
    height: moderateScale(25),
    width: moderateScale(25),
    marginHorizontal: moderateScale(4)
  }
})