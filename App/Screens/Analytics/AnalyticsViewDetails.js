import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import AnalyticsDetailsComponent from '../../Components/DrawerComponent/AnalyticsDashboard/AnalyticsDetailsComponent'
import BackHeader from '../../Components/Header/BackHeader'

const AnalyticsViewDetails = () => {
  const detailsArr = [
    {
      title: 'Employee Demography',
      handelClick: ''
    },
    {
      title: 'Engagement - Employee',
      handelClick: ''
    },
    {
      title: 'Hiring',
      handelClick: ''
    },
    {
      title: 'Onboarding',
      handelClick: ''
    },
    {
      title: 'Advocacy',
      handelClick: 'AnalyticsAdvocacyScreen'
    },
    {
      title: 'Employee Voice',
      handelClick: 'EmployeeVoiceScreen'
    },
    {
      title: 'Training',
      handelClick: ''
    },
    {
      title: 'Suggestion Received',
      handelClick: ''
    },
    {
      title: 'Grievance Received',
      handelClick: ''
    },
    {
      title: 'My team engagement',
      handelClick: ''
    },
    {
      title: 'Reward Breakup',
      handelClick: ''
    },
    {
      title: 'Initiatives',
      handelClick: ''
    },
  ]
  return (
    <Container>
      <BackHeader title='View Details' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: moderateScale(10)
        }}>
        {detailsArr.map((item, index) => (
          <AnalyticsDetailsComponent
            key={index}
            item={item}
          />
        ))}
      </ScrollView>
    </Container>
  )
}

export default AnalyticsViewDetails

const styles = StyleSheet.create({})