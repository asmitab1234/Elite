
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AppTextInput, Icon } from 'react-native-basic-elements';
import { moderateScale } from '../../../Constants/PixelRatio';
import { FONTS } from '../../../Constants/Fonts';
import StarRating from 'react-native-star-rating';
import OnboardingService from '../../../Services/OnboardingService';
import Toast from 'react-native-simple-toast';

const { height, width } = Dimensions.get('window');

const NewHireSurvey30Item = ({ item }) => {
    const [onStarRatingPress, setonStarRatingPress] = useState(item.rating[0]?.rating);
    const [msgEnable, SetmsgEnable] = useState(false);
    const [Comment, setComment] = useState('');
    const [CommentView, setCommentView] = useState([]);

    useEffect(() => {
        Comment_Get();
    }, []);

    const getNewHireSurvey_30 = (id, rate) => {
        setonStarRatingPress(rate);
        let data = {
            "checklistId": id,
            "rating": rate
        };
        OnboardingService.StarSubmitOnbord(data)
            .then(result => {
                if (result && result.status == true) {
                    Toast.show('Rating Submitted Successfully', Toast.SHORT);
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };

    const Comment_Add = () => {
        let data = {
            "question": Comment
        };
        OnboardingService.CommentAddOnbord(data)
            .then(result => {
                if (result && result.status) {
                    Toast.show('Comment Added Successfully', Toast.SHORT);
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };

    const Comment_Get = () => {
        OnboardingService.CommentGetOnbord()
            .then(result => {
                if (result && result.status) {
                    setCommentView(result.data);
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };

    return (
        <View>
            <View style={styles.viewBox}>
                <Text style={styles.textStyl}>{item?.checklist}</Text>
                <View style={{ flex: 1 }} />
                <View style={styles.starImg}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={onStarRatingPress}
                        starSize={18}
                        starStyle={{ marginLeft: moderateScale(2) }}
                        fullStarColor={'#FFD700'}
                        selectedStar={(rating) => getNewHireSurvey_30(item._id, rating)}
                    />
                    <TouchableOpacity onPress={() => SetmsgEnable(!msgEnable)}>
                        <Image
                            source={require('../../../Assets/Home/comment.png')}
                            style={styles.msgImg}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {msgEnable == true ?
                <AppTextInput
                    inputContainerStyle={{ width: "90%", alignSelf: "center", paddingLeft: moderateScale(10) }}
                    placeholder="Comment"
                    onChangeText={val => setComment(val)}
                    rightAction={<Icon
                        name='send-o'
                        type='FontAwesome'
                        size={25}
                        onPress={() => { Comment_Add(), SetmsgEnable(false) }}
                    />}
                />
                : null}
        </View>
    );
};

export default NewHireSurvey30Item;

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