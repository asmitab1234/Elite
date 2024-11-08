import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../../Constants/Fonts'
import { moderateScale } from '../../../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'
import { BarChart } from 'react-native-gifted-charts'

const Education = ({ item }) => {
    const barData = [
        { value: 15 },
        { value: 30, frontColor: '#A11717' },
        { value: 26, frontColor: '#A0A0A0' }
    ];

    return (
        <View
            style={styles.row_view}>
            <Text
                style={styles.regularText}>
                {item.title}
            </Text>
            <BarChart
                horizontal
                frontColor={'#0D0368'}
                barWidth={22}
                data={barData}
                showLine={false}
                dashGap={0}
                yAxisThickness={0}
                xAxisThickness={0}
                // initialSpacing={0}
                barMarginBottom={0}

            />
        </View>
    )
}

export default Education

const styles = StyleSheet.create({
    regularText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        // marginTop: moderateScale(10)
    },
    row_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})