import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import HiringCard from '../../Components/Profile/HiringCard'
import { moderateScale } from '../../Constants/PixelRatio'

const HiringViewAll = () => {
    const hiringArr = [
        {
            Opening: '50',
            SkillRequired: 'React'
        },
        {
            Opening: '50',
            SkillRequired: 'React'
        },
        {
            Opening: '50',
            SkillRequired: 'React'
        },
        {
            Opening: '50',
            SkillRequired: 'React'
        },
    ]
    return (
        <Container
            style={styles.hiringMap}>
            {hiringArr.map((item, index) => (
                <View
                    key={index}
                    style={{
                        marginHorizontal: moderateScale(15)
                    }}>
                    <HiringCard
                        key={index}
                        item={item}
                    />
                </View>
            ))}
        </Container>
    )
}

export default HiringViewAll

const styles = StyleSheet.create({
    hiringMap: {
        marginTop: moderateScale(12)
    }
})