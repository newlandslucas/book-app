import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, Fontisto, Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import ModalTest from '../screens/ModalTest';
import Favorite from '../screens/Favorite';
import CustomDrawer from '../components/customDrawer';
import Login from '../screens/Login';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
    return (
        <Navigator 
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#FFF',
            drawerInactiveTintColor: '#333',
            drawerActiveBackgroundColor: '#000',
            drawerLabelStyle: {marginLeft: -15, fontSize: 16}
        }}
        >

            <Screen
                name='Home'
                component={Home}
                options={{
                    drawerIcon: ({color}) => (
                        <Entypo name="home" size={18} color={color} />
                    )
                }}


            />
            <Screen
                name='Detail'
                component={ModalTest}
                options={{
                    drawerIcon: ({color}) => (
                        <Entypo name="book" size={18} color={color} />
                    )
                }}
            />

            <Screen
                name='Favorite'
                component={Favorite}
                options={{
                    drawerIcon: ({color}) => (
                        <Fontisto name="favorite" size={18} color={color} />
                    )
                }}
            />
            <Screen 
                name="Exit"
                component={Login}
                options={{
                    drawerIcon: ({color}) => (
                        <Ionicons name="ios-exit-outline" size={18} color={color}/>
                        )
                }}
            />
        </Navigator>
    )

}