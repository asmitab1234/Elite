import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import Hobbies from '../../Components/Profile/Hobbies'
import { moderateScale } from '../../Constants/PixelRatio'

const HobbiesViewAll = () => {
    const hobbiArr = [
        {
            hobbi: 'rdbms'
        },
        {
            hobbi: 'rdbms'
        },
        {
            hobbi: 'rdbms'
        },
        {
            hobbi: 'rdbms'
        },
    ]
    return (
        <Container>
            <BackHeader title='Hobbies' />
            <ScrollView
                style={{
                    marginHorizontal: moderateScale(15)
                }}>
                {hobbiArr.map((item, index) => (
                    <Hobbies
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}

export default HobbiesViewAll

const styles = StyleSheet.create({})