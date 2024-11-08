import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
const { height, width } = Dimensions.get('window')

const AllCategory = () => {
    return (
        <View>
            <Image
                style={styles.topButtonStyl}
                source={{ uri: 'https://media.istockphoto.com/id/1167945070/photo/late-nights-are-just-a-part-of-the-job.webp?s=1024x1024&w=is&k=20&c=1l6LdFMGM1I2RGsmhh7yW2on1EK4oTaLYyb6V_5Qhy0=' }}
            />
        </View>
    )
}

export default AllCategory

const styles = StyleSheet.create({

    topButtonStyl: {
        height: moderateScale(200),
        width: '95%',
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(10)
    }
})