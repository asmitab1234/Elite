import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import SaveTopTabforVIewAll from '../../Navigation/SaveTopTabforVIewAll'
import HiringCard from '../../Components/Profile/HiringCard'
import { moderateScale } from '../../Constants/PixelRatio'

const SaveViewAll = () => {
    const hiringArr = [
        {
            Opening: '50',
            SkillRequired: 'React'
        },
        {
            Opening: '50',
            SkillRequired: 'React'
        },
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
        <Container>
            <BackHeader title='Hiring' />
            {hiringArr.map((item, index) => (
                <View
                    key={index}
                    style={{
                        marginHorizontal: moderateScale(15)
                    }}>
                    <HiringCard
                        key={index}
                        item={item}
                    />
                </View>
            ))}
        </Container>
    )
}

export default SaveViewAll

const styles = StyleSheet.create({})