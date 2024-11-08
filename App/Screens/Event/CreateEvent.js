import React, { useEffect, useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Container, Icon, Picker, Text, useTheme } from 'react-native-basic-elements';
import { Calendar, CalendarHeaderForMonthView, getDatesInWeek } from 'react-native-big-calendar';
import moment from 'moment';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import dayjs from 'dayjs';
import EventService from '../../Services/EventService';

function getNextDate(inputDate) {
    let date = new Date(inputDate);
    date.setDate(date.getDate() + 1);
    return date;
}

function getNextMonth(inputDate) {
    let date = new Date(inputDate);
    date.setMonth(date.getMonth() + 1);
    return date;
}

function getNextWeek(inputDate) {
    let date = new Date(inputDate);
    date.setDate(date.getDate() + 7);
    return date;
}

function getPreviousDay(inputDate) {
    let date = new Date(inputDate);
    date.setDate(date.getDate() - 1);
    return date;
}

function getPreviousWeek(inputDate) {
    let date = new Date(inputDate);
    date.setDate(date.getDate() - 7);
    return date;
}

function getPreviousMonth(inputDate) {
    let date = new Date(inputDate);
    date.setMonth(date.getMonth() - 1);
    return date;
}

const CreateEvent = () => {
    const color = useTheme();
    const [dayType, setDayType] = useState("month");
    const [dateData, setDateData] = useState(new Date());
    const [Event, setEvent] = useState([]);

    useEffect(() => {
        GetEvent();
    }, []);

    const GetEvent = async () => {
        try {
            const result = await EventService.Get_Event();
            if (result && result.status) {
                setEvent(result.data);
            }
        } catch (err) {
            console.error('Error fetching event types:', err);
        }
    };

    const events = Event.map(event => ({
        title: event.eventName,
        start: new Date(event.eventDate),
        end: new Date(event.eventDate), // Adjust end time if available
    }));

    function nextFun() {
        if (dayType === "month") {
            setDateData(getNextMonth(dateData));
        } else if (dayType === "week") {
            setDateData(getNextWeek(dateData));
        } else {
            setDateData(getNextDate(dateData));
        }
    }

    function backFun() {
        if (dayType === "month") {
            setDateData(getPreviousMonth(dateData));
        } else if (dayType === "week") {
            setDateData(getPreviousWeek(dateData));
        } else {
            setDateData(getPreviousDay(dateData));
        }
    }

    const selectedPicker = useMemo(() => (
        <View style={{ width: "90%", alignSelf: "center" }}>
            <Picker
                placeholder='Select Date Type'
                selectedValue={dayType}
                onValueChange={setDayType}
                style={{ justifyContent: "center" }}
                labelKey='name'
                valueKey='name'
                options={[
                    { name: "month" },
                    { name: "week" },
                    { name: "day" },
                ]}
            />
        </View>
    ), [dayType]);

    const renderHeader = ({ style, locale, weekStartsOn }) => {
        const dates = getDatesInWeek(new Date(), weekStartsOn, locale);
        const todayWeekNum = dayjs().day();

        return (
            <View
                style={[
                    {
                        borderBottomWidth: 1,
                        borderColor: '#f5f5f5',
                        flexDirection: 'row',
                        marginTop: 10
                    },
                    style,
                ]}
            >
                {dates.map((date) => (
                    <View style={{ flex: 1, paddingTop: 2 }} key={date.toISOString()}>
                        <View style={{ height: 30 }}>
                            <Text
                                style={[
                                    {
                                        color:
                                            todayWeekNum === date.day() ?
                                                'rgb(66, 133, 244)'
                                                :
                                                date.day() == 0 ?
                                                    'red'
                                                    :
                                                    '#424242',
                                        textAlign: 'center',
                                        fontFamily: FONTS.Roboto.regular,
                                        fontSize: moderateScale(11)
                                    },
                                ]}
                            >
                                {date.format('ddd')}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        );
    };

    const filteredEvents = useMemo(() => {
        if (dayType === 'day') {
            return events.filter(event =>
                moment(event.start).isSame(dateData, 'day')
            );
        } else if (dayType === 'week') {
            return events.filter(event =>
                moment(event.start).isSame(dateData, 'week')
            );
        } else if (dayType === 'month') {
            return events.filter(event =>
                moment(event.start).isSame(dateData, 'month')
            );
        }
    }, [dayType, dateData, events]);

    return (
        <Container>
            <BackHeader title='Event' />
            {selectedPicker}
            <View
                style={{
                    marginVertical: 15,
                    width: "90%",
                    alignSelf: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                <Pressable
                    onPress={backFun}
                    style={styles.leftRihghtBtn}>
                    <Icon type='AntDesign' name='left' color={COLORS.primaryThemeColor} size={20} />
                </Pressable>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.medium,
                        fontSize: moderateScale(13)
                    }}
                >
                    {
                        dayType === "month" ?
                            moment(dateData).format("MMMM YYYY")
                            :
                            dayType === "week" ? `${moment(dateData).format('MMMM')} ${moment(dateData).startOf('week').format('DD')}-${moment(dateData).endOf('week').format('DD')}`
                                :
                                moment(dateData).format('Do MMMM YYYY')
                    }
                </Text>
                <Pressable
                    onPress={nextFun}
                    style={styles.leftRihghtBtn}>
                    <Icon type='AntDesign' name='right' color={COLORS.primaryThemeColor} size={20} />
                </Pressable>
            </View>
            <Calendar
                mode={dayType}
                events={filteredEvents}
                date={dateData}
                height={600}
                onPressCell={() => NavigationService.navigate('EventSet')}
                onPressEvent={() => NavigationService.navigate('Event')}
                calendarCellTextStyle={{
                    fontFamily: FONTS.Roboto.regular,
                    fontSize: moderateScale(11)
                }}
                renderCustomDateForMonth={(date) => {
                    const dayEvents = events.filter(event =>
                        moment(event.start).isSame(date, 'day')
                    );
                    return (
                        <View>
                            <Text style={{ color: date.getDay() === 0 ? 'red' : '#000', fontFamily: FONTS.Roboto.regular, fontSize: moderateScale(11) }}>{date.getDate().toString()}</Text>
                            {dayEvents.map((event, index) => (
                                <TouchableOpacity key={index} style={{ ...styles.EventTable, backgroundColor: color.gradientColorTwo }}>
                                    <Text style={{ ...styles.EventText }}>{event.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    );
                }}
                renderHeaderForMonthView={renderHeader}
            />
            <Pressable
                onPress={() => NavigationService.navigate('EventSet')}
                style={styles.plus}>
                <Image
                    source={require('../../Assets/event/plus.png')}
                    style={{
                        height: moderateScale(30),
                        width: moderateScale(30),
                    }}
                />
            </Pressable>
        </Container>
    );
};

export default CreateEvent;

const styles = StyleSheet.create({
    plus: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(10),
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    EventTable: {
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: moderateScale(5),
        marginVertical: moderateScale(5),
        marginHorizontal: moderateScale(2)
    },
    EventText: {
        color: "#fff",
        fontFamily: FONTS.Roboto.regular,
    }
});
