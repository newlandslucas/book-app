import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { styles } from './style';

export default function ModalTest({ navigation }) {

    function GoBack(){
        navigation.navigate('home')
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZbB_AR51tHvWFsO3RkOlHhpzqldrT9qHm3BE6m4ZsGf-nHlwD-K03JC2Gr1N0LoBOYQ&usqp=CAU' }} style={styles.image} resizeMode="contain" />
                </View>

                <View style={styles.info}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={styles.title}>Python Crash Course</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <AntDesign name="close" size={26} color="black" style={{marginRight: 15}}/>
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={styles.author}>Eric Matthes</Text>

                    <ScrollView showsVerticalScrollIndicator={true}>
                        <Text style={styles.description}>The best-selling Python book in the world, with over 1 million copies sold!
                            A fast-paced, no-nonsense, updated guide to programming in Python.
                            If you've been thinking about learning how to code or picking up Python, this internationally bestselling guide to the most popular programming language is your quickest, easiest way to get started and go! Even if you have no experience whatsoever, Python Crash Course, 2nd Edition, will </Text>
                    </ScrollView>
                    
                </View>

                <View style={styles.footer}> 
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonPurchase}>Comprar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonFavorite}>Favoritar</Text>
                        <Fontisto name="favorite" size={20} color="black" style={{marginLeft: 5}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}