import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../../Constants/Fonts'
import { moderateScale } from '../../../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'

const EmployeeVoice = ({ item }) => {
    const scoreNoArr = [
        {
            // head: 'Environmental Satisfaction',
            title: '70',
            color: '#A11717'
        },
        {
            // head: 'Job Satisfaction',
            title: '72',
            color: '#0D0368'
        },
        {
            // head: 'Job Involvement',
            title: '60',
            color: '#A0A0A0'
        },
        {
            // head: 'Relationship Satisfaction',
            title: '64',
            color: '#0D0368'
        },
        {
            // head: 'Work life Balance',
            title: '40',
            color: '#A11717'
        },
    ]
    return (
        <View
            style={{
                flexDirection: 'row',
                marginBottom: moderateScale(10)
            }}>
            <View
                style={{
                    width: '35%',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text
                    style={styles.fontstyl}>
                    {item.head}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    width: '40%'
                }}>
                {scoreNoArr.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            padding: moderateScale(12),
                            backgroundColor: item.color,
                        }}>
                        <Text
                            style={{
                                ...styles.fontstyl,
                                color: '#FFFFFF',
                            }}>
                            {item.title}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default EmployeeVoice

const styles = StyleSheet.create({
    fontstyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    }
})