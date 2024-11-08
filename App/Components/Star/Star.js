import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon, { IconType } from './Icon'




const containerStyleIn = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}


const Star = ({
    TotalStar = 5,
    starSize = 40,
    ActiveStarType = "AntDesign",
    ActiveStarColor = "#FFC700",
    ActiveStarName = "star",
    DeactivateStarType = "AntDesign",
    DeactivateStarColor = "#FFC700",
    DeactivateStarName = "staro",
    defaultStar = 0,
    isDisable = false,
    containerStyle = containerStyleIn,
    itemStyle = {},
    item
}) => {
    // console.log("itemitemitemitem on star=====>",item)
    const [AllStarData, setAllStarData] = useState([])
// console.log("AllStarData=====>",AllStarData)


    function changeIconStatus(item) {
        if (isDisable) return

        setAllStarData(s => s.map((i) => {
            if (item.id >= i.id) {
                return {
                    ...i,
                    status: true
                }
            } else {
                return {
                    ...i,
                    status: false
                }
            }
        }))
    }
    // useEffect(() => {
    //     console.log(AllStarData);
    // }, [AllStarData])
    useEffect(() => {
        setAllStarData([])
        for (let i = 0; i < TotalStar; i++) {
            // console.log(defaultStar > i && defaultStar < i + 1)
            if (defaultStar > i && defaultStar < i + 1) {
                setAllStarData(s => [...s, {
                    status: 'half',
                    id: i,
                }])
                // 5.5 > 5 && 5.5 < 6
            } else if (defaultStar > i) {
                setAllStarData(s => [...s, {
                    status: true,
                    id: i,
                }])
            } else {
                setAllStarData(s => [...s, {
                    status: false,
                    id: i,
                }])
            }

        }
    }, [])

    return (
        <View style={{ ...containerStyle }}>
            {AllStarData.map((item, index) => {
                return (
                    <Pressable style={{ ...itemStyle, }} onPress={() => changeIconStatus(item)}>
                        <Icon
                            type={item.status == 'half' ? 'FontAwesome' : item.status == true ? ActiveStarType : DeactivateStarType}
                            name={item.status == 'half' ? 'star-half' : item.status == true ? ActiveStarName : DeactivateStarName}
                            size={starSize}
                            style={item.status == 'half' ?{
                                position: "absolute",
                                zIndex: 4908
                            }:{}}
                            color={item.status == 'half' ? ActiveStarColor : item.status == true ? ActiveStarColor : DeactivateStarColor}
                        />
                        {item.status == 'half' ?
                            <Icon
                               
                                type={DeactivateStarType}
                                name={DeactivateStarName}
                                size={starSize}
                                color={DeactivateStarColor}
                            /> : null}
                    </Pressable>
                )
            })}
        </View>
    )
}

export default Star

const styles = StyleSheet.create({})