import { Image, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Icon, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import ChatComponent from '../../Components/Chat/ChatComponent'
import ChatHeader from '../../Components/Header/ChatHeader'


const ChatBox = () => {
    const colors = useTheme()
    const SingleChatArray = [
        {
            title: 'Today',
            data: [
                {
                    msgStatus: 'msg',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'send',
                },
                {
                    msgStatus: 'image',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'send',
                },
                {
                    msgStatus: 'msg',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'recieve',
                },
                {
                    msgStatus: 'msg',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'send',
                },
                {
                    msgStatus: 'voice',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'send',
                },
                {
                    msgStatus: 'voice',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'recieve',
                },
            ],
        },
        {
            title: 'Yesterday',
            data: [
                {
                    msgStatus: 'msg',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'send',
                },
                {
                    msgStatus: 'image',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'send',
                },
                {
                    msgStatus: 'msg',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'recieve',
                },
                {
                    msgStatus: 'msg',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'send',
                },
                {
                    msgStatus: 'voice',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'send',
                },
                {
                    msgStatus: 'voice',
                    msgText: 'Lorem ipsum dolor sit amet consectetur.',
                    // msgImg: require('../../Assets/images/chatimg.png'),
                    msgType: 'recieve',
                },
            ],
        },
    ];

    return (
        <Container>
            <ChatHeader title='Lorem Ipsum' subTitle='Online' />
            <SectionList
                inverted={true}
                sections={SingleChatArray}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => (
                    <ChatComponent
                        key={index}
                        item={item}
                    />
                )}
                renderSectionFooter={({ section: { title } }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={{
                                ...styles.dayTimeText,
                                color: colors.boldFontColor,
                                backgroundColor: colors.pageBackgroundColor,
                            }}>
                            {title}
                        </Text>
                    </View>
                )}
            />
            <View
                style={styles.bottomInput}>
                <AppTextInput
                    placeholder='Write A Message'
                    inputContainerStyle={styles.inputContainer}
                    mainContainerStyle={styles.inputBox}
                    inputStyle={styles.fontStyl}
                    leftIcon={{
                        name: 'camera',
                        type: 'Feather',
                        size: moderateScale(18)
                    }}
                    rightAction={[
                        <Icon
                            name='microphone'
                            type='FontAwesome'
                        />
                    ]}
                />
                <View
                    style={styles.sendBox}>
                    <Image source={require('../../Assets/Home/send.png')}
                        style={{
                            height: moderateScale(25),
                            width: moderateScale(25)
                        }} />
                </View>
            </View>
        </Container>
    )
}

export default ChatBox

const styles = StyleSheet.create({
    dayTimeText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        elevation: 3,
        paddingVertical: moderateScale(5),
        paddingHorizontal: moderateScale(16),
        borderRadius: moderateScale(15),
        marginVertical: moderateScale(10),
    },
    inputContainer: {
        borderRadius: moderateScale(5),
    },
    inputBox: {
        width: '80%',
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    bottomInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(15),
        justifyContent: 'space-between',
        marginVertical: moderateScale(10)
    },
    sendBox: {
        padding: moderateScale(10),
        borderRadius: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7',
        elevation:1
    }
})