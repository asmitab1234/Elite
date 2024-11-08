import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import { BarChart } from 'react-native-gifted-charts'

const Onboarding = ({ item }) => {
    const colors = useTheme()
    const barData = [
        { value: 15 },
        { value: 30 },
        { value: 26, frontColor: '#A11717' },
        { value: 40, frontColor: '#A11717' }
    ];
    return (
        <View
            style={{
                // alignItems: 'center'
            }}>
            <View
                style={styles.titleBox}>
                <Text
                    style={{
                        ...styles.titleText,
                        color: colors.pageBackgroundColor
                    }}>
                    {item.title}
                </Text>
            </View>
            <Text
                style={{
                    ...styles.titleText,
                    fontSize: moderateScale(20),
                    marginTop: moderateScale(5)
                }}>
                {item.no}
            </Text>
            <Text
                style={{
                    ...styles.titleText,
                    fontSize: moderateScale(18),
                    marginTop: moderateScale(5)
                }}>
                {item.type}
            </Text>
            <BarChart
                frontColor={'#0D0368'}
                barWidth={22}
                data={barData}
                showLine={false}
                dashGap={5}
                yAxisThickness={0}
                xAxisThickness={0}
                initialSpacing={0}

            />
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    titleBox: {
        backgroundColor: '#0D0368',
        width: moderateScale(140),
        paddingVertical: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    }
})