import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import GroupsTopTab from '../../Components/DrawerComponent/AfinityGroups/GroupsTopTab'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AfinityHeader from '../../Components/Header/AfinityHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import Groups from './Groups'
import Others from './Others'

const Tab = createMaterialTopTabNavigator();
const AfinityGroups = () => {
    return (

        <Container>
            <AfinityHeader title='Affinity Groups' />
            {/* <GroupsTopTab /> */}
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        fontFamily: FONTS.Roboto.bold,
                        fontSize: moderateScale(12),
                        textTransform: 'none'
                    }
                }}
            >
                <Tab.Screen name="My Groups" component={Groups} />
                <Tab.Screen name="Others" component={Others} />
            </Tab.Navigator>


        </Container>
    )
}

export default AfinityGroups

const styles = StyleSheet.create({})