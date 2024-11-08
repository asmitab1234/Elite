import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import Star from '../../../Components/Star/Star'
import { FONTS } from '../../../Constants/Fonts'
import NewHireCheckListItem from '../../../Components/OnbordingComponents/NewHireCheckList/NewHireCheckListItem'
const width = Dimensions.get('window').width

const NewHireCheckList = ({selectID}) => {
    console.log("NewHireCheckListNewHireCheckList==>",selectID)
    return (
        <Container>
            <ScrollView>
                {[1, 2, 3].map((item, index) => (
                    <NewHireCheckListItem />
                ))}
            </ScrollView>
        </Container>
    )
}
export default NewHireCheckList

const styles = StyleSheet.create({
    viewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(8),
        width: '92%'
        // flex:1
    },
    starImg: {
        flexDirection: 'row',
        alignItems: 'center',
        // flex:1,
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

})