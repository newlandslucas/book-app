import {View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { styles } from './style';

export default function Favorite({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <Text  style={styles.title}>Favorite Screen</Text>
            <Text  style={styles.subTitle}>Coming Soon 🚀</Text>
        </View>
    )
}