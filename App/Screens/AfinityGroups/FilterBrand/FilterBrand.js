import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../Constants/PixelRatio'
import { Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../../Constants/Fonts'

const FilterBrand = ({ item, setBrandState, selectArr }) => {


    // console.log("setBrandState========================",setBrandState)
    const MultipleBrandSelect = () => {
        //  let data = 
        selectArr(setBrandState.map(it => {
            return it._id == item._id ? { ...it, select: !item.select } : it
        }))
        // selectArr(data)
    }
    return (
        <View style={{ flex: 1 }}>
            <View>
                <TouchableOpacity
                    onPress={() => MultipleBrandSelect()}
                    style={{
                        ...styles.horizontal_view,
                        marginVertical: moderateScale(10),
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        {item.select ? <Icon
                            name='checkmark'
                            type='Ionicon'
                            size={20}
                        /> : null}

                        <Text style={styles.size_txt}>{item.userName}</Text>
                    </View>


                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',

        flexWrap: 'wrap',
    },
    size_txt: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(15)
    },
    number_txt: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(10)
    },
})
export default FilterBrand