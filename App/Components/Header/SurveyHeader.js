import { Dimensions, Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, Container, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import ReactNativeModal from 'react-native-modal'
const { height, width } = Dimensions.get('window')

const SurveyHeader = ({ title = ' ', }) => {
    const [isVisibleModal, SetVisibleModal] = useState(false);
    const toggleModalVisible = () => {
        SetVisibleModal(!isVisibleModal);
    }
    console.log(isVisibleModal)
    return (
        <>
            <AppBar.Back
                title={title}
                titleStyle={styles.tittleStyl}
                onLeftIconPress={() => NavigationService.back()}
                icon={{
                    name: 'chevron-small-left',
                    type: 'Entypo',
                    size: moderateScale(35)
                }}
                titlePosition='left'
                rightActions={[
                    {
                        icon:
                            (<Pressable
                                onPress={toggleModalVisible}>
                                <Image
                                    source={require('../../Assets/Home/suggetionbox.png')}
                                    resizeMode='contain'
                                    style={styles.imgStyl}
                                />
                            </Pressable>

                            ),
                        onPress: () => toggleModalVisible()
                    }
                ]}
            />
            <ReactNativeModal isVisible={isVisibleModal}
                style={{
                    flex: 1,
                    marginHorizontal: moderateScale(10),
                    marginVertical: moderateScale(30)
                }
                }
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => SetVisibleModal(false)}>

                <View
                    style={{
                        backgroundColor: '#FFFFFF',
                        // height: height / 2,
                        paddingHorizontal: moderateScale(15),
                        paddingVertical: moderateScale(10),
                        borderRadius: moderateScale(8)
                    }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Image
                            source={require('../../Assets/Home/grivence.png')}
                            resizeMode='contain'
                            style={styles.imgStyl}
                        />
                        <Text
                            style={{
                                ...styles.tittleStyl,
                                marginLeft: moderateScale(10)
                            }}>
                            Grivence Cell
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: moderateScale(1),
                            width: '100%',
                            backgroundColor: '#D9D9D9',
                            marginVertical: moderateScale(15)
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // marginTop:moderateScale(15)
                        }}>
                        <Image
                            source={require('../../Assets/Home/suggetionbox.png')}
                            resizeMode='contain'
                            style={styles.imgStyl}
                        />
                        <Text
                            style={{
                                ...styles.tittleStyl,
                                marginLeft: moderateScale(10)
                            }}>
                            Suggetion Box
                        </Text>
                    </TouchableOpacity>
                </View>

            </ReactNativeModal>
        </>
    )
}

export default SurveyHeader

const styles = StyleSheet.create({
    tittleStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15)
    },
    imgStyl: {
        height: moderateScale(25),
        width: moderateScale(25)
    }
})