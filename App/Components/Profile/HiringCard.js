import { StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { Text } from 'react-native-basic-elements'

const HiringCard = ({ item }) => {
    return (
        <View
            style={styles.hbbiBox}>
            <Text
                style={styles.textStyl}>
                Job
            </Text>
            <Text
                style={styles.textStyl}>
                Opening - {item.Opening}
            </Text>
            <Text
                style={styles.textStyl}>
                SkillRequired - {item.SkillRequired}
            </Text>
        </View>
    )
}

export default HiringCard

const styles = StyleSheet.create({
    hbbiBox: {
        backgroundColor: '#E6DCDC',
        padding: moderateScale(8),
        marginBottom: moderateScale(10),
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        borderRadius: moderateScale(5),
        // marginHorizontal:moderateScale(15)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    }
})