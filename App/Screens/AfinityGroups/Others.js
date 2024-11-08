import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-native-basic-elements'
import GroupsCard from '../../Components/DrawerComponent/AfinityGroups/GroupsCard'
import OthersCard from '../../Components/DrawerComponent/AfinityGroups/OthersCard'
import AffinityGroupService from '../../Services/AffinityGroupService'
import { ActivityIndicator } from 'react-native'

const Others = () => {

    const [affinityOther, SetaffinityOther] = useState([]);
    const [LoaderStatus, setLoaderStatus] = useState(true)
    useEffect(() => {
        affinity_Post_other()
    }, [])

    const affinity_Post_other = () => {
        AffinityGroupService.Get_Affinity()
            .then(result => {
                setLoaderStatus(true)
                console.log('affinity_Post_other API Fetched=====>>>', JSON.stringify(result));
                if (result && result.status) {
                    SetaffinityOther(result?.data)
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
                    {affinityOther.map((item, index) => (
                        <OthersCard
                            key={index}
                            item={item}
                        />
                    ))}
                </ScrollView>
            </>}
        </Container>
    )
}

export default Others

const styles = StyleSheet.create({})