import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const HomeOptionCard = () => {
    const colors = useTheme()
    const optionCard = [
        {
            title: 'Top Performer',
            handelClick: 'TopPerformer'
        },
        {
            title: 'Document Repository',
            handelClick: 'Document'
        },
        {
            title: 'Live',
            handelClick: 'Live'
        },
        {
            title: 'Join Initiatives',
            handelClick: 'JoinInitiatives'
        },
    ]
    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                ...styles.mapView,
                borderColor: colors.buttonColor
            }}>
            {optionCard.map((item, index) => (
                <Pressable
                    onPress={() => NavigationService.navigate(item.handelClick)}
                    key={index}
                    style={styles.optionBox}>
                    <Text
                        style={styles.titleStyl}>
                        {item.title}
                    </Text>
                </Pressable>
            ))}
        </ScrollView>
    )
}

export default HomeOptionCard

const styles = StyleSheet.create({
    optionBox: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: moderateScale(1),
        borderRadius: moderateScale(20),
        height: moderateScale(40),
        width: moderateScale(80),
        paddingHorizontal: moderateScale(10),
        // marginRight: moderateScale(10),
        marginHorizontal: moderateScale(5),
        marginTop: moderateScale(15),
        marginBottom:moderateScale(5),
        backgroundColor:'#DFD9D9',
        elevation:2
    },
    mapView: {
        flexDirection: 'row',
        // marginHorizontal: moderateScale(15),
        paddingHorizontal: moderateScale(15)
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(11),
        textAlign: 'center'
    }
})