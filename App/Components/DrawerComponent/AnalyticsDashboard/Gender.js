import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
// import PieChart from 'react-native-pie-chart'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import { PieChart } from 'react-native-gifted-charts'

const Gender = ({ item }) => {
    // const widthAndHeight = 100
    // const series = [330, 321, 123]
    // const sliceColor = ['#A11717', '#A0A0A0', '#0D0368']
    const pieData = [
        { value: 54, color: '#A11717', text: 'Male' },
        { value: 40, color: '#A0A0A0', text: 'Female' },
        { value: 20, color: '#0D0368', text: 'Other' },
    ];
    return (
        <View
            style={{ alignItems: 'center' }}>
            {/* <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.70}
                // coverFill={'#FFF'}
                style={{
                    marginHorizontal: moderateScale(20),
                    marginTop: moderateScale(15)
                }}
            /> */}
            <PieChart
            donut
            showText
            textColor="#FFFFFF"
            radius={80}
            textSize={moderateScale(10)}
            // showTextBackground
            // textBackgroundRadius={26}
            data={pieData}
            />
            {/* <Text
                style={styles.regularText}>
                Male,Female,Other
            </Text> */}
        </View>
    )
}

export default Gender

const styles = StyleSheet.create({
    regularText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(10)
    }
})