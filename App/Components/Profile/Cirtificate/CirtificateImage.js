import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../Constants/PixelRatio'

const CirtificateImage = () => {
    return (
        <>
            <Image
                source={require('../../../Assets/Home/cirtificate.png')}
                style={{
                    height: moderateScale(300),
                    width: moderateScale(300),
                    borderRadius: moderateScale(10),
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}
                resizeMode='contain'
            />
        </>
    )
}

export default CirtificateImage

const styles = StyleSheet.create({

})