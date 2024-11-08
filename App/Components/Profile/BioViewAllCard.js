import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const BioViewAllCard = ({ item }) => {
    return (
        <View
            style={styles.hbbiBox}>
            {/* <Image
                source={{ uri: 'https://images.unsplash.com/photo-1698047681432-006d2449c631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3Z8ZW58MHx8MHx8fDA%3D' }}
                style={styles.imgStyl}
            /> */}
            <View>
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
                    City - {item.city}
                </Text>
                <Text
                    style={styles.textStyl}>
                    State - {item.State}
                </Text>
                <Text
                    style={styles.textStyl}>
                    About - {item.About}
                </Text>
                <Text
                    style={styles.textStyl}>
                    Cirtificate - {item.cirtificate}
                </Text>
                <Text
                    style={styles.textStyl}>
                    Phone Number - {item.phNo}
                </Text>
                <Text
                    style={styles.textStyl}>
                    Email Id - {item.email}
                </Text>
                <Text
                    style={styles.textStyl}>
                    CV - {item.cv}
                </Text>
            </View>
        </View>
    )
}

export default BioViewAllCard

const styles = StyleSheet.create({
    hbbiBox: {
        // backgroundColor: '#E6DCDC',
        // padding: moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderRadius: moderateScale(5)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
        marginLeft: moderateScale(8),
        marginBottom:moderateScale(10)
    },
    imgStyl: {
        borderRadius: moderateScale(8),
        height: moderateScale(150),
        width: moderateScale(110)
    }
})