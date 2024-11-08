import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'
const { height, width } = Dimensions.get('window')

const RefferalModal = () => {
    const refferArr = [
        {
            img: require('../../../Assets/Refferal/whatsapp.png'),
            title: 'WhatsApp'
        },
        {
            img: require('../../../Assets/Refferal/facebook.png'),
            title: 'Facebook'
        },
        {
            img: require('../../../Assets/Refferal/twitter.png'),
            title: 'Twitter'
        },

    ]
    return (
        <View
            style={styles.modalStyl}>
            {refferArr.map((item, index) => (
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    key={index}>
                    <Image
                        source={item.img}
                        style={styles.imageStyl}
                        resizeMode='contain'
                    />
                    <Text
                        style={styles.titleStyl}>
                        {item.title}
                    </Text>
                </View>
            ))}
        </View>
    )
}

export default RefferalModal

const styles = StyleSheet.create({
    modalStyl: {
        // height: height / 4,
        // width: width,
        borderRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        padding: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    imageStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        marginBottom: moderateScale(5)
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12),
        textAlign: 'center'
    }
})