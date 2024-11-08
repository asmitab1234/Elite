import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import { useNavigation } from '@react-navigation/native'

const HomeStoryCard = () => {
    const navigation = useNavigation()
    const storyArr = [
        {
            img: require('../../Assets/Home/event1.jpg'),
            title: 'Event',
            handelClick: 'CreateEvent'
        },
        {
            img: require('../../Assets/Home/topperformer.jpg'),
            title: 'Top Performer',
            handelClick: 'TopPerformer'
        },
        {
            img: require('../../Assets/Home/bulletin.jpg'),
            title: 'Bulletin',
            handelClick: 'Bulletin'
        },
        {
            img: require('../../Assets/Home/onboarding.jpeg'),
            title: 'Onboarding',
            handelClick: 'Onbording'
        },
        {
            img: require('../../Assets/Home/documentreopsitayCard.png'),
            title: 'Document Repository',
            handelClick: 'Document'
        },
        {
            img: require('../../Assets/Home/advocacy1.jpg'),
            title: 'Advocacy',
            handelClick: 'Advocacy'
        },
        {
            img: require('../../Assets/Home/bulletin.jpg'),
            title: 'Join Projects',
            handelClick: 'JoinInitiatives'
        },
        {
            img: require('../../Assets/Home/thanku.jpg'),
            title: 'Thank You Card',
            handelClick: 'ThankYouCard'
        },
        {
            img: require('../../Assets/Home/CLAimpoint.webp'),
            title: 'Claim Point',
            handelClick: 'ClaimPoint'},
    ]
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                marginTop: moderateScale(12)
            }}>
            {storyArr.map((item, index) => (
                <Pressable
                    key={index}
                    style={{
                        paddingHorizontal: moderateScale(5)
                    }}
                    onPress={() =>
                        // {
                        //     item.title == 'Advocacy' ?
                        //     NavigationService.navigate('Advocacy',{first:true})
                        //     :
                        NavigationService.navigate(item.handelClick)}
                // }

                >
                    <ImageBackground
                        source={item.img}
                        style={[styles.ImageStyl,
                        {
                            marginLeft: index == 0 ? moderateScale(10) : null,
                            marginRight:
                                index == storyArr.length - 1 ? moderateScale(10) : null,
                        },
                        ]}
                        resizeMode='contain'
                        borderRadius={10}
                    >
                        <ImageBackground
                            source={require('../../Assets/Home/shadow.png')}
                            style={{
                                ...styles.ImageStyl,
                            }}
                            borderRadius={10}
                        >
                            <Text
                                style={styles.titleStyl}>
                                {item.title}
                            </Text>
                            {/* <Text
                                style={styles.titleSubStyl}>
                                Lorem ipsum dolor sit amet
                            </Text> */}
                        </ImageBackground>
                    </ImageBackground>
                </Pressable>
            ))}
        </ScrollView>
    )
}

export default HomeStoryCard

const styles = StyleSheet.create({
    ImageStyl: {
        height: moderateScale(150),
        width: moderateScale(90),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(10),
        // backgroundColor: '#777777',
        paddingHorizontal: moderateScale(5)
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(15),
        color: '#FFFFFF',
        position: 'absolute',
        bottom: moderateScale(10),
        textAlign: 'center',

    },
    titleSubStyl: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(13),
        color: '#FFFFFF',
        position: 'absolute',
        bottom: moderateScale(10),
        textAlign: 'center'
    }
})