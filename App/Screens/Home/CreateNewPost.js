import { Dimensions, Image, StyleSheet, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppTextInput, Container, Icon, Picker, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import CreatePostHeader from '../../Components/Header/CreatePostHeader'
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import { TouchableOpacity } from 'react-native'
import PostService from '../../Services/PostService'
import AuthService from '../../Services/Auth'
import NavigationService from '../../Services/Navigation';
import { ActivityIndicator } from 'react-native'
const { height, width } = Dimensions.get('window')
const CreateNewPost = () => {
    const colors = useTheme()
    // ==============================All States Start=====================================
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [Affinitity, SetAffinitity] = useState([]);


    const [ShareOptionSelect, setShareOptionSelect] = useState('')
    const [SelectedAffinity, setSelectedAffinity] = useState('')
    const [Thoughts, setThoughts] = useState('')
    const [CamraImage, setCamraImage] = useState('')
    const [Gallery, setGallery] = useState('')
    const [Document, setDocument] = useState('')
    // console.log("Document======>>>>>>", Document)

    // ==============================All States End=====================================
    useEffect(() => {
        getAffinitity()
        GetUserData()
    }, [])
    // --------------------------------------All Functions Start--------------------------------------

    const Post_Data_push = () => {
        data = {
            "description": Thoughts,
            "image": CamraImage || Gallery,
            "postType": "public",
            // "postType": ShareOptionSelect,
            // "affinityGroupId": ShareOptionSelect === "public" ? "" : SelectedAffinity
        }

        console.log("data=====>", data)
        PostService.Post_HomePagePosts_Data(data)
            .then(result => {
                console.log("data==fmbdlkfmbkldmf", result)
                if (result && result.status) {
                    ToastAndroid.show('Post Added Successful', ToastAndroid.LONG);
                    NavigationService.navigate("Home")
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };

    // ==========Affinitity List Start============
    const getAffinitity = () => {
        PostService.Get_Affinitity_Data()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    SetAffinitity(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    // ==========Affinitity List END================
    // ==========GetUserData List Start============
    const [UserData, setUserData] = useState({})
    const GetUserData = () => {
        PostService.Get_GetUserData_Data()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setUserData(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    // ==========GetUserData List END================
    // --------------------------------------All Functions End--------------------------------------    
    // ----------------------------------------------------------------------------
    // =======CamraOpen========
    const CamraOpen = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(async data => {
            AuthService.uploadProfileImage(data)
                .then(result => {
                    console.log('image resultttt>>>>,', result);
                    if (result && result.status) {
                        setCamraImage(result?.image);
                    }
                })
                .catch(err => {
                    if (err) {
                    }
                });
        }
        );
    }
    // =======GalleryOpen========
    const GalleryOpen = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(async data => {
            AuthService.uploadProfileImage(data)
                .then(result => {
                    console.log('image resultttt>>>>,', result);
                    if (result && result.status) {
                        setGallery(result?.image);
                    }
                })
                .catch(err => {
                    if (err) {
                    }
                });
        }
        );
    }
    // =======DocumentOpen========
    const DocumentOpen = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            console.log(
                'URI : ' + res.uri,
                'Type : ' + res.type, // mime type
                'File Name : ' + res.name,
                'File Size : ' + res.size
            );
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the picker');
            } else {
                console.log('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };
    // ----------------------------------------------------------------------------

    return (
        <Container>
            <CreatePostHeader title='Create New Post' Post_Data_push={Post_Data_push} />
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <View style={{
                    ...styles.viewLine,
                    marginVertical: 0,
                    marginBottom: moderateScale(10)
                }} />
                <View
                    style={styles.iconName}>
                    <Image
                        source={{ uri: UserData?.image }}
                        style={styles.imageUser}
                    />
                    <View>
                        <Text
                            style={styles.textStyle}>
                            {UserData?.firstName}{" "}
                            {UserData?.lastName}
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
                                        value: 'public'
                                    },
                                    {
                                        label: 'Affinity Group',
                                        value: 'private'
                                    },
                                ]}
                                placeholder="Select"
                                textStyle={{
                                    fontSize: 12
                                }}
                                selectedValue={ShareOptionSelect}
                                onValueChange={(val) => setShareOptionSelect(val)}
                                containerStyle={{
                                    ...styles.picker,
                                    width: width / 2.6
                                }}

                            />

                            {ShareOptionSelect == 'private' ?
                                <Picker
                                    options={Affinitity}
                                    labelKey="groupName"
                                    valueKey="_id"

                                    placeholder="Select Group"
                                    textStyle={{
                                        fontSize: 12
                                    }}
                                    selectedValue={SelectedAffinity}
                                    onValueChange={(val) => setSelectedAffinity(val)}
                                    containerStyle={{
                                        ...styles.picker,
                                        marginLeft: moderateScale(10)
                                    }}
                                    mode='dialog'
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
                    placeholder='Share Moments That Matters'
                    onChangeText={(text) => setThoughts(text)}
                />
                <View style={{ flex: 1 }} />
                <View style={styles.viewLine} />
                <View
                    style={styles.IconView}>
                    <TouchableOpacity
                        onPress={() => CamraOpen()}

                    >
                        <Image
                            source={require('../../Assets/post/Camera.png')}
                            resizeMode='contain'
                            style={{
                                ...styles.postImage,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => GalleryOpen()}
                    >
                        <Image
                            source={require('../../Assets/post/Gallery.png')}
                            resizeMode='contain'
                            style={{
                                ...styles.postImage,
                                marginHorizontal: moderateScale(30)
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => DocumentOpen()}
                    >
                        <Image
                            source={require('../../Assets/post/Attach.png')}
                            resizeMode='contain'
                            style={{
                                ...styles.postImage,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </>}
        </Container>
    )
}

export default CreateNewPost

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
        // alignItems: 'center',
        // flexDirection: 'row',
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
        height: moderateScale(0.59),
        width: '100%',
        backgroundColor: '#818181',
        marginVertical: moderateScale(10)
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
        // marginTop: moderateScale(12)
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
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(16)
    },

})