import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
    Icon,
    useTheme,
} from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import LinearGradient from 'react-native-linear-gradient';

const ChatComponent = ({ item }) => {
    const colors = useTheme();
    return (
        <View
            style={{
                marginHorizontal: moderateScale(15),
                // marginTop: moderateScale(10),
            }}>
            {item.msgStatus == 'msg' ? (
                <LinearGradient
                    colors={item.msgType == 'send' ? ["#1A1A1A33", "#41414133"] : ['#ed3b4b', '#4c3b92']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        ...styles.chatCardStyle,
                        alignSelf: item.msgType == 'send' ? 'flex-start' : 'flex-end',
                        borderBottomRightRadius: item.msgType == 'send' ? moderateScale(11) : 0,
                        borderBottomLeftRadius: item.msgType == 'send' ? 0 : moderateScale(11),
                        backgroundColor: item.msgType == 'send' ? '#00000033' : '#BEA3A3'
                        // <LinearGradient
                        //     colors={['#ed3b4b', '#4c3b92']}
                        //     start={{ x: 0, y: 1 }}
                        //     end={{ x: 1, y: 0 }}
                        // />

                    }}>
                    <Text style={{
                        ...styles.cardText,
                        color: item.msgType == 'send' ?
                            colors.boldFontColor : colors.pageBackgroundColor
                    }}>
                        {item.msgText}
                    </Text>
                    <View style={styles.timetickBox}>
                        <Text style={{ ...styles.cardTextTime, color: colors.boldFontColor }}>
                            2:30 PM
                        </Text>
                        {/* <Image
                            style={styles.tick}
                            source={require('../../Assets/chat/seen.png')}
                        /> */}
                    </View>
                </LinearGradient>
            ) : item.msgStatus == 'image' ? (
                <View>
                    <Image
                        style={styles.chatImgStyle}
                        source={{ uri: 'https://images.unsplash.com/photo-1707968781621-db823bedc3d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                    <View style={styles.timetickBox}>
                        <Text style={{ ...styles.cardTextTime, color: colors.boldFontColor }}>
                            2:30 PM
                        </Text>
                        {/* <Image
                            style={styles.tick}
                            source={require('../../Assets/chat/seen.png')}
                        /> */}
                    </View>
                </View>
            ) : item.msgStatus == 'voice' ? (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <View
                        colors={['#DEE2FF', '#E9EEFF']}
                        style={{
                            ...styles.voiceCardStyle,
                            alignSelf: item.msgType == 'recieve' ? 'flex-end' : 'flex-start',
                            borderBottomRightRadius:
                                item.msgType == 'send' ? moderateScale(11) : 0,
                            borderBottomLeftRadius: item.msgType == 'send' ? 0 : moderateScale(11),
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    ...styles.styleBoxVoice,
                                    borderColor: colors.boldFontColor,
                                }}>
                                <Image
                                    style={styles.voiceImg}
                                    source={require('../../Assets/chat/mic.png')}
                                />
                            </View>

                            <Image
                                style={styles.voicePlayImg}
                                source={require('../../Assets/chat/vertical-bars.png')}
                                // resizeMode='contain'
                            />
                        </View>
                    </View> */}
                    {/* <View
                        colors={['#DEE2FF', '#E9EEFF']}
                        style={styles.pauseBox}>
                        <Icon
                            name='controller-play'
                            type='Entypo'
                            size={45}
                        />
                    </View> */}
                </View>
            ) : null}
        </View>
    );
};

export default ChatComponent;

const styles = StyleSheet.create({
    chatCardStyle: {
        maxWidth: '88%',
        borderRadius: moderateScale(0),
        borderTopRightRadius: moderateScale(11),
        borderTopLeftRadius: moderateScale(11),
        borderBottomRightRadius: moderateScale(11),
        padding: moderateScale(10),
        alignSelf: 'flex-start',
        marginTop: moderateScale(10),
        // backgroundColor:'#CCC5B9'
    },
    cardText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
    },
    tick: {
        height: moderateScale(9),
        width: moderateScale(9),
        marginLeft: moderateScale(5),
    },
    cardTextTime: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(8),
    },
    timetickBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(5),
        alignSelf: 'flex-end',
    },
    chatImgStyle: {
        width: moderateScale(229),
        height: moderateScale(225),
        borderRadius: moderateScale(15),
        marginTop: moderateScale(20),
        alignSelf: 'flex-end',
    },

    voiceCardStyle: {
        maxWidth: '75%',
        borderRadius: moderateScale(0),
        borderTopRightRadius: moderateScale(11),
        borderTopLeftRadius: moderateScale(11),
        borderBottomRightRadius: moderateScale(11),
        elevation: 0,
        padding: moderateScale(10),
    },
    voiceImg: {
        width: moderateScale(22),
        height: moderateScale(22),
    },
    voicePlayImg: {
        width: moderateScale(130),
        height: moderateScale(15),
    },
    styleBoxVoice: {
        width: moderateScale(41),
        height: moderateScale(41),
        borderWidth: moderateScale(2),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginRight: moderateScale(10),
    },
    pauseStyle: {
        width: moderateScale(32),
        height: moderateScale(32),
    },
    pauseBox: {
        height: moderateScale(58),
        width: moderateScale(56),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(11),
        marginLeft: moderateScale(12),
    },
});
