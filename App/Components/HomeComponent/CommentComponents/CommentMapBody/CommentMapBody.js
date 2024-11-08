import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../../Constants/PixelRatio'
import { FONTS } from '../../../../Constants/Fonts'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

const CommentMapBody = ({ toggleModal }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{ ...styles.commentView }}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={styles.imgStyl}
                />
                <TouchableOpacity
                    onPress={() => toggleModal(toggleModal)}
                    style={styles.commentBox}>
                    <Text
                        style={styles.textStyl}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CommentMapBody

const styles = StyleSheet.create({
    commentView: {
        flexDirection: 'row',
        marginTop: moderateScale(10)
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(60),
    },
    imgStyl_comment: {
        height: moderateScale(25),
        width: moderateScale(25),
        borderRadius: moderateScale(50),
    },
    commentBox: {
        backgroundColor: '#CCCCCC',
        padding: moderateScale(10),
        alignItems: 'center',
        borderRadius: moderateScale(10),
        width: '75%',
        marginLeft: moderateScale(15)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
})