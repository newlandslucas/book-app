import { View, Text } from 'react-native';
import { styles } from './style';


export default function Card() {
    return(
        <View style={styles.container}>
            <View style={styles.image}>

            </View>
            <View style={styles.bottom}>
                <Text style={styles.title}>React Js</Text>
                <Text style={styles.price}>R$199,90</Text>
            </View>
            
        </View>
    )
}