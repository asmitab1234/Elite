import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Picker, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import MemberCard from '../../Components/DrawerComponent/AfinityGroups/MemberCard'
import NavigationService from '../../Services/Navigation'

const GroupDetailScreen = () => {
    const [dropdownValue, setDropdownValue] = useState('');
    return (
        <Container>
            <BackHeader title='Group Details' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <Text
                    style={styles.headingText}>
                    Group Name:
                </Text>
                <Text
                    style={styles.textStyl}>
                    Lorem ipsum dolor sit Lorem ipsum dolor sit sit Lorem ipsum dolor sit
                </Text>

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(10)
                    }}>
                    Group Type:
                </Text>
                <Text
                    style={styles.textStyl}>
                    Private
                </Text>

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(10)
                    }}>
                    Character:
                </Text>
                <Text
                    style={styles.textStyl}>
                    Office Work
                </Text>

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(10)
                    }}>
                    Purpose:
                </Text>
                <Text
                    style={styles.textStyl}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D
                    uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

                <View
                    style={{
                        marginTop: moderateScale(10),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <Text
                        style={{
                            ...styles.headingText,
                        }}>
                        Members:
                    </Text>
                    <TouchableOpacity
                        onPress={() => NavigationService.navigate('MemberList')}>
                        <Text
                            style={{
                                ...styles.headingText,
                                textDecorationLine: 'underline'
                            }}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.imageView}>
                    {[1, 2, 3, 4, 5, 6, 7,].map((item, index) => (
                        <MemberCard
                            key={index}
                        />
                    ))}
                </View>
            </ScrollView>
        </Container>
    )
}

export default GroupDetailScreen

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginHorizontal: moderateScale(15)
    },
    headingText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15),
        marginHorizontal: moderateScale(15)
    },
    pickerStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(8),
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15)
    },
    imageView: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})