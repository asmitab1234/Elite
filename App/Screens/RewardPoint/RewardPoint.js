import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import RewardPointCard from '../../Components/DrawerComponent/RewardPoint/RewardPointCard'

const RewardPoint = () => {
    const rewardArr = [
        {
            title: 'Coming on hallfame',
            point: '0'
        },
        {
            title: 'Comment',
            point: '1470'
        },
        {
            title: 'Complete Onboarding',
            point: '60'
        },
        {
            title: 'Joining Affinity Groups ',
            point: '-19'
        },
        {
            title: 'Post',
            point: '528'
        },
        {
            title: 'Publishing Advocacy',
            point: '20'
        },
        {
            title: 'React',
            point: '390'
        },
        {
            title: 'Survey Completion',
            point: '50'
        },
    ]
    return (
        <Container>
            <BackHeader title='Reward Point Details' />
            {rewardArr.map((item, index) => (
                <RewardPointCard
                    key={index}
                    item={item}
                />
            ))}
        </Container>
    )
}

export default RewardPoint

const styles = StyleSheet.create({})