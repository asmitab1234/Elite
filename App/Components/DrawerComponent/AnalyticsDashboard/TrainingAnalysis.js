import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts';
import { useTheme } from 'react-native-basic-elements';

const TrainingAnalysis = () => {
    const colors = useTheme()
    const barData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
    return (
        <View>
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
             <BarChart
                frontColor={'#A11717'}
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

export default TrainingAnalysis

const styles = StyleSheet.create({})