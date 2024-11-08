import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import JoinInitiativesCard from '../../Components/DrawerComponent/JoinInitiatives/JoinInitiativesCard'
import InitiativeService from '../../Services/InitiativeService'
import { ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native'
import { RefreshControl } from 'react-native'

const Project = () => {

    useEffect(() => {
        Project_Initiative_Get()
    }, [])
    const [ProjectInitiative, SetProjectInitiative] = useState([]);
    const [LoaderStatus, setLoaderStatus] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    // console.log("ProjectInitiative---------------->", ProjectInitiative)
    // ===============================Project View Start=============================================
    const Project_Initiative_Get = () => {
        InitiativeService.Get_Project_Initiative_Data()
            .then(result => {
                setLoaderStatus(true)
                if (result && result.status) {
                    SetProjectInitiative(result?.data)
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };
    // ===============================Project View END===============================================
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        Project_Initiative_Get()
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                    {ProjectInitiative.map((item, index) => (
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

export default Project

const styles = StyleSheet.create({})