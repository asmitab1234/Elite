import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import TrainingCard from '../../Components/DrawerComponent/Training/TrainingCard'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import DocumentCard from '../../Components/Document/DocumentCard'

const Document = () => {
    const colors = useTheme()
    const documentArr = [
        {
            img: require('../../Assets/Home/user.png'),
            title: 'lorem ipsum',
            date: '2024-05-05',
            cost: 'Rs.100',
            category: 'Skill Devolopment',
            details: 'lorem ipsum dolor',
            time: '25:00',
            version: '10.0.05'
        },
        {
            img: require('../../Assets/Home/user.png'),
            title: 'lorem ipsum',
            date: '2024-05-05',
            cost: 'Rs.100',
            category: 'Skill Devolopment',
            details: 'lorem ipsum dolor',
            time: '25:00',
            version: '10.0.05'
        },
        {
            img: require('../../Assets/Home/user.png'),
            title: 'lorem ipsum',
            date: '2024-05-05',
            cost: 'Rs.100',
            category: 'Skill Devolopment',
            details: 'lorem ipsum dolor',
            time: '25:00',
            version: '10.0.05'
        },
    ]

    const category = [
        {
            category: 'All'
        },
        {
            category: 'IT'
        },
        {
            category: 'R&D'
        },
        {
            category: 'FINANCE'
        },
        {
            category: 'Management'
        },
        {
            category: 'Sales'
        },
        {
            category: 'Non technical'
        },
    ]
    const [Index, setIndex] = useState(0)
    return (
        <Container>
            <BackHeader title='Document Repository' />

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

            {/* <View
                style={styles.createJobView}>
                <Text
                    style={styles.createText}>
                    Create New Document Repository
                </Text>
                <TouchableOpacity
                    style={{
                        ...styles.plusView,
                        backgroundColor: colors.buttonColor
                    }}
                    onPress={() => NavigationService.navigate('DocumentAddPage')}>
                    <Icon
                        name='plus'
                        type='AntDesign'
                        size={17}
                    />
                </TouchableOpacity>
            </View> */}



            <Text
                style={styles.viewTrainingText}>
                View All Document Repository
            </Text>

            {documentArr.map((item, index) => (
                <DocumentCard
                    key={index}
                    item={item}
                />
            ))}
        </Container>
    )
}

export default Document

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
        // flexWrap: 'wrap',
        flexDirection: 'row',
        marginBottom: moderateScale(12),
        paddingHorizontal: moderateScale(6)
    },
    categoryText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(11)
    }

})