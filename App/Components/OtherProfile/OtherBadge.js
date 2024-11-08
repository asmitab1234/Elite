import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const OtherBadge = ({ item }) => {
    return (
        <View
            style={styles.badgeCard}>
            <View
                style={styles.imgName}>
                <Image
                    source={{ uri: item.userImage }}
                    style={styles.imgStyl}
                />
                <Text numberOfLines={1}
                    style={styles.nameStyl}>
                    {item.userName}
                </Text>
            </View>
            <Text
                style={styles.textStyl}>
                Badge:{' '}
                <Text>
                    {item.badgeName}
                </Text>
            </Text>

            <Text
                style={styles.textStyl}>
                Title:{' '}
                <Text numberOfLines={1}>
                    {item.desc}
                </Text>
            </Text>

        </View>
    )
}

export default OtherBadge

const styles = StyleSheet.create({
    badgeCard: {
        backgroundColor: '#E6DCDC',
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
        width: '100%'
    },
    imgName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyl: {
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(80)
    },
    nameStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(10)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(8)
    }
})