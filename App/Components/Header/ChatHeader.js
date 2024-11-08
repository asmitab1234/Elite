import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const ChatHeader = () => {
    const colors = useTheme()
    return (
        <View>
            <StatusBar backgroundColor={colors.pageBackgroundColor} barStyle='dark-content' />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(10),
                    marginLeft: moderateScale(15)
                }}>
                <Icon
                    name='chevron-small-left'
                    type='Entypo'
                    size={35}
                    onPress={() => NavigationService.back()}
                />
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={styles.userImage}
                />
                <View
                    style={{ marginLeft: moderateScale(10) }}>
                    <Text
                        style={styles.nameText}>
                        Lorem Ipsum
                    </Text>
                    <Text
                        style={styles.statusText}>
                        Online
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    userImage: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(50)
    },
    nameText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(14)
    },
    statusText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
})