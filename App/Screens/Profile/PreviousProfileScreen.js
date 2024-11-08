import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Icon, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import Hobbies from '../../Components/Profile/Hobbies'
import Bio from '../../Components/Profile/Bio'
import SaveTopTab from '../../Navigation/SaveTopTab'
import Skill from '../../Components/Profile/Skill'
import NavigationService from '../../Services/Navigation'
import Modal from "react-native-modal";
import HobbieModal from '../../Components/Profile/HobbieModal'
import BioModal from '../../Components/Profile/BioModal'
import SkillModal from '../../Components/Profile/SkillModal'
const { height, width } = Dimensions.get('window')

const Profile = () => {
  const skillArr = [
    {
      skill: 'Java'
    },
    {
      skill: 'React'
    },
  ]
  const hobbiArr = [
    {
      hobbi: 'Cooking'
    },
    {
      hobbi: 'Writing'
    },
  ]
  const bioArr = [
    {
      Education: 'M.Tech',
      Address: 'Kolkata,West Bengal',
      Industry: 'IT'
    },
  ]
  const [isBioModalVisible, setBioModalVisible] = useState(false);
  const toggleModalBio = () => {
    setBioModalVisible(!isBioModalVisible);
  }
  const [isHobbieModal, SetHobbieModal] = useState(false);
  const toggleModalHobbie = () => {
    SetHobbieModal(!isHobbieModal);
  }

  const [isSkillModal, SetSkillModal] = useState(false);
  const toggleModalSkill = () => {
    SetSkillModal(!isSkillModal);
  }
  return (
    <Container>
      <BackHeader
        title='Profile'
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>

        {/* profileView */}
        <View
          style={styles.mainImgView}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1579783483458-83d02161294e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' }}
            style={styles.bgImage}
          />
          <View
            style={styles.profileView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.userImage}
              />
              {/* <Text
              style={styles.bronzeText}>
              Bronze Club
            </Text> */}
              <TouchableOpacity
                style={styles.editIcon}
              >
                <Icon
                  name='edit'
                  type='Feather'
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: moderateScale(10)
              }}>
              <Text
                style={styles.nameText}>
                Niladri Roy
              </Text>
              <Text
                style={styles.designation}>
                Backend Developer
              </Text>
            </View>
          </View>
        </View>

        {/* pointBalnce */}
        {/* <View
          style={{
            marginTop: moderateScale(30),
            marginHorizontal: moderateScale(15),
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Text
            style={styles.headingText}>
            Point Balance :{' '}
          </Text>
          <Text
            style={styles.headingText}>
            399
          </Text>
        </View> */}

        {/* Hobbies */}
        <View
          style={{
            ...styles.headingView,
            marginTop:moderateScale(35)
          }}>
          <View
            style={styles.heading}>
            <Text
              style={styles.headingText}>
              Hobbies
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <TouchableOpacity
                onPress={toggleModalHobbie}>
                <Image
                  source={require('../../Assets/Home/post.png')}
                  style={styles.plusSize}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('HobbiesViewAll')}>
                <Text
                  style={styles.headingText}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewLine} />
          {hobbiArr.map((item, index) => (
            <Hobbies
              key={index}
              item={item}
            />
          ))}
        </View>

        {/* Bio */}
        <View
          style={{
            ...styles.headingView,
          }}
          onPress={() => NavigationService.navigate('BioViewAll')}>
          <View
            style={styles.heading}>
            <Text
              style={styles.headingText}>
              Bio
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <TouchableOpacity
                onPress={toggleModalBio}>
                <Image
                  source={require('../../Assets/Home/post.png')}
                  style={styles.plusSize}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() => NavigationService.navigate('BioViewAll')}>
                <Text
                  style={styles.headingText}>
                  View All
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.viewLine} />
          {bioArr.map((item, index) => (
            <Bio
              key={index}
              item={item}
            />
          ))}
        </View>

        {/* Save */}
        <View
          style={{
            ...styles.headingView,
          }}>
          <View
            style={styles.heading}>
            <Text
              style={styles.headingText}>
              Save
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Image
                source={require('../../Assets/Home/post.png')}
                style={styles.plusSize}
              />
              <TouchableOpacity
                onPress={() => NavigationService.navigate('SaveViewAll')}>
                <Text
                  style={styles.headingText}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewLine} />
          <View
            style={{
              height: height / 3
            }}>
            <SaveTopTab />
          </View>
        </View>

        {/* skill */}
        <View
          style={{
            ...styles.headingView,
          }}>
          <View
            style={styles.heading}>
            <Text
              style={styles.headingText}>
              Skill
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <TouchableOpacity
              onPress={toggleModalSkill}>
                <Image
                  source={require('../../Assets/Home/post.png')}
                  style={styles.plusSize}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('SkillViewAll')}>
                <Text
                  style={styles.headingText}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewLine} />
          {skillArr.map((item, index) => (
            <Skill
              key={index}
              item={item}
            />
          ))}
        </View>

        {/* badge */}
        <View
          style={{
            ...styles.headingView,
            marginBottom: moderateScale(20)
          }}>
          <View
            style={styles.heading}>
            <Text
              style={styles.headingText}>
              Badge
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Image
                source={require('../../Assets/Home/post.png')}
                style={styles.plusSize}
              />
              <TouchableOpacity>
                <Text
                  style={styles.headingText}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewLine} />
          <Text
            style={{
              ...styles.headingText,
              fontFamily: FONTS.Roboto.regular
            }}>
            Add Badge {'\n'}
            No badge is added
          </Text>
        </View>

      </ScrollView>

      <Modal isVisible={isHobbieModal}
        style={{
          flex: 1,
          marginHorizontal: moderateScale(10),
          marginVertical: moderateScale(30)
        }}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        onBackdropPress={() => SetHobbieModal(false)}>
        <HobbieModal
          SetHobbieModal={SetHobbieModal} />
      </Modal>

      <Modal isVisible={isBioModalVisible}
        style={{
          flex: 1,
          marginHorizontal: moderateScale(10),
          marginVertical: moderateScale(30)
        }}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        onBackdropPress={() => setBioModalVisible(false)}>
        <BioModal
          setBioModalVisible={setBioModalVisible} />
      </Modal>

      <Modal isVisible={isSkillModal}
        style={{
          flex: 1,
          marginHorizontal: moderateScale(10),
          marginVertical: moderateScale(30)
        }}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        onBackdropPress={() => SetSkillModal(false)}>
        <SkillModal
          SetSkillModal={SetSkillModal} />
      </Modal>

    </Container>
  )
}

