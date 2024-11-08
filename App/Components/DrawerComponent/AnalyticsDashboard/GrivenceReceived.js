import { StyleSheet, View } from 'react-native'
import React from 'react'
// import PieChart from 'react-native-pie-chart'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import { PieChart } from 'react-native-gifted-charts'

const GrivenceReceived = () => {
    // const widthAndHeight = 150
    // const series = [400, 523, 330]
    // const sliceColor = ['#A11717', '#A0A0A0', '#0D0368']
    const pieData = [
        { value: 54, color: '#A11717', text: '54%' },
        { value: 40, color: '#A0A0A0', text: '30%' },
        { value: 20, color: '#0D0368', text: '26%' },
    ];
    const ReceivedArr = [
        {
            color: '#08E2FF',
            title: 'High'
        },
        {
            color: '#4CB773',
            title: 'Medium'
        },
        {
            color: '#D68E1A',
            title: 'Low'
        },
    ]
    return (
        <View
            style={styles.row_view}>
            {/* <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
            // coverRadius={0.70}
            // coverFill={'#FFF'
            /> */}
            <PieChart
                showText
                textColor="#FFFFFF"
                radius={75}
                textSize={moderateScale(11)}
                // showTextBackground
                // textBackgroundRadius={26}
                data={pieData}
            />
            <View
                style={{ marginLeft: moderateScale(15) }}>
                {ReceivedArr.map((item, index) => (
                    <View
                        key={index}
                        style={styles.row_view}>
                        <View style={{
                            width: moderateScale(13),
                            height: moderateScale(13),
                            backgroundColor: item.color,
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

export default GrivenceReceived

const styles = StyleSheet.create({
    row_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(2)
    },
    regularText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    }
})