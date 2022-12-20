import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './style';

function handleLogin(login) {
    login == true
    console.log("Login True")
}

export default function Login() {
    const [login, setLogin] = useState(false)

   
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

                <TouchableOpacity style={styles.registerWrapper} onPress={(login) => setLogin(true)}>
                    <Text style={styles.registerText}>Ainda não tem cadastro?</Text>
                    <Text style={styles.registerText}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}