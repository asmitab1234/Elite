import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
const SearchinUser = ({ tittle = false }) => {
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <LottieView
                source={require("../../Assets/Images/searchlottie.json")}
                style={{ width: moderateScale(250), height: moderateScale(250) }}
                autoPlay
                loop
            />
            {tittle && <Text style={{ ...styles.Searches_text }}>{tittle}</Text>}
        </View>
    )
}

export default SearchinUser

const styles = StyleSheet.create({

    Searches_text: {
        color: 'rgba(255, 0, 60, 1)',
        fontSize: moderateScale(20),
        fontFamily: FONTS.Roboto.regular,
        alignSelf: 'center',
        justifyContent: 'center',
        // alignItems:"center"
        marginTop: moderateScale(70),
    },
})