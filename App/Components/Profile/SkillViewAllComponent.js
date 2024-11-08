import { StyleSheet, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import StarRating from 'react-native-star-rating';
import PerformerService from '../../Services/PerformerService'
import { TouchableOpacity } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import SkillModal from './SkillModal'

const SkillViewAllComponent = ({ item }) => {
    const [isSkillModal, SetSkillModal] = useState(false);
    const toggleModalSkill = () => {
        SetSkillModal(!isSkillModal);
    }
    useEffect(() => {
        // GetSkillData()
    }, [])
    const [skill, setskill] = useState([])
    const [PickedId, setPickedId] = useState('')
    const GetSkillData = () => {
        const data = {
            id: item?._id
        }
        PerformerService.Get_Skill_Data(data)
            .then(result => {
                if (result && result.status) {
                    setskill(result?.data);
                }
            })
            .catch(err => {
                console.log('error>>', err);
            });
    };
    return (<>

        <TouchableOpacity
            style={styles.hbbiBox}
            onPress={() => { toggleModalSkill(), setPickedId(skill[0]?.reviewData[0]?.skillID) }}
        >
            <Text
                style={styles.textStyl}>
                {item?.skill} - {' '}
            </Text>

            <View
                style={{
                    width: '32%',
                    marginLeft: moderateScale(5)
                }}>
                <StarRating
                    disabled={false}
                    rating={skill?.[0]?.reviewData?.[0]?.rating ?? "0"}
                    maxStars={5}
                    starSize={18}
                    // starStyle={{ marginLeft: moderateScale(2) }}
                    fullStarColor={'#FFD700'}
                />
            </View>

            <Text
                style={{
                    ...styles.textStyl,
                    marginLeft: moderateScale(10)
                }}>
                ({skill[0]?.reviewData[0]?.rating})
            </Text>
        </TouchableOpacity>

        <ReactNativeModal isVisible={isSkillModal}
            style={{
                flex: 1,
                marginHorizontal: moderateScale(10),
                marginVertical: moderateScale(30)
            }
            }
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            onBackdropPress={() => SetSkillModal(false)}>
            <SkillModal PickedId={PickedId}
                SetSkillModal={SetSkillModal} />
        </ReactNativeModal>
    </>
    )
}

export default SkillViewAllComponent

const styles = StyleSheet.create({
    hbbiBox: {
        backgroundColor: '#E6DCDC',
        padding: moderateScale(8),
        marginBottom: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderRadius: moderateScale(5)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    }
})