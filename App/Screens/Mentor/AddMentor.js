import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Picker, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const AddMentor = () => {
  const [dropdownValue, setDropdownValue] = useState('');
  return (
    <Container>
      <BackHeader title='Add Mentor' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: moderateScale(15)
        }}>
        <Text
          style={{
            ...styles.title,
            marginBottom: moderateScale(8)
          }}>
          Select Department Name
        </Text>
        <Picker
          options={[
            {
              label: 'React',
              value: 'React'
            },
            {
              label: 'PHP',
              value: 'PHP'
            },
            {
              label: 'Node',
              value: 'Node'
            },
          ]}
          placeholder="Select"
          textStyle={{
            fontSize: 15
          }}
          selectedValue={dropdownValue}
          onValueChange={(val) => setDropdownValue(val)}
          containerStyle={styles.pickerStyl}
        />
        <Text
          style={{
            ...styles.title,
            marginVertical: moderateScale(8)
          }}>
          Mentor to be added
        </Text>
        <Picker
          options={[
            {
              label: 'Item 1',
              value: 'item1'
            },
            {
              label: 'Item 2',
              value: 'item2'
            },
            {
              label: 'Item 3',
              value: 'item3'
            },
          ]}
          placeholder="Select"
          textStyle={{
            fontSize: 15
          }}
          selectedValue={dropdownValue}
          onValueChange={(val) => setDropdownValue(val)}
          containerStyle={styles.pickerStyl}
        />
      </ScrollView>
      <AppButton
        title='Submit'
        textStyle={styles.title}
        style={styles.buttonStyl}
        onPress={() => NavigationService.navigate('Mentor')}
      />
    </Container>
  )
}

export default AddMentor

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(13),

  },
  pickerStyl: {
    height: moderateScale(45),
    borderRadius: moderateScale(6),
    justifyContent: 'center',
  },
  buttonStyl: {
    height: moderateScale(45),
    marginVertical: moderateScale(20),
    borderRadius: moderateScale(5)
  }
})