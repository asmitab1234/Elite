import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Icon, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import { FONTS } from '../../Constants/Fonts'
import MentorList from '../../Components/Mentor/MentorList'

const Mentor = () => {
    const mentorArr = [
        {
            img: require('../../Assets/Home/user.png'),
            name: 'Kavery Roy',
            department: 'Node'
        },
        {
            img: require('../../Assets/Home/user.png'),
            name: 'Kavery Roy',
            department: 'Node'
        },
        {
            img: require('../../Assets/Home/user.png'),
            name: 'Kavery Roy',
            department: 'Node'
        },
        {
            img: require('../../Assets/Home/user.png'),
            name: 'Kavery Roy',
            department: 'Node'
        },
    ]
    return (
        <Container>
            <BackHeader title='Mentor' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                <Pressable
                    onPress={() => NavigationService.navigate('AddMentor')}
                    style={styles.BulletinoardAdd}>
                    <Text
                        style={styles.bulletinAddText}>
                        Add Mentor
                    </Text>
                    <View
                        style={styles.plusView}>
                        <Icon
                            name='plus'
                            type='AntDesign'
                        />
                    </View>
                </Pressable>

                {mentorArr.map((item, index) => (
                    <MentorList
                        key={index}
                        item={item}
                    />
                ))}

            </ScrollView>
        </Container>
    )
}

export default Mentor

const styles = StyleSheet.create({
    BulletinoardAdd: {
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: moderateScale(6),
        flexDirection: 'row',
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(8),
        marginBottom: moderateScale(10)

    },
    bulletinAddText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    plusView: {
        borderRadius: moderateScale(30),
        backgroundColor: '#FFDF12',
        height: moderateScale(25),
        width: moderateScale(25),
        alignItems: 'center',
        justifyContent: 'center'
    }
})