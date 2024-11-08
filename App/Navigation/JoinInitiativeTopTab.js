import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import Organization from '../Screens/JoinInitiatives/Organization';
import Project from '../Screens/JoinInitiatives/Project';

const Tab = createMaterialTopTabNavigator();

function JoinInitiativeTopTab() {
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
            <Tab.Screen name="Organization Specific" component={Organization} />
            <Tab.Screen name="Project Specific" component={Project} />
        </Tab.Navigator>
    );
}
export default JoinInitiativeTopTab