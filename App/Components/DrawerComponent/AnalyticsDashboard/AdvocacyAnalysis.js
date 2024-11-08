import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { FONTS } from '../../../Constants/Fonts'
import { moderateScale } from '../../../Constants/PixelRatio'

const AdvocacyAnalysis = ({ item }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <Text
            style={{
                ...styles.textStyl
            }}>
                {item.no} - 
            </Text>
            <Text
            style={{
                ...styles.textStyl,
                marginLeft:moderateScale(10)
            }}>
                {item.title}
            </Text>
        </View>
    )
}

export default AdvocacyAnalysis

const styles = StyleSheet.create({
    textStyl:{
        fontFamily:FONTS.Roboto.medium,
        fontSize:moderateScale(15)
    }
})