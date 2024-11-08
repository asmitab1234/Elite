import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import ActivityPostViewAll from '../../Components/Profile/ActivityPostViewAll'
import ActivityReviewCardViewAll from '../../Components/Profile/ActivityReviewCardViewAll'
import { FONTS } from '../../Constants/Fonts'

const ActivityViewAll = ({route}) => {
    console.log('====================================');
    console.log(route.params.thankYouCard);
    console.log('====================================');
    const [ActivityArrActive, setActivityArrActive] = useState(route.params.thankYouCard ?1:0)
    const ActivityArr = [
        {
            title: 'Post',
        },
        {
            title: 'Thank You Card ',
        },
    ]
    return (
        <Container>
            <BackHeader title='Activity' />
            <ScrollView
                contentContainerStyle={{ marginHorizontal: moderateScale(15) }}
                showsVerticalScrollIndicator={false}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-between',
                }}>
                    {ActivityArr.map((it, index) => (
                        <TouchableOpacity
                            onPress={() => setActivityArrActive(index)}
                            style={{
                                ...styles.followBox,
                                backgroundColor: ActivityArrActive == index ? '#D6BFBF' : '#EFEFEF',
                                width: moderateScale(138)
                            }}
                        >
                            <Text
                                style={styles.textFollower}>
                                {it.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {ActivityArrActive == 0 ? 
                <ActivityPostViewAll /> : ActivityArrActive == 1 ? <ActivityReviewCardViewAll /> : null}
            </ScrollView>
        </Container>
    )
}

export default ActivityViewAll

const styles = StyleSheet.create({
    textFollower: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },

    followBox: {
        width: moderateScale(145),
        height: moderateScale(35),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
})