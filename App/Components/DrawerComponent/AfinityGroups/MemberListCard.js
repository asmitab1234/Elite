import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import NavigationService from '../../../Services/Navigation'
import LinearGradient from 'react-native-linear-gradient'

const MemberListCard = ({ item }) => {
    const colors = useTheme()
    return (
        <TouchableOpacity
            // onPress={() => NavigationService.navigate('OtherProfileNew')}
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
                <Text
                    style={{
                        ...styles.follow,
                    }}>
                    Follow
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default MemberListCard

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
    follow: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    followBox: {
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
        backgroundColor: '#CECECE',
        height: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center'
    }
})