import { Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'
import { FONTS } from '../Constants/Fonts'
import NavigationService from '../Services/Navigation'

const DrawerContent = () => {
    const drawerArr = [
        // {
        //     icon: require('../Assets/Home/Bulletin.png'),
        //     itemText: 'Bulletin',
        //     handelClick:'Bulletin'
        // },
        // {
        //     icon: require('../Assets/Home/performer.png'),
        //     itemText: 'Top Performer',
        //     handelClick:'TopPerformer'
        // },
        {
            icon: require('../Assets/Home/employee.png'),
            itemText: 'Employees',
            handelClick: 'Employee'
        },
        // {
        //     icon: require('../Assets/Home/event.png'),
        //     itemText: 'Events',
        //     handelClick:'Event'
        // },

        {
            icon: require('../Assets/Home/job.png'),
            itemText: 'Referral Hiring',
            handelClick: 'RefferalHiring'
        },
        // {
        //     icon: require('../Assets/Home/Advocacy.png'),
        //     itemText: 'Advocacy',
        //     handelClick:'Advocacy'
        // },
        // {
        //     icon: require('../Assets/Home/join.png'),
        //     itemText: 'Join Initiatives',
        //     handelClick:'JoinInitiatives'
        // },
        // {
        //     icon: require('../Assets/Home/Training.png'),
        //     itemText: 'Training',
        //     handelClick:'Training'
        // },
        {
            icon: require('../Assets/Home/AffinityGroup.png'),
            itemText: 'Affinity Groups',
            handelClick: 'AfinityGroups'
        },
        {
            icon: require('../Assets/Home/documentReposiy.png'),
            itemText: 'Add Documents',
            handelClick: 'DocumentAddPage'
        },
        {
            icon: require('../Assets/Home/Training.png'),
            itemText: 'My Learning Request',
            handelClick: 'TrainingRequest'
        },
        {
            icon: require('../Assets/Home/Advocacy.png'),
            itemText: 'My Job Request',
            handelClick: 'JobRequest'
        },
        // {
        //     icon: require('../Assets/Home/event.png'),
        //     itemText: 'Create Events',
        //     handelClick: 'CreateEvent'
        // },
        {
            icon: require('../Assets/Home/Advocacy.png'),
            itemText: 'Advocacy Add',
            handelClick: 'AdvocayAdd'
        },
        {
            icon: require('../Assets/Home/join.png'),
            itemText: 'Add Projects',
            handelClick: 'InitiativeAdd'
        },
        // {
        //     icon: require('../Assets/Home/rewardpoints.png'),
        //     itemText: 'Claims Points',
        //     handelClick: 'ClaimPoint'
        // },
        {
            icon: require('../Assets/Home/rewardpoints.png'),
            itemText: 'Reward Points',
            handelClick: 'RewardPoint'
        },
        {
            icon: require('../Assets/Analytics/analytics.png'),
            itemText: 'HR Analysis',
            handelClick: 'AnalyticsDashboard'
        },
        {
            icon: require('../Assets/Home/orgchart.png'),
            itemText: 'Organiser Chart',
            handelClick: 'OrganiserChartList'
        },
    ]
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <Pressable
                onPress={() => NavigationService.navigate('Profile')}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={styles.userImage}
                />
                <Text
                    style={styles.nameText}>
                    Sara Tylor
                </Text>
            </Pressable>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('Profile')}>
                <Text
                    style={styles.viewProfileText}>
                    View Profile
                </Text>
            </TouchableOpacity>
            <View style={styles.viewLine} />

            {drawerArr.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => NavigationService.navigate(item.handelClick)}
                >
                    <View
                        style={styles.imageText}>
                        <Image
                            source={item.icon}
                            style={styles.iconStyl}
                            resizeMode='contain'
                        />
                        <Text
                            style={styles.itemText} >
                            {item.itemText}
                        </Text>
                    </View>
                    <View style={styles.viewLine} />
                </TouchableOpacity>
            ))}


        </ScrollView>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    userImage: {
        height: moderateScale(70),
        width: moderateScale(70),
        borderRadius: moderateScale(140),
        alignSelf: 'center',
        marginTop: moderateScale(30)
    },
    nameText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14),
        marginTop: moderateScale(10),
        textAlign: 'center'
    },
    viewProfileText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(12),
        textAlign: 'center'
    },
    viewLine: {
        height: moderateScale(0.5),
        width: '100%',
        backgroundColor: '#C5C5C5',
        marginVertical: moderateScale(15)
    },
    itemText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        marginLeft: moderateScale(8),
        // textAlign:'center'
    },
    imageText: {
        flexDirection: 'row',
        marginLeft: moderateScale(15),
        alignItems: 'center'
    },
    iconStyl: {
        height: moderateScale(20),
        width: moderateScale(20)
    }
})