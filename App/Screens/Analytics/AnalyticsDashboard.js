import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Container, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import TeamEngagementComponent from '../../Components/DrawerComponent/AnalyticsDashboard/TeamEngagementComponent'
import PieChart from 'react-native-pie-chart'
import Gender from '../../Components/DrawerComponent/AnalyticsDashboard/Gender'
import { BarChart } from 'react-native-gifted-charts'
import Education from '../../Components/DrawerComponent/AnalyticsDashboard/Education'
import Onboarding from '../../Components/DrawerComponent/AnalyticsDashboard/Onboarding'
import InitiativeCArd from '../../Components/DrawerComponent/AnalyticsDashboard/InitiativeCArd'
import Hiring from '../Profile/Hiring'
import HiringAnalysis from '../../Components/DrawerComponent/AnalyticsDashboard/HiringAnalysis'
import TrainingAnalysis from '../../Components/DrawerComponent/AnalyticsDashboard/TrainingAnalysis'
import RewardPointAnalysis from '../../Components/DrawerComponent/AnalyticsDashboard/RewardPointAnalysis'
import SuggetionReceived from '../../Components/DrawerComponent/AnalyticsDashboard/SuggetionReceived'
import GrivenceReceived from '../../Components/DrawerComponent/AnalyticsDashboard/GrivenceReceived'
import EmployeeVoice from '../../Components/DrawerComponent/AnalyticsDashboard/EmployeeVoice'
import AdvocacyAnalysis from '../../Components/DrawerComponent/AnalyticsDashboard/AdvocacyAnalysis'
import NavigationService from '../../Services/Navigation'

