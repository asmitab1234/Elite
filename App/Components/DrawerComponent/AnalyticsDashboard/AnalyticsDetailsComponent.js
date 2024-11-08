import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import NavigationService from '../../../Services/Navigation'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import { Icon, Text } from 'react-native-basic-elements'

const AnalyticsDetailsComponent = ({ item }) => {
    return (
        <Pressable
            onPress={() => NavigationService.navigate(item.handelClick)}
            style={styles.boxStyl}
        >
            <Text
                style={styles.textStyl}>
                {item.title}
            </Text>
            <Icon
                name='chevron-small-right'
                type='Entypo'
                size={30}
            />
        </Pressable>
    )
}

export default AnalyticsDetailsComponent

const styles = StyleSheet.create({
    boxStyl: {
        backgroundColor: '#DDDDDD',
        borderRadius: moderateScale(5),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(9),
        marginBottom: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    }
})