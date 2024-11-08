import { Dimensions, Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Icon, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import Star from '../Star/Star'
import { FONTS } from '../../Constants/Fonts'
const width = Dimensions.get('window').width

const NewSurvey90Day = () => {
    const [select, setSelect] = useState(false)
    const onClick = () => {
        setSelect(!select)
    }
    return (
        <ScrollView>
            <View>
                {[1, 2, 3].map((item, index) => (
                    <>
                        <View
                            key={index}
                            style={styles.viewBox}>
                            <Text
                                style={styles.textStyl}>
                                Reflecting on your entire onboarding experience, how would you rate its effectiveness in preparing you for your role?                        </Text>
                            <View style={{ flex: 1 }} />
                            <View
                                style={styles.starImg}>
                                <Star
                                    starSize={16}
                                />
                                <TouchableOpacity
                                    onPress={() => onClick()}>
                                    <Image
                                        source={require('../../Assets/onboarding/Messages.png')}
                                        style={styles.msgImg}
                                    />
                                </TouchableOpacity>

                            </View>

                        </View>
                        {select == true ?
                            <AppTextInput
                                inputContainerStyle={{
                                    width: "90%",
                                    alignSelf: "center",
                                    paddingLeft: moderateScale(10)
                                }}
                                placeholder="Write Your Comment's"
                                rightAction={
                                    <Icon
                                        name='send-o'
                                        type='FontAwesome'
                                        size={25} />
                                }
                            />
                            : null
                        }
                    </>
                ))}
            </View>

        </ScrollView>
    )
}

export default NewSurvey90Day

const styles = StyleSheet.create({
    viewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(8),
        width: '92%'
        // flex:1
    },
    starImg: {
        flexDirection: 'row',
        alignItems: 'center',
        // flex:1,
        width: '35%'
    },
    msgImg: {
        height: moderateScale(26),
        width: moderateScale(26),
        marginLeft: moderateScale(10)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        width: width / 1.8,
    }

})