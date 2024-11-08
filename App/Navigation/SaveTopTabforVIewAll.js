import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import HiringViewAll from '../Screens/Profile/HiringViewAll';
import TrainingViewAll from '../Screens/Profile/TrainingViewAll';

const Tab = createMaterialTopTabNavigator();

function SaveTopTabforVIewAll() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: FONTS.Roboto.bold,
                    fontSize: moderateScale(12),
                    textTransform: 'none'
                }
            }}
        >
            <Tab.Screen name="Hiring" component={HiringViewAll} />
            <Tab.Screen name="Training" component={TrainingViewAll} />
        </Tab.Navigator>
    );
}
export default SaveTopTabforVIewAll