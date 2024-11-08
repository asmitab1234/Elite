import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
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
import CirtificateCard from '../../Components/Profile/Cirtificate/CirtificateCard'
import ActivityTopTab from '../../Navigation/ActivityTopTab'
import ActivityPost from '../../Components/Profile/ActivityPost'
import ActivityReviewCard from '../../Components/Profile/ActivityReviewCard'
import ProfileHeader from '../../Components/Header/ProfileHeader'
import HiringCard from '../../Components/Profile/HiringCard'
import CirtificateModal from '../../Components/Profile/CirtificateModal'
const { height, width } = Dimensions.get('window')

const OtherProfileNew = () => {
    const colors = useTheme()
    const [isBioModalVisible, setBioModalVisible] = useState(false);
    const toggleModalBio = () => {
        setBioModalVisible(!isBioModalVisible);
    }
    const [isSkillModal, SetSkillModal] = useState(false);
    const [ActivityArrActive, setActivityArrActive] = useState(0)

    const toggleModalSkill = () => {
        SetSkillModal(!isSkillModal);
    }

    const [isCirtificateModalVisible, setCirtificateModalVisible] = useState(false);
    const toggleModalCirtificate = () => {
        setCirtificateModalVisible(!isCirtificateModalVisible);
    }
    const followArr = [
        {
            // count: '1K',
            type: 'Follow'
        },
        {
            count: '1K',
            type: 'Followers'
        },
    ]
    const bioArr = [
        {
            Education: 'M.Tech',
            Address: 'Kolkata,West Bengal',
            Industry: 'IT'
        },
    ]
    const skillArr = [
        {
            skill: 'Java'
        },
        {
            skill: 'React'
        },
    ]
    const certificateArr = [
        {
            name: 'Lorem Ipsum ',
            Date: '23-03-24'
        },
        {
            name: 'Lorem Ipsum ',
            Date: '23-03-24'
        },
    ]
    const ActivityArr = [
        {
            title: 'Post',
        },
        {
            title: 'Thank you Card ',
        },
    ]
    const hiringArr = [
        {
            Opening: '50',
            SkillRequired: 'React'
        },
        {
            Opening: '50',
            SkillRequired: 'React'
        },
    ]
    const [Index, setIndex] = useState(0)
    const [IIndex, setIIndex] = useState(0)
    const fullSkill = { "_id": "6501bf8c22e1bb80380f1656", "addedBy": "64e5c0ba1301a4cfe843da7b", "badge": [{ "_id": "65a8ca1f1db82ce15173df0a", "badgeID": "65a510636902619402aa62cb", "badgeName": "Golden Badge", "desc": "Lorem ipsum ia a dummy text", "image": "https://elites3bkt.s3.ap-south-1.amazonaws.com/image/cea0c570-b5cd-11ee-a428-178d31dc7398.png", "userID": "6501bf8c22e1bb80380f1656", "userImage": "https://elites3bkt.s3.ap-south-1.amazonaws.com/image/faff8df0-9bd7-11ee-8f07-f10f570f6b05.jpg", "userName": "Roma Roy" }], "bio": [], "comingonhallfame": 0, "comment": 0, "companyCode": 66853136, "completeOnboarding": 0, "contact": 9876543210, "coverImage": "https://elites3bkt.s3.ap-south-1.amazonaws.com/image/b0306530-bc19-11ee-b693-e368578c8945.png", "designation": "React", "docType": "homePost", "email": "roma123456789@gmail.com", "employeeid": "Emp100011", "firstName": "Roma", "giftCards": [], "goldClubNo": "6824 6413 1441 2212", "hobbies": [{ "_id": "6540b92ffb983e6b545bf6cd", "hobbies": "Cooking", "hobbyBackColor": "#c4dd78" }, { "_id": "6540b950fb983e6b545bf6d0", "hobbies": "Writing", "hobbyBackColor": "#ddab78" }, { "_id": "6540b965fb983e6b545bf6d3", "hobbies": "Painting", "hobbyBackColor": "#78dddd" }], "image": "https://elites3bkt.s3.ap-south-1.amazonaws.com/image/faff8df0-9bd7-11ee-8f07-f10f570f6b05.jpg", "isActive": false, "joiningAffinityGroups": 0, "lastName": "Roy", "post": 0, "publishingAdvocacy": 0, "react": 0, "rewardCard": [{ "__v": 0, "_id": "65a62d5094d9c94b131f363a", "cardColor": "#d0917c", "cardName": "BRONZE", "companyCode": 66853136, "createdBy": "64e7234e6fb8e1f6ccf6f7e4", "createdOn": "2024-01-16T07:16:32.309Z", "isDeleted": false, "reward": 50, "status": true, "updatedOn": "2024-01-25T12:00:17.775Z" }], "rewardPoints": 50, "skills": [{ "_id": "6540acef245d6d8e8d6ceb09", "skill": "JS" }, { "_id": "6540acf8245d6d8e8d6ceb0c", "skill": "React JS" }, { "_id": "6540ad08245d6d8e8d6ceb11", "skill": "SAP" }], "surveyCompletion": 0, "userType": "Manager" }
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
                        <Text
                            style={styles.bronzeText}>
                            Platinum
                        </Text>
                        <Image
                            source={require('../../Assets/Home/user.png')}
                            style={styles.userImage}
                        />
                        <View
                            style={styles.pointSpace}>
                            <Text
                                style={styles.pointText}>
                                2356
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: height / 16 }} />
                <View
                    style={{
                        marginHorizontal: moderateScale(15),
                        marginBottom: moderateScale(20)
                    }}>
                    <Text
                        style={styles.nameText}>
                        Sara Tylor
                    </Text>
                    <Text
                        style={styles.designation}>
                        Backend Developer
                    </Text>
                    <Text
                        style={{
                            ...styles.designation,
                            fontSize: moderateScale(12)
                        }}>
                        Elite Pvt Ltd
                    </Text>


                    {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(15)
              }}>
              <Text
                style={{
                  ...styles.textFollower,
                  marginRight: moderateScale(15),
                  fontFamily: FONTS.Roboto.bold
                }}>
                4M{' '}
                <Text
                  style={styles.textFollower}>
                  Follower
                </Text>
              </Text>
              <Text
                style={{
                  ...styles.textFollower,
                  fontFamily: FONTS.Roboto.bold
                }}>
                4M{' '}
                <Text
                  style={styles.textFollower}>
                  Following
                </Text>
              </Text>
            </View> */}

                    {/* Follower */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: moderateScale(15),
                            justifyContent: 'space-between'
                        }}>
                        {followArr.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setIndex(index)}
                                style={{
                                    ...styles.followBox,
                                    backgroundColor: index == Index ? '#D6BFBF' : '#EFEFEF'
                                }}
                            >
                                <Text
                                    style={{
                                        ...styles.textFollower,
                                        fontFamily: FONTS.Roboto.bold
                                    }}>
                                    {item.count}{'   '}
                                    <Text
                                        style={styles.textFollower}>
                                        {item.type}
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Analysis */}
                    {/* <View
                        style={styles.analysisBox}>
                        <Text
                            style={styles.nameText}>
                            Analysis
                        </Text>
                    </View> */}

                    {/* Activity */}
                    <View
                        style={{
                            ...styles.headingView,
                        }}>
                        <View
                            style={styles.heading}>
                            <Text
                                style={styles.headingText}>
                                Activity
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <TouchableOpacity
                                // onPress={toggleModalSkill}
                                >
                                    {/* <Image
                    source={require('../../Assets/Home/post.png')}
                    style={styles.plusSize}
                  /> */}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.viewLine} />
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'space-between',
                        }}>
                            {ActivityArr.map((it, index,) => (
                                <TouchableOpacity
                                    onPress={() => setActivityArrActive(index)}
                                    style={{
                                        ...styles.followBox,
                                        backgroundColor: ActivityArrActive == index ? '#D6BFBF' : '#EFEFEF',
                                        width: moderateScale(138)
                                    }}
                                >
                                    <Text
                                        style={styles.textFollower}>
                                        {it.title}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {ActivityArrActive == 0 ?
                            <ActivityPost
                                isPost={true}
                            /> : ActivityArrActive == 1 ?
                                <ActivityReviewCard
                                    isThankyouCard={true}
                                /> : null}
                        <View style={styles.viewLine} />
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate('ActivityViewAll',{thankYouCard: ActivityArrActive == 1})}
                        >
                            <Text
                                style={{
                                    ...styles.headingText,
                                    textAlign: 'right'
                                }}>
                                View All
                            </Text>
                        </TouchableOpacity>
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
                                    {/* <Image
                                        source={require('../../Assets/Home/post.png')}
                                        style={styles.plusSize}
                                    /> */}
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

                    {/* Cirtificate */}
                    <View
                        style={{
                            ...styles.headingView,
                        }}>
                        <View
                            style={styles.heading}>
                            <Text
                                style={styles.headingText}>
                                Cirtificate
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <TouchableOpacity
                                    onPress={toggleModalCirtificate}
                                >
                                    {/* <Image
                                        source={require('../../Assets/Home/post.png')}
                                        style={styles.plusSize}
                                    /> */}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.viewLine} />
                        {certificateArr.map((item, index) => (
                            <CirtificateCard
                                key={index}
                                item={item}
                            />
                        ))}
                        <View style={styles.viewLine} />
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate('CirtificateViewAll')}
                        >
                            <Text
                                style={{
                                    ...styles.headingText,
                                    textAlign: 'right'
                                }}>
                                View All
                            </Text>
                        </TouchableOpacity>
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
                                Skills
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                {/* <TouchableOpacity
                                    onPress={toggleModalSkill}>
                                    <Image
                                        source={require('../../Assets/Home/post.png')}
                                        style={styles.plusSize}
                                    />
                                </TouchableOpacity> */}
                                <TouchableOpacity
                                    onPress={() => NavigationService.navigate('SkillViewAll', { fullSkill: fullSkill })}>
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
                        <View style={styles.viewLine} />
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate('SkillViewAll', { fullSkill: fullSkill })}>
                            <Text
                                style={{
                                    ...styles.headingText,
                                    textAlign: 'right'
                                }}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Hiring */}
                    {/* <View
                        style={{
                            ...styles.headingView,
                        }}>
                        <View
                            style={styles.heading}>
                            <Text
                                style={styles.headingText}>
                                Hiring
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
                            </View>
                        </View>
                        <View style={styles.viewLine} />
                        {hiringArr.map((item, index) => (
                            <HiringCard
                                key={index}
                                item={item}
                            />
                        ))}
                        <View style={styles.viewLine} />
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate('SaveViewAll')}>
                            <Text
                                style={{
                                    ...styles.headingText,
                                    textAlign: 'right'
                                }}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View> */}



                </View>
            </ScrollView>
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

            <Modal isVisible={isCirtificateModalVisible}
                style={{
                    flex: 1,
                    marginHorizontal: moderateScale(10),
                    marginVertical: moderateScale(30)
                }}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setCirtificateModalVisible(false)}>
                <CirtificateModal
                    setCirtificateModalVisible={setCirtificateModalVisible} />
            </Modal>

        </Container>
    )
}

