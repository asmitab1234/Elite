import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const SettingCard = ({ item, index, Index, setIndex }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setIndex(index);
                    NavigationService.navigate(item.handellick)
                }}
                style={{
                    ...styles.card,
                    backgroundColor: index == Index ? '#E2C0CA96' : '#EBEBEB'
                }}>
                <Image
                    source={item.img}
                    style={styles.iconStyl}
                    resizeMode='contain'
                />
                <Text
                    style={styles.titleStyl}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingCard

const styles = StyleSheet.create({
    card: {
        height: moderateScale(90),
        width: moderateScale(142),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(8),
        marginBottom: moderateScale(20),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyl: {
        height: moderateScale(28),
        width: moderateScale(28),
        marginBottom: moderateScale(5)
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        textAlign: 'center'
    }
})