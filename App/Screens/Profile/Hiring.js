import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import HiringCard from '../../Components/Profile/HiringCard'
import { moderateScale } from '../../Constants/PixelRatio'

const Hiring = () => {
    const hiringArr = [
        {
            Opening: '50',
            SkillRequired: 'React'
        },
        {
            Opening: '50',
            SkillRequired: 'React'
        },
    ]
    return (
        <Container
        style={styles.hiringMap}>
            {hiringArr.map((item, index) => (
                <HiringCard
                    key={index}
                    item={item}
                />
            ))}
        </Container>
    )
}

export default Hiring

const styles = StyleSheet.create({
    hiringMap:{
        marginTop:moderateScale(12)
    }
})