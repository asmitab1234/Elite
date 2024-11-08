import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const Unread = () => {
    const notificationArr = [
        {
            img: require('../../Assets/Home/user.png'),
            notify: 'you have a new notification regarding job requirments',
            time: '5 hours ago'
        },
        {
            img: require('../../Assets/Home/user.png'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago'
        },
        {
            img: require('../../Assets/Home/user.png'),
            notify: 'you have a new notification regarding job requirments',
            time: '5 hours ago'
        },
        {
            img: require('../../Assets/Home/user.png'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago'
        },
    ]
    return (
        <View>
            {notificationArr.map((item, index) => (
                <ScrollView
                    key={index}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.mainView}>
                    <Image
                        source={item.img}
                        style={styles.imgStyl}
                    />
                    <View>
                        <Text
                            style={styles.notifyText}>
                            {item.notify}
                        </Text>
                        <Text
                            style={styles.timeText}>
                            {item.time}
                        </Text>
                    </View>
                </ScrollView>
            ))}

        </View>
    )
}

export default Unread

const styles = StyleSheet.create({
    mainView: {
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15),
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(90)
    },
    notifyText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        width: '80%',
        marginLeft: moderateScale(10)
    },
    timeText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11),
        marginLeft: moderateScale(10),
        marginTop: moderateScale(5)
    }
})