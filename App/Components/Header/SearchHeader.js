import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Icon, StatusBar, useTheme } from 'react-native-basic-elements'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'

const SearchHeader = () => {
    const color = useTheme()
    return (
        <View>
            <StatusBar backgroundColor={color.pageBackgroundColor} barStyle='dark-content' />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(13),
                    marginBottom: moderateScale(15),
                    marginHorizontal: moderateScale(15),
                }}>
                <Icon
                    onPress={() => NavigationService.back()}
                    name='chevron-small-left'
                    type='Entypo'
                    size={35}
                />
                <AppTextInput
                    leftIcon={{
                        name: 'search1',
                        type: 'AntDesign'
                    }}
                    placeholder='Search'
                    inputContainerStyle={styles.searchBox}
                    mainContainerStyle={{
                        width: '85%'
                    }}
                />
            </View>
        </View>
    )
}

export default SearchHeader

const styles = StyleSheet.create({
    searchBox: {
        height: moderateScale(36),

        borderRadius: moderateScale(50),

    },
})