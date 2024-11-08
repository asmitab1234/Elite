import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'
import { FONTS } from '../../../Constants/Fonts'
import NavigationService from '../../../Services/Navigation'

const CirtificateCard = ({ item }) => {
    return (
        <Pressable
            onPress={() => NavigationService.navigate('CirtificateImage')}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#D6BFBF9F',
                borderRadius: moderateScale(8),
                marginTop: moderateScale(10),
                padding: 10
            }}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D' }}
                style={{
                    height: moderateScale(50),
                    width: moderateScale(50)
                }}
            />
            <View
                style={{
                    marginLeft: moderateScale(10)
                }}>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.medium,
                        fontSize: moderateScale(13)
                    }}>
                    {item.name}
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.medium,
                        fontSize: moderateScale(13)
                    }}>
                    {item.Date}
                </Text>
            </View>
        </Pressable>
    )
}

export default CirtificateCard

const styles = StyleSheet.create({})