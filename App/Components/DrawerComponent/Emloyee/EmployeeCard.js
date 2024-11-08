import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import NavigationService from '../../../Services/Navigation'

const EmployeeCard = ({ item }) => {
    return (
        <TouchableOpacity
            onPress={() => NavigationService.navigate('OtherProfileNew')}
            style={styles.nameDateView}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <Image
                    source={item.userImg}
                    style={styles.userImg}
                />
                <View
                    style={{
                        marginLeft: moderateScale(10)
                    }}>
                    <Text
                        style={styles.nameText}>
                        {item.name}
                    </Text>
                    <Text
                        style={styles.date}>
                        {item.Designation}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.followBox}>
                <Text>
                    Follow
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default EmployeeCard

const styles = StyleSheet.create({
    nameDateView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(10),
        marginHorizontal: moderateScale(15),
        backgroundColor: '#EBEBEB',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(7),
        borderRadius: moderateScale(10),
        justifyContent: 'space-between'
    },
    userImg: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(80)
    },
    nameText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15),
    },
    date: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(13)
    },
    followBox: {
        height: moderateScale(30),
        width: '28%',
        backgroundColor: '#C0C0C0',
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'center'
    }
})