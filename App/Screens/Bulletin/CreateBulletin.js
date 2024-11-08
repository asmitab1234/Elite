import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, Picker, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import DatePicker from 'react-native-date-picker'
import NavigationService from '../../Services/Navigation'
import ImageCropPicker from 'react-native-image-crop-picker'
import Toast from 'react-native-simple-toast';

const CreateBulletin = () => {
  const [dropdownValue, setDropdownValue] = useState('');
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const pick = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  return (
    <Container>
      <BackHeader title='Add Bulletin' />
      <ScrollView
        contentContainerStyle={{
          marginHorizontal: moderateScale(15)
        }}
        showsVerticalScrollIndicator={false}>
        <AppTextInput
          title='Bulletin Name'
          inputStyle={styles.fontStyl}
          titleStyle={styles.textStyl}
          inputContainerStyle={{
            ...styles.inputContaier,
          }}
          mainContainerStyle={{
            ...styles.mainContainer,
          }}
          numberOfLines={1}
        />

        <AppTextInput
          title='Event Date'
          inputStyle={styles.fontStyl}
          titleStyle={styles.textStyl}
          inputContainerStyle={styles.inputContaier}
          mainContainerStyle={{
            ...styles.mainContainer,
          }}
          keyboardType='number-pad'
          placeholder='DD-MM-YYYY'
          rightAction={
            <TouchableOpacity
              onPress={() => setOpen(true)}>
              <Icon
                name='calendar'
                type='AntDesign'
              />
            </TouchableOpacity>
          }
        />

        <Text
          style={{
            ...styles.textStyl,
            marginTop: moderateScale(5)
          }}>
          Select Invitees
        </Text>

        <Picker
          options={[
            {
              label: 'Item1',
              value: 'Item1'
            },
            {
              label: 'R&D',
              value: 'R&D'
            },
            {
              label: 'item3',
              value: 'item3'
            },
          ]}
          placeholder="Select Invitees"
          textStyle={{
            fontSize: 15
          }}
          selectedValue={dropdownValue}
          onValueChange={(val) => setDropdownValue(val)}
          containerStyle={styles.picker}
        />

        <AppTextInput
          title='Add Notes'
          inputStyle={styles.fontStyl}
          titleStyle={styles.textStyl}
          inputContainerStyle={{
            ...styles.inputContaier,
            height: moderateScale(100)
          }}
          mainContainerStyle={{
            ...styles.mainContainer,
          }}
          numberOfLines={1}
        />

        <Text
          style={{
            ...styles.textStyl,
            marginTop: moderateScale(5)
          }}>
          File Upload
        </Text>

        <TouchableOpacity
          style={{
            ...styles.back_view,
            marginTop: moderateScale(10)
          }}
          onPress={() => pick()}>
          <Icon
            name='upload'
            type='Entypo'
          />
          <Text
            style={styles.document}>
            File Upload
          </Text>
          <Text
            style={styles.document}>
            Drop Files here to Upload
          </Text>
        </TouchableOpacity>


      </ScrollView>
      <AppButton
        title='Submit'
        textStyle={styles.textStyl}
        style={styles.buttonStyl}
        onPress={() => {
          NavigationService.navigate('Bulletin')
          Toast.show('Submitted Succesfully', Toast.LONG)
        }}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        mode='date'
      />
    </Container>
  )
}

export default CreateBulletin

const styles = StyleSheet.create({
  picker: {
    borderRadius: moderateScale(5),
    height: moderateScale(45),
    justifyContent: 'center',
    marginTop: moderateScale(10)
  },
  fontStyl: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(12)
  },
  textStyl: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(13)
  },
  inputContaier: {
    height: moderateScale(42),
    borderRadius: moderateScale(5)
  },
  mainContainer: {
    marginTop: moderateScale(8),
  },
  back_view: {
    width: '100%',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    marginTop: moderateScale(8),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dotted',
    padding: moderateScale(25)

  },
  document: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(13),
    marginTop: moderateScale(8)
  },
  buttonStyl: {
    // marginHorizontal: 0,
    marginVertical: moderateScale(15),
    borderRadius: moderateScale(5)
  },
})