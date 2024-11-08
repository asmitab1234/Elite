import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { Text } from 'react-native-basic-elements'

const TrainingCard = ({ item }) => {
    return (
        <View
            style={styles.hbbiBox}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1709593491550-1f92cda74017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.imgStyl}
            />
            <View
            style={{marginLeft:moderateScale(8)}}>
                <Text
                    style={styles.textStyl}>
                    Date - {item.Date}
                </Text>
                <Text
                    style={styles.textStyl}>
                    TrainingCost - {item.TrainingCost}
                </Text>
            </View>
        </View>
    )
}

export default TrainingCard

const styles = StyleSheet.create({
    hbbiBox: {
        backgroundColor: '#E6DCDC',
        padding: moderateScale(8),
        marginBottom: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderRadius: moderateScale(5),
        // marginHorizontal:moderateScale(15)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    },
    imgStyl: {
        height: moderateScale(70),
        width: moderateScale(70),
        borderRadius: moderateScale(8)
    }
})