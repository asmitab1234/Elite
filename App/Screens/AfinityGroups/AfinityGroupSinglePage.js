import { Dimensions, Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppTextInput, Card, Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import GroupSingleCard from '../../Components/DrawerComponent/AfinityGroups/GroupSingleCard'
const { height, width } = Dimensions.get('window')

const AfinityGroupSinglePage = () => {
    const afinityArr = [
        {
            img: require('../../Assets/Home/user.png'),
            userType: 'Admin',
            charter: 'Lorem ipsum dolor',
            purpose: 'React Native'
        },
        {
            img: require('../../Assets/Home/user.png'),
            userType: 'Admin',
            charter: 'Lorem ipsum dolor',
            purpose: 'React Native'
        },
        {
            img: require('../../Assets/Home/user.png'),
            userType: 'Admin',
            charter: 'Lorem ipsum dolor',
            purpose: 'React Native'
        },
        {
            img: require('../../Assets/Home/user.png'),
            userType: 'Admin',
            charter: 'Lorem ipsum dolor',
            purpose: 'React Native'
        },
    ]
    const activityPostArr = [
        {
            name: 'Sara Tylor',
            date: '22nd Feb 2024',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c'
        },
        {
            name: 'Sara Tylor',
            date: '22nd Feb 2024',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c'
        },
        {
            type: 'msg',
            name: 'Sara Tylor',
            date: '22nd Feb 2024',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c'
        },
        {
            name: 'Sara Tylor',
            date: '22nd Feb 2024',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c'
        }
    ]

    return (
        <Container>
            <BackHeader title='Affinity Group' />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Image
                    style={styles.imageBanner}
                    source={{ uri: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y291cnNlfGVufDB8fDB8fHww' }}
                />

                <View
                    style={{
                        marginHorizontal: moderateScale(15)
                    }}>

                    <TouchableOpacity

                        onPress={() => NavigationService.navigate('GroupDetailScreen')}>
                        <Text
                            style={{
                                ...styles.joinedText,
                                fontSize: moderateScale(16)
                            }}>
                            Lorem ipsum dolor sit Lorem ipsum dolor sit sit Lorem ipsum dolor sit
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.joinedBox}>
                        <Text
                            style={styles.joinedText}>
                            Joined
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={{
                            ...styles.memberText,
                            alignSelf: 'flex-end'
                        }}>
                        Created By : {' '}
                        <Text
                            style={{
                                ...styles.memberText,
                                fontFamily: FONTS.Roboto.regular
                            }}>
                            HR
                        </Text>
                    </Text>

                    <Pressable
                        style={{
                            marginBottom: moderateScale(10)
                        }}
                        onPress={() => NavigationService.navigate('MemberList')}>
                        <Text
                            style={{
                                ...styles.memberText,
                            }}>
                            Member:{' '}
                            <Text
                                style={{
                                    ...styles.memberText,
                                    fontFamily: FONTS.Roboto.regular
                                }}>
                                120
                            </Text>
                        </Text>
                    </Pressable>

                    <Card
                        shadow={false}
                        style={styles.topCard}>
                        <Pressable
                            // onPress={() => NavigationService.navigate('CreateNewPost')}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' }}
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
                    {activityPostArr.map((item, index) => (
                        <GroupSingleCard
                            key={index}
                            item={item}
                        />
                    ))}

                </View>
            </ScrollView>
        </Container>
    )
}

export default AfinityGroupSinglePage

const styles = StyleSheet.create({
    imageBanner: {
        height: height / 4,
        width: width,
        marginBottom: moderateScale(8)
    },
    joinedBox: {
        padding: moderateScale(8),
        borderRadius: moderateScale(8),
        backgroundColor: '#DDB89F',
        marginTop: moderateScale(17),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(15)
    },
    joinedText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    },
    memberText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14),
    },
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