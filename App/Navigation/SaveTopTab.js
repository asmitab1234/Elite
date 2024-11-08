import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hiring from '../Screens/Profile/Hiring';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import Training from '../Screens/Profile/Training';

const Tab = createMaterialTopTabNavigator();

function SaveTopTab() {
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
            <Tab.Screen name="Hiring" component={Hiring} />
            <Tab.Screen name="Training" component={Training} />
        </Tab.Navigator>
    );
}
export default SaveTopTab