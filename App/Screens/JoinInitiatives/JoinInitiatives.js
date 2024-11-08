import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import JoinInitiativesCard from '../../Components/DrawerComponent/JoinInitiatives/JoinInitiativesCard'
import JoinInitiativeTopTab from '../../Navigation/JoinInitiativeTopTab'

const JoinInitiatives = () => {

    return (
        <Container>
            <BackHeader title='Join Projects' />
            <JoinInitiativeTopTab />
        </Container>
    )
}

export default JoinInitiatives

const styles = StyleSheet.create({})