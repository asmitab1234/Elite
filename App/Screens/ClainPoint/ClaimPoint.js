import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, Container, Picker, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const ClaimPoint = () => {
    const [dropdownValue, setDropdownValue] = useState('')
    const [dropdownValue1, setDropdownValue1] = useState('')
    const [dropdownValue2, setDropdownValue2] = useState('')
    return (
        <Container>
            <BackHeader title='Claim Point' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginHorizontal: moderateScale(15),
                flex:1 }}
            >
                <Text
                    style={styles.titleStyl}>
                    Activity
                </Text>

                <Picker
                    options={[
                        {
                            label: 'Login Survey',
                            value: 'Login Survey'
                        },
                        {
                            label: 'Project',
                            value: 'Project'
                        },
                        {
                            label: 'Training',
                            value: 'Training'
                        },
                        {
                            label: 'Hiring',
                            value: 'Hiring'
                        },
                        {
                            label: 'AWD',
                            value: 'AWD'
                        },
                    ]}
                    placeholder="Select Activity"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue}
                    onValueChange={(val) => setDropdownValue(val)}
                    containerStyle={styles.PickerStyl}
                />

                <AppTextInput
                    title='Claim Points'
                    titleStyle={{
                        ...styles.titleStyl,
                        marginTop: moderateScale(8)
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainerStyl,
                    }}
                />
                <Text
                    style={{
                        ...styles.titleStyl,
                        marginTop: moderateScale(8)
                    }}>
                    Contribution Behaviour Shpreres
                </Text>

                <Picker
                    options={[
                        {
                            label: 'Innovator',
                            value: 'Innovator'
                        },
                        {
                            label: 'Motivator',
                            value: 'Motivator'
                        },
                        {
                            label: 'Initiator',
                            value: 'Initiator'
                        },
                    ]}
                    placeholder="Select Contribution Behaviour Shpreres"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue1}
                    onValueChange={(val) => setDropdownValue1(val)}
                    containerStyle={styles.PickerStyl}
                />

                <AppTextInput
                    title='Describe the contribution Details'
                    titleStyle={{
                        ...styles.titleStyl,
                        marginTop: moderateScale(8)
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainerStyl,
                    height:moderateScale(100)}}
                />
                
                <AppTextInput
                    title='Add Collaborators (email ids)'
                    titleStyle={{
                        ...styles.titleStyl,
                        marginTop: moderateScale(8)
                    }}
                    inputContainerStyle={styles.inputContainerStyl}
                    keyboardType='email-address'
                />

                <Text
                    style={{
                        ...styles.titleStyl,
                        marginTop: moderateScale(8)
                    }}>
                    Add Recipients or Beneficiaries
                </Text>

                <Picker
                    options={[
                        {
                            label: 'Koml Roy',
                            value: 'Koml Roy'
                        },
                        {
                            label: 'Sara Tylor',
                            value: 'Sara Tylor'
                        },
                        {
                            label: 'Suresh Roy',
                            value: 'Suresh Roy'
                        },
                    ]}
                    placeholder="Select Beneficiaries"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue1}
                    onValueChange={(val) => setDropdownValue1(val)}
                    containerStyle={styles.PickerStyl}
                />
                <View style={{ flex: 1 }} />
                <AppButton
                    title='Submit'
                    textStyle={styles.titleStyl}
                    style={styles.buttomStyl}
                />
            </ScrollView>
        </Container>
    )
}

export default ClaimPoint

const styles = StyleSheet.create({
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    PickerStyl: {
        borderRadius: moderateScale(8),
        height: moderateScale(45),
        justifyContent: 'center'
    },
    inputContainerStyl: {
        borderRadius: moderateScale(8),
        height: moderateScale(45),

    },
    buttomStyl: {
        marginHorizontal: 0,
        height: moderateScale(45),
        marginVertical:moderateScale(25)
    }
})