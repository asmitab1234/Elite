import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { AppButton, AppTextInput, Card, Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import AllCategory from '../../Components/DrawerComponent/Advocacy/AllCategory'
import NavigationService from '../../Services/Navigation'
import AdvocacyCard from '../../Components/DrawerComponent/Advocacy/AdvocacyCard'
import AdvocacyService from '../../Services/AdvocacyService'
import { RefreshControl } from 'react-native'
import { ActivityIndicator } from 'react-native'
import moment from 'moment'
import NodataFound from '../NodataFound/NodataFound'
const { height, width } = Dimensions.get('window')

const Advocacy = () => {
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    const [AllAdvocacy, setAllAdvocacy] = useState([]);
    const [CategoryData, setCategoryData] = useState([]);
    const [SelectCategory_id, setSelectCategory_id] = useState("0")
    const [AdvocacyData, setAdvocacyData] = useState([]);
    useEffect(() => {
        GetAdvocayCategory()
        GetAllAdvocayList()
    }, [])

    // +++++++++++++++++++++++++++++API Function+++++++++++++++++++++++++++++++++
    //All Data In One Section Advocay All Category
    const GetAllAdvocayList = () => {
        setSelectCategory_id("0");
        AdvocacyService.Get_All_Advocay_Data()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setAdvocacyData(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>>>>', err);
                setLoaderStatus(false)
            });
    };
    //Advocay Category API
    const GetAdvocayCategory = () => {

        AdvocacyService.Get_Advocay_Category_Data()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setCategoryData([
                        {
                            _id: "0",
                            categoryName: "All"
                        }, ...result?.data
                    ]);
                    // setSelectCategory_id(CategoryData[0]?._id)
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    //Advocay Category Wise List API
    const GetAdvocayList = (id) => {
        setSelectCategory_id(id);
        AdvocacyService.Get_Advocay_Category_List(id)
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setAdvocacyData(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    // +++++++++++++++++++++++++++++API Function+++++++++++++++++++++++++++++++++
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        GetAdvocayCategory()
        GetAllAdvocayList()
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    return (
        <Container>
            <BackHeader title='Advocacy' />
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >
                    <View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.mapView}>
                            {CategoryData.map((item, index) => (
                                <AppButton
                                    key={index}
                                    title={item.categoryName}
                                    style={{
                                        ...styles.buttonStyl,
                                        backgroundColor: SelectCategory_id == item?._id ? '#CF9743' : '#C7C7C7'
                                    }}
                                    textStyle={{
                                        ...styles.textStyl,
                                        color: SelectCategory_id == item?._id ? '#FFFFFF' : '#000000'
                                    }}
                                    onPress={() => {
                                        item?._id == "0" ? GetAllAdvocayList() : GetAdvocayList(item?._id)
                                    }}
                                />
                            ))}

                        </ScrollView>
                    </View>

                    {/* <AllCategory /> */}
                    {AdvocacyData.length == [] ? <NodataFound /> :
                        <>
                            <Pressable
                                onPress={() => NavigationService.navigate('AdvocacySingleScreen', { Postid: AdvocacyData[0]?._id })}>
                                <Image
                                    style={styles.topButtonStyl}
                                    source={{ uri: AdvocacyData[0]?.image }}
                                />
                                <Text numberOfLines={2}
                                    style={styles.titleStyl}>
                                    {AdvocacyData[0]?.desc}
                                </Text>
                                <View
                                    style={styles.bottomCardView}>
                                    <Image
                                        style={styles.user}
                                        source={{ uri: AdvocacyData[0]?.userImage }}
                                    />
                                    <View>
                                        <Text
                                            style={styles.nameText}>
                                            {AdvocacyData[0]?.userName}
                                        </Text>
                                        <Text
                                            style={styles.date}>
                                            {moment(AdvocacyData[0]?.createdOn).format('MMMM Do YYYY')}
                                        </Text>
                                    </View>
                                </View>
                            </Pressable>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    paddingBottom: moderateScale(15),
                                    width: width
                                }}>
                                {AdvocacyData?.slice(1, AdvocacyData?.length).map((item, index) => (
                                    <AdvocacyCard
                                        key={index}
                                        item={item}
                                    />
                                ))}
                            </View>
                        </>}
                </ScrollView>
            </>}
        </Container>
    )
}

export default Advocacy

const styles = StyleSheet.create({
    textIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(12)
    },
    categoryImg: {
        height: moderateScale(25),
        width: moderateScale(25),
        marginRight: moderateScale(10)
    },
    catoryText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(14),
    },
    buttonStyl: {
        // width: '20%',
        backgroundColor: 'transparent',
        // marginHorizontal: 0,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(40),
        marginHorizontal: moderateScale(5),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(10),
        height: moderateScale(40)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    mapView: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(5),
        marginTop: moderateScale(10),
    },
    viewLine: {
        height: moderateScale(0.5),
        width: '100%',
        backgroundColor: '#BEBDBD',
        marginVertical: moderateScale(10)
    },
    eventoption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(10)
    },
    imageCreate: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    createEventText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginLeft: moderateScale(8)
    },
    createView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileImage: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(100),
        borderWidth: moderateScale(3),
        borderColor: '#D4A218'

    },
    inputContainer: {
        borderWidth: 0
    },
    inputBox: {
        width: '85%',
        marginLeft: moderateScale(10)
    },
    topCard: {
        backgroundColor: '#f5f5f5f5',
        marginHorizontal: moderateScale(13),
        marginTop: moderateScale(10),
        paddingHorizontal: 0,
        marginBottom: moderateScale(10)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.light
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14),
        marginTop: moderateScale(8),
        // width:'75%',
        marginHorizontal: moderateScale(15),
    },
    bottomCardView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(10),
        marginLeft: moderateScale(15),
    },
    user: {
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(80)
    },
    nameText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(11),
        marginHorizontal: moderateScale(8)
    },
    date: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(10),
        marginHorizontal: moderateScale(8)
    },
    topButtonStyl: {
        height: moderateScale(200),
        width: '95%',
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(10)
    }
})