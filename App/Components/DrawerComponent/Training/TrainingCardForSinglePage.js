import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Icon, Text, useTheme } from 'react-native-basic-elements'
import Modal from "react-native-modal";
import { moderateScale } from '../../../Constants/PixelRatio';
import { FONTS } from '../../../Constants/Fonts';
import TrainingDeleteModal from './TrainingDeleteModal';
import Star from '../../Star/Star';
import NavigationService from '../../../Services/Navigation';

const TrainingCardForSinglePage = ({ item  ={}}) => {
    // console.log("item",item);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const colors = useTheme()
    return (
        <Card
            shadow={false}
            style={{
                ...styles.mainCard,
                borderColor: colors.buttonColor
            }}
            onPress={() => NavigationService.navigate('TrainingVideoPage')}
        >
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' }}
                style={styles.imageStyl}
                borderRadius={8}
            >
                <Text
                    style={{
                        position: 'absolute',
                        bottom: 5,
                        right: moderateScale(10),
                        color: '#FFFFFF',
                        fontFamily: FONTS.Roboto.bold,
                        fontSize: moderateScale(10)
                    }}>
                    {/* {item.time} */}
                </Text>
            </ImageBackground>
            <View
                style={{
                    marginLeft: moderateScale(12),
                    flex: 1
                }}>
                <View
                    style={styles.moreNameView}>
                    <Text
                        style={styles.textHead}>
                        {item.courseTitle}
                    </Text>
                    <TouchableOpacity
                        onPress={toggleModal}>
                        {/* <Icon
                            name='more-vertical'
                            type='Feather'
                        /> */}
                    </TouchableOpacity>
                </View>

                <Text
                    style={{
                        ...styles.date,
                        fontFamily: FONTS.Roboto.light
                    }}>
                    By: <Text style={{
                        ...styles.date,
                        fontFamily: FONTS.Roboto.light
                    }}>{item.by}</Text>
                </Text>

                <Text
                    style={{
                        ...styles.date,
                        fontFamily: FONTS.Roboto.medium
                    }}>
                    Release Date: <Text style={styles.date}>{item.date}</Text>
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <Star
                        ActiveStarColor={colors.buttonColor}
                        starSize={20}
                    />
                    <Text
                        style={{
                            fontFamily: FONTS.Roboto.light,
                            fontSize: moderateScale(13),
                            marginLeft: moderateScale(5)
                        }}>
                        (4)
                    </Text>
                </View>

                {/* <Text
                    style={{
                        ...styles.date,
                        fontFamily: FONTS.Roboto.medium
                    }}>
                    Training Cost: <Text style={styles.date}>{item.cost}</Text>
                </Text> */}

                {/* <Text
                    style={{
                        ...styles.date,
                        fontFamily: FONTS.Roboto.medium
                    }}>
                    Training Category: <Text style={styles.date}>{item.category}</Text>
                </Text> */}

                {/* <Text
                    style={{
                        ...styles.date,
                        fontFamily: FONTS.Roboto.medium
                    }}>
                    Training Category: <Text style={styles.date}>{item.category}</Text>
                </Text> */}
            </View>

            <Modal isVisible={isModalVisible}
                style={{ margin: 0, justifyContent: 'flex-end', }}
                onBackdropPress={() => setModalVisible(false)}>
                <TrainingDeleteModal
                    setModalVisible={setModalVisible} />
            </Modal>

        </Card>
    )
}

export default TrainingCardForSinglePage

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: 'transparent',
        marginHorizontal: moderateScale(15),
        flexDirection: 'row',
        marginBottom: moderateScale(10),
        alignItems: 'center',
        borderWidth: moderateScale(1)
    },
    imageStyl: {
        height: moderateScale(70),
        width: moderateScale(120),
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
        // marginTop: moderateScale(2)
    }
})