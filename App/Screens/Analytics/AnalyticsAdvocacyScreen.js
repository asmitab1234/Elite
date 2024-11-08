import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Text } from 'react-native-basic-elements'
import AdvocacyContentComponent from '../../Components/DrawerComponent/AnalyticsDashboard/AdvocacyContentComponent'
import BackHeader from '../../Components/Header/BackHeader'
import { BarChart } from 'react-native-gifted-charts'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import PieChart from 'react-native-pie-chart'
import PostHeadingComponent from '../../Components/DrawerComponent/AnalyticsDashboard/PostHeadingComponent'
import { Table, Row, Rows } from 'react-native-table-component';

const AnalyticsAdvocacyScreen = () => {
    const AdvoCacyArr = [
        {
            title: 'Total Content',
            color: '#A11717',
            no: '500'
        },
        {
            title: 'Admin Content',
            color: '#0D0368',
            no: '125'
        },
        {
            title: 'User Content',
            color: '#0D0368',
            no: '125'
        },
    ]
    const stackData = [
        {
            stacks: [
                { value: 10, color: '#A11717' },
                { value: 10, color: '#0D0368' },
                { value: 20, color: '#A0A0A0', marginBottom: 2 },
            ],
            label: 'Jan',
        },
        {
            stacks: [
                { value: 10, color: '#A11717' },
                { value: 11, color: '#0D0368', marginBottom: 2 },
                { value: 15, color: '#A0A0A0', marginBottom: 2 },
            ],
            label: 'Mar',
        },
        {
            stacks: [
                { value: 10, color: '#A11717' },
                { value: 14, color: '#0D0368' },
                { value: 18, color: '#A0A0A0', marginBottom: 2 },
            ],
            label: 'Feb',
        },
        {
            stacks: [
                { value: 7, color: '#A11717' },
                { value: 11, color: '#0D0368', marginBottom: 2 },
                { value: 10, color: '#A0A0A0', marginBottom: 2 },
            ],
            label: 'Mar',
        },
    ];
    const barArr = [
        {
            color: '#08E2FF',
            title: 'Admin Content'
        },
        {
            color: '#4CB773',
            title: 'Feeds'
        },
        {
            color: '#D68E1A',
            title: 'User Content'
        },
    ]
    const widthAndHeight = 150
    const series = [330, 321, 123]
    const sliceColor = ['#A11717', '#A0A0A0', '#0D0368']
    const NetWorkArr = [
        {
            color: '#08E2FF',
            title: 'Linkedin - 60%'
        },
        {
            color: '#4CB773',
            title: 'Facebook 30%'
        },
        {
            color: '#D68E1A',
            title: 'Others 10%'
        },
    ]

    const headingPostArr = [
        { title: 'All Post' },
        { title: 'All Published' },
        { title: 'Scheduled' },
        { title: 'Drafts' },
        { title: 'Expired' },
        { title: 'Expiring' },
    ]
    const [Index, setIndex] = useState(0)
    const element = (data) => (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center'
            }} >
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmV8ZW58MHx8MHx8fDA%3D' }}
                style={{
                    height: moderateScale(40),
                    width: moderateScale(40),
                    borderRadius: moderateScale(6),
                    marginHorizontal: moderateScale(8),
                    marginVertical: moderateScale(5)
                }}
            />
            <View>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.bold,
                        fontSize: moderateScale(12)
                    }}>
                    I love Coffee! #Sprout
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.light,
                        fontSize: moderateScale(11)
                    }}>
                    Sprout coffee co
                </Text>
            </View>
        </View>
    );
    const tableHead = ['Post', 'CTR', 'Engage Ration', 'Impression', 'Likes & Follows', 'Demographics', 'Time spent']
    const tableData = [
        [element('16'), '16', '16', '16', '16', '16', '16'],
        [element('16'), '16', '16', '16', '16', '16', '16'],
        [element('16'), '16', '16', '16', '16', '16', '16'],
    ]
    const widthArr = [220, 150, 150, 150, 150, 150, 150]
    return (
        <Container>
            <BackHeader title='Advocacy' />

            <ScrollView
                showsVerticalScrollIndicator={false}>

                {AdvoCacyArr.map((item, index) => (
                    <AdvocacyContentComponent
                        item={item}
                        key={index}
                    />
                ))}

                <BarChart
                    width={340}
                    rotateLabel
                    noOfSections={4}
                    stackData={stackData}
                />
                <View
                    style={{
                        marginLeft: moderateScale(15),
                        marginTop: moderateScale(20)
                    }}>
                    {barArr.map((item, index) => (
                        <View
                            key={index}
                            style={styles.row_view}>
                            <View style={{
                                width: moderateScale(13),
                                height: moderateScale(13),
                                backgroundColor: item.color,
                            }} />
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginLeft: moderateScale(8)
                                }}>
                                {item.title}
                            </Text>
                        </View>
                    ))}
                </View>

                <Text
                    style={{
                        ...styles.regularText,
                        marginTop: moderateScale(20),
                        marginHorizontal: moderateScale(15)
                    }}>
                    NetWork Activity
                </Text>
                <View
                    style={{
                        ...styles.row_view,
                        marginTop: moderateScale(15),
                        marginHorizontal: moderateScale(15)
                    }}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.70}
                    // coverFill={'#FFF'}
                    />
                    <View
                        style={{ marginLeft: moderateScale(15) }}>
                        {NetWorkArr.map((item, index) => (
                            <View
                                key={index}
                                style={styles.row_view}>
                                <View style={{
                                    width: moderateScale(25),
                                    height: moderateScale(10),
                                    backgroundColor: item.color
                                }} />
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginLeft: moderateScale(8)
                                    }}>
                                    {item.title}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {headingPostArr.map((item, index) => (
                        <PostHeadingComponent
                            key={index}
                            index={index}
                            item={item}
                            Index={Index}
                            setIndex={setIndex}
                        />
                    ))}
                </ScrollView>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal:moderateScale(10),
                        paddingBottom:moderateScale(20)
                    }}
                    >
                    <Table
                        borderStyle={{
                            borderWidth: moderateScale(1),
                            borderColor: '#C5C5C5',
                        }}>
                        <Row
                            data={tableHead}
                            style={styles.head}
                            textStyle={styles.text}
                            widthArr={widthArr}
                        />
                        <Rows
                            data={tableData}
                            textStyle={styles.text}
                            widthArr={widthArr}
                        />
                    </Table>
                </ScrollView>

            </ScrollView>
        </Container>
    )
}

export default AnalyticsAdvocacyScreen

const styles = StyleSheet.create({
    row_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(2),
    },
    regularText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    },
    head: {
        height: moderateScale(40),
        // backgroundColor: '#f1f8ff'
    },
    text: {
        margin: moderateScale(6),
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(13),
        color: '#000'
    }
})