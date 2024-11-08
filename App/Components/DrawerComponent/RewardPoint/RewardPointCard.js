import { StyleSheet,View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import { Text } from 'react-native-basic-elements'

const RewardPointCard = ({ item }) => {
    return (
        <View
            style={styles.pointBox}>
            <Text
            style={styles.titleText}>
                {item.title}
            </Text>
            <Text
            style={styles.pointText}>
                {item.point}
            </Text>
        </View>
    )
}

export default RewardPointCard

const styles = StyleSheet.create({
    pointBox: {
        marginHorizontal: moderateScale(15),
        padding:moderateScale(11),
        backgroundColor: '#ECECEC',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:moderateScale(10),
        borderRadius:moderateScale(8)
    },
    titleText:{
        fontFamily:FONTS.Roboto.bold,
        fontSize:moderateScale(14)
    },
    pointText:{
        fontFamily:FONTS.Roboto.regular,
        fontSize:moderateScale(12)
    }
})