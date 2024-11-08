import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View, PermissionsAndroid, Platform } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Icon, Text } from 'react-native-basic-elements'
import { Image } from 'react-native'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import AdvocacyHeader from '../../Components/Header/AdvocacyHeader'
import { useRoute } from '@react-navigation/native'
import AdvocacyService from '../../Services/AdvocacyService'
import { ActivityIndicator } from 'react-native'
import { RefreshControl } from 'react-native'
import moment from 'moment'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const AdvocacySingleScreen = () => {
    const route = useRoute();
    const PostSingleid = route.params.Postid;
    useEffect(() => {
        GetAdvocayList()
    }, [])
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    const [SingleData, setSingleData] = useState([])
    console.log("SingleDataSingleData___________________________", SingleData)
    //Advocay Category Wise List API
    const GetAdvocayList = () => {
        AdvocacyService.Get_Advocay_Category_Single(PostSingleid)
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setSingleData(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        GetAdvocayList()

        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    return (
        <Container>
            <AdvocacyHeader title='Advocacy' />
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <ScrollView
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    showsVerticalScrollIndicator={false}>
                    <Image
                        style={styles.imageStyl}
                        source={{ uri: SingleData[0]?.image }}
                    />

                    <Text
                        style={styles.titleStyl}>
                        {SingleData[0]?.AdvocacyName}
                    </Text>

                    <View
                        style={styles.bottomCardView}>
                        <Image
                            style={styles.user}
                            source={require('../../Assets/Home/user.png')}
                        />
                        <View>
                            <Text
                                style={styles.nameText}>
                                Mrs. Lorem Ipsum
                            </Text>
                            <Text
                                style={styles.date}>
                                {moment(SingleData[0]?.createdOn).format('MMMM Do YYYY')}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.lineStyl} />
                    <Text style={styles.description}>Language:{SingleData[0]?.language}</Text>
                    <Text
                        style={styles.description}>
                        {SingleData[0]?.desc}
                    </Text>

                    <Text
                        style={styles.downloadText}>
                        Download
                    </Text>
                    <TouchableOpacity
                        onPress={() => NavigationService.navigate("ViewPdf", { url: SingleData[0]?.material })}
                        style={styles.iconView}>
                        <Icon
                            name='file-pdf'
                            type='FontAwesome5'
                            size={30}
                            color={'#CF3131'}
                        />
                    </TouchableOpacity>

                </ScrollView>
            </>}
        </Container>
    )
}

export default AdvocacySingleScreen

const styles = StyleSheet.create({
    imageStyl: {
        height: height / 3,
        width: width,
    },
    description: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15),
        textAlign: 'justify'
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(16),
        // width:'75%',
        marginHorizontal: moderateScale(15),
        marginVertical: moderateScale(8)
    },
    bottomCardView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(10),
        marginLeft: moderateScale(15)
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
    downloadText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(15)
    },
    iconView: {
        marginLeft: moderateScale(15),
        marginVertical: moderateScale(8),
        padding: moderateScale(15),
        borderWidth: moderateScale(1),
        borderStyle: 'dashed',
        borderRadius: moderateScale(4),
        width: moderateScale(60),
        alignItems: 'center',
        justifyContent: 'center'
    },
    lineStyl: {
        backgroundColor: '#CCCCCC',
        height: moderateScale(1),
        width: '90%',
        marginHorizontal: moderateScale(15),
        marginVertical: moderateScale(5)
    }
})