import { FlatList, Pressable, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, Text, Picker } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import ImageCropPicker from 'react-native-image-crop-picker'
import NavigationService from '../../Services/Navigation'
import AffinityGroupService from '../../Services/AffinityGroupService'
import AuthService from '../../Services/Auth'
import { ActivityIndicator } from 'react-native'
import FilterBrand from './FilterBrand/FilterBrand'

const AfinityGroupAdd = () => {
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [dropdownValue, setDropdownValue] = useState([]);
    const [GroupName, setGroupName] = useState('')
    const [GroupType, setGroupType] = useState('')
    const [GroupCharter, setGroupCharter] = useState('')
    const [GroupPurpose, setGroupPurpose] = useState('')
    const [EpmloyeeImage, setEpmloyeeImage] = useState('')
    const [EmployeeList, setEmployeeList] = useState([])
    const [newArr, setnewArr] = useState([])
    // console.log("Affinity Selected===========>>>>>>>>>>", JSON.stringify(EmployeeList))
    const [EmployeeName, setEmployeeName] = useState('')
    // console.log("EmployeeNameEmployeeName>>>>>>", EmployeeList)
    useEffect(() => {
        Get_All_Employee_List()
        // FilterIdfunction()
    }, [])

    // --------------------------------------All Functions Start--------------------------------------



    const Afinity_Data_push = () => {

        let oldArr = []
        EmployeeList.filter(it => it.select == true).forEach((item, index) => {
            oldArr.push(item._id)
            // console.log('oldArr>>',oldArr)
            setnewArr(oldArr)
        })


        data = {
            groupName: GroupName,
            grouptype: GroupType,
            charter: GroupCharter,
            purpose: GroupPurpose,
            image: EpmloyeeImage,

            addEmp: oldArr
        }

        console.log("data=====>", data)
        // AffinityGroupService.Post_Afinity_Data(data)
        //     .then(result => {
        //         console.log("AffinityGroupService===========Result===========>>>>>>>>>>", result)
        //         if (result && result.status) {
        //             ToastAndroid.show('Afinity Added Successful', ToastAndroid.LONG);
        //             NavigationService.navigate("AfinityGroups")
        //         }
        //     })
        //     .catch(err => {
        //         console.log('error>>', err);
        //     });
    };


    const Get_All_Employee_List = () => {
        AffinityGroupService.Get_Employee_List()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setLoaderStatus(false)
                    setEmployeeList(result?.data)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };

    // --------------------------------------All Functions End--------------------------------------
    const pick = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(async data => {
            AuthService.uploadProfileImage(data)
                .then(result => {
                    console.log('image resultttt>>>>,', result);
                    if (result && result.status) {
                        ToastAndroid.show('Image Upload Successfuly', ToastAndroid.LONG);
                        setEpmloyeeImage(result?.image);
                    }
                })
                .catch(err => {
                    if (err) {
                        console.log("err>>>>>>>>>>>>", err)
                    }
                });
        }
        );
    }




    return (
        <Container>
            <BackHeader title='My Affinity Groups' />

            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginHorizontal: moderateScale(15),
                        flex: 1
                    }}
                >
                    <AppTextInput
                        title='Group Name'
                        titleStyle={styles.titleStyle}
                        inputStyle={styles.fontStyl}
                        inputContainerStyle={styles.inputContainer}
                        onChangeText={(text) => setGroupName(text)}
                    />

                    <AppTextInput
                        title='Enter Group Type'
                        titleStyle={styles.titleStyle}
                        inputStyle={styles.fontStyl}
                        inputContainerStyle={styles.inputContainer}
                        mainContainerStyle={{
                            marginTop: moderateScale(8)
                        }}
                        onChangeText={(text) => setGroupType(text)}
                    />

                    <AppTextInput
                        title='Enter Group Charter'
                        titleStyle={styles.titleStyle}
                        inputStyle={styles.fontStyl}
                        inputContainerStyle={styles.inputContainer}
                        mainContainerStyle={{
                            marginTop: moderateScale(8)
                        }}
                        onChangeText={(text) => setGroupCharter(text)}
                    />

                    <AppTextInput
                        title='Enter Group Purpose'
                        titleStyle={styles.titleStyle}
                        inputStyle={styles.fontStyl}
                        inputContainerStyle={styles.inputContainer}
                        mainContainerStyle={{
                            marginTop: moderateScale(8)
                        }}
                        onChangeText={(text) => setGroupPurpose(text)}
                    />


                    <Text style={{
                        ...styles.titleStyle,
                        marginTop: moderateScale(12),
                        marginBottom: moderateScale(7)
                    }}>
                        Enter Employess Name</Text>
                    {/* {EmployeeList.length != 0 &&
                        <Picker.Multi
                            options={EmployeeList}
                            selectedValues={EmployeeName}
                            placeholder="Enter Employess Name"
                            labelKey="userName"
                            valueKey="_id"
                            returnDataType={(item) => { return { value: item.valueKey } }}
                            onValueChange={(val) => { setEmployeeName(val) }}


                            inputStyle={styles.fontStyl}
                            inputContainerStyle={{ ...styles.inputContainer, borderWidth: 0.4 }}
                            mainContainerStyle={{ marginTop: moderateScale(8) }}
                        />} */}


                    <View style={{ ...styles.inputContainer, borderWidth: 1,height:moderateScale(100) }}>
                        {EmployeeList && EmployeeList.length > 0 ? (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={EmployeeList}
                                renderItem={({ item, index }) => {
                                    return (
                                        <FilterBrand
                                            key={index}
                                            item={item}
                                            setBrandState={EmployeeList}
                                            selectArr={v => setEmployeeList(v)}
                                        />
                                    );
                                }}
                            />
                        ) : (
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text>No Brands yet</Text>
                            </View>
                        )}
                    </View>







                    <Text
                        style={{
                            ...styles.titleStyle,
                            marginTop: moderateScale(8)
                        }}>
                        Training Thumbnail Image*
                    </Text>

                    <TouchableOpacity
                        style={{
                            ...styles.back_view,
                            marginTop: moderateScale(10)
                        }}
                        onPress={() => pick()}>
                        <Icon
                            name='upload'
                            type='Entypo'
                        />
                        <Text
                            style={styles.document}>
                            Upload Photo
                        </Text>
                        <Text
                            style={styles.document}>
                            Drop Files here to Upload
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                    <AppButton
                        title='Submit'
                        textStyle={styles.titleStyle}
                        style={styles.buttonStyl}
                        onPress={() => Afinity_Data_push()}
                    />
                </ScrollView>
            </>}
        </Container>
    )
}

export default AfinityGroupAdd

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(14)
    },
    inputContainer: {
        borderRadius: moderateScale(5),
        height: moderateScale(45)
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
})