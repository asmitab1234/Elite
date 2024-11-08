import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-native-basic-elements'
import GroupsCard from '../../Components/DrawerComponent/AfinityGroups/GroupsCard'
import AffinityGroupService from '../../Services/AffinityGroupService'

const Groups = () => {
    const [affinity, Setaffinity] = useState([]);
    console.log("affinity------------------------------", JSON.stringify(affinity))
    const [LoaderStatus, setLoaderStatus] = useState(true)
    useEffect(() => {
        affinity_Post()
    }, [])

    const affinity_Post = () => {
        AffinityGroupService.Get_Affinity_outher()
            .then(result => {
                setLoaderStatus(true)
                // console.log('getBanner API Fetched=====>>>', JSON.stringify(result));
                if (result && result.status) {
                    Setaffinity(result?.data)
                    setLoaderStatus(false)
                }
            })
            .catch(err => {
                console.log('error>>', err);
                setLoaderStatus(false)
            });
    };

    // const grpArr = [
    //     {
    //         img: require('../../Assets/Home/user.png'),
    //         name: 'Group Name',
    //         created: 'Lorem Ipsum'
    //     },
    //     {
    //         img: require('../../Assets/Home/user.png'),
    //         name: 'Group Name',
    //         created: 'Lorem Ipsum'
    //     },
    //     {
    //         img: require('../../Assets/Home/user.png'),
    //         name: 'Group Name',
    //         created: 'Lorem Ipsum'
    //     },

    // ]
    return (
        <Container>
            {LoaderStatus ? <ActivityIndicator size={40} style={{ flex: 1 }} /> : <>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    {affinity.map((item, index) => (
                        <GroupsCard
                            key={index}
                            item={item}
                        />
                    ))}
                </ScrollView>
            </>}
        </Container>
    )
}

export default Groups

const styles = StyleSheet.create({})