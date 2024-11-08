import { Pressable, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, Picker, Text, useTheme } from 'react-native-basic-elements'
import DatePicker from 'react-native-date-picker'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import ImageCropPicker from 'react-native-image-crop-picker'
import InitiativeService from '../../Services/InitiativeService'
import { ActivityIndicator } from 'react-native'
import moment from 'moment'

const InitiativeAdd = () => {
    const colors = useTheme()
    const [LoaderStatus, setLoaderStatus] = useState(true)
    // All state
    //----Organizzation----
    const [Organizzation, setOrganizzation] = useState([])
    const [OrganizzationSelected, setOrganizzationSelected] = useState('')
    const [NameOfInitiative, setNameOfInitiative] = useState('')
    //----start Date----
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    //----End Date----
    const [EndData, setEndData] = useState(new Date())
    const [EndDataOpen, setEndDataOpen] = useState(false)
    const [Description, setDescription] = useState('')
    const [RewardPoint, setRewardPoint] = useState('')
    useEffect(() => {
        Organizzation_Get()
    }, [])

    // ===============================Initiative Add Start===============================================
    const Join_Initiative_Post = () => {
        let data =
        {
            "nameOfInitaitive": NameOfInitiative,
            "description": Description,
            // "duration": 22,
            "rewardPoints": Number(RewardPoint),
            "startDate": moment(date).format("YYYY-MM-DD"),
            "endDate": moment(EndData).format("YYYY-MM-DD"),
            "initiativeTypeID": OrganizzationSelected
        }
        console.log("data===============>>>>>", data)
        InitiativeService.Initiative_Add_Post(data)
            .then(result => {
                console.log("resultresultresultresult----------", result)
                if (result && result.status) {
                    ToastAndroid.show('Add Initiative Successful', ToastAndroid.LONG);
                    NavigationService.navigate('JoinInitiatives')
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };
    // ===============================Initiative Add END===============================================
    // ===============================Organizzation View Start===============================================
    const Organizzation_Get = () => {
        InitiativeService.Get_Organizzation_Data()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setOrganizzation(result?.data)
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    // ===============================Organizzation View END===============================================
    const pick = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    };
    return (
        <Container>
            <BackHeader title='Add Project' />
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginHorizontal: moderateScale(15),
                        // flex: 1
                    }}>

                    <Text
                        style={{
                            ...styles.titleStyl,
                            // marginTop: moderateScale(8)
                        }}>
                        Organizzation Specific
                    </Text>

                    <Picker
                        options={Organizzation}
                        labelKey="initiativetype"
                        valueKey="_id"

                        placeholder="Organizzation Specific"
                        textStyle={{
                            fontSize: 15,
                        }}
                        selectedValue={OrganizzationSelected}
                        onValueChange={val => { setOrganizzationSelected(val) }}
                        dropdownIconColor={colors.primaryFontColor}
                        containerStyle={styles.picker}
                    />

                    <AppTextInput
                        title='Name of Initiative'
                        titleStyle={styles.titleStyl}
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        onChangeText={(text) => setNameOfInitiative(text)}
                    />

                    <AppTextInput
                        title='Start Date'
                        titleStyle={styles.titleStyl}
                        inputContainerStyle={{
                            ...styles.inputContainer, paddingLeft: moderateScale(5)
                        }}
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        placeholder=" YYYY - MM - DD"
                        // value={moment(date).format("YYYY-MM-DD")}
                        // value={date ? moment(date).format("YYYY-MM-DD") : ""}
                        value={moment(date).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? "" : moment(date).format('YYYY-MM-DD')}
                        rightAction={
                            <Pressable
                                onPress={() => setOpen(true)}>
                                <Icon
                                    name='calendar'
                                    type='AntDesign'
                                />
                            </Pressable>
                        }
                    />
                    <AppTextInput
                        title='End Date'
                        titleStyle={styles.titleStyl}
                        inputContainerStyle={{
                            ...styles.inputContainer, paddingLeft: moderateScale(5)
                        }}
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        placeholder=" YYYY - MM - DD"
                        // value={moment(EndData).format("YYYY-MM-DD")}
                        // value={EndData ? moment(EndData).format("YYYY-MM-DD") : ""}
                        value={moment(EndData).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? "" : moment(EndData).format('YYYY-MM-DD')}
                        rightAction={
                            <Pressable
                                onPress={() => setEndDataOpen(true)}>
                                <Icon
                                    name='calendar'
                                    type='AntDesign'
                                />
                            </Pressable>
                        }
                    />

                    <AppTextInput
                        title='Description'
                        titleStyle={styles.titleStyl}
                        inputContainerStyle={{
                            ...styles.inputContainer,
                            height: moderateScale(100)
                        }}
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        onChangeText={(text) => setDescription(text)}
                    />

                    <AppTextInput
                        title='Reward Point'
                        titleStyle={styles.titleStyl}
                        inputContainerStyle={{
                            ...styles.inputContainer,
                        }}
                        inputStyle={styles.fontStyl}
                        mainContainerStyle={styles.inputBox}
                        maxLength={2}
                        keyboardType='number-pad'
                        onChangeText={(text) => setRewardPoint(text)}
                    />



                    {/* <View style={{ flex: 1 }} /> */}

                </ScrollView>
            </>}
            {/* <AppButton
                onPress={() => Join_Initiative_Post()}
                title='Submit'
                textStyle={styles.titleStyl}
                style={styles.buttonStyl}
            /> */}


            <AppButton
                title={LoaderStatus ? 'Adding...' : 'Submit'}
                textStyle={styles.titleStyl}
                style={styles.buttonStyl}
                onPress={() => Join_Initiative_Post()}
                disabled={LoaderStatus}>
                {LoaderStatus && <ActivityIndicator color="#fff" />}
            </AppButton>



            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                mode='date'
            />
            <DatePicker
                modal
                open={EndDataOpen}
                date={EndData}
                onConfirm={(EndData) => {
                    setEndDataOpen(false)
                    setEndData(EndData)
                }}
                onCancel={() => {
                    setEndDataOpen(false)
                }}
                mode='date'
            />
        </Container>
    )
}

export default InitiativeAdd

const styles = StyleSheet.create({
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    inputContainer: {
        height: moderateScale(45),
        borderRadius: moderateScale(5)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    inputBox: {
        marginTop: moderateScale(10),
    },
    picker: {
        height: moderateScale(43),
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        // marginTop: moderateScale(12)
    },
    buttonStyl: {
        marginVertical: moderateScale(15),
        marginHorizontal: moderateScale(15),
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
})