import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Job from '../Screens/Job/Job';
import { Icon } from 'react-native-basic-elements';
import { Image, StyleSheet } from 'react-native';
import { moderateScale } from '../Constants/PixelRatio';
import Employee from '../Screens/Employee/Employee';
import Post from '../Screens/Post/Post';
import DrawerTab from './DrawerTab';
import Survey from '../Screens/Survay/Survay';
import Training from '../Screens/Training/Training';
import { FONTS } from '../Constants/Fonts';
import CreateNewPost from '../Screens/Home/CreateNewPost';

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: FONTS.Roboto.regular,
                    fontSize: moderateScale(12)
                },
            }}

            initialRouteName='DrawerTab'
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/Home.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                        />
                    )
                }}
                name="DrawerTab"
                component={DrawerTab}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/Training.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                        />
                    )
                }}
                name="Learning" component={Training} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/post.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                        />
                    )
                }}
                name="Post" component={CreateNewPost} />




            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/Survey.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                        />
                    )
                }}
                name="Survey" component={Survey} />
            {/* <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/employee.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                        />
                    )
                }}
                name="Employee" component={Employee} /> */}
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/job.png')}
                            style={styles.bottomImg}
                            resizeMode='contain'
                        />
                    )
                }}
                name="Job" component={Job} />
        </Tab.Navigator>
    );
}
export default BottomTab
const styles = StyleSheet.create({
    bottomImg: {
        height: moderateScale(22),
        width: moderateScale(22)
    }
})