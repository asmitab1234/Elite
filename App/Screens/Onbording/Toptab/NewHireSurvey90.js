import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import Star from '../../../Components/Star/Star'
import { FONTS } from '../../../Constants/Fonts'
import OnboardingService from '../../../Services/OnboardingService'
import NewHireSurvey90Item from '../../../Components/OnbordingComponents/NewHireSurvey90Component/NewHireSurvey90Item'
const width = Dimensions.get('window').width

const NewHireSurvey90 = ({ selectID }) => {
    console.log("NewHireSurvey90NewHireSurvey90==>", selectID)
    useEffect(() => {
        // getNewHireSurvey_90()
    }, [])
    // ===============================New Hire Survey-90 Start===============================================
    const [newHireSurvey_90, SetnewHireSurvey_90] = useState();

    // const getNewHireSurvey_90 = () => {
    //     OnboardingService.Get_New_Hire_Survey_90_Data()
    //         .then(result => {
    //             // console.log('viewProfile API Fetched=====>>>', result);
    //             if (result && result.status) {
    //                 SetnewHireSurvey_90(result?.data);
    //             } else {
    //                 // setName('User');
    //             }
    //         })
    //         .catch(err => {
    //             console.log('error>>', err);
    //         });
    // };
    // ===============================New Hire Survey-90 END===============================================
    return (
        <Container>
            <ScrollView>
                {[1, 2, 3].map((item, index) => (
                    <NewHireSurvey90Item />
                ))}
            </ScrollView>
        </Container>
    )
}

export default NewHireSurvey90

const styles = StyleSheet.create({
    viewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(8),
        width: '92%'
        // flex:1
    },
    starImg: {
        flexDirection: 'row',
        alignItems: 'center',
        // flex:1,
        width: '35%'
    },
    msgImg: {
        height: moderateScale(26),
        width: moderateScale(26),
        marginLeft: moderateScale(10)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        width: width / 1.8,
    }

})