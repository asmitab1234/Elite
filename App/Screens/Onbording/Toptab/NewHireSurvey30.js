
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Text, AppTextInput, Icon } from 'react-native-basic-elements';
import { moderateScale } from '../../../Constants/PixelRatio';
import Star from '../../../Components/Star/Star';
import { FONTS } from '../../../Constants/Fonts';
import OnboardingService from '../../../Services/OnboardingService';
import NewHireSurvey30Item from '../../../Components/OnbordingComponents/NewHireSurvey30Component/NewHireSurvey30Item';
import { RefreshControl } from 'react-native';

const { height, width } = Dimensions.get('window');

const NewHireSurvey30 = ({ select_iD }) => {
    const [newHireSurvey_30, SetnewHireSurvey_30] = useState([]);
    const [loaderStatus, setLoaderStatus] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        getNewHireSurvey_30();
    }, [select_iD]);

    const getNewHireSurvey_30 = () => {
        let data = {
            "checklistDayID": select_iD
        };
        OnboardingService.Get_New_Hire_Survey_30_Data(data)
            .then(result => {
                setLoaderStatus(true);
                if (result && result.status) {
                    SetnewHireSurvey_30(result?.data1);
                    setLoaderStatus(false);
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false);
            });
    };
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getNewHireSurvey_30();
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, [select_iD]);
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {loaderStatus ?
                    <ActivityIndicator size={40} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
                    :
                    <>
                        {newHireSurvey_30?.map((item, index) => (
                            <NewHireSurvey30Item item={item} key={index} />
                        ))}
                        <View style={{ height: height }} />
                    </>
                }
            </ScrollView>
        </Container>
    );
}

export default NewHireSurvey30;

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
        width: width / 1.8,
    }
});
