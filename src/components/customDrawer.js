import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
export default function CustomDrawer(props, navigation) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} style={{backgroundColor: '#FFF'}}>
                <View>
                    <Image source={require('../assets/profileImage.png')} style={{height: 70, width: 70, borderRadius: 40, marginBottom: 10, marginLeft: 10}} />
                    <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold', marginBottom: 5, marginLeft: 10}}>Lucas Newlands</Text>
                    <Text style={{color: '#000', fontSize: 14,marginBottom: 10, marginLeft: 10}}>Software Application Developer</Text>
                    <View style={{width: '100%', height: 0.5, backgroundColor: '#CCC'}}></View>
                </View>
                
                <View style={{flex: 1, backgroundColor: '#FFF', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>

    )
}