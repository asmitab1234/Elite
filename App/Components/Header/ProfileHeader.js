import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppBar, Container, Icon } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'

const ProfileHeader = ({ title = ' ' }) => {
    return (
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
                    icon: (

                        <Pressable
                            onPress={() => NavigationService.navigate('Setting')}>
                            <Icon
                                name='settings-sharp'
                                type='Ionicon'
                            />
                        </Pressable>
                    )
                }
            ]}
        />
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    tittleStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15)
    }
})