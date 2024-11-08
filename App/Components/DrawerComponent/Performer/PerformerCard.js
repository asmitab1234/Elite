import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import NavigationService from '../../../Services/Navigation'
import moment from 'moment'

const PerformerCard = ({ item }) => {
    return (
        <Pressable
            onPress={() => NavigationService.navigate('OtherProfileNew', { userid: item.userId })}
            style={styles.nameDateView}>
            <View
                style={styles.imageName}>
                {item.userImage == 0 ?
                    <Image
                        source={require("../../../Assets/userimg.png")}
                        style={styles.userImg}
                    />
                    :
                    <Image
                        source={{ uri: item.userImage }}
                        style={styles.userImg}
                    />
                }

                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%" }}>
                        <Text
                            style={styles.nameText}>
                            {item?.name}
                        </Text>
                        <Text
                            style={styles.date}>
                            {moment(item?.createdOn).format("MMM Do YY")}
                        </Text>
                    </View>
                    <Text numberOfLines={2}
                        style={styles.resoneText}>
                        <Text style={{ ...styles.nameText, fontSize: moderateScale(13) }}>Reason : </Text>{item.reason}
                    </Text>
                </View>
            </View>

        </Pressable>
    )
}

export default PerformerCard

const styles = StyleSheet.create({
    nameDateView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(10),
        marginHorizontal: moderateScale(15),
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        padding: moderateScale(8),
        borderRadius: moderateScale(8)
    },
    imageName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImg: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(80)
    },
    nameText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15),
        marginLeft: moderateScale(10)
    },
    date: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    resoneText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11.5),
        marginLeft: moderateScale(10)
    },
})