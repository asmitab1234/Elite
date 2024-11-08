import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, Picker, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import ImageCropPicker from 'react-native-image-crop-picker'
import DatePicker from 'react-native-date-picker'
import NavigationService from '../../Services/Navigation'

const TrainingAddPage = () => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('');
    const [dropdownValue1, setDropdownValue1] = useState('');
    const [dropdownValue2, setDropdownValue2] = useState('');
    const pick = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    };
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [date1, setDate1] = useState(new Date())
    const [open1, setOpen1] = useState(false)
    return (
        <Container>
            <BackHeader title='Create New Training' />
            <ScrollView
                showsVerticalScrollIndicatort={false}
                contentContainerStyle={{
                    marginHorizontal: moderateScale(15)
                }}>

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Types of Traning
                </Text>

                <Picker
                    options={[
                        {
                            label: 'virtual',
                            value: 'virtual'
                        },
                        {
                            label: 'physically',
                            value: 'physically'
                        },

                    ]}
                    placeholder="Select Types"
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
                    Types of Category
                </Text>

                <Picker
                    options={[
                        {
                            label: 'Mandatory training',
                            value: 'Mandatory training'
                        },
                        {
                            label: 'Skill development training',
                            value: 'Skill development training'
                        },
                        {
                            label: 'Non technical',
                            value: 'Non technical'
                        },

                    ]}
                    placeholder="Select Training"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue1}
                    onValueChange={(val) => setDropdownValue1(val)}
                    containerStyle={styles.pickerStyl}
                />

                <AppTextInput
                    title='Trainning Title*'
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
                    title='Language*'
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

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Thumbnail Image*
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
                        Upload Photo
                    </Text>
                    <Text
                        style={styles.document}>
                        Drop Files here to Upload
                    </Text>
                </TouchableOpacity>

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(10),
                        fontFamily: FONTS.Roboto.bold
                    }}>
                    Trainer Name
                </Text>

                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(5)
                    }}>
                    Internal Trainer name*
                </Text>
                <Picker
                    options={[
                        {
                            label: 'Item 1',
                            value: 'Item 1'
                        },
                        {
                            label: 'Item 2',
                            value: 'Item 2'
                        },
                        {
                            label: 'Item 3',
                            value: 'Item 3'
                        },

                    ]}
                    placeholder="Select Training"
                    textStyle={{
                        fontSize: 15
                    }}
                    selectedValue={dropdownValue1}
                    onValueChange={(val) => setDropdownValue1(val)}
                    containerStyle={styles.pickerStyl}
                />

                <AppTextInput
                    title='External Trainer Name'
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
                    title='Training Description*'
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

                {
                    dropdownValue == 'virtual' ?
                        <View>
                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(10),
                                    fontFamily: FONTS.Roboto.bold
                                }}>
                                Upload Video
                            </Text>

                            <AppTextInput
                                title='Video Title'
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

                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(5)
                                }}>
                                Upload video/s*
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
                                    Upload Videos
                                </Text>
                                <Text
                                    style={styles.document}>
                                    Drop Files here to Upload
                                </Text>
                            </TouchableOpacity>

                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(10),
                                    fontFamily: FONTS.Roboto.bold
                                }}>
                                What is in the training
                            </Text>

                            <AppTextInput
                                title='Duration Of The Training'
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
                                title='What Will You Learn'
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

                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(5)
                                }}>
                                Upload Document(s)*
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
                                    Upload Documents
                                </Text>
                                <Text
                                    style={styles.document}>
                                    Drop Files here to Upload
                                </Text>
                            </TouchableOpacity>

                            <AppTextInput
                                title='Training Price'
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
                                title='Add Url'
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

                            <View
                                style={{
                                    ...styles.addView,
                                    backgroundColor: colors.buttonColor
                                }}>
                                <Icon
                                    name='plus'
                                    type='AntDesign'
                                />
                            </View>

                        </View>
                        :
                        null
                }

                {
                    dropdownValue == 'physically' ?
                        <View>

                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(10),
                                    fontFamily: FONTS.Roboto.bold
                                }}>
                                Mentor/Trainer(s) name*
                            </Text>
                            {/* 
                            <AppTextInput
                                title='Internal Trainer(s) name*'
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

                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(5)
                                }}>
                                Internal Trainer(s) name*
                            </Text>
                            <Picker
                                options={[
                                    {
                                        label: 'Item 1',
                                        value: 'Item 1'
                                    },
                                    {
                                        label: 'Item 2',
                                        value: 'Item 2'
                                    },
                                    {
                                        label: 'Item 3',
                                        value: 'Item 3'
                                    },

                                ]}
                                placeholder="Select Training"
                                textStyle={{
                                    fontSize: 15
                                }}
                                selectedValue={dropdownValue1}
                                onValueChange={(val) => setDropdownValue1(val)}
                                containerStyle={styles.pickerStyl}
                            />

                            <AppTextInput
                                title='External Trainer(s) name*'
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

                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(10),
                                    fontFamily: FONTS.Roboto.bold
                                }}>
                                Place & Time
                            </Text>

                            <AppTextInput
                                title='Building Name / number'
                                inputStyle={styles.fontStyl}
                                titleStyle={styles.textStyl}
                                inputContainerStyle={{
                                    ...styles.inputContaier,
                                }}
                                mainContainerStyle={{
                                    ...styles.mainContainer,
                                }}
                                numberOfLines={1}
                                keyboardType='number-pad'
                            />

                            <AppTextInput
                                title='Room number'
                                inputStyle={styles.fontStyl}
                                titleStyle={styles.textStyl}
                                inputContainerStyle={{
                                    ...styles.inputContaier,
                                }}
                                mainContainerStyle={{
                                    ...styles.mainContainer,
                                }}
                                numberOfLines={1}
                                keyboardType='number-pad'
                            />

                            <AppTextInput
                                title='Start Date*'
                                inputStyle={styles.fontStyl}
                                titleStyle={styles.textStyl}
                                inputContainerStyle={styles.inputContaier}
                                mainContainerStyle={{
                                    ...styles.mainContainer,
                                }}
                                placeholder='DD-MM-YY'
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
                                title='Start Time*'
                                inputStyle={styles.fontStyl}
                                titleStyle={styles.textStyl}
                                inputContainerStyle={styles.inputContaier}
                                mainContainerStyle={{
                                    ...styles.mainContainer,
                                }}
                                rightAction={
                                    <TouchableOpacity
                                        onPress={() => setOpen1(true)}>
                                        <Icon
                                            name='clockcircleo'
                                            type='AntDesign'
                                        />
                                    </TouchableOpacity>
                                }
                            />

                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(10),
                                    fontFamily: FONTS.Roboto.bold
                                }}>
                                What is in the training
                            </Text>

                            <AppTextInput
                                title='Duration Of The Training'
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
                                title='What Will You Learn'
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

                            <Text
                                style={{
                                    ...styles.textStyl,
                                    marginTop: moderateScale(5)
                                }}>
                                Upload Document(s)*
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
                                    Upload Documents
                                </Text>
                                <Text
                                    style={styles.document}>
                                    Drop Files here to Upload
                                </Text>
                            </TouchableOpacity>

                            <View
                                style={{
                                    ...styles.addView,
                                    backgroundColor: colors.buttonColor
                                }}>
                                <Icon
                                    name='plus'
                                    type='AntDesign'
                                />
                            </View>

                        </View>
                        :
                        null
                }

                <AppButton
                    title='Next'
                    textStyle={styles.textStyl}
                    style={styles.buttonStyl}
                    onPress={() => NavigationService.navigate('TrainingNextPage')}
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
            <DatePicker
                modal
                open={open1}
                date={date1}
                onConfirm={(date) => {
                    setOpen1(false)
                    setDate1(date1)
                }}
                onCancel={() => {
                    setOpen1(false)
                }}
                mode='time'
            />
        </Container>
    )
}

export default TrainingAddPage

const styles = StyleSheet.create({
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
    pickerStyl: {
        borderRadius: moderateScale(5),
        height: moderateScale(47),
        justifyContent: 'center',
        marginTop: moderateScale(5)
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
        marginHorizontal: 0,
        marginVertical: moderateScale(15),
        borderRadius: moderateScale(5)
    },
    addView: {
        padding: moderateScale(10),
        borderRadius: moderateScale(20),
        alignSelf: 'flex-end',
        marginTop: moderateScale(10)
    }
})