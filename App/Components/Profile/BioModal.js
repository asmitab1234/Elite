import { StyleSheet, View, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { AppButton, AppTextInput, Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import ImageCropPicker from 'react-native-image-crop-picker'
import DatePicker from 'react-native-date-picker'
import Toast from 'react-native-simple-toast';

const BioModal = ({ setBioModalVisible }) => {
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

    return (
        <View
            style={styles.modalStyl}>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: moderateScale(10)
                }}>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.bold,
                        fontSize: moderateScale(20)
                    }}>
                    Bio
                </Text>
                <TouchableOpacity
                    onPress={() => setBioModalVisible(false)}>
                    <Icon
                        name='close'
                        type='AntDesign'
                        size={26}
                        color={'#B41C1C'}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}>

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(8)
                    }}>
                    Bio
                </Text>

                {/* <AppTextInput
                    placeholder='Introduction'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                /> */}

                <AppTextInput
                    placeholder='Current Position'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                />

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(5),
                        alignSelf: 'flex-end'
                    }}>
                    <Icon
                        name='plus'
                        type='AntDesign'
                        style={{
                            marginRight: moderateScale(8)
                        }}
                    />
                    <Text
                        style={styles.fontStyl}>
                        Add More
                    </Text>
                </TouchableOpacity>

                <AppTextInput
                    placeholder='Industry'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                />

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(8)
                    }}>
                    Date Of Birth
                </Text>

                <AppTextInput
                    placeholder='DOB'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                    rightAction={
                        <Pressable
                            onPress={() => setOpen(true)}>
                            <Icon
                                name='calendar'
                                type='AntDesign'
                            />
                        </Pressable>
                    }
                />

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(8)
                    }}>
                    Address
                </Text>

                <AppTextInput
                    placeholder='Address'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                />

                <AppTextInput
                    placeholder='City'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                />

                <AppTextInput
                    placeholder='State'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                />

                <AppTextInput
                    placeholder='Country'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                />

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(8)
                    }}>
                    Contact Information
                </Text>

                <AppTextInput
                    placeholder='Phone'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                />

                <AppTextInput
                    placeholder='Email'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                />

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(8)
                    }}>
                    Introduction
                </Text>

                <AppTextInput
                    placeholder='Introduction'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                // mainContainerStyle={{
                //     marginTop: moderateScale(5)
                // }}
                />

                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(8)
                    }}>
                    Profile URL
                </Text>

                <AppTextInput
                    placeholder='URL'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                // mainContainerStyle={{
                //     marginTop: moderateScale(5)
                // }}
                />
                <Text
                    style={{
                        ...styles.headingText,
                        marginTop: moderateScale(8)
                    }}>
                    Upload CV
                </Text>

                <TouchableOpacity
                    style={{
                        ...styles.back_view,
                    }}
                    onPress={() => pick()}>
                    <Icon
                        name='upload'
                        type='Entypo'
                    />
                    <View
                        style={styles.pdfBox}>
                        <Icon
                            name='file-pdf'
                            type='FontAwesome5'
                            color={'#B82C2C'}
                            size={28}
                        />
                    </View>
                    <Text
                        style={{
                            ...styles.fontStyl,
                            marginTop: moderateScale(10)
                        }}>
                        Upload Document
                    </Text>
                    <Text
                        style={styles.fontStyl}>
                        Drop Files here to Upload
                    </Text>
                </TouchableOpacity>

                <AppButton
                    title='Submit'
                    style={styles.buttonStyl}
                    textStyle={styles.headingText}
                    onPress={() => {
                        setBioModalVisible(false);
                        Toast.show('Submit Successfully', Toast.SHORT)
                    }}
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
        </View>
    )
}

export default BioModal

const styles = StyleSheet.create({
    modalStyl: {
        // height: height / 2,
        // width: width,
        borderRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        padding: moderateScale(20),
    },
    headingText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    inputContainerStyle: {
        borderRadius: moderateScale(5),
        height: moderateScale(45)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        marginHorizontal: 0,
        marginTop: moderateScale(20)
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
    pdfBox: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(10)
    }
})