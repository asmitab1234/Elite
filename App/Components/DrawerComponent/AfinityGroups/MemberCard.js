import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../Constants/PixelRatio'

const MemberCard = () => {
    return (
        <View>
            <Image
                source={{ uri: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' }}
                style={styles.imageStyl}
            />
        </View>
    )
}

export default MemberCard

const styles = StyleSheet.create({
    imageStyl: {
        height: moderateScale(35),
        width: moderateScale(35),
        borderRadius: moderateScale(80),
        marginVertical: moderateScale(10),
        marginHorizontal:moderateScale(2),
    }
})