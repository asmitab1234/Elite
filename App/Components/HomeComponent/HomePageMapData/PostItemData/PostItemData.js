import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { Card, Icon, Text } from 'react-native-basic-elements'
import ReactNativeModal from 'react-native-modal'
import HomeDeleteEditModal from '../../HomeDeleteEditModal'
import CommentModal from '../../CommentModal'
import { moderateScale } from '../../../../Constants/PixelRatio'
import { FONTS } from '../../../../Constants/Fonts'
import { TouchableOpacity } from 'react-native'
import moment from 'moment'
import RePostModal from '../../RePostModal'
import NavigationService from '../../../../Services/Navigation'
import LongPost from '../../LongPost'

const PostItemData = ({ item }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const [isCommentModalVisible, setCommentModalVisible] = useState(false);
    const commentToggleModal = () => {
        setCommentModalVisible(!isCommentModalVisible);
    }
    const [isRePostModalVisible, setRePostModalVisible] = useState(false);
    const repostToggleModal = () => {
        setRePostModalVisible(!isRePostModalVisible);
    }
    const [like, setLike] = useState(false)
    // const postArr = [
    //     {
    //         name: 'Sara Tylor',
    //         holder: 'Admin',
    //         date: 'Post on 25.02.2008',
    //         profile: 'Master',
    //         text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.',
    //         badge: 'Bronze Badge Holder',
    //     },
    //     {
    //         name: 'Sara Tylor',
    //         holder: 'Admin',
    //         date: 'Post on 25.02.2008',
    //         profile: 'Master',
    //         text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.',
    //         badge: 'Bronze Badge Holder',
    //         type: 'msg'
    //     },
    //     {
    //         name: 'Sara Tylor',
    //         holder: 'Admin',
    //         date: 'Post on 25.02.2008',
    //         profile: 'Master',
    //         text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.',
    //         badge: 'Bronze Badge Holder',
    //     },
    //     {
    //         name: 'Sara Tylor',
    //         holder: 'Admin',
    //         date: 'Post on 25.02.2008',
    //         profile: 'Master',
    //         text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.',
    //         badge: 'Bronze Badge Holder'
    //     },
    // ]

    const reactArr = [
        {
            react: require('../../../../Assets/Home/like1.png')
        },
        {
            react: require('../../../../Assets/Home/curious.png')
        },
        {
            react: require('../../../../Assets/Home/insight.png')
        },
        {
            react: require('../../../../Assets/Home/support.png')
        },
        {
            react: require('../../../../Assets/Home/celebrate.png')
        },
        {
            react: require('../../../../Assets/Home/love.png')
        },
    ]
    return (
        <View>
            <Card
                style={styles.mainCard}>
                <View
                    style={styles.cardHeader}>
                    <Image
                        source={{ uri: item?.userImage }}
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
                                    {item.firstName}{" "}{item.lastName}
                                </Text>
                                <Image
                                    source={require('../../../../Assets/Home/BronzeBadge.png')}
                                    style={styles.badgeImgStyl}
                                />
                                {/* <Text
                                    style={styles.badgeStyl}>
                                    {item?.userData[0]?.rewardCard[0]?.cardName} Badge Holder
                                </Text> */}
                            </View>
                            {/* <View style={{ flex: 1 }} /> */}
                            <TouchableOpacity
                                onPress={toggleModal}>
                                <Icon
                                    name='more-vertical'
                                    type='Feather'
                                />
                            </TouchableOpacity>
                        </View>
                        {/*<Text
                            style={styles.holderText}>
                            {item?.type}
                        </Text> */}
                        <Text
                            style={styles.holderText}>
                            Post on {moment(item?.createdOn).format("DD.MM.YYYY")}
                        </Text>
                    </View>
                </View>

                {/* <Text
                    style={styles.captionText}>
                    {item?.description}
                </Text> */}
                <LongPost content={item?.description} />

                {item?.image && item.image.length == 0 ?
                    null
                    :
                    <Image
                        source={{ uri: item?.image[0] }}
                        style={styles.postImagetStl}
                    />
                }


                <Text
                    style={styles.person}>
                    {item.totalReaction} People
                </Text>

                <View style={styles.viewLine} />

                {like ?
                    <View
                        style={styles.reactionView}>
                        {reactArr.map((item, index) => (
                            <TouchableOpacity>
                                <Image
                                    source={item.react}
                                    style={styles.imgStyl}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                    :
                    null
                }

                <View
                    style={styles.reactMap}>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={() => setLike(!like)}
                    >
                        <Image
                            source={require('../../../../Assets/Home/like.png')}
                            style={styles.reactionImg}
                            resizeMode='contain'
                        />
                        <Text
                            style={styles.reactionText}>
                            Like
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={commentToggleModal}
                    >
                        <Image
                            source={require('../../../../Assets/Home/comment.png')}
                            style={styles.reactionImg}
                            resizeMode='contain'
                        />
                        <Text
                            style={styles.reactionText}>
                            Comment
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={() => NavigationService.navigate('Repost')}
                    >
                        <Image
                            source={require('../../../../Assets/Home/RepostIcon.png')}
                            style={styles.reactionImg}
                            resizeMode='contain'
                        />
                        <Text
                            style={styles.reactionText}>
                            Re Post
                        </Text>
                    </TouchableOpacity>

                </View>

            </Card>
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
                <CommentModal setCommentModalVisible={setCommentModalVisible} postid={item._id} />
            </ReactNativeModal>

            <ReactNativeModal isVisible={isRePostModalVisible}
                style={{
                    flex: 1,
                    borderRadius: moderateScale(8)
                }}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setRePostModalVisible(false)}
                onBackButtonPress={() => setRePostModalVisible(false)}
            >
                <RePostModal setRePostModalVisible={setRePostModalVisible} />
            </ReactNativeModal>
        </View>
    )
}

export default PostItemData

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
        // borderWidth:1
    },
    nameText: {
        fontFamily: FONTS.Roboto.regular,
        marginLeft: moderateScale(8),
        fontSize: moderateScale(13)
    },
    holderText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(12),
        marginLeft: moderateScale(8),
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
        marginHorizontal: moderateScale(10)
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