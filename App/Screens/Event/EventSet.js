import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, Picker, RadioButton, Text, useTheme } from 'react-native-basic-elements';
import DatePicker from 'react-native-date-picker';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import ImageCropPicker from 'react-native-image-crop-picker';
import AuthService from '../../Services/Auth';
import Toast from 'react-native-simple-toast';
import EventService from '../../Services/EventService';
import moment from 'moment';

const EventSet = () => {
    const colors = useTheme();

    const [open, setOpen] = useState(false);
    const [openTime, setOpenTime] = useState(false);

    const highlightedOptions = [{ option: 'Yes' }, { option: 'No' }];
    const [eventTypeData, setEventTypeData] = useState([]);
    const [affinityGroupData, setAffinityGroupData] = useState([]);
    const [invitationData, setInvitationData] = useState([]);

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [shareEvent, setShareEvent] = useState(false);
    const [eventTypeSelected, setEventTypeSelected] = useState('');
    const [invitationSelected, setInvitationSelected] = useState([]);
    const [affinityGroupSelected, setAffinityGroupSelected] = useState('');
    const [isHighlightedEvent, setIsHighlightedEvent] = useState('');
    const [eventDetails, setEventDetails] = useState('');
    const [uploadedImage, setUploadedImage] = useState('');
    useEffect(() => {
        fetchEventTypes();
        fetchInvitations();
        fetchAffinityGroups();
    }, []);

    const fetchEventTypes = async () => {
        try {
            const result = await EventService.Get_Event_Type();
            if (result && result.status) {
                setEventTypeData(result.data);
            }
        } catch (err) {
            console.error('Error fetching event types:', err);
        }
    };

    const fetchAffinityGroups = async () => {
        try {
            const result = await EventService.Get_Afinity_Group();
            if (result && result.status) {
                setAffinityGroupData(result.data);
            }
        } catch (err) {
            console.error('Error fetching affinity groups:', err);
        }
    };

    const fetchInvitations = async () => {
        try {
            const result = await EventService.Get_Invitation();
            if (result && result.status) {
                setInvitationData(result.data);
            }
        } catch (err) {
            console.error('Error fetching invitations:', err);
        }
    };

    const handleImageUpload = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(async (data) => {
            try {
                const result = await AuthService.uploadProfileImage(data);
                if (result && result.status) {
                    Toast.show('Image uploaded successfully', Toast.LONG);
                    setUploadedImage(result.image);
                }
            } catch (err) {
                console.error('Error uploading image:', err);
            }
        });
    };

    const handleSubmit = async () => {
        if (name == '') {
            Toast.show('Please Add Event Name', Toast.SHORT);
            return false;
        }
        if (eventTypeSelected == '') {
            Toast.show('Please Select Event Type', Toast.SHORT);
            return false;
        }
        if (shareEvent == '') {
            Toast.show('Please Select Share Event', Toast.SHORT);
            return false;
        }
        if (isHighlightedEvent == '') {
            Toast.show('Please Select Highlighted Event', Toast.SHORT);
            return false;
        }
        if (eventDetails == '') {
            Toast.show('Please Write Event Details', Toast.SHORT);
            return false;
        }
        if (uploadedImage == '') {
            Toast.show('Please Upload Event Image ', Toast.SHORT);
            return false;
        }


        const eventData = {
            eventName: name,
            image: uploadedImage,
            eventTypeId: eventTypeSelected,
            eventDate: moment(date).format('YYYY-MM-DD'),
            isHighLighted: isHighlightedEvent,
            postType: shareEvent,
            // postType: "private",
            affinityGroupId: affinityGroupSelected,
            notes: eventDetails,
            eventTime: moment(time).format('HH:MM'),
            addEmployee: invitationSelected,
        };
        console.log("eventData-------------->>>>>>>>>>>>>>", eventData)
        try {
            const result = await EventService.Add_Event(eventData);
            console.log("result-------------->>>>>>>>>>>>>>", result)
            if (result && result.status === true) {
                Toast.show('Event added successfully', Toast.LONG);
                NavigationService.navigate('CreateEvent');
            }
        } catch (err) {
            console.error('Error adding event:', err);
            Toast.show('There is already an event on this date and time!', Toast.LONG);
        }
    };

    return (
        <Container style={{ flex: 1 }}>
            <BackHeader title="Set Event" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                <AppTextInput
                    title="Event Name"
                    titleStyle={styles.titleStyle}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputStyle}
                    mainContainerStyle={styles.inputBox}
                    onChangeText={setName}
                />

                <AppTextInput
                    title="Event Date"
                    titleStyle={styles.titleStyle}
                    inputContainerStyle={styles.inputContainer}
                    value={moment(date).format('MMM Do YY')}
                    inputStyle={styles.inputStyle}
                    mainContainerStyle={styles.inputBox}
                    editable={false}
                    rightAction={
                        <Pressable onPress={() => setOpen(true)}>
                            <Icon name="calendar" type="AntDesign" />
                        </Pressable>
                    }
                />

                <AppTextInput
                    title="Start Time"
                    titleStyle={styles.titleStyle}
                    inputContainerStyle={styles.inputContainer}
                    value={moment(time).format('h:mm:ss a')}
                    inputStyle={styles.inputStyle}
                    mainContainerStyle={styles.inputBox}
                    editable={false}
                    rightAction={
                        <Pressable onPress={() => setOpenTime(true)}>
                            <Icon name="clockcircleo" type="AntDesign" />
                        </Pressable>
                    }
                />

                <Text style={{ ...styles.titleStyle, marginTop: moderateScale(8) }}>
                    Types Of Event
                </Text>

                <Picker
                    options={eventTypeData}
                    labelKey="typeName"
                    valueKey="_id"
                    placeholder="Event Type"
                    textStyle={styles.pickerText}
                    selectedValue={eventTypeSelected}
                    onValueChange={setEventTypeSelected}
                    dropdownIconColor={colors.primaryFontColor}
                    containerStyle={styles.picker}
                />

                <Text style={{ ...styles.titleStyle, marginTop: moderateScale(8) }}>
                    Share Your Event
                </Text>

                <Picker
                    options={[
                        { label: 'Publicly', value: 'public' },
                        { label: 'Affinity Group', value: 'private' },
                    ]}
                    placeholder="Share Your Event"
                    textStyle={styles.pickerText}
                    selectedValue={shareEvent}
                    onValueChange={setShareEvent}
                    dropdownIconColor={colors.primaryFontColor}
                    containerStyle={styles.picker}
                />

                {shareEvent === 'public' && (
                    <View>
                        <Text style={{ ...styles.titleStyle, marginTop: moderateScale(8) }}>
                            Invitation
                        </Text>

                        <Picker.Multi
                            options={invitationData}
                            valueKey="_id"
                            labelKey="userName"
                            returnDataType={(item) => item?._id}
                            onValueChange={setInvitationSelected}
                            selectedValues={invitationSelected}
                            inputContainerStyle={styles.multiPicker}
                        />
                    </View>
                )}

                {shareEvent === 'private' && (
                    <View>
                        <Text style={{ ...styles.titleStyle, marginTop: moderateScale(8) }}>
                            Affinity Groups
                        </Text>
                        <Picker
                            options={affinityGroupData}
                            valueKey="_id"
                            labelKey="groupName"
                            placeholder="Select Affinity Groups"
                            textStyle={styles.pickerText}
                            selectedValue={affinityGroupSelected}
                            onValueChange={setAffinityGroupSelected}
                            dropdownIconColor={colors.primaryFontColor}
                            containerStyle={styles.picker}
                        />
                    </View>
                )}

                <Text style={{ ...styles.titleStyle, marginTop: moderateScale(8) }}>
                    Is this event highlighted?
                </Text>
                <View style={styles.highlightedContainer}>
                    {highlightedOptions.map((item, index) => (
                        <View key={index} style={styles.highlightedOption}>
                            <Text style={styles.highlightedText}>{item.option}</Text>
                            <RadioButton
                                selected={item.option === isHighlightedEvent}
                                onChange={() => setIsHighlightedEvent(item.option)}
                                size={20}
                                activeColor="#80001E"
                                containerStyle={styles.radioButtonContainer}
                            />
                        </View>
                    ))}
                </View>

                <AppTextInput
                    title="Event Details"
                    titleStyle={styles.titleStyle}
                    inputContainerStyle={{ ...styles.inputContainer, height: moderateScale(100) }}
                    inputStyle={styles.inputStyle}
                    mainContainerStyle={styles.inputBox}
                    onChangeText={setEventDetails}
                    multiline
                />

                <Text style={{ ...styles.titleStyle, marginTop: moderateScale(8) }}>
                    Image Upload *
                </Text>
                {uploadedImage ?
                    <View style={styles.uploadContainer}>
                        <Image source={{ uri: uploadedImage }} style={{ height: moderateScale(100), width: "100%", resizeMode: "cover" }} />
                    </View>
                    :
                    <TouchableOpacity style={styles.uploadContainer} onPress={handleImageUpload}>
                        <Icon name="upload" type="Entypo" />
                        <Text style={styles.documentText}>Upload Photo</Text>
                        <Text style={styles.documentText}>Drop Files here to Upload</Text>
                    </TouchableOpacity>
                }
                <AppButton
                    onPress={handleSubmit}
                    title="Submit"
                    textStyle={styles.titleStyle}
                    style={styles.buttonStyle}
                />
            </ScrollView>

            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                }}
                onCancel={() => setOpen(false)}
                mode="date"
            />
            <DatePicker
                modal
                open={openTime}
                date={time}
                onConfirm={(time) => {
                    setOpenTime(false);
                    setTime(time);
                }}
                onCancel={() => setOpenTime(false)}
                mode="time"
                is24hourSource="device"
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        marginHorizontal: moderateScale(15),
    },
    titleStyle: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    },
    inputContainer: {
        height: moderateScale(45),
        borderRadius: moderateScale(5),
    },
    inputStyle: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
    },
    inputBox: {
        marginTop: moderateScale(10),
    },
    picker: {
        height: moderateScale(43),
        justifyContent: 'center',
        borderRadius: moderateScale(5),
    },
    pickerText: {
        fontSize: 15,
    },
    multiPicker: {
        elevation: 1,
        borderWidth: 0,
        borderRadius: moderateScale(5)
    },
    highlightedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(10),
    },
    highlightedOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    highlightedText: {
        fontFamily: FONTS.Roboto.regular,
        marginLeft: moderateScale(8),
    },
    radioButtonContainer: {
        elevation: 5,
        backgroundColor: '#fff',
        marginHorizontal: moderateScale(10),
    },
    uploadContainer: {
        width: '100%',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(8),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dotted',
        padding: moderateScale(25),
    },
    documentText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(8),
    },
    buttonStyle: {
        marginVertical: moderateScale(15),
        marginHorizontal: 0,
        borderRadius: moderateScale(5),
        height: moderateScale(45),
    },
});

export default EventSet;
