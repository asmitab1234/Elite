import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import MsgListComponent from '../../Components/Chat/MsgListComponent'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const MsgList = () => {
    return (
        <Container>
            <BackHeader title='Chat' />
            <AppTextInput
                leftIcon={{
                    name: 'search1',
                    type: 'AntDesign',
                    size: moderateScale(17)
                }}
                placeholder='Search '
                inputStyle={{
                    fontFamily: FONTS.Roboto.medium,
                    fontSize: moderateScale(11)
                }}
                inputContainerStyle={{
                    borderRadius: moderateScale(50),
                    height: moderateScale(35)
                }}
                mainContainerStyle={{
                    marginBottom: moderateScale(15),
                    marginHorizontal:moderateScale(15)
                }}
            />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <MsgListComponent
                    key={index} />
            ))}
        </Container>
    )
}

export default MsgList

const styles = StyleSheet.create({})