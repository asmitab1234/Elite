import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const OtherHobbies = ({ item }) => {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const toggleModalDelete = () => {
        setDeleteModalVisible(!isDeleteModalVisible);
    }
    return (
        <View
            style={{ ...styles.hbbiBox, backgroundColor: (item?.hobbyBackColor) }}>

            <Text
                style={styles.textStyl}>
                {item.hobbies}
            </Text>
        </View>
    )
}

export default OtherHobbies

const styles = StyleSheet.create({
    hbbiBox: {
        backgroundColor: '#E6DCDC',
        padding: moderateScale(8),
        marginBottom: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: moderateScale(5)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    }
})