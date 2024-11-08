import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import SurvayService from '../../Services/SurvayService';
import NewSurvey30DayItem from '../SurveyComponent/NewSurvey30Day/NewSurvey30DayItem';
import { ActivityIndicator } from 'react-native';

const { height, width } = Dimensions.get('window');

const NewSurvey30Day = ({ selectID }) => {
    const [select, setSelect] = useState(false);
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const onClick = () => {
        setSelect(!select);
    };

    const [newHireSurvey30, setNewHireSurvey30] = useState([]);

    // Fetching New Hire Survey-30 data
    useEffect(() => {
        getNewHireSurvey30();
    }, [selectID]);

    const getNewHireSurvey30 = () => {
        let data = {
            surveyNameId: selectID
        };

        SurvayService.Get_Survey_Status_Data(data)
            .then(result => {
                setLoaderStatus(true);
                if (result && result.status) {
                    setNewHireSurvey30(result?.data1);
                    setLoaderStatus(false);
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false);
            });
    };

    return (
        <View>
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1, marginTop: moderateScale(50) }} /> : <>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {newHireSurvey30?.map((item, index) => (
                        <NewSurvey30DayItem item={item} key={index} />
                    ))}
                    <View style={{ height: height }} />
                </ScrollView>
            </>}
        </View>
    );
};

export default NewSurvey30Day;

const styles = StyleSheet.create({
    viewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(8),
        width: '92%'
    },
    starImg: {
        flexDirection: 'row',
        alignItems: 'center',
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
        width: width / 1.8
    }
});