const AnalyticsDashboard = () => {
    const colors = useTheme()
    const widthAndHeight = 150
    const series = [330, 321, 123]
    const sliceColor = ['#A11717', '#A0A0A0', '#0D0368']
    const barData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
    const teamArr = [
        {
            title: 'engagement Index',
            index: '61%',
            percentage: '17.3%',
            vsmonth: 'vs. previous month'
        },
        {
            title: 'engagement Index',
            index: '61%',
            percentage: '17.3%',
            vsmonth: 'vs. previous month'
        },
        {
            title: 'engagement Index',
            index: '61%',
            percentage: '17.3%',
            vsmonth: 'vs. previous month'
        },
        {
            title: 'engagement Index',
            index: '61%',
            percentage: '17.3%',
            vsmonth: 'vs. previous month'
        },
    ]
    const enpsArr = [
        {
            color: '#08E2FF',
            title: 'Promoters 60%'
        },
        {
            color: '#4CB773',
            title: 'Passives 30%'
        },
        {
            color: '#D68E1A',
            title: 'Detractors 10%'
        },
    ]
    const GenderArr = [
        { title: 'Male' },
        { title: 'Female' }
    ]
    const horizontalbar = [
        { title: 'Bachelors Degree' },
        { title: 'Bachelors Degree' },
        { title: 'Bachelors Degree' },
        { title: 'Bachelors Degree' },
    ]
    const onboardingArr = [
        {
            title: 'Onboarding Time',
            no: '90',
            type: 'Hiries'
        },
        {
            title: 'No. of Open Posi',
            no: '24.0%',
            type: 'Referral'
        },
    ]
    const rewardpointArr = [
        { title: 'Platinum' },
        { title: 'God' },
        { title: 'Silver' },
        { title: 'Bronze' },
    ]
    const noArr = [
        { title: '1' },
        { title: '2' },
        { title: '3' },
        { title: '4' },
        { title: '5' },
    ]
    // const scoreTitleArr = [
    //     { title: 'Environmental Satisfaction' },
    //     { title: 'Job Satisfaction' },
    //     { title: 'Job Involvement' },
    //     { title: 'Relationship Satisfaction' },
    //     { title: 'Work life Balance' },
    // ]
    const scoreNoArr = [
        {
            head: 'Environmental Satisfaction',
            // title: '70',
            // color: '#A11717'
        },
        {
            head: 'Job Satisfaction',
            // title: '72',
            // color: '#0D0368'
        },
        {
            head: 'Job Involvement',
            // title: '60',
            // color: '#A0A0A0'
        },
        {
            head: 'Relationship Satisfaction',
            // title: '64',
            // color: '#0D0368'
        },
        {
            head: 'Work life Balance',
            // title: '40',
            // color: '#A11717'
        },
    ]
    const VoiceArr = [
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
    const advocacyArr = [
        {
            no: '100',
            title: 'Total Post'
        },
        {
            no: '10',
            title: 'Total Likes'
        },
        {
            no: '10',
            title: 'Comments'
        },
        {
            no: '10',
            title: 'Shares'
        },
    ]
    return (
        <Container>
            <BackHeader title='Abalytics Dashboard' />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        My team engagement
                    </Text>
                    <View
                        style={styles.horizontal_wrap_view}>
                        {teamArr.map((item, index) => (
                            <TeamEngagementComponent
                                key={index}
                                item={item}
                            />
                        ))}
                    </View>
                </Card>
                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Engagement - Employee
                    </Text>
                    <View
                        style={styles.horizontal_wrap_view}>
                        {teamArr.map((item, index) => (
                            <TeamEngagementComponent
                                key={index}
                                item={item}
                            />
                        ))}
                    </View>
                    <Text
                        style={{
                            ...styles.heading,
                            marginTop: moderateScale(15)
                        }}>
                        Engagement Score
                    </Text>
                    <Text
                        style={{
                            ...styles.heading,
                            fontSize: moderateScale(25)
                        }}>
                        6.4
                    </Text>
                    <Text
                        style={styles.heading}>
                        eNPS Distribution:
                    </Text>
                    <View
                        style={styles.row_view}>
                        <PieChart
                            widthAndHeight={widthAndHeight}
                            series={series}
                            sliceColor={sliceColor}
                            coverRadius={0.70}
                        // coverFill={'#FFF'}
                        />
                        <View
                            style={{ marginLeft: moderateScale(15) }}>
                            {enpsArr.map((item, index) => (
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
                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Employee Demography
                    </Text>
                    <Text
                        style={styles.regularText}>
                        GENDER
                    </Text>
                    <View
                        style={styles.row_view}>
                        {/* {GenderArr.map((item, index) => ( */}
                            <Gender
                                // key={index}
                                // item={item}
                            />
                        {/* ))} */}
                    </View>
                    <Text
                        style={{
                            ...styles.regularText,
                            marginVertical: moderateScale(15)
                        }}>
                        AGE GROUP
                    </Text>
                    <BarChart
                        frontColor={'#0D0368'}
                        barWidth={22}
                        data={barData}
                        yAxisThickness={0}
                        xAxisThickness={0}
                    />
                    <Text
                        style={{
                            ...styles.heading,
                            marginBottom: moderateScale(15)
                        }}>
                        Education
                    </Text>

                    {horizontalbar.map((item, index) => (
                        <Education
                            key={index}
                            item={item} />
                    ))}

                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Onboarding
                    </Text>
                    <View
                        style={{
                            // ...styles.row_view,
                            // justifyContent: 'space-between'
                        }}>
                        {onboardingArr.map((item, index) => (
                            <Onboarding
                                key={index}
                                item={item}
                            />
                        ))}
                    </View>
                </Card>
                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Employee Voice
                    </Text>
                    <View
                        style={{
                            ...styles.row_view
                        }}>
                        <View
                            style={{
                                width: '35%'
                            }}>
                            <Text>
                                Score
                            </Text>
                        </View>
                        <View
                            style={{
                                ...styles.row_view,
                                width: '50%'
                            }}>
                            {noArr.map((item, index) => (
                                <View
                                    key={index}
                                    style={{
                                        padding: 15
                                    }}>
                                    <Text>
                                        {item.title}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {scoreNoArr.map((item, index) => (
                        <EmployeeVoice
                            key={index}
                            item={item}
                        />
                    ))}

                    <Text
                        style={{
                            ...styles.heading,
                            marginTop: moderateScale(20)
                        }}>
                        Onboarding 30-60-90
                    </Text>
                    <View
                        style={styles.row_view}>
                        <PieChart
                            widthAndHeight={widthAndHeight}
                            series={series}
                            sliceColor={sliceColor}
                            coverRadius={0.70}
                        // coverFill={'#FFF'}
                        />
                        <View
                            style={{ marginLeft: moderateScale(15) }}>
                            {VoiceArr.map((item, index) => (
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
                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Hiring
                    </Text>
                    <HiringAnalysis />
                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Training
                    </Text>
                    <TrainingAnalysis />
                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Initiatives
                    </Text>
                    <InitiativeCArd />
                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Reward Points
                    </Text>

                    {rewardpointArr.map((item, index) => (
                        <RewardPointAnalysis
                            key={index}
                            item={item} />
                    ))}
                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Suggestion Received
                    </Text>
                    <SuggetionReceived />
                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Grivence Received
                    </Text>
                    <GrivenceReceived />
                </Card>

                <Card
                    shadow={false}
                    style={styles.mainCard}>
                    <Text
                        style={styles.heading}>
                        Advocacy
                    </Text>
                    {advocacyArr.map((item, index) => (
                        <AdvocacyAnalysis
                            key={index}
                            item={item}
                        />
                    ))}
                </Card>

                <Card
                    shadow={false}
                    style={{
                        ...styles.mainCard,
                        borderRadius: moderateScale(30),
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => NavigationService.navigate('AnalyticsViewDetails')}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.Roboto.bold,
                            fontSize: moderateScale(16)
                        }}>
                        View Details
                    </Text>
                </Card>

            </ScrollView>
        </Container>
    )
}

export default AnalyticsDashboard

const styles = StyleSheet.create({
    mainCard: {
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(5),
        marginBottom: moderateScale(18)
    },
    heading: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(16),
        marginBottom: moderateScale(15)
    },
    horizontal_wrap_view: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 13,
        marginHorizontal: moderateScale(12)
    },
    row_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    regularText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    }
})