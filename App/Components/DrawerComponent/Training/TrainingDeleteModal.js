import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
const { height, width } = Dimensions.get('window')

const TrainingDeleteModal = ({ setModalVisible }) => {
    return (
        <View
            style={styles.modalStyl}>
            <View
                style={styles.iconText}>
                <Icon
                    name='delete-outline'
                    type='MaterialCommunityIcon'
                    size={28}
                    color={'#B14444'}
                />
                <Text
                    style={styles.deleteText}>
                    Delete
                </Text>
            </View>

            <View
                style={styles.iconText}>
                <Icon
                    name='edit'
                    type='AntDesign'
                    size={28}
                />
                <Text
                    style={styles.deleteText}>
                    Edit
                </Text>
            </View>

        </View>
    )
}

export default TrainingDeleteModal

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