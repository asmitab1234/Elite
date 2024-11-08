import { StyleSheet, View, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { AppButton, AppTextInput, Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import ImageCropPicker from 'react-native-image-crop-picker'
import DatePicker from 'react-native-date-picker'
import Toast from 'react-native-simple-toast';

const CirtificateModal = ({ setCirtificateModalVisible }) => {
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
                    Cirtificate
                </Text>
                <TouchableOpacity
                    onPress={() => setCirtificateModalVisible(false)}>
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

                <AppTextInput
                    title='Training Name'
                    placeholder='Training Name'
                    titleStyle={styles.headingText}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.fontStyl}
                />

                <AppTextInput
                    title='Completion Date'
                    placeholder='Completion Date'
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
                    Cirtificate Image
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
                    {/* <View
                        style={styles.pdfBox}>
                        <Icon
                            name='file-pdf'
                            type='FontAwesome5'
                            color={'#B82C2C'}
                            size={28}
                        />
                    </View> */}
                    <Text
                        style={{
                            ...styles.fontStyl,
                            marginTop: moderateScale(10)
                        }}>
                        Upload Cirtificate
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
                        setCirtificateModalVisible(false);
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

export default CirtificateModal

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