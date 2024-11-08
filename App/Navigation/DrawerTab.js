import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home/Home';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerTab() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
            drawerContent={props => <DrawerContent {...props}/>}
        >
            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="Profile" component={Profile} /> */}
        </Drawer.Navigator >
    );
}
export default DrawerTab