import { StyleSheet, View, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { AppButton, AppTextInput, Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import StarRating from 'react-native-star-rating';
import PerformerService from '../../Services/PerformerService'

const SkillModal = ({ SetSkillModal, PickedId }) => {
    const [userRating, setuserRating] = useState('')
    const [userComment, setuserComment] = useState('')
    const post_user_Review = () => {
        const data = {
            skillID: PickedId,
            rating: userRating,
            review: userComment,
        }
        PerformerService.Performer_Raiting(data)
            .then(result => {
                if (result && result.status) {
                    console.log("res>>>>>>>>>>", result)
                    ToastAndroid.show('Rated Successful!', ToastAndroid.LONG);
                }
            })
            .catch(err => {
                ToastAndroid.show('You already Rated this skill!', ToastAndroid.LONG);
                console.log('error>>', err);
            });
    };

    return (
        <View
            style={styles.modalStyl}>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: moderateScale(15)
                }}>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.bold,
                        fontSize: moderateScale(20)
                    }}>
                    Skill
                </Text>
                <TouchableOpacity
                    onPress={() => SetSkillModal(false)}>
                    <Icon
                        name='close'
                        type='AntDesign'
                        size={26}
                        color={'#B41C1C'}
                    />
                </TouchableOpacity>
            </View>
            {/* <View style={{ flexDirection: "row", marginBottom: moderateScale(10) }}>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.medium,
                        fontSize: moderateScale(14)
                    }}>
                    Rating* :{"  "}
                </Text>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={userRating}
                    starSize={20}
                    starStyle={{ marginLeft: moderateScale(3) }}
                    fullStarColor={'#FFD700'}
                    selectedStar={(rating) => setuserRating(rating)}
                />
            </View> */}
            <AppTextInput
                title='Skill Add* : '
                titleStyle={styles.headingText}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.fontStyl}
                onChangeText={(text) => setuserComment(text)}
            />

            <AppButton
                title='Add'
                style={styles.buttonStyl}
                textStyle={styles.headingText}
                onPress={() => { SetSkillModal(false), post_user_Review() }}
            />
        </View>
    )
}

export default SkillModal

const styles = StyleSheet.create({
    modalStyl: {
        // height: height / 2,
        // width: width,
        borderRadius: moderateScale(8),
        backgroundColor: '#F5F5F5',
        padding: moderateScale(20),
    },
    headingText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    inputContainerStyle: {
        borderRadius: moderateScale(5),
        height: moderateScale(45)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        marginHorizontal: 0,
        marginTop: moderateScale(20)
    }
})