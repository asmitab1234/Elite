import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'

const ThankYouCard = () => {
    return (
        <Container>
            <BackHeader title='Thank You' />
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <Text
                    style={styles.cardText}>
                    Anniversary Card
                </Text>
                <ImageBackground
                    source={require('../../Assets/ThankYou/HappyAnniversaryCardclean.png')}
                    style={styles.cardStyl}
                    resizeMode='contain'
                >

                </ImageBackground>

                <Text
                    style={styles.cardText}>
                    Happy Birthday Card
                </Text>

                <ImageBackground
                    source={require('../../Assets/ThankYou/HappyBirthdayCardclean.png')}
                    style={styles.cardStyl}
                // resizeMode='contain'
                >

                </ImageBackground>

                <Text
                    style={styles.cardText}>
                    Onboarding Welcome Card
                </Text>

                <ImageBackground
                    source={require('../../Assets/ThankYou/Onboardingwelcomecardclean.png')}
                    style={{
                        ...styles.cardStyl,
                        // marginTop: moderateScale(20)
                    }}
                // resizeMode='contain'
                >

                </ImageBackground>

                <Text
                    style={styles.cardText}>
                    Thank You Card
                </Text>

                <ImageBackground
                    source={require('../../Assets/ThankYou/ThankYouclean.png')}
                    style={styles.cardStyl}
                    resizeMode='contain'
                >

                </ImageBackground>

            </ScrollView>
        </Container>
    )
}

export default ThankYouCard

const styles = StyleSheet.create({
    cardStyl: {
        height: moderateScale(270),
        width: '96%',
        marginHorizontal: moderateScale(15)
    },
    cardText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15),
        marginHorizontal: moderateScale(15),
        marginBottom:moderateScale(10),
        marginTop:moderateScale(10)
    }
})