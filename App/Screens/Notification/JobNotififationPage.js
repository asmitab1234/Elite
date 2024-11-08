import { ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, Picker, RadioButton, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import DatePicker from 'react-native-date-picker'

const JobNotififationPage = () => {
    const colors = useTheme()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [dropdownValue, setDropdownValue] = useState('');
    const [dropdownValue1, setDropdownValue1] = useState('');
    const [dropdownValue2, setDropdownValue2] = useState('');
    const [dropdownValue3, setDropdownValue3] = useState('');
    const [selected, setSelected] = useState(false);
    const [selected1, setSelected1] = useState(false);
    const [Index, setIndex] = useState(0)
    const [Index1, setIndex1] = useState(0)
    const [Index2, setIndex2] = useState(0)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [Select, setSelect] = useState('')
    const onClick = () => {
        setSelect(!Select)
    }
    const levelArr = [
        {
            level: 'High'
        },
        {
            level: 'Medium'
        },
        {
            level: 'Low'
        },
    ]
    const PreferenceArr = [
        {
            level: 'External'
        },
        {
            level: 'Internal'
        },
        {
            level: 'Both'
        },
    ]
    const engagementArr = [
        {
            nature: 'Full Time'
        },
        {
            nature: 'Part Time'
        },
        {
            nature: 'Internship'
        },
        {
            nature: 'Contractual'
        },
    ]
    const buttonArr = [
        {
            color: '#2B572D',
            name: 'Approve'
        },
        {
            color: '#A33B28',
            name: 'Reject'
        },
        {
            color: '#2B572D',
            name: 'Defer'
        }
    ]
    return (
        <Container>
            <BackHeader title='Talent Intake Form' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal: moderateScale(15)
                }}>

                {/* <Text
                    style={styles.heading}>
                    Talent Intake Form
                </Text> */}
                <View
                    style={styles.switchEditBox}>
                    <View
                        style={styles.refferalSwitch}>
                        <Text
                            style={styles.switchStyl}>
                            Open to Refferal Hiring
                        </Text>
                        <Switch
                            trackColor={{ false: '#C4C4C4', true: '#F1CB4B', }}
                            thumbColor={isEnabled ? '#FFFFFF' : '#FAC823'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View
                        style={{
                            ...styles.editBox,
                            backgroundColor: colors.buttonColor
                        }}>
                        <Icon
                            name='edit'
                            type='Feather'
                            style={{
                                marginRight:moderateScale(5)
                            }}
                        />
                        <Text
                            style={styles.textStyl}>
                            Edit
                        </Text>
                    </View>
                </View>

                <AppTextInput
                    title='Job Title*'
                    placeholder='ex:React Native'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                />

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Department*
                </Text>

                <Picker
                    options={[
                        {
                            label: 'React',
                            value: 'React'
                        },
                        {
                            label: 'Node',
                            value: 'Node'
                        },
                        {
                            label: 'PHP',
                            value: 'PHP'
                        },

                    ]}
                    placeholder="Select Department"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue}
                    onValueChange={(val) => setDropdownValue(val)}
                    containerStyle={styles.pickerStyl}
                />

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Hiring Manager*
                </Text>

                <Picker
                    options={[
                        {
                            label: 'React',
                            value: 'React'
                        },
                        {
                            label: 'Node',
                            value: 'Node'
                        },
                        {
                            label: 'PHP',
                            value: 'PHP'
                        },

                    ]}
                    placeholder="Hiring Manager"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue1}
                    onValueChange={(val) => setDropdownValue1(val)}
                    containerStyle={styles.pickerStyl}
                />

                <AppTextInput
                    title='Location*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    placeholder='ex:Kolkata'
                />

                <AppTextInput
                    title='Lavel*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                />

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Is this a new Position*
                </Text>

                <View
                    style={styles.radioButtonView}>
                    <View
                        style={styles.radioText}>
                        <RadioButton
                            selected={selected}
                            onChange={(val) => setSelected(val)}
                            size={20}
                            containerStyle={{
                                borderWidth: moderateScale(2)
                            }}
                        />
                        <Text
                            style={{
                                ...styles.textStyl,
                                marginLeft: moderateScale(8),
                                fontSize: moderateScale(16)
                            }}>
                            Yes
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.radioText,
                            marginLeft: moderateScale(35)
                        }}>
                        <RadioButton
                            selected={selected}
                            onChange={(val) => setSelected(val)}
                            size={20}
                            containerStyle={{
                                borderWidth: moderateScale(2)
                            }}
                        />
                        <Text
                            style={{
                                ...styles.textStyl,
                                marginLeft: moderateScale(8),
                                fontSize: moderateScale(16)
                            }}>
                            No
                        </Text>
                    </View>
                </View>

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Is this a Temporary Position*
                </Text>

                <View
                    style={styles.radioButtonView}>
                    <View
                        style={styles.radioText}>
                        <RadioButton
                            selected={selected1}
                            onChange={(val) => setSelected1(val)}
                            size={20}
                            containerStyle={{
                                borderWidth: moderateScale(2)
                            }}
                        />
                        <Text
                            style={{
                                ...styles.textStyl,
                                marginLeft: moderateScale(8),
                                fontSize: moderateScale(16)
                            }}>
                            Yes
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.radioText,
                            marginLeft: moderateScale(35)
                        }}>
                        <RadioButton
                            selected={selected1}
                            onChange={(val) => setSelected1(val)}
                            size={20}
                            containerStyle={{
                                borderWidth: moderateScale(2)
                            }}
                        />
                        <Text
                            style={{
                                ...styles.textStyl,
                                marginLeft: moderateScale(8),
                                fontSize: moderateScale(16)
                            }}>
                            No
                        </Text>
                    </View>
                </View>

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Is this a new Position*
                </Text>

                <View
                    style={styles.levelMap}>
                    {levelArr.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                ...styles.levelBox,
                                backgroundColor: index == Index ? '#F5CD54' : 'transparent',
                                borderWidth: index == Index ? 0 : moderateScale(1),
                                borderColor: index == Index ? 'transparent' : '#F5CD54'
                            }}
                            onPress={() => setIndex(index)}
                        >
                            <Text
                                style={{
                                    ...styles.textStyl,
                                    fontSize: moderateScale(12)
                                }}>
                                {item.level}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Candidate Sourcing Preference*
                </Text>

                <View
                    style={styles.levelMap}>
                    {PreferenceArr.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                ...styles.levelBox,
                                backgroundColor: index == Index1 ? '#F5CD54' : 'transparent',
                                borderWidth: index == Index1 ? 0 : moderateScale(1),
                                borderColor: index == Index1 ? 'transparent' : '#F5CD54'
                            }}
                            onPress={() => setIndex1(index)}
                        >
                            <Text
                                style={{
                                    ...styles.textStyl,
                                    fontSize: moderateScale(12)
                                }}>
                                {item.level}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text
                    style={styles.detailsText}>
                    Details
                </Text>

                <AppTextInput
                    title='Reason for Hire*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                />

                <AppTextInput
                    title='Position Description*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                />

                <AppTextInput
                    title='Interviewer Email Id*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    title='Alternative Email'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    keyboardType='email-address'
                />

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Nature of Engagement*
                </Text>

                <View
                    style={styles.levelMap}>
                    {engagementArr.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                ...styles.levelBox,
                                backgroundColor: index == Index2 ? '#F5CD54' : 'transparent',
                                borderWidth: index == Index2 ? 0 : moderateScale(1),
                                borderColor: index == Index2 ? 'transparent' : '#F5CD54',
                                width: moderateScale(71)
                            }}
                            onPress={() => setIndex2(index)}
                        >
                            <Text
                                style={{
                                    ...styles.textStyl,
                                    fontSize: moderateScale(11)
                                }}>
                                {item.nature}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <AppTextInput
                    title='Skills*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    placeholder='ex:React,Js'
                />

                <AppTextInput
                    title='No. of Hire*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    keyboardType='number-pad'
                    numberOfLines={1}
                    placeholder='2'
                />

                <AppTextInput
                    title='Responsibilities*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                        height: moderateScale(100)
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={10}
                />

                <AppTextInput
                    title='Minimum Qualification*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    keyboardType='number-pad'
                    numberOfLines={10}
                />

                <AppTextInput
                    title='Additional Qualification'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    keyboardType='number-pad'
                    numberOfLines={10}
                />

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Experience(No. of Years)*
                </Text>

                <View
                    style={styles.formToView}>
                    <View
                        style={styles.TextPicker}>
                        <Text
                            style={styles.textStyl}>
                            From
                        </Text>
                        <Picker
                            options={[
                                {
                                    label: '1',
                                    value: '1'
                                },
                                {
                                    label: '2',
                                    value: '2'
                                },
                                {
                                    label: '3',
                                    value: '3'
                                },

                            ]}
                            placeholder="Select"
                            textStyle={{
                                fontSize: 15
                            }}
                            selectedValue={dropdownValue2}
                            onValueChange={(val) => setDropdownValue2(val)}
                            containerStyle={{
                                ...styles.pickerStyl,
                                width: '49%',
                                marginLeft: moderateScale(5),
                                height: moderateScale(35)
                            }}
                        />
                    </View>
                    <View
                        style={styles.TextPicker}>
                        <Text
                            style={styles.textStyl}>
                            To
                        </Text>
                        <Picker
                            options={[
                                {
                                    label: '1',
                                    value: '1'
                                },
                                {
                                    label: '2',
                                    value: '2'
                                },
                                {
                                    label: '3',
                                    value: '3'
                                },

                            ]}
                            placeholder="Select"
                            textStyle={{
                                fontSize: 15
                            }}
                            selectedValue={dropdownValue3}
                            onValueChange={(val) => setDropdownValue3(val)}
                            containerStyle={{
                                ...styles.pickerStyl,
                                width: '53%',
                                marginLeft: moderateScale(5),
                                height: moderateScale(35)
                            }}
                        />
                    </View>
                </View>

                <AppTextInput
                    title='Competencies and Traits*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                        height: moderateScale(100)
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={10}
                />

                <AppTextInput
                    title='Inclusion Considerations*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                        height: moderateScale(100)
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={10}
                />

                <AppTextInput
                    title='Avg. Salary for the Position*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    keyboardType='number-pad'
                    numberOfLines={1}
                />

                <AppTextInput
                    title='By When*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
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

                <AppTextInput
                    title='Avg. Salary for the Position*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContaier}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={1}
                />

                <AppTextInput
                    title='Interview Process*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={10}
                />

                <AppTextInput
                    title='Evaluation Criteria*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                        height: moderateScale(100)
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={10}
                />

                <AppTextInput
                    title='Sample Profile From Job Board Provided Link*'
                    inputStyle={styles.fontStyl}
                    titleStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContaier,
                    }}
                    mainContainerStyle={{
                        ...styles.mainContainer,
                    }}
                    numberOfLines={10}
                />

                <View
                    style={styles.buttonMap}>
                    {buttonArr.map((item, index) => (
                        <AppButton
                            title={item.name}
                            key={index}
                            style={{
                                ...styles.buttonsStyl,
                                backgroundColor: item.color
                            }}
                            textStyle={styles.buttonText}
                            onPress={() => setSelect(!Select)}
                        />
                    ))}
                </View>

                {Select ?
                    <View>
                        <AppTextInput
                            title='Advertising and Sourcing*'
                            inputStyle={styles.fontStyl}
                            titleStyle={styles.textStyl}
                            inputContainerStyle={{
                                ...styles.inputContaier,
                                height: moderateScale(100)
                            }}
                            mainContainerStyle={{
                                ...styles.mainContainer,
                            }}
                            numberOfLines={10}
                        />
                        <AppTextInput
                            title='Additional Comments/Notes*'
                            inputStyle={styles.fontStyl}
                            titleStyle={styles.textStyl}
                            inputContainerStyle={{
                                ...styles.inputContaier,
                                height: moderateScale(100)
                            }}
                            mainContainerStyle={{
                                ...styles.mainContainer,
                            }}
                            numberOfLines={10}
                        />
                        <AppTextInput
                            title='Approvals*'
                            inputStyle={styles.fontStyl}
                            titleStyle={styles.textStyl}
                            inputContainerStyle={{
                                ...styles.inputContaier,
                                height: moderateScale(100)
                            }}
                            mainContainerStyle={{
                                ...styles.mainContainer,
                            }}
                            numberOfLines={10}
                        />
                    </View>
                    :
                    null
                }

                <AppButton
                    title='Submit to Admin'
                    style={styles.buttonStyl}
                    textStyle={styles.titleStyl}
                />

            </ScrollView>
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

export default JobNotififationPage

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(20),
        textAlign: 'center'
    },
    refferalSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        // marginTop: moderateScale(10)
    },
    switchStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(14)
    },
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
    pickerStyl: {
        borderRadius: moderateScale(5),
        height: moderateScale(47),
        justifyContent: 'center',
        marginTop: moderateScale(5)
    },
    radioButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(10)
    },
    radioText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    levelMap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    levelBox: {
        borderRadius: moderateScale(5),
        height: moderateScale(30),
        width: moderateScale(80),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(10),
        marginTop: moderateScale(10)
    },
    detailsText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(16),
        marginTop: moderateScale(40)
    },
    formToView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-btween',
        marginTop: moderateScale(8)
    },
    TextPicker: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonStyl: {
        marginHorizontal: 0,
        borderRadius: moderateScale(5),
        marginVertical: moderateScale(15),
        height: moderateScale(44)
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    },
    buttonMap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonsStyl: {
        borderRadius: moderateScale(5),
        padding: moderateScale(15),
        marginVertical: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
    },
    switchEditBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    editBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:moderateScale(15),
        height:moderateScale(35),
        borderRadius:moderateScale(5)
    }
})