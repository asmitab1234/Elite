import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Card, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import moment from 'moment'
import NavigationService from '../../../Services/Navigation'

const GroupsCard = ({ item }) => {

    return (
        <Card
            style={styles.mainCard}
            onPress={() => NavigationService.navigate('AfinityGroupSinglePage')}
        >
            <View
                style={styles.imageTextView}>
                {console.log("item?.imageitem?.imageitem?.image", item?.image)}
                {item?.image.length == 0 ?
                    <Image
                        source={require('../../../Assets/userimg.png')}
                        style={styles.imgStyl}
                    // resizeMode='contain'
                    />
                    :
                    <Image
                        source={{ uri: item?.image }}
                        style={styles.imgStyl}
                    // resizeMode='contain'
                    />
                }
                <View style={{
                    flex:1,
                    marginLeft:moderateScale(10)
                }}>
                    <Text
                        style={styles.nameStyl}>
                        {item?.groupName}
                    </Text>
                </View>
                <View
                    style={styles.shareBox}>
                    <Image
                        source={require('../../../Assets/Home/share.png')}
                        style={styles.shareImg}
                        resizeMode='contain'
                    />
                </View>
            </View>

            <Text
                style={styles.createdText}>
                Created By {item?.userType}
            </Text>

            <View style={styles.viewLine} />

            <View
                style={styles.textInputSend}>
                <AppTextInput
                    placeholder='Type Your Message'
                    inputStyle={styles.fontStyl}
                    inputContainerStyle={styles.inputContair}
                    mainContainerStyle={styles.mainContainer}
                />
                <View
                    style={{
                        ...styles.shareBox,
                        width: moderateScale(40)
                    }}>
                    <Image
                        source={require('../../../Assets/Home/send.png')}
                        style={styles.sendImg}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </Card>
    )
}

export default GroupsCard

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#DDB89F',
        marginBottom: moderateScale(12),
        marginHorizontal: moderateScale(15),
        marginBottom: moderateScale(5),
        marginTop: moderateScale(10)
    },
    imageTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(90)
    },
    nameStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15)
    },
    shareImg: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    shareBox: {
        padding: moderateScale(5),
        width: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: moderateScale(5)
    },
    createdText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(12),
    },
    viewLine: {
        height: moderateScale(0.5),
        width: '100%',
        backgroundColor: '#F5F5F5',
        marginVertical: moderateScale(10)
    },
    textInputSend: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(12)
    },
    inputContair: {
        height: moderateScale(35),
        marginTop: 0,
        width: '100%',
        borderRadius: moderateScale(5),
        borderWidth: 0
    },
    mainContainer: {
        width: '84%',
        backgroundColor: '#F5F5F5',
        borderRadius: moderateScale(5),
    },
    sendImg: {
        height: moderateScale(25),
        width: moderateScale(25)
    }
})