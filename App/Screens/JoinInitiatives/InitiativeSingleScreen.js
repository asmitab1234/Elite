import { ScrollView, StyleSheet, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppButton, Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import { useRoute } from '@react-navigation/native'
import InitiativeService from '../../Services/InitiativeService'
import { ActivityIndicator } from 'react-native'

const InitiativeSingleScreen = () => {
    const route = useRoute();
    const PrevItemID = route.params.singleID;
    useEffect(() => {
        Single_Initiative_Get()
    }, [])
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [SingleInitiative, SetSingleInitiative] = useState([]);
    // ===============================Single_Initiative View Start===============================================
    const Single_Initiative_Get = () => {
        InitiativeService.Get_Initiative_Single_Data(PrevItemID)
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    SetSingleInitiative(result?.data)
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    // ===============================Single_Initiative View END===============================================
    // ===============================Initiative Join Start===============================================
    const Join_Initiative_Post = (initID) => {
        let data =
        {
            "initiativesID": initID
        }
        // console.log("result===============>>>>>", data)
        InitiativeService.Initiative_Join_Post(data)
            .then(result => {
                console.log("resultresultresultresult----------", result)
                if (result && result.status) {
                    ToastAndroid.show('Join Successful', ToastAndroid.LONG);
                    NavigationService.navigate('JoinInitiatives')
                }
            })
            .catch(err => {
                console.log('error>>', err);
                ToastAndroid.show('You have already joined this initiative!', ToastAndroid.LONG);
            });
    };
    // ===============================Initiative Join END===============================================
    return (
        <Container>
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <BackHeader title='Join Initiative' />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginHorizontal: moderateScale(15),
                        flex: 1
                    }}
                >
                    <Text
                        style={
                            styles.nameText
                        }>
                        {SingleInitiative[0]?.nameOfInitaitive}
                    </Text>
                    <Text
                        style={styles.openningText}>
                        Start Date - {' '}
                        <Text
                            style={{
                                ...styles.openningText,
                                fontFamily: FONTS.Roboto.regular
                            }}>
                            {SingleInitiative[0]?.startDate}
                        </Text>
                    </Text>
                    <Text
                        style={styles.openningText}>
                        End Date - {' '}
                        <Text
                            style={{
                                ...styles.openningText,
                                fontFamily: FONTS.Roboto.regular
                            }}>
                            {SingleInitiative[0]?.endDate}
                        </Text>
                    </Text>

                    <Text
                        style={styles.descriptionHeading}>
                        Description
                    </Text>
                    <Text
                        style={styles.descriptionTxt}>
                        {SingleInitiative[0]?.description}
                    </Text>

                    <Text
                        style={{
                            ...styles.openningText,
                            marginTop: moderateScale(20)
                        }}>
                        Reward Point - {' '}
                        <Text
                            style={{
                                ...styles.openningText,
                                fontFamily: FONTS.Roboto.regular
                            }}>
                            {SingleInitiative[0]?.rewardPoints}
                        </Text>
                    </Text>

                    <View style={{ flex: 1 }} />

                    <AppButton
                        title='Join'
                        textStyle={{
                            ...styles.openningText,
                            fontSize: moderateScale(17)
                        }}
                        style={styles.buttonSTyl}
                        onPress={() => { Join_Initiative_Post(SingleInitiative[0]?._id) }}
                    />

                </ScrollView>
            </>}
        </Container>
    )
}

export default InitiativeSingleScreen

const styles = StyleSheet.create({
    nameText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(20)
    },
    openningText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14),
        marginTop: moderateScale(5)
    },
    descriptionHeading: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(16),
        marginTop: moderateScale(25)
    },
    descriptionTxt: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        marginTop: moderateScale(13)
    },
    buttonSTyl: {
        backgroundColor: '#CCCCCC',
        marginHorizontal: 0,
        marginVertical: moderateScale(20),
        borderRadius: moderateScale(5)
    }

})