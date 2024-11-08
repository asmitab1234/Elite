import { Image, Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, Icon, Picker, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import { FONTS } from '../../Constants/Fonts'
import { TouchableOpacity } from 'react-native'

const CreatePostHeader = ({ title = ' ', Post_Data_push }) => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('')
    const [dropdownValue1, setDropdownValue1] = useState('')
    const [select, setselect] = useState('')
    return (
        // <View>
        //     <StatusBar backgroundColor={colors.pageBackgroundColor} barStyle='dark-content' />
        //     <View
        //         style={styles.headerView}>
        //         <View
        //             style={styles.iconName}>
        //             <Icon
        //                 name='close'
        //                 type='AntDesign'
        //                 size={24}
        //                 onPress={() => NavigationService.back()}
        //                 style={{
        //                     marginRight: moderateScale(15)
        //                 }}
        //             />
        //             <Image
        //                 source={require('../../Assets/Home/user.png')}
        //                 style={styles.imageUser}
        //             />
        //             <View>
        //                 <Text
        //                     style={styles.textStyle}>
        //                     Sara Tylor
        //                 </Text>
        //                 <Picker
        //                     options={[
        //                         {
        //                             label: 'Public',
        //                             value: 'Public'
        //                         },
        //                         {
        //                             label: 'Afinity Group',
        //                             value: 'Afinity Group'
        //                         },
        //                     ]}
        //                     placeholder="Select"
        //                     textStyle={{
        //                         fontSize: 15
        //                     }}
        //                     selectedValue={dropdownValue}
        //                     onValueChange={(val) => setDropdownValue(val)}
        //                     containerStyle={styles.picker}

        //                 />

        //                 {dropdownValue == 'Afinity Group' ?
        //                     <Picker
        //                         options={[
        //                             {
        //                                 label: 'Item1',
        //                                 value: 'Item1'
        //                             },
        //                             {
        //                                 label: 'Item2',
        //                                 value: 'Item2'
        //                             },
        //                             {
        //                                 label: 'Item3',
        //                                 value: 'Item3'
        //                             },
        //                         ]}
        //                         placeholder="Select Group"
        //                         textStyle={{
        //                             fontSize: 15
        //                         }}
        //                         selectedValue={dropdownValue}
        //                         onValueChange={(val) => setDropdownValue(val)}
        //                         containerStyle={styles.picker}

        //                     />
        //                     : null
        //                 }
        //             </View>
        //         </View>
        //         <View
        //             style={styles.iconName}>
        //             {/* <Icon
        //                 name='clockcircleo'
        //                 type='AntDesign'
        //                 style={{
        //                     marginRight: moderateScale(10)
        //                 }}
        //             /> */}
        //             <Pressable
        //                 style={styles.postView}>
        //                 {/* <Text
        //                     style={styles.textStyle}>
        //                     Post
        //                 </Text> */}
        //                 <Image
        //                     source={require('../../Assets/post/Post.png')}
        //                     resizeMode='contain'
        //                     style={{
        //                         ...styles.postImage,
        //                     }}
        //                 />
        //             </Pressable>
        //         </View>
        //     </View>
        // </View>
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
                            onPress={() => Post_Data_push()}
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

export default CreatePostHeader

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