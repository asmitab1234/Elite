import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import Modal from "react-native-modal";
import NotificationAcceptModal from './NotificationAcceptModal'

const All = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    const handleItemClick = (action) => {
        if (action === 'modal') {
            toggleModal();
        } else if (action === 'navigation') {
            NavigationService.navigate('AllTrainingNotification');
        }
    };

    const notificationArr = [
        {
            img: require('../../Assets/Home/user.png'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
            handelClick: 'navigation'
        },
        {
            img: require('../../Assets/Home/user.png'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
            handelClick: 'modal'
        },
        {
            img: require('../../Assets/Home/user.png'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
            handelClick: 'navigation'
        },
        {
            img: require('../../Assets/Home/user.png'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
            handelClick: 'modal'
        },
    ]
    return (
        <View>

            {notificationArr.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handleItemClick(item.handelClick)}
                    style={styles.mainView}
                >
                    {/* <ScrollView
                        key={index}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.mainView}
                    > */}



                    <Image
                        source={item.img}
                        style={styles.imgStyl}
                    />
                    <View>
                        <Text
                            style={styles.notifyText}>
                            {item.notify}
                        </Text>
                        <Text
                            style={styles.timeText}>
                            {item.time}
                        </Text>
                    </View>

                    {/* </ScrollView> */}
                </TouchableOpacity>
            ))}
            <Modal isVisible={isModalVisible}
                style={{ flex: 1 }}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setModalVisible(false)}>
                <NotificationAcceptModal
                    setModalVisible={setModalVisible} />
            </Modal>
        </View>
    )
}

export default All

const styles = StyleSheet.create({
    mainView: {
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15),
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(90)
    },
    notifyText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        width: '80%',
        marginLeft: moderateScale(10)
    },
    timeText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11),
        marginLeft: moderateScale(10),
        marginTop: moderateScale(5)
    }
})