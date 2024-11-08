import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'

const PostHeadingComponent = ({ item, index, Index, setIndex }) => {
    const colorr = useTheme()
    return (
        <TouchableOpacity
            onPress={() => setIndex(index)}
            style={{
                ...styles.box,
                borderWidth: index == Index ? moderateScale(1) : 0,
                borderColor: index == Index ? '#000' : 'transparent',
            }}>
            <Text
                style={{
                    ...styles.textStyl,
                    color: index == Index ? '#3732D6' : colorr.primaryFontColor
                }}>
                {item.title}
            </Text>
        </TouchableOpacity>
    )
}

export default PostHeadingComponent

const styles = StyleSheet.create({
    box: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(8),
        marginHorizontal: moderateScale(10),
        marginVertical: moderateScale(15),
        borderRadius:moderateScale(10)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    }
})