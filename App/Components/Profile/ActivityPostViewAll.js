import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { Card, Icon, Text } from 'react-native-basic-elements'
import ReactNativeModal from 'react-native-modal'
import { TouchableOpacity } from 'react-native'
import moment from 'moment'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import ActivityPostComponentForViewAll from './ActivityPostComponentForViewAll'

const ActivityPostViewAll = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const [isCommentModalVisible, setCommentModalVisible] = useState(false);
    const commentToggleModal = () => {
        setCommentModalVisible(!isCommentModalVisible);
    }

    const [like, setLike] = useState(false)

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

    const reactArr = [
        {
            react: require('../../Assets/Home/like1.png')
        },
        {
            react: require('../../Assets/Home/curious.png')
        },
        {
            react: require('../../Assets/Home/insight.png')
        },
        {
            react: require('../../Assets/Home/support.png')
        },
        {
            react: require('../../Assets/Home/celebrate.png')
        },
        {
            react: require('../../Assets/Home/love.png')
        },
    ]
    return (
        <View>
            {activityPostArr.map((item, index) => (
                <ActivityPostComponentForViewAll
                    key={index}
                    item={item}
                />
            ))}

        </View>
    )
}

export default ActivityPostViewAll

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 0,
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