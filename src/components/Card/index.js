import { View, Text, Image } from 'react-native';
import { styles } from './style';


export default function Card({ book }) {
    console.log('livros listados: ', book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                    if (amount != undefined) {
                        return (
                            <View style={styles.container}>
                                <View style={styles.image}>
                                    <Image source={{uri: thumbnail}} style={styles.image1} resizeMode="contain"/>
                                </View>
                                <View style={styles.bottom}>
                                    <Text style={styles.title}>{item.volumeInfo.title}</Text>
                                    <Text style={styles.price}>R$ {amount}</Text>
                                </View>
    
                            </View>
                        )
                    }
                   
                })
            }

        </>

    )
}