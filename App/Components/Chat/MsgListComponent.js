import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const MsgListComponent = () => {
    return (
        <Pressable
            onPress={() => NavigationService.navigate('ChatBox')}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal:moderateScale(15),
                marginBottom:moderateScale(15)
            }}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.imgStyl}
            />
            <View
                style={{
                    marginLeft: moderateScale(10)
                }}>
                <Text
                    style={styles.nameText}>
                    Lorem Ipsum
                </Text>
                <Text
                    style={styles.msgText}>
                    Lorem ipsum dolor sit....
                </Text>
            </View>
        </Pressable>
    )
}

export default MsgListComponent

const styles = StyleSheet.create({
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(80)
    },
    nameText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    msgText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11)
    }
})