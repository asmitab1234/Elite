
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from '../../../Constants/PixelRatio';
import { Text, Icon, AppTextInput } from 'react-native-basic-elements';
import { FONTS } from '../../../Constants/Fonts';
import StarRating from 'react-native-star-rating';
import SurvayService from '../../../Services/SurvayService';
import Toast from 'react-native-simple-toast';

const width = Dimensions.get('window').width;

const NewSurvey30DayItem = ({ item }) => {
    const [onStarRatingPress, setOnStarRatingPress] = useState(item.rating[0]?.rating);
    const [msgEnable, setMsgEnable] = useState(false);
    const [comment, setComment] = useState('');

    // Rating Added
    const AddSurveyRating = (id, rate) => {
        setOnStarRatingPress(rate);
        let data = {
            "surveyID": id,
            "rating": rate
        };
        SurvayService.StarSubmitOnbord(data)
            .then(result => {
                if (result && result.status === true) {
                    Toast.show('Rating Submitted Successfully', Toast.SHORT);
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };

    // Comment API
    const Comment_Add = () => {
        let data = {
            "question": comment
        };
        SurvayService.CommentAddOnbord(data)
            .then(result => {
                if (result && result.status) {
                    Toast.show('Comment Added Successfully', Toast.SHORT);
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };

    return (
        <>
            <View style={styles.viewBox}>
                <Text style={styles.textStyl}>{item?.survey}</Text>
                <View style={{ flex: 1 }} />
                <View style={styles.starImg}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={onStarRatingPress}
                        starSize={18}
                        starStyle={{ marginLeft: moderateScale(2) }}
                        fullStarColor={'#FFD700'}
                        selectedStar={(rating) => AddSurveyRating(item._id, rating)}
                    />
                    <TouchableOpacity onPress={() => setMsgEnable(!msgEnable)}>
                        <Image
                            source={require('../../../Assets/Home/comment.png')}
                            style={styles.msgImg}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {msgEnable &&
                <AppTextInput
                    inputContainerStyle={{
                        width: "90%",
                        alignSelf: "center",
                        paddingLeft: moderateScale(10)
                    }}
                    placeholder="Comment"
                    rightAction={
                        <Icon
                            name='send-o'
                            type='FontAwesome'
                            size={25}
                            onPress={() => { Comment_Add(), setMsgEnable(false) }}
                        />
                    }
                    onChangeText={(text) => setComment(text)}
                />
            }
        </>
    );
};

export default NewSurvey30DayItem;

const styles = StyleSheet.create({
    viewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(8),
        width: '92%'
    },
    starImg: {
        flexDirection: 'row',
        alignItems: 'center',
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
});