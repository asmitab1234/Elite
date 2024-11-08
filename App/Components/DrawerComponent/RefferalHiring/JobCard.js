import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
import Modal from "react-native-modal";
import RefferalModal from './RefferalModal'
import RefferalFormModal from './RefferalFormModal'
import NavigationService from '../../../Services/Navigation'

const JobCard = ({ item }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const [isFormModalVisible, setFormModalVisible] = useState(false);
    const FormToggleModal = () => {
        setFormModalVisible(!isFormModalVisible);
    }
    return (
        <Card
            shadow={false}
            style={styles.mainCard}
            onPress={()=>NavigationService.navigate('JobForm')}>
            <View
                style={styles.subShareView}>
                <Text
                    style={styles.subText}>
                    {item.sub}
                </Text>
                <TouchableOpacity
                    style={styles.shareBox}
                    onPress={toggleModal}>
                    <Image
                        source={require('../../../Assets/Home/share.png')}
                        style={styles.shareImg}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
            <Text
                style={styles.openningText}>
                Openning:{' '}
                <Text
                    style={{
                        ...styles.openningText,
                        fontFamily: FONTS.Roboto.regular
                    }}>
                    {item.openning}
                </Text>
            </Text>
            <Text
                style={styles.openningText}>
                Skill Required:{' '}
                <Text
                    style={{
                        ...styles.openningText,
                        fontFamily: FONTS.Roboto.regular
                    }}>
                    {item.skill}
                </Text>
            </Text>

            <Modal isVisible={isModalVisible}
                style={{ justifyContent: 'flex-end', margin: 0 }}
                onBackdropPress={() => setModalVisible(false)}>
                <RefferalModal
                    setModalVisible={setModalVisible} />
            </Modal>
            {/* <Modal isVisible={isFormModalVisible}
                style={{
                    flex: 1,
                    marginHorizontal: moderateScale(10),
                    marginVertical: moderateScale(30)
                }}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setFormModalVisible(false)}>
                <RefferalFormModal
                    setFormModalVisible={setFormModalVisible} />
            </Modal> */}
        </Card>
    )
}

export default JobCard

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#DDB89F',
        marginBottom: moderateScale(12),
        marginHorizontal: moderateScale(15)
    },
    subShareView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    shareImg: {
        height: moderateScale(17),
        width: moderateScale(17)
    },
    shareBox: {
        padding: moderateScale(4),
        width: moderateScale(24),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: moderateScale(5)
    },
    openningText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
        marginTop: moderateScale(5)
    },
    subText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    }
})