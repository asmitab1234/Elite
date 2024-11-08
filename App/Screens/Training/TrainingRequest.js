import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import TrainingRequestCard from '../../Components/DrawerComponent/Training/TrainingRequestCard'

const TrainingRequest = () => {
    const colors = useTheme()
    const trainingArr = [
        {
            img: require('../../Assets/Home/user.png'),
            courseTitle: 'lorem ipsum dolor',
            date: 'Lore Ipsum',
            cost: 'Rs.100',
            category: 'Skill Devolopment',
            lang: 'Eng',
            time: '25:00'
        },
        {
            img: require('../../Assets/Home/user.png'),
            courseTitle: 'lorem ipsum dolor',
            date: 'Lore Ipsum',
            cost: 'Rs.100',
            category: 'Skill Devolopment',
            lang: 'Eng',
            time: '25:00'
        },
        {
            img: require('../../Assets/Home/user.png'),
            courseTitle: 'lorem ipsum dolor',
            date: 'Lore Ipsum',
            cost: 'Rs.100',
            category: 'Skill Devolopment',
            lang: 'Eng',
            time: '25:00'
        },
    ]

    const category = [
        {
            category: 'All'
        },
        {
            category: 'Mandatory Course'
        },
        {
            category: 'Skill development Course'
        },
        {
            category: 'Micro training'
        },
        {
            category: 'Non technical'
        }
    ]
    const [Index, setIndex] = useState(0)
    return (
        <Container>
            <BackHeader title='My Learning Request' />

            <AppTextInput
                placeholder='Search'
                inputStyle={styles.fontStyl}
                inputContainerStyle={styles.inputContainer}
                mainContainerStyle={styles.inputBox}
                rightAction={

                    <Icon
                        name='search1'
                        type='AntDesign'
                        size={17}
                    />

                }
            />

            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoryMap}>
                    {category.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                ...styles.categoryBox,
                                backgroundColor: index == Index ? colors.buttonColor : '#92888842'
                            }}
                            onPress={() => setIndex(index)}
                        >
                            <Text
                                style={styles.categoryText}>
                                {item.category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View
                style={styles.createJobView}>
                <Text
                    style={styles.createText}>
                    Create New Learning
                </Text>
                <TouchableOpacity
                    style={{
                        ...styles.plusView,
                        backgroundColor: colors.buttonColor
                    }}
                    onPress={() => NavigationService.navigate('TrainingAddPage')}>
                    <Icon
                        name='plus'
                        type='AntDesign'
                        size={17}
                    />
                </TouchableOpacity>
            </View>



            <Text
                style={styles.viewTrainingText}>
                My Learning Request
            </Text>

            {trainingArr.map((item, index) => (
                <TrainingRequestCard
                    key={index}
                    item={item}
                />
            ))}
        </Container>
    )
}

export default TrainingRequest

const styles = StyleSheet.create({
    createJobView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(10),
        marginHorizontal: moderateScale(16),
        backgroundColor: '#E0E0E0',
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
        justifyContent: 'space-between'
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
    viewTrainingText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(15),
        marginHorizontal: moderateScale(15),
        marginBottom: moderateScale(12)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginLeft: moderateScale(10)
    },
    inputContainer: {
        height: moderateScale(35),
        borderRadius: moderateScale(20)
    },
    inputBox: {
        marginHorizontal: moderateScale(15),
        marginBottom: moderateScale(10)
    },
    categoryBox: {
        padding: moderateScale(10),
        borderRadius: moderateScale(20),
        marginHorizontal: moderateScale(6)
    },
    categoryMap: {
        flexDirection: 'row',
        marginBottom: moderateScale(12),
        paddingHorizontal: moderateScale(6)
    },
    categoryText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(11)
    }

})