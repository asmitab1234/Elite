import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import NavigationService from '../../../Services/Navigation'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import { Icon, Text } from 'react-native-basic-elements'

const AdvocacyContentComponent = ({ item }) => {
    return (
        <View
            style={{
                ...styles.boxStyl,
                backgroundColor: item.color
            }}
        >
            <Text
                style={styles.textStyl}
            >
                {item.title}
            </Text>
            <Text
                style={styles.textStyl}
            >
                {item.no}
            </Text>
        </View>
    )
}

export default AdvocacyContentComponent

const styles = StyleSheet.create({
    boxStyl: {
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(10),
        marginBottom: moderateScale(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:moderateScale(15)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
        color:'#FFFFFF'
    }
})