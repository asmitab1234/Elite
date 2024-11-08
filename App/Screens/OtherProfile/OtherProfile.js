import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
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
import OtherHobbies from '../../Components/OtherProfile/OtherHobbies'
import OtherBadge from '../../Components/OtherProfile/OtherBadge'
import { useRoute } from '@react-navigation/native'
import PerformerService from '../../Services/PerformerService'
import { ActivityIndicator } from 'react-native'
import { RefreshControl } from 'react-native'
const { height, width } = Dimensions.get('window')

const OtherProfile = () => {
    const route = useRoute();
    const userId = route.params.userid;

    console.log("userIduserIduserId>>>>>>>>>>>>>>>>.", userId)

    useEffect(() => {
        GetPerformerSingleData()
    }, [])
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    const [Performer, setPerformer] = useState([])
    //Advocay Category Wise List API
    const GetPerformerSingleData = () => {
        PerformerService.Get_Performer_Single_Data(userId)
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setPerformer(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        GetPerformerSingleData()

        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);


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
            hobbi: 'Singing'
        },
    ]
    const bioArr = [
        {
            Education: 'M.Tech',
            Address: 'Kolkata,West Bengal',
            Industry: 'IT'
        },
    ]

    const badgeArr = [
        {
            img: require('../../Assets/Home/user.png'),
            name: 'Sara Tylor',
            badge: 'Golden Badge',
            title: 'Lorem ipsum ia a dummy text'
        }
    ]
    const [isBioModalVisible, setBioModalVisible] = useState(false);
    const toggleModalBio = () => {
        setBioModalVisible(!isBioModalVisible);
    }
    const [isHobbieModal, SetHobbieModal] = useState(false);
    const toggleModalHobbie = () => {
        SetHobbieModal(!isHobbieModal);
    }

    // const [isSkillModal, SetSkillModal] = useState(false);
    // const toggleModalSkill = () => {
    //     SetSkillModal(!isSkillModal);
    // }
    return (
        <Container>
            <BackHeader
                title='Profile'
            />
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >
                    {/* profileView */}
                    <View
                        style={styles.mainImgView}>
                        <Image
                            source={{ uri: Performer[0]?.coverImage }}
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
                                    source={{ uri: Performer[0]?.image }}
                                    style={styles.userImage}
                                />
                                {/* <Text style={styles.bronzeText}> Bronze Club</Text> */}
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
                                <Text numberOfLines={1}
                                    style={styles.nameText}>
                                    {Performer[0]?.firstName}{" "}
                                    {Performer[0]?.lastName}
                                </Text>
                                <Text
                                    style={styles.designation}>
                                    {Performer[0]?.userType}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* pointBalnce */}
                    <View
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
                            {Performer[0]?.rewardPoints}
                        </Text>
                    </View>

                    {/* Hobbies */}
                    <View
                        style={{
                            ...styles.headingView,
                            marginTop: moderateScale(35)
                        }}>
                        <View
                            style={styles.heading}>
                            <Text
                                style={styles.headingText}>
                                Hobbies
                            </Text>
                        </View>
                        <View style={styles.viewLine} />
                        {Performer[0]?.hobbies?.map((item, index) => (
                            <OtherHobbies
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
                        </View>
                        <View style={styles.viewLine} />
                        <Text
                            style={{
                                ...styles.textStyl,
                                fontFamily: FONTS.Roboto.regular
                            }}>
                            No Bio to Show
                        </Text>
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
                                {/* <TouchableOpacity
                                    onPress={toggleModalSkill}>
                                    <Image
                                        source={require('../../Assets/Home/post.png')}
                                        style={styles.plusSize}
                                    />
                                </TouchableOpacity> */}
                                <TouchableOpacity
                                    onPress={() => NavigationService.navigate('SkillViewAll', { fullSkill: Performer[0] })}>
                                    <Text
                                        style={styles.headingText}>
                                        View All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.viewLine} />
                        {Performer[0]?.skills?.map((item, index) => (
                            <Skill
                                key={index}
                                item={item}
                            // toggleModalSkill={toggleModalSkill}
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
                        </View>
                        <View style={styles.viewLine} />

                        {Performer[0]?.badge?.map((item, index) => (
                            <OtherBadge
                                item={item}
                                key={index}
                            />
                        ))}

                    </View>

                </ScrollView>
            </>}


            {/* <Modal isVisible={isSkillModal}
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
            </Modal> */}



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
        </Container >
    )
}

export default OtherProfile

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
        width: "45%"
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