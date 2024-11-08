import { StyleSheet, View } from 'react-native'
import React from 'react'
import PieChart from 'react-native-pie-chart'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'

const InitiativeCArd = () => {
    const widthAndHeight = 150
    const series = [400,523]
    const sliceColor = ['#A11717','#0D0368']
    const enpsArr = [
        {
            color: '#08E2FF',
            title: 'In Progress'
        },
        {
            color: '#4CB773',
            title: 'Completed'
        },

    ]
    return (
        <View
            style={styles.row_view}>
            <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.70}
            // coverFill={'#FFF'}
            />
            <View
                style={{ marginLeft: moderateScale(15) }}>
                {enpsArr.map((item, index) => (
                    <View
                        key={index}
                        style={styles.row_view}>
                        <View style={{
                            width: moderateScale(10),
                            height: moderateScale(10),
                            backgroundColor: item.color,
                            borderRadius: moderateScale(30)
                        }} />
                        <Text
                            style={{
                                ...styles.regularText,
                                marginLeft: moderateScale(8)
                            }}>
                            {item.title}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default InitiativeCArd

const styles = StyleSheet.create({
    row_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    regularText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    }
})