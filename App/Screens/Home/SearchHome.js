import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Icon, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import SearchHeader from '../../Components/Header/SearchHeader'

const searchHome = () => {
    return (
        <Container>
            <SearchHeader />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: moderateScale(15),
                    marginBottom: moderateScale(13),
                    justifyContent: 'space-between'
                }}>
                <Text
                    style={styles.searchText}>
                    Recent Search
                </Text>
                <Text
                    style={styles.searchText}>
                    Clear
                </Text>
            </View>

            {[1, 2, 3, 4].map((item, index) => (
                <View
                    key={index}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: moderateScale(15),
                        marginBottom: moderateScale(13),
                        justifyContent: 'space-between'
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            name='search1'
                            type='AntDesign'
                            size={16}
                        />
                        <Text
                            style={styles.searchText}>
                            Sara Tylor
                        </Text>
                    </View>
                    <Image
                        style={{
                            height: moderateScale(30),
                            width: moderateScale(30),
                            borderRadius: moderateScale(50)
                        }}
                        source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    />
                </View>
            ))}

        </Container>
    )
}

export default searchHome

const styles = StyleSheet.create({
    searchBox: {
        height: moderateScale(36),
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(50),
        marginTop: 0,
        marginBottom: moderateScale(15)
    },
    searchText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15),
        marginLeft: moderateScale(10)
    }
})