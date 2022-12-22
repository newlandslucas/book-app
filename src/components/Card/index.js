import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';


export default function Card({ book, navigation }) {

    function GoModal(){
        navigation.navigator('modalTest')
    }
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                    if (amount != undefined) {
                        return (
                            <>
                            <TouchableOpacity style={styles.container}>
                                <View style={styles.image}>
                                    <Image source={{uri: thumbnail}} style={styles.image1} resizeMode="contain"/>
                                </View>
                                <View style={styles.bottom}>
                                    <Text style={styles.title}>{item.volumeInfo.title}</Text>
                                    <Text style={styles.price}>R$ {amount}</Text>
                                </View>

                            </TouchableOpacity>
                            </>
                        )
                        
                    }
                })
            }
            
           
        </>

    )
}