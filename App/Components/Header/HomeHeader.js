import { Button, Image, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppTextInput, Icon, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'

const HomeHeader = () => {
    return (
        <View
            style={styles.headerView}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <Pressable
                    onPress={() => NavigationService.openDrawer()}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        style={styles.imageStyl}
                    />
                </Pressable>
                <Pressable
                    onPress={() => NavigationService.navigate('searchHome')}>
                    <View pointerEvents='none'>
                        <AppTextInput
                            leftIcon={{
                                name: 'search1',
                                type: 'AntDesign'
                            }}
                            placeholder='Search'
                            inputContainerStyle={styles.searchBox}
                            mainContainerStyle={{
                                width:'100%'
                            }}
                        />
                    </View>
                </Pressable>
            </View>
            <View
                style={styles.iconView}>

                <TouchableOpacity
                    onPress={() => NavigationService.navigate('Notification')}>
                    <Image
                        source={require('../../Assets/Home/notification.png')}
                        style={styles.iconImgStyl}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => NavigationService.navigate('MsgList')}>
                    <Image
                        source={require('../../Assets/Home/comment.png')}
                        style={styles.iconCmntImgStyl}
                    />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(15),
        marginBottom: moderateScale(5)
    },
    imageStyl: {
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(50),
        marginRight: moderateScale(15)
    },
    searchBox: {
        height: moderateScale(36),
        // marginHorizontal:moderateScale(10),
        width: '420%',
        borderRadius: moderateScale(50),
        marginTop: 0
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconImgStyl: {
        height: moderateScale(20),
        width: moderateScale(20),
        marginRight: moderateScale(15)
    },
    iconCmntImgStyl: {
        height: moderateScale(20),
        width: moderateScale(20),
    }
})