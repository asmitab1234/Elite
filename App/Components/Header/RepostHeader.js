import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, useTheme } from 'react-native-basic-elements'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const RepostHeader = ({title=' '}) => {
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
                        <TouchableOpacity
                            // onPress={() => Post_Data_push()}
                            style={styles.postView}>
                            <Image
                                source={require('../../Assets/post/Post.png')}
                                resizeMode='contain'
                                style={{
                                    ...styles.postImage,
                                }}
                            />
                        </TouchableOpacity>
                    )
                }
            ]}
        />
    )
}


export default RepostHeader

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
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(8),
        backgroundColor: '#D9D9D9',
        borderRadius: moderateScale(20)
    },
})