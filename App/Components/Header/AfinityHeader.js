import { Image, Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, Icon, Picker, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import { FONTS } from '../../Constants/Fonts'

const AfinityHeader = ({ title = ' ' }) => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('')
    const [dropdownValue1, setDropdownValue1] = useState('')
    const [select, setselect] = useState('')
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
                        onPress={()=>NavigationService.navigate('AfinityGroupAdd')}
                            style={{
                                ...styles.postView,
                                backgroundColor:colors.buttonColor}}>
                            <Icon
                                name='plus'
                                type='AntDesign'
                                size={17}
                            />
                        </Pressable>
                    )
                }
            ]}
        />
    )
}

export default AfinityHeader

const styles = StyleSheet.create({
    tittleStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15)
    },
    postImage: {
        height: moderateScale(17),
        width: moderateScale(17)
    },
    postView: {
        paddingHorizontal: moderateScale(5),
        paddingVertical: moderateScale(5),
        borderRadius: moderateScale(20)
    },
})