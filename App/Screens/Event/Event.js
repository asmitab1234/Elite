import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import EventCard from '../../Components/DrawerComponent/EventCard/EventCard'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'

const Event = () => {
    const eventArr = [
        {
            image: '',
            name: 'lorem Ipsum',
            desc: 'Lorem ipsum dolor sit amet',
            date: '2024-01-31'
        },
        {
            image: '',
            name: 'lorem Ipsum',
            desc: 'Lorem ipsum dolor sit amet',
            date: '2024-01-31'
        },
        {
            image: '',
            name: 'lorem Ipsum',
            desc: 'Lorem ipsum dolor sit amet',
            date: '2024-01-31'
        },
        {
            image: '',
            name: 'lorem Ipsum',
            desc: 'Lorem ipsum dolor sit amet',
            date: '2024-01-31'
        },
    ]
    return (
        <Container>
            <BackHeader title='Events' />
            {eventArr.map((item, index) => (
                <EventCard
                    key={index}
                    item={item}
                />
            ))}
            <Pressable
                onPress={() => NavigationService.navigate('EventSet')}
                style={styles.plus}>
                <Image
                    source={require('../../Assets/event/plus.png')}
                    style={{
                        height: moderateScale(30),
                        width: moderateScale(30),

                    }}
                />
            </Pressable>
        </Container>
    )
}

export default Event

const styles = StyleSheet.create({
    plus: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(10),
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center'
    }
})