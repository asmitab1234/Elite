import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View, PermissionsAndroid, Platform } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Icon, Text } from 'react-native-basic-elements'
import { Image } from 'react-native'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import AdvocacyHeader from '../../Components/Header/AdvocacyHeader'
import { useRoute } from '@react-navigation/native'
import AdvocacyService from '../../Services/AdvocacyService'
import { ActivityIndicator } from 'react-native'
import { RefreshControl } from 'react-native'
import moment from 'moment'
import NavigationService from '../../Services/Navigation'
import BackHeader from '../../Components/Header/BackHeader'
const { height, width } = Dimensions.get('window')

const BulletinSinglePage = ({ route }) => {
    console.log('route---', route)

    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    const [SingleData, setSingleData] = useState([])


    return (
        <Container>
            <BackHeader title='Bulletin' />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Image
                    style={styles.imageStyl}
                    source={{ uri: 'https://images.unsplash.com/photo-1660855643210-41994974a0be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDI2dGglMjBqYW51YXJ5fGVufDB8fDB8fHww' }}
                />

                <Text
                    style={styles.titleStyl}>
                    Lorem ipsum dolor sit amet
                </Text>


                <Text
                    style={styles.date}>
                    Feb 22nd , 2024
                </Text>


                <View style={styles.lineStyl} />
                
                <Text
                    style={styles.description}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat n
                </Text>

                {/* <Text
                    style={styles.downloadText}>
                    Download
                </Text>
                <TouchableOpacity
                    style={styles.iconView}>
                    <Icon
                        name='file-pdf'
                        type='FontAwesome5'
                        size={30}
                        color={'#CF3131'}
                    />
                </TouchableOpacity> */}

            </ScrollView>

        </Container>
    )
}

export default BulletinSinglePage

const styles = StyleSheet.create({
    imageStyl: {
        height: height / 3,
        width: width,
    },
    description: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15),
        textAlign: 'justify'
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(16),
        // width:'75%',
        marginHorizontal: moderateScale(15),
        marginVertical: moderateScale(8)
    },
    bottomCardView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(10),
        marginLeft: moderateScale(15)
    },
    user: {
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(80)
    },
    nameText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(11),
        marginHorizontal: moderateScale(8)
    },
    date: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(10),
        marginHorizontal: moderateScale(8),
        textAlign: 'right'
    },
    downloadText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(15)
    },
    iconView: {
        marginLeft: moderateScale(15),
        marginVertical: moderateScale(8),
        padding: moderateScale(15),
        borderWidth: moderateScale(1),
        borderStyle: 'dashed',
        borderRadius: moderateScale(4),
        width: moderateScale(60),
        alignItems: 'center',
        justifyContent: 'center'
    },
    lineStyl: {
        backgroundColor: '#CCCCCC',
        height: moderateScale(1),
        width: '90%',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    }
})