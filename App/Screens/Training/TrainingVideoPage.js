import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import Star from '../../Components/Star/Star'
import TrainingCard from '../../Components/DrawerComponent/Training/TrainingCard'
import TrainingCardForSinglePage from '../../Components/DrawerComponent/Training/TrainingCardForSinglePage'
import TrainingVideoPlayer from './TrainingVideoPlayer'
import CourseInclude from '../../Components/DrawerComponent/Training/CourseInclude'
import Modal from "react-native-modal";
import EnrollModal from '../../Components/DrawerComponent/Training/EnrollModal'
const { height, width } = Dimensions.get('window')

const TrainingVideoPage = () => {
    const colors = useTheme()
    const trainingArr = [
        {
            img: require('../../Assets/Home/user.png'),
            courseTitle: 'lorem ipsum dolor',
            date: '2024-05-05',
            by: 'Lorem Ipsum',
            time: '25:00'
        },
        {
            img: require('../../Assets/Home/user.png'),
            courseTitle: 'lorem ipsum dolor',
            date: '2024-05-05',
            by: 'Lorem Ipsum',
            time: '25:00'
        },
        {
            img: require('../../Assets/Home/user.png'),
            courseTitle: 'lorem ipsum dolor',
            date: '2024-05-05',
            by: 'Lorem Ipsum',
            time: '25:00'
        },
    ]

    const courseArr = [
        {
            img: require('../../Assets/Training/Videos_icon.png'),
            title: '90 minutes on-demand video',
        },
        {
            img: require('../../Assets/Training/Mobile_icon.png'),
            title: 'Accesss on mobile and TV',
        },
        {
            img: require('../../Assets/Training/Certificate_icon.png'),
            title: 'Certificate of Completion',
        },
        {
            img: require('../../Assets/Training/Article_icon.png'),
            title: '64 Articles',
        },
    ]
    const [seeMore, setSeeMore] = useState('')
    const onClick = () => {
        setSeeMore(!seeMore)
    }

    const [isVisisbleModal, setVisisbleModal] = useState(false);
    const toggleModal = () => {
        setVisisbleModal(!isVisisbleModal);
    }

    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} barStyle='dark-content' />

            <View style={{
                width: '100%',
                height: moderateScale(230),
                backgroundColor: "#000"
            }}>
                <TrainingVideoPlayer url='https://mm3media-output.s3.us-east-1.amazonaws.com/bushido/89373ad0-7a29-11ee-8d42-bf336d0eb908-89373ad1-7a29-11ee-8d42-bf336d0eb908/playlist.m3u8' />
            </View>

            {/* <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww' }}
                    style={styles.imageStyl}
                >
                    <Icon
                        name='play'
                        type='AntDesign'
                        color={'#FFFFFF'}
                        style={styles.iconStyl}
                        size={40}
                    />
                </ImageBackground> */}
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Text
                    style={styles.textHead}>
                    Lorem ipsum dolor sit amet
                </Text>
                <Text
                    style={styles.decText}>
                    Html,Css,Bootstap,React
                </Text>

                <View style={{
                    ...styles.lineStyl,
                    backgroundColor: colors.primaryFontColor
                }} />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <Text
                        style={{
                            ...styles.language,
                            marginTop: 0
                        }}>
                        Reward Point : {' '}
                        <Text
                            style={{
                                ...styles.language,
                                fontFamily: FONTS.Roboto.regular
                            }}>
                            20
                        </Text>
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: moderateScale(15),
                        }}>
                        <Star
                            ActiveStarColor={colors.buttonColor}
                            starSize={18}
                            DeactivateStarName='star-o'
                            DeactivateStarType='FontAwesome'
                            ActiveStarName='star'
                            ActiveStarType='FontAwesome'
                        />
                        <Text
                            style={{
                                fontFamily: FONTS.Roboto.light,
                                fontSize: moderateScale(13),
                                marginLeft: moderateScale(5)
                            }}>
                            (4)
                        </Text>
                    </View>

                </View>

                <Text
                    style={styles.language}>
                    Mentor : {' '}
                    <Text
                        style={{
                            ...styles.language,
                            fontFamily: FONTS.Roboto.regular
                        }}>
                        Lorem Ipsum
                    </Text>
                </Text>

                <Text
                    style={styles.language}>
                    Language : {' '}
                    <Text
                        style={{
                            ...styles.language,
                            fontFamily: FONTS.Roboto.regular
                        }}>
                        English
                    </Text>
                </Text>

                <Text
                    style={{
                        ...styles.language,
                        marginTop: 0
                    }}>
                    Training Price : {' '}
                    <Text
                        style={{
                            ...styles.language,
                            fontFamily: FONTS.Roboto.regular
                        }}>
                        $200
                    </Text>
                </Text>

                <Text
                    style={styles.desctionText}>
                    Description / Details:
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: moderateScale(15)
                    }}>
                    <Text
                        style={styles.descText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt{' '}
                        <Text
                            onPress={() => onClick()}
                            style={{
                                ...styles.descText,
                                fontFamily: FONTS.Roboto.bold
                            }}>
                            ...See More
                        </Text>
                    </Text>
                </View>
                {seeMore ?
                    <>
                        <Text
                            style={{
                                ...styles.language,
                                marginTop: 0
                            }}>
                            Date : {' '}
                            <Text
                                style={{
                                    ...styles.language,
                                    fontFamily: FONTS.Roboto.regular
                                }}>
                                20-02-2024
                            </Text>
                        </Text>

                        <Text
                            style={{
                                ...styles.language,
                                marginTop: moderateScale(2)
                            }}>
                            Place : {' '}
                            <Text
                                style={{
                                    ...styles.language,
                                    fontFamily: FONTS.Roboto.regular
                                }}>
                                Building
                            </Text>
                        </Text>

                        <Text
                            style={{
                                ...styles.language,
                                // marginTop: moderateScale(2)
                            }}>
                            Time : {' '}
                            <Text
                                style={{
                                    ...styles.language,
                                    fontFamily: FONTS.Roboto.regular
                                }}>
                                11 am
                            </Text>
                        </Text>

                        <Text
                            style={{
                                ...styles.language,
                                // marginTop: moderateScale(2)
                            }}>
                            Url : {' '}
                            <Text
                                style={{
                                    ...styles.language,
                                    fontFamily: FONTS.Roboto.regular
                                }}>
                                http://google.com
                            </Text>
                        </Text>

                        <Text
                            style={{
                                ...styles.language,
                                // marginTop: moderateScale(2)
                            }}>
                            Materials/Equipment Needed : {' '}
                            <Text
                                style={{
                                    ...styles.language,
                                    fontFamily: FONTS.Roboto.regular
                                }}>
                                Laptop
                            </Text>
                        </Text>
                        <Text
                            style={styles.desctionText}>
                            What is in the training
                        </Text>

                        <Text
                            style={styles.trainingItem}>
                            1. Coding
                        </Text>
                        <Text
                            style={styles.trainingItem}>
                            2. Practice
                        </Text>

                        <Text
                            style={styles.desctionText}>
                            What Will You Learn
                        </Text>

                        <Text
                            style={styles.trainingItem}>
                            Everything
                        </Text>
                    </>
                    :
                    null
                }



                <Text
                    style={styles.desctionText}>
                    Course Includes
                </Text>
                <View
                    style={styles.mapView}>
                    {courseArr.map((item, index) => (
                        <CourseInclude
                            key={index}
                            item={item}
                        />
                    ))}
                </View>

                <AppButton
                    title='Enroll Now'
                    textStyle={styles.buttonText}
                    style={styles.buttonStyl}
                    onPress={toggleModal}
                />
                <AppButton
                    title='Park For Future'
                    textStyle={styles.buttonText}
                    style={styles.buttonStyl2}
                />


                <Text
                    style={styles.relatedCourseText}>
                    Related Videos
                </Text>

                {trainingArr.map((item, index) => (
                    <TrainingCardForSinglePage
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
            <Modal isVisible={isVisisbleModal}
                style={{
                    flex: 1,
                    marginHorizontal: moderateScale(10),
                    marginVertical: moderateScale(30)
                }}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onPress={() => setVisisbleModal(false)}>
                <EnrollModal
                    setVisisbleModal={setVisisbleModal} />
            </Modal>

        </Container>
    )
}

export default TrainingVideoPage

const styles = StyleSheet.create({
    imageStyl: {
        height: height / 3.5,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHead: {
        fontFamily: FONTS.Roboto.medium,
        marginHorizontal: moderateScale(15),
        fontSize: moderateScale(18),
        marginTop: moderateScale(10)
    },
    decText: {
        fontFamily: FONTS.Roboto.regular,
        marginHorizontal: moderateScale(15),
        fontSize: moderateScale(13),
        marginTop: moderateScale(8)
    },
    relatedCourseText: {
        fontFamily: FONTS.Roboto.medium,
        marginHorizontal: moderateScale(15),
        fontSize: moderateScale(15),
        marginVertical: moderateScale(15)
    },
    language: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15),
        // marginTop: moderateScale(11),
        marginHorizontal: moderateScale(15)
    },
    desctionText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(15),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    trainingItem: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginHorizontal: moderateScale(15)
    },
    descText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    },
    mapView: {
        marginHorizontal: moderateScale(15),
        // marginTop:moderateScale(8)
    },
    buttonText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    },
    buttonStyl: {
        marginTop: moderateScale(15),
        borderRadius: moderateScale(5),
        height: moderateScale(42)
    },
    buttonStyl2: {
        marginTop: moderateScale(8),
        borderRadius: moderateScale(5),
        height: moderateScale(37),
        backgroundColor: 'transparent',
        borderWidth: 1
    },
    lineStyl: {
        height: moderateScale(0.5),
        width: '92%',
        marginVertical: moderateScale(8),
        marginHorizontal: moderateScale(15)
    }
})