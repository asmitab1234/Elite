import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')

const HomeDeleteEditModal = ({ setModalVisible }) => {
    return (
        <View
            style={styles.modalStyl}>
            <View
                style={styles.iconText}>
                <Image
                    source={require('../../Assets/Home/Delete.png')}
                    style={{
                        height: moderateScale(25),
                        width: moderateScale(25)
                    }}
                />
                <Text
                    style={styles.deleteText}>
                    Delete
                </Text>
            </View>

            <View
                style={styles.iconText}>
                 <Image
                    source={require('../../Assets/Home/Edit.png')}
                    style={{
                        height: moderateScale(23),
                        width: moderateScale(23)
                    }}
                />
                <Text
                    style={styles.deleteText}>
                    Edit
                </Text>
            </View>

        </View>
    )
}

export default HomeDeleteEditModal

const styles = StyleSheet.create({
    modalStyl: {
        // height: height / 4,
        width: width,
        borderTopRightRadius: moderateScale(8),
        borderTopLeftRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        paddingVertical:moderateScale(20)
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:moderateScale(15),
        marginTop:moderateScale(12)
    },
    deleteText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15),
        marginLeft:moderateScale(8)
    }
})