export default OtherProfileNew

const styles = StyleSheet.create({
    bgImage: {
        height: height / 5,
        width: width
    },
    profileView: {
        marginHorizontal: moderateScale(15),
        position: 'absolute',
        top: moderateScale(90),
        justifyContent: 'center',
        backgroundColor: '#D0917C',
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(18),
        borderRadius: moderateScale(10),
        alignSelf: 'flex-start',
        // left: moderateScale(5),
        width: moderateScale(180),
        height: moderateScale(110)
    },
    bronzeText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(16),
        zIndex: 1,
        position: 'absolute',
        top: moderateScale(10),
        right: moderateScale(15),
        alignSelf: 'flex-end'
    },
    userImage: {
        height: moderateScale(70),
        width: moderateScale(70),
        borderRadius: moderateScale(100),
        position: 'absolute',
        top: moderateScale(20),
        left: moderateScale(10),
        borderColor: '#FFFFFF',
        borderWidth: moderateScale(3),
        zIndex: 1
    },
    pointSpace: {
        height: moderateScale(60),
        width: moderateScale(180),
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: moderateScale(0),
        justifyContent: 'center',
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(18),
        borderTopRightRadius: moderateScale(50),
        borderBottomLeftRadius: moderateScale(10),
        borderBottomRightRadius: moderateScale(10),
        alignSelf: 'flex-start',
        elevation: 4
    },
    pointText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(16),
        zIndex: 1,
        position: 'absolute',
        top: moderateScale(10),
        right: moderateScale(40),
        alignSelf: 'flex-end'
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
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(16),
    },
    designation: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(13),
    },
    textFollower: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },

    followBox: {
        width: moderateScale(145),
        height: moderateScale(35),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: moderateScale(13),
        marginLeft: moderateScale(5)
    },
    viewLine: {
        height: moderateScale(1),
        width: '100%',
        backgroundColor: '#cccccc',
        marginVertical: moderateScale(10)
    },
    analysisBox: {
        width: '100%',
        height: moderateScale(40),
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D6BFBFCE',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
        paddingHorizontal: moderateScale(15)
    }

})