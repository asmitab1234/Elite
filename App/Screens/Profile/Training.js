import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import HiringCard from '../../Components/Profile/HiringCard'
import { moderateScale } from '../../Constants/PixelRatio'
import TrainingCard from '../../Components/Profile/TrainingCard'

const Training = () => {
    const TrainingArr = [
        {
            Date: '2024-03-06',
            TrainingCost: 'Rs.800'
        },
        {
            Date: '2024-03-06',
            TrainingCost: 'Rs.800'
        },
    ]
    return (
        <Container
            style={styles.hiringMap}>
            {TrainingArr.map((item, index) => (
                <TrainingCard
                    key={index}
                    item={item}
                />
            ))}
        </Container>
    )
}

export default Training

const styles = StyleSheet.create({
    hiringMap: {
        marginTop: moderateScale(12)
    }
})