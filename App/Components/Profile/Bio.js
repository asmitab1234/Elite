import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import { Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'

const Bio = ({ item }) => {
    return (
        <Pressable
            onPress={() => NavigationService.navigate('BioViewAll')}
            style={styles.hbbiBox}>
            <Text
                style={styles.textStyl}>
                Introduction
            </Text>
            <Text
                style={styles.textStyl}>
                Education - {item.Education}
            </Text>
            <Text
                style={styles.textStyl}>
                Address - {item.Address}
            </Text>
            <Text
                style={styles.textStyl}>
                Industry - {item.Industry}
            </Text>
        </Pressable>
    )
}

export default Bio

const styles = StyleSheet.create({
    hbbiBox: {
        backgroundColor: '#E6DCDC',
        padding: moderateScale(8),
        marginBottom: moderateScale(10),
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        borderRadius: moderateScale(5)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    }
})