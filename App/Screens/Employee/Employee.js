
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Icon, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import PerformerCard from '../../Components/DrawerComponent/Performer/PerformerCard'
import EmployeeCard from '../../Components/DrawerComponent/Emloyee/EmployeeCard'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const Employee = () => {
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
            <BackHeader title='Employees' />
            <Pressable
                onPress={() => NavigationService.navigate('AddEmployee')}
                style={styles.BulletinoardAdd}>
                <Text
                    style={styles.bulletinAddText}>
                    Add Perform
                </Text>
                <View
                    style={styles.plusView}>
                    <Icon
                        name='plus'
                        type='AntDesign'
                    />
                </View>
            </Pressable>
            <AppTextInput
                    placeholder='Search employee'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                    }}
                    mainContainerStyle={{
                        marginBottom:moderateScale(15),
                        marginHorizontal:moderateScale(15)
                    }}
                    numberOfLines={1}
                    leftIcon={{
                        name:'search1',
                        type:'AntDesign'
                    }}
                />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {performerArr.map((item, index) => (
                    <EmployeeCard
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>

        </Container>
    )
}

export default Employee

const styles = StyleSheet.create({
    BulletinoardAdd: {
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 15,
        marginBottom: 10

    },
    bulletinAddText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    plusView: {
        borderRadius: moderateScale(30),
        backgroundColor: '#FFDF12',
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    inputContaier: {
        height: moderateScale(42),
        borderRadius: moderateScale(30)
    },

})