import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { styles } from './styles';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.title}>My Books</Text>
                <TouchableOpacity>
                    <Entypo name="menu" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}