import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../Constants/PixelRatio'
import { Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../../Constants/Fonts'
const { height, width } = Dimensions.get('window')

const BulletinViewModal = ({ setViewModalVisible, itembull }) => {
    return (
        <View style={styles.modalStyl}>
            <Text
                style={styles.modalText}>
                {itembull}
            </Text>
            <Icon
                name='close'
                type='AntDesign'
                onPress={() => setViewModalVisible(false)}
            />
        </View>
    )
}

export default BulletinViewModal

const styles = StyleSheet.create({
    modalStyl: {
        // height: height / 4,
        // width: width,
        borderRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        padding: moderateScale(11),
        flexDirection: 'row',
        // alignItems:'center',
        justifyContent: 'space-between'
    },
    modalText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    }
})