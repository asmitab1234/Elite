import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import SettingCard from '../../Components/Settings/SettingCard'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const Setting = () => {
    const settingArr = [
        // {
        //     img: require('../../Assets/Home/rewardpoints.png'),
        //     name: 'Reward Points Details'
        // },
        {
            img: require('../../Assets/Home/Training.png'),
            name: 'Ongoing Training',
            handellick: 'OngoingLearning'
        },
        {
            img: require('../../Assets/Home/mentor.png'),
            name: 'Mentor',
            handellick: 'Mentor'
        },
        // {
        //     img: require('../../Assets/Home/AffinityGroup.png'),
        //     name: 'My Group'
        // },
        {
            img: require('../../Assets/Home/badge.png'),
            name: 'Badges'
        },
        {
            img: require('../../Assets/Home/download.png'),
            name: 'Ideation'
        },
        {
            img: require('../../Assets/Home/attendance.png'),
            name: 'Attendance'
        },
        {
            img: require('../../Assets/Home/poll.png'),
            name: 'Daily Poll'
        },

    ]
    const [Index, setIndex] = useState(0)
    const [supportSelect, setSupportSelect] = useState(0)
    return (
        <Container>
            <BackHeader title='Setting' />
            <View
                style={styles.settingView}>
                {settingArr.map((item, index) => (
                    <SettingCard
                        key={index}
                        item={item}
                        index={index}
                        Index={Index}
                        setIndex={setIndex}
                    />
                ))}
            </View>
            <TouchableOpacity
                onPress={() => setSupportSelect(!supportSelect)}
                style={{
                    ...styles.card,
                    backgroundColor: supportSelect == 0 ? '#E2C0CA96' : '#EBEBEB'
                }}>
                {/* <Image
                    source={item.img}
                    style={styles.iconStyl}
                    resizeMode='contain'
                /> */}
                <Text
                    style={styles.titleStyl}>
                    Helps & Support
                </Text>
            </TouchableOpacity>
        </Container>
    )
}

export default Setting

const styles = StyleSheet.create({
    settingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginHorizontal: moderateScale(15),
    },
    card: {
        height: moderateScale(45),
        width: '92%',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#EBEBEB',
        marginHorizontal: moderateScale(15)
    },
    iconStyl: {
        height: moderateScale(28),
        width: moderateScale(28),
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        textAlign: 'center'
    }
})