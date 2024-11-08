import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import BioViewAllCard from '../../Components/Profile/BioViewAllCard'
import { FONTS } from '../../Constants/Fonts'

const BioViewAll = () => {
    // const bioArr = [
    //     {
    //         Education: 'M.Tech',
    //         Industry: 'IT',
    //         Address:'Kolkata,West Bengal',
    //         About:'About',
    //         cirtificate:'Cirtificate',
    //         phNo:'1234567890',
    //         email:'abc@gmail.com',
    //         cv:'Link..'
    //     },
    // ]
    return (
        <Container>
            <BackHeader title='Introduction' />
            <ScrollView
                style={{
                    marginHorizontal: moderateScale(15)
                }}>

                <Text
                    style={{
                        ...styles.head,
                    }}>
                    Introduction
                </Text>

                <Text
                    style={styles.intro}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    Lorem ipsum dolor sit amet
                </Text>

                <View
                    style={styles.lineStyl}
                />

                <Text
                    style={styles.head}>
                    Education
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    B.Tech
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    M.Tech
                </Text>

                <View
                    style={styles.lineStyl}
                />

                <Text
                    style={styles.head}>
                    Address
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    Kolkata, West Bengal
                </Text>

                <View
                    style={styles.lineStyl}
                />

                <Text
                    style={styles.head}>
                    Industry
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    IT
                </Text>

                <View
                    style={styles.lineStyl}
                />

                <Text
                    style={styles.head}>
                    About
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet, consectetur
                </Text>

                {/* <View
                    style={styles.lineStyl}
                /> */}

                {/* <Text
                    style={styles.head}>
                    Certificate
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    Cirtificate1
                </Text> */}

                <View
                    style={styles.lineStyl}
                />

                <Text
                    style={styles.head}>
                    Phone No
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    1234456789
                </Text>

                <View
                    style={styles.lineStyl}
                />

                <Text
                    style={styles.head}>
                    Email
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    abc@gmail.com
                </Text>

                <View
                    style={styles.lineStyl}
                />

                <Text
                    style={styles.head}>
                    CV
                </Text>

                <Text
                    style={{
                        ...styles.intro
                    }}>
                    link
                </Text>

            </ScrollView>
        </Container>
    )
}

export default BioViewAll

const styles = StyleSheet.create({
    intro: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    head: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
        marginBottom: moderateScale(8),
        textDecorationLine: 'underline'
    },
    lineStyl: {
        height: moderateScale(1),
        width: '100%',
        backgroundColor: '#CCCCCC',
        marginVertical: moderateScale(10)
    }
})