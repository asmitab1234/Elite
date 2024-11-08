import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { AppTextInput, Icon, Text } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
const { height, width } = Dimensions.get('window');
import Modal, { ReactNativeModal } from 'react-native-modal';
import HomeDeleteEditModal from './HomeDeleteEditModal';
import CommentMapBody from './CommentComponents/CommentMapBody/CommentMapBody';
import { ScrollView } from 'react-native';
import CommentService from '../../Services/CommentService';
import { ActivityIndicator } from 'react-native';
import Toast from 'react-native-simple-toast';
import { RefreshControl } from 'react-native';
import NoCommentFound from '../../Screens/NodataFound/NoCommentFound';
import NavigationService from '../../Services/Navigation';

const CommentModal = ({ setCommentModalVisible, postid }) => {

    const [refreshing, setRefreshing] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [SmallComment, setSmallComment] = useState(false);
    const [CommentReply, setCommentReply] = useState('');
    const [CommentID, setCommentID] = useState('');
    const [AddComment, setAddComment] = useState('');
    const [LoaderStatus, setLoaderStatus] = useState(true);
    const [commentLength, setcommentLength] = useState(false);
    const [CommentData, setCommentData] = useState([]);
    const [EditComment, setEditComment] = useState('');
    const [funModalVisible, setFunModalVisible] = useState(false);
    const funmodal = () => {setFunModalVisible(!funModalVisible)};
    const [EditModalVisible, setEditModalVisible] = useState(false);
    const Editmodal = () => {setEditModalVisible(!EditModalVisible)};
    const [ReportModalVisible, setReportModalVisible] = useState(false);
    const Reportmodal = () => {setReportModalVisible(!ReportModalVisible)};
    const toggleModal = () => {setModalVisible(!isModalVisible)};
    // =============================function Start==============================================

    useEffect(() => {
        getCommentFromApi();
    }, []);

    //Comment Fatch/View
    const getCommentFromApi = () => {
        let data = {
            postID: postid,
        };
        CommentService.View_Comment_Data(data)
            .then(result => {
                setLoaderStatus(true);
                if (result && result.status) {
                    setLoaderStatus(false);
                    setCommentData(result?.data);
                }
            })
            .catch(err => {
                setLoaderStatus(false);
                console.log('error>>', err);
            });
    };

    //Commet Add
    const AddCommentToApi = () => {
        let data = {
            postID: postid,
            comment: AddComment,
        };
        CommentService.Add_Comment_Data(data)
            .then(result => {
                setLoaderStatus(true);
                if (result && result.status == true) {
                    setLoaderStatus(false);
                    getCommentFromApi()
                    Toast.show('Comment added successfully', Toast.SHORT);

                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false);

            });
    };

    //Commet Update
    const UpdateCommentToApi = (id) => {
        let data = {
            comment: EditComment
        };
        CommentService.Update_Comment_Data(data, CommentID)
            .then(result => {
                setLoaderStatus(true);
                if (result && result.status == true) {
                    setLoaderStatus(false);
                    getCommentFromApi()
                    Toast.show('Comment Updated successfully', Toast.SHORT);
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false);
            });
    };

    //Commet Reply
    const CommentReplyFromApi = () => {
        let data = {
            commentID: CommentID,
            reply: CommentReply,
        };
        CommentService.Comment_Reply_Api(data)
            .then(result => {
                setLoaderStatus(true);
                if (result && result.status == true) {
                    setLoaderStatus(false);
                    getCommentFromApi()
                    Toast.show('Reply added successfully', Toast.SHORT);
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false);
            });
    };

    //Comment Delete
    const CommentDeleteFromApi = () => {
        CommentService.Comment_Delete(CommentID)
            .then(result => {
                setLoaderStatus(true);
                if (result && result.status == true) {
                    setLoaderStatus(false);
                    getCommentFromApi()
                    Toast.show('Comment deleted successfully !', Toast.SHORT);
                }
            })
            .catch(err => {
                setLoaderStatus(false);
                console.log('error>>', err);
            });
    };
    // =============================function End==============================================


    // const commentArr = [
    //     {
    //         type: 'reply',
    //     },
    //     {
    //         type: 'send',
    //     },
    //     {
    //         type: 'reply',
    //     },
    //     {
    //         type: 'send',
    //     },
    // ];
    const appbutton = [
        {
            img: require('../../Assets/Home/happy.png'),
            // clicked: () => ()
        },
        {
            img: require('../../Assets/Home/send.png'),
            clicked: () => AddCommentToApi(),
        },
    ];


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getCommentFromApi();

        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <View style={styles.modalStyl}>
            <Text style={styles.commentText}>Comments</Text>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {LoaderStatus ? (
                    <ActivityIndicator size={40} style={{ flex: 1 }} />
                ) : (
                    <>
                        {CommentData == "" ? <NoCommentFound /> :
                            CommentData.map((item, index) => (
                                <>
                                    <View key={index} style={{ ...styles.commentView }}>
                                        <TouchableOpacity
                                            onPress={() => NavigationService.navigate("Profile")}
                                        >
                                            <Image
                                                source={{ uri: item?.Userimage }}
                                                style={styles.imgStyl}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onLongPress={(val) => {
                                                toggleModal(),
                                                    setCommentID(item?._id)
                                                setEditComment(item?.comment)

                                            }}
                                            style={styles.commentBox}>
                                            <Text style={{ ...styles.textStyl, alignSelf: "flex-start" }}>{item?.comment}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* --------------------------------Small Comment Box Start------------------------------------------ */}
                                    {commentLength == item._id ? (
                                        <>
                                            {item?.replyData?.map((item, index) => {
                                                return (
                                                    <TouchableOpacity onPress={(val) => { toggleModal(), setCommentID(item?.replyData?._id) }}
                                                        key={index} style={{ ...styles.small_comment_box }}>
                                                        <TouchableOpacity
                                                            onPress={() => NavigationService.navigate("Profile")}
                                                        >
                                                            <Image
                                                                source={{ uri: item?.UserImage }}
                                                                style={styles.imgStyl_comment}
                                                            />

                                                        </TouchableOpacity>
                                                        <View style={styles.commentBox_small}>
                                                            <Text
                                                                numberOfLines={1}
                                                                style={styles.textStyl_comment}>
                                                                {item?.reply}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </>

                                    ) : (
                                        <>
                                            {item?.replyData?.slice(0, 1).map((item, index) => {
                                                return (
                                                    <TouchableOpacity onPress={(val) => { toggleModal(), setCommentID(item?.replyData?._id) }}
                                                        key={index} style={{ ...styles.small_comment_box }}>
                                                        <TouchableOpacity
                                                            onPress={() => NavigationService.navigate("Profile")}
                                                        >
                                                            <Image
                                                                source={{ uri: item?.UserImage }}
                                                                style={styles.imgStyl_comment}
                                                            />
                                                        </TouchableOpacity>
                                                        <View style={styles.commentBox_small}>
                                                            <Text
                                                                numberOfLines={1}
                                                                style={styles.textStyl_comment}>
                                                                {item?.reply}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </>
                                    )}
                                    {item?.replyData?.length == 0 ? null : (
                                        <TouchableOpacity
                                            onPress={() => setcommentLength(s => s == item._id ? false : item._id)}>
                                            {commentLength == item._id ? (
                                                <Text
                                                    style={{
                                                        alignSelf: 'center',
                                                        marginBottom: moderateScale(5),
                                                    }}>
                                                    ---View Short---
                                                </Text>

                                            ) : (
                                                <Text
                                                    style={{
                                                        alignSelf: 'center',
                                                        marginBottom: moderateScale(5),
                                                    }}>
                                                    --View All  ({item?.replyData?.length}) Comment's--
                                                </Text>
                                            )}
                                        </TouchableOpacity>
                                    )}
                                    {/* --------------------------------Small Comment Box end------------------------------------------ */}
                                </>
                            ))
                        }
                    </>
                )}
            </ScrollView>

            <View style={{ flex: 1 }} />
            <AppTextInput
                placeholder="Write Your Comment"
                inputStyle={styles.fontStyl}
                inputContainerStyle={styles.inputContainer}
                mainContainerStyle={styles.mainContainer}
                onChangeText={text => setAddComment(text)}
                rightAction={
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        {appbutton?.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={item.clicked}>
                                    <Image source={item.img} style={styles.sendIMg} />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                }
            />
            {/* ===========================Button Model Start=============================== */}

            <ReactNativeModal
                isVisible={isModalVisible}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                onBackdropPress={() => setModalVisible(false)}
                onBackButtonPress={() => setModalVisible(false)}
            >
                <View style={styles.modalStylDelete}>
                    {/* ===========================Reply Start=============================== */}
                    <TouchableOpacity
                        onPress={() => {
                            setSmallComment(!SmallComment),
                                setFunModalVisible(true),
                                setModalVisible(false);
                        }}
                        style={styles.iconText}>
                        <Icon
                            name="reply"
                            type="MaterialCommunityIcon"
                            size={28}
                            color={'#B14444'}
                        />
                        <Text style={styles.deleteText}>Reply</Text>
                    </TouchableOpacity>
                    {/* ===========================Reply End=============================== */}
                    {/* ===========================Delete Start=============================== */}
                    <TouchableOpacity
                        onPress={() => { setModalVisible(false), CommentDeleteFromApi() }}
                        style={styles.iconText}>
                        <Icon
                            name="delete-outline"
                            type="MaterialCommunityIcon"
                            size={28}
                            color={'#B14444'}
                        />
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                    {/* ===========================Delete End=============================== */}
                    {/* ===========================Edit Start=============================== */}

                    <TouchableOpacity
                        onPress={() => { setModalVisible(false), setEditModalVisible(true) }}
                        style={styles.iconText}>
                        <Icon
                            name="edit"
                            type="Feather"
                            size={22}
                            color={'#B14444'}
                        />
                        <Text style={styles.deleteText}>Edit</Text>
                    </TouchableOpacity>
                    {/* ===========================Edit End=============================== */}
                    {/* ===========================Report Start=============================== */}

                    <TouchableOpacity
                        onPress={() => { setModalVisible(false) }}
                        style={styles.iconText}>
                        <Icon
                            name="report"
                            type="Octicons"
                            size={22}
                            color={'#B14444'}
                        />
                        <Text style={styles.deleteText}>Report</Text>
                    </TouchableOpacity>
                    {/* ===========================Report End=============================== */}
                </View>
            </ReactNativeModal>
            {/* ===========================Button Model End=============================== */}

            {/* ===========================Reply Model Start=============================== */}
            <ReactNativeModal
                isVisible={funModalVisible}
                onBackButtonPress={() => setFunModalVisible(false)}
                onBackdropPress={() => setFunModalVisible(false)}
                style={styles.modal_Style_for_add}
                backdropOpacity={0.2}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}>
                <View
                    style={{
                        ...styles.modal_view,
                    }}>
                    <Text style={styles.hobbiestxt}>Add Your Fun</Text>
                    <AppTextInput
                        placeholder="Type here"
                        onChangeText={text => setCommentReply(text)}
                    />
                    <TouchableOpacity
                        style={styles.savebtn}
                        onPress={() => {
                            CommentReplyFromApi(), setFunModalVisible(false);
                        }}>
                        <Text style={styles.savetxt}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ReactNativeModal>
            {/* ===========================Reply Model End=============================== */}

            {/* ===========================Edit Model Start=============================== */}
            <ReactNativeModal
                isVisible={EditModalVisible}
                onBackButtonPress={() => setEditModalVisible(false)}
                onBackdropPress={() => setEditModalVisible(false)}
                style={styles.modal_Style_for_add}
                backdropOpacity={0.2}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}>
                <View
                    style={{
                        ...styles.modal_view,
                    }}>
                    <Text style={styles.hobbiestxt}>Edit Your Fun</Text>
                    <AppTextInput
                        placeholder="Type here"
                        value={EditComment}
                        onChangeText={(text) => setEditComment(text)}
                    />
                    <TouchableOpacity
                        style={styles.savebtn}
                        onPress={() => {
                            setEditModalVisible(false),
                                UpdateCommentToApi()
                        }}>
                        <Text style={styles.savetxt}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </ReactNativeModal>
            {/* ===========================Edit Model Start=============================== */}
        </View>
    );
};

export default CommentModal;

const styles = StyleSheet.create({
    modalStyl: {
        height: height / 1.3,
        width: width,
        borderTopRightRadius: moderateScale(8),
        borderTopLeftRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        paddingVertical: moderateScale(20),
        paddingHorizontal: moderateScale(20),
    },
    small_comment_box: {
        flexDirection: 'row',
        marginVertical: moderateScale(5),
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commentView: {
        flexDirection: 'row',
        // alignItems: 'center',
        marginVertical: moderateScale(10),
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(60),
    },
    imgStyl_comment: {
        height: moderateScale(25),
        width: moderateScale(25),
        borderRadius: moderateScale(50),
    },
    commentBox: {
        backgroundColor: '#CCCCCC',
        padding: moderateScale(10),
        alignItems: 'center',
        borderRadius: moderateScale(10),
        width: '75%',
        marginLeft: moderateScale(15),
        elevation: 2
    },
    commentBox_small: {
        backgroundColor: '#fff',
        padding: moderateScale(10),
        alignItems: 'center',
        borderRadius: moderateScale(10),
        width: '70%',
        marginLeft: moderateScale(10),
        elevation: 2
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
    },
    textStyl_comment: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        alignSelf: 'flex-start',
        paddingLeft: moderateScale(10),
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    },
    inputContainer: {
        borderWidth: 0,
        backgroundColor: '#E9E9E9',
    },
    mainContainer: {
        marginTop: moderateScale(30),
        paddingVertical: 0,
    },
    sendIMg: {
        height: moderateScale(25),
        width: moderateScale(25),
        marginLeft: moderateScale(10),
    },
    commentText: {
        textAlign: 'center',
        marginBottom: moderateScale(20),
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15),
    },
    modalStylDelete: {
        // height: height / 4,
        width: width,
        borderTopRightRadius: moderateScale(8),
        borderTopLeftRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        paddingVertical: moderateScale(20),
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(12),
    },
    deleteText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15),
        marginLeft: moderateScale(8),
    },
    modal_Style_for_add: {
        marginHorizontal: moderateScale(15),

    },
    modal_view: {
        height: height / 3.5,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(20),
    },
    hobbiestxt: {
        color: '#CC002F',
        fontSize: moderateScale(16),
        fontFamily: FONTS.Roboto.bold,
        // marginHorizontal: moderateScale(5),
        marginBottom: moderateScale(5),
    },
    savebtn: {
        height: moderateScale(50),
        backgroundColor: '#CC002F',
        borderRadius: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: moderateScale(20),
    },
    savetxt: {
        fontSize: moderateScale(14),
        fontFamily: FONTS.Roboto.semibold,
        color: '#FFFFFF',
    },
});
