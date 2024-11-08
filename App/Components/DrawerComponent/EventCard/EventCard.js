import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Icon, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import Modal from "react-native-modal";
import EventDeleteModal from './EventDeleteModal'
import Toast from 'react-native-simple-toast';

const EventCard = ({ item }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    return (
        <Card
            shadow={false}
            style={styles.mainCard}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.imageStyl}
            />
            <View style={{ marginLeft: moderateScale(12),flex: 1}}>
                <View
                    style={styles.moreNameView}>
                    <Text
                        style={styles.textHead}>
                        {item.name}
                    </Text>
                    <TouchableOpacity
                        onPress={toggleModal}>
                        <Icon
                            name='more-vertical'
                            type='Feather'
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{...styles.textHead, marginTop: moderateScale(8)}}>
                    {item.desc}
                </Text>

                <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            ...styles.date,
                            fontFamily: FONTS.Roboto.medium
                        }}>
                        Date: <Text style={styles.date}>{item.date}</Text>
                    </Text>

                    <Pressable style={styles.addIcon} onPress={() => Toast.show('You have already joined this event', Toast.LONG)}>
                        <Icon
                            name='person-add'
                            type='Ionicon'
                        />
                    </Pressable>

                </View>
            </View>

            <Modal isVisible={isModalVisible}
                style={{ margin: 0, justifyContent: 'flex-end', }}
                onBackdropPress={() => setModalVisible(false)}>
                <EventDeleteModal
                    setModalVisible={setModalVisible} />
            </Modal>

        </Card>
    )
}

export default EventCard

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#E7D1D7',
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
    },
    addIcon: {
        alignSelf: 'flex-end',
        // position: 'absolute',
        // bottom: 6
    }
})