import { Text } from 'react-native-basic-elements';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ActivityPost from '../Components/Profile/ActivityPost';
import ActivityReviewCard from '../Components/Profile/ActivityReviewCard';


function ActivityTopTab({ item, index, IIndex, setIIndex }) {
    return (
        <View>
           
         
        </View>
    );
}
export default ActivityTopTab
const styles = StyleSheet.create({
    textFollower: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },

    followBox: {
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(12),
    },
})