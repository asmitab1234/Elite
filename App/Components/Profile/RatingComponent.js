import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const RatingComponent = () => {
    return (
        <View>
            <View
                style={styles.shareText}>
                <Text
                    style={styles.validateTesxt}>
                    Validate Score
                </Text>
                <Image
                    source={require('../../Assets/Home/share.png')}
                    style={styles.share}
                    resizeMode='contain'
                />
            </View>

            <Text
            style={styles.ratingHeading}>
            Total 1 reviews given ( 5 Out of 5.00 )
            </Text>

            <View
            style={styles.ratimgView}>

            </View>
        </View>
    )
}

export default RatingComponent

const styles = StyleSheet.create({
    shareText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        justifyContent: 'space-between'
    },
    validateTesxt: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(15),
    },
    share: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    ratingHeading:{
        fontFamily:FONTS.Roboto.regular,
        fontSize:moderateScale(13),
        marginTop:moderateScale(8),
        marginHorizontal:moderateScale(15)
    },
    ratimgView:{
        flexDirection:'row',
        alignItems:'center',
        
    }
})