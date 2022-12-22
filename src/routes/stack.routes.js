import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import ModalTest from '../screens/ModalTest';


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='modalTest'
                component={ModalTest}
            />
        </Navigator>
    )

}