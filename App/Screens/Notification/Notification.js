import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import All from '../../Components/Notification/All'
import Unread from '../../Components/Notification/Unread'
import JobNotification from '../../Components/Notification/JobNotification'

const Notification = () => {
    const buttonName = [
        {
            title: 'All',
        },
        {
            title: 'Unread',
        },
        {
            title: 'Job Notification',
        },
    ]
    const [Index, setIndex] = useState(0)
    return (
        <Container>
            <BackHeader title='Notification' />

            <View
                style={styles.mapView}>
                {buttonName.map((item, index) => (
                    <AppButton
                        key={index}
                        title={item.title}
                        style={{
                            ...styles.buttonStyl,
                            borderBottomWidth: Index == index ? moderateScale(2) : 0,
                            borderColor: Index == index ? '#ed3b4b' : 'teansparent',
                        }}
                        textStyle={{
                            ...styles.textStyl,
                            // color: Index == index ? '#3880BB' : '#000000'
                        }}
                        onPress={() => setIndex(index)}
                    />
                ))}
            </View>
            <View>
                {Index == 0 ? <All /> : Index == 1 ? <Unread /> : Index == 2 ? <JobNotification /> : null}
            </View>

        </Container>
    )
}

export default Notification

const styles = StyleSheet.create({
    buttonStyl: {
        // width: '20%',
        backgroundColor: 'transparent',
        marginHorizontal: 0,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(40),
        marginHorizontal: moderateScale(8),
        padding: moderateScale(10),
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    mapView: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(12)
    }
})