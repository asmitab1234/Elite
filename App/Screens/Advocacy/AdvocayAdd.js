import { ScrollView, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, Picker, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import ImageCropPicker from 'react-native-image-crop-picker'
import NavigationService from '../../Services/Navigation'
import Toast from 'react-native-simple-toast';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import AuthService from '../../Services/Auth'
import AdvocacyService from '../../Services/AdvocacyService'
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native'
import Hiring from '../Profile/Hiring';
const AdvocayAdd = () => {
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [CategoryData, setCategoryData] = useState([]);
    const [SelectCategory, setSelectCategory] = useState('');
    const [Language, setLanguage] = useState('');
    const [AdvocacyTitle, setAdvocacyTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [UploadImage, setUploadImage] = useState('');
    const [UploadDocuments, setUploadDocuments] = useState('');

    useEffect(() => {
        GetAdvocayCategory()
    }, [])
    // +++++++++++++++++++++++++++++API Function+++++++++++++++++++++++++++++++++
    const PostAdvocay = () => {
        if (SelectCategory == '') {
            Toast.show('Please Select a Category', Toast.SHORT);
            return false;
        }
        if (Language == '') {
            Toast.show('Please Write a Advocay Language', Toast.SHORT);
            return false;
        }
        if (AdvocacyTitle == '') {
            Toast.show('Please Write a  Advocacy Title', Toast.SHORT);
            return false;
        }
        if (Description == '') {
            Toast.show('Please Write a Description', Toast.SHORT);
            return false;
        }
        if (UploadImage == '') {
            Toast.show('Please Upload a Image', Toast.SHORT);
            return false;
        }
        if (UploadDocuments == '') {
            Toast.show('Please Upload a Documents', Toast.SHORT);
            return false;
        }



        data = {
            AdvocacyName: AdvocacyTitle,
            advocacyCatId: SelectCategory,
            image: UploadImage,
            desc: Description,
            material: UploadDocuments,
            language: Language
        }
        console.log("SdgasfgasfgafadfrgasF=======>>>>>", data)

        AdvocacyService.Post_Advocay_Data(data)
            .then(result => {
                if (result && result.status) {
                    // Setbanner(result?.data);
                    Toast.show('Uploaded Successfuly', Toast.LONG);
                    NavigationService.navigate('Advocacy')
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };

    const GetAdvocayCategory = () => {
        AdvocacyService.Get_Advocay_Category_Data(data)
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setCategoryData(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };

    // +++++++++++++++++++++++++++++API Function+++++++++++++++++++++++++++++++++
    // ----------------------------------------------------------------------------
    // =======GalleryOpen========
    const pickImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(async data => {
            AuthService.uploadProfileImage(data)
                .then(result => {
                    console.log('image resultttt>>>>,', result);
                    if (result && result.status) {
                        Toast.show('Image Upload Successfuly', Toast.LONG);
                        setUploadImage(result?.image);
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
    // const pickDocument = async () => {
    //     try {
    //         const res = await DocumentPicker.pick({
    //             type: [DocumentPicker.types.allFiles],
    //         });
    //         console.log(
    //             'URI : ' + res.uri,
    //             'Type : ' + res.type, // mime type
    //             'File Name : ' + res.name,
    //             'File Size : ' + res.size
    //         );
    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //             console.log('User cancelled the picker');
    //         } else {
    //             console.log('Unknown Error: ' + JSON.stringify(err));
    //             throw err;
    //         }
    //     }
    // };

    const pickDocument = async () => {
        DocumentPicker.pick({
            presentationStyle: 'fullScreen',
            allowMultiSelection: false,
            copyTo: "cachesDirectory"
        })
            .then(res => {
                console.log("res", res);

                AuthService.uploadProfileImage({
                    path: res[0].fileCopyUri,
                    mime: res[0].type,
                })
                    .then(res => {
                        console.log("res------------------>>>>>>>>>>>", res);
                        // setDocumentLoderStatus(false);
                        if (res && res.status) {
                            Toast.show('Document Upload Successfuly', Toast.LONG);
                            setUploadDocuments(res?.image)
                        }
                    })
                    .catch(err => {
                        console.log('err', err);
                        setDocumentLoderStatus(false);
                    });
            })
            .catch(err => {
                console.log("err-----------=======>>>>>>", err);
            })
    }


    // ----------------------------------------------------------------------------

    return (
        <Container>
            <BackHeader
                title='Advocay Add'
            />
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginHorizontal: moderateScale(15)
                    }}>
                    <Text
                        style={styles.titleStyl}>
                        Select Category*
                    </Text>
                    <Picker
                        options={CategoryData}
                        labelKey="categoryName"
                        valueKey="_id"
                        placeholder="Select Option"
                        textStyle={{
                            fontSize: 15
                        }}
                        selectedValue={SelectCategory}
                        onValueChange={(val) => setSelectCategory(val)}
                        containerStyle={{
                            borderRadius: moderateScale(5),
                            height: moderateScale(45),
                            justifyContent: 'center'
                        }}
                    />

                    <AppTextInput
                        title='Language*'
                        titleStyle={{
                            ...styles.titleStyl,
                            marginTop: moderateScale(8)
                        }}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.fontStyl}
                        onChangeText={(text) => setLanguage(text)}
                    />

                    <AppTextInput
                        title='Advocacy Title*'
                        titleStyle={{
                            ...styles.titleStyl,
                            marginTop: moderateScale(8)
                        }}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.fontStyl}
                        onChangeText={(text) => setAdvocacyTitle(text)}
                    />

                    <AppTextInput
                        title='Description *'
                        titleStyle={{
                            ...styles.titleStyl,
                            marginTop: moderateScale(8)
                        }}
                        inputContainerStyle={{
                            ...styles.inputContainerStyle,
                            height: moderateScale(100)
                        }}
                        inputStyle={styles.fontStyl}
                        onChangeText={(text) => setDescription(text)}
                    />

                    <Text
                        style={{
                            ...styles.titleStyl,
                            marginTop: moderateScale(8)
                        }}>
                        Upload Image*
                    </Text>
                    {UploadImage == "" ?
                        <TouchableOpacity
                            style={{
                                ...styles.back_view,
                            }}
                            onPress={() => pickImage()}>
                            <Icon
                                name='upload'
                                type='Entypo'
                            />
                            <Text
                                style={styles.document}>
                                Upload min 5 mb image
                            </Text>
                            <Text
                                style={styles.document}>
                                Drop Files here to Upload
                            </Text>
                        </TouchableOpacity>
                        :

                        <TouchableOpacity
                            style={{
                                ...styles.image_view,
                            }}
                            onPress={() => pickImage()}
                        >
                            <Image
                                style={styles.user}
                                source={{ uri: UploadImage }}
                            />
                        </TouchableOpacity>
                    }
                    <Text
                        style={{
                            ...styles.titleStyl,
                            marginTop: moderateScale(8)
                        }}>
                        Upload Documents*
                    </Text>

                    {UploadDocuments == "" ?
                        <TouchableOpacity
                            style={{
                                ...styles.back_view,
                            }}
                            onPress={() => pickDocument()}>
                            <Icon
                                name='upload'
                                type='Entypo'
                            />
                            <Text
                                style={styles.document}>
                                Upload Document
                            </Text>
                            <Text
                                style={styles.document}>
                                Drop Files here to Upload
                            </Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={{
                                ...styles.image_view,
                            }}
                            onPress={() => pickDocument()}
                        >
                            <Image
                                style={styles.image_icon}
                                source={require("../../Assets/advocacy/success.png")}
                            />
                        </TouchableOpacity>
                    }
                    <AppButton
                        title='Upload'
                        style={styles.buttonStyl}
                        textStyle={styles.titleStyl}
                        onPress={() => PostAdvocay()}
                    />

                </ScrollView>
            </>}
        </Container>
    )
}

export default AdvocayAdd

const styles = StyleSheet.create({
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    inputContainerStyle: {
        borderRadius: moderateScale(5),
        height: moderateScale(45)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    back_view: {
        width: '100%',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(8),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dotted',
        padding: moderateScale(25)

    },
    document: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(8)
    },
    buttonStyl: {
        marginHorizontal: 0,
        marginVertical: moderateScale(15),
        borderRadius: moderateScale(5)
    },
    user: {
        height: moderateScale(100),
        width: "100 %",
        resizeMode: "contain"
    },
    image_view: {
        height: moderateScale(100),
        width: "100 %",
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(8),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dotted',
        padding: moderateScale(25)
    },
    image_icon: {
        height: moderateScale(75),
        width: "100 %",
        resizeMode: "contain"
    },
})