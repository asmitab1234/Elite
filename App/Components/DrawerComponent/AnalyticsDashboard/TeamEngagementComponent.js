import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'

const TeamEngagementComponent = ({ item }) => {
    return (
        <View
            style={styles.box}>
            <Text
                style={styles.title_text}>
                {item.title}
            </Text>
            <Text
                style={styles.indexTYext}>
                {item.index}
            </Text>
            <Text
                style={styles.percentageText}>
                {item.percentage}
            </Text>
            <Text
                style={styles.mothText}>
                {item.vsmonth}
            </Text>
        </View>
    )
}

export default TeamEngagementComponent

const styles = StyleSheet.create({
    box: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(8),
        elevation: 2,
        borderRadius: moderateScale(3),
        borderWidth: moderateScale(1),
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
    },
    title_text: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    indexTYext: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(20),
        textAlign: 'center'
    },
    percentageText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15),
        color: '#1F9C9E',
        textAlign: 'center'
    },
    mothText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(12),
    }
})