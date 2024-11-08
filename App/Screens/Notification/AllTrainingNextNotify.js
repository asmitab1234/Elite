import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, CheckBox, Container, Picker, RadioButton, Text } from 'react-native-basic-elements'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BackHeader from '../../Components/Header/BackHeader'
import Toast from 'react-native-simple-toast';

const AllTrainingNextNotify = () => {
    const [selected, setSelected] = useState(false);
    const [check, setCheck] = useState(false);
    const [dropdownValue, setDropdownValue] = useState('');
    const [dropdownValue1, setDropdownValue1] = useState('');
    const [dropdownValue2, setDropdownValue2] = useState('');

    const qnArr = [
        {
            qn: 'Q.1'
        },
        {
            qn: 'Q.2'
        },
        {
            qn: 'Q.3'
        },
        {
            qn: 'Q.4'
        },
    ]
    return (
        <Container>
            <BackHeader title='Training Approval Request' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal: moderateScale(15)
                }}>
                <Text
                    style={{
                        ...styles.textStyl,
                        // marginTop: moderateScale(10),
                        fontFamily: FONTS.Roboto.bold
                    }}>
                    Quiz session
                </Text>


                {qnArr.map((item, index) => (
                    <View
                        key={index}>
                        <AppTextInput
                            title={item.qn}
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

                        <Picker
                            options={[
                                {
                                    label: 'Multiple Answers',
                                    value: 'Multiple Answers'
                                },
                                {
                                    label: 'Two Answers',
                                    value: 'Two Answers'
                                },
                            ]}
                            placeholder="Select Type of Answer"
                            textStyle={{
                                fontSize: 15
                            }}
                            selectedValue={dropdownValue}
                            onValueChange={(val) => setDropdownValue(val)}
                            containerStyle={{
                                borderRadius: moderateScale(5),
                                height: moderateScale(45),
                                justifyContent: 'center',
                                marginTop: moderateScale(10)
                            }}
                        />

                        {
                            dropdownValue == 'Multiple Answers' ?
                                <View>
                                    <View
                                        style={styles.radioText}>
                                        <CheckBox
                                            checked={check}
                                            onChange={(val) => setCheck(val)}
                                            size={20}
                                            containerStyle={styles.radioButton}
                                        />
                                        <Text
                                            style={styles.fontStyl}>
                                            A
                                        </Text>
                                        <AppTextInput
                                            placeholder='Ans'
                                            inputStyle={styles.fontStyl}
                                            mainContainerStyle={styles.ansMainContainer}
                                            inputContainerStyle={{
                                                ...styles.inputContaier,
                                                height: moderateScale(35)
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={styles.radioText}>
                                        <CheckBox
                                            checked={check}
                                            onChange={(val) => setCheck(val)}
                                            size={20}
                                            containerStyle={styles.radioButton}
                                        />
                                        <Text
                                            style={styles.fontStyl}>
                                            B
                                        </Text>
                                        <AppTextInput
                                            placeholder='Ans'
                                            inputStyle={styles.fontStyl}
                                            mainContainerStyle={styles.ansMainContainer}
                                            inputContainerStyle={{
                                                ...styles.inputContaier,
                                                height: moderateScale(35)
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={styles.radioText}>
                                        <CheckBox
                                            checked={check}
                                            onChange={(val) => setCheck(val)}
                                            size={20}
                                            containerStyle={styles.radioButton}
                                        />
                                        <Text
                                            style={styles.fontStyl}>
                                            C
                                        </Text>
                                        <AppTextInput
                                            placeholder='Ans'
                                            inputStyle={styles.fontStyl}
                                            mainContainerStyle={styles.ansMainContainer}
                                            inputContainerStyle={{
                                                ...styles.inputContaier,
                                                height: moderateScale(35)
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={styles.radioText}>
                                        <CheckBox
                                            checked={check}
                                            onChange={(val) => setCheck(val)}
                                            size={20}
                                            containerStyle={styles.radioButton}
                                        />
                                        <Text
                                            style={styles.fontStyl}>
                                            D
                                        </Text>
                                        <AppTextInput
                                            placeholder='Ans'
                                            inputStyle={styles.fontStyl}
                                            mainContainerStyle={styles.ansMainContainer}
                                            inputContainerStyle={{
                                                ...styles.inputContaier,
                                                height: moderateScale(35)
                                            }}
                                        />
                                    </View>
                                </View>
                                :
                                null
                        }

                        {
                            dropdownValue == 'Two Answers' ?
                                <View
                                    style={styles.radioTextView}>
                                    <View
                                        style={styles.radioText}>
                                        <RadioButton
                                            selected={selected == 'Yes'}
                                            onChange={(val) => setSelected('Yes')}
                                            size={20}
                                            containerStyle={styles.radioButton}
                                        />
                                        <Text
                                            style={styles.fontStyl}>
                                            Yes
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.radioText}>
                                        <RadioButton
                                            selected={selected == 'No'}
                                            onChange={(val) => setSelected('No')}
                                            size={20}
                                            containerStyle={styles.radioButton}
                                        />
                                        <Text
                                            style={styles.fontStyl}>
                                            No
                                        </Text>
                                    </View>
                                </View>
                                :
                                null
                        }

                    </View>
                ))}

                <Text
                    style={{
                        ...styles.textStyl,
                        fontFamily: FONTS.Roboto.medium,
                        marginTop: moderateScale(13)
                    }}>
                    Target Audience
                </Text>

                <Picker
                    options={[
                        {
                            label: 'Item 1',
                            value: 'Item 1'
                        },
                        {
                            label: 'Item2',
                            value: 'Item2'
                        },
                    ]}
                    placeholder="Select Department"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue1}
                    onValueChange={(val) => setDropdownValue1(val)}
                    containerStyle={{
                        borderRadius: moderateScale(5),
                        height: moderateScale(45),
                        justifyContent: 'center',
                        marginTop: moderateScale(10)
                    }}
                />

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
                    ]}
                    placeholder="Select Audience"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue2}
                    onValueChange={(val) => setDropdownValue2(val)}
                    containerStyle={{
                        borderRadius: moderateScale(5),
                        height: moderateScale(45),
                        justifyContent: 'center',
                        marginTop: moderateScale(10)
                    }}
                />

                {/* <AppTextInput
                    title='Target Audience'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={1}
                /> */}

                <AppTextInput
                    title='Materials/Equipment Needed'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    placeholder='Any materials or equipment participants need'
                    inputContainerStyle={{
                        ...styles.inputContaier,
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={12}
                />

            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <AppButton
                    title='Approve'
                    textStyle={styles.textStyl}
                    style={{
                        ...styles.buttonStyl,
                        backgroundColor: '#3A992E'
                    }}
                    onPress={() => {
                        NavigationService.navigate('Notification');
                        Toast.show('Approved', Toast.SHORT)
                    }}
                />
                <AppButton
                    title='Update'
                    textStyle={styles.textStyl}
                    style={styles.buttonStyl}
                    onPress={() => {
                        NavigationService.navigate('Notification');
                        Toast.show('Updated Succesfully', Toast.SHORT)
                    }}
                />
                <AppButton
                    title='Reject'
                    textStyle={styles.textStyl}
                    style={{
                        ...styles.buttonStyl,
                        backgroundColor: '#B91313D5'
                    }}
                    onPress={() => {
                        NavigationService.navigate('Notification');
                        Toast.show('Rejected', Toast.SHORT)
                    }}
                />
            </View>

        </Container>
    )
}

export default AllTrainingNextNotify

const styles = StyleSheet.create({
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15)
    },
    inputContaier: {
        height: moderateScale(42),
        borderRadius: moderateScale(5)
    },
    mainContainer: {
        marginTop: moderateScale(8),
    },
    buttonStyl: {
        marginHorizontal: moderateScale(15),
        marginVertical: moderateScale(15),
        borderRadius: moderateScale(5),
        width: '24%'
    },
    radioButton: {
        borderWidth: moderateScale(1),
        marginRight: moderateScale(8)
    },
    radioTextView: {
        // flexDirection: 'row',
        // alignItems: 'center',
        marginVertical: moderateScale(10)
    },
    radioText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(8)
    },
    checkBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: moderateScale(10)
    },
    ansMainContainer: {
        width: '70%',
        marginLeft: moderateScale(8)
    }
})