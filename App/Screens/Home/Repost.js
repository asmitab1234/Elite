import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Card, Container, Icon, Picker, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import RepostHeader from '../../Components/Header/RepostHeader'
const { height, width } = Dimensions.get('window')
const Repost = () => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('')
    const [dropdownValue1, setDropdownValue1] = useState('')
    const [select, setselect] = useState('')
    return (
        <Container>
            <RepostHeader title='Create Re-Post' />

            <View style={{
                ...styles.viewLine,
                marginVertical: 0,
                // marginBottom: moderateScale(10)
            }} />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    style={styles.iconName}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        style={styles.imageUser}
                    />
                    <View>
                        <Text
                            style={styles.textStyle}>
                            Sara Tylor
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                            <Picker
                                options={[
                                    {
                                        label: 'Public',
                                        value: 'Public'
                                    },
                                    {
                                        label: 'Afinity Group',
                                        value: 'Afinity Group'
                                    },
                                ]}
                                placeholder="Select"
                                textStyle={{
                                    fontSize: 15
                                }}
                                selectedValue={dropdownValue}
                                onValueChange={(val) => setDropdownValue(val)}
                                containerStyle={{
                                    ...styles.picker,
                                    width: width / 2.6
                                }}

                            />

                            {dropdownValue == 'Afinity Group' ?
                                <Picker
                                    options={[
                                        {
                                            label: 'Item1',
                                            value: 'Item1'
                                        },
                                        {
                                            label: 'Item2',
                                            value: 'Item2'
                                        },
                                        {
                                            label: 'Item3',
                                            value: 'Item3'
                                        },
                                    ]}
                                    placeholder="Select Group"
                                    textStyle={{
                                        fontSize: 15
                                    }}
                                    selectedValue={dropdownValue1}
                                    onValueChange={(val) => setDropdownValue1(val)}
                                    containerStyle={{
                                        ...styles.picker,
                                        marginLeft: moderateScale(10)
                                    }}

                                />
                                : null
                            }
                        </View>
                    </View>
                </View>

                <AppTextInput
                    inputStyle={{
                        ...styles.fontStyl,
                        fontSize: moderateScale(18)
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer,
                        height: moderateScale(100)
                    }}
                    placeholder='Share Your Thoughts'

                />


                <Card
                    style={styles.mainCard}>
                    <View
                        style={styles.cardHeader}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1579783483458-83d02161294e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' }}
                            style={styles.userImage}
                        />
                        <View
                            style={{ flex: 1 }}>
                            <View
                                style={styles.moreNameView}>
                                <View
                                    style={styles.badgeName}>
                                    <Text numberOfLines={1}
                                        style={styles.nameText}>
                                        Sara  Tylor
                                    </Text>
                                    <Image
                                        source={require('../../Assets/Home/BronzeBadge.png')}
                                        style={styles.badgeImgStyl}
                                    />
                                    {/* <Text
                  style={styles.badgeStyl}>
                  Badge Holder
                </Text> */}
                                </View>
                                {/* <View style={{ flex: 1 }} /> */}
                                {/* <TouchableOpacity
                onPress={toggleModal}>
                <Icon
                  name='more-vertical'
                  type='Feather'
                />
              </TouchableOpacity> */}
                            </View>
                            <Text
                                style={styles.holderText}>
                                Post on 22nd Feb 2024
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={styles.captionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore         </Text>


                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww' }}
                        style={styles.postImagetStl}
                    />

                </Card>

            </ScrollView>
        </Container>
    )
}

export default Repost

const styles = StyleSheet.create({
    profileImage: {
        height: moderateScale(100),
        width: moderateScale(100),
        borderRadius: moderateScale(100),
        borderWidth: moderateScale(3),
        borderColor: '#D4A218'

    },
    inputContainer: {
        borderWidth: 0,
        height: moderateScale(100)
    },
    inputBox: {
        width: '100%',
        marginVertical: moderateScale(8)
    },
    topCard: {
        backgroundColor: '#f5f5f5f5',
        marginHorizontal: moderateScale(13),
        marginTop: moderateScale(10),
        paddingHorizontal: 0
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(10)
    },
    viewLine: {
        height: moderateScale(0.5),
        width: '100%',
        backgroundColor: '#5E5E5E',
    },

    inputContainer: {
        borderWidth: 0
    },
    IconView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginBottom: moderateScale(10),
        marginHorizontal: moderateScale(15)
    },
    postImage: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(13)
    },
    iconName: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(15)
    },
    imageUser: {
        height: moderateScale(40),
        width: moderateScale(40),
        marginRight: moderateScale(10),
        borderRadius: moderateScale(80)
    },
    picker: {
        justifyContent: 'center',
        height: moderateScale(25),
        width: '45%',
        borderRadius: moderateScale(5)
    },
    textStyle: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15)
    },
    mainCard: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 0,
        marginTop: moderateScale(8),
        marginBottom: moderateScale(9),
        marginHorizontal: moderateScale(30)
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
        height: moderateScale(18),
        width: moderateScale(18),
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
        height: moderateScale(200),
        width: '100%',
        marginTop: moderateScale(15),
        resizeMode: "contain"
    },
    captionText: {
        fontFamily: FONTS.Roboto.regular,
        marginHorizontal: moderateScale(8),
        fontSize: moderateScale(11),
        marginTop: moderateScale(15)
    },
    // viewLine: {
    //     height: moderateScale(0.5),
    //     width: '100%',
    //     backgroundColor: '#BEBDBD',
    //     // marginVertical: moderateScale(10),
    //     marginTop: moderateScale(10)
    // },
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