import NewHireSurvey30 from '../Screens/Onbording/Toptab/NewHireSurvey30';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import OnboardingService from '../Services/OnboardingService';
import { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Text } from 'react-native-basic-elements';
import { ActivityIndicator } from 'react-native';
import { RefreshControl } from 'react-native';

const { height, width } = Dimensions.get('window');

function TopTab() {
    const [select, setSelect] = useState(0);
    const [Survey, SetSurvey] = useState([]);
    const [selectID, setSelectID] = useState('');
    const [LoderStatus, setLoderStatus] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        getSurveyList();
    }, []);

    const getSurveyList = () => {
        OnboardingService.Get_Survey_Data()
            .then(result => {
                setLoderStatus(true);
                if (result && result.status) {
                    SetSurvey(result?.data);
                    setSelectID(result?.data[0]?._id);
                    getNewHireSurvey_30(result?.data[0]?._id, 0);
                    setLoderStatus(false);
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoderStatus(false);
            });
    };

    const getNewHireSurvey_30 = (id, index) => {
        let data = {
            "checklistDayID": id
        };

        OnboardingService.Get_New_Hire_Survey_30_Data(data)
            .then(result => {
                if (result && result.status) {
                    SetSurvey(state => {
                        state[index].currentStatus = result?.data2?.dayStatus;
                        return JSON.parse(JSON.stringify(state));
                    });
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getSurveyList();
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    return (
        <View style={{ paddingTop: moderateScale(10) }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
            // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View style={styles.tab_main_view}>
                    {Survey?.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    ...styles.tab_view,
                                    borderBottomColor: select == index ? "#1aaae8" : "#fff"
                                }}
                                onPress={() => {
                                    setSelect(index);
                                    setSelectID(item?._id);
                                    getNewHireSurvey_30(item?._id, index);
                                }}
                                key={index}
                            >
                                {
                                    item.currentStatus ?
                                        <View style={styles.status_view}>
                                            <Text
                                                style={{
                                                    paddingVertical: moderateScale(2),
                                                    textTransform: 'capitalize'
                                                }}
                                            >
                                                {item.currentStatus}
                                            </Text>
                                        </View>
                                        : null
                                }
                                <Text style={styles.tab_text}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
            {
                select == select ?
                    <View style={{ height: height }}>
                        <NewHireSurvey30 select_iD={selectID} />
                    </View>
                    : null
            }
        </View>
    );
}

export default TopTab;

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
