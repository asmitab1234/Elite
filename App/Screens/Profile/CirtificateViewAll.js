import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import CirtificateViewAllCard from '../../Components/Profile/Cirtificate/CirtificateViewAllCard'
import { moderateScale } from '../../Constants/PixelRatio'

const CirtificateViewAll = () => {
    const certificateArr = [
        {
            name: 'Lorem Ipsum ',
            Date: '23-03-24'
        },
        {
            name: 'Lorem Ipsum ',
            Date: '23-03-24'
        },
        {
            name: 'Lorem Ipsum ',
            Date: '23-03-24'
        },
        {
            name: 'Lorem Ipsum ',
            Date: '23-03-24'
        },
    ]
    return (
        <Container>
            <BackHeader title='Cirtificate' />
            <ScrollView
                style={{
                    marginHorizontal: moderateScale(15)
                }}>
                {certificateArr.map((item, index) => (
                    <CirtificateViewAllCard
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}

export default CirtificateViewAll

const styles = StyleSheet.create({})