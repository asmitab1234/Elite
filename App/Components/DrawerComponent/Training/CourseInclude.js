import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'

const CourseInclude = ({ item }) => {
    return (
        <View
        style={styles.imageTitle}>
            <Image
                source={item.img}
                style={styles.imageStyl}
                resizeMode='contain'
            />
            <Text
            style={styles.titleText}>
                {item.title}
            </Text>
        </View>
    )
}

export default CourseInclude

const styles = StyleSheet.create({
    imageStyl: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    imageTitle:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:moderateScale(8)
    },
    titleText:{
        fontFamily:FONTS.Roboto.regular,
        fontSize:moderateScale(13),
        marginLeft:moderateScale(8)
    }
})