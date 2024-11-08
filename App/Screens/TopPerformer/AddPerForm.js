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

const AddPerForm = () => {
    const [dropdownValue, setDropdownValue] = useState('');

    return (
        <Container>
            <BackHeader title='Add Performer' />
            <ScrollView
                contentContainerStyle={{
                    marginHorizontal: moderateScale(15)
                }}
                showsVerticalScrollIndicator={false}>

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Employee Name
                </Text>

                <Picker
                    options={[
                        {
                            label: 'Item1',
                            value: 'Item1'
                        },
                        {
                            label: 'Item2',
                            value: 'Item2'
                        },
                        {
                            label: 'item3',
                            value: 'item3'
                        },
                    ]}
                    placeholder="Employee Name"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue}
                    onValueChange={(val) => setDropdownValue(val)}
                    containerStyle={styles.picker}
                />

                <AppTextInput
                    title='Reason'
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


            </ScrollView>
            <AppButton
                title='Submit'
                textStyle={styles.textStyl}
                style={styles.buttonStyl}
                onPress={() => {
                    NavigationService.navigate('TopPerformer')
                    Toast.show('Submitted Succesfully', Toast.LONG)
                }}
            />
        </Container>
    )
}

export default AddPerForm

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