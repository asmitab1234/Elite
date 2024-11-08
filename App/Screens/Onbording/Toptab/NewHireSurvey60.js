import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import Star from '../../../Components/Star/Star'
import { FONTS } from '../../../Constants/Fonts'
import OnboardingService from '../../../Services/OnboardingService'
import NewHireSurvey60Item from '../../../Components/OnbordingComponents/NewHireSurvey60Component/NewHireSurvey60Item'
const width = Dimensions.get('window').width

const NewHireSurvey60 = ({selectID}) => {
    console.log("NewHireSurvey60===>",selectID)
    useEffect(() => {
        // getNewHireSurvey_60()
    }, [])

    // ===============================New Hire Survey-60 Start===============================================
    const [newHireSurvey_60, SetnewHireSurvey_60] = useState();

    // const getNewHireSurvey_60 = () => {
    //     OnboardingService.Get_New_Hire_Survey_60_Data()
    //         .then(result => {
    //             // console.log('viewProfile API Fetched=====>>>', result);
    //             if (result && result.status) {
    //                 SetnewHireSurvey_60(result?.data);
    //             } else {
    //                 // setName('User');
    //             }
    //         })
    //         .catch(err => {
    //             console.log('error>>', err);
    //         });
    // };
    // ===============================New Hire Survey-60 END===============================================
    return (
        <Container>
            <ScrollView>
                {[1, 2, 3].map((item, index) => (
                    <NewHireSurvey60Item />
                ))}
            </ScrollView>
        </Container>
    )
}

export default NewHireSurvey60

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