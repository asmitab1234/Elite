import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { moderateScale } from '../Constants/PixelRatio';
import { Text } from 'react-native-basic-elements';
import SurvayService from '../Services/SurvayService';
import NewSurvey30Day from '../Components/SurveyTopTab/NewSurvey30Day';
import { FONTS } from '../Constants/Fonts';
import { RefreshControl } from 'react-native';

const { height } = Dimensions.get('window');

function SurveyTopTab() {
    const [Index, setIndex] = useState(0);
    const [Survey, setSurvey] = useState([]);
    const [selectID, setSelectID] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    
    useEffect(() => {
        getSurveyName();
    }, []);

    const getSurveyName = () => {
        SurvayService.Get_Survey_Name_Data()
            .then(result => {
                if (result && result.status) {
                    setSurvey(result?.data);
                    setSelectID(result?.data[0]?._id);
                    getSurveyStatus(result?.data[0]?._id, 0);
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };

    const getSurveyStatus = (id, index) => {
        let data = { "surveyNameId": id };
        SurvayService.Get_Survey_Status_Data(data)
            .then(result => {
                if (result && result.status) {
                    setSurvey(state => {
                        state[index].currentStatus = result?.data2?.surveyStatus;
                        return JSON.parse(JSON.stringify(state));
                    });
                }
            })
            .catch(err => {
                console.log('error--->>', err);
            });
    };
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getSurveyName();
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    return (
        <View style={{ paddingTop: moderateScale(10) }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View style={styles.tab_main_view}>
                    {Survey?.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    ...styles.tab_view,
                                    borderBottomColor: Index === index ? "#1aaae8" : "#fff"
                                }}
                                key={index}
                                onPress={() => {
                                    setIndex(index);
                                    setSelectID(item?._id);
                                    getSurveyStatus(item?._id, index);
                                }}
                            >
                                {item.currentStatus ?
                                    <View style={styles.status_view}>
                                        <Text style={{ paddingVertical: moderateScale(2), textTransform: 'capitalize' }}>
                                            {item.currentStatus}
                                        </Text>
                                    </View> : null}
                                <Text style={styles.tab_text}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
            {Index === Index ?
                <View style={{ height: height }}>
                    <NewSurvey30Day selectID={selectID} />
                </View> : null}
        </View>
    );
}

export default SurveyTopTab;

const styles = StyleSheet.create({
    tab_main_view: {
        height: moderateScale(50),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    tab_view: {
        height: moderateScale(40),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: moderateScale(2),
        borderWidth: moderateScale(3),
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderRightColor: "#fff",
    },
    tab_text: {
        paddingHorizontal: moderateScale(15),
        marginBottom: moderateScale(7),
        fontFamily: FONTS.Roboto.bold,
    },
    status_view: {
        borderRadius: moderateScale(25),
        paddingHorizontal: moderateScale(7),
        backgroundColor: "#6ad62b",
    }
});