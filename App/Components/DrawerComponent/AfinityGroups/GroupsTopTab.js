import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Groups from '../../../Screens/AfinityGroups/Groups';
import Others from '../../../Screens/AfinityGroups/Others';
import { FONTS } from '../../../Constants/Fonts';
import { moderateScale } from '../../../Constants/PixelRatio';

const Tab = createMaterialTopTabNavigator();

function GroupsTopTab() {
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
            <Tab.Screen name="My Groups" component={Groups} />
            <Tab.Screen name="Others" component={Others} />
        </Tab.Navigator>
    );
}
export default GroupsTopTab