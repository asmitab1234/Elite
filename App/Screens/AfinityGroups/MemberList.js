
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import PerformerCard from '../../Components/DrawerComponent/Performer/PerformerCard'
import EmployeeCard from '../../Components/DrawerComponent/Emloyee/EmployeeCard'
import MemberListCard from '../../Components/DrawerComponent/AfinityGroups/MemberListCard'

const MemberList = () => {
    const performerArr = [
        {
            userImg: require('../../Assets/Home/user.png'),
            name: 'Sara Tylor',
            Designation: 'Manager',
        },
        {
            userImg: require('../../Assets/Home/user.png'),
            name: 'Sara Tylor',
            Designation: 'Manager',
        },
        {
            userImg: require('../../Assets/Home/user.png'),
            name: 'Sara Tylor',
            Designation: 'Employee',
        },
        {
            userImg: require('../../Assets/Home/user.png'),
            name: 'Sara Tylor',
            Designation: 'Employee',
        },
    ]
    return (
        <Container>
            <BackHeader title='Members' />

            {performerArr.map((item, index) => (
                <MemberListCard
                    key={index}
                    item={item}
                />
            ))}
        </Container>
    )
}

export default MemberList

const styles = StyleSheet.create({})