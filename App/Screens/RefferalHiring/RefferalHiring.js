import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import RefferalHiringCard from '../../Components/DrawerComponent/RefferalHiring/RefferalHiringCard'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const RefferalHiring = () => {
    const colors = useTheme()
    const HirngArr = [
        {
            sub: 'React',
            openning: '2000',
            skill: 'js'
        },
        {
            sub: 'React',
            openning: '2000',
            skill: 'js'
        },
        {
            sub: 'React',
            openning: '2000',
            skill: 'js'
        },
    ]
    return (
        <Container>
            <BackHeader title='Referral Hiring' />
            <View
                style={styles.createJobView}>
                <Text
                    style={styles.createText}>
                    Create New Job
                </Text>
                <TouchableOpacity
                    style={{
                        ...styles.plusView,
                        backgroundColor: '#F5F5F5'
                    }}
                    onPress={() => NavigationService.navigate('RefferJob')}>
                    <Icon
                        name='plus'
                        type='AntDesign'
                        size={17}
                    />
                </TouchableOpacity>
            </View>
            <Text
            style={styles.requesteText}>
                My Requested List :
            </Text>
            {HirngArr.map((item, index) => (
                <RefferalHiringCard
                    key={index}
                    item={item}
                />
            ))}
        </Container>
    )
}

export default RefferalHiring

const styles = StyleSheet.create({
    createJobView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(10),
        marginHorizontal: moderateScale(16),
        justifyContent:'space-between',
        padding:moderateScale(8),
        borderRadius:moderateScale(5),
        backgroundColor:'#DDB89FD8'
    },
    createText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    },
    plusView: {
        padding: moderateScale(4),
        borderRadius: moderateScale(50),
        marginLeft: moderateScale(15)
    },
    requesteText:{
        fontFamily:FONTS.Roboto.medium,
        fontSize:moderateScale(15),
        marginHorizontal:moderateScale(15),
        marginBottom:moderateScale(12)
    }
})