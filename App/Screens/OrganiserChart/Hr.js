import { Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Icon, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import TreeView from 'react-native-final-tree-view'
import NavigationService from '../../Services/Navigation'

function getIndicator(isExpanded, hasChildrenNodes) {
    if (!hasChildrenNodes) {
        return '-'
    } else if (isExpanded) {
        return '\\/'
    } else {
        return '>'
    }
}
const Hr = () => {

    const family = [
        {
            id: 'Niladri Roy',
            name: 'HR',
            Count: 8,
            children: [
                {
                    id: 'Momota Jain',
                    name: 'Manager (IT)',
                    Count: 5,
                    handelClick: 'Manager',
                },
                {
                    id: 'Kamal Jain',
                    name: 'Manager (Account)',
                    Count: 5,
                    handelClick: 'Manager',
                    children: [
                        {
                            id: 'Sara Tylor',
                            name: 'Employee',
                            Count: 10,
                        },
                        {
                            id: 'Asmita Boral',
                            name: 'Employee',
                            Count: 12,
                        },
                    ],
                },
            ],
        },
    ]

    return (
        <Container>
            <BackHeader title='HR Chart' />
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>



                <TreeView
                    onNodePress={({ level, node }) => {
                        // NavigationService.navigate(node.handelClick)
                        console.log(node)
                    }}
                    initialExpanded={true}
                    data={family} // defined above
                    renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                        // console.log(level)
                        return (
                            // <View>
                            //     <Text
                            //         style={{
                            //             marginLeft: 25 * level,
                            //         }}
                            //     >

                            //         {getIndicator(isExpanded, hasChildrenNodes)}
                            //         {node.name}
                            //     </Text>
                            // </View>
                            <View
                                style={{
                                    ...styles.organisationCard,
                                    marginLeft: moderateScale(20) * level,
                                    marginTop: moderateScale(20),
                                    backgroundColor:  level == 0 ? '#C0B4B4' : level == 1 ? '#9F9696' : '#B19A9A'
                                }}>
                                <View
                                    style={{
                                        ...styles.horizontalStyl
                                    }}>
                                    <Pressable
                                        onPress={() => NavigationService.navigate('OtherProfileNew')}>
                                        <Image
                                            source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' }}
                                            style={styles.profile}
                                        />
                                    </Pressable>
                                    <View
                                        style={{
                                            marginHorizontal: moderateScale(10)
                                        }}>
                                        <Text
                                            style={styles.texttStyl}>
                                            {node.id}
                                        </Text>
                                        <Text
                                            style={{
                                                // ...styles.texttStyl,
                                                fontFamily: FONTS.Roboto.regular,
                                                fontSize: moderateScale(12)
                                            }}>
                                            {node.name}
                                        </Text>
                                    </View>
                                </View>

                                {node.name == 'Employee' ?
                                    <View
                                        style={styles.no_box}>

                                        <Icon
                                            name='user-plus'
                                            type='FontAwesome5'
                                            size={14}
                                        />
                                    </View>
                                    :
                                    <View
                                        style={{
                                            ...styles.horizontalStyl
                                        }}>
                                        <Icon
                                            name='user-plus'
                                            type='FontAwesome5'
                                            size={14}
                                            style={{
                                                marginRight: moderateScale(10)
                                            }}
                                        />
                                        <TouchableOpacity
                                            onPress={() =>
                                                NavigationService.navigate(node.handelClick)
                                                // console.log('.....')
                                            }
                                            style={styles.no_box}>

                                            <Text
                                                style={{
                                                    ...styles.texttStyl,
                                                }}>
                                                {node.Count}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>}
                            </View>
                        )
                    }}
                />

            </ScrollView>
        </Container>
    )
}

export default Hr

const styles = StyleSheet.create({
    organisationCard: {
        width: moderateScale(250),
        height: moderateScale(40),
        borderRadius: moderateScale(8),
        // backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: moderateScale(8)
    },
    profile: {
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(8)
    },
    texttStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(13)
    },
    no_box: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(8),
        zIndex: 3
    },
    horizontalStyl: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    horizontal_line_styl: {
        height: moderateScale(1),
        width: '20%',
        borderColor: '#545454',
        borderWidth: moderateScale(0.5),
        borderStyle: 'dashed',
    },
    vertical_line_styl: {
        width: moderateScale(1),
        height: '100%',
        borderColor: '#545454',
        borderWidth: moderateScale(0.5),
        borderStyle: 'dashed',
    }
})