import { View, Text, SafeAreaView, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function Login() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>IBM</Text>
                <Text style={styles.subTitle}>Books</Text>
            </View>
            
            <View style={styles.loginButtonWrapper}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerWrapper}>
                    <Text style={styles.registerText}>Ainda não tem cadastro?</Text>
                    <Text style={styles.registerText}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}