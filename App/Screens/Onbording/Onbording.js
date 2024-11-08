import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppTextInput, Card, Container, Icon, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import TopTab from '../../Navigation/TopTab'
import moment from 'moment'
import OnboardingService from '../../Services/OnboardingService'
import Toast from 'react-native-simple-toast';
import ImagePicker from 'react-native-image-crop-picker';
import NavigationService from '../../Services/Navigation'
import { TouchableOpacity } from 'react-native'
import { Pressable } from 'react-native'
const { height, width } = Dimensions.get('window')

const Onbording = () => {
    useEffect(() => {
        getBanner()
    }, [])
    const [Thoughts, SetThoughts] = useState('');

    const Thoughts_Post = () => {
        const data =
        {
            "comments": Thoughts,
            "image": "image"
        }
        OnboardingService.Thoughts_Post_API(data)
            .then(result => {
                // console.log('getBanner API Fetched=====>>>', JSON.stringify(result));
                if (result && result.status) {
                    Toast.show('Thoughts Added Successfully', Toast.SHORT);
                } else {
                    // setName('User');
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };
    // ===============================Onbording Banner END===============================================
    const Gallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });

    }
    // ===============================Onbording Banner Start===============================================
    const [banner, Setbanner] = useState();
    const getBanner = () => {
        OnboardingService.Get_Banner_Data()
            .then(result => {
                // console.log('getBanner API Fetched=====>>>', JSON.stringify(result));
                if (result && result.status) {
                    Setbanner(result?.data);
                } else {
                    // setName('User');
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };
    // ===============================Onbording Banner END===============================================
    return (
        <Container>
            <BackHeader title='Onboarding' />
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
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: moderateScale(10),
                            paddingRight: moderateScale(20)
                        }}
                        onPress={() => NavigationService.navigate('CreateNewPost')}
                    >
                        <Image
                            style={styles.profileImage}
                            source={{ uri: banner?.image }}
                        />
                        <AppTextInput
                            placeholder='Share Moments That Matters...'
                            inputContainerStyle={styles.inputContainer}
                            mainContainerStyle={styles.inputBox}
                            inputStyle={styles.fontStyl}
                            editable={false}
                        />
                    </TouchableOpacity>
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
                < TopTab />
            </ScrollView>
        </Container>
    )
}

export default Onbording

const styles = StyleSheet.create({
    imageStyl: {
        height: height / 3.5,
        width: width,
        resizeMode: "contain"
    },
    profileImage: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(100),
        borderWidth: moderateScale(3),
        borderColor: '#D4A218'

    },
    inputContainer: {
        borderWidth: 0,
        width: "97%",
        // borderRadius:moderateScale(25)

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
        fontFamily: FONTS.Roboto.light,
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