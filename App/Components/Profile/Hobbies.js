import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import Modal from "react-native-modal";
import DeleteModal from './DeleteModal'

const Hobbies = ({ item }) => {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const toggleModalDelete = () => {
        setDeleteModalVisible(!isDeleteModalVisible);
    }
    return (
        <View
            style={styles.hbbiBox}>

            <Text
                style={styles.textStyl}>
                {item.hobbi}
            </Text>

            <TouchableOpacity
                onPress={toggleModalDelete}>
                {/* <Icon
                    name='delete'
                    type='MaterialCommunityIcon'
                    color={'#D83F3F'}
                /> */}
                <Image
                    source={require('../../Assets/Home/Delete.png')}
                    style={{
                        height: moderateScale(20),
                        width: moderateScale(20)
                    }}
                />
            </TouchableOpacity>

            <Modal isVisible={isDeleteModalVisible}
                style={{
                    flex: 1,
                    marginHorizontal: moderateScale(10),
                    marginVertical: moderateScale(30)
                }}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setDeleteModalVisible(false)}>
                <DeleteModal
                    setDeleteModalVisible={setDeleteModalVisible} />
            </Modal>

        </View>
    )
}

export default Hobbies

const styles = StyleSheet.create({
    hbbiBox: {
        backgroundColor: '#E6DCDC',
        padding: moderateScale(8),
        marginBottom: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: moderateScale(5)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    }
})