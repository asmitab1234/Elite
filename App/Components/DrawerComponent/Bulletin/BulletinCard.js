import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Icon, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import Modal from "react-native-modal";
import BUlletinDeleteModal from './BUlletinDeleteModal'
import BulletinViewModal from './BulletinViewModal'
import moment from 'moment'
import NavigationService from '../../../Services/Navigation'

const BulletinCard = ({ item }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const [isViewModalVisible, setViewModalVisible] = useState(false);
    const viewToggleModal = () => {
        setViewModalVisible(!isViewModalVisible);
    }
    return (
        <Card
            onPress={() => NavigationService.navigate('BulletinSinglePage',{item})}
            shadow={false}
            style={styles.mainCard}>
            <Image
                source={{ uri: item?.image }}
                style={styles.imageStyl}
            />
            <View
                style={{
                    marginLeft: moderateScale(12),
                    flex: 1
                }}>
                <View
                    style={styles.moreNameView}>
                    <Text
                        style={styles.textHead}>
                        {item?.eventName}
                    </Text>
                    <TouchableOpacity
                        onPress={toggleModal}>
                        <Icon
                            name='more-vertical'
                            type='Feather'
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        ...styles.date,
                        fontFamily: FONTS.Roboto.medium
                    }}>
                    Date: <Text style={styles.date}>{moment(item?.eventDate).format("MMM DD YYYY")}</Text>
                </Text>

                {/* <TouchableOpacity
                    style={styles.viewBox}
                    onPress={viewToggleModal}>
                    <Text
                        style={{
                            fontFamily: FONTS.Roboto.regular,
                            fontSize: moderateScale(11)
                        }}>
                        View
                    </Text>
                </TouchableOpacity> */}
            </View>

            <Modal isVisible={isModalVisible}
                style={{ margin: 0, justifyContent: 'flex-end', }}
                onBackdropPress={() => setModalVisible(false)}>
                <BUlletinDeleteModal
                    setModalVisible={setModalVisible} />
            </Modal>

            <Modal isVisible={isViewModalVisible}
                style={{ flex: 1, }}
                onBackdropPress={() => setViewModalVisible(false)}>
                <BulletinViewModal
                    setViewModalVisible={setViewModalVisible} itembull={item?.addNotes} />
            </Modal>

        </Card>
    )
}

export default BulletinCard

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#DBC6B1',
        marginHorizontal: moderateScale(15),
        flexDirection: 'row',
        marginBottom: moderateScale(10)
    },
    imageStyl: {
        height: moderateScale(70),
        width: moderateScale(70),
        borderRadius: moderateScale(10)
    },
    textHead: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    },
    moreNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    date: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(10)
    },
    viewBox: {
        backgroundColor: '#FFFFFF',
        padding: moderateScale(5),
        borderRadius: moderateScale(3),
        width: moderateScale(35),
        alignSelf: 'flex-end'
    }
})