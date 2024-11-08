import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Icon, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import BulletinCard from '../../Components/DrawerComponent/Bulletin/BulletinCard'
import BulletinService from '../../Services/BulletinService'
import { ScrollView } from 'react-native'
import { RefreshControl } from 'react-native'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const Bulletin = () => {
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    const [Bulletin, SetBulletin] = useState();
    console.log("Bulletin=============>>>>>>>>>>>", Bulletin)
    useEffect(() => {
        getBulletin()
    }, [])
    // ===============================Bulletin Function Start===============================================
    const getBulletin = () => {
        BulletinService.Get_Bulletin()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    SetBulletin(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    // ===============================Bulletin Function Start===============================================
    const bulletinArr = [
        {
            name: 'Lorem Ipsum',
            date: '2025-01-26'
        },
        {
            name: 'Lorem Ipsum',
            date: '2025-01-26'
        },
        {
            name: 'Lorem Ipsum',
            date: '2025-01-26'
        },
    ]
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getBulletin()
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <Container>
            <BackHeader title='Bulletin' />
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>

                <Pressable
                    onPress={() => NavigationService.navigate('CreateBulletin')}
                    style={styles.BulletinoardAdd}>
                    <Text
                        style={styles.bulletinAddText}>
                        Add Bulletin
                    </Text>
                    <View
                        style={styles.plusView}>
                        <Icon
                            name='plus'
                            type='AntDesign'
                        />
                    </View>
                </Pressable>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >
                    {Bulletin?.map((item, index) => (

                        <BulletinCard
                            key={index}
                            item={item} />

                    ))

                    }
                </ScrollView>
            </>}
        </Container>
    )
}

export default Bulletin

const styles = StyleSheet.create({
    BulletinoardAdd: {
        backgroundColor: '#DBC6B1',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 15,
        marginBottom: 10

    },
    bulletinAddText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    plusView: {
        borderRadius: moderateScale(30),
        backgroundColor: '#FFDF12',
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})