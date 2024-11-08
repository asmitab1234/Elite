import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { useRoute } from '@react-navigation/native'
import SkillViewAllComponent from '../../Components/Profile/SkillViewAllComponent'

const SkillViewAll = () => {
    const route = useRoute();
    const AllSkill = route?.params?.fullSkill;
console.log("AllSkill",AllSkill);
    const skillArr = [
        {
            skill: 'Java'
        },
        {
            skill: 'React'
        },
        {
            skill: 'Java'
        },
        {
            skill: 'React'
        },
    ]
    return (
        <Container>
            <BackHeader title='Skils' />
            <ScrollView
                style={{
                    marginHorizontal: moderateScale(15)
                }}>
                {AllSkill?.skills?.map((item, index) => (
                    <SkillViewAllComponent
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}

export default SkillViewAll

const styles = StyleSheet.create({})