export default Profile

const styles = StyleSheet.create({
  bgImage: {
    height: height / 5,
    width: width
  },
  profileView: {
    marginHorizontal: moderateScale(15),
    position: 'absolute',
    top: moderateScale(100),
    justifyContent: 'center',
    backgroundColor: '#D6BFBF',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(18),
    borderRadius: moderateScale(12),
    alignSelf: 'center',
  },
  userImage: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(100),
    position: 'absolute',
    bottom: moderateScale(0),
    left: 30
  },
  iconView: {
    position: 'absolute',
    top: moderateScale(50),
    left: moderateScale(70),
    backgroundColor: '#B1AEAE',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(50),
  },
  nameText: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(15),
    textAlign: 'center'
  },
  designation: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(15),
    textAlign: 'center'
  },
  bronzeText: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(17),
    marginLeft: moderateScale(12),
  },
  skillHeading: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(16),
    marginLeft: moderateScale(15)
  },
  buttonStyl: {
    // width: '20%',
    backgroundColor: 'transparent',
    // marginHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(40),
    marginHorizontal: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    height: moderateScale(40)
  },
  textStyl: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(13)
  },
  mapView: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(5),
    marginTop: moderateScale(10),
  },
  editIcon: {
    position: 'absolute',
    right: moderateScale(0)
  },
  mainImgView: {
    width: width,
    marginBottom: moderateScale(20),
    // backgroundColor: 'red'
  },
  plusSize: {
    height: moderateScale(25),
    width: moderateScale(25),
    marginRight: moderateScale(10)
  },

  headingView: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: moderateScale(15),
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    elevation: moderateScale(2),
    marginTop: moderateScale(15)
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(13)
  },
  viewLine: {
    height: moderateScale(1),
    width: '100%',
    backgroundColor: '#cccccc',
    marginVertical: moderateScale(10)
  }

})