import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const MentorList = ({ item }) => {
    return (
        <Card
            style={styles.maincard}>
            <Image
                source={item.img}
                style={styles.imgStyl}
            />
            <View
                style={{
                    marginLeft: moderateScale(10)
                }}>
                <Text
                    style={styles.nameStyl}>
                    {item.name}
                </Text>
                <Text
                    style={styles.departmentStyl}>
                    {item.department}
                </Text>
            </View>
        </Card>
    )
}

export default MentorList

const styles = StyleSheet.create({
    maincard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:moderateScale(15)
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(80)
    },
    nameStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(13)
    },
    departmentStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    }
})