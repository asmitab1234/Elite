import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import JoinInitiativesCard from '../../Components/DrawerComponent/JoinInitiatives/JoinInitiativesCard'
import InitiativeService from '../../Services/InitiativeService'
import { ScrollView } from 'react-native'
import { moderateScale } from '../../Constants/PixelRatio'
import { RefreshControl } from 'react-native'
const { width, height } = Dimensions.get('window');
const Organization = () => {
    useEffect(() => {
        Initiative_Get()
    }, [])
    const [Initiative, SetInitiative] = useState([]);
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    // ===============================Initiative View Start=============================================
    const Initiative_Get = () => {
        InitiativeService.Get_Initiative_Data()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    SetInitiative(result?.data)
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    // ===============================Initiative View END===============================================
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        Initiative_Get()
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1, height: height / 1.5 }} /> : <>
                    {Initiative.map((item, index) => (
                        <JoinInitiativesCard
                            key={index}
                            item={item}
                        />
                    ))}
                </>}
            </ScrollView>
        </View>
    )
}

export default Organization

const styles = StyleSheet.create({})