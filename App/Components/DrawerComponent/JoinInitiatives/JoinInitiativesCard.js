import { Dimensions, Image, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import NavigationService from '../../../Services/Navigation'
import InitiativeService from '../../../Services/InitiativeService'
const { width, height } = Dimensions.get('window');
const JoinInitiativesCard = ({ item }) => {
    // ===============================Initiative Join Start===============================================
    const Join_Initiative_Post = (initID) => {
        let data =
        {
            "initiativesID": initID
        }
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
        <Card
            shadow={false}
            style={styles.mainCard}
            onPress={() => NavigationService.navigate('InitiativeSingleScreen', { singleID: item?._id })}>
            <View
                style={styles.nameJoin}>
                <Text
                    style={styles.subText}>
                    {item?.nameOfInitaitive}
                </Text>
                <TouchableOpacity
                    // onPress={() => NavigationService.navigate('InitiativeAdd')}
                    style={styles.shareBox}>
                    <Image
                        source={require('../../../Assets/Home/share.png')}
                        style={styles.imgStyl}
                    />
                </TouchableOpacity>
            </View>
            <Text
                style={styles.openningText}>
                Reward Points:{' '}
                <Text
                    style={{
                        ...styles.openningText,
                        fontFamily: FONTS.Roboto.regular
                    }}>
                    {item?.rewardPoints}
                </Text>
            </Text>
            <Text
                style={styles.openningText}>
                Start Date:{' '}
                <Text
                    style={{
                        ...styles.openningText,
                        fontFamily: FONTS.Roboto.regular
                    }}>
                    {item?.startDate}
                </Text>
            </Text>
            <View
                style={styles.nameJoin}>
                <Text
                    style={styles.openningText}>
                    End Date:{' '}
                    <Text
                        style={{
                            ...styles.openningText,
                            fontFamily: FONTS.Roboto.regular
                        }}>
                        {item?.endDate}
                    </Text>
                </Text>
                <TouchableOpacity
                    // onPress={() => NavigationService.navigate('InitiativeAdd')}
                    onPress={() => { Join_Initiative_Post(item?._id) }}
                    style={styles.shareBox}>
                    <Text
                        style={styles.joinText}>
                        Join
                    </Text>
                </TouchableOpacity>
            </View>
        </Card>
    )
}

export default JoinInitiativesCard

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#E9D2D7',
        marginTop: moderateScale(12),
        marginHorizontal: moderateScale(15)
    },
    subShareView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    shareImg: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    shareBox: {
        paddingVertical: moderateScale(5),
        paddingHorizontal: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: moderateScale(5)
    },
    openningText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
        marginTop: moderateScale(5)
    },
    subText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    nameJoin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    joinText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(12)
    },
    imgStyl: {
        height: moderateScale(17),
        width: moderateScale(17)
    }
})