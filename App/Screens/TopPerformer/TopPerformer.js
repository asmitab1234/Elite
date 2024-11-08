import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Icon, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import PerformerCard from '../../Components/DrawerComponent/Performer/PerformerCard'
import PerformerService from '../../Services/PerformerService'
import { ActivityIndicator } from 'react-native'
import { RefreshControl } from 'react-native'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const TopPerformer = () => {
    useEffect(() => {
        GetPerformerList()
    }, [])
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    const [PerformerData, setPerformerData] = useState([])
    //Advocay Category Wise List API
    const GetPerformerList = () => {
        PerformerService.Get_Performer_List()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    setPerformerData(result?.data);
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        GetPerformerList()

        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <Container>
            <BackHeader title='Top Performer' />
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <Pressable
                    onPress={() => NavigationService.navigate('AddPerForm')}
                    style={styles.BulletinoardAdd}>
                    <Text
                        style={styles.bulletinAddText}>
                        Add Performer
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
                    {PerformerData.map((item, index) => (
                        <PerformerCard
                            key={index}
                            item={item}
                        />
                    ))}

                </ScrollView>
            </>}
        </Container>
    )
}

export default TopPerformer

const styles = StyleSheet.create({
    BulletinoardAdd: {
        backgroundColor: '#F5F5F5',
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