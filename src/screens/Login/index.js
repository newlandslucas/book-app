import { View, Text, SafeAreaView, TouchableOpacity, Button, Pressable } from 'react-native';
import { styles } from './style';


export default function Login({ navigation }) {
   
    function GoHomeScreen(){
        navigation.navigate('Home')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>IBM</Text>
                <Text style={styles.subTitle}>Books</Text>
            </View>
            
            <View style={styles.loginButtonWrapper}>
                <Pressable style={styles.Button} onPress={GoHomeScreen}>

                    <Text>Login with W3</Text>
                </Pressable>

                <TouchableOpacity style={styles.registerWrapper} onPress={GoHomeScreen}>
                    <Text style={styles.registerText}>Ainda não tem cadastro?</Text>
                    <Text style={styles.registerText}